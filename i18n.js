/* =========================================================
   שכבת תרגום — עברית / אנגלית
   עברית היא ברירת המחדל (בקוד ובנתונים). כאן יושבות
   המחרוזות באנגלית + מפות תרגום לנתונים.
   המרכיבים וההוראות של המתכונים נשארים בעברית בכוונה.
   ========================================================= */

/* ---------- מחרוזות ממשק (he/en) ---------- */
const UI = {
  he: {
    logoSub: "מאות מתכונים, קורסי אפייה ומדריך מסעדות",
    navRecipes: "📖 מתכונים",
    navCourses: "🎓 קורסי אפייה",
    navRestaurants: "🍴 מסעדות",
    recipesTitle: "ספר המתכונים",
    recipesSub: "חפשו, סננו לפי קטגוריה, ולחצו על מתכון לפרטים המלאים.",
    searchPh: "🔍 חיפוש מתכון או מרכיב...",
    filterAll: "🍽️ הכול",
    favChip: "⭐ מועדפים",
    recipesCount: "מתכונים",
    emptyRecipes: "לא נמצאו מתכונים 🙁 נסו חיפוש אחר.",
    emptyFav: "עדיין לא סימנת מתכונים מועדפים ⭐ לחצו על הלב שבפינת כל מתכון.",
    ingredients: "🧺 מרכיבים",
    steps: "👩‍🍳 אופן ההכנה",
    addFav: "🤍 הוסף למועדפים",
    inFav: "❤️ במועדפים",
    print: "🖨️ הדפסת המתכון",
    servings: "מנות",
    min: "דק'",
    coursesTitle: "קורסי אפייה מותאמים אישית",
    coursesSub: "בחרו את הרמה שלכם, ענו על השאלות — ותקבלו תוכנית אימון בת 4 שבועות בדיוק בשבילכם.",
    pickLevel: "מה סוג האופה שאתם?",
    quizStep: (a, b) => `שאלה ${a} מתוך ${b}`,
    quizBack: "→ חזרה לשאלה הקודמת",
    levelLabel: "רמה",
    profileTitle: "🧭 הפרופיל שלך",
    secondary: "התאמה משנית",
    outcomesTitle: "🏁 בסוף התוכנית תוכלו…",
    toolsTitle: "🧰 ציוד שתצטרכו",
    weeksTitle: "📅 תוכנית 4 שבועות",
    conceptsTitle: "📚 מושגי מפתח שתלמדו",
    tipsTitle: "💡 טיפים חשובים",
    week: "שבוע",
    done: "סיימתי",
    goal: "🎯",
    skill: "מיומנות:",
    mistake: "⚠️ טעות נפוצה:",
    practice: "👩‍🍳 מתרגלים:",
    challenge: "🏆 אתגר בונוס:",
    weeksProgress: (a, b) => `${a} מתוך ${b} שבועות הושלמו`,
    complete: "🎓 כל הכבוד! סיימתם את כל התוכנית! אתם מוכנים לשלב הבא 🎉",
    restart: "🔄 להתחיל מחדש",
    savedActive: "יש לך תוכנית פעילה:",
    savedDone: (n) => `הושלמו ${n}/4 שבועות`,
    resume: "⏩ המשך לתוכנית שלי",
    startOver: "התחל מחדש",
    restaurantsTitle: "מדריך המסעדות",
    restaurantsSub: "בחרו עיר וגלו מסעדות מומלצות. אפשר לסנן לפי כשרות.",
    kosherOnly: "הצג רק כשר ✡️",
    restCount: "מסעדות",
    kosherBadge: "כשר ✡️",
    emptyKosher: "אין מסעדות כשרות ברשימה לעיר זו 🙁",
    disclaimer: "ℹ️ הרשימה נאספה ממקורות ציבוריים. פרטים כמו כתובת, שעות פתיחה וסטטוס עשויים להשתנות — כדאי לוודא לפני ביקור.",
    inIsrael: "🇮🇱 בישראל",
    abroadHead: "🌍 בעולם",
    waze: "🚗 Waze",
    gmaps: "📍 גוגל מפות",
    fromAirport: (ap) => `✈️ ניווט משדה התעופה: ${ap}`,
    footer: "נבנה באהבה 🧡 — ללא AI, ללא API. כל התוכן מובנה באתר.",
    // חשבונות ומנויים
    signIn: "התחברות / הרשמה",
    logoutBtn: "התנתקות",
    myAccount: "החשבון שלי",
    greeting: (n) => `שלום, ${n}`,
    authLoginTitle: "התחברות",
    authRegisterTitle: "הרשמה",
    fName: "שם",
    fEmail: "אימייל",
    fPass: "סיסמה",
    demoPassNote: "⚠️ הדגמה — אל תשתמשו בסיסמה אמיתית. הנתונים נשמרים בדפדפן בלבד.",
    doLogin: "התחבר",
    doRegister: "הרשמה",
    toRegister: "אין לך חשבון? הרשמה",
    toLogin: "כבר יש לך חשבון? התחברות",
    errMissing: "נא למלא את כל השדות.",
    errEmail: "כתובת אימייל לא תקינה.",
    errShort: "הסיסמה קצרה מדי (לפחות 4 תווים).",
    errExists: "כבר קיים חשבון עם האימייל הזה.",
    errBad: "אימייל או סיסמה שגויים.",
    perMonth: "לחודש",
    accountTitle: "החשבון שלי",
    statusLabel: "סטטוס",
    statusFree: "חינם",
    statusPremium: "Premium ⭐",
    yourCoursesLabel: "הקורסים שרכשת:",
    noCoursesYet: "עדיין לא רכשת קורסים.",
    premiumActiveMsg: "יש לך מנוי Premium — כל הקורסים והמתכונים המיוחדים פתוחים! ⭐",
    buyPremiumBtn: "שדרג ל-Premium — ₪2/חודש",
    cancelPremiumBtn: "בטל מנוי Premium",
    pricingTitle: "המסלולים",
    tierFreeName: "חינם",
    tierFreeDesc: "כל המתכונים הרגילים + מדריך המסעדות המלא.",
    tierCourseName: "קורס בודד",
    tierCourseDesc: "קורס אימון אחד לבחירתכם — לא כל הקורסים.",
    tierPremiumName: "Premium",
    tierPremiumDesc: "כל 6 הקורסים + כל 24 המתכונים המיוחדים.",
    howItWorks: "💡 איך התשלום עובד?",
    howItWorksText: "כדי שיהיה ברור לגמרי: תשלום על קורס בודד (₪1 לחודש) פותח רק את הקורס הספציפי שהתאמנו לכם — לא את כל הקורסים. מנוי Premium (₪2 לחודש) פותח את כל 6 הקורסים וגם את כל 24 המתכונים המיוחדים. שימו לב: מתכונים מיוחדים אינם נמכרים בנפרד — הם נכללים במנוי Premium בלבד.",
    buyCourseNote: "פותח את הקורס הזה בלבד",
    unlockAllNote: "פותח את כל 6 הקורסים + 24 המתכונים המיוחדים",
    premiumRecipesNote: "⭐ מתכונים עם כוכב הם מתכונים מיוחדים. הם נפתחים יחד עם מנוי Premium (₪2/חודש) — כל 24 בבת אחת, אין רכישה של מתכון בודד.",
    watchVideos: "▶ סרטוני טכניקה",
    videoQuery: "בישול טכניקה",
    lockedRecipeTitle: "מתכון מיוחד 🔒",
    lockedRecipeText: "המתכון הזה נעול. מנוי Premium (₪2/חודש) פותח את כל 24 המתכונים המיוחדים ביחד — אין אפשרות לרכוש מתכון בודד.",
    lockedCourseTitle: "קורס בתשלום 🔒",
    lockedCourseText: "מצאנו לך את הקורס המושלם! כדי לפתוח אותו, רכשו את הקורס או שדרגו ל-Premium.",
    matchedCourse: "הקורס שהתאמנו לך:",
    buyCourseBtn: "פתח קורס זה — ₪1/חודש",
    unlockAllBtn: "פתח הכול — Premium ₪2/חודש",
    loginToBuy: "התחברו או הירשמו כדי לרכוש",
    demoChargeNote: "הדגמה — לא מתבצע חיוב אמיתי.",
    purchasedOk: "מעולה! הגישה נפתחה 🎉",
    premiumTag: "מיוחד",
    lockedTag: "🔒 נעול",
    close: "סגור",
    diff: { "קל": "קל", "בינוני": "בינוני", "מתקדם": "מתקדם" }
  },
  en: {
    logoSub: "Hundreds of recipes, baking courses & a restaurant guide",
    navRecipes: "📖 Recipes",
    navCourses: "🎓 Baking Courses",
    navRestaurants: "🍴 Restaurants",
    recipesTitle: "The Recipe Book",
    recipesSub: "Search, filter by category, and tap a recipe for the full details.",
    searchPh: "🔍 Search recipe or ingredient...",
    filterAll: "🍽️ All",
    favChip: "⭐ Favorites",
    recipesCount: "recipes",
    emptyRecipes: "No recipes found 🙁 Try another search.",
    emptyFav: "You haven't saved any favorites yet ⭐ Tap the heart on any recipe.",
    ingredients: "🧺 Ingredients",
    steps: "👩‍🍳 Instructions",
    addFav: "🤍 Add to favorites",
    inFav: "❤️ In favorites",
    print: "🖨️ Print recipe",
    servings: "servings",
    min: "min",
    coursesTitle: "Personalized Baking Courses",
    coursesSub: "Pick your level, answer the questions — and get a 4-week training plan made just for you.",
    pickLevel: "What kind of baker are you?",
    quizStep: (a, b) => `Question ${a} of ${b}`,
    quizBack: "← Back to previous question",
    levelLabel: "Level",
    profileTitle: "🧭 Your profile",
    secondary: "Secondary match",
    outcomesTitle: "🏁 By the end you'll be able to…",
    toolsTitle: "🧰 Tools you'll need",
    weeksTitle: "📅 4-week plan",
    conceptsTitle: "📚 Key concepts you'll learn",
    tipsTitle: "💡 Important tips",
    week: "Week",
    done: "Done",
    goal: "🎯",
    skill: "Skill:",
    mistake: "⚠️ Common mistake:",
    practice: "👩‍🍳 Practice:",
    challenge: "🏆 Bonus challenge:",
    weeksProgress: (a, b) => `${a} of ${b} weeks completed`,
    complete: "🎓 Well done! You finished the whole program! Ready for the next level 🎉",
    restart: "🔄 Start over",
    savedActive: "You have an active plan:",
    savedDone: (n) => `${n}/4 weeks completed`,
    resume: "⏩ Continue my plan",
    startOver: "Start over",
    restaurantsTitle: "The Restaurant Guide",
    restaurantsSub: "Pick a city and discover recommended restaurants. Filter by kosher.",
    kosherOnly: "Kosher only ✡️",
    restCount: "restaurants",
    kosherBadge: "Kosher ✡️",
    emptyKosher: "No kosher restaurants listed for this city 🙁",
    disclaimer: "ℹ️ This list was compiled from public sources. Details like address, hours and status may change — please verify before visiting.",
    inIsrael: "🇮🇱 In Israel",
    abroadHead: "🌍 Around the World",
    waze: "🚗 Waze",
    gmaps: "📍 Google Maps",
    fromAirport: (ap) => `✈️ Directions from the airport: ${ap}`,
    footer: "Made with love 🧡 — no AI, no API. All content is built into the site.",
    // Accounts & membership
    signIn: "Sign in / Register",
    logoutBtn: "Log out",
    myAccount: "My account",
    greeting: (n) => `Hi, ${n}`,
    authLoginTitle: "Sign in",
    authRegisterTitle: "Register",
    fName: "Name",
    fEmail: "Email",
    fPass: "Password",
    demoPassNote: "⚠️ Demo — don't use a real password. Data is stored in your browser only.",
    doLogin: "Sign in",
    doRegister: "Register",
    toRegister: "No account? Register",
    toLogin: "Already have an account? Sign in",
    errMissing: "Please fill in all fields.",
    errEmail: "Invalid email address.",
    errShort: "Password too short (at least 4 characters).",
    errExists: "An account with this email already exists.",
    errBad: "Wrong email or password.",
    perMonth: "/month",
    accountTitle: "My account",
    statusLabel: "Status",
    statusFree: "Free",
    statusPremium: "Premium ⭐",
    yourCoursesLabel: "Courses you purchased:",
    noCoursesYet: "You haven't purchased any courses yet.",
    premiumActiveMsg: "You have Premium — all courses and special recipes are unlocked! ⭐",
    buyPremiumBtn: "Upgrade to Premium — ₪2/month",
    cancelPremiumBtn: "Cancel Premium",
    pricingTitle: "Plans",
    tierFreeName: "Free",
    tierFreeDesc: "All regular recipes + the full restaurant guide.",
    tierCourseName: "Single course",
    tierCourseDesc: "One training course of your choice — not all courses.",
    tierPremiumName: "Premium",
    tierPremiumDesc: "All 6 courses + all 24 special recipes.",
    howItWorks: "💡 How payment works",
    howItWorksText: "To be completely clear: paying for a single course (₪1/month) unlocks only the specific course we matched you with — not all of them. Premium (₪2/month) unlocks all 6 courses plus all 24 special recipes. Note: special recipes are not sold individually — they're included with Premium only.",
    buyCourseNote: "Unlocks this course only",
    unlockAllNote: "Unlocks all 6 courses + 24 special recipes",
    premiumRecipesNote: "⭐ Starred recipes are special recipes. They unlock together with Premium (₪2/month) — all 24 at once; there's no single-recipe purchase.",
    watchVideos: "▶ Technique videos",
    videoQuery: "cooking technique",
    lockedRecipeTitle: "Special recipe 🔒",
    lockedRecipeText: "This recipe is locked. Premium (₪2/month) unlocks all 24 special recipes together — individual recipes aren't sold separately.",
    lockedCourseTitle: "Paid course 🔒",
    lockedCourseText: "We found your perfect course! To unlock it, buy the course or upgrade to Premium.",
    matchedCourse: "Your matched course:",
    buyCourseBtn: "Unlock this course — ₪1/month",
    unlockAllBtn: "Unlock everything — Premium ₪2/month",
    loginToBuy: "Sign in or register to purchase",
    demoChargeNote: "Demo — no real charge is made.",
    purchasedOk: "Great! Access unlocked 🎉",
    premiumTag: "Special",
    lockedTag: "🔒 Locked",
    close: "Close",
    diff: { "קל": "Easy", "בינוני": "Medium", "מתקדם": "Advanced" }
  }
};

/* ---------- קטגוריות / רמות / ממדים ---------- */
const CAT_EN = {
  desserts: "Desserts", cakes: "Cakes", cookies: "Cookies", breads: "Breads & Pastries",
  savory: "Savory Pastries", mains: "Main Dishes", pasta: "Pasta", salads: "Salads",
  soups: "Soups", breakfast: "Breakfast"
};
const LEVEL_EN = {
  beginner:  { title: "Beginner",   desc: "Barely stepped into the kitchen — want to learn from scratch." },
  hobbyist:  { title: "Hobbyist",   desc: "Bake now and then and know the basics." },
  homecook:  { title: "Home Cook",  desc: "Cook for the household most days and want to vary and improve." },
  advanced:  { title: "Advanced",   desc: "Comfortable with most recipes and want to sharpen up." },
  patissier: { title: "Pâtissier",  desc: "Master complex techniques and nail the results." },
  prochef:   { title: "Pro Chef",   desc: "Work (or worked) in a professional kitchen, looking for depth." },
  chef:      { title: "Pastry Chef", desc: "Michelin level — chasing challenge and excellence." }
};
const LEVELNOTE_EN = {
  beginner:  "As a beginner, start with the recipes marked 'Easy', and don't skip weeks — each builds on the last.",
  hobbyist:  "As a hobbyist, feel free to skip what you already master — but try each exercise at least once.",
  homecook:  "As a home cook, fold one new recipe per week into your regular menu instead of adding extra load — that's how improvement sticks without disrupting your routine.",
  advanced:  "As an advanced baker, challenge yourself: pick the harder versions and try a full week without peeking at the recipe twice.",
  patissier: "As a pâtissier, focus on precision — weigh everything in grams, measure temperatures, and log every small change.",
  prochef:   "As a pro chef, go straight for the gap: pick the week you know least, cook it without a recipe, then teach it to someone else.",
  chef:      "At pastry-chef level, treat each week as a challenge: add a personal twist to every recipe, and teach someone else — teaching is mastery."
};
const DIM_EN = {
  practice: "Foundations", technique: "Technique", creative: "Creativity",
  speed: "Speed", world: "World Cuisines", healthy: "Healthy",
  desserts: "Desserts", bread: "Breads", hosting: "Hosting"
};

/* ---------- שמות ערים ---------- */
const CITY_EN = {
  "tel-aviv": "Tel Aviv-Yafo", jerusalem: "Jerusalem", "ramat-gan": "Ramat Gan",
  givatayim: "Givatayim", herzliya: "Herzliya", "petah-tikva": "Petah Tikva",
  rishon: "Rishon LeZion", holon: "Holon", "bat-yam": "Bat Yam", haifa: "Haifa",
  eilat: "Eilat", "beer-sheva": "Be'er Sheva", netanya: "Netanya", tiberias: "Tiberias",
  akko: "Acre", nazareth: "Nazareth", ashdod: "Ashdod", ashkelon: "Ashkelon",
  rehovot: "Rehovot", modiin: "Modi'in", "kfar-saba": "Kfar Saba", raanana: "Ra'anana",
  zichron: "Zichron Yaakov", hadera: "Hadera", karmiel: "Karmiel",
  paris: "Paris", london: "London", rome: "Rome", dubai: "Dubai",
  newyork: "New York", barcelona: "Barcelona", tokyo: "Tokyo", istanbul: "Istanbul",
  bangkok: "Bangkok", singapore: "Singapore", lisbon: "Lisbon", berlin: "Berlin",
  amsterdam: "Amsterdam", mexicocity: "Mexico City", copenhagen: "Copenhagen", marrakech: "Marrakech"
};

/* ---------- שמות מתכונים באנגלית ---------- */
const RECIPE_NAMES_EN = {
  // Desserts
  "dessert-mousse-chocolate": "Classic Chocolate Mousse", "dessert-panna-cotta": "Vanilla Panna Cotta",
  "dessert-tiramisu": "Tiramisu", "dessert-creme-brulee": "Crème Brûlée", "dessert-malabi": "Malabi",
  "dessert-chocolate-fondant": "Chocolate Fondant", "dessert-rice-pudding": "Rice Pudding",
  "dessert-truffles": "Chocolate Truffles", "dessert-apple-crumble": "Apple Crumble",
  "dessert-lemon-mousse": "Lemon Mousse", "dessert-crepe": "French Crêpes", "dessert-profiteroles": "Profiteroles",
  "dessert-mango-mousse": "Mango Mousse", "dessert-flan": "Crème Caramel (Flan)",
  "dessert-nice-cream": "Healthy Banana Ice Cream", "dessert-lemon-tart": "Lemon Tart",
  "dessert-baklava": "Baklava", "dessert-date-balls": "Date Balls", "dessert-pavlova": "Pavlova",
  "dessert-berry-trifle": "Berry Trifle",
  // Cakes
  "cake-chocolate-classic": "Easy Chocolate Cake", "cake-cheesecake-baked": "Baked Cheesecake",
  "cake-carrot": "Carrot Cake", "cake-lemon-yogurt": "Lemon Yogurt Cake", "cake-marble": "Marble Cake",
  "cake-apple": "Apple Cake", "cake-honey": "Honey Cake", "cake-banana": "Banana Bread",
  "cake-orange": "Orange Cake", "cake-brownies": "Brownies", "cake-vanilla": "Classic Vanilla Cake",
  "cake-coffee-walnut": "Coffee Walnut Cake", "cake-cold-cheesecake": "No-Bake Cheesecake",
  "cake-flourless-chocolate": "Flourless Chocolate Cake", "cake-strawberry": "Strawberry Cake",
  "cake-birthday-layer": "Layered Birthday Cake", "cake-pear": "Pear Cake", "cake-coconut": "Coconut Cake",
  "cake-basbousa": "Basbousa (Semolina Cake)", "cake-vanilla-cupcakes": "Vanilla Cupcakes",
  // Cookies
  "cookie-chocolate-chip": "Chocolate Chip Cookies", "cookie-butter": "Butter Cookies",
  "cookie-oatmeal": "Oatmeal Cookies", "cookie-shortbread": "Shortbread", "cookie-macaron": "Macarons",
  "cookie-cinnamon-roll-cookies": "Cinnamon Roll Cookies", "cookie-peanut-butter": "Peanut Butter Cookies",
  "cookie-gingerbread": "Gingerbread Cookies", "cookie-biscotti": "Almond Biscotti", "cookie-rugelach": "Rugelach",
  "cookie-thumbprint": "Jam Thumbprint Cookies", "cookie-amaretti": "Amaretti (Almond Cookies)",
  "cookie-white-chocolate-cranberry": "White Chocolate Cranberry Cookies", "cookie-florentine": "Florentines",
  "cookie-tahini": "Tahini Cookies", "cookie-alfajores": "Alfajores", "cookie-double-chocolate": "Double Chocolate Cookies",
  "cookie-lemon": "Lemon Sugar Cookies", "cookie-coconut-macaroon": "Coconut Macaroons", "cookie-cornflakes": "Cornflake Cookies",
  // Breads
  "bread-white-loaf": "Homemade White Bread", "bread-challah": "Braided Challah", "bread-focaccia": "Focaccia",
  "bread-pita": "Homemade Pita", "bread-cinnamon-rolls": "Cinnamon Rolls", "bread-bagel": "Bagels",
  "bread-baguette": "Baguette", "bread-garlic": "Garlic Bread", "bread-pretzel": "Soft Pretzels",
  "bread-naan": "Naan", "bread-burger-buns": "Burger Buns", "bread-grissini": "Grissini",
  "bread-sourdough": "Sourdough Bread", "bread-whole-wheat": "Whole Wheat Bread", "bread-croissant": "Croissants",
  "bread-soft-rolls": "Soft Dinner Rolls", "bread-jerusalem-bagel": "Jerusalem Bagel", "bread-olive": "Olive Bread",
  "bread-brioche": "Brioche", "bread-laffa": "Laffa (Iraqi Pita)",
  // Savory
  "savory-bourekas-cheese": "Cheese Bourekas", "savory-quiche-lorraine": "Quiche Lorraine",
  "savory-cheese-sticks": "Cheese Straws", "savory-pizza": "Homemade Pizza", "savory-sambusak": "Cheese Sambusak",
  "savory-empanada": "Beef Empanadas", "savory-spinach-pie": "Spinach & Cheese Pie", "savory-sausage-rolls": "Sausage Rolls",
  "savory-calzone": "Calzone", "savory-cheese-muffins": "Savory Muffins", "savory-sweet-potato-pie": "Sweet Potato Bake",
  "savory-manakish": "Za'atar Manakish", "savory-potato-bourekas": "Potato Bourekas", "savory-malawach": "Homemade Malawach",
  "savory-tomato-tart": "Cherry Tomato Tart", "savory-onion-tart": "Caramelized Onion Tart", "savory-lahmajun": "Lahmajun",
  "savory-spinach-quiche": "Spinach Quiche", "savory-cheese-rolls": "Cheese-Filled Rolls", "savory-zucchini-pie": "Zucchini Bake",
  // Mains
  "main-schnitzel": "Crispy Chicken Schnitzel", "main-meatballs-tomato": "Meatballs in Tomato Sauce",
  "main-shakshuka": "Shakshuka", "main-roast-chicken": "Whole Roast Chicken", "main-stir-fry": "Chicken & Veg Stir-Fry",
  "main-salmon-teriyaki": "Teriyaki Salmon", "main-burger": "Homemade Burger", "main-chicken-potatoes": "Roast Chicken & Root Veg",
  "main-roasted-cauliflower": "Whole Roasted Cauliflower", "main-beef-stew": "Beef Stew",
  "main-chicken-thighs": "Baked Chicken Thighs", "main-mujadara": "Mujadara (Rice & Lentils)",
  "main-chicken-lemon": "Chicken Meatballs in Lemon Sauce", "main-fried-rice": "Fried Rice",
  "main-baked-fish": "Baked White Fish & Veg", "main-curry-chicken": "Coconut Chicken Curry",
  "main-couscous": "Couscous with Vegetables", "main-stuffed-peppers": "Stuffed Peppers",
  "main-shawarma-style": "Homemade Chicken Shawarma", "main-pad-thai": "Pad Thai",
  // Pasta
  "pasta-aglio-olio": "Aglio e Olio", "pasta-carbonara": "Carbonara", "pasta-bolognese": "Bolognese",
  "pasta-pesto": "Pesto Pasta", "pasta-alfredo": "Fettuccine Alfredo", "pasta-mac-cheese": "Mac & Cheese",
  "pasta-lasagna": "Lasagna Bolognese", "pasta-pomodoro": "Pasta Pomodoro", "pasta-broccoli": "Pasta with Broccoli & Garlic",
  "pasta-arrabiata": "Penne Arrabbiata", "pasta-mushroom-cream": "Mushroom Cream Pasta", "pasta-salmon": "Salmon Pasta",
  "pasta-cherry-tomato": "Cherry Tomato & Basil Pasta", "pasta-spinach-cream": "Spinach Cream Pasta",
  "pasta-pink-sauce": "Penne in Pink Sauce", "pasta-gnocchi": "Homemade Potato Gnocchi",
  "pasta-zucchini": "Zucchini & Lemon Pasta", "pasta-lemon-parmesan": "Lemon Parmesan Pasta",
  "pasta-ravioli-sage": "Ravioli with Butter & Sage", "pasta-tuna": "Tuna & Tomato Pasta",
  // Salads
  "salad-israeli": "Israeli Salad", "salad-greek": "Greek Salad", "salad-caesar": "Caesar Salad",
  "salad-tabbouleh": "Tabbouleh", "salad-quinoa": "Quinoa Salad", "salad-coleslaw": "Coleslaw",
  "salad-caprese": "Caprese Salad", "salad-avocado": "Avocado Salad", "salad-lentil": "Lentil Salad",
  "salad-corn": "Corn & Avocado Salad", "salad-watermelon-feta": "Watermelon & Feta Salad",
  "salad-moroccan-carrot": "Moroccan Carrot Salad", "salad-roasted-eggplant": "Roasted Eggplant Salad",
  "salad-beet": "Beet Salad", "salad-tuna": "Tuna Salad", "salad-asian-slaw": "Asian Slaw",
  "salad-cold-pasta": "Cold Pasta Salad", "salad-chicken": "Warm Chicken Salad", "salad-chickpea": "Chickpea Salad",
  "salad-roasted-sweet-potato": "Roasted Sweet Potato Salad",
  // Soups
  "soup-chicken": "Chicken Soup", "soup-tomato": "Tomato Soup", "soup-lentil": "Lentil Soup",
  "soup-pumpkin": "Pumpkin Soup", "soup-minestrone": "Minestrone", "soup-onion": "French Onion Soup",
  "soup-vegetable": "Vegetable Soup", "soup-split-pea": "Split Pea Soup", "soup-cauliflower": "Cauliflower Soup",
  "soup-mushroom": "Mushroom Soup", "soup-broccoli": "Broccoli Soup", "soup-corn-cream": "Cream of Corn Soup",
  "soup-asian-noodle": "Asian Noodle Soup", "soup-potato-leek": "Potato Leek Soup", "soup-carrot-ginger": "Carrot Ginger Soup",
  "soup-white-bean": "White Bean Soup", "soup-sweet-potato": "Sweet Potato Soup", "soup-thai-coconut": "Thai Coconut Soup",
  "soup-goulash": "Goulash Soup", "soup-artichoke": "Jerusalem Artichoke Soup",
  // Breakfast
  "breakfast-pancakes": "American Pancakes", "breakfast-omelette": "Cheese & Veg Omelette",
  "breakfast-shakshuka-eggs": "Poached Eggs on Avocado Toast", "breakfast-granola": "Homemade Granola",
  "breakfast-french-toast": "French Toast", "breakfast-shakshuka-oats": "Oatmeal Porridge",
  "breakfast-waffles": "Belgian Waffles", "breakfast-smoothie-bowl": "Smoothie Bowl",
  "breakfast-toast-cheese": "Golden Cheese Toastie", "breakfast-scrambled-eggs": "Creamy Scrambled Eggs",
  "breakfast-blueberry-muffins": "Blueberry Muffins", "breakfast-frittata": "Veggie Frittata",
  "breakfast-yogurt-parfait": "Yogurt Parfait", "breakfast-latkes": "Potato Latkes",
  "breakfast-banana-pancakes": "Healthy Banana Pancakes", "breakfast-green-shakshuka": "Green Shakshuka",
  "breakfast-egg-sandwich": "Breakfast Egg Sandwich", "breakfast-chia-pudding": "Chia Pudding",
  "breakfast-syrniki": "Syrniki (Cheese Pancakes)", "breakfast-fruit-shake": "Morning Fruit Shake"
};

/* ---------- מסעדות: מטבח + תיאור באנגלית (מפתח: "cityId|name") ---------- */
const REST_EN = {
  "tel-aviv|R48": { c: "Chef's restaurant", d: "Creative tasting menu of rare ingredients, downtown." },
  "tel-aviv|ASA Izakaya": { c: "Japanese", d: "Japanese izakaya by chef Raz Rahav, focused on fish." },
  "tel-aviv|מלגו ומלבר": { c: "Seafood", d: "Modern chef restaurant focused on seafood and fish." },
  "tel-aviv|פסאדור": { c: "Meat / grill", d: "Fixed-price meat menu, prime cuts, many courses." },
  "tel-aviv|GDB": { c: "Burgers", d: "Solid burger spot — aged beef in a soft brioche bun." },
  "tel-aviv|מון (Moon) סושי בר": { c: "Sushi", d: "Modern sushi bar on Bograshov with an overseas vibe." },
  "tel-aviv|צ'יינה קלאס": { c: "Asian", d: "Japanese & Asian — fresh sushi, special noodles and salads." },
  "tel-aviv|יוליה": { c: "Fish", d: "Creative Mediterranean menu at Tel Aviv port." },
  "tel-aviv|פיצה לילה": { c: "Italian pizza", d: "One of the city's best — thin pizza with an airy crust." },
  "tel-aviv|ניניו": { c: "Dairy chef", d: "Kosher dairy chef restaurant, fish and modern technique." },
  "tel-aviv|קפה AT8": { c: "Bistro", d: "Kosher café-bistro on Dizengoff, morning till night." },

  "jerusalem|הדקה ה-90": { c: "Chef's restaurant", d: "Modern Israeli cuisine by chef Yonatan Roshfeld, downtown." },
  "jerusalem|1868": { c: "Israeli-French chef", d: "Upscale restaurant by chef Arnon Dahan." },
  "jerusalem|צ'אקרה": { c: "Chef's restaurant", d: "Veteran chef restaurant on King George St." },
  "jerusalem|אדום": { c: "French", d: "French restaurant in Feingold courtyard, elegant." },
  "jerusalem|גבריאל": { c: "Chef's restaurant", d: "Excellent chef restaurant near Shlomtzion St." },
  "jerusalem|עזורא": { c: "Traditional", d: "Culinary institution since 1948 — kubbeh soups and sofrito." },
  "jerusalem|מורדוך": { c: "Mizrahi", d: "Famous veteran restaurant in Mahane Yehuda market." },
  "jerusalem|אריכה": { c: "Sabich / street food", d: "Layered, meticulous sabich in the market." },
  "jerusalem|חומוס ארבעס": { c: "Hummus", d: "Fresh handmade hummus in the market." },
  "jerusalem|ג'וזף רימון": { c: "Grill & wine", d: "Strictly-kosher grill & wine, Jerusalem vibe, downtown." },
  "jerusalem|DAVID 16": { c: "Meat / grill", d: "Kosher meat facing the Old City walls, wine and cigars." },

  "ramat-gan|שיפודי סמי ובניו": { c: "Meat / grill", d: "Family grill house since 1960, a meat-lovers' home." },
  "ramat-gan|קפה MAE": { c: "South American", d: "Central-American flavors in the Bursa complex." },
  "ramat-gan|בלקסטון": { c: "French-Israeli bistro", d: "Kosher bistro in the Bursa complex." },
  "ramat-gan|הארנב הלבן": { c: "Meat / grill", d: "South-American meat restaurant in the Bursa complex." },
  "ramat-gan|ריבר": { c: "Asian", d: "Asian kitchen in the Bursa complex." },

  "givatayim|חומוס גבעתיים": { c: "Hummus", d: "Well-known hummus spot with rich toppings." },
  "givatayim|טורי": { c: "Japanese / Asian", d: "Japanese-temple-inspired, pan-Asian menu and fine wines." },

  "herzliya|דרבי בר דגים": { c: "Fish", d: "Fish restaurant at Herzliya Marina." },
  "herzliya|לולה מרטין": { c: "Fish", d: "Fish restaurant on Abba Eban Blvd, Herzliya Pituach." },
  "herzliya|בני הדייג": { c: "Fish", d: "Kosher fish restaurant at the marina." },
  "herzliya|לה ואקה לוקה": { c: "Meat / grill", d: "Meat restaurant on Medinat HaYehudim, Herzliya Pituach." },
  "herzliya|לחם בשר": { c: "Meat / grill", d: "Refined meat restaurant at the marina, sleek design." },
  "herzliya|נאמוס": { c: "Japanese", d: "Modern Japanese — fish, teppanyaki and sushi at the marina." },

  "petah-tikva|השיפוד והמנגל": { c: "Bukharian grill", d: "Kosher Bukharian meat restaurant, Segula junction." },
  "petah-tikva|שיפודי ציפורה": { c: "Meat / grill", d: "Prime cuts in the nightlife hub, upscale vibe." },
  "petah-tikva|ג'ויה": { c: "Italian", d: "Italian restaurant by chef Benny Ashkenazi." },
  "petah-tikva|מריונלה": { c: "Italian", d: "Kosher Italian with a modern touch." },
  "petah-tikva|פטריקס": { c: "Bar-restaurant", d: "Chef menu, 27 beers on tap and fine spirits." },
  "petah-tikva|ג'ירף": { c: "Asian", d: "Asian & Thai kitchen, including gluten-free dishes." },

  "rishon|סטלה ביץ'": { c: "Fish & meat", d: "Beachfront restaurant, also great breakfasts." },
  "rishon|אמילי גריל בר": { c: "Meat / grill", d: "Modern Israeli-Mizrahi vibe, tasty meats, kosher." },
  "rishon|טיטי מרטין בר": { c: "Bar-restaurant", d: "Cocktails, good food and music in the old industrial zone." },
  "rishon|פטריקס": { c: "Bar-restaurant", d: "Huge bar-restaurant (400 seats) overlooking a lake." },
  "rishon|לחם בשר": { c: "Meat / grill", d: "Kosher meat with taboon breads and in-house dry-aging." },
  "rishon|סוהו": { c: "Restaurant", d: "Legendary beloved spot, nearly 30 years in the old zone." },
  "rishon|סלון יווני": { c: "Greek", d: "Greek restaurant focused on nightlife and live shows." },

  "holon|בובו": { c: "Italian", d: "Fresh pastas, pizzas and Italian classics, kosher." },
  "holon|דונה (DONNA)": { c: "Italian", d: "Fine Italian kitchen." },
  "holon|קפה ללוש בראסרי": { c: "European", d: "Rich menu with a European touch, fair prices." },

  "bat-yam|הפטריקס ביץ": { c: "Beach bar", d: "Beachfront bar-restaurant with rich dishes and a full bar." },
  "bat-yam|גורילה": { c: "Bar-café", d: "Bar-café facing the sea on the Bat Yam promenade." },

  "haifa|פטוש": { c: "Arabic / Mediterranean", d: "In a historic building — food and art together." },
  "haifa|רולא": { c: "Galilean Arabic", d: "Arabic kitchen — shishbarak, great hummus and meatballs." },
  "haifa|רפאלו": { c: "Italian-Mediterranean", d: "Italian-Mediterranean menu with an Israeli twist." },
  "haifa|פאפיאנו": { c: "Italian", d: "Italian with a Mediterranean wink — pizzas and pastas." },
  "haifa|וניה ביסטרו": { c: "Bistro", d: "Haifa tradition meets modern cooking — carpaccio, artichoke pasta." },
  "haifa|ליבריה": { c: "Pub & brewery", d: "Restaurant, pub and brewery at Haifa port — original beers." },
  "haifa|דולפין": { c: "Mediterranean / Greek", d: "Meat, fish and seafood, Balkan-Greek style." },

  "eilat|המפלט האחרון": { c: "Fish", d: "Famous veteran Eilat fish restaurant." },
  "eilat|לה סרדין": { c: "Fish", d: "A magnet for fish and seafood lovers." },
  "eilat|איל פנטולינו": { c: "Italian / pasta bar", d: "Pasta bar with a calm vibe and wonderful dishes." },
  "eilat|קפה אופטימי": { c: "Italian / Israeli", d: "Pizzas, pastas, fish and breakfast — also vegan." },
  "eilat|פאפי": { c: "Argentinian grill", d: "Argentinian meat experience with charcoal grill and smoke." },
  "eilat|המחבוא של אדי": { c: "International-French", d: "Veteran spot since 1979, international-French cooking." },
  "eilat|לוויתן": { c: "Burgers", d: "Burgers by chef Lior Rafael — among the best in the country." },

  "beer-sheva|קבב אמונה": { c: "Meat / grill", d: "Family skewer house since the '60s, kebab heritage." },
  "beer-sheva|קמפאי סטריט ווק": { c: "Asian", d: "Pan-Asian kitchen in a kosher version." },
  "beer-sheva|שושנה": { c: "Home cooking", d: "Kosher Israeli-Moroccan home food, plus vegan dishes." },

  "netanya|משה שגב": { c: "Meat / chef", d: "A fine blend of experiential chef cooking and tradition." },
  "netanya|אל גאוצ'ו": { c: "Meat / grill", d: "Quality South-American beef, sea-view panorama, kosher." },
  "netanya|מסעדת היקב": { c: "Mediterranean", d: "On the Netanya promenade — great food, stunning view." },
  "netanya|לאגר אנד אייל": { c: "Beer bar", d: "London-style beer bar with dozens of taps and bottles." },
  "netanya|מרפי'ס": { c: "Irish pub", d: "Irish pub with atmosphere and authentic wood interior." },

  "tiberias|לגונה": { c: "Fish & meat", d: "Fish and grilled meats on the Tiberias promenade." },
  "tiberias|טיביס": { c: "Meat / grill", d: "Carefully prepared meats by chef Haim Tibi." },
  "tiberias|סנט אורבן": { c: "Wine bar", d: "Wine bar in an old cellar with a terrace over the Kinneret." },
  "tiberias|סין צ'אן": { c: "Asian", d: "Kosher Asian restaurant in Tiberias." },

  "akko|אורי בורי": { c: "Fish", d: "Considered Acre's best — mind-blowing fish and seafood." },
  "akko|אבו כריסטו": { c: "Fish", d: "Veteran culinary institution in old Acre, founded 1948." },
  "akko|רותס (ROOTS)": { c: "Levantine", d: "Modern kosher Levantine cuisine by chef Daral Ben Navat, Old City." },
  "akko|חומוס סעיד": { c: "Hummus", d: "Fresh, rich hummus with olive oil and lemon, in the Old City." },

  "nazareth|דיאנא": { c: "Arabic", d: "One of the oldest — famous lamb kebab on cinnamon stick, chef Duhul Safadi." },
  "nazareth|לוקנדה": { c: "Galilean Arabic / Italian", d: "Blends Galilean-Arab and Italian, at Ramada Olivie hotel." },
  "nazareth|תשרין": { c: "Arab-bistro fusion", d: "Traditional Arab meets modern bistro, in a 19th-century stone building." },
  "nazareth|חומוסיית עבדאללה שרביני": { c: "Hummus / falafel", d: "Famous institution — airy hummus, crisp falafel and shawarma." },

  "ashdod|פסקדו": { c: "Fish", d: "One of the country's best kosher spots — named a MENA top-50 (2022)." },
  "ashdod|פארינו": { c: "Neapolitan pizza", d: "One of the best Neapolitan pizzerias in the country." },
  "ashdod|נמסטה": { c: "Indian", d: "A perfect spot for a unique, fun Indian meal." },
  "ashdod|עלמא": { c: "Israeli food bar", d: "Young, fresh food bar with fusion dishes and authentic flavors." },
  "ashdod|ערמונים": { c: "Concept / fine dining", d: "Lakeside concept restaurant at Dream Island resort, upscale and nature." },

  "ashkelon|סקובר בר": { c: "Fish / dairy", d: "On the marina pier — fish, pastas, pizzas and breakfast." },
  "ashkelon|ארצ'י": { c: "Bar-restaurant", d: "On Delila beach — modern European-American dishes." },
  "ashkelon|הניצחון של חני": { c: "Romanian home cooking", d: "Romanian home restaurant with deep Ashkelon roots." },
  "ashkelon|אריסטו": { c: "Café", d: "Young, buzzing café specializing in strong coffee." },
  "ashkelon|סטיקיית איסטנבול": { c: "Meat / grill", d: "Kosher steakhouse since 1962, real charcoal grill." },

  "rehovot|פבריקה": { c: "Neapolitan pizza", d: "One of the best Neapolitan pizzerias in the country." },
  "rehovot|מו ומו": { c: "Meat / grill", d: "Rehovot's legendary meat institution." },
  "rehovot|כרמים": { c: "Mediterranean chef", d: "Farm-to-table by chef Sahar Rafael, tied to local land." },
  "rehovot|נינה ביאנכה": { c: "Mediterranean chef", d: "Veteran Mediterranean chef restaurant, chef Yarin Amira." },
  "rehovot|קפה סזאר": { c: "Restaurant-café", d: "Kosher, in a stunning new home with a big-city feel." },
  "rehovot|ג'וג'ו": { c: "Ethiopian", d: "Veteran Ethiopian restaurant in Rehovot." },

  "modiin|קונמיגו": { c: "Chef's restaurant", d: "Chef restaurant by Ido Elkayam, varied dishes and hosting." },
  "modiin|גריל 443": { c: "Meat / grill", d: "Charcoal-grilled meats served with warm laffa and salads." },
  "modiin|מכביס": { c: "Home cooking", d: "30-year reputation — fresh food, great service, home cooking." },

  "kfar-saba|סטקיית סבינו": { c: "Meat / grill", d: "Veteran Kfar Saba institution — 16 house salads and famous meats." },
  "kfar-saba|פיאנו פיאנו": { c: "Italian", d: "Pizzas and bakes in a wood oven brought from Italy." },
  "kfar-saba|קפה המדרחוב": { c: "Café", d: "Neighborhood café on the pedestrian mall, homey and lively." },
  "kfar-saba|לחם ארז": { c: "Bakery-restaurant", d: "Branch of the veteran chain on Rothschild, unique concept." },
  "kfar-saba|Temple Bar": { c: "Irish pub", d: "An Irish-pub recreation with a huge beer and spirits list." },

  "raanana|חנדל'ה": { c: "Rustic / Mediterranean", d: "Green rustic vibe — fresh pastas and juicy lamb chops." },
  "raanana|בוטגה איטליה": { c: "Italian", d: "Family Italian with a central oven and Italian classics." },
  "raanana|לה טרטוריה": { c: "Italian (dairy)", d: "Family dairy Italian in central Ra'anana." },
  "raanana|באקארו גריל בר": { c: "Meat / BBQ", d: "Meat and grill restaurant in Ra'anana, also for events." },

  "zichron|אדמה": { c: "Israeli", d: "A culinary cabin in a restored stone building on Founders St." },
  "zichron|סומאק": { c: "Galilee bistro", d: "Galilee bistro by chef Tarek Habib, near the shopping complex." },
  "zichron|מנואלה": { c: "Italian", d: "Classic Italian with a raised terrace facing the mall." },
  "zichron|צ'אנג מאי": { c: "Chinese / Asian", d: "Chinese restaurant in Zichron courtyards with a great view." },
  "zichron|בתיה ונחמן": { c: "Smoked meat / BBQ", d: "Kosher smoked-meat restaurant by Ronen Raviv." },
  "zichron|יקב תשבי": { c: "Winery & restaurant", d: "Winery-complex experience — quality bakery and wine tastings." },

  "hadera|בני הדייג — כפר הים": { c: "Fish", d: "Veteran fish restaurant at Kfar HaYam, 14 salads, by the beach." },
  "hadera|בריסקט": { c: "Smoked meat / BBQ", d: "Smoked-meat heaven — quality BBQ cuts and juicy sandwiches." },
  "hadera|יפן יפן": { c: "Japanese / sushi", d: "Sushi with fresh ingredients and artistic presentation." },
  "hadera|שואו קפה": { c: "Café", d: "A second home for locals — attention to detail and warm welcome." },
  "hadera|אופרה": { c: "Traditional Yemenite", d: "Traditional Yemenite dishes on Weizmann St." },

  "karmiel|ראי יקב ומסעדה": { c: "Balkan / Mediterranean", d: "Winery-restaurant in Rameh — Galilee-Balkan food, Bulgarian touches." },
  "karmiel|בית גני": { c: "Vegetarian / fish", d: "Romantic rustic vibe facing the Galilee hills — veg, fish and wine." },
  "karmiel|פאט ויני": { c: "Italian", d: "Italian restaurant in BIG Karmiel with a wide menu." },
  "karmiel|מג'דלה": { c: "Arabic chef", d: "Casual chef restaurant — traditional Arab dishes by chef Nael Zarkawi." },
  "karmiel|אל-רוביאן": { c: "Meat & fish", d: "High-end meat, fish and seafood, personal service, open Saturdays." },

  // ===== חו״ל =====
  "paris|Le Train Bleu": { c: "French brasserie", d: "Belle Époque brasserie in Gare de Lyon — French classics and a stunning room." },
  "paris|Café de Flore": { c: "Café", d: "One of the world's most famous cafés, a hub for writers and artists in Saint-Germain." },
  "paris|L'As du Fallafel": { c: "Falafel", d: "The famous falafel in the historic Jewish quarter of Le Marais." },
  "paris|Tour d'Argent": { c: "Chef's restaurant", d: "Historic Michelin-starred restaurant with a Notre-Dame view." },
  "paris|Le Fouquet's": { c: "Classic French", d: "Legendary since 1899 on the Champs-Élysées, menu inspired by Pierre Gagnaire." },

  "london|Rules": { c: "Traditional British", d: "London's oldest restaurant (1798) — traditional British cooking and game." },
  "london|Dishoom": { c: "Bombay Indian", d: "Inspired by the old Irani cafés of Bombay — loved by locals and visitors." },
  "london|Sketch": { c: "Chef's restaurant", d: "Famous artistic space with a colorful gallery room." },
  "london|The Wolseley": { c: "European brasserie", d: "Glamorous brasserie on Piccadilly with a grand atmosphere." },
  "london|St John": { c: "Modern British", d: "Pioneer of nose-to-tail eating, influential modern British cooking." },

  "rome|Roscioli": { c: "Italian", d: "Part deli, part restaurant — its cacio e pepe is legendary." },
  "rome|Alfredo alla Scrofa": { c: "Italian", d: "Birthplace of the world-famous fettuccine Alfredo." },
  "rome|La Campana": { c: "Italian", d: "Rome's oldest restaurant (1518), traditional Roman dishes." },
  "rome|Flavio al Velavevodetto": { c: "Trattoria", d: "Legendary Testaccio trattoria built into an ancient mound of pottery shards." },
  "rome|Aroma": { c: "Chef's restaurant", d: "Rooftop Michelin restaurant with a direct Colosseum view." },

  "dubai|Orfali Bros Bistro": { c: "Bistro", d: "Ranked #1 in the Middle East — bistro by the Orfali brothers." },
  "dubai|Al Muntaha": { c: "Chef's restaurant", d: "On the 27th floor of the Burj Al Arab, Michelin-starred." },
  "dubai|Ravi's": { c: "Pakistani", d: "A Satwa legend — everyone queues, from taxi drivers to celebrities." },
  "dubai|Ossiano": { c: "Fish & seafood", d: "Underwater dining beside a giant aquarium." },
  "dubai|Atmosphere": { c: "Chef's restaurant", d: "A restaurant on the 122nd floor of the Burj Khalifa — breathtaking views." },

  "newyork|Katz's Delicatessen": { c: "Deli", d: "Legendary pastrami since 1888, from the 'When Harry Met Sally' scene." },
  "newyork|Peter Luger": { c: "Steakhouse", d: "Mythic Brooklyn steakhouse, cash only." },
  "newyork|Russ & Daughters": { c: "Deli", d: "Bagels and smoked fish since 1914, a Lower East Side institution." },
  "newyork|Minetta Tavern": { c: "Brasserie", d: "The city's celebrated burger in Greenwich Village." },
  "newyork|Sylvia's": { c: "Soul food", d: "Harlem soul food since 1962 — a famous community anchor." },

  "barcelona|Pinotxo Bar": { c: "Tapas", d: "Legendary tapas counter in La Boqueria market." },
  "barcelona|Botafumeiro": { c: "Fish & seafood", d: "One of the city's most famous seafood restaurants." },
  "barcelona|La Plata": { c: "Tapas", d: "Gothic Quarter institution serving the same four tapas since 1945." },
  "barcelona|Can Paixano": { c: "Tapas & cava", d: "Known as 'La Champañería' — house cava and tapas at friendly prices." },
  "barcelona|Can Solé": { c: "Fish & rice", d: "Seafood, rice and fideuà among the best in Barcelona." },

  "tokyo|Sukiyabashi Jiro": { c: "Sushi", d: "Perhaps the world's most famous sushi restaurant, by chef Jiro Ono." },
  "tokyo|Sushi Saito": { c: "Sushi", d: "A Michelin-starred sushi temple in Edomae style." },
  "tokyo|Narisawa": { c: "Chef's restaurant", d: "Theatrical dining — dishes like 'bread of the forest' baked at your table." },
  "tokyo|Kanda": { c: "Kaiseki", d: "Michelin kaiseki restaurant — perfect precision and seasonality." },
  "tokyo|Tsujihan": { c: "Fish", d: "Famous seafood rice bowls (kaisen-don) in Nihonbashi." },

  "istanbul|Karaköy Lokantası": { c: "Turkish", d: "One of the iconic ones — traditional dishes served from the tray." },
  "istanbul|Pandeli": { c: "Turkish", d: "Above the Spice Bazaar, over 100 years old, a Bib Gourmand winner." },
  "istanbul|Mikla": { c: "Modern Anatolian", d: "Atop The Marmara Pera — modern Anatolian cooking and a city view." },
  "istanbul|Balıkçı Sabahattin": { c: "Fish", d: "Seafood in an Ottoman-era wooden house in the Old City." },
  "istanbul|Karaköy Güllüoğlu": { c: "Desserts & pastries", d: "Iconic pastry shop — some of the best baklava in Istanbul." },

  "bangkok|Jay Fai": { c: "Street food", d: "A street-food legend with a Michelin star — famous crab omelette." },
  "bangkok|Sorn": { c: "Southern Thai", d: "Southern Thai cuisine, multiple Michelin stars — the city's most coveted reservation." },
  "bangkok|Thipsamai": { c: "Pad Thai", d: "One of Bangkok's most famous pad Thai spots ('Ghost Gate')." },
  "bangkok|Wattana Panich": { c: "Beef noodle soup", d: "Beef broth simmering in the same pot for over 40 years." },
  "bangkok|Le Du": { c: "Modern Thai", d: "Ranked #1 in Asia — modern Thai chef restaurant." },

  "singapore|Tian Tian Hainanese Chicken Rice": { c: "Street food", d: "Michelin-recognized Hainanese chicken rice at Maxwell market." },
  "singapore|Hawker Chan": { c: "Street food", d: "The world's first Michelin-starred hawker — soy chicken with rice/noodles." },
  "singapore|Maxwell Food Centre": { c: "Hawker centre", d: "One of the most famous hawker centres — a huge range of street food." },
  "singapore|Newton Food Centre": { c: "Hawker centre", d: "Famous hawker centre (featured in 'Crazy Rich Asians')." },
  "singapore|Lau Pa Sat": { c: "Hawker centre", d: "Hawker centre in colonial-era architecture, downtown." },

  "lisbon|Cervejaria Ramiro": { c: "Seafood", d: "Iconic seafood spot since the 1950s, famous prego sandwich." },
  "lisbon|Pastéis de Belém": { c: "Bakery", d: "The legendary custard tart from a secret recipe since 1837." },
  "lisbon|Gambrinus": { c: "Traditional Portuguese", d: "An institution since 1936, classic and elegant Portuguese cuisine." },
  "lisbon|Taberna Sal Grosso": { c: "Tavern", d: "Intimate Portuguese tavern, one of Lisbon's most sought-after tables." },
  "lisbon|Galeto": { c: "Diner / counter", d: "A counter diner from 1966 that hasn't changed a bit." },

  "berlin|Tim Raue": { c: "Asian / chef", d: "Famous chef restaurant (Chef's Table) — Peking duck and Asian cuisine." },
  "berlin|Konnopke's Imbiss": { c: "Street food", d: "Legendary currywurst stall since 1930, under the rail tracks." },
  "berlin|Mustafa's Gemüse Kebap": { c: "Kebab", d: "Famous chicken-and-veg kebab sandwich — expect a two-hour queue." },
  "berlin|Nobelhart & Schmutzig": { c: "Modern", d: "Tasting menu of strictly local Berlin-Brandenburg ingredients." },
  "berlin|Schwarzes Café": { c: "Café", d: "A Berlin institution, open 24 hours in the west of the city." },

  "amsterdam|De Kas": { c: "Farm to table", d: "A huge glass greenhouse — fresh vegetables from its own garden." },
  "amsterdam|Vleminckx": { c: "Fries", d: "The best Flemish fries in Amsterdam since 1957, 28 sauces." },
  "amsterdam|Café de Reiger": { c: "Dutch", d: "An institution since 1642 — legendary Dutch apple pie." },
  "amsterdam|Brouwerij 't IJ": { c: "Brewery", d: "A working brewery at the foot of an authentic Dutch windmill." },
  "amsterdam|Yamazato": { c: "Japanese", d: "Traditional Japanese restaurant with a Michelin star at the Okura hotel." },

  "mexicocity|Pujol": { c: "Chef's restaurant", d: "One of the city's most famous (chef Enrique Olvera), mole madre." },
  "mexicocity|Contramar": { c: "Seafood", d: "A seafood institution in Roma — tuna tostada and pescado a la talla." },
  "mexicocity|Quintonil": { c: "Chef's restaurant", d: "Ranked among the world's best, focused on local ingredients." },
  "mexicocity|El Califa de León": { c: "Tacos", d: "The world's first taco stand to earn a Michelin star." },
  "mexicocity|Churrería El Moro": { c: "Desserts", d: "Legendary churros with hot chocolate since 1935." },

  "copenhagen|Noma": { c: "New Nordic", d: "One of the world's most famous (chef René Redzepi), New Nordic." },
  "copenhagen|Geranium": { c: "Chef's restaurant", d: "Three Michelin stars — refined seasonal Nordic cuisine." },
  "copenhagen|Alchemist": { c: "Culinary experience", d: "40+ courses over a 6-hour experience blending art and food." },
  "copenhagen|Hart Bageri": { c: "Bakery", d: "Some of the best sourdough and pastries in Copenhagen." },
  "copenhagen|Kadeau": { c: "New Nordic", d: "New Nordic restaurant with a creative tasting menu." },

  "marrakech|Nomad": { c: "Modern Moroccan", d: "Modern Moroccan with a rooftop overlooking the Spice Square." },
  "marrakech|Dar Yacout": { c: "Moroccan", d: "Lavish Moroccan cuisine in a luxurious riad — pastilla and tagine." },
  "marrakech|Le Jardin": { c: "Garden restaurant", d: "The medina's most famous garden restaurant — a courtyard of banana trees and palms." },
  "marrakech|Café des Épices": { c: "Café", d: "Colorful terrace over the bustling Rahba Kedima square in the souk." },
  "marrakech|Grand Café de la Poste": { c: "Brasserie", d: "Iconic brasserie from the 1920s in colonial style." }
};

/* ---------- שאלות החידון באנגלית (לפי סדר QUESTIONS) ---------- */
const QUIZ_EN = [
  { q: "What's most important for you to learn right now?", a: ["Build confidence and nail basic recipes", "Understand why things work — the technique behind them", "Create my own original dishes", "Cook fast and efficiently day to day"] },
  { q: "How much time do you have to practice each week?", a: ["An hour or two, I'm short on time", "A few hours, I enjoy it", "Tons — I'm deep into it", "It varies, depends on the week"] },
  { q: "How do you feel when a recipe fails?", a: ["Frustrated, I need step-by-step guidance", "Curious to understand what went wrong", "I tweak and improvise until something works", "I give up and switch to something quick"] },
  { q: "What draws you more?", a: ["Cookies, simple cakes and homemade bread", "Doughs, yeast, chocolate and temperatures", "Design, plating and 'wow' dishes", "Quick everyday meals"] },
  { q: "What's your ultimate goal?", a: ["To feel confident in the kitchen", "To become a precise, professional baker", "To develop a style and signature of my own", "To cook tasty without wasting time"] },
  { q: "Which kitchen tool is most fun to work with?", a: ["A wooden spoon and bowl — simple and pleasant", "A scale and thermometer — precision", "A piping bag and a nice serving plate", "One big pan that does everything"] },
  { q: "When do you most feel like cooking?", a: ["On a relaxed weekend, no time pressure", "When I want to learn something new in depth", "When I'm hosting and want to impress", "On a busy evening when I need food fast"] },
  { q: "Which culinary dream speaks to you most?", a: ["Cooking dishes from all over the world — Italy, Asia, the Middle East", "Eating healthy and balanced without giving up flavor", "Being the family's reliable baker", "Developing original signature dishes"] },
  { q: "What would you pick for the perfect dinner?", a: ["Pad Thai, curry or another ethnic dish", "A colorful bowl of vegetables, quinoa and protein", "A dish with precise, complex technique", "Something tasty that cooks in 20 minutes"] },
  { q: "What matters most to you in a dish?", a: ["Authentic flavors from another country", "Nutritional value and healthy balance", "An impressive, designed look", "Simplicity and a sure success"] },
  { q: "What do you most feel like making right now?", a: ["An impressive dessert", "Warm bread from the oven", "A meal for guests", "Something quick just for me"] },
  { q: "What satisfies you most in the kitchen?", a: ["The moment the mousse comes out perfect", "The smell of bread baking at home", "Watching guests enjoy the food", "Discovering a new flavor from around the world"] },
  { q: "Which challenge would you sign up for?", a: ["Nailing perfect macarons", "Growing a sourdough starter and baking with it", "Hosting 10 people for a full meal", "A whole week of healthy eating"] }
];

/* ---------- תוכניות הקורס באנגלית ---------- */
const PLANS_EN = {
  practice: {
    title: "The Safe Foundations Plan",
    tagline: "Build confidence step by step with guaranteed wins.",
    intro: "This plan has one goal: that you finish every week feeling 'I did it!'. We won't touch scary techniques — we'll focus on recipes that are almost impossible to mess up, and in each you'll learn one basic skill that stays with you for life. After 4 weeks you'll feel at home by the oven and be able to approach most recipes on the site without stress.",
    meta: "4 weeks · about 2 hours/week · difficulty: Beginner",
    tools: ["Mixing bowls", "Wooden spoon & whisk", "Kitchen scale or measuring cups", "Baking pan"],
    weeks: [
      { title: "Week 1 — Know Your Kitchen", goal: "Learn to measure correctly and get to know your tools and oven.", skill: "Accurate measuring & weighing", explain: "Before baking, understand that baking is like chemistry — precise amounts = precise results. We'll learn to use a kitchen scale (far more accurate than cups), what 'preheat the oven' means and why it's critical, and exactly where the middle rack sits. We start with two very forgiving recipes.", mistake: "Not preheating the oven — a cake put into a cold oven won't rise properly.", practice: "Easy Chocolate Cake, Chocolate Chip Cookies" },
      { title: "Week 2 — The World of Eggs", goal: "Master whisking, basic whipping and gentle frying.", skill: "Working with eggs", explain: "Eggs are the most versatile ingredient — they rise, thicken, bind and whip. We'll learn the difference between 'beating' and 'whipping', how to tell when an omelette is done, and why you mix pancake batter only until combined (over-mixing = rubbery pancakes).", mistake: "Over-mixing batter — it develops gluten and makes pancakes and cakes rubbery.", practice: "Omelette, American Pancakes, Lemon Yogurt Cake" },
      { title: "Week 3 — Your First Dough", goal: "Understand basic kneading and proofing.", skill: "Kneading & proofing", explain: "Dough is only scary the first time. We'll learn what happens when you mix flour and water (gluten forms — the web that gives elasticity), how to know dough is 'ready', and what proofing even means. We work with simple, forgiving dough before advancing to breads.", mistake: "Proofing in a cold spot — yeast loves warmth; in the cold the dough barely rises.", practice: "Butter Cookies, Homemade Pizza" },
      { title: "Week 4 — A Whole Meal!", goal: "Bring it all together into a full meal with confidence.", skill: "Timing & kitchen management", explain: "Now we combine everything we learned. We'll make a full meal — a hot dish, a fresh salad and bread — and practice timing: how to order the prep so everything is ready together. This is the moment to celebrate how far you've come.", mistake: "Starting everything at once — begin with whatever takes the longest.", practice: "Shakshuka, Israeli Salad, Garlic Bread" }
    ],
    outcomes: ["Bake a cake and cookies with full confidence", "Work with eggs fearlessly", "Make basic dough and proof it", "Time a whole meal so it's ready together"],
    challenges: ["Bake the cake without opening the oven even once — trust the timer.", "Make pancakes without a recipe in front of you.", "Make the dough twice in the same week and note what improved the second time.", "Host a friend or family member for a meal you made from start to finish."],
    concepts: [
      { term: "Preheating the oven", explain: "Turn the oven on 10–15 minutes before putting food in. A cold oven bakes unevenly and cakes won't rise." },
      { term: "Weight vs. cups", explain: "A cup of flour can weigh 120–160g depending on how packed it is. A scale is always precise." },
      { term: "Clean toothpick", explain: "Insert a toothpick into the center — if it comes out clean, it's done. If there's wet batter, keep baking." }
    ],
    tips: ["Always read the recipe to the end before you start.", "Weighing beats measuring cups.", "Don't open the oven while baking — it loses heat and the cake sinks.", "Mistakes are part of learning — every baker burned a cookie at first."],
    next: "Ready to level up? Move to the 'Technique Mastery' plan to understand the 'why' behind everything."
  },
  technique: {
    title: "The Technique Mastery Plan",
    tagline: "Understand deeply why everything works — and become precise.",
    intro: "This plan is for you if you're already comfortable in the kitchen and want to understand the science behind the magic. Instead of just following a recipe, you'll understand why each ingredient is added, the role of temperature, and how to fix things when they go wrong. By the end you'll read any recipe and know in advance how it will behave.",
    meta: "4 weeks · about 3–4 hours/week · difficulty: Medium-High",
    tools: ["Kitchen thermometer", "Mixer or electric whisk", "Pan and baking tray", "Double-boiler bowl"],
    weeks: [
      { title: "Week 1 — The World of Yeast", goal: "Understand fermentation, gluten and water temperature.", skill: "Mastering yeast dough", explain: "Yeast are living creatures that eat sugar and release gas — that gas inflates the dough. We'll learn why water that's too hot kills the yeast (above 45°C), what 'gluten development' is and how it gives bread structure, and why a slow fridge proof gives deeper flavor.", mistake: "Using boiling water — above 45°C it kills the yeast and the dough won't rise.", practice: "Homemade White Bread, Focaccia" },
      { title: "Week 2 — Chocolate & Creams", goal: "Master melting chocolate and working with cream.", skill: "Tempering chocolate & folding", explain: "Chocolate is very sensitive to heat — we'll learn the double-boiler method (gentle melting over steam) and why a drop of water can 'seize' chocolate and ruin it. We'll understand what 'folding' is (gentle mixing that keeps air) versus stirring, and how to whip cream without turning it to butter.", mistake: "Letting water touch melted chocolate — even a drop 'seizes' it into a grainy mess.", practice: "Classic Chocolate Mousse, Chocolate Fondant" },
      { title: "Week 3 — Delicate Doughs", goal: "Master shortcrust pastry and blind baking.", skill: "Shortcrust & blind baking", explain: "Shortcrust is the opposite of bread dough — here you specifically don't want to develop gluten, so it stays crumbly and not elastic. We'll learn why you work with cold butter, what 'blind baking' is (baking the base alone before the filling) and why it prevents a soggy bottom.", mistake: "Over-kneading shortcrust — it develops gluten and turns hard instead of crumbly.", practice: "Quiche Lorraine, Apple Crumble" },
      { title: "Week 4 — The Crème Brûlée Challenge", goal: "Work with yolks, a water bath and caramel.", skill: "Tempering & caramel", explain: "This dessert brings together everything we learned. We'll learn 'tempering' — gradually heating yolks so they don't scramble, baking in a water bath for a gentle set, and finally torching sugar into a caramel layer. Nail this and you're a precise baker.", mistake: "Pouring hot liquid onto the yolks all at once — they scramble into bits of omelette.", practice: "Crème Brûlée, Caramel" }
    ],
    outcomes: ["Bake bread and focaccia with yeast confidently", "Melt and work with chocolate without seizing it", "Make shortcrust and a professional quiche", "Understand the science behind every recipe"],
    challenges: ["Proof half the dough in the fridge overnight and compare flavor and texture to a normal proof.", "Whip cream by hand with a whisk — feel the stages in your hands.", "Bake the quiche once with blind baking and once without — compare the base.", "Measure temperature at every stage and keep a proper baking log for a full week."],
    concepts: [
      { term: "Double boiler (bain-marie)", explain: "Gently melting/cooking in a bowl over a pot of boiling water. The indirect heat prevents burning — critical for chocolate and yolks." },
      { term: "Gluten development", explain: "Kneading forms an elastic protein web from the flour. Lots of gluten = airy bread; little gluten = crumbly pastry." },
      { term: "Tempering", explain: "Adding hot liquid to eggs in a thin stream while stirring, to heat them gradually without scrambling." },
      { term: "Folding", explain: "Gentle mixing in a wave motion to keep the air in a whipped mixture. Don't stir vigorously!" }
    ],
    tips: ["A kitchen thermometer is your best friend — especially with yeast and chocolate.", "Take notes after each bake: what worked and what didn't.", "Understand each ingredient's role before you change it.", "Weather matters — on a humid day dough absorbs less water."],
    next: "Want to express yourself? Move to the 'Creativity & Style' plan and develop your signature."
  },
  creative: {
    title: "The Creativity & Style Plan",
    tagline: "Develop a personal signature, plating and 'wow' dishes.",
    intro: "If technique is already in your hands, it's time to develop style. This plan is about the artistic side of cooking — color, texture, layers and plate design. We'll learn that we eat with our eyes first, and by the end you'll even create an original dish of your own. The goal: that people recognize your dish before they even taste it.",
    meta: "4 weeks · about 3 hours/week · difficulty: Medium",
    tools: ["Piping bags and tips", "Serving platter", "White plates for plating", "Brush and spatula"],
    weeks: [
      { title: "Week 1 — Color & Flavor", goal: "Play with color layers and flavor contrasts.", skill: "Creating color & flavor contrast", explain: "Color creates appetite. We'll learn to create visual contrasts (light vs. dark) and to balance flavors — sweet vs. sour, rich vs. fresh. We'll work with marble cake (a classic visual contrast) and colorful macarons to practice precision and aesthetics together.", mistake: "Overdoing food coloring — too-strong color looks artificial and kills the appetite.", practice: "Marble Cake, Macarons" },
      { title: "Week 2 — Building Layers", goal: "Build layered dishes with different textures.", skill: "Building layers & textures", explain: "A layered dish tells a story with each spoon. We'll learn the principle of contrasting textures — crunch vs. cream, airy vs. dense — and how to build them in a clear glass so the eye sees every layer. It turns a simple dessert into something impressive.", mistake: "Assembling warm layers — they melt and blend; chill each layer first.", practice: "Tiramisu, Vanilla Panna Cotta" },
      { title: "Week 3 — Plating", goal: "Learn to design the plate like a restaurant.", skill: "Plate design (plating)", explain: "The exact same dish looks completely different with good plating. We'll learn the basics: white space gives the plate room to breathe, height creates drama, and sauce dots and herbs are your brush. We'll practice on a whole main dish.", mistake: "Filling the whole plate — a crowded plate looks messy; empty space is part of the design.", practice: "Teriyaki Salmon, Caprese Salad" },
      { title: "Week 4 — Your Own Recipe!", goal: "Create an original signature dish.", skill: "Developing an original recipe", explain: "Now it's your turn. Combine techniques and flavors you loved to create a dish that didn't exist before. There's no right or wrong — just experiment, taste and adjust. This is your signature.", mistake: "Changing too many things at once — change one variable at a time to understand what worked.", practice: "Your own original recipe — combine what you learned!" }
    ],
    outcomes: ["Create impressive color and flavor contrasts", "Build layered desserts and textures", "Plate at restaurant level", "Develop your own original signature dish"],
    challenges: ["Create a marble effect in three colors instead of two.", "Build the tiramisu in individual glasses and add a surprise layer of your own.", "Photograph the same dish in two different platings and decide which works and why.", "Give your dish a name and write it a short description — like on a restaurant menu."],
    concepts: [
      { term: "Texture contrast", explain: "Combining crisp vs. soft, or creamy vs. firm, makes eating far more interesting than a uniform texture." },
      { term: "Plating", explain: "The art of arranging food on the plate. Principles: leave empty space, build height, and use color and sauce dots as decoration." },
      { term: "Flavor balance", explain: "A good dish balances five tastes: sweet, sour, salty, bitter and umami. You feel imbalance immediately." }
    ],
    tips: ["Photograph every dish — it trains your eye for aesthetics.", "Dare to combine unusual flavors (chocolate and chili, strawberry and basil).", "Less is more — an overloaded plate confuses the eye.", "Keep an ideas journal for future dishes."],
    next: "Want speed too? Peek at the 'Speed & Efficiency' plan to fit creativity into your routine."
  },
  speed: {
    title: "The Speed & Efficiency Plan",
    tagline: "Tasty, fast dishes for a busy life — without compromising on flavor.",
    intro: "No free hours? Great — the best cooking is usually the simplest. This plan teaches you to cook smart: winning dishes in 20–30 minutes, a kitchen setup that saves time, and chefs' tricks for working efficiently. By the end you'll be able to make a tasty meal even on a super-busy evening.",
    meta: "4 weeks · about 1.5 hours/week · difficulty: Easy",
    tools: ["Large pan or wok", "Sharp chef's knife", "Cutting board", "Storage containers for freezing"],
    weeks: [
      { title: "Week 1 — 20 Minutes to Plate", goal: "Make a full dish in a short time.", skill: "Planning the order of operations", explain: "Fast dishes require planning the order of operations. We'll learn to use the time while the water boils for other tasks, and to pick recipes whose ingredients cook in parallel. Pasta and shakshuka are perfect examples of a full, fast meal.", mistake: "Waiting for the water to boil doing nothing — use that time to make the sauce.", practice: "Aglio e Olio, Shakshuka" },
      { title: "Week 2 — Stir-Fries & Assemblies", goal: "Master high-heat, fast cooking.", skill: "High-heat stir-frying", explain: "Stir-frying (sauté) over high heat cooks fast and keeps texture and color crisp. We'll learn the rule 'hot pan, constant motion', and why it's important to cut everything to an even size before you start. We'll combine with fast cold assemblies like quinoa salad.", mistake: "Overcrowding the pan — too many vegetables drop the heat and they steam instead of browning nicely.", practice: "Chicken & Veg Stir-Fry, Quinoa Salad" },
      { title: "Week 3 — Flash Meals", goal: "Vary quick breakfasts and dinners.", skill: "A repertoire of fast dishes", explain: "A good breakfast doesn't have to take time. We'll learn a repertoire of 10-minute dishes you can vary endlessly — using the same base ingredients you almost always have at home. The goal: never get stuck without an idea.", mistake: "Cooking eggs on high heat — they turn rubbery; low heat gives a creamy texture.", practice: "French Toast, Omelette, Oatmeal Porridge" },
      { title: "Week 4 — Mise en Place", goal: "Adopt a professional-kitchen work method.", skill: "Organization & batch cooking", explain: "'Mise en place' (everything in its place) is chefs' great secret: prep and cut all ingredients before you turn on the heat. We'll also learn 'batch cooking' — cook a big batch once and freeze portions for busy days.", mistake: "Starting to cook before everything is cut and ready — that's how things burn while you chop.", practice: "Weekly planning and cooking — prep 3 dishes ahead" }
    ],
    outcomes: ["Make a full dish in 20 minutes", "Master high-heat stir-frying", "A repertoire of flash meals for any day", "Organize your kitchen and batch-cook like a chef"],
    challenges: ["Make the pasta from start to plate in under 20 minutes — with a timer!", "Make a stir-fry using only what's already in the fridge, buying nothing.", "Make 3 different breakfasts in 30 minutes total.", "Plan and pre-cook all of next week's lunches."],
    concepts: [
      { term: "Mise en place", explain: "French for 'everything in its place'. Cut and measure all ingredients before you start — so you don't get stuck mid-way or burn anything." },
      { term: "Batch cooking", explain: "Make a large batch of one dish and portion it into the freezer. Saves hours during the week." },
      { term: "Sauté (stir-fry)", explain: "Fast cooking over high heat with a little oil and constant motion. Keeps vegetables crisp and colorful." }
    ],
    tips: ["Cut and prep all ingredients before turning on the heat (mise en place).", "One pan = fewer dishes to wash.", "Cook big batches and freeze single portions.", "Keep a fixed pantry base: pasta, eggs, olive oil, garlic, canned tomatoes."],
    next: "Got time to dive deep? Combine with the 'Technique Mastery' plan to upgrade your fast dishes."
  },
  world: {
    title: "World Journey — International Cuisines",
    tagline: "Fly between continents through your plate — Italy, Asia, the Middle East and America.",
    intro: "Love discovering new flavors? This plan takes you on a culinary journey around the world. Each week we stop on a different continent, learn the ingredients and techniques that define it, and cook an authentic dish. By the end you'll have a real international repertoire — and be able to put together a meal from any country you like.",
    meta: "4 weeks · about 2–3 hours/week · difficulty: Medium",
    tools: ["Wok or large pan", "Grater and sharp knife", "Mortar or spice grinder", "Wide pot"],
    weeks: [
      { title: "Week 1 — Italy", goal: "Master classic Italian sauces and pasta.", skill: "Sauces & al dente pasta", explain: "Italian cooking is built on simplicity and great ingredients. We'll learn to cook pasta 'al dente' (with a bite), make a real tomato sauce from scratch, and why you always save a cup of pasta water — the starch in it makes any sauce silky.", mistake: "Rinsing the pasta after cooking — it washes off the starch that helps the sauce cling.", practice: "Pasta Pomodoro, Homemade Pizza" },
      { title: "Week 2 — Asia", goal: "Master stir-frying and Asian flavor balance.", skill: "Wok & sweet-sour-salty-spicy balance", explain: "Asian cooking celebrates contrasts: sweet vs. sour, salty vs. spicy. We'll learn to stir-fry in a wok over high heat (everything cut and ready first!), and to build a balanced sauce from soy, sugar, lime and ginger.", mistake: "Overcrowding the wok — crowding drops the heat and vegetables steam instead of searing nicely.", practice: "Pad Thai, Chicken & Veg Stir-Fry" },
      { title: "Week 3 — The Middle East", goal: "Master the region's spices and breads.", skill: "Proper seasoning & flatbread", explain: "Middle Eastern cooking is a cuisine of spices, herbs and breads over fire. We'll learn to toast spices to release their aroma, and to bake flatbread at high heat. The rule: taste and adjust seasoning as you go.", mistake: "Adding all the spices at the end — toast them in oil at the start to build depth of flavor.", practice: "Shakshuka, Za'atar Manakish, Mujadara" },
      { title: "Week 4 — Pick a Destination & Host", goal: "Put together a full meal from one country.", skill: "Building an international menu", explain: "Now you're the guide of the journey. Pick a country you loved, build a 2–3 course menu from it (starter, main, dessert) and serve it like an ethnic restaurant. This is the peak of everything you learned.", mistake: "Choosing 3 complex dishes for one meal — pick one challenging dish and two simple ones.", practice: "Coconut Chicken Curry, Couscous with Vegetables, Lahmajun" }
    ],
    outcomes: ["Cook authentic Italian dishes", "Master stir-frying and Asian flavors", "Season and bake like the Middle East", "Put together a full meal from any country"],
    challenges: ["Make an Italian tomato sauce from fresh tomatoes only, no can.", "Make your own Asian stir-fry sauce and balance it until it's perfect.", "Toast your own spice blend and grind it fresh.", "Host a 'country night' with a matching menu, music and table setting."],
    concepts: [
      { term: "Al dente", explain: "Pasta cooked 'to the bite' — soft outside with a slight bite inside. It keeps cooking a bit in the sauce, so pull it a minute early." },
      { term: "Umami", explain: "The 'fifth taste' — a savory depth from soy, parmesan, mushrooms and tomatoes. The secret to an addictive dish." },
      { term: "Mise en place for spices", explain: "In Asian cooking the cooking is very fast — all ingredients must be cut and ready by the stove before you turn on the heat." }
    ],
    tips: ["Good ingredients matter more than perfect technique — especially in Italian.", "Taste constantly and adjust seasoning as you cook.", "Buy whole spices and grind them fresh — the aroma is far stronger.", "Don't fear new flavors — that's how you discover new loves."],
    next: "Want to cook healthier? Try the 'Healthy & Balanced Cooking' plan."
  },
  healthy: {
    title: "Healthy & Balanced Cooking",
    tagline: "Nourishing, tasty food for a healthy life — without extreme diets.",
    intro: "Healthy doesn't have to be boring or less tasty. This plan teaches you to build balanced, nourishing dishes that both satisfy and do your body good. We'll learn to build a 'balanced plate', to cook protein without drying it out, and to prep meals ahead so there's always something healthy within reach. The goal: good habits that last for life.",
    meta: "4 weeks · about 2 hours/week · difficulty: Easy-Medium",
    tools: ["Non-stick pan", "Grater and peeler", "Storage containers", "Blender or hand blender"],
    weeks: [
      { title: "Week 1 — The Balanced Base", goal: "Build nourishing, filling salads and bowls.", skill: "Building a balanced bowl", explain: "A good bowl is a whole meal in one dish: a base of vegetables/greens, protein (chicken, tofu, legumes), a whole-grain carb (quinoa, brown rice) and a good dressing. We'll learn the formula, and how a homemade dressing saves a lot of unnecessary calories versus store-bought.", mistake: "Drowning a healthy salad in an oily dressing — a light homemade vinaigrette is plenty.", practice: "Quinoa Salad, Warm Chicken Salad" },
      { title: "Week 2 — Smart Protein", goal: "Cook fish and lean chicken juicy.", skill: "Cooking protein without drying it", explain: "Lean protein dries out easily — the secret is not to overcook. We'll learn to tell when fish and chicken are done (they keep cooking from residual heat even after you take them off), and to prefer baking and searing over deep frying.", mistake: "Cooking fish until it's dry and flaky — take it off the moment it gently flakes.", practice: "Teriyaki Salmon, Baked Chicken Thighs" },
      { title: "Week 3 — Nourishing Breakfasts", goal: "Start the day with balanced energy.", skill: "Fiber-rich breakfasts", explain: "A good breakfast keeps you full and energized until lunch. We'll learn to combine a whole-grain carb, protein and fiber — like oatmeal with fruit, or chia pudding. These are also dishes you can prep the night before.", mistake: "A sugar-heavy breakfast alone — it spikes then crashes; add protein and fiber.", practice: "Oatmeal Porridge, Chia Pudding, Shakshuka" },
      { title: "Week 4 — Meal Prep", goal: "Cook healthy for a whole week ahead.", skill: "Weekly healthy cooking", explain: "The secret to eating healthy consistently is having it ready. We'll learn to cook a big batch of healthy base dishes once, portion and store them — so even on a busy evening there's good food waiting instead of ordering delivery.", mistake: "Making everything fresh every day — you burn out and give up; pre-cook 2–3 base dishes.", practice: "Lentil Soup, Chicken Meatballs in Lemon Sauce, Quinoa Salad" }
    ],
    outcomes: ["Build a balanced, filling bowl", "Cook juicy, healthy fish and chicken", "Make nourishing breakfasts that give energy", "Cook healthy for a whole week ahead"],
    challenges: ["Make your own homemade vinaigrette and compare it to store-bought.", "Cook a perfect fish fillet — juicy, not dry.", "Make 3 different healthy breakfasts and prep them the night before.", "Pre-cook all of next week's lunches and store them in portions."],
    concepts: [
      { term: "The balanced plate", explain: "Half the plate vegetables, a quarter protein (chicken/fish/legumes) and a quarter whole grains. A simple formula for a nourishing meal." },
      { term: "Carry-over cooking", explain: "Food keeps cooking from stored heat even after you take it off the heat — so pull fish and chicken just before they're 'done'." },
      { term: "Dietary fiber", explain: "Found in vegetables, fruit and whole grains; keeps you full and aids digestion. The base of a meal that doesn't leave you hungry fast." }
    ],
    tips: ["Drink plenty of water — thirst sometimes feels like hunger.", "Healthy isn't 'fat-free' — good fats (olive oil, avocado, nuts) matter.", "Cook ahead so you don't cave to delivery on a busy night.", "Color on the plate = variety of nutrients. Aim for a colorful plate."],
    next: "Want more variety? Combine with the 'World Journey' plan for healthy cooking from around the world."
  },
  desserts: {
    title: "The Art of Desserts",
    tagline: "Mousses, tarts and meringues that look like they came from a pastry shop.",
    intro: "If your favourite part of the meal is the end — this plan is for you. We'll learn the four pillars of the dessert world: stable creams and mousses, sweet pastry and tarts, meringue and macarons, and finally assembly and presentation. These techniques repeat in almost every dessert, and once they're in your hands you'll be able to open nearly any dessert recipe and succeed.",
    meta: "4 weeks · about 3 hours/week · difficulty: Medium",
    tools: ["Mixer or electric whisk", "Piping bags and tips", "Kitchen thermometer", "Tart tin"],
    weeks: [
      { title: "Week 1 — Creams & Mousses", goal: "Make a stable, airy mousse that doesn't collapse.", skill: "Stabilizing mousse and folding", explain: "A good mousse balances air and stability. We'll learn to whip cream to 'soft peaks' (and no further), to fold gently so the air stays in, and when you need gelatin versus when the chocolate itself is enough to set it.", mistake: "Folding vigorously or over-whipping the cream — the mousse loses air or turns grainy.", practice: "Classic Chocolate Mousse, Lemon Mousse" },
      { title: "Week 2 — Sweet Pastry & Tarts", goal: "Bake a crisp tart base that doesn't go soggy.", skill: "Sweet shortcrust and blind baking", explain: "Sweet pastry (pâte sucrée) is more fragile than regular dough because of the sugar. We'll learn to work with cold butter, to chill the dough before baking so it doesn't shrink, and to blind bake with weights for a base that stays crisp even under a filling.", mistake: "Skipping the chill before baking — the dough shrinks in the tin and the tart walls slump.", practice: "Lemon Tart, Apple Crumble" },
      { title: "Week 3 — Meringue & Macarons", goal: "Master whipping egg whites and the macaronage.", skill: "Meringue and macaronage", explain: "Meringue is the base for pavlova, for mousses and for macarons. We'll learn why the bowl must be completely free of fat, how to tell 'soft peak' from 'stiff peak', and what macaronage is — the precise folding that decides whether your macaron comes out smooth with a 'foot' or cracked.", mistake: "A drop of yolk or fat in the egg-white bowl — the meringue simply won't hold.", practice: "Macarons, Pavlova" },
      { title: "Week 4 — Your Signature Dessert", goal: "Assemble and serve a restaurant-level dessert.", skill: "Assembly, piping and plating", explain: "Now we bring it all together: filling with cream, precise piping, and layered assembly. We'll also learn the golden rule of desserts — assemble close to serving so the crisp stays crisp and the cold stays cold.", mistake: "Assembling hours ahead — the base goes soggy from the cream and the dessert loses its texture.", practice: "Profiteroles, Tiramisu" }
    ],
    outcomes: ["Make a stable, airy mousse", "Bake a tart with a crisp base", "Master meringue and macarons", "Assemble and serve an impressive dessert"],
    challenges: ["Make the same mousse once with gelatin and once without, and compare how they hold.", "Bake the tart base once with weights and once without — see the difference.", "Turn out macarons with an even 'foot' — photograph and compare two batches.", "Assemble a dessert in a clear glass so every layer is visible from outside."],
    concepts: [
      { term: "Meringue", explain: "Egg whites whipped with sugar. The base for pavlova, macarons and some mousses — and extremely sensitive to fat." },
      { term: "Ganache", explain: "Chocolate and cream in a set ratio. More cream = a sauce; more chocolate = a firm filling." },
      { term: "Blind baking", explain: "Baking the tart base on its own, with weights, before the filling — so it stays crisp." }
    ],
    tips: ["Room-temperature eggs whip better.", "Weigh in grams — in desserts a small deviation changes the result.", "Chill between stages; most desserts reward patience.", "Taste the cream before assembling — afterwards you can't fix it."],
    next: "Want to bake bread too? Move on to 'The World of Breads'."
  },
  bread: {
    title: "The World of Breads",
    tagline: "From a simple white loaf all the way to sourdough and croissants.",
    intro: "Few things are as satisfying as pulling a hot loaf you baked out of the oven. This plan takes you from the most basic bread to the two summits of baking: sourdough and croissants. We'll learn to read dough with your hands — when it's ready, when it has risen enough, and why the same recipe behaves differently in summer and in winter.",
    meta: "4 weeks · about 3–4 hours/week · difficulty: Medium-High",
    tools: ["Kitchen scale", "Dough scraper", "Cast-iron pot or baking tray", "Tea towel or proofing basket"],
    weeks: [
      { title: "Week 1 — Your First Loaf", goal: "Knead, proof and bake a basic loaf.", skill: "Kneading, proofing and reading the dough", explain: "We start from the fundamentals: the water-to-flour ratio (hydration), kneading until the dough is smooth and elastic, and the windowpane test — stretching a piece of dough until it's translucent without tearing. We'll also learn to spot a proper proof with a finger poke.", mistake: "Rushing the proof — under-proofed dough gives a dense, heavy loaf.", practice: "Homemade White Bread, Homemade Pita" },
      { title: "Week 2 — Flatbreads", goal: "Bake at high heat and get puff and bubbles.", skill: "High-heat baking", explain: "Flatbreads are the fastest route to success and confidence. The secret is very high heat — the oven or pan must be scorching so the steam catches the dough and blows it into a pocket. We'll also learn why you shouldn't roll them too thin.", mistake: "Putting them into a lukewarm oven — without high heat the pita won't puff into a pocket.", practice: "Focaccia, Laffa (Iraqi Pita), Za'atar Manakish" },
      { title: "Week 3 — Enriched Doughs", goal: "Work with dough containing butter, eggs and sugar.", skill: "Enriched dough and braiding", explain: "Once you add fat and sugar, dough becomes rich and soft — but also rises more slowly, because fat slows both the gluten and the yeast. We'll learn to add butter gradually, to be patient with the proof, and to braid a beautiful challah.", mistake: "Adding all the butter at the start — the dough never develops gluten and stays sticky and slack.", practice: "Braided Challah, Brioche, Soft Dinner Rolls" },
      { title: "Week 4 — Sourdough & Croissants", goal: "Take on the two summits of baking.", skill: "Sourdough and lamination", explain: "Sourdough is a live culture of wild yeast — slow, but it gives flavour and crust that commercial yeast can't. A croissant is lamination: layers of dough and butter created by repeated folds. Both demand patience and cold — literally.", mistake: "Working with warm butter in croissants — it absorbs into the dough and the layers disappear.", practice: "Sourdough Bread, Croissants" }
    ],
    outcomes: ["Knead and proof dough with confidence", "Bake flatbreads that puff up", "Make soft challah and brioche", "Take on sourdough and croissants"],
    challenges: ["Bake the same loaf twice and compare: a one-hour proof versus an overnight proof in the fridge.", "Turn out a pita that puffs into a full pocket — no holes.", "Braid a challah with six strands instead of three.", "Grow a sourdough starter from scratch over a week and document it daily."],
    concepts: [
      { term: "Hydration", explain: "The percentage of water relative to flour. Wetter dough = airier bread with bigger holes, but harder to handle." },
      { term: "Windowpane test", explain: "Stretch a piece of dough — if it stretches to a translucent sheet without tearing, the gluten is developed enough." },
      { term: "Lamination", explain: "Repeated folding of dough around cold butter, creating hundreds of thin layers — the secret of the croissant." }
    ],
    tips: ["Weigh your flour — cups lie and change the hydration.", "Dough likes warmth; in a cold kitchen everything takes longer.", "Don't add flour just because the dough is sticky — give it time instead.", "A crisp crust loves steam: throw a little water into the bottom of the oven at the start of baking."],
    next: "Want to impress guests? Try the 'Hosting & Parties' plan."
  },
  hosting: {
    title: "Hosting & Parties",
    tagline: "Host without the stress — a menu, timing and serving that actually work.",
    intro: "Hosting isn't just cooking well — it's cooking smart. Most of the stress doesn't come from the recipes but from the timing: everything ready together, and you still calm when the guests walk in. This plan teaches you to build a sensible menu, to prep as much as possible in advance, and to serve in a way that looks great without extra effort.",
    meta: "4 weeks · about 2–3 hours/week · difficulty: Medium",
    tools: ["Large baking trays", "Nice serving dishes", "Storage containers", "A timer (or your phone)"],
    weeks: [
      { title: "Week 1 — Building a Menu", goal: "Put together a balanced menu that doesn't break you.", skill: "Menu planning and balance", explain: "A good menu is balanced on three axes: textures, heaviness and workload. The most important rule — only one challenging dish, everything else simple and familiar. We'll also learn to scale quantities by number of guests.", mistake: "Choosing three new, complex dishes for the same evening — a guaranteed route to stress.", practice: "Caprese Salad, Focaccia" },
      { title: "Week 2 — Prepping Ahead", goal: "Know what to make the day before and what at the last minute.", skill: "Splitting make-ahead from last-minute", explain: "Every dish has a 'window' — how long it stays good. We'll learn to sort them: sauces, soups and stews improve the next day; salads, fish and fried food are made à la minute. We'll build a reverse schedule that starts from serving time and works backwards.", mistake: "Leaving all the work to the day of — even if you finish, you'll arrive exhausted.", practice: "Lasagna Bolognese, Pumpkin Soup" },
      { title: "Week 3 — Dishes for a Shared Table", goal: "Serve large dishes everyone shares.", skill: "Family-style serving and centrepieces", explain: "One big centrepiece is always easier than individual plates — less work, more impact. We'll learn to pick dishes that look good in the tray, that still taste great lukewarm, and that are easy to scale to the number of guests.", mistake: "Serving carefully plated individual portions to 10 guests — you'll spend the whole evening assembling.", practice: "Whole Roast Chicken, Couscous with Vegetables" },
      { title: "Week 4 — Dessert & the Finish", goal: "Close the meal strongly and without stress.", skill: "Make-ahead dessert and final timing", explain: "Dessert is what guests remember — and it should be one that's completely ready in advance. We'll learn to choose desserts that wait well in the fridge, and to plan the last half hour so you're sitting with your guests instead of disappearing into the kitchen.", mistake: "Choosing a dessert that has to be assembled à la minute — you'll miss the end of the meal.", practice: "Tiramisu, Pavlova" }
    ],
    outcomes: ["Build a balanced hosting menu", "Prep ahead and arrive relaxed", "Serve impressive centrepiece dishes", "Finish with a dessert made in advance"],
    challenges: ["Write a menu for four guests in which only one dish is new to you.", "Build a reverse schedule from serving time backwards, and stick to it.", "Make one centrepiece dish that feeds 8 people.", "Host an evening where the entire dessert was made the day before."],
    concepts: [
      { term: "Reverse schedule", explain: "Start from serving time and work backwards: what needs to come out of the oven when, and what to prepare the day before." },
      { term: "Dishes that wait well", explain: "Stews, soups and lasagnes improve while waiting; salads and fried food don't. Plan accordingly." },
      { term: "Quantities per guest", explain: "A rough yardstick: 150–200 g of main course per person, and always one extra 'insurance' portion." }
    ],
    tips: ["Write your shopping list and schedule down — not in your head.", "Clean as you go; a clean kitchen at the start = a calm evening.", "Ask about allergies and preferences in advance.", "Always plan one dish that can be made entirely the day before."],
    next: "Want to upgrade the dessert you serve? Move on to 'The Art of Desserts'."
  }
};

/* מרשם תרגומים לפי שפה. אנגלית מלאה כאן; fr/ru/es נוספים
   בקבצי i18n-*.js ונופלים חזרה לאנגלית כשחסר תרגום. */
const L = {
  en: {
    cat: CAT_EN, level: LEVEL_EN, levelNote: LEVELNOTE_EN, dim: DIM_EN,
    city: CITY_EN, recipe: RECIPE_NAMES_EN, rest: REST_EN, quiz: QUIZ_EN, plans: PLANS_EN
  }
};

window.UI = UI;
window.L = L;
window.CAT_EN = CAT_EN;
window.LEVEL_EN = LEVEL_EN;
window.LEVELNOTE_EN = LEVELNOTE_EN;
window.DIM_EN = DIM_EN;
window.CITY_EN = CITY_EN;
window.RECIPE_NAMES_EN = RECIPE_NAMES_EN;
window.REST_EN = REST_EN;
window.QUIZ_EN = QUIZ_EN;
window.PLANS_EN = PLANS_EN;
