/* =========================================================
   לוגיקת האפליקציה: ניווט, מתכונים, קורסים
   ========================================================= */

/* ---------- שפה (i18n) — תמיכה ב-5 שפות ----------
   עברית (he) היא שפת המקור (בקוד/בנתונים). שאר השפות יושבות ב-L[lang]
   ובחלק UI[lang]. כל מחרוזת שלא תורגמה נופלת חזרה לאנגלית ואז לעברית. */
const LANGS = ["he", "en", "fr", "ru", "es"];
let lang = localStorage.getItem("foodhelper_lang") || "he";
if (!LANGS.includes(lang)) lang = "he";

function isRtl() { return lang === "he"; }
function t(key, ...args) {
  let v = UI[lang] && UI[lang][key];
  if (v == null) v = UI.en[key];
  if (v == null) v = UI.he[key];
  return typeof v === "function" ? v(...args) : v;
}
// שליפת ערך מתורגם מ-L עם נפילה לאנגלית
function Lget(kind, key) {
  const cur = window.L && L[lang] && L[lang][kind];
  if (cur && cur[key] != null) return cur[key];
  const en = window.L && L.en && L.en[kind];
  return (en && en[key] != null) ? en[key] : undefined;
}
function recipeName(r)  { return lang === "he" ? r.name : (Lget("recipe", r.id) || r.name); }
function catLabel(c)    { return lang === "he" ? c.label : (Lget("cat", c.id) || c.label); }
function cityName(city) { return lang === "he" ? city.label : (Lget("city", city.id) || city.label); }
function diffLabel(d)   { return lang === "he" ? d : ((UI[lang] && UI[lang].diff && UI[lang].diff[d]) || UI.en.diff[d] || d); }
function dimLabel(k)    { return lang === "he" ? DIM_LABELS[k].label : (Lget("dim", k) || DIM_LABELS[k].label); }
function levelNote(id)  { return lang === "he" ? (LEVEL_NOTES[id] || "") : (Lget("levelNote", id) || ""); }
function levelInfo(lv)  { return lang === "he" ? { title: lv.title, desc: lv.desc } : (Lget("level", lv.id) || LEVEL_EN[lv.id]); }
function planText(key)  { return lang === "he" ? PLANS[key] : (Lget("plans", key) || PLANS_EN[key]); }
function quizData(i)    { return lang === "he" ? { q: QUESTIONS[i].q, a: QUESTIONS[i].answers.map(x => x.text) } : (Lget("quiz", i) || QUIZ_EN[i]); }
function restFields(cityId, r) {
  if (lang === "he") return { cuisine: r.cuisine, desc: r.desc };
  const e = Lget("rest", cityId + "|" + r.name);
  return { cuisine: e ? e.c : r.cuisine, desc: e ? e.d : r.desc };
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl() ? "rtl" : "ltr";
  document.body.dir = isRtl() ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  const sel = document.getElementById("lang-select");
  if (sel) sel.value = lang;

  // בנייה מחדש של תוכן דינמי בשפה הנוכחית
  renderAuthArea();
  buildCategoryFilters();
  renderRecipes();
  buildLevels();
  renderSavedCourse();
  buildCitySelect();
  if (activeCity) {
    const btn = Array.from(document.querySelectorAll("#city-select .city-btn"))
      .find(b => b.dataset.city === activeCity);
    if (btn) btn.classList.add("active");
    document.getElementById("restaurants-controls").classList.remove("hidden");
    renderRestaurants();
  }
  if (!document.getElementById("course-quiz").classList.contains("hidden")) renderQuestion();
  if (!document.getElementById("course-result").classList.contains("hidden") && course.level) showResult();
}

function setLang(l) {
  if (!LANGS.includes(l)) return;
  lang = l;
  localStorage.setItem("foodhelper_lang", lang);
  applyLang();
}

/* ---------- ניווט בין עמודים ---------- */
function showView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const btn = document.querySelector(`.nav-btn[data-view="${name}"]`);
  if (btn) btn.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ========================================================
   מתכונים
   ======================================================== */
let activeCategory = "all";
let searchTerm = "";

/* ---- מועדפים (נשמרים בדפדפן דרך localStorage) ---- */
const FAV_KEY = "foodhelper_favorites";

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch (e) { return []; }
}
function isFavorite(id) { return getFavorites().includes(id); }
function toggleFavorite(id) {
  const favs = getFavorites();
  const i = favs.indexOf(id);
  if (i === -1) favs.push(id); else favs.splice(i, 1);
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  updateFavCount();
}
function updateFavCount() {
  const btn = document.getElementById("fav-chip");
  if (btn) btn.textContent = `${t("favChip")} (${getFavorites().length})`;
}

function buildCategoryFilters() {
  const wrap = document.getElementById("category-filters");
  wrap.innerHTML = "";
  const all = document.createElement("button");
  all.className = "chip" + (activeCategory === "all" ? " active" : "");
  all.textContent = t("filterAll");
  all.onclick = () => setCategory("all", all);
  wrap.appendChild(all);

  const fav = document.createElement("button");
  fav.className = "chip chip-fav" + (activeCategory === "favorites" ? " active" : "");
  fav.id = "fav-chip";
  fav.textContent = `${t("favChip")} (${getFavorites().length})`;
  fav.onclick = () => setCategory("favorites", fav);
  wrap.appendChild(fav);

  CATEGORIES.forEach(cat => {
    const b = document.createElement("button");
    b.className = "chip" + (activeCategory === cat.id ? " active" : "");
    b.textContent = `${cat.emoji} ${catLabel(cat)}`;
    b.onclick = () => setCategory(cat.id, b);
    wrap.appendChild(b);
  });
}

function setCategory(id, btn) {
  activeCategory = id;
  document.querySelectorAll("#category-filters .chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  renderRecipes();
}

function difficultyClass(d) {
  if (d === "קל") return "diff-easy";
  if (d === "בינוני") return "diff-medium";
  return "diff-hard";
}

/* ---- "תמונות" למתכונים: אמוג'י ספציפי לפי שם המתכון ---- */
const EMOJI_RULES = [
  ["עוגת גבינה", "🍰"], ["טירמיסו", "☕"], ["קפה", "☕"],
  ["שוקולד", "🍫"], ["בראוניז", "🍫"], ["טראפלס", "🍫"],
  ["לימון", "🍋"], ["תפוז", "🍊"], ["מנגו", "🥭"], ["בננה", "🍌"],
  ["תות", "🍓"], ["אוכמניות", "🫐"], ["פירות יער", "🫐"], ["אבטיח", "🍉"],
  ["תפוח", "🍎"], ["אגס", "🍐"], ["תמרים", "🍯"], ["דבש", "🍯"], ["בקלווה", "🍯"],
  ["קוקוסיות", "🥥"], ["קוקוס", "🥥"], ["פבלובה", "🍨"], ["גלידת", "🍨"], ["גלידה", "🍨"],
  ["מלבי", "🍮"], ["פודינג", "🍮"], ["קרם קרמל", "🍮"], ["ברולה", "🍮"], ["פאנה קוטה", "🍮"],
  ["פיצה", "🍕"], ["קלצונה", "🍕"],
  ["המבורגר", "🍔"], ["שווארמה", "🌯"], ["בקר", "🥩"], ["סטייק", "🥩"], ["גולש", "🥩"],
  ["עוף", "🍗"], ["פרגיות", "🍗"], ["שניצל", "🍗"],
  ["סלמון", "🐟"], ["טונה", "🐟"], ["דג", "🐟"], ["דגים", "🐟"],
  ["גזר", "🥕"], ["דלעת", "🎃"], ["בטטה", "🍠"], ["תירס", "🌽"], ["פטריות", "🍄"],
  ["חציל", "🍆"], ["אבוקדו", "🥑"], ["עגבני", "🍅"], ["שרי", "🍅"], ["פומודורו", "🍅"],
  ["תרד", "🥬"], ["ברוקולי", "🥦"], ["כרוב", "🥬"], ["קישוא", "🥒"], ["זית", "🫒"],
  ["חומוס", "🧆"], ["סביח", "🧆"], ["עדשים", "🫘"], ["שעועית", "🫘"], ["אפונה", "🫘"],
  ["באגט", "🥖"], ["גריסיני", "🥖"], ["לחמניות", "🥖"],
  ["פיתות", "🫓"], ["לאפה", "🫓"], ["נאן", "🫓"], ["מלאווח", "🫓"], ["מנקושה", "🫓"], ["לחמעג'ון", "🫓"],
  ["בייגל", "🥯"], ["קרואסון", "🥐"], ["בריוש", "🥐"], ["שנקן", "🥐"], ["קינמון", "🥐"], ["פרצל", "🥨"],
  ["פנקייק", "🥞"], ["קרפ", "🥞"], ["וופל", "🧇"], ["לביבות", "🥞"], ["סירניקי", "🥞"],
  ["ביצים", "🍳"], ["חביתה", "🍳"], ["שקשוקה", "🍳"], ["פריטטה", "🍳"],
  ["טוסט", "🥪"], ["כריך", "🥪"],
  ["אורז", "🍚"], ["קוסקוס", "🍚"], ["מג'דרה", "🍚"],
  ["אטריות", "🍜"], ["פאד תאי", "🍜"], ["מוקפץ", "🥡"], ["קארי", "🍛"],
  ["שייק", "🥤"], ["סמות'י", "🥤"], ["יוגורט", "🥛"], ["צ'יה", "🥛"],
  ["קיש", "🥧"], ["טארט", "🥧"], ["פשטיד", "🥧"], ["קראמבל", "🥧"],
  ["בורקס", "🥟"], ["סמבוסק", "🥟"], ["אמפנדס", "🥟"], ["מגולגלים", "🥟"], ["נקניקיות", "🌭"],
  ["גבינה", "🧀"], ["גרנולה", "🥣"], ["שיבולת שועל", "🥣"], ["קורנפלקס", "🥣"],
  ["מקרונים", "🌈"], ["קאפקייקס", "🧁"], ["פחזניות", "🧁"], ["יום הולדת", "🎂"]
];

const CAT_HUES = {
  desserts: 330, cakes: 25, cookies: 42, breads: 35, savory: 15,
  mains: 5, pasta: 48, salads: 125, soups: 18, breakfast: 52
};

function recipeEmoji(r) {
  for (const [kw, emoji] of EMOJI_RULES) {
    if (r.name.includes(kw)) return emoji;
  }
  const cat = CATEGORIES.find(c => c.id === r.category);
  return cat ? cat.emoji : "🍽️";
}

function headerStyle(r) {
  const h = CAT_HUES[r.category] || 30;
  return `background:linear-gradient(135deg, hsla(${h},85%,62%,.16), hsla(${h},85%,48%,.32))`;
}

function renderRecipes() {
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = "";

  const filtered = RECIPES.filter(r => {
    const catOk = activeCategory === "all"
      || (activeCategory === "favorites" ? isFavorite(r.id) : r.category === activeCategory);
    const searchOk = !searchTerm ||
      r.name.includes(searchTerm) ||
      r.ingredients.some(i => i.includes(searchTerm));
    return catOk && searchOk;
  });

  document.getElementById("recipe-count").textContent =
    `${filtered.length} ${t("recipesCount")}`;

  if (filtered.length === 0) {
    const msg = activeCategory === "favorites" ? t("emptyFav") : t("emptyRecipes");
    grid.innerHTML = `<p class="empty">${msg}</p>`;
    return;
  }

  filtered.forEach(r => {
    const cat = CATEGORIES.find(c => c.id === r.category);
    const fav = isFavorite(r.id);
    const prem = isPremiumRecipe(r.id);
    const locked = prem && !hasRecipeAccess(r.id);
    const card = document.createElement("div");
    card.className = "recipe-card" + (locked ? " locked" : "");
    card.onclick = () => openRecipe(r.id);
    card.innerHTML = `
      <div class="recipe-emoji" style="${headerStyle(r)}">
        <span class="dish">${recipeEmoji(r)}</span>
        ${locked ? `<span class="lock-overlay">🔒</span>` : ""}
        <button class="fav-btn ${fav ? "on" : ""}" title="${t("addFav")}" data-id="${r.id}">${fav ? "❤️" : "🤍"}</button>
      </div>
      <div class="recipe-body">
        <h3>${recipeName(r)}</h3>
        <div class="recipe-meta">
          <span class="tag ${difficultyClass(r.difficulty)}">${diffLabel(r.difficulty)}</span>
          <span class="tag">⏱️ ${r.time} ${t("min")}</span>
          <span class="tag">👥 ${r.servings}</span>
        </div>
        <div class="recipe-foot">
          <span class="recipe-cat">${cat ? catLabel(cat) : ""}</span>
          ${prem ? `<span class="premium-badge">⭐ ${t("premiumTag")}</span>` : ""}
        </div>
      </div>`;
    const favBtn = card.querySelector(".fav-btn");
    favBtn.onclick = (e) => {
      e.stopPropagation();
      toggleFavorite(r.id);
      renderRecipes();
    };
    grid.appendChild(card);
  });
}

function openRecipe(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  const cat = CATEGORIES.find(c => c.id === r.category);
  const modal = document.getElementById("recipe-modal");
  currentRecipeId = id;

  // מתכון מיוחד נעול → מסך תשלום
  if (isPremiumRecipe(id) && !hasRecipeAccess(id)) {
    document.getElementById("modal-content").innerHTML = `
      <button class="modal-close" onclick="closeRecipe()">✕</button>
      <div class="modal-header">
        <div class="modal-hero locked-hero" style="${headerStyle(r)}"><span class="dish dish-lg">🔒</span></div>
        <h2>${recipeName(r)}</h2>
        <p class="paywall-badge">${t("lockedRecipeTitle")}</p>
      </div>
      <div class="paywall">
        <p class="paywall-text">${t("lockedRecipeText")}</p>
        <button class="btn-primary" id="mc-unlock">${t("unlockAllBtn")}</button>
        ${Auth.isLoggedIn() ? "" : `<p class="paywall-login">${t("loginToBuy")}</p>`}
        <p class="demo-note">${t("demoChargeNote")}</p>
      </div>`;
    document.getElementById("mc-unlock").onclick = buyPremiumFlow;
    modal.classList.add("open");
    return;
  }

  document.getElementById("modal-content").innerHTML = `
    <button class="modal-close" onclick="closeRecipe()">✕</button>
    <div class="modal-header">
      <div class="modal-hero" style="${headerStyle(r)}"><span class="dish dish-lg">${recipeEmoji(r)}</span></div>
      <h2>${recipeName(r)}</h2>
      <div class="recipe-meta">
        <span class="tag ${difficultyClass(r.difficulty)}">${diffLabel(r.difficulty)}</span>
        <span class="tag">⏱️ ${r.time} ${t("min")}</span>
        <span class="tag">👥 ${r.servings} ${t("servings")}</span>
        <span class="tag">${cat ? cat.emoji + " " + catLabel(cat) : ""}</span>
      </div>
      <div class="modal-actions">
        <button class="modal-fav" id="modal-fav-btn">${isFavorite(r.id) ? t("inFav") : t("addFav")}</button>
        <button class="modal-print" id="modal-print-btn">${t("print")}</button>
      </div>
    </div>
    <div class="modal-cols">
      <div>
        <h4>${t("ingredients")}</h4>
        <ul class="ingredients" dir="rtl">${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>${t("steps")}</h4>
        <ol class="steps" dir="rtl">${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      </div>
    </div>`;
  const mfav = document.getElementById("modal-fav-btn");
  mfav.onclick = () => {
    toggleFavorite(r.id);
    mfav.textContent = isFavorite(r.id) ? t("inFav") : t("addFav");
    mfav.classList.toggle("on", isFavorite(r.id));
    renderRecipes();
  };
  mfav.classList.toggle("on", isFavorite(r.id));
  document.getElementById("modal-print-btn").onclick = printRecipe;
  modal.classList.add("open");
}

/* הדפסת מתכון — מדפיסה רק את תוכן החלון הפתוח */
function printRecipe() {
  document.body.classList.add("print-recipe");
  window.print();
  document.body.classList.remove("print-recipe");
}
window.addEventListener("afterprint", () => document.body.classList.remove("print-recipe"));

function closeRecipe() {
  document.getElementById("recipe-modal").classList.remove("open");
}

/* ========================================================
   קורסים / חידון
   ======================================================== */
const course = { level: null, current: 0, history: [], scores: { practice: 0, technique: 0, creative: 0, speed: 0, world: 0, healthy: 0 } };

function buildLevels() {
  const wrap = document.getElementById("levels");
  wrap.innerHTML = "";
  LEVELS.forEach(lv => {
    const info = levelInfo(lv);
    const b = document.createElement("button");
    b.className = "level-card";
    b.innerHTML = `
      <span class="level-emoji">${lv.emoji}</span>
      <span class="level-title">${info.title}</span>
      <span class="level-desc">${info.desc}</span>`;
    b.onclick = () => selectLevel(lv.id);
    wrap.appendChild(b);
  });
}

function selectLevel(id) {
  course.level = id;
  course.current = 0;
  course.history = [];
  course.scores = { practice: 0, technique: 0, creative: 0, speed: 0, world: 0, healthy: 0 };
  document.getElementById("course-intro").classList.add("hidden");
  document.getElementById("course-quiz").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const total = QUESTIONS.length;
  const qd = quizData(course.current);
  document.getElementById("quiz-progress").style.width =
    `${(course.current / total) * 100}%`;
  document.getElementById("quiz-step").textContent = t("quizStep", course.current + 1, total);
  document.getElementById("quiz-question").textContent = qd.q;

  const box = document.getElementById("quiz-answers");
  box.innerHTML = "";
  QUESTIONS[course.current].answers.forEach((a, idx) => {
    const b = document.createElement("button");
    b.className = "answer-btn";
    b.textContent = qd.a[idx];
    b.onclick = () => answer(a);
    box.appendChild(b);
  });

  // כפתור חזרה — מוצג רק אחרי השאלה הראשונה
  document.getElementById("quiz-back").classList.toggle("hidden", course.current === 0);
}

function answer(a) {
  for (const key in a.scores) course.scores[key] += a.scores[key];
  course.history.push(a);
  course.current++;
  if (course.current < QUESTIONS.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (course.current === 0) return;
  const prev = course.history.pop();
  for (const key in prev.scores) course.scores[key] -= prev.scores[key];
  course.current--;
  renderQuestion();
}

const DIM_LABELS = {
  practice:  { emoji: "🌱", label: "יסודות" },
  technique: { emoji: "🔬", label: "טכניקה" },
  creative:  { emoji: "🎨", label: "יצירתיות" },
  speed:     { emoji: "⚡", label: "מהירות" },
  world:     { emoji: "🌍", label: "מטבחי העולם" },
  healthy:   { emoji: "🥗", label: "בריא" }
};

/* התקדמות בקורס — נשמרת בדפדפן לפי מפתח התוכנית */
const PROG_KEY = "foodhelper_course_progress";
function getProgress(planKey) {
  try { return (JSON.parse(localStorage.getItem(PROG_KEY)) || {})[planKey] || []; }
  catch (e) { return []; }
}
function setWeekDone(planKey, i, done) {
  let all;
  try { all = JSON.parse(localStorage.getItem(PROG_KEY)) || {}; } catch (e) { all = {}; }
  const arr = all[planKey] || [];
  arr[i] = done;
  all[planKey] = arr;
  localStorage.setItem(PROG_KEY, JSON.stringify(all));
}

function showResult() {
  // מדרגים את כל המסלולים לפי ניקוד — מנצח + מקום שני
  const ranked = Object.keys(course.scores).sort((a, b) => course.scores[b] - course.scores[a]);
  const best = ranked[0];
  const runnerUp = ranked[1];
  const planKey = best;
  const plan = planText(best);          // טקסטים בשפה הנוכחית
  const emoji = PLANS[best].emoji;      // אימוג'י תמיד מה-DATA
  const lv = LEVELS.find(l => l.id === course.level);

  const maxScore = Math.max(...Object.values(course.scores), 1);

  const profileHtml = Object.keys(DIM_LABELS).map(k => {
    const pct = Math.round((course.scores[k] / maxScore) * 100);
    return `
      <div class="profile-row ${k === best ? "top" : ""}">
        <span class="profile-name">${DIM_LABELS[k].emoji} ${dimLabel(k)}</span>
        <span class="profile-track"><span class="profile-fill" style="width:${pct}%"></span></span>
      </div>`;
  }).join("");

  const prog = getProgress(planKey);
  const stripWeek = s => s.replace(/^(שבוע|Week)\s*\d+\s*—\s*/, "");

  const weeksHtml = plan.weeks.map((w, i) => `
    <div class="week-card ${prog[i] ? "done" : ""}" data-week="${i}">
      <div class="week-head">
        <div class="week-num">${t("week")} ${i + 1}</div>
        <label class="week-check">
          <input type="checkbox" data-week="${i}" ${prog[i] ? "checked" : ""}> ${t("done")}
        </label>
      </div>
      <h5>${stripWeek(w.title)}</h5>
      <p class="week-goal">${t("goal")} ${w.goal}</p>
      <span class="week-skill">${t("skill")} ${w.skill}</span>
      <p class="week-explain">${w.explain}</p>
      <p class="week-mistake">${t("mistake")} ${w.mistake}</p>
      <p class="week-practice">${t("practice")} <span>${w.practice}</span></p>
      <p class="week-challenge">${t("challenge")} ${plan.challenges[i]}</p>
    </div>`).join("");

  const conceptsHtml = plan.concepts.map(c => `
    <div class="concept">
      <span class="concept-term">${c.term}</span>
      <span class="concept-explain">${c.explain}</span>
    </div>`).join("");

  const outcomesHtml = plan.outcomes.map(o => `<li>${o}</li>`).join("");
  const toolsHtml = (plan.tools || []).map(tool => `<span class="tool-chip">🔧 ${tool}</span>`).join("");
  const tipsHtml = plan.tips.map(tip => `<li>${tip}</li>`).join("");
  const runnerPlan = planText(runnerUp);
  const runnerEmoji = PLANS[runnerUp].emoji;

  const locked = !Membership.hasCourse(best);

  const detailHtml = locked ? `
      <div class="paywall course-paywall">
        <p class="paywall-badge">${t("lockedCourseTitle")}</p>
        <p class="paywall-text">${t("lockedCourseText")}</p>
        <div class="paywall-actions">
          <button class="btn-primary" id="cr-buy">${t("buyCourseBtn")}</button>
          <button class="btn-secondary" id="cr-premium">${t("unlockAllBtn")}</button>
        </div>
        ${Auth.isLoggedIn() ? "" : `<p class="paywall-login">${t("loginToBuy")}</p>`}
        <p class="demo-note">${t("demoChargeNote")}</p>
      </div>
      <button class="btn-secondary" onclick="restartCourse()">${t("restart")}</button>
    ` : `
      <h4>${t("outcomesTitle")}</h4>
      <ul class="outcomes">${outcomesHtml}</ul>

      ${toolsHtml ? `<h4>${t("toolsTitle")}</h4><div class="tools">${toolsHtml}</div>` : ""}

      <h4>${t("weeksTitle")}</h4>
      <div class="course-progress">
        <div class="course-progress-track"><div id="course-progress-fill"></div></div>
        <span id="course-progress-text"></span>
      </div>
      <div id="course-complete" class="complete-banner hidden">${t("complete")}</div>
      <div class="weeks-grid">${weeksHtml}</div>

      <h4>${t("conceptsTitle")}</h4>
      <div class="concepts">${conceptsHtml}</div>

      <h4>${t("tipsTitle")}</h4>
      <ul class="plan-tips">${tipsHtml}</ul>

      <p class="result-next">➡️ ${plan.next}</p>
      <button class="btn-primary" onclick="restartCourse()">${t("restart")}</button>
    `;

  document.getElementById("course-quiz").classList.add("hidden");
  const res = document.getElementById("course-result");
  res.classList.remove("hidden");

  // שומרים את התוצאה כדי לאפשר "המשך מאיפה שהפסקת"
  localStorage.setItem("foodhelper_course_last", JSON.stringify({ level: course.level, scores: course.scores }));

  res.innerHTML = `
    <div class="result-card">
      <div class="result-badge">${emoji}</div>
      <p class="result-level">${lv.emoji} ${t("levelLabel")}: ${levelInfo(lv).title}</p>
      <h2>${plan.title}</h2>
      <p class="result-tagline">${plan.tagline}</p>
      ${plan.meta ? `<p class="result-meta">📋 ${plan.meta}</p>` : ""}

      <div class="profile-box">
        <h4 class="profile-title">${t("profileTitle")}</h4>
        ${profileHtml}
        <p class="runner-up">${t("secondary")}: ${runnerEmoji} ${runnerPlan.title}</p>
      </div>

      <p class="level-note">💬 ${levelNote(course.level)}</p>

      <p class="result-intro">${plan.intro}</p>

      ${detailHtml}
    </div>`;

  if (!locked) {
    // חיווט צ'קבוקסים של התקדמות
    res.querySelectorAll(".week-check input").forEach(cb => {
      cb.addEventListener("change", () => {
        const i = parseInt(cb.dataset.week, 10);
        setWeekDone(planKey, i, cb.checked);
        cb.closest(".week-card").classList.toggle("done", cb.checked);
        updateCourseProgress(planKey);
      });
    });
    updateCourseProgress(planKey);
  } else {
    document.getElementById("cr-buy").onclick = () => buyCourseFlow(best);
    document.getElementById("cr-premium").onclick = buyPremiumFlow;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* עדכון פס ההתקדמות הכללי + חגיגת סיום */
function updateCourseProgress(planKey) {
  const total = PLANS[planKey].weeks.length;
  const done = getProgress(planKey).filter(Boolean).length;
  const fill = document.getElementById("course-progress-fill");
  const text = document.getElementById("course-progress-text");
  const banner = document.getElementById("course-complete");
  if (!fill) return;
  fill.style.width = `${(done / total) * 100}%`;
  text.textContent = t("weeksProgress", done, total);
  banner.classList.toggle("hidden", done < total);
}

/* באנר "המשך מאיפה שהפסקת" במסך הפתיחה של הקורסים */
function renderSavedCourse() {
  const box = document.getElementById("saved-course");
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("foodhelper_course_last")); } catch (e) {}
  if (!saved || !saved.level || !saved.scores) { box.classList.add("hidden"); return; }

  const ranked = Object.keys(saved.scores).sort((a, b) => saved.scores[b] - saved.scores[a]);
  const plan = PLANS[ranked[0]];
  const lv = LEVELS.find(l => l.id === saved.level);
  if (!plan || !lv) { box.classList.add("hidden"); return; }

  const done = getProgress(ranked[0]).filter(Boolean).length;
  box.classList.remove("hidden");
  box.innerHTML = `
    <div class="saved-inner">
      <span class="saved-text">${PLANS[ranked[0]].emoji} ${t("savedActive")} <strong>${planText(ranked[0]).title}</strong> (${lv.emoji} ${levelInfo(lv).title}) — ${t("savedDone", done)}</span>
      <div class="saved-actions">
        <button class="btn-primary btn-sm" id="resume-course">${t("resume")}</button>
        <button class="saved-clear" id="clear-course">${t("startOver")}</button>
      </div>
    </div>`;

  document.getElementById("resume-course").onclick = () => {
    course.level = saved.level;
    course.scores = saved.scores;
    document.getElementById("course-intro").classList.add("hidden");
    showResult();
  };
  document.getElementById("clear-course").onclick = () => {
    localStorage.removeItem("foodhelper_course_last");
    box.classList.add("hidden");
  };
}

function restartCourse() {
  document.getElementById("course-result").classList.add("hidden");
  document.getElementById("course-result").innerHTML = "";
  document.getElementById("course-intro").classList.remove("hidden");
  course.level = null;
  renderSavedCourse();
}

/* ========================================================
   מסעדות
   ======================================================== */
let activeCity = null;

function buildCitySelect() {
  const wrap = document.getElementById("city-select");
  wrap.innerHTML = "";

  const addGroup = (labelKey, cities) => {
    const head = document.createElement("h3");
    head.className = "city-group-head";
    head.textContent = t(labelKey);
    wrap.appendChild(head);
    const grid = document.createElement("div");
    grid.className = "city-grid";
    cities.forEach(city => {
      const b = document.createElement("button");
      b.className = "city-btn" + (city.id === activeCity ? " active" : "");
      b.dataset.city = city.id;
      const count = (RESTAURANTS[city.id] || []).length;
      b.innerHTML = `<span class="city-emoji">${city.emoji}</span>
        <span class="city-name">${cityName(city)}</span>
        <span class="city-count">${count} ${t("restCount")}</span>`;
      b.onclick = () => selectCity(city.id, b);
      grid.appendChild(b);
    });
    wrap.appendChild(grid);
  };

  addGroup("inIsrael", CITIES.filter(c => !c.abroad));
  addGroup("abroadHead", CITIES.filter(c => c.abroad));
}

function selectCity(id, btn) {
  activeCity = id;
  document.querySelectorAll("#city-select .city-btn").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("restaurants-controls").classList.remove("hidden");
  renderRestaurants();
}

function renderRestaurants() {
  const list = document.getElementById("restaurant-list");
  list.innerHTML = "";
  if (!activeCity) return;

  const kosherOnly = document.getElementById("kosher-only").checked;
  const all = RESTAURANTS[activeCity] || [];
  const items = kosherOnly ? all.filter(r => r.kosher) : all;

  document.getElementById("restaurant-count").textContent = `${items.length} ${t("restCount")}`;

  if (items.length === 0) {
    list.innerHTML = `<p class="empty">${t("emptyKosher")}</p>`;
    return;
  }

  const city = CITIES.find(c => c.id === activeCity) || {};
  // לחיפוש במפות: עברית לעיר בישראל, אנגלית לעיר בחו״ל
  const qCity = city.abroad ? (CITY_EN[city.id] || "") : (city.label || "");

  items.forEach(r => {
    const dest = encodeURIComponent(`${r.name}, ${qCity}`);
    let mapsUrl, wazeUrl;
    if (city.abroad) {
      // בחו״ל: גוגל מפות מתווה מסלול משדה התעופה; Waze מנווט ליעד (מהמיקום הנוכחי — שדה התעופה)
      const origin = encodeURIComponent(city.airport || qCity);
      mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
      wazeUrl = `https://waze.com/ul?q=${dest}&navigate=yes`;
    } else {
      const q = encodeURIComponent(`${r.name} ${qCity}`);
      mapsUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;
      wazeUrl = `https://waze.com/ul?q=${q}&navigate=yes`;
    }
    const f = restFields(activeCity, r);
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <div class="rest-top">
        <h3>${r.name}</h3>
        ${r.kosher ? `<span class="kosher-badge">${t("kosherBadge")}</span>` : ""}
      </div>
      <span class="rest-cuisine">🍽️ ${f.cuisine}</span>
      <p class="rest-desc">${f.desc}</p>
      ${city.abroad ? `<p class="rest-airport">${t("fromAirport", city.airport)}</p>` : ""}
      <div class="rest-links">
        <a class="map-link waze" href="${wazeUrl}" target="_blank" rel="noopener">${t("waze")}</a>
        <a class="map-link gmaps" href="${mapsUrl}" target="_blank" rel="noopener">${t("gmaps")}</a>
      </div>`;
    list.appendChild(card);
  });
}

/* ========================================================
   חשבונות / מנויים — ממשק (הדגמה)
   ======================================================== */
let pendingAction = null;   // פעולה שתופעל אחרי התחברות
let currentRecipeId = null; // מתכון פתוח כרגע (לרענון אחרי רכישה)
const ERR_KEY = { missing: "errMissing", email: "errEmail", short: "errShort", exists: "errExists", bad: "errBad" };

function openAppModal(html) {
  document.getElementById("app-modal-content").innerHTML = html;
  document.getElementById("app-modal").classList.add("open");
}
function closeAppModal() { document.getElementById("app-modal").classList.remove("open"); }

function toast(msg) {
  let el = document.getElementById("toast");
  if (!el) { el = document.createElement("div"); el.id = "toast"; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2600);
}

function renderAuthArea() {
  const wrap = document.getElementById("auth-area");
  const u = Auth.currentUser();
  if (!u) {
    wrap.innerHTML = `<button class="auth-btn" id="btn-signin">👤 ${t("signIn")}</button>`;
    document.getElementById("btn-signin").onclick = () => openAuthModal("login");
  } else {
    wrap.innerHTML = `<button class="auth-btn" id="btn-account">${Membership.hasPremium() ? "⭐ " : "👤 "}${t("greeting", u.name)}</button>`;
    document.getElementById("btn-account").onclick = openAccountModal;
  }
}

function requireLogin(action) {
  if (Auth.isLoggedIn()) action();
  else { pendingAction = action; openAuthModal("login"); }
}

function openAuthModal(mode) {
  const isReg = mode === "register";
  openAppModal(`
    <button class="modal-close" onclick="closeAppModal()">✕</button>
    <div class="auth-box">
      <h2>${isReg ? t("authRegisterTitle") : t("authLoginTitle")}</h2>
      <div class="auth-fields">
        ${isReg ? `<input id="au-name" class="auth-input" placeholder="${t("fName")}">` : ""}
        <input id="au-email" class="auth-input" type="email" placeholder="${t("fEmail")}">
        <input id="au-pass" class="auth-input" type="password" placeholder="${t("fPass")}">
      </div>
      <p class="auth-demo-note">${t("demoPassNote")}</p>
      <p class="auth-error hidden" id="au-error"></p>
      <button class="btn-primary" id="au-submit">${isReg ? t("doRegister") : t("doLogin")}</button>
      <button class="auth-switch" id="au-switch">${isReg ? t("toLogin") : t("toRegister")}</button>
    </div>`);
  document.getElementById("au-switch").onclick = () => openAuthModal(isReg ? "login" : "register");
  document.getElementById("au-submit").onclick = () => {
    const email = document.getElementById("au-email").value;
    const pass = document.getElementById("au-pass").value;
    const res = isReg
      ? Auth.register(document.getElementById("au-name").value, email, pass)
      : Auth.login(email, pass);
    if (!res.ok) {
      const e = document.getElementById("au-error");
      e.textContent = t(ERR_KEY[res.error] || "errBad");
      e.classList.remove("hidden");
      return;
    }
    closeAppModal();
    renderAuthArea();
    renderRecipes();
    const a = pendingAction; pendingAction = null;
    if (a) a();
  };
}

function pricingHtml() {
  return `<div class="pricing">
    <div class="tier"><h5>${t("tierFreeName")}</h5><p class="tier-price">₪0</p><p class="tier-desc">${t("tierFreeDesc")}</p></div>
    <div class="tier"><h5>${t("tierCourseName")}</h5><p class="tier-price">₪1<span>${t("perMonth")}</span></p><p class="tier-desc">${t("tierCourseDesc")}</p></div>
    <div class="tier tier-hl"><h5>${t("tierPremiumName")} ⭐</h5><p class="tier-price">₪2<span>${t("perMonth")}</span></p><p class="tier-desc">${t("tierPremiumDesc")}</p></div>
  </div>`;
}

function openAccountModal() {
  const u = Auth.currentUser();
  if (!u) { openAuthModal("login"); return; }
  const premium = Membership.hasPremium();
  const courseList = (u.courses && u.courses.length)
    ? u.courses.map(k => `<li>${PLANS[k].emoji} ${planText(k).title}</li>`).join("")
    : `<li class="muted">${t("noCoursesYet")}</li>`;
  openAppModal(`
    <button class="modal-close" onclick="closeAppModal()">✕</button>
    <div class="account-box">
      <h2>${t("accountTitle")}</h2>
      <p class="account-name">${u.name} · ${u.email}</p>
      <p class="account-status">${t("statusLabel")}: <span class="${premium ? "badge-premium" : "badge-free"}">${premium ? t("statusPremium") : t("statusFree")}</span></p>
      ${premium
        ? `<p class="premium-active">${t("premiumActiveMsg")}</p>
           <button class="auth-switch" id="ac-cancel">${t("cancelPremiumBtn")}</button>`
        : `<h4>${t("yourCoursesLabel")}</h4><ul class="account-courses">${courseList}</ul>
           <button class="btn-primary" id="ac-premium">${t("buyPremiumBtn")}</button>
           <p class="demo-note">${t("demoChargeNote")}</p>`}
      <hr class="account-sep">
      <h4>${t("pricingTitle")}</h4>
      ${pricingHtml()}
      <button class="auth-switch" id="ac-logout">${t("logoutBtn")}</button>
    </div>`);
  const pr = document.getElementById("ac-premium");
  if (pr) pr.onclick = () => { Membership.buyPremium(); toast(t("purchasedOk")); openAccountModal(); renderAuthArea(); renderRecipes(); };
  const cc = document.getElementById("ac-cancel");
  if (cc) cc.onclick = () => { Membership.cancelPremium(); openAccountModal(); renderAuthArea(); renderRecipes(); };
  document.getElementById("ac-logout").onclick = () => { Auth.logout(); closeAppModal(); renderAuthArea(); renderRecipes(); };
}

function buyPremiumFlow() {
  requireLogin(() => {
    Membership.buyPremium();
    toast(t("purchasedOk"));
    renderAuthArea();
    renderRecipes();
    closeAppModal();
    if (currentRecipeId && document.getElementById("recipe-modal").classList.contains("open")) openRecipe(currentRecipeId);
    if (!document.getElementById("course-result").classList.contains("hidden")) showResult();
  });
}
function buyCourseFlow(planKey) {
  requireLogin(() => {
    Membership.buyCourse(planKey);
    toast(t("purchasedOk"));
    renderAuthArea();
    showResult();
  });
}

/* ========================================================
   אתחול
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyLang();   // בונה את כל התוכן בשפה הנוכחית + מכוון כיווניות

  document.getElementById("lang-select").addEventListener("change", e => setLang(e.target.value));
  document.getElementById("app-modal").addEventListener("click", e => {
    if (e.target.id === "app-modal") closeAppModal();
  });
  document.getElementById("quiz-back").addEventListener("click", goBack);

  document.getElementById("search").addEventListener("input", e => {
    searchTerm = e.target.value.trim();
    renderRecipes();
  });

  document.getElementById("kosher-only").addEventListener("change", renderRestaurants);

  document.querySelectorAll(".nav-btn").forEach(b => {
    b.addEventListener("click", () => showView(b.dataset.view));
  });

  document.getElementById("recipe-modal").addEventListener("click", e => {
    if (e.target.id === "recipe-modal") closeRecipe();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeRecipe(); closeAppModal(); }
  });
});
