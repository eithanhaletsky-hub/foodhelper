/* =========================================================
   חשבונות + מנויים — הדגמה (Demo)
   ⚠️ זו הדגמה: המשתמשים והמנויים נשמרים בדפדפן (localStorage),
   אין תשלום אמיתי ואין אבטחה אמיתית. הכול מאחורי שכבת הפשטה
   (Auth / Membership) כדי שיהיה קל להחליף בעתיד לשרת אמיתי
   (Firebase / Flask) + ספק סליקה אמיתי.

   מחירים (הדגמה): קורס בודד ₪1/חודש · מנוי Premium ₪2/חודש.
   ========================================================= */

const AUTH_USERS_KEY = "foodhelper_users";
const AUTH_SESSION_KEY = "foodhelper_session";

const Auth = {
  _all() {
    try { return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || {}; }
    catch (e) { return {}; }
  },
  _saveAll(users) { localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users)); },

  currentUser() {
    const email = localStorage.getItem(AUTH_SESSION_KEY);
    if (!email) return null;
    return this._all()[email] || null;
  },
  isLoggedIn() { return !!this.currentUser(); },

  register(name, email, pass) {
    name = (name || "").trim();
    email = (email || "").trim().toLowerCase();
    if (!name || !email || !pass) return { ok: false, error: "missing" };
    if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, error: "email" };
    if (pass.length < 4) return { ok: false, error: "short" };
    const users = this._all();
    if (users[email]) return { ok: false, error: "exists" };
    users[email] = { name, email, pass, courses: [], premium: false, joined: Date.now() };
    this._saveAll(users);
    localStorage.setItem(AUTH_SESSION_KEY, email);
    return { ok: true, user: users[email] };
  },

  login(email, pass) {
    email = (email || "").trim().toLowerCase();
    const users = this._all();
    const u = users[email];
    if (!u || u.pass !== pass) return { ok: false, error: "bad" };
    localStorage.setItem(AUTH_SESSION_KEY, email);
    return { ok: true, user: u };
  },

  logout() { localStorage.removeItem(AUTH_SESSION_KEY); },

  _update(mut) {
    const u = this.currentUser();
    if (!u) return false;
    const users = this._all();
    mut(users[u.email]);
    this._saveAll(users);
    return true;
  }
};

const Membership = {
  PRICE_COURSE: 1,   // ₪ לחודש לקורס בודד
  PRICE_PREMIUM: 2,  // ₪ לחודש למנוי Premium

  hasPremium() { const u = Auth.currentUser(); return !!(u && u.premium); },
  hasCourse(planKey) {
    const u = Auth.currentUser();
    return !!(u && (u.premium || (u.courses || []).includes(planKey)));
  },
  buyCourse(planKey) {
    return Auth._update(u => { if (!u.courses.includes(planKey)) u.courses.push(planKey); });
  },
  buyPremium() { return Auth._update(u => { u.premium = true; }); },
  cancelPremium() { return Auth._update(u => { u.premium = false; }); }
};

/* מתכוני "ספיישל" — נעולים למנויי Premium בלבד (₪2/חודש) */
const PREMIUM_RECIPE_IDS = new Set([
  "dessert-creme-brulee", "dessert-lemon-tart", "dessert-baklava", "dessert-pavlova", "dessert-profiteroles",
  "cookie-macaron", "cookie-alfajores", "cookie-florentine", "cookie-rugelach",
  "cake-birthday-layer", "cake-flourless-chocolate",
  "bread-sourdough", "bread-croissant", "bread-brioche", "bread-challah",
  "savory-quiche-lorraine", "savory-onion-tart", "savory-malawach", "savory-lahmajun",
  "main-beef-stew", "main-pad-thai", "main-curry-chicken",
  "pasta-gnocchi", "pasta-lasagna"
]);

function isPremiumRecipe(id) { return PREMIUM_RECIPE_IDS.has(id); }
function hasRecipeAccess(id) { return !isPremiumRecipe(id) || Membership.hasPremium(); }

window.Auth = Auth;
window.Membership = Membership;
window.PREMIUM_RECIPE_IDS = PREMIUM_RECIPE_IDS;
window.isPremiumRecipe = isPremiumRecipe;
window.hasRecipeAccess = hasRecipeAccess;
