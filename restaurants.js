/* =========================================================
   מדריך מסעדות — גוש דן וירושלים
   נאסף ממקורות ציבוריים (ROL, ZAP Rest, Time Out, וואלה, מדריכי ערים)
   ⚠️ פרטים כמו כתובת/שעות/סטטוס פתיחה עשויים להשתנות — כדאי לוודא לפני ביקור.
   ========================================================= */

const CITIES = [
  { id: "tel-aviv",   label: "תל אביב-יפו", emoji: "🌆" },
  { id: "jerusalem",  label: "ירושלים",     emoji: "🕍" },
  { id: "ramat-gan",  label: "רמת גן",      emoji: "💎" },
  { id: "givatayim",  label: "גבעתיים",     emoji: "🏙️" },
  { id: "herzliya",   label: "הרצליה",      emoji: "⛵" },
  { id: "petah-tikva",label: "פתח תקווה",   emoji: "🌳" },
  { id: "rishon",     label: "ראשון לציון", emoji: "🏖️" },
  { id: "holon",      label: "חולון",       emoji: "🎨" },
  { id: "bat-yam",    label: "בת ים",       emoji: "🌊" },
  { id: "haifa",      label: "חיפה",        emoji: "🌲" },
  { id: "eilat",      label: "אילת",        emoji: "🐠" },
  { id: "beer-sheva", label: "באר שבע",     emoji: "🏜️" },
  { id: "netanya",    label: "נתניה",       emoji: "🌇" },
  { id: "tiberias",   label: "טבריה",       emoji: "🎣" },
  { id: "akko",       label: "עכו",         emoji: "⚓" },
  { id: "nazareth",   label: "נצרת",        emoji: "⛪" },
  { id: "ashdod",     label: "אשדוד",       emoji: "🚢" },
  { id: "ashkelon",   label: "אשקלון",      emoji: "🐚" },
  { id: "rehovot",    label: "רחובות",      emoji: "🔬" },
  { id: "modiin",     label: "מודיעין",     emoji: "🏛️" },
  { id: "kfar-saba",  label: "כפר סבא",     emoji: "🌿" },
  { id: "raanana",    label: "רעננה",       emoji: "🌷" },
  { id: "zichron",    label: "זכרון יעקב",  emoji: "🍷" },
  { id: "hadera",     label: "חדרה",        emoji: "🌾" },
  { id: "karmiel",    label: "כרמיאל",      emoji: "⛰️" },
  // ערים בחו״ל — ניווט מתבצע משדה התעופה הקרוב
  { id: "paris",     label: "פריז",       emoji: "🇫🇷", abroad: true, airport: "Paris Charles de Gaulle Airport (CDG)" },
  { id: "london",    label: "לונדון",     emoji: "🇬🇧", abroad: true, airport: "Heathrow Airport (LHR), London" },
  { id: "rome",      label: "רומא",       emoji: "🇮🇹", abroad: true, airport: "Rome Fiumicino Airport (FCO)" },
  { id: "dubai",     label: "דובאי",      emoji: "🇦🇪", abroad: true, airport: "Dubai International Airport (DXB)" },
  { id: "newyork",   label: "ניו יורק",   emoji: "🇺🇸", abroad: true, airport: "John F. Kennedy International Airport (JFK), New York" },
  { id: "barcelona", label: "ברצלונה",    emoji: "🇪🇸", abroad: true, airport: "Barcelona-El Prat Airport (BCN)" },
  { id: "tokyo",     label: "טוקיו",      emoji: "🇯🇵", abroad: true, airport: "Narita International Airport (NRT), Tokyo" },
  { id: "istanbul",  label: "איסטנבול",   emoji: "🇹🇷", abroad: true, airport: "Istanbul Airport (IST)" },
  { id: "bangkok",   label: "בנגקוק",     emoji: "🇹🇭", abroad: true, airport: "Suvarnabhumi Airport (BKK), Bangkok" },
  { id: "singapore", label: "סינגפור",    emoji: "🇸🇬", abroad: true, airport: "Singapore Changi Airport (SIN)" },
  { id: "lisbon",    label: "ליסבון",     emoji: "🇵🇹", abroad: true, airport: "Lisbon Airport (LIS)" },
  { id: "berlin",    label: "ברלין",      emoji: "🇩🇪", abroad: true, airport: "Berlin Brandenburg Airport (BER)" },
  { id: "amsterdam", label: "אמסטרדם",    emoji: "🇳🇱", abroad: true, airport: "Amsterdam Schiphol Airport (AMS)" },
  { id: "mexicocity",label: "מקסיקו סיטי", emoji: "🇲🇽", abroad: true, airport: "Mexico City International Airport (MEX)" },
  { id: "copenhagen",label: "קופנהגן",    emoji: "🇩🇰", abroad: true, airport: "Copenhagen Airport (CPH)" },
  { id: "marrakech", label: "מרקש",       emoji: "🇲🇦", abroad: true, airport: "Marrakech Menara Airport (RAK)" }
];

const RESTAURANTS = {
  "tel-aviv": [
    { name: "R48", cuisine: "מסעדת שף", kosher: false, desc: "ארוחת טעימות יצירתית מחומרי גלם נדירים, בסטנדרט בינלאומי בלב העיר." },
    { name: "ASA Izakaya", cuisine: "יפני", kosher: false, desc: "בר-מסעדה יפני של השף רז רהב, עם דגש על מנות דגים וטכניקות יפניות." },
    { name: "מלגו ומלבר", cuisine: "פירות ים", kosher: false, desc: "מסעדת שף מודרנית עם דגש על מאכלי ים ודגים, בניהול מוטי טיטמן." },
    { name: "פסאדור", cuisine: "בשרים", kosher: true, desc: "תפריט בשרים בקונספט 'מחיר קבוע', נתחים מובחרים ומגוון מנות בשר." },
    { name: "GDB", cuisine: "המבורגרים", kosher: false, desc: "מקום יציב בסצנת ההמבורגרים — בשר בקר מיושן בלחמניית בריוש רכה." },
    { name: "מון (Moon) סושי בר", cuisine: "סושי", kosher: false, desc: "בר סושי מודרני בבוגרשוב, אווירה ועיצוב בניחוח חו״ל." },
    { name: "צ'יינה קלאס", cuisine: "אסייתי", kosher: false, desc: "מטבח יפני ואסייתי — סושי טרי, נודלס מיוחדים וסלטים אסייתיים." },
    { name: "יוליה", cuisine: "דגים", kosher: false, desc: "תפריט ים-תיכוני יצירתי בנמל תל אביב, דגים ופירות ים." },
    { name: "פיצה לילה", cuisine: "פיצה איטלקית", kosher: false, desc: "מהפיצריות הטובות בעיר — פיצה דקה עם קשה אוורירי." },
    { name: "ניניו", cuisine: "שף חלבית", kosher: true, desc: "מסעדת שף חלבית כשרה עם דגים וטכניקות מודרניות." },
    { name: "קפה AT8", cuisine: "ביסטרו", kosher: true, desc: "בית קפה וביסטרו כשר בדיזנגוף, מהבוקר ועד הלילה." }
  ],
  "jerusalem": [
    { name: "הדקה ה-90", cuisine: "מסעדת שף", kosher: false, desc: "מטבח ישראלי מודרני של השף יונתן רושפלד, במרכז העיר." },
    { name: "1868", cuisine: "שף ישראלי-צרפתי", kosher: false, desc: "מסעדה יוקרתית של השף ארנון דהן ברמה גבוהה." },
    { name: "צ'אקרה", cuisine: "מסעדת שף", kosher: false, desc: "מסעדת שף ותיקה ברחוב המלך ג'ורג'." },
    { name: "אדום", cuisine: "צרפתי", kosher: false, desc: "מסעדה צרפתית בחצר פיינגולד, תפריט גורמה באווירה אלגנטית." },
    { name: "גבריאל", cuisine: "מסעדת שף", kosher: false, desc: "מסעדת שף מצוינת באזור רחוב שלומציון." },
    { name: "עזורא", cuisine: "מטבח מסורתי", kosher: false, desc: "מוסד קולינרי מ-1948 בשוק — מרקי קובה, סופריטו ותבשילים ביתיים." },
    { name: "מורדוך", cuisine: "מזרחי", kosher: false, desc: "מסעדה מפורסמת וותיקה בשוק מחנה יהודה." },
    { name: "אריכה", cuisine: "סביח / סטריט פוד", kosher: false, desc: "סביח מוקפד בשכבות בתוך פיתה רכה, בשוק מחנה יהודה." },
    { name: "חומוס ארבעס", cuisine: "חומוס", kosher: false, desc: "חומוס טרי המוכן בעבודת יד, בשוק מחנה יהודה." },
    { name: "ג'וזף רימון", cuisine: "גריל ויין", kosher: true, desc: "גריל ויין כשר למהדרין באווירה ירושלמית, מרכז העיר." },
    { name: "DAVID 16", cuisine: "בשרים", kosher: true, desc: "בשרים כשר מול חומות העיר העתיקה, בר יינות וחדר סיגרים." }
  ],
  "ramat-gan": [
    { name: "שיפודי סמי ובניו", cuisine: "בשרים", kosher: false, desc: "מסעדת בשרים משפחתית מ-1960, דרך בן גוריון — בית לאוהבי בשר." },
    { name: "קפה MAE", cuisine: "דרום אמריקאי", kosher: false, desc: "טעמים ממרכז אמריקה במתחם הבורסה." },
    { name: "בלקסטון", cuisine: "ביסטרו צרפתי-ישראלי", kosher: true, desc: "ביסטרו כשר במתחם הבורסה." },
    { name: "הארנב הלבן", cuisine: "בשרים", kosher: false, desc: "מסעדת בשרים דרום אמריקאית במתחם הבורסה." },
    { name: "ריבר", cuisine: "אסייתי", kosher: false, desc: "מטבח אסייתי במתחם הבורסה." }
  ],
  "givatayim": [
    { name: "חומוס גבעתיים", cuisine: "חומוס", kosher: false, desc: "חומוסייה מוכרת — חומוס עם תוספות כמו פטריות, בשר, שקשוקה ומסבחה." },
    { name: "טורי", cuisine: "יפני / אסייתי", kosher: false, desc: "מסעדה בהשראת שער מקדש יפני, תפריט מרחבי אסיה ויינות איכותיים." }
  ],
  "herzliya": [
    { name: "דרבי בר דגים", cuisine: "דגים", kosher: false, desc: "מסעדת דגים במרינה הרצליה." },
    { name: "לולה מרטין", cuisine: "דגים", kosher: false, desc: "מסעדת דגים בשד' אבא אבן, הרצליה פיתוח." },
    { name: "בני הדייג", cuisine: "דגים", kosher: true, desc: "מסעדת דגים כשרה במרינה הרצליה." },
    { name: "לה ואקה לוקה", cuisine: "בשרים", kosher: false, desc: "מסעדת בשרים במדינת היהודים, הרצליה פיתוח." },
    { name: "לחם בשר", cuisine: "בשרים", kosher: false, desc: "מסעדת בשרים מוקפדת במרינה — עיצוב חדיש ושירות מצוין." },
    { name: "נאמוס", cuisine: "יפני", kosher: false, desc: "מטבח יפני מודרני — דגים, טפניאקי וסושי במרינה." }
  ],
  "petah-tikva": [
    { name: "השיפוד והמנגל", cuisine: "בשרים בוכרי", kosher: true, desc: "מסעדת בשרים בוכרית כשרה, צומת סגולה." },
    { name: "שיפודי ציפורה", cuisine: "בשרים", kosher: true, desc: "נתחי בשר משובחים במרכז הבילויים, אווירה יוקרתית." },
    { name: "ג'ויה", cuisine: "איטלקי", kosher: false, desc: "מסעדה איטלקית של השף בני אשכנזי, טעמים יוצאי דופן." },
    { name: "מריונלה", cuisine: "איטלקי", kosher: true, desc: "איטלקי כשר עם נגיעות מודרניות." },
    { name: "פטריקס", cuisine: "בר-מסעדה", kosher: false, desc: "תפריט שף, 27 סוגי בירה מהחבית ואלכוהול משובח." },
    { name: "ג'ירף", cuisine: "אסייתי", kosher: false, desc: "מטבח אסייתי ותאילנדי, כולל מנות ללא גלוטן." }
  ],
  "rishon": [
    { name: "סטלה ביץ'", cuisine: "דגים ובשרים", kosher: false, desc: "מסעדה מול הים, גם ארוחות בוקר מגוונות." },
    { name: "אמילי גריל בר", cuisine: "בשרים", kosher: true, desc: "אווירה ישראלית-מזרחית מודרנית, בשרים טעימים." },
    { name: "טיטי מרטין בר", cuisine: "בר-מסעדה", kosher: false, desc: "קוקטיילים, אוכל טוב ומוזיקה באזור התעשייה הישן." },
    { name: "פטריקס", cuisine: "בר-מסעדה", kosher: false, desc: "בר-מסעדה ענק (400 מקומות) עם ישיבה הצופה לאגם." },
    { name: "לחם בשר", cuisine: "בשרים", kosher: true, desc: "בשרים כשר עם לחמים מהטאבון וישון בשרים במקום." },
    { name: "סוהו", cuisine: "מסעדה", kosher: false, desc: "מסעדה מיתולוגית ואהובה, קרוב ל-30 שנה באזור התעשייה." },
    { name: "סלון יווני", cuisine: "יווני", kosher: false, desc: "מסעדה יוונית עם דגש על חוויית בילוי והופעות חיות." }
  ],
  "holon": [
    { name: "בובו", cuisine: "איטלקי", kosher: true, desc: "פסטות טריות, פיצות ומנות איטלקיות קלאסיות, כשר." },
    { name: "דונה (DONNA)", cuisine: "איטלקי", kosher: false, desc: "מטבח איטלקי משובח." },
    { name: "קפה ללוש בראסרי", cuisine: "אירופאי", kosher: false, desc: "תפריט עשיר בנגיעה אירופאית, טריות ומחירים הוגנים." }
  ],
  "bat-yam": [
    { name: "הפטריקס ביץ", cuisine: "בר על הים", kosher: false, desc: "מסעדת בר על הים עם מנות עשירות ומגוונות ובר אלכוהול." },
    { name: "גורילה", cuisine: "בר-קפה", kosher: false, desc: "בר-קפה מול נוף הים בטיילת בת ים." }
  ],
  "haifa": [
    { name: "פטוש", cuisine: "ערבי / ים תיכוני", kosher: false, desc: "מסעדה במבנה עתיק לשימור, אוכל וגם אמנות." },
    { name: "רולא", cuisine: "ערבי גלילי", kosher: false, desc: "מטבח ערבי — שישברק, חומוס משובח וקציצות." },
    { name: "רפאלו", cuisine: "איטלקי ים תיכוני", kosher: false, desc: "תפריט איטלקי-ים תיכוני עם טוויסט ישראלי." },
    { name: "פאפיאנו", cuisine: "איטלקי", kosher: false, desc: "מסעדה איטלקית עם קריצה ים תיכונית, פיצות ופסטות." },
    { name: "וניה ביסטרו", cuisine: "ביסטרו", kosher: false, desc: "מסורת חיפאית מול בישול מודרני — קרפצ'יו, פסטה ארטישוק." },
    { name: "ליבריה", cuisine: "פאב ומבשלה", kosher: false, desc: "מסעדה, פאב ומבשלת בירה בנמל חיפה — בירות מקוריות." },
    { name: "דולפין", cuisine: "ים תיכוני / יווני", kosher: false, desc: "בשרים, דגים ופירות ים בסגנון בלקני-יווני." }
  ],
  "eilat": [
    { name: "המפלט האחרון", cuisine: "דגים", kosher: false, desc: "מסעדת דגים אילתית מפורסמת וותיקה." },
    { name: "לה סרדין", cuisine: "דגים", kosher: false, desc: "מוקד משיכה לחובבי דגים ומאכלי ים." },
    { name: "איל פנטולינו", cuisine: "איטלקי / פסטה בר", kosher: false, desc: "פסטה-בר עם אווירה שלווה ומאכלים מופלאים." },
    { name: "קפה אופטימי", cuisine: "איטלקי / ישראלי", kosher: false, desc: "פיצות, פסטות, דגים וארוחות בוקר — גם טבעוני." },
    { name: "פאפי", cuisine: "בשרים ארגנטינאי", kosher: false, desc: "חוויית בשרים ארגנטינאית עם גריל גחלים ועשן." },
    { name: "המחבוא של אדי", cuisine: "בינלאומי-צרפתי", kosher: false, desc: "מסעדה ותיקה מ-1979, סגנון בישול בינלאומי-צרפתי." },
    { name: "לוויתן", cuisine: "המבורגרים", kosher: false, desc: "המבורגרים של השף ליאור רפאל — מהטובים בארץ." }
  ],
  "beer-sheva": [
    { name: "קבב אמונה", cuisine: "בשרים", kosher: false, desc: "שיפודיה משפחתית משנות ה-60, מורשת קבבים." },
    { name: "קמפאי סטריט ווק", cuisine: "אסייתי", kosher: true, desc: "מטבח פאן-אסייתי בגרסה כשרה." },
    { name: "שושנה", cuisine: "אוכל ביתי", kosher: true, desc: "אוכל ביתי ישראלי-מרוקאי כשר וגם מנות טבעוניות." }
  ],
  "netanya": [
    { name: "משה שגב", cuisine: "בשרים / שף", kosher: false, desc: "חיבור בין מטבח שף חוויתי למסורת." },
    { name: "אל גאוצ'ו", cuisine: "בשרים", kosher: true, desc: "בשרי איכות מדרום אמריקה, נוף פנורמי לים, כשר." },
    { name: "מסעדת היקב", cuisine: "ים תיכוני", kosher: false, desc: "בטיילת נתניה — אוכל מעולה, נוף מרהיב ומבחר משקאות." },
    { name: "לאגר אנד אייל", cuisine: "בר בירות", kosher: false, desc: "בר בירות לונדוני עם עשרות בירות מהחבית ובבקבוק." },
    { name: "מרפי'ס", cuisine: "פאב אירי", kosher: false, desc: "פאב אירי עם אווירה וריהוט עץ אותנטי." }
  ],
  "tiberias": [
    { name: "לגונה", cuisine: "דגים ובשרים", kosher: false, desc: "דגים ובשרים על האש במדרחוב טבריה." },
    { name: "טיביס", cuisine: "בשרים", kosher: false, desc: "מנות בשרים מוקפדות בהנהלת השף חיים טיבי." },
    { name: "סנט אורבן", cuisine: "בר יין", kosher: false, desc: "בר יין במרתף עתיק עם מרפסת המשקיפה לכנרת." },
    { name: "סין צ'אן", cuisine: "אסייתי", kosher: true, desc: "מסעדה אסייתית כשרה בטבריה." }
  ],
  "akko": [
    { name: "אורי בורי", cuisine: "דגים", kosher: false, desc: "נחשבת למסעדה הטובה בעכו — דגים ומאכלי ים מטריפים." },
    { name: "אבו כריסטו", cuisine: "דגים", kosher: false, desc: "מוסד קולינרי ותיק בעכו העתיקה, נוסד ב-1948." },
    { name: "רותס (ROOTS)", cuisine: "לבנטיני", kosher: true, desc: "מטבח לבנטיני עדכני וכשר של השף דראל בן נבט, בעיר העתיקה." },
    { name: "חומוס סעיד", cuisine: "חומוס", kosher: false, desc: "חומוס טרי ועשיר עם שמן זית ולימון, בעיר העתיקה." }
  ],
  "nazareth": [
    { name: "דיאנא", cuisine: "ערבי", kosher: false, desc: "מהוותיקות בנצרת — קבב טלה מפורסם על מקל קינמון, השף דוחול ספדי." },
    { name: "לוקנדה", cuisine: "ערבי-גלילי / איטלקי", kosher: false, desc: "שילוב מטבח ערבי-גלילי ואיטלקי, במלון רמדה אוליבייה." },
    { name: "תשרין", cuisine: "פיוז'ן ערבי-ביסטרו", kosher: false, desc: "פיוז'ן בין מטבח ערבי מסורתי לביסטרו עדכני, בבניין אבן מהמאה ה-19." },
    { name: "חומוסיית עבדאללה שרביני", cuisine: "חומוס / פלאפל", kosher: false, desc: "מוסד מפורסם — חומוס אוורירי, פלאפל פריך ושווארמה." }
  ],
  "ashdod": [
    { name: "פסקדו", cuisine: "דגים", kosher: true, desc: "מהמסעדות הכשרות הטובות בארץ — נבחרה ל-50 הטובות במזרח התיכון וצפון אפריקה (2022)." },
    { name: "פארינו", cuisine: "פיצה נפוליטנית", kosher: false, desc: "אחת הפיצריות הנפוליטניות הטובות בארץ." },
    { name: "נמסטה", cuisine: "הודי", kosher: false, desc: "מקום מושלם לארוחה הודית ייחודית ומהנה." },
    { name: "עלמא", cuisine: "בר אוכל ישראלי", kosher: false, desc: "בר אוכל צעיר ורענן עם מנות פיוז'ן וטעמים אותנטיים." },
    { name: "ערמונים", cuisine: "קונספט / יוקרה", kosher: false, desc: "מסעדת קונספט על גדות האגם בריזורט דרים איילנד, אווירה יוקרתית וטבע." }
  ],
  "ashkelon": [
    { name: "סקובר בר", cuisine: "דגים / חלבי", kosher: false, desc: "על רציף המרינה — דגים, פסטות, פיצות, סלטים וארוחות בוקר." },
    { name: "ארצ'י", cuisine: "פאב-מסעדה", kosher: false, desc: "בחוף דלילה מול הים — מנות מהמטבח האירופאי-אמריקאי המודרני." },
    { name: "הניצחון של חני", cuisine: "רומני ביתי", kosher: false, desc: "מסעדה רומנית ביתית עם שורשים עמוקים באשקלון." },
    { name: "אריסטו", cuisine: "בית קפה", kosher: false, desc: "בית קפה צעיר ותוסס המתמחה בקפה חזק ועיצוב ייחודי." },
    { name: "סטיקיית איסטנבול", cuisine: "בשרים", kosher: true, desc: "מסעדת בשרים כשרה משנת 1962, גריל גחלים אמיתי." }
  ],
  "rehovot": [
    { name: "פבריקה", cuisine: "פיצה נפוליטנית", kosher: false, desc: "אחת הפיצריות הנפוליטניות הטובות בארץ." },
    { name: "מו ומו", cuisine: "בשרים", kosher: false, desc: "מוסד הבשרים המיתולוגי של רחובות." },
    { name: "כרמים", cuisine: "שף ים תיכוני", kosher: false, desc: "מסעדת farm to table של השף סהר רפאל, חיבור לאדמה המקומית." },
    { name: "נינה ביאנכה", cuisine: "שף ים תיכוני", kosher: false, desc: "מסעדת שף ים תיכונית ותיקה, השף ירין עמירה." },
    { name: "קפה סזאר", cuisine: "מסעדה-קפה", kosher: true, desc: "כשר, במשכן חדש מרהיב עם אווירה של הערים הגדולות." },
    { name: "ג'וג'ו", cuisine: "אתיופי", kosher: false, desc: "מסעדה אתיופית ותיקה ברחובות." }
  ],
  "modiin": [
    { name: "קונמיגו", cuisine: "מסעדת שף", kosher: false, desc: "מסעדת שף של השף עידו אלקיים, מגוון מנות ואירוח." },
    { name: "גריל 443", cuisine: "בשרים", kosher: false, desc: "בשרים על גריל פחמים, מוגשים עם לאפות חמות וסלטים." },
    { name: "מכביס", cuisine: "אוכל ביתי", kosher: false, desc: "מוניטין של 30 שנה — אוכל טרי, שירות מעולה ובישול ביתי." }
  ],
  "kfar-saba": [
    { name: "סטקיית סבינו", cuisine: "בשרים", kosher: false, desc: "מוסד כפר-סבאי ותיק — 16 סלטי בית ובשרים מפורסמים." },
    { name: "פיאנו פיאנו", cuisine: "איטלקי", kosher: false, desc: "פיצות ומאפים בתנור עצים שהובא מאיטליה." },
    { name: "קפה המדרחוב", cuisine: "בית קפה", kosher: false, desc: "קפה שכונתי במדרחוב ירושלים, אווירה ביתית ותוססת." },
    { name: "לחם ארז", cuisine: "מאפייה-מסעדה", kosher: false, desc: "סניף הרשת הוותיקה ברחוב רוטשילד, קונספט קולינרי ייחודי." },
    { name: "Temple Bar", cuisine: "פאב אירי", kosher: false, desc: "שחזור פאב אירי עם מבחר עצום של בירות ואלכוהול." }
  ],
  "raanana": [
    { name: "חנדל'ה", cuisine: "כפרי / ים תיכוני", kosher: false, desc: "אווירה כפרית ירוקה — פסטות טריות וצלעות טלה עסיסיות." },
    { name: "בוטגה איטליה", cuisine: "איטלקי", kosher: false, desc: "מסעדה איטלקית משפחתית עם תנור מרכזי וקלאסיקות איטלקיות." },
    { name: "לה טרטוריה", cuisine: "איטלקי חלבי", kosher: false, desc: "איטלקי חלבי משפחתי במרכז רעננה מול יד לבנים." },
    { name: "באקארו גריל בר", cuisine: "בשרים / BBQ", kosher: false, desc: "מסעדת בשרים וגריל ברעננה, גם לאירועים." }
  ],
  "zichron": [
    { name: "אדמה", cuisine: "ישראלי", kosher: false, desc: "בקתה קולינרית בבניין אבן משוחזר בתחילת רחוב המייסדים." },
    { name: "סומאק", cuisine: "ביסטרו גלילי", kosher: false, desc: "ביסטרו גלילי של השף טארק חביב במתחם הקניות מול זכרון." },
    { name: "מנואלה", cuisine: "איטלקי", kosher: false, desc: "איטלקי קלאסי עם מרפסת מוגבהת מול המדרחוב." },
    { name: "צ'אנג מאי", cuisine: "סיני / אסייתי", kosher: false, desc: "מסעדה סינית בחצרות זכרון עם נוף מהמם." },
    { name: "בתיה ונחמן", cuisine: "בשרים מעושנים", kosher: true, desc: "מסעדת בשרים מעושנים כשרה של רונן רביב." },
    { name: "יקב תשבי", cuisine: "יקב ומסעדה", kosher: false, desc: "חוויה במתחם היקב — מאפייה איכותית ומרכז טעימות יין." }
  ],
  "hadera": [
    { name: "בני הדייג — כפר הים", cuisine: "דגים", kosher: false, desc: "מסעדת דגים ותיקה בכפר הים, 14 סוגי סלטים וצמוד לחוף." },
    { name: "בריסקט", cuisine: "בשר מעושן / BBQ", kosher: false, desc: "גן עדן לחובבי בשר מעושן — נתחי BBQ וסנדוויצ'ים עסיסיים." },
    { name: "יפן יפן", cuisine: "יפני / סושי", kosher: false, desc: "סושי עם מרכיבים טריים והגשה אמנותית." },
    { name: "שואו קפה", cuisine: "בית קפה", kosher: false, desc: "בית שני למבלים באזור, הקפדה על פרטים וקבלת פנים חמה." },
    { name: "אופרה", cuisine: "תימני מסורתי", kosher: false, desc: "מאכלים מהמטבח התימני המסורתי, ברחוב הנשיא וייצמן." }
  ],
  "karmiel": [
    { name: "ראי יקב ומסעדה", cuisine: "בלקני / ים תיכוני", kosher: false, desc: "מתחם יקב ומסעדה בכפר ראמה — אוכל גלילי-בלקני עם נגיעות בולגריות." },
    { name: "בית גני", cuisine: "צמחוני / דגים", kosher: false, desc: "אווירה כפרית רומנטית מול הרי הגליל — צמחוני, דגים ויין." },
    { name: "פאט ויני", cuisine: "איטלקי", kosher: false, desc: "מסעדה איטלקית בביג כרמיאל עם מגוון רחב." },
    { name: "מג'דלה", cuisine: "שף ערבי", kosher: false, desc: "מסעדת שף עממית — מנות ערביות מסורתיות של השף נאאל זרקאוי." },
    { name: "אל-רוביאן", cuisine: "בשרים ודגים", kosher: false, desc: "בשרים, דגים ופירות ים ברמה גבוהה, יחס אישי, פתוח גם בשבת." }
  ],

  /* ===================== חו״ל ===================== */
  "paris": [
    { name: "Le Train Bleu", cuisine: "בראסרי צרפתית", kosher: false, desc: "בראסרי בסגנון בל אפוק בתחנת גאר דה ליון — קלאסיקות צרפתיות ומבט מרהיב." },
    { name: "Café de Flore", cuisine: "בית קפה", kosher: false, desc: "מבתי הקפה המפורסמים בעולם, מוקד למשוררים ואמנים בסן-ז'רמן." },
    { name: "L'As du Fallafel", cuisine: "פלאפל", kosher: false, desc: "הפלאפל המפורסם ברובע היהודי ההיסטורי לה מארה." },
    { name: "Tour d'Argent", cuisine: "מסעדת שף", kosher: false, desc: "מסעדה היסטורית עם כוכב מישלן ונוף לנוטרדאם." },
    { name: "Le Fouquet's", cuisine: "צרפתי קלאסי", kosher: false, desc: "מוסד אגדי מ-1899 בשאנז אליזה, תפריט בהשראת פייר גניר." }
  ],
  "london": [
    { name: "Rules", cuisine: "בריטי מסורתי", kosher: false, desc: "המסעדה הוותיקה בלונדון (1798) — מטבח בריטי מסורתי וציד." },
    { name: "Dishoom", cuisine: "הודי-בומביי", kosher: false, desc: "בהשראת בתי הקפה האיראניים של בומביי — אהובה על מקומיים ותיירים." },
    { name: "Sketch", cuisine: "מסעדת שף", kosher: false, desc: "חלל אמנותי מפורסם עם חדר גלריה צבעוני." },
    { name: "The Wolseley", cuisine: "בראסרי אירופאית", kosher: false, desc: "בראסרי זוהרת בפיקדילי, אווירה גרנדיוזית." },
    { name: "St John", cuisine: "בריטי מודרני", kosher: false, desc: "חלוצת גישת ה'אף-לזנב', מטבח בריטי מודרני ומשפיע." }
  ],
  "rome": [
    { name: "Roscioli", cuisine: "איטלקי", kosher: false, desc: "חצי מעדנייה חצי מסעדה — הקאצ'ו א פפה שלה אגדי." },
    { name: "Alfredo alla Scrofa", cuisine: "איטלקי", kosher: false, desc: "מקום הולדתו של פטוצ'יני אלפרדו המפורסם בעולם." },
    { name: "La Campana", cuisine: "איטלקי", kosher: false, desc: "המסעדה הוותיקה ברומא (1518), מנות רומאיות מסורתיות." },
    { name: "Flavio al Velavevodetto", cuisine: "טרטוריה", kosher: false, desc: "טרטוריה אגדית בטסטאצ'ו הבנויה בתוך גבעת חרסים עתיקה." },
    { name: "Aroma", cuisine: "מסעדת שף", kosher: false, desc: "מסעדת מישלן על הגג עם נוף ישיר לקולוסיאום." }
  ],
  "dubai": [
    { name: "Orfali Bros Bistro", cuisine: "ביסטרו", kosher: false, desc: "דורגה מספר 1 במזרח התיכון — ביסטרו של האחים אורפלי." },
    { name: "Al Muntaha", cuisine: "מסעדת שף", kosher: false, desc: "בקומה ה-27 של בורג' אל ערב, זוכת כוכב מישלן." },
    { name: "Ravi's", cuisine: "פקיסטני", kosher: false, desc: "אגדה מסאטווה — כולם עומדים בתור, מטקסיסטים ועד סלבס." },
    { name: "Ossiano", cuisine: "דגים ופירות ים", kosher: false, desc: "חוויית אכילה מתחת למים מול אקווריום ענק." },
    { name: "Atmosphere", cuisine: "מסעדת שף", kosher: false, desc: "מסעדה בקומה 122 של בורג' חליפה — נוף עוצר נשימה." }
  ],
  "newyork": [
    { name: "Katz's Delicatessen", cuisine: "דלי", kosher: false, desc: "פסטרמי אגדי מ-1888, מהסצנה של 'כשהארי פגש את סאלי'." },
    { name: "Peter Luger", cuisine: "סטייקהאוס", kosher: false, desc: "סטייקהאוס מיתולוגי בברוקלין, מזומן בלבד." },
    { name: "Russ & Daughters", cuisine: "דלי", kosher: false, desc: "בייגלים ודגים מעושנים מ-1914, מוסד בלואר איסט סייד." },
    { name: "Minetta Tavern", cuisine: "בראסרי", kosher: false, desc: "הברגר המהולל של העיר בגריניץ' וילג'." },
    { name: "Sylvia's", cuisine: "סול פוד", kosher: false, desc: "סול פוד בהארלם מאז 1962 — עוגן קהילתי מפורסם." }
  ],
  "barcelona": [
    { name: "Pinotxo Bar", cuisine: "טאפאס", kosher: false, desc: "דוכן טאפאס אגדי בשוק לה בוקריה." },
    { name: "Botafumeiro", cuisine: "דגים ופירות ים", kosher: false, desc: "מהמסעדות הידועות לפירות ים בעיר." },
    { name: "La Plata", cuisine: "טאפאס", kosher: false, desc: "מוסד ברובע הגותי המגיש אותן 4 טאפאס מאז 1945." },
    { name: "Can Paixano", cuisine: "טאפאס וקאווה", kosher: false, desc: "המכונה 'לה שמפניירה' — קאווה ביתי וטאפאס במחיר נוח." },
    { name: "Can Solé", cuisine: "דגים ואורז", kosher: false, desc: "פירות ים, אורז ופיאייה/פידואה מהטובים בברצלונה." }
  ],
  "tokyo": [
    { name: "Sukiyabashi Jiro", cuisine: "סושי", kosher: false, desc: "אולי מסעדת הסושי המפורסמת בעולם, של השף ג'ירו אונו." },
    { name: "Sushi Saito", cuisine: "סושי", kosher: false, desc: "מקדש סושי עם כוכבי מישלן בסגנון אדומאה." },
    { name: "Narisawa", cuisine: "מסעדת שף", kosher: false, desc: "חוויה תיאטרלית — מנות כמו 'לחם היער' שנאפה בשולחן." },
    { name: "Kanda", cuisine: "קאיסקי", kosher: false, desc: "מסעדת מישלן לקאיסקי — דיוק ועונתיות מושלמים." },
    { name: "Tsujihan", cuisine: "דגים", kosher: false, desc: "קערות אורז ופירות ים (קייסן דון) מפורסמות בניהונבאשי." }
  ],
  "istanbul": [
    { name: "Karaköy Lokantası", cuisine: "טורקי", kosher: false, desc: "מהמסעדות האיקוניות — מנות מסורתיות המוגשות מהמגש." },
    { name: "Pandeli", cuisine: "טורקי", kosher: false, desc: "מעל שוק התבלינים, פועלת מעל 100 שנה, זוכת ביב גורמן." },
    { name: "Mikla", cuisine: "אנטולי מודרני", kosher: false, desc: "על גג המרמרה פרה — מטבח אנטולי מודרני ונוף לעיר." },
    { name: "Balıkçı Sabahattin", cuisine: "דגים", kosher: false, desc: "דגים בבית עות'מאני מעץ בעיר העתיקה." },
    { name: "Karaköy Güllüoğlu", cuisine: "קינוחים ומאפים", kosher: false, desc: "חנות מאפים איקונית — מהבקלווה הטובה באיסטנבול." }
  ],
  "bangkok": [
    { name: "Jay Fai", cuisine: "אוכל רחוב", kosher: false, desc: "אגדת רחוב עם כוכב מישלן — חביתת סרטנים מפורסמת." },
    { name: "Sorn", cuisine: "תאילנדי דרומי", kosher: false, desc: "מטבח תאילנדי דרומי, כוכבי מישלן — ההזמנה הכי נחשקת בעיר." },
    { name: "Thipsamai", cuisine: "פאד תאי", kosher: false, desc: "מהפאד תאי המפורסם בבנגקוק ('שער הרוחות')." },
    { name: "Wattana Panich", cuisine: "מרק בקר", kosher: false, desc: "מרק בקר שרותח באותו סיר כבר מעל 40 שנה." },
    { name: "Le Du", cuisine: "תאילנדי מודרני", kosher: false, desc: "מסעדת שף שדורגה מספר 1 באסיה, מטבח תאילנדי מודרני." }
  ],
  "singapore": [
    { name: "Tian Tian Hainanese Chicken Rice", cuisine: "אוכל רחוב", kosher: false, desc: "אורז עוף היינאני עטור מישלן בשוק מקסוול." },
    { name: "Hawker Chan", cuisine: "אוכל רחוב", kosher: false, desc: "ההוקר הראשון בעולם עם כוכב מישלן — עוף סויה עם אורז/אטריות." },
    { name: "Maxwell Food Centre", cuisine: "מרכז הוקרים", kosher: false, desc: "ממרכזי ההוקרים המפורסמים — מגוון עצום של אוכל רחוב." },
    { name: "Newton Food Centre", cuisine: "מרכז הוקרים", kosher: false, desc: "מרכז הוקרים מפורסם (מהסרט 'עשירים ומטורפים')." },
    { name: "Lau Pa Sat", cuisine: "מרכז הוקרים", kosher: false, desc: "מרכז הוקרים בארכיטקטורה קולוניאלית במרכז העיר." }
  ],
  "lisbon": [
    { name: "Cervejaria Ramiro", cuisine: "פירות ים", kosher: false, desc: "מסעדת פירות ים איקונית משנות ה-50, סנדוויץ' פרגו מפורסם." },
    { name: "Pastéis de Belém", cuisine: "מאפייה", kosher: false, desc: "הפסטל דה נאטה האגדי לפי מתכון סודי מ-1837." },
    { name: "Gambrinus", cuisine: "פורטוגזי מסורתי", kosher: false, desc: "מוסד מ-1936, מטבח פורטוגזי קלאסי ומהודר." },
    { name: "Taberna Sal Grosso", cuisine: "טברנה", kosher: false, desc: "טברנה פורטוגזית אינטימית מהמבוקשות בליסבון." },
    { name: "Galeto", cuisine: "דלפק / דיינר", kosher: false, desc: "מסעדת דלפק מ-1966 שנשארה כמו שהייתה." }
  ],
  "berlin": [
    { name: "Tim Raue", cuisine: "אסייתי / שף", kosher: false, desc: "מסעדת שף מפורסמת (Chef's Table), ברווז פקין ומטבח אסייתי." },
    { name: "Konnopke's Imbiss", cuisine: "אוכל רחוב", kosher: false, desc: "דוכן קארי-וורסט אגדי מ-1930 מתחת לפסי הרכבת." },
    { name: "Mustafa's Gemüse Kebap", cuisine: "קבב", kosher: false, desc: "כריך קבב עוף וירקות מפורסם — תור של שעתיים." },
    { name: "Nobelhart & Schmutzig", cuisine: "מודרני", kosher: false, desc: "תפריט טעימות ממרכיבים מקומיים בלבד (ברלין-ברנדנבורג)." },
    { name: "Schwarzes Café", cuisine: "בית קפה", kosher: false, desc: "מוסד ברליני הפתוח 24 שעות במערב העיר." }
  ],
  "amsterdam": [
    { name: "De Kas", cuisine: "מהחווה לצלחת", kosher: false, desc: "חממת זכוכית ענקית — ירקות טריים מהגינה שלה." },
    { name: "Vleminckx", cuisine: "צ'יפס", kosher: false, desc: "הצ'יפס הפלמי הטוב באמסטרדם מ-1957, 28 רטבים." },
    { name: "Café de Reiger", cuisine: "הולנדי", kosher: false, desc: "מוסד מ-1642 — עוגת תפוחים הולנדית אגדית." },
    { name: "Brouwerij 't IJ", cuisine: "מבשלת בירה", kosher: false, desc: "מבשלת בירה למרגלות טחנת רוח הולנדית אותנטית." },
    { name: "Yamazato", cuisine: "יפני", kosher: false, desc: "מסעדה יפנית מסורתית עם כוכב מישלן במלון אוקורה." }
  ],
  "mexicocity": [
    { name: "Pujol", cuisine: "מסעדת שף", kosher: false, desc: "מהמסעדות המפורסמות בעיר (השף אנריקה אולוֶרה), מולה מדרה." },
    { name: "Contramar", cuisine: "פירות ים", kosher: false, desc: "מוסד פירות ים ברומא — טוסטדת טונה ופסקדו א לה טאליה." },
    { name: "Quintonil", cuisine: "מסעדת שף", kosher: false, desc: "מדורגת בין הטובות בעולם, דגש על חומרי גלם מקומיים." },
    { name: "El Califa de León", cuisine: "טאקו", kosher: false, desc: "דוכן הטאקו הראשון בעולם שזכה בכוכב מישלן." },
    { name: "Churrería El Moro", cuisine: "קינוחים", kosher: false, desc: "צ'ורוס אגדי עם שוקולד חם מאז 1935." }
  ],
  "copenhagen": [
    { name: "Noma", cuisine: "נורדי חדש", kosher: false, desc: "מהמסעדות המפורסמות בעולם (השף רנה רדזפי), נורדי חדש." },
    { name: "Geranium", cuisine: "מסעדת שף", kosher: false, desc: "שלושה כוכבי מישלן — מטבח נורדי עונתי ומעודן." },
    { name: "Alchemist", cuisine: "חוויה קולינרית", kosher: false, desc: "40+ מנות בחוויה של 6 שעות בין אמנות לאוכל." },
    { name: "Hart Bageri", cuisine: "מאפייה", kosher: false, desc: "מהלחם מחמצת והמאפים הטובים בקופנהגן." },
    { name: "Kadeau", cuisine: "נורדי חדש", kosher: false, desc: "מסעדת נורדי חדש עם תפריט טעימות יצירתי." }
  ],
  "marrakech": [
    { name: "Nomad", cuisine: "מרוקאי מודרני", kosher: false, desc: "מרוקאי מודרני עם גג הצופה לכיכר התבלינים." },
    { name: "Dar Yacout", cuisine: "מרוקאי", kosher: false, desc: "מטבח מרוקאי מפואר בריאד יוקרתי — פסטייה וטאג'ין." },
    { name: "Le Jardin", cuisine: "מסעדת גן", kosher: false, desc: "מסעדת הגן המפורסמת במדינה — חצר עם עצי בננה ודקלים." },
    { name: "Café des Épices", cuisine: "בית קפה", kosher: false, desc: "טרסה צבעונית מעל כיכר רחבה קדימה בשוק." },
    { name: "Grand Café de la Poste", cuisine: "בראסרי", kosher: false, desc: "בראסרי איקונית משנות ה-20 בסגנון קולוניאלי." }
  ]
};

window.CITIES = CITIES;
window.RESTAURANTS = RESTAURANTS;
