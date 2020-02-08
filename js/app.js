console.log("ʕノ•ᴥ•ʔノ ︵ ┻━┻  ︵　しʕ•ᴥ•し  ʔ");

const playerKao = [
    { /* Neutral */
        id: "player-start",
        status: "neutral",
        face: "(๑و•̀ω•́)و",
        value: 0
    }, 
    { /* Hit-damage */
        id: "player-hit-dmg",
        status: "hit-dmg",
        face: "໒(⁄›˅̭‹∖)७",
        value: 1
    },
    { /* Throw-damage */
        id: "player-throw-dmg",
        status: "throw-dmg",
        face: "╭ (o^o#)ᕗ",
        value: 2
    },
    { /* Block */
        id: "player-block",
        status: "block",
        face: "(`へ´*)ノ||",
        value: 0
    },
    { /* Strike */
        id: "player-strike",
        status: "strike-atk",
        face: "‾͟͟͞(((ꎤ๑>༬>๑)̂—̳͟͞͞o",
        value: 1
    },
    { /* Throw */
        id: "player-throw",
        status: "throw-atk",
        face: "(┛ಠДಠ)┛ミ ",
        value: 2
    },
    { /* Defeat */
        id: "player-defeat",
        status: "defeat",
        face: "(。□°）",
        value: 0
    },
    { /* Win */
        id: "bear-win",
        status: "win",
        face: "( •̀ᄇ• ́)ﻭ✧",
        value: 0
    }
]

//console.log(playerKao);

const bearKao = [
    { /* Neutral */
        id: "bear-start",
        status: "neutral",
        face: "ʕ•ᴥ•  ʔ",
        value: 0
    }, 
    { /* Hit-damage */
        id: "bear-hit-dmg",
        status: "hit-dmg",
        face: "ʕథᴥథʔ",
        value: 1
    },
    { /* Throw-damage */
        id: "bear-throw-dmg",
        status: "throw-dmg",
        face: "ʕ.□ . ʔ",
        value: 2
    },
    { /* Block */
        id: "bear-block",
        status: "block",
        face: "||ʕノ)ᴥ(ヾʔ",
        value: 0
    },
    { /* Strike */
        id: "bear-strike",
        status: "strike-atk",
        face: "しʕ•ᴥ•し  ʔ",
        value: 1
    },
    { /* Throw */
        id: "bear-throw",
        status: "throw-atk",
        face: "ミしʕ•ᴥ•し  ʔ",
        value: 2
    },
    { /* Defeat */
        id: "bear-defeat",
        status: "defeat",
        face: "ʕ×ᴥ ×  ʔ",
        value: 0
    },
    { /* Win */
        id: "bear-win",
        status: "win",
        face: "ᕦʕ☯ ᴥ ☯ ʔᕤ",
        value: 0
    }
]

//console.log(bearKao);

/* GAME INIT */
// Start button gets clicked - event listener
// Disappears - append css visibility: none?

const startBtn = document.getElementById("start");
const atkMenu = document.querySelector('.atk-btn');
startBtn.addEventListener("click", function(event){
    console.log("hello world!");
    startBtn.style.display = "none";
})

