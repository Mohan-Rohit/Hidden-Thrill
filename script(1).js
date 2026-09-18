/* =========================
   AUTHENTICATION CHECK
   ========================= */

const loggedInUser =
    localStorage.getItem("currentUser");

if (!loggedInUser) {
    window.location.href = "login.html";
}


/* =========================
   USER PROFILE
   ========================= */

const profileName =
    document.getElementById("profileName");

const logoutBtn =
    document.getElementById("logoutBtn");

if (profileName) {
    profileName.textContent = loggedInUser;
}

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("currentUser");

        window.location.href = "login.html";

    });

}


/* =========================================================
   HIDDEN THRILL
   ========================================================= */


/* =========================
   TRANSLATIONS
   ========================= */

const translations = {

    en: {

        tagline: "Every Card Hides a Surprise",
        language: "Language",

        welcome: "Welcome to Hidden Thrill",
        chooseGame: "Choose your game and discover what is hidden.",

        /* WELCOME POPUP */

        welcomePopup: "Welcome to Hidden Thrill, {username}!\n\nEvery time you play, the numbers will be assigned in random order.",

        game1: "Game 1",
        game1Desc: "Lucky cards, mystery rewards and the final Winner Cup.",

        game2: "Game 2",
        game2Desc: "A new hidden challenge is coming soon.",

        playNow: "Play Now",
        arrivingSoon: "Arriving Soon",

        history: "History",
        rules: "Rules",
        back: "Back",

        gameSetup: "Game Setup",
        enterPlayers: "Enter player names to begin.",
        numberOfPlayers: "Number of Players",
        startGame: "Start Game",

        currentTurn: "Current Turn",
        leaderboard: "Leaderboard",

        home: "Home",
        newGame: "New Game",
        exit: "Exit",

        winner: "WINNER",
        clearHistory: "Clear History",

        level1: "LEVEL 1",
        luckyStart: "LUCKY START",
        level1Rules: "60 hidden cards. Select a card to reveal a positive number and add it to your score.",

        level2: "LEVEL 2",
        negativeZone: "NEGATIVE ZONE",
        level2Rules: "32 hidden cards. Every card contains a negative value that decreases your score.",

        level3: "LEVEL 3",
        mysteryCards: "MYSTERY CARDS",
        level3Rules: "16 hidden cards. 8 contain scoring numbers and 8 contain blasts.",

        level4: "LEVEL 4",
        treasureVault: "TREASURE VAULT",
        level4Rules: "8 hidden cards. 1 Gold Coin gives +300, 1 Silver Coin gives +150, and 6 cards contain face emojis.",

        level5: "LEVEL 5",
        winnerCup: "WINNER CUP",
        level5Rules: "3 hidden cards. One contains the Winner Cup and two contain flower bouquets.",

        selectCard: "Select a hidden card.",
        selected: "selected",
        points: "points",

        gold: "Gold",
        silver: "Silver",
        blast: "Blast",
        face: "Face",
        bouquet: "Flower Bouquet",

        empty: "Empty",
        zero: "0",

        level2Begins: "LEVEL 2 BEGINS",
        level3Begins: "LEVEL 3 BEGINS",
        level4Begins: "LEVEL 4 BEGINS",
        level5Begins: "LEVEL 5 BEGINS",

        nextLevel: "Get ready for the next level.",

        finalists: "Finalists",
        eliminated: "Eliminated",

        chooseWinnerCup: "Choose a card to find the Winner Cup.",
        firstFinalistTurn: "Finalist with the higher score chooses first.",
        secondFinalistTurn: "Second finalist chooses now.",

        finalChoice: "Final choice!",

        winnerCupFound: "Winner Cup found!",
        winnerByScore: "Winner decided by the highest score.",

        gameComplete: "Game Complete",
        noHistory: "No games played yet.",

        arrivingMessage: "Game 2 is coming soon.",

        levelReached: "Level Reached",

        /* NEW VOICE / MESSAGE TEXT */

        blastHit: "You hit a blast!",
        goldWon: "You have won Gold Coin worth +300 points.",
        silverWon: "You have won Silver Coin worth +150 points.",
        faceWon: "You have won Face Card.",
        winnerAnnouncement: "won the game, congratulations!",

        /* RULES */

        rulesTwoTitle: "2 Player Game",
        rulesTwoIntro: "The 2-player game has 4 levels. The game ends after Level 4.",

        rulesLevel1Title: "Level 1 — Lucky Start",
        rulesLevel1Text: "There are 60 hidden cards. Each card contains a positive number from +10 to +100. Players take turns selecting one card. The revealed value is added to the current player's score.",

        rulesLevel2Title: "Level 2 — Negative Zone",
        rulesLevel2Text: "There are 32 hidden cards. Each card contains a negative value from -10 to -100. Players take turns selecting cards. The revealed negative value is subtracted from the current player's score.",

        rulesLevel3Title: "Level 3 — Mystery Cards",
        rulesLevel3Text: "There are 16 hidden cards. 8 cards contain numbers from +20 to +120 and 8 cards contain blasts. Number cards add points. A blast gives 0 points.",

        rulesLevel4Title: "Level 4 — Treasure Vault",
        rulesLevel4Text: "There are 8 hidden cards. 1 Gold Coin gives +300 points, 1 Silver Coin gives +150 points, and 6 cards contain face emojis and give 0 points. After all cards are selected, the player with the highest score wins.",

        rulesTwoFinish: "If both players have the same score, the player who appears first in registration order wins.",

        rulesFourTitle: "4 Player Game",
        rulesFourIntro: "The 4-player game has 5 levels. After Level 4, only the top 2 players continue to Level 5.",

        rulesFourLevel5Title: "Level 5 — Winner Cup",
        rulesFourLevel5Text: "There are 3 hidden cards: 1 Winner Cup and 2 flower bouquets. The finalist with the higher score after Level 4 chooses first. If that player finds the Winner Cup, they win immediately. Otherwise, the other finalist chooses next.",

        rulesFourFinal: "The player who finds the Winner Cup becomes the final winner. If the Winner Cup is not selected until the final available card, the finalist who selects that final card wins.",

        rulesTie: "If players have equal scores when deciding the top 2 finalists, registration order is used as the tie-breaker.",

        rulesTurnTitle: "Turn Order",
        rulesTurnText: "Players always take turns in registration order: A → B → C → D. Every player gets equal chances. In Level 5, the finalist with the higher score chooses first.",

        rulesLeaderboardTitle: "Leaderboard",
        rulesLeaderboardText: "Leaderboard positions remain in the original registration order. Scores are updated without changing the displayed player order."

    },


    te: {

        tagline: "ప్రతి కార్డులో ఒక ఆశ్చర్యం దాగి ఉంటుంది",
        language: "భాష",

        welcome: "Hidden Thrill కు స్వాగతం",
        chooseGame: "గేమ్ ఎంచుకుని దాగి ఉన్నదాన్ని కనుగొనండి.",

        /* WELCOME POPUP */

        welcomePopup: "Hidden Thrill కు స్వాగతం, {username}!\n\nమీరు ప్రతి సారి ఆడినప్పుడు, నంబర్లు యాదృచ్ఛిక క్రమంలో కేటాయించబడతాయి.",

        game1: "గేమ్ 1",
        game1Desc: "లక్కీ కార్డులు, మిస్టరీ రివార్డులు మరియు చివరి Winner Cup.",

        game2: "గేమ్ 2",
        game2Desc: "కొత్త హిడెన్ ఛాలెంజ్ త్వరలో వస్తుంది.",

        playNow: "ఇప్పుడే ఆడండి",
        arrivingSoon: "త్వరలో వస్తుంది",

        history: "చరిత్ర",
        rules: "నియమాలు",
        back: "వెనక్కి",

        gameSetup: "గేమ్ సెటప్",
        enterPlayers: "ప్రారంభించడానికి ప్లేయర్ పేర్లు నమోదు చేయండి.",
        numberOfPlayers: "ప్లేయర్ల సంఖ్య",
        startGame: "గేమ్ ప్రారంభించండి",

        currentTurn: "ప్రస్తుత టర్న్",
        leaderboard: "లీడర్‌బోర్డ్",

        home: "హోమ్",
        newGame: "కొత్త గేమ్",
        exit: "నిష్క్రమించండి",

        winner: "విజేత",
        clearHistory: "చరిత్రను తొలగించండి",

        level1: "లెవెల్ 1",
        luckyStart: "లక్కీ స్టార్ట్",
        level1Rules: "60 దాగి ఉన్న కార్డులు. కార్డును ఎంచుకుని పాజిటివ్ నంబర్‌ను పొందండి మరియు మీ స్కోర్‌కు జోడించండి.",

        level2: "లెవెల్ 2",
        negativeZone: "నెగెటివ్ జోన్",
        level2Rules: "32 దాగి ఉన్న కార్డులు. ప్రతి కార్డు మీ స్కోర్‌ను తగ్గించే నెగెటివ్ విలువను కలిగి ఉంటుంది.",

        level3: "లెవెల్ 3",
        mysteryCards: "మిస్టరీ కార్డులు",
        level3Rules: "16 దాగి ఉన్న కార్డులు. 8 కార్డుల్లో స్కోరింగ్ నంబర్లు మరియు 8 కార్డుల్లో బ్లాస్ట్‌లు ఉంటాయి.",

        level4: "లెవెల్ 4",
        treasureVault: "ట్రెజర్ వాల్ట్",
        level4Rules: "8 దాగి ఉన్న కార్డులు. 1 గోల్డ్ కాయిన్ +300, 1 సిల్వర్ కాయిన్ +150 ఇస్తాయి. మిగిలిన 6 కార్డుల్లో ఫేస్ ఎమోజీలు ఉంటాయి.",

        level5: "లెవెల్ 5",
        winnerCup: "విన్నర్ కప్",
        level5Rules: "3 దాగి ఉన్న కార్డులు. ఒక కార్డులో Winner Cup మరియు రెండు కార్డుల్లో ఫ్లవర్ బొకేలు ఉంటాయి.",

        selectCard: "దాగి ఉన్న కార్డును ఎంచుకోండి.",
        selected: "ఎంచుకున్నారు",
        points: "పాయింట్లు",

        gold: "గోల్డ్",
        silver: "సిల్వర్",
        blast: "బ్లాస్ట్",
        face: "ఫేస్ కార్డ్",
        bouquet: "ఫ్లవర్ బొకే",

        empty: "ఖాళీ",
        zero: "0",

        level2Begins: "లెవెల్ 2 ప్రారంభం",
        level3Begins: "లెవెల్ 3 ప్రారంభం",
        level4Begins: "లెవెల్ 4 ప్రారంభం",
        level5Begins: "లెవెల్ 5 ప్రారంభం",

        nextLevel: "తదుపరి లెవెల్‌కు సిద్ధంగా ఉండండి.",

        finalists: "ఫైనలిస్టులు",
        eliminated: "ఎలిమినేట్",

        chooseWinnerCup: "Winner Cup కోసం కార్డును ఎంచుకోండి.",
        firstFinalistTurn: "ఎక్కువ స్కోర్ ఉన్న ఫైనలిస్ట్ ముందుగా ఎంచుకుంటారు.",
        secondFinalistTurn: "రెండవ ఫైనలిస్ట్ ఇప్పుడు ఎంచుకోవాలి.",

        finalChoice: "చివరి ఎంపిక!",

        winnerCupFound: "Winner Cup దొరికింది!",
        winnerByScore: "అత్యధిక స్కోర్ ద్వారా విజేత నిర్ణయించబడింది.",

        gameComplete: "గేమ్ పూర్తయింది",
        noHistory: "ఇంకా గేమ్స్ ఆడలేదు.",

        arrivingMessage: "గేమ్ 2 త్వరలో వస్తుంది.",

        levelReached: "చేరుకున్న లెవెల్",

        /* NEW VOICE / MESSAGE TEXT */

        blastHit: "మీరు బ్లాస్ట్‌ను తాకారు!",
        goldWon: "మీరు +300 పాయింట్ల విలువైన గోల్డ్ కాయిన్ గెలుచుకున్నారు.",
        silverWon: "మీరు +150 పాయింట్ల విలువైన సిల్వర్ కాయిన్ గెలుచుకున్నారు.",
        faceWon: "మీరు ఫేస్ కార్డ్ గెలుచుకున్నారు.",
        winnerAnnouncement: "గేమ్ గెలిచారు. అభినందనలు!",

        /* RULES */

        rulesTwoTitle: "2 ప్లేయర్ల గేమ్",
        rulesTwoIntro: "2 ప్లేయర్ల గేమ్‌లో 4 లెవెల్స్ ఉంటాయి. Level 4 తర్వాత గేమ్ ముగుస్తుంది.",

        rulesLevel1Title: "లెవెల్ 1 — లక్కీ స్టార్ట్",
        rulesLevel1Text: "60 దాగి ఉన్న కార్డులు ఉంటాయి. ప్రతి కార్డులో +10 నుండి +100 వరకు పాజిటివ్ నంబర్ ఉంటుంది. ప్లేయర్లు టర్న్ ప్రకారం ఒక్కో కార్డును ఎంచుకుంటారు. వచ్చిన విలువ ప్రస్తుత ప్లేయర్ స్కోర్‌కు జోడించబడుతుంది.",

        rulesLevel2Title: "లెవెల్ 2 — నెగెటివ్ జోన్",
        rulesLevel2Text: "32 దాగి ఉన్న కార్డులు ఉంటాయి. ప్రతి కార్డులో -10 నుండి -100 వరకు నెగెటివ్ విలువ ఉంటుంది. ప్లేయర్లు టర్న్ ప్రకారం కార్డులను ఎంచుకుంటారు. వచ్చిన నెగెటివ్ విలువ ప్లేయర్ స్కోర్ నుండి తగ్గించబడుతుంది.",

        rulesLevel3Title: "లెవెల్ 3 — మిస్టరీ కార్డులు",
        rulesLevel3Text: "16 దాగి ఉన్న కార్డులు ఉంటాయి. 8 కార్డుల్లో +20 నుండి +120 వరకు నంబర్లు మరియు 8 కార్డుల్లో బ్లాస్ట్‌లు ఉంటాయి. నంబర్ కార్డులు పాయింట్లు ఇస్తాయి. బ్లాస్ట్ 0 పాయింట్లు ఇస్తుంది.",

        rulesLevel4Title: "లెవెల్ 4 — ట్రెజర్ వాల్ట్",
        rulesLevel4Text: "8 దాగి ఉన్న కార్డులు ఉంటాయి. 1 గోల్డ్ కాయిన్ +300 పాయింట్లు, 1 సిల్వర్ కాయిన్ +150 పాయింట్లు ఇస్తాయి. మిగిలిన 6 కార్డుల్లో ఫేస్ ఎమోజీలు ఉంటాయి మరియు అవి 0 పాయింట్లు ఇస్తాయి. అన్ని కార్డులు ఎంచుకున్న తర్వాత ఎక్కువ స్కోర్ ఉన్న ప్లేయర్ విజేత అవుతారు.",

        rulesTwoFinish: "ఇద్దరు ప్లేయర్ల స్కోర్ సమానంగా ఉంటే, రిజిస్ట్రేషన్ ఆర్డర్‌లో ముందున్న ప్లేయర్ విజేత అవుతారు.",

        rulesFourTitle: "4 ప్లేయర్ల గేమ్",
        rulesFourIntro: "4 ప్లేయర్ల గేమ్‌లో 5 లెవెల్స్ ఉంటాయి. Level 4 తర్వాత టాప్ 2 ప్లేయర్లు మాత్రమే Level 5కి వెళ్తారు.",

        rulesFourLevel5Title: "లెవెల్ 5 — Winner Cup",
        rulesFourLevel5Text: "3 దాగి ఉన్న కార్డులు ఉంటాయి: 1 Winner Cup మరియు 2 ఫ్లవర్ బొకేలు. Level 4 తర్వాత ఎక్కువ స్కోర్ ఉన్న ఫైనలిస్ట్ ముందుగా ఎంచుకుంటారు. Winner Cup దొరికితే వెంటనే వారు విజేత అవుతారు. లేకపోతే రెండవ ఫైనలిస్ట్‌కు టర్న్ వస్తుంది.",

        rulesFourFinal: "Winner Cup ఎంచుకున్న ప్లేయర్ తుది విజేత అవుతారు. Winner Cup చివరి అందుబాటులో ఉన్న కార్డులో ఉంటే, ఆ చివరి కార్డును ఎంచుకున్న ఫైనలిస్ట్ విజేత అవుతారు.",

        rulesTie: "టాప్ 2 ఫైనలిస్టులను నిర్ణయించే సమయంలో స్కోర్లు సమానంగా ఉంటే, రిజిస్ట్రేషన్ ఆర్డర్ టై-బ్రేకర్‌గా ఉపయోగించబడుతుంది.",

        rulesTurnTitle: "టర్న్ ఆర్డర్",
        rulesTurnText: "టర్న్స్ ఎల్లప్పుడూ రిజిస్ట్రేషన్ ఆర్డర్‌లో ఉంటాయి: A → B → C → D. ప్రతి ప్లేయర్‌కు సమాన అవకాశాలు ఉంటాయి. Level 5లో ఎక్కువ స్కోర్ ఉన్న ఫైనలిస్ట్ ముందుగా ఎంచుకుంటారు.",

        rulesLeaderboardTitle: "లీడర్‌బోర్డ్",
        rulesLeaderboardText: "లీడర్‌బోర్డ్‌లో ప్లేయర్ల అసలు రిజిస్ట్రేషన్ ఆర్డర్ మారదు. స్కోర్ మాత్రమే అప్‌డేట్ అవుతుంది."

    },


    hi: {

        tagline: "हर कार्ड में एक सरप्राइज छिपा है",
        language: "भाषा",

        welcome: "Hidden Thrill में आपका स्वागत है",
        chooseGame: "गेम चुनें और छिपी हुई चीज़ खोजें।",

        /* WELCOME POPUP */

        welcomePopup: "Hidden Thrill में आपका स्वागत है, {username}!\n\nहर बार खेलने पर नंबर यादृच्छिक क्रम में दिए जाएंगे।",

        game1: "गेम 1",
        game1Desc: "लकी कार्ड, मिस्ट्री रिवॉर्ड और अंतिम Winner Cup.",

        game2: "गेम 2",
        game2Desc: "एक नया हिडन चैलेंज जल्द आ रहा है।",

        playNow: "अभी खेलें",
        arrivingSoon: "जल्द आ रहा है",

        history: "इतिहास",
        rules: "नियम",
        back: "वापस",

        gameSetup: "गेम सेटअप",
        enterPlayers: "शुरू करने के लिए खिलाड़ियों के नाम दर्ज करें।",
        numberOfPlayers: "खिलाड़ियों की संख्या",
        startGame: "गेम शुरू करें",

        currentTurn: "वर्तमान टर्न",
        leaderboard: "लीडरबोर्ड",

        home: "होम",
        newGame: "नया गेम",
        exit: "बाहर निकलें",

        winner: "विजेता",
        clearHistory: "इतिहास साफ करें",

        level1: "लेवल 1",
        luckyStart: "लकी स्टार्ट",
        level1Rules: "60 छिपे हुए कार्ड। कार्ड चुनें और पॉजिटिव नंबर प्राप्त करके अपने स्कोर में जोड़ें।",

        level2: "लेवल 2",
        negativeZone: "नेगेटिव ज़ोन",
        level2Rules: "32 छिपे हुए कार्ड। हर कार्ड आपके स्कोर को कम करने वाला नेगेटिव मूल्य रखता है।",

        level3: "लेवल 3",
        mysteryCards: "मिस्ट्री कार्ड",
        level3Rules: "16 छिपे हुए कार्ड। 8 में स्कोरिंग नंबर और 8 में ब्लास्ट होंगे।",

        level4: "लेवल 4",
        treasureVault: "ट्रेज़र वॉल्ट",
        level4Rules: "8 छिपे हुए कार्ड। 1 Gold Coin +300, 1 Silver Coin +150 देगा और बाकी 6 कार्ड में फेस इमोजी होंगे।",

        level5: "लेवल 5",
        winnerCup: "विनर कप",
        level5Rules: "3 छिपे हुए कार्ड। एक में Winner Cup और दो में फूलों के गुलदस्ते होंगे।",

        selectCard: "एक छिपा हुआ कार्ड चुनें।",
        selected: "चयनित",
        points: "पॉइंट्स",

        gold: "गोल्ड",
        silver: "सिल्वर",
        blast: "ब्लास्ट",
        face: "फेस कार्ड",
        bouquet: "फूलों का गुलदस्ता",

        empty: "खाली",
        zero: "0",

        level2Begins: "लेवल 2 शुरू",
        level3Begins: "लेवल 3 शुरू",
        level4Begins: "लेवल 4 शुरू",
        level5Begins: "लेवल 5 शुरू",

        nextLevel: "अगले लेवल के लिए तैयार रहें।",

        finalists: "फाइनलिस्ट",
        eliminated: "एलिमिनेट",

        chooseWinnerCup: "Winner Cup खोजने के लिए कार्ड चुनें।",
        firstFinalistTurn: "अधिक स्कोर वाला फाइनलिस्ट पहले चुनेगा।",
        secondFinalistTurn: "दूसरा फाइनलिस्ट अब चुनेगा।",

        finalChoice: "अंतिम चुनाव!",

        winnerCupFound: "Winner Cup मिल गया!",
        winnerByScore: "सबसे अधिक स्कोर से विजेता तय हुआ।",

        gameComplete: "गेम पूरा हुआ",
        noHistory: "अभी तक कोई गेम नहीं खेला गया।",

        arrivingMessage: "गेम 2 जल्द आ रहा है।",

        levelReached: "पहुंचा हुआ लेवल",

        /* NEW VOICE / MESSAGE TEXT */

        blastHit: "आपने ब्लास्ट हिट किया!",
        goldWon: "आपने +300 पॉइंट्स वाला गोल्ड कॉइन जीता।",
        silverWon: "आपने +150 पॉइंट्स वाला सिल्वर कॉइन जीता।",
        faceWon: "आपने फेस कार्ड जीता।",
        winnerAnnouncement: "ने गेम जीत लिया। बधाई हो!",

        /* RULES */

        rulesTwoTitle: "2 खिलाड़ियों का गेम",
        rulesTwoIntro: "2 खिलाड़ियों के गेम में 4 लेवल होते हैं। Level 4 के बाद गेम समाप्त हो जाता है।",

        rulesLevel1Title: "लेवल 1 — लकी स्टार्ट",
        rulesLevel1Text: "60 छिपे हुए कार्ड होते हैं। हर कार्ड में +10 से +100 तक का पॉजिटिव नंबर होता है। खिलाड़ी बारी-बारी से एक कार्ड चुनते हैं। मिलने वाला मूल्य वर्तमान खिलाड़ी के स्कोर में जुड़ जाता है।",

        rulesLevel2Title: "लेवल 2 — नेगेटिव ज़ोन",
        rulesLevel2Text: "32 छिपे हुए कार्ड होते हैं। हर कार्ड में -10 से -100 तक का नेगेटिव मूल्य होता है। खिलाड़ी बारी-बारी से कार्ड चुनते हैं। मिलने वाला नेगेटिव मूल्य खिलाड़ी के स्कोर से घट जाता है।",

        rulesLevel3Title: "लेवल 3 — मिस्ट्री कार्ड",
        rulesLevel3Text: "16 छिपे हुए कार्ड होते हैं। 8 कार्ड में +20 से +120 तक के नंबर और 8 कार्ड में ब्लास्ट होते हैं। नंबर कार्ड पॉइंट्स देते हैं। ब्लास्ट 0 पॉइंट्स देता है।",

        rulesLevel4Title: "लेवल 4 — ट्रेज़र वॉल्ट",
        rulesLevel4Text: "8 छिपे हुए कार्ड होते हैं। 1 Gold Coin +300 पॉइंट्स, 1 Silver Coin +150 पॉइंट्स देता है। बाकी 6 कार्ड में फेस इमोजी होते हैं और वे 0 पॉइंट्स देते हैं। सभी कार्ड चुने जाने के बाद सबसे अधिक स्कोर वाला खिलाड़ी विजेता होता है।",

        rulesTwoFinish: "अगर दोनों खिलाड़ियों का स्कोर बराबर है, तो रजिस्ट्रेशन ऑर्डर में पहले आने वाला खिलाड़ी विजेता होगा।",

        rulesFourTitle: "4 खिलाड़ियों का गेम",
        rulesFourIntro: "4 खिलाड़ियों के गेम में 5 लेवल होते हैं। Level 4 के बाद केवल टॉप 2 खिलाड़ी Level 5 में जाएंगे।",

        rulesFourLevel5Title: "लेवल 5 — Winner Cup",
        rulesFourLevel5Text: "3 छिपे हुए कार्ड होते हैं: 1 Winner Cup और 2 फूलों के गुलदस्ते। Level 4 के बाद अधिक स्कोर वाला फाइनलिस्ट पहले कार्ड चुनेगा। अगर उसे Winner Cup मिलता है, तो वह तुरंत विजेता बन जाता है। अगर नहीं, तो दूसरे फाइनलिस्ट की बारी आती है।",

        rulesFourFinal: "जो खिलाड़ी Winner Cup चुनता है, वही अंतिम विजेता बनता है। अगर Winner Cup आखिरी उपलब्ध कार्ड में मिलता है, तो उस आखिरी कार्ड को चुनने वाला फाइनलिस्ट विजेता होगा।",

        rulesTie: "टॉप 2 फाइनलिस्ट तय करते समय स्कोर बराबर होने पर रजिस्ट्रेशन ऑर्डर को टाई-ब्रेकर के रूप में इस्तेमाल किया जाएगा।",

        rulesTurnTitle: "टर्न ऑर्डर",
        rulesTurnText: "टर्न हमेशा रजिस्ट्रेशन ऑर्डर में होंगे: A → B → C → D. सभी खिलाड़ियों को बराबर मौके मिलेंगे। Level 5 में अधिक स्कोर वाला फाइनलिस्ट पहले चुनेगा।",

        rulesLeaderboardTitle: "लीडरबोर्ड",
        rulesLeaderboardText: "लीडरबोर्ड में खिलाड़ियों का मूल रजिस्ट्रेशन क्रम नहीं बदलेगा। केवल स्कोर अपडेट होगा।"

    }

};


let currentLanguage =
    localStorage.getItem("hiddenThrillLanguage") || "en";


function t(key) {

    return translations[currentLanguage][key] ||
        translations.en[key] ||
        key;

}


/* =========================
   WELCOME POPUP
   ========================= */

function showWelcomePopup() {

    const username =
        localStorage.getItem("currentUser") || "User";


    const popup =
        document.getElementById("welcomePopup");

    const popupTitle =
        document.getElementById("welcomePopupTitle");

    const popupMessage =
        document.getElementById("welcomePopupMessage");


    if (!popup || !popupTitle || !popupMessage) {

        return;

    }


    let title = "";
    let message = "";


    if (currentLanguage === "te") {

        title =
            `Hidden Thrill కు స్వాగతం, ${username}!`;

        message =
            "మీరు ప్రతి సారి ఆడినప్పుడు, నంబర్లు యాదృచ్ఛిక క్రమంలో కేటాయించబడతాయి.";

    }


    else if (currentLanguage === "hi") {

        title =
            `Hidden Thrill में आपका स्वागत है, ${username}!`;

        message =
            "हर बार खेलने पर नंबर यादृच्छिक क्रम में दिए जाएंगे।";

    }


    else {

        title =
            `Welcome to Hidden Thrill, ${username}!`;

        message =
            "Every time you play, the numbers will be assigned in random order.";

    }


    popupTitle.textContent =
        title;


    popupMessage.textContent =
        message;


    popup.classList.remove(
        "hidden"
    );

}


/* =========================
   WELCOME POPUP CLOSE
   ========================= */

const welcomePopupClose =
    document.getElementById(
        "welcomePopupClose"
    );


if (welcomePopupClose) {

    welcomePopupClose.addEventListener(
        "click",
        function () {

            const popup =
                document.getElementById(
                    "welcomePopup"
                );


            if (popup) {

                popup.classList.add(
                    "hidden"
                );

            }

        }
    );

}


/* =========================
   LANGUAGE
   ========================= */

function applyLanguage() {

    document.documentElement.lang =
        currentLanguage;

    document.querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (
                translations[currentLanguage][key]
            ) {

                element.textContent =
                    translations[currentLanguage][key];

            }

        });

    updateRulesContent();

    if (gameStarted) {

        updateLevelUI();
        updateLeaderboard();
        updateTurnDisplay();

    }

}


document.getElementById("languageSelect").value =
    currentLanguage;


document.getElementById("languageSelect")
    .addEventListener("change", function () {

        currentLanguage =
            this.value;

        localStorage.setItem(
            "hiddenThrillLanguage",
            currentLanguage
        );

        applyLanguage();

        /* SHOW POPUP IN SELECTED LANGUAGE */

        showWelcomePopup();

    });


/* =========================
   PAGE ELEMENTS
   ========================= */

const homePage =
    document.getElementById("homePage");

const setupPage =
    document.getElementById("setupPage");

const gamePage =
    document.getElementById("gamePage");

const game1Btn =
    document.getElementById("game1Btn");

const game2Btn =
    document.getElementById("game2Btn");

const setupBackBtn =
    document.getElementById("setupBackBtn");

const startGameBtn =
    document.getElementById("startGameBtn");

const playerInputs =
    document.getElementById("playerInputs");

const setupError =
    document.getElementById("setupError");

const playerCountButtons =
    document.querySelectorAll(".player-count-btn");

const gameExitBtn =
    document.getElementById("gameExitBtn");

const gameRulesBtn =
    document.getElementById("gameRulesBtn");

const newGameBtn =
    document.getElementById("newGameBtn");

const bottomHomeBtn =
    document.getElementById("bottomHomeBtn");

const bottomNewGameBtn =
    document.getElementById("bottomNewGameBtn");

const leaderboard =
    document.getElementById("leaderboard");

const currentTurn =
    document.getElementById("currentTurn");

const levelNumber =
    document.getElementById("levelNumber");

const levelTitle =
    document.getElementById("levelTitle");

const levelRules =
    document.getElementById("levelRules");

const cardsGrid =
    document.getElementById("cardsGrid");

const gameMessage =
    document.getElementById("gameMessage");

const transitionOverlay =
    document.getElementById("transitionOverlay");

const transitionLevel =
    document.getElementById("transitionLevel");

const transitionTitle =
    document.getElementById("transitionTitle");

const transitionRules =
    document.getElementById("transitionRules");

const countdownNumber =
    document.getElementById("countdownNumber");

const transitionMessage =
    document.getElementById("transitionMessage");

const winnerOverlay =
    document.getElementById("winnerOverlay");

const winnerName =
    document.getElementById("winnerName");

const winnerScore =
    document.getElementById("winnerScore");

const winnerNewGameBtn =
    document.getElementById("winnerNewGameBtn");

const winnerHomeBtn =
    document.getElementById("winnerHomeBtn");

const rulesModal =
    document.getElementById("rulesModal");

const closeRulesBtn =
    document.getElementById("closeRulesBtn");

const historyModal =
    document.getElementById("historyModal");

const historyContent =
    document.getElementById("historyContent");

const historyBtn =
    document.getElementById("historyBtn");

const closeHistoryBtn =
    document.getElementById("closeHistoryBtn");

const clearHistoryBtn =
    document.getElementById("clearHistoryBtn");

const homeRulesBtn =
    document.getElementById("homeRulesBtn");


/* =========================
   GAME STATE
   ========================= */

let players = [];

let playerCount = 2;

let currentLevel = 1;

let currentPlayerIndex = 0;

let cards = [];

let selectedCards = 0;

let gameStarted = false;

let gameNumber = 1;

let gameStartTime = null;

let finalists = [];

let level5CurrentIndex = 0;

let level5Selections = 0;

let historySaved = false;

let timers = [];

let transitionSession = 0;


/* =========================================================
   SOUND SYSTEM
   ========================================================= */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return null;
        }

        audioContext =
            new AudioContext();

    }

    if (
        audioContext.state === "suspended"
    ) {
        audioContext.resume();
    }

    return audioContext;

}


/* =========================
   BLAST SOUND
   ========================= */

function playBlastSound() {

    const ctx =
        getAudioContext();

    if (!ctx) {
        return;
    }

    const now =
        ctx.currentTime;


    const oscillator =
        ctx.createOscillator();

    const gain =
        ctx.createGain();


    oscillator.type =
        "sawtooth";

    oscillator.frequency.setValueAtTime(
        180,
        now
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        45,
        now + 0.35
    );


    gain.gain.setValueAtTime(
        0.001,
        now
    );

    gain.gain.exponentialRampToValueAtTime(
        0.45,
        now + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.4
    );


    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );


    oscillator.start(now);

    oscillator.stop(
        now + 0.4
    );

}


/* =========================
   GOLD SOUND
   ========================= */

function playGoldSound() {

    const ctx =
        getAudioContext();

    if (!ctx) {
        return;
    }

    const now =
        ctx.currentTime;


    const notes = [
        523.25,
        659.25,
        783.99,
        1046.50
    ];


    notes.forEach(
        (frequency, index) => {

            const oscillator =
                ctx.createOscillator();

            const gain =
                ctx.createGain();

            const startTime =
                now + index * 0.09;


            oscillator.type =
                "sine";

            oscillator.frequency.setValueAtTime(
                frequency,
                startTime
            );


            gain.gain.setValueAtTime(
                0.001,
                startTime
            );

            gain.gain.exponentialRampToValueAtTime(
                0.28,
                startTime + 0.02
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                startTime + 0.22
            );


            oscillator.connect(gain);

            gain.connect(
                ctx.destination
            );


            oscillator.start(
                startTime
            );

            oscillator.stop(
                startTime + 0.23
            );

        }
    );

}


/* =========================
   SILVER SOUND
   ========================= */

function playSilverSound() {

    const ctx =
        getAudioContext();

    if (!ctx) {
        return;
    }

    const now =
        ctx.currentTime;


    const notes = [
        659.25,
        783.99,
        987.77
    ];


    notes.forEach(
        (frequency, index) => {

            const oscillator =
                ctx.createOscillator();

            const gain =
                ctx.createGain();

            const startTime =
                now + index * 0.1;


            oscillator.type =
                "triangle";

            oscillator.frequency.setValueAtTime(
                frequency,
                startTime
            );


            gain.gain.setValueAtTime(
                0.001,
                startTime
            );

            gain.gain.exponentialRampToValueAtTime(
                0.22,
                startTime + 0.02
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                startTime + 0.24
            );


            oscillator.connect(gain);

            gain.connect(
                ctx.destination
            );


            oscillator.start(
                startTime
            );

            oscillator.stop(
                startTime + 0.25
            );

        }
    );

}


/* =========================
   TIMER FUNCTIONS
   ========================= */

function clearAllTimers() {

    timers.forEach(timer => {

        clearTimeout(timer);

        clearInterval(timer);

    });

    timers = [];

}


function addTimer(timer) {

    timers.push(timer);

}


/* =========================
   UTILITY
   ========================= */

function randomInt(min, max) {

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}


function shuffle(array) {

    const arr =
        [...array];

    for (
        let i = arr.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            arr[i],
            arr[j]
        ] = [
            arr[j],
            arr[i]
        ];

    }

    return arr;

}


function showPage(page) {

    homePage.classList.remove("active");

    setupPage.classList.remove("active");

    gamePage.classList.remove("active");

    page.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =========================
   PLAYER COUNT
   ========================= */

playerCountButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function () {

                playerCount =
                    Number(
                        this.dataset.count
                    );

                playerCountButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );

                this.classList.add(
                    "active"
                );

                createPlayerInputs();

            }
        );

    }
);


/* =========================
   PLAYER INPUTS
   ========================= */

function createPlayerInputs() {

    playerInputs.innerHTML = "";

    for (
        let i = 0;
        i < playerCount;
        i++
    ) {

        const letter =
            String.fromCharCode(
                65 + i
            );

        const defaultName =
            `Player ${letter}`;


        const row =
            document.createElement(
                "div"
            );

        row.className =
            "player-input-row";


        row.innerHTML = `

            <div class="player-badge">
                ${letter}
            </div>

            <input
                type="text"
                class="player-name-input"
                maxlength="20"
                value="${defaultName}"
                placeholder="${defaultName}"
            >

        `;


        playerInputs.appendChild(
            row
        );

    }

}


/* =========================
   OPEN SETUP
   ========================= */

function openSetup() {

    playerCount = 2;

    playerCountButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                Number(
                    button.dataset.count
                ) === 2
            );

        }
    );

    createPlayerInputs();

    setupError.textContent = "";

    showPage(setupPage);

}


/* =========================
   VALIDATE PLAYER NAMES
   ========================= */

function validatePlayerNames() {

    const inputs =
        document.querySelectorAll(
            ".player-name-input"
        );

    const names = [];


    for (const input of inputs) {

        const name =
            input.value.trim();

        if (!name) {

            setupError.textContent =
                "Please enter all player names.";

            return null;

        }

        names.push(name);

    }


    const normalized =
        names.map(
            name =>
                name.toLowerCase()
        );


    if (
        new Set(normalized).size !==
        normalized.length
    ) {

        setupError.textContent =
            "Player names must be different.";

        return null;

    }


    setupError.textContent = "";

    return names;

}


/* =========================
   START GAME
   ========================= */

function startGame(names) {

    clearAllTimers();

    transitionSession++;

    gameStarted = true;

    gameStartTime =
        new Date();

    historySaved = false;

    currentLevel = 1;

    currentPlayerIndex = 0;

    selectedCards = 0;

    finalists = [];

    level5CurrentIndex = 0;

    level5Selections = 0;


    players =
        names.map(
            (name, index) => {

                return {

                    name: name,

                    score: 0,

                    eliminated: false,

                    robot: false,

                    level5Place: null,

                    registrationOrder:
                        index

                };

            }
        );


    gameNumber =
        getNextGameNumber();


    document.body.classList.remove(
        "winner-open"
    );


    winnerOverlay.classList.add(
        "hidden"
    );


    transitionOverlay.classList.add(
        "hidden"
    );


    showPage(gamePage);


    createLevel1();

    updateLeaderboard();

    updateTurnDisplay();

    updateGameMessage();

}


/* =========================
   GAME NUMBER
   ========================= */

function getNextGameNumber() {

    const username =
        localStorage.getItem(
            "currentUser"
        );

    if (!username) {
        return 1;
    }


    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            ) || "[]"
        );


    const user =
        users.find(
            item =>
                item.username ===
                username
        );


    if (
        !user ||
        !Array.isArray(
            user.history
        )
    ) {

        return 1;

    }


    return user.history.length + 1;

}


/* =========================
   START GAME BUTTON
   ========================= */

startGameBtn.addEventListener(
    "click",
    function () {

        const names =
            validatePlayerNames();

        if (!names) {
            return;
        }

        startGame(names);

    }
);


/* =========================
   LEVEL UI
   ========================= */

function updateLevelUI() {

    const levelData = {

        1: {

            number: t("level1"),

            title: t("luckyStart"),

            rules: t("level1Rules"),

            color: "#F4B400"

        },

        2: {

            number: t("level2"),

            title: t("negativeZone"),

            rules: t("level2Rules"),

            color: "#6558C8"

        },

        3: {

            number: t("level3"),

            title: t("mysteryCards"),

            rules: t("level3Rules"),

            color: "#9B59B6"

        },

        4: {

            number: t("level4"),

            title: t("treasureVault"),

            rules: t("level4Rules"),

            color: "#D4A017"

        },

        5: {

            number: t("level5"),

            title: t("winnerCup"),

            rules: t("level5Rules"),

            color: "#E67E22"

        }

    };


    const data =
        levelData[currentLevel];


    levelNumber.textContent =
        data.number;

    levelTitle.textContent =
        data.title;

    levelRules.textContent =
        data.rules;


    document.querySelector(
        ".level-panel"
    ).style.borderTopColor =
        data.color;

}


/* =========================
   LEADERBOARD
   ========================= */

function updateLeaderboard() {

    leaderboard.innerHTML = "";


    players.forEach(
        (player, index) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "leader-row";


            if (player.eliminated) {

                row.classList.add(
                    "eliminated"
                );

            }


            row.innerHTML = `

                <div class="leader-position">
                    ${index + 1}
                </div>

                <div class="leader-info">

                    <div class="leader-name">
                        ${escapeHTML(
                            player.name
                        )}
                    </div>

                    <div class="leader-score">
                        ${player.score}
                        ${t("points")}
                    </div>

                </div>

            `;


            leaderboard.appendChild(
                row
            );

        }
    );

}


/* =========================
   ESCAPE HTML
   ========================= */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;

}


/* =========================
   TURN
   ========================= */

function updateTurnDisplay() {

    if (!players.length) {
        return;
    }


    const player =
        players[
            currentPlayerIndex
        ];


    if (!player) {
        return;
    }


    currentTurn.textContent =
        player.name;

}


function moveToNextPlayer() {

    if (!players.length) {
        return;
    }


    currentPlayerIndex =
        (
            currentPlayerIndex + 1
        ) %
        players.length;


    updateTurnDisplay();

}


/* =========================
   GAME MESSAGE
   ========================= */

function updateGameMessage(
    message = null
) {

    if (message !== null) {

        gameMessage.textContent =
            message;

        return;

    }


    gameMessage.textContent =
        t("selectCard");

}


/* =========================
   LEVEL 1
   ========================= */

function createLevel1() {

    currentLevel = 1;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        cards.push({

            value:
                randomInt(10, 100),

            type:
                "number",

            colorIndex:
                i,

            revealed:
                false

        });

    }


    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();

}


/* =========================
   LEVEL 2
   ========================= */

function createLevel2() {

    currentLevel = 2;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];


    for (
        let i = 0;
        i < 32;
        i++
    ) {

        cards.push({

            value:
                -randomInt(10, 100),

            type:
                "number",

            colorIndex:
                i,

            revealed:
                false

        });

    }


    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();

}


/* =========================
   LEVEL 3
   ========================= */

function createLevel3() {

    currentLevel = 3;

    selectedCards = 0;

    currentPlayerIndex = 0;

    cards = [];


    const numbers = [];


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        numbers.push({

            value:
                randomInt(20, 120),

            type:
                "number",

            revealed:
                false

        });

    }


    const blastCards = [];


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        blastCards.push({

            value: 0,

            type:
                "blast",

            revealed:
                false

        });

    }


    cards =
        shuffle([
            ...numbers,
            ...blastCards
        ]);


    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();

}


/* =========================
   LEVEL 4
   ========================= */

function createLevel4() {

    currentLevel = 4;

    selectedCards = 0;

    currentPlayerIndex = 0;


    cards = [

        {

            value: 300,

            type:
                "gold",

            emoji:
                "🪙",

            revealed:
                false

        },

        {

            value: 150,

            type:
                "silver",

            emoji:
                "🥈",

            revealed:
                false

        },

        {

            value: 0,

            type:
                "face",

            emoji:
                "😀",

            revealed:
                false

        },

        {

            value: 0,

            type:
                "face",

            emoji:
                "😎",

            revealed:
                false

        },

        {

            value: 0,

            type:
                "face",

            emoji:
                "😂",

            revealed:
                false

        },

        {

            value: 0,

            type:
                "face",

            emoji:
                "🤩",

            revealed:
                false

        },

        {

            value: 0,

            type:
                "face",

            emoji:
                "😮",

            revealed:
                false

        },

        {

            value: 0,

            type:
                "face",

            emoji:
                "😜",

            revealed:
                false

        }

    ];


    cards =
        shuffle(cards);


    renderCards();

    updateLevelUI();

    updateTurnDisplay();

    updateGameMessage();

}


/* =========================
   RENDER CARDS
   ========================= */

function renderCards() {

    cardsGrid.innerHTML = "";

    cardsGrid.className =
        "cards-grid";


    if (currentLevel === 2) {

        cardsGrid.classList.add(
            "level-2"
        );

    }


    if (currentLevel === 3) {

        cardsGrid.classList.add(
            "level-3"
        );

    }


    if (currentLevel === 4) {

        cardsGrid.classList.add(
            "level-4"
        );

    }


    if (currentLevel === 5) {

        cardsGrid.classList.add(
            "level-5"
        );

    }


    cards.forEach(
        (card, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "game-card-item";


            button.dataset.index =
                index;


            if (
                (
                    currentLevel === 1 ||
                    currentLevel === 2
                ) &&
                card.colorIndex !==
                undefined
            ) {

                button.style.setProperty(
                    "--card-color-index",
                    card.colorIndex
                );

            }


            if (card.revealed) {

                button.classList.add(
                    "revealed"
                );


                let display = "";

                let label = "";


                if (
                    card.type === "gold"
                ) {

                    display =
                        card.emoji;

                    label =
                        `${t("gold")} +300 ${t("points")}`;

                    button.classList.add(
                        "gold-card"
                    );

                }


                else if (
                    card.type === "silver"
                ) {

                    display =
                        card.emoji;

                    label =
                        `${t("silver")} +150 ${t("points")}`;

                    button.classList.add(
                        "silver-card"
                    );

                }


                else if (
                    card.type === "face"
                ) {

                    display =
                        card.emoji;

                    label =
                        t("face");

                    button.classList.add(
                        "face-card"
                    );

                }


                else if (
                    card.type === "blast"
                ) {

                    display =
                        "💥";

                    label =
                        t("blast");

                    button.classList.add(
                        "blast-card"
                    );

                }


                else if (
                    card.type === "bouquet"
                ) {

                    display =
                        card.emoji;

                    label =
                        t("bouquet");

                    button.classList.add(
                        "bouquet-card"
                    );

                }


                else if (
                    card.type === "cup"
                ) {

                    display =
                        card.emoji;

                    label =
                        t("winnerCup");

                    button.classList.add(
                        "cup-card"
                    );

                }


                else {

                    display =
                        card.value;

                    label =
                        t("points");

                }


                button.innerHTML = `

                    <span class="card-value">
                        ${display}
                    </span>

                    <span class="card-label">
                        ${label}
                    </span>

                `;


                button.disabled =
                    true;

            }


            else {

                button.innerHTML = "";

                button.disabled =
                    false;


                button.addEventListener(
                    "click",
                    function () {

                        selectCard(index);

                    }
                );

            }


            cardsGrid.appendChild(
                button
            );

        }
    );

}


/* =========================
   SELECT CARD
   ========================= */

function selectCard(index) {

    if (!gameStarted) {
        return;
    }


    if (currentLevel === 5) {

        selectLevel5Card(index);

        return;

    }


    const card =
        cards[index];


    if (
        !card ||
        card.revealed
    ) {

        return;

    }


    const player =
        players[
            currentPlayerIndex
        ];


    if (
        !player ||
        player.eliminated
    ) {

        return;

    }


    card.revealed =
        true;


    selectedCards++;


    player.score +=
        card.value;


    updateLeaderboard();

    renderCards();

    announceValue(card);


    let message = "";


    if (
        currentLevel === 1
    ) {

        message =
            `${player.name}: +${card.value} ${t("points")}`;

    }


    else if (
        currentLevel === 2
    ) {

        message =
            `${player.name}: ${card.value} ${t("points")}`;

    }


    else if (
        currentLevel === 3
    ) {

        if (
            card.type === "blast"
        ) {

            message =
                `${player.name}: 💥 ${t("blastHit")}`;

        }

        else {

            message =
                `${player.name}: +${card.value} ${t("points")}`;

        }

    }


    else if (
        currentLevel === 4
    ) {

        if (
            card.type === "gold"
        ) {

            message =
                `${player.name}: 🪙 ${t("goldWon")}`;

        }

        else if (
            card.type === "silver"
        ) {

            message =
                `${player.name}: 🥈 ${t("silverWon")}`;

        }

        else {

            message =
                `${player.name}: ${card.emoji} ${t("faceWon")}`;

        }

    }


    updateGameMessage(
        message
    );


    if (
        selectedCards >=
        cards.length
    ) {

        scheduleLevelComplete();

        return;

    }


    moveToNextPlayer();

}


/* =========================================================
   VOICE + SOUND
   ========================================================= */

function announceValue(card) {

    /*
       Sound is played only for:
       Level 3 Blast
       Level 4 Gold
       Level 4 Silver
    */

    if (
        card.type === "blast"
    ) {

        playBlastSound();

    }


    else if (
        card.type === "gold"
    ) {

        playGoldSound();

    }


    else if (
        card.type === "silver"
    ) {

        playSilverSound();

    }


    if (
        !("speechSynthesis" in window)
    ) {

        return;

    }


    let text = "";


    if (
        card.type === "gold"
    ) {

        text =
            t("goldWon");

    }


    else if (
        card.type === "silver"
    ) {

        text =
            t("silverWon");

    }


    else if (
        card.type === "blast"
    ) {

        text =
            t("blastHit");

    }


    else if (
        card.type === "face"
    ) {

        text =
            t("faceWon");

    }


    else if (
        card.type === "bouquet"
    ) {

        if (
            currentLanguage === "te"
        ) {

            text =
                "ఫ్లవర్ బొకే.";

        }

        else if (
            currentLanguage === "hi"
        ) {

            text =
                "फूलों का गुलदस्ता।";

        }

        else {

            text =
                "Flower bouquet.";

        }

    }


    else if (
        card.type === "cup"
    ) {

        if (
            currentLanguage === "te"
        ) {

            text =
                "విన్నర్ కప్ దొరికింది!";

        }

        else if (
            currentLanguage === "hi"
        ) {

            text =
                "विनर कप मिल गया!";

        }

        else {

            text =
                "Winner Cup found!";

        }

    }


    else {

        if (
            card.value >= 0
        ) {

            text =
                String(
                    card.value
                );

        }

        else {

            text =
                `minus ${Math.abs(
                    card.value
                )}`;

        }

    }


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    if (
        currentLanguage === "te"
    ) {

        speech.lang =
            "te-IN";

    }

    else if (
        currentLanguage === "hi"
    ) {

        speech.lang =
            "hi-IN";

    }

    else {

        speech.lang =
            "en-IN";

    }


    speech.rate =
        0.9;


    window.speechSynthesis.cancel();


    window.speechSynthesis.speak(
        speech
    );

}


/* =========================
   WINNER VOICE
   ========================= */

function announceWinner(winner) {

    if (
        !winner ||
        !("speechSynthesis" in window)
    ) {

        return;

    }


    let text = "";


    if (
        currentLanguage === "te"
    ) {

        text =
            `${winner.name} గేమ్ గెలిచారు. అభినందనలు!`;

    }

    else if (
        currentLanguage === "hi"
    ) {

        text =
            `${winner.name} ने गेम जीत लिया। बधाई हो!`;

    }

    else {

        text =
            `${winner.name} won the game, congratulations!`;

    }


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    if (
        currentLanguage === "te"
    ) {

        speech.lang =
            "te-IN";

    }

    else if (
        currentLanguage === "hi"
    ) {

        speech.lang =
            "hi-IN";

    }

    else {

        speech.lang =
            "en-IN";

    }


    speech.rate =
        0.9;


    window.speechSynthesis.cancel();


    window.speechSynthesis.speak(
        speech
    );

}


/* =========================
   LEVEL COMPLETE
   ========================= */

function scheduleLevelComplete() {

    clearAllTimers();


    const session =
        transitionSession;


    const timer =
        setTimeout(
            () => {

                if (
                    session !==
                    transitionSession
                ) {

                    return;

                }


                if (
                    players.length === 2 &&
                    currentLevel === 4
                ) {

                    finishTwoPlayerGame();

                    return;

                }


                if (
                    currentLevel === 4
                ) {

                    prepareLevel5();

                    return;

                }


                startNextLevel();

            },
            5000
        );


    addTimer(timer);

}


/* =========================
   NEXT LEVEL
   ========================= */

function startNextLevel() {

    if (
        currentLevel >= 5
    ) {

        return;

    }


    const nextLevel =
        currentLevel + 1;


    showTransition(
        nextLevel
    );

}


/* =========================
   TRANSITION
   ========================= */

function showTransition(
    nextLevel
) {

    const session =
        transitionSession;


    transitionOverlay.classList.remove(
        "hidden"
    );


    transitionLevel.textContent =
        getLevelNumberText(
            nextLevel
        );


    transitionTitle.textContent =
        getLevelTitle(
            nextLevel
        );


    transitionRules.textContent =
        getLevelRules(
            nextLevel
        );


    transitionMessage.textContent =
        t("nextLevel");


    let count = 5;


    countdownNumber.textContent =
        count;


    const interval =
        setInterval(
            () => {

                if (
                    session !==
                    transitionSession
                ) {

                    clearInterval(
                        interval
                    );

                    return;

                }


                count--;


                countdownNumber.textContent =
                    count;


                if (
                    count <= 0
                ) {

                    clearInterval(
                        interval
                    );


                    transitionOverlay.classList.add(
                        "hidden"
                    );


                    if (
                        nextLevel === 2
                    ) {

                        createLevel2();

                    }

                    else if (
                        nextLevel === 3
                    ) {

                        createLevel3();

                    }

                    else if (
                        nextLevel === 4
                    ) {

                        createLevel4();

                    }

                    else if (
                        nextLevel === 5
                    ) {

                        createLevel5();

                    }

                }

            },
            1000
        );


    timers.push(
        interval
    );

}


/* =========================
   LEVEL TEXT
   ========================= */

function getLevelNumberText(
    level
) {

    if (level === 2)
        return t("level2");

    if (level === 3)
        return t("level3");

    if (level === 4)
        return t("level4");

    if (level === 5)
        return t("level5");

    return t("level1");

}


function getLevelTitle(
    level
) {

    if (level === 2)
        return t("negativeZone");

    if (level === 3)
        return t("mysteryCards");

    if (level === 4)
        return t("treasureVault");

    if (level === 5)
        return t("winnerCup");

    return t("luckyStart");

}


function getLevelRules(
    level
) {

    if (level === 2)
        return t("level2Rules");

    if (level === 3)
        return t("level3Rules");

    if (level === 4)
        return t("level4Rules");

    if (level === 5)
        return t("level5Rules");

    return t("level1Rules");

}


/* =========================
   TWO PLAYER FINISH
   ========================= */

function finishTwoPlayerGame() {

    clearAllTimers();


    let winner =
        players[0];


    for (
        let i = 1;
        i < players.length;
        i++
    ) {

        if (
            players[i].score >
            winner.score
        ) {

            winner =
                players[i];

        }

    }


    players.forEach(
        player => {

            player.eliminated =
                player !== winner;

        }
    );


    updateLeaderboard();


    finishGame(
        winner
    );

}


/* =========================
   PREPARE LEVEL 5
   ========================= */

function prepareLevel5() {

    const ranking =
        [...players].sort(
            (a, b) => {

                if (
                    b.score !==
                    a.score
                ) {

                    return (
                        b.score -
                        a.score
                    );

                }


                return (
                    a.registrationOrder -
                    b.registrationOrder
                );

            }
        );


    finalists =
        ranking.slice(
            0,
            2
        );


    players.forEach(
        player => {

            if (
                !finalists.includes(
                    player
                )
            ) {

                player.eliminated =
                    true;

            }

        }
    );


    finalists.forEach(
        player => {

            player.eliminated =
                false;

        }
    );


    updateLeaderboard();


    clearAllTimers();


    const session =
        transitionSession;


    transitionOverlay.classList.remove(
        "hidden"
    );


    transitionLevel.textContent =
        t("level5");


    transitionTitle.textContent =
        t("winnerCup");


    transitionRules.textContent =
        t("level5Rules");


    transitionMessage.textContent =
        `${t("finalists")}: ${finalists[0].name} & ${finalists[1].name}`;


    let count = 5;


    countdownNumber.textContent =
        count;


    const interval =
        setInterval(
            () => {

                if (
                    session !==
                    transitionSession
                ) {

                    clearInterval(
                        interval
                    );

                    return;

                }


                count--;


                countdownNumber.textContent =
                    count;


                if (
                    count <= 0
                ) {

                    clearInterval(
                        interval
                    );


                    transitionOverlay.classList.add(
                        "hidden"
                    );


                    createLevel5();

                }

            },
            1000
        );


    timers.push(
        interval
    );

}


/* =========================
   LEVEL 5
   ========================= */

function createLevel5() {

    currentLevel = 5;


    cards = [

        {

            value: 0,

            type:
                "bouquet",

            emoji:
                "💐",

            revealed:
                false,

            winnerCup:
                false

        },

        {

            value: 0,

            type:
                "bouquet",

            emoji:
                "💐",

            revealed:
                false,

            winnerCup:
                false

        },

        {

            value: 0,

            type:
                "cup",

            emoji:
                "🏆",

            revealed:
                false,

            winnerCup:
                true

        }

    ];


    cards =
        shuffle(cards);


    selectedCards = 0;

    level5Selections = 0;


    if (
        finalists[0].score >=
        finalists[1].score
    ) {

        level5CurrentIndex =
            0;

    }

    else {

        level5CurrentIndex =
            1;

    }


    renderCards();

    updateLevelUI();

    updateLevel5Turn();

    updateGameMessage(
        t("chooseWinnerCup")
    );

}


/* =========================
   LEVEL 5 TURN
   ========================= */

function updateLevel5Turn() {

    const finalist =
        finalists[
            level5CurrentIndex
        ];


    if (finalist) {

        currentTurn.textContent =
            finalist.name;

    }

}


/* =========================
   LEVEL 5 CARD
   ========================= */

function selectLevel5Card(index) {

    const card =
        cards[index];


    if (
        !card ||
        card.revealed
    ) {

        return;

    }


    const finalist =
        finalists[
            level5CurrentIndex
        ];


    if (!finalist) {

        return;

    }


    card.revealed =
        true;


    selectedCards++;

    level5Selections++;


    renderCards();

    announceValue(card);


    if (
        card.winnerCup
    ) {

        updateGameMessage(
            t("winnerCupFound")
        );


        finishGame(
            finalist
        );


        return;

    }


    updateGameMessage(
        `${finalist.name}: ${t("bouquet")}`
    );


    if (
        level5Selections === 1
    ) {

        level5CurrentIndex =
            level5CurrentIndex === 0
                ? 1
                : 0;


        const timer =
            setTimeout(
                () => {

                    updateLevel5Turn();

                    updateGameMessage(
                        t("secondFinalistTurn")
                    );

                },
                2000
            );


        timers.push(
            timer
        );

    }


    else if (
        level5Selections === 2
    ) {

        level5CurrentIndex =
            level5CurrentIndex === 0
                ? 1
                : 0;


        const timer =
            setTimeout(
                () => {

                    updateLevel5Turn();

                    updateGameMessage(
                        t("finalChoice")
                    );

                },
                2000
            );


        timers.push(
            timer
        );

    }


    else {

        finishGame(
            finalist
        );

    }

}


/* =========================
   FINISH GAME
   ========================= */

function finishGame(
    winner
) {

    clearAllTimers();

    gameStarted = false;

    transitionSession++;


    cardsGrid
        .querySelectorAll("button")
        .forEach(
            button => {

                button.disabled =
                    true;

            }
        );


    players.forEach(
        player => {

            if (
                player === winner
            ) {

                player.eliminated =
                    false;

            }

        }
    );


    updateLeaderboard();


    winnerName.textContent =
        winner.name;


    if (
        currentLevel === 5
    ) {

        winnerScore.textContent =
            `${winner.score} ${t("points")}`;

    }

    else {

        winnerScore.textContent =
            `${winner.score} ${t("points")} • ${t("gameComplete")}`;

    }


    saveGameHistory(
        winner
    );


    winnerOverlay.classList.remove(
        "hidden"
    );


    document.body.classList.add(
        "winner-open"
    );


    /* FINAL WINNER ANNOUNCEMENT */

    announceWinner(
        winner
    );

}


/* =========================
   SAVE HISTORY
   ========================= */

function saveGameHistory(
    winner
) {

    if (historySaved) {

        return;

    }


    historySaved = true;


    const username =
        localStorage.getItem(
            "currentUser"
        );


    if (!username) {

        return;

    }


    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            ) || "[]"
        );


    const userIndex =
        users.findIndex(
            user =>
                user.username ===
                username
        );


    if (
        userIndex === -1
    ) {

        return;

    }


    if (
        !Array.isArray(
            users[userIndex].history
        )
    ) {

        users[userIndex].history =
            [];

    }


    const historyRecord = {

        gameNumber:
            gameNumber,

        date:
            new Date().toLocaleString(),

        mode:
            `${players.length} Players`,

        levelReached:
            currentLevel,

        players:
            players.map(
                player => ({

                    name:
                        player.name,

                    score:
                        player.score,

                    eliminated:
                        player.eliminated,

                    robot:
                        player.robot,

                    level5Place:
                        player.level5Place

                })
            ),

        diamondWinner:
            null,

        winner:
            winner.name

    };


    users[userIndex]
        .history
        .push(
            historyRecord
        );


    localStorage.setItem(
        "users",
        JSON.stringify(
            users
        )
    );

}


/* =========================
   HISTORY
   ========================= */

function showHistory() {

    historyContent.innerHTML =
        "";


    const username =
        localStorage.getItem(
            "currentUser"
        );


    if (!username) {

        historyContent.innerHTML =
            `<p>${t("noHistory")}</p>`;

        historyModal.classList.remove(
            "hidden"
        );

        return;

    }


    const users =
        JSON.parse(
            localStorage.getItem(
                "users"
            ) || "[]"
        );


    const user =
        users.find(
            item =>
                item.username ===
                username
        );


    const history =
        user &&
        Array.isArray(
            user.history
        )
            ? user.history
            : [];


    if (!history.length) {

        historyContent.innerHTML =
            `<p>${t("noHistory")}</p>`;

        historyModal.classList.remove(
            "hidden"
        );

        return;

    }


    [...history]
        .reverse()
        .forEach(
            record => {

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "history-item";


                const playersHTML =
                    (record.players || [])
                        .map(
                            player => {

                                return `

                                    <div class="history-player">

                                        ${escapeHTML(
                                            player.name
                                        )}

                                        — ${player.score}
                                        ${t("points")}

                                    </div>

                                `;

                            }
                        )
                        .join("");


                item.innerHTML = `

                    <h3>
                        Game ${record.gameNumber}
                    </h3>

                    <p>
                        ${record.date}
                    </p>

                    <p>
                        ${record.mode}
                    </p>

                    <p>
                        ${t("levelReached")}:
                        ${record.levelReached}
                    </p>

                    <p>
                        🏆
                        ${escapeHTML(
                            record.winner
                        )}
                    </p>

                    <div class="history-players">
                        ${playersHTML}
                    </div>

                `;


                historyContent.appendChild(
                    item
                );

            }
        );


    historyModal.classList.remove(
        "hidden"
    );

}


/* =========================
   CLEAR HISTORY
   ========================= */

clearHistoryBtn.addEventListener(
    "click",
    function () {

        const username =
            localStorage.getItem(
                "currentUser"
            );


        if (!username) {

            return;

        }


        const users =
            JSON.parse(
                localStorage.getItem(
                    "users"
                ) || "[]"
            );


        const userIndex =
            users.findIndex(
                user =>
                    user.username ===
                    username
            );


        if (
            userIndex !== -1
        ) {

            users[userIndex].history =
                [];


            localStorage.setItem(
                "users",
                JSON.stringify(
                    users
                )
            );

        }


        showHistory();

    }
);


/* =========================
   RULES
   ========================= */

function updateRulesContent() {

    const content =
        document.getElementById(
            "rulesContent"
        );


    if (!content) {

        return;

    }


    /*
       The rules automatically change according
       to the selected/current player count.

       2 Players:
       Level 1 → Level 4

       4 Players:
       Level 1 → Level 5
    */


    if (playerCount === 4) {

        content.innerHTML = `

            <div class="rule-section">

                <h3>
                    ${t("rulesFourTitle")}
                </h3>

                <p>
                    ${t("rulesFourIntro")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesLevel1Title")}
                </h3>

                <p>
                    ${t("rulesLevel1Text")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesLevel2Title")}
                </h3>

                <p>
                    ${t("rulesLevel2Text")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesLevel3Title")}
                </h3>

                <p>
                    ${t("rulesLevel3Text")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesLevel4Title")}
                </h3>

                <p>
                    ${t("rulesLevel4Text")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesFourLevel5Title")}
                </h3>

                <p>
                    ${t("rulesFourLevel5Text")}
                </p>

                <p>
                    ${t("rulesFourFinal")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesTie")}
                </h3>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesTurnTitle")}
                </h3>

                <p>
                    ${t("rulesTurnText")}
                </p>

            </div>


            <div class="rule-section">

                <h3>
                    ${t("rulesLeaderboardTitle")}
                </h3>

                <p>
                    ${t("rulesLeaderboardText")}
                </p>

            </div>

        `;

        return;

    }


    /* =========================
       2 PLAYER RULES
       ========================= */

    content.innerHTML = `

        <div class="rule-section">

            <h3>
                ${t("rulesTwoTitle")}
            </h3>

            <p>
                ${t("rulesTwoIntro")}
            </p>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesLevel1Title")}
            </h3>

            <p>
                ${t("rulesLevel1Text")}
            </p>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesLevel2Title")}
            </h3>

            <p>
                ${t("rulesLevel2Text")}
            </p>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesLevel3Title")}
            </h3>

            <p>
                ${t("rulesLevel3Text")}
            </p>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesLevel4Title")}
            </h3>

            <p>
                ${t("rulesLevel4Text")}
            </p>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesTwoFinish")}
            </h3>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesTurnTitle")}
            </h3>

            <p>
                ${t("rulesTurnText")}
            </p>

        </div>


        <div class="rule-section">

            <h3>
                ${t("rulesLeaderboardTitle")}
            </h3>

            <p>
                ${t("rulesLeaderboardText")}
            </p>

        </div>

    `;

}


/* =========================
   NEW GAME
   ========================= */

function startFreshGame() {

    clearAllTimers();

    transitionSession++;


    winnerOverlay.classList.add(
        "hidden"
    );


    transitionOverlay.classList.add(
        "hidden"
    );


    rulesModal.classList.add(
        "hidden"
    );


    historyModal.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "winner-open"
    );


    gameStarted = true;

    historySaved = false;

    currentLevel = 1;

    currentPlayerIndex = 0;

    selectedCards = 0;

    finalists = [];

    level5CurrentIndex = 0;

    level5Selections = 0;

    gameStartTime =
        new Date();


    gameNumber =
        getNextGameNumber();


    players =
        players.map(
            (player, index) => {

                return {

                    name:
                        player.name,

                    score: 0,

                    eliminated:
                        false,

                    robot:
                        false,

                    level5Place:
                        null,

                    registrationOrder:
                        index

                };

            }
        );


    showPage(
        gamePage
    );


    createLevel1();

    updateLeaderboard();

    updateTurnDisplay();

    updateGameMessage();

}


/* =========================
   NEW GAME BUTTONS
   ========================= */

newGameBtn.addEventListener(
    "click",
    function () {

        if (!players.length) {

            openSetup();

            return;

        }

        startFreshGame();

    }
);


bottomNewGameBtn.addEventListener(
    "click",
    function () {

        if (!players.length) {

            openSetup();

            return;

        }

        startFreshGame();

    }
);


winnerNewGameBtn.addEventListener(
    "click",
    function () {

        if (!players.length) {

            openSetup();

            return;

        }

        startFreshGame();

    }
);


/* =========================
   EXIT TO HOME
   ========================= */

function exitToHome() {

    clearAllTimers();

    transitionSession++;

    gameStarted = false;

    cards = [];

    selectedCards = 0;

    currentPlayerIndex = 0;

    finalists = [];

    level5CurrentIndex = 0;

    level5Selections = 0;


    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();

    }


    winnerOverlay.classList.add(
        "hidden"
    );


    transitionOverlay.classList.add(
        "hidden"
    );


    rulesModal.classList.add(
        "hidden"
    );


    historyModal.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "winner-open"
    );


    showPage(
        homePage
    );

}


/* =========================
   EXIT BUTTONS
   ========================= */

gameExitBtn.addEventListener(
    "click",
    exitToHome
);


bottomHomeBtn.addEventListener(
    "click",
    exitToHome
);


winnerHomeBtn.addEventListener(
    "click",
    exitToHome
);


/* =========================
   SETUP BACK
   ========================= */

setupBackBtn.addEventListener(
    "click",
    function () {

        showPage(
            homePage
        );

    }
);


/* =========================
   GAME BUTTONS
   ========================= */

game1Btn.addEventListener(
    "click",
    function () {

        openSetup();

    }
);


game2Btn.addEventListener(
    "click",
    function () {

        alert(
            t("arrivingMessage")
        );

    }
);


/* =========================
   RULES MODAL
   ========================= */

function openRules() {

    updateRulesContent();

    rulesModal.classList.remove(
        "hidden"
    );

}


gameRulesBtn.addEventListener(
    "click",
    openRules
);


homeRulesBtn.addEventListener(
    "click",
    openRules
);


closeRulesBtn.addEventListener(
    "click",
    function () {

        rulesModal.classList.add(
            "hidden"
        );

    }
);


rulesModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            rulesModal
        ) {

            rulesModal.classList.add(
                "hidden"
            );

        }

    }
);


/* =========================
   HISTORY MODAL
   ========================= */

historyBtn.addEventListener(
    "click",
    showHistory
);


closeHistoryBtn.addEventListener(
    "click",
    function () {

        historyModal.classList.add(
            "hidden"
        );

    }
);


historyModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            historyModal
        ) {

            historyModal.classList.add(
                "hidden"
            );

        }

    }
);


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        rulesModal.classList.add(
            "hidden"
        );


        historyModal.classList.add(
            "hidden"
        );

    }
);


/* =========================
   INITIALIZE
   ========================= */

function initializeGame() {

    createPlayerInputs();

    applyLanguage();

    showPage(
        homePage
    );

    /* SHOW WELCOME POPUP */

    showWelcomePopup();

}


initializeGame();