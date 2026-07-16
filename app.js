/* =========================================================
   לוגיקת האפליקציה: ניווט, מתכונים, קורסים
   ========================================================= */

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
  if (btn) btn.textContent = `⭐ מועדפים (${getFavorites().length})`;
}

function buildCategoryFilters() {
  const wrap = document.getElementById("category-filters");
  const all = document.createElement("button");
  all.className = "chip active";
  all.textContent = "🍽️ הכול";
  all.onclick = () => setCategory("all", all);
  wrap.appendChild(all);

  const fav = document.createElement("button");
  fav.className = "chip chip-fav";
  fav.id = "fav-chip";
  fav.textContent = `⭐ מועדפים (${getFavorites().length})`;
  fav.onclick = () => setCategory("favorites", fav);
  wrap.appendChild(fav);

  CATEGORIES.forEach(cat => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = `${cat.emoji} ${cat.label}`;
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
    `${filtered.length} מתכונים`;

  if (filtered.length === 0) {
    const msg = activeCategory === "favorites"
      ? "עדיין לא סימנת מתכונים מועדפים ⭐ לחצו על הלב שבפינת כל מתכון."
      : "לא נמצאו מתכונים 🙁 נסו חיפוש אחר.";
    grid.innerHTML = `<p class="empty">${msg}</p>`;
    return;
  }

  filtered.forEach(r => {
    const cat = CATEGORIES.find(c => c.id === r.category);
    const fav = isFavorite(r.id);
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.onclick = () => openRecipe(r.id);
    card.innerHTML = `
      <div class="recipe-emoji" style="${headerStyle(r)}">
        <span class="dish">${recipeEmoji(r)}</span>
        <button class="fav-btn ${fav ? "on" : ""}" title="הוסף למועדפים" data-id="${r.id}">${fav ? "❤️" : "🤍"}</button>
      </div>
      <div class="recipe-body">
        <h3>${r.name}</h3>
        <div class="recipe-meta">
          <span class="tag ${difficultyClass(r.difficulty)}">${r.difficulty}</span>
          <span class="tag">⏱️ ${r.time} דק'</span>
          <span class="tag">👥 ${r.servings}</span>
        </div>
        <span class="recipe-cat">${cat ? cat.label : ""}</span>
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
  document.getElementById("modal-content").innerHTML = `
    <button class="modal-close" onclick="closeRecipe()">✕</button>
    <div class="modal-header">
      <div class="modal-hero" style="${headerStyle(r)}"><span class="dish dish-lg">${recipeEmoji(r)}</span></div>
      <h2>${r.name}</h2>
      <div class="recipe-meta">
        <span class="tag ${difficultyClass(r.difficulty)}">${r.difficulty}</span>
        <span class="tag">⏱️ ${r.time} דק'</span>
        <span class="tag">👥 ${r.servings} מנות</span>
        <span class="tag">${cat ? cat.emoji + " " + cat.label : ""}</span>
      </div>
      <div class="modal-actions">
        <button class="modal-fav" id="modal-fav-btn">${isFavorite(r.id) ? "❤️ במועדפים" : "🤍 הוסף למועדפים"}</button>
        <button class="modal-print" id="modal-print-btn">🖨️ הדפסת המתכון</button>
      </div>
    </div>
    <div class="modal-cols">
      <div>
        <h4>🧺 מרכיבים</h4>
        <ul class="ingredients">${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>👩‍🍳 אופן ההכנה</h4>
        <ol class="steps">${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      </div>
    </div>`;
  const mfav = document.getElementById("modal-fav-btn");
  mfav.onclick = () => {
    toggleFavorite(r.id);
    mfav.textContent = isFavorite(r.id) ? "❤️ במועדפים" : "🤍 הוסף למועדפים";
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
const course = { level: null, current: 0, history: [], scores: { practice: 0, technique: 0, creative: 0, speed: 0 } };

function buildLevels() {
  const wrap = document.getElementById("levels");
  LEVELS.forEach(lv => {
    const b = document.createElement("button");
    b.className = "level-card";
    b.innerHTML = `
      <span class="level-emoji">${lv.emoji}</span>
      <span class="level-title">${lv.title}</span>
      <span class="level-desc">${lv.desc}</span>`;
    b.onclick = () => selectLevel(lv.id);
    wrap.appendChild(b);
  });
}

function selectLevel(id) {
  course.level = id;
  course.current = 0;
  course.history = [];
  course.scores = { practice: 0, technique: 0, creative: 0, speed: 0 };
  document.getElementById("course-intro").classList.add("hidden");
  document.getElementById("course-quiz").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[course.current];
  const total = QUESTIONS.length;
  document.getElementById("quiz-progress").style.width =
    `${(course.current / total) * 100}%`;
  document.getElementById("quiz-step").textContent =
    `שאלה ${course.current + 1} מתוך ${total}`;
  document.getElementById("quiz-question").textContent = q.q;

  const box = document.getElementById("quiz-answers");
  box.innerHTML = "";
  q.answers.forEach(a => {
    const b = document.createElement("button");
    b.className = "answer-btn";
    b.textContent = a.text;
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
  speed:     { emoji: "⚡", label: "מהירות" }
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
  const plan = PLANS[best];
  const lv = LEVELS.find(l => l.id === course.level);

  const maxScore = Math.max(...Object.values(course.scores), 1);

  // גרף פרופיל — ארבעה ממדים
  const profileHtml = Object.keys(DIM_LABELS).map(k => {
    const pct = Math.round((course.scores[k] / maxScore) * 100);
    const d = DIM_LABELS[k];
    return `
      <div class="profile-row ${k === best ? "top" : ""}">
        <span class="profile-name">${d.emoji} ${d.label}</span>
        <span class="profile-track"><span class="profile-fill" style="width:${pct}%"></span></span>
      </div>`;
  }).join("");

  const prog = getProgress(planKey);

  const weeksHtml = plan.weeks.map((w, i) => `
    <div class="week-card ${prog[i] ? "done" : ""}" data-week="${i}">
      <div class="week-head">
        <div class="week-num">שבוע ${i + 1}</div>
        <label class="week-check">
          <input type="checkbox" data-week="${i}" ${prog[i] ? "checked" : ""}> סיימתי
        </label>
      </div>
      <h5>${w.title.replace(/^שבוע \d+ — /, "")}</h5>
      <p class="week-goal">🎯 ${w.goal}</p>
      <span class="week-skill">מיומנות: ${w.skill}</span>
      <p class="week-explain">${w.explain}</p>
      <p class="week-mistake">⚠️ טעות נפוצה: ${w.mistake}</p>
      <p class="week-practice">👩‍🍳 מתרגלים: <span>${w.practice}</span></p>
      <p class="week-challenge">🏆 אתגר בונוס: ${plan.challenges[i]}</p>
    </div>`).join("");

  const conceptsHtml = plan.concepts.map(c => `
    <div class="concept">
      <span class="concept-term">${c.term}</span>
      <span class="concept-explain">${c.explain}</span>
    </div>`).join("");

  const outcomesHtml = plan.outcomes.map(o => `<li>${o}</li>`).join("");
  const runnerPlan = PLANS[runnerUp];

  document.getElementById("course-quiz").classList.add("hidden");
  const res = document.getElementById("course-result");
  res.classList.remove("hidden");

  // שומרים את התוצאה כדי לאפשר "המשך מאיפה שהפסקת"
  localStorage.setItem("foodhelper_course_last", JSON.stringify({ level: course.level, scores: course.scores }));

  res.innerHTML = `
    <div class="result-card">
      <div class="result-badge">${plan.emoji}</div>
      <p class="result-level">${lv.emoji} רמה: ${lv.title}</p>
      <h2>${plan.title}</h2>
      <p class="result-tagline">${plan.tagline}</p>

      <div class="profile-box">
        <h4 class="profile-title">🧭 הפרופיל שלך</h4>
        ${profileHtml}
        <p class="runner-up">התאמה משנית: ${runnerPlan.emoji} ${runnerPlan.title}</p>
      </div>

      <p class="level-note">💬 ${LEVEL_NOTES[course.level]}</p>

      <p class="result-intro">${plan.intro}</p>

      <h4>🏁 בסוף התוכנית תוכלו…</h4>
      <ul class="outcomes">${outcomesHtml}</ul>

      <h4>📅 תוכנית 4 שבועות</h4>
      <div class="course-progress">
        <div class="course-progress-track"><div id="course-progress-fill"></div></div>
        <span id="course-progress-text"></span>
      </div>
      <div id="course-complete" class="complete-banner hidden">🎓 כל הכבוד! סיימתם את כל התוכנית! אתם מוכנים לשלב הבא 🎉</div>
      <div class="weeks-grid">${weeksHtml}</div>

      <h4>📚 מושגי מפתח שתלמדו</h4>
      <div class="concepts">${conceptsHtml}</div>

      <h4>💡 טיפים חשובים</h4>
      <ul class="plan-tips">${plan.tips.map(t => `<li>${t}</li>`).join("")}</ul>

      <p class="result-next">➡️ ${plan.next}</p>
      <button class="btn-primary" onclick="restartCourse()">🔄 להתחיל מחדש</button>
    </div>`;

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
  text.textContent = `${done} מתוך ${total} שבועות הושלמו`;
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
      <span class="saved-text">${plan.emoji} יש לך תוכנית פעילה: <strong>${plan.title}</strong> (${lv.emoji} ${lv.title}) — הושלמו ${done}/4 שבועות</span>
      <div class="saved-actions">
        <button class="btn-primary btn-sm" id="resume-course">⏩ המשך לתוכנית שלי</button>
        <button class="saved-clear" id="clear-course">התחל מחדש</button>
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
  CITIES.forEach(city => {
    const b = document.createElement("button");
    b.className = "city-btn";
    const count = (RESTAURANTS[city.id] || []).length;
    b.innerHTML = `<span class="city-emoji">${city.emoji}</span>
      <span class="city-name">${city.label}</span>
      <span class="city-count">${count} מסעדות</span>`;
    b.onclick = () => selectCity(city.id, b);
    wrap.appendChild(b);
  });
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

  document.getElementById("restaurant-count").textContent = `${items.length} מסעדות`;

  if (items.length === 0) {
    list.innerHTML = `<p class="empty">אין מסעדות כשרות ברשימה לעיר זו 🙁</p>`;
    return;
  }

  const cityLabel = (CITIES.find(c => c.id === activeCity) || {}).label || "";

  items.forEach(r => {
    const query = encodeURIComponent(`${r.name} ${cityLabel}`);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    const wazeUrl = `https://waze.com/ul?q=${query}&navigate=yes`;
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.innerHTML = `
      <div class="rest-top">
        <h3>${r.name}</h3>
        ${r.kosher ? `<span class="kosher-badge">כשר ✡️</span>` : ""}
      </div>
      <span class="rest-cuisine">🍽️ ${r.cuisine}</span>
      <p class="rest-desc">${r.desc}</p>
      <div class="rest-links">
        <a class="map-link waze" href="${wazeUrl}" target="_blank" rel="noopener">🚗 Waze</a>
        <a class="map-link gmaps" href="${mapsUrl}" target="_blank" rel="noopener">📍 גוגל מפות</a>
      </div>`;
    list.appendChild(card);
  });
}

/* ========================================================
   אתחול
   ======================================================== */
document.addEventListener("DOMContentLoaded", () => {
  buildCategoryFilters();
  renderRecipes();
  buildLevels();
  buildCitySelect();
  renderSavedCourse();

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
    if (e.key === "Escape") closeRecipe();
  });
});
