console.log("ʕノ•ᴥ•ʔノ ︵ ┻━┻  ︵　しʕ•ᴥ•し  ʔ");

/* FACE LIBRARY */

// Player
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

// Bear
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



// ======================================================== //



/* ELEMENT CALLS */
// Generic sections
const title = document.getElementById("title");
const atkMenu = document.getElementById("atk-menu");
const hpBars = document.getElementById("hp-container-section");
const arenaDiv = document.getElementById("arena-section");
const resetBanner = document.getElementById("reset");

// Buttons
const strikeBtn = document.getElementById("strike");
const throwBtn = document.getElementById("throw");
const blockBtn = document.getElementById("block");
const startBtn = document.getElementById("start");

// Player Elements
const playerBodySpan = document.getElementById("player-body");
const playerHpSpan = document.getElementById("player-hp");

// Bear/CPU Elements
const bearBodySpan = document.getElementById("bear-body");
const bearHpSpan = document.getElementById("bear-hp");



// ======================================================== //



/* GAME INIT */
// Start button gets clicked - event listener
// Disappears - append css visibility: none?
startBtn.addEventListener("click", function(event){
    startBtn.classList.add('animated', 'fadeOutUp')
    startBtn.style.display = "none";
    atkMenu.classList.add('animated', 'slideInUp')
    atkMenu.style.display = "initial";
    hpBars.classList.add('animated', 'slideInDown' )
    hpBars.style.display = "flex";
    arenaDiv.classList.add('animated', 'slideInDown')
    //title.classList.add('animated', 'slideInDown')

    event.stopPropagation();
});

/* RESET */
resetBanner.addEventListener("click", function(event) {
    document.location.reload(true)
    event.stopPropagation();    
});

// ======================================================== //



/* HP DISPLAY */
// Loop through an array?
// Numbers based?
    // if i < count; i ++ ; every i can be a health bar count -> "|"

let playerHpCount = 10;
//let playerHpBars =[
 // "|","|","|","|","|","|","|","|","|","|"
//]

let bearHpCount = 10;
//let bearHpBars = [
   // "|","|","|","|","|","|","|","|","|","|"
//]

/*
let bars = [];
function healthBarDisplay(user) {
   
    for(let i=0; i < user.length; i++){
        bars.push(user[i]);
    }
    return bars.join('');
}*/






// ======================================================== //






/* GAME LOGIC */
// When button is pressed, an action happens:
    // STRIKE 1 > THROW 2 
    // THROW 2 > BLOCK 0 
    // BLOCK 0 > STRIKE 1 

// If Player beats Bear, Bear's HP is decremented by 1
// If Bear beats Player, Player's HP is decremented by 1 or 2
// If both throw the same attack, no one loses HP
// If one blocks, no one loses HP
// Assign values to attacks?
    // Honestly, all the buttons do the same thing. lol.


function healthCheck() {
    if(playerHpCount <= 0 && bearHpCount <= 0){
        resetBanner.classList.add('animated', 'slideInDown')
        resetBanner.style.display = "initial";
        playerBodySpan.innerHTML = playerKao[6].face;
        playerBodySpan.style.color= "#ccc";
        bearBodySpan.innerHTML = bearKao[6].face;
        bearBodySpan.style.color= "#ccc";
        atkMenu.classList.add('animated', 'fadeOutDown')
        atkMenu.style.display = "none";
    } else if(bearHpCount <= 0) {
        bearBodySpan.innerHTML = bearKao[6].face;
    } else if(playerHpCount <= 0) {
        playerBodySpan.innerHTML = playerKao[6].face;
    } else {
        playerBodySpan.innerHTML = playerKao[0].face;
        bearBodySpan.innerHTML = bearKao[0].face;
    }
}    

strikeBtn.addEventListener("click", function(event){
/*   
    playerHpSpan.innerHTML = playerHpBars.pop();*/
    console.log("pop pop pop")
    healthCheck();
    bearHpSpan.innerHTML = bearHpCount--;
    playerHpSpan.innerHTML = playerHpCount--;
});




/* HP BAR DISPLAY */
playerHpSpan.innerHTML = playerHpCount;
bearHpSpan.innerHTML = bearHpCount;