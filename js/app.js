console.log("ʕノ•ᴥ•ʔノ ︵ ┻━┻  ︵　しʕ•ᴥ•し  ʔ");

/* FACE LIBRARY */

// Player
const playerKao = [
    { /* 0 Neutral */
        id: "player-start",
        status: "neutral",
        face: "(๑و•̀ω•́)و",
        value: 0
    }, 
    { /* 1 Strike-damage */
        id: "player-hit-dmg",
        status: "hit-dmg",
        face: "໒(⁄›˅̭‹∖)७",
        value: 1
    },
    { /* 2 Throw-damage */
        id: "player-throw-dmg",
        status: "throw-dmg",
        face: "╭ (o^o#)ᕗ",
        value: 2
    },
    { /* 3 Block */
        id: "player-block",
        status: "block",
        face: "(`へ´*)ノ||",
        value: 0
    },
    { /* 4 Strike */
        id: "player-strike",
        status: "strike-atk",
        face: "‾͟͟͞(((ꎤ๑>༬>๑)̂—̳͟͞͞o",
        value: 1
    },
    { /* 5 Throw */
        id: "player-throw",
        status: "throw-atk",
        face: "(┛ಠДಠ)┛ミ ",
        value: 2
    },
    { /* 6 Defeat */
        id: "player-defeat",
        status: "defeat",
        face: "(。□°）",
        value: 0
    },
    { /* 7 Win */
        id: "player-win",
        status: "win",
        face: "( •̀ᄇ• ́)ﻭ✧",
        value: 0
    }
]

// Bear
const bearKao = [
    { /* 0 Neutral */
        id: "bear-start",
        status: "neutral",
        face: "ʕ•ᴥ•  ʔ",
        value: 0
    }, 
    { /* 1 Strike-damage */
        id: "bear-hit-dmg",
        status: "hit-dmg",
        face: "ʕథᴥథʔ",
        value: 1
    },
    { /* 2 Throw-damage */
        id: "bear-throw-dmg",
        status: "throw-dmg",
        face: "ʕ.□ . ʔ",
        value: 2
    },
    { /* 3 Block */
        id: "bear-block",
        status: "block",
        face: "||ʕノ)ᴥ(ヾʔ",
        value: 0
    },
    { /* 4 Strike */
        id: "bear-strike",
        status: "strike-atk",
        face: "しʕ•ᴥ•し  ʔ",
        value: 1
    },
    { /* 5 Throw */
        id: "bear-throw",
        status: "throw-atk",
        face: "ミしʕ•ᴥ•し  ʔ",
        value: 2
    },
    { /* 6 Defeat */
        id: "bear-defeat",
        status: "defeat",
        face: "ʕ×ᴥ ×  ʔ",
        value: 0
    },
    { /* 7 Win */
        id: "bear-win",
        status: "win",
        face: "ᕦʕ☯ ᴥ ☯ʔ",
        value: 0
    }
]


// ======================================================== //

/* OUTCOME LIBRARY */
const outcome = [
    { //0
        state: "double-ko",
        bgcolor: "rgba(245, 166, 35, 0.9)",
        headline: "<h2>DOUBLE KO!</h2> <p>Wow. Good job. Click here to play again!</p>"
    },
    { //1
        state: "win",
        bgcolor: "rgba(184, 233, 134, 0.9)",
        headline: "<h2>Yay! You win!</h2> <p>Click here to play again!<p>"
    },
    { //2
        state: "lose",
        bgcolor: "rgba(248, 178, 187, 0.9)",
        headline: "<h2>Aww. You lost. RIP.</h2> <p>Click here to exact vengeance!</p>"
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
const playerBodyDiv = document.getElementById("player");
const playerBodySpan = document.getElementById("player-body");
const playerHpSpan = document.getElementById("player-hp");

// Bear/CPU Elements
const bearBodyDiv = document.getElementById("bear");
const bearBodySpan = document.getElementById("bear-body");
const bearHpSpan = document.getElementById("bear-hp");



// ======================================================== //



/* GAME INIT */
// Start button gets clicked - event listener
// Disappears - append css visibility: none?
playerBodySpan.innerHTML = playerKao[0].face;
bearBodySpan.innerHTML = bearKao[0].face;

startBtn.addEventListener("click", function(event){
    startBtn.classList.add('animated', 'fadeOutUp')
    startBtn.style.display = "none";
    atkMenu.classList.add('animated', 'slideInUp')
    atkMenu.style.display = "initial";
    hpBars.classList.add('animated', 'slideInDown' )
    hpBars.style.display = "flex";
    arenaDiv.classList.add('animated', 'slideInDown')

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


// ======================================================== //


/* GAME LOGIC */

function fight(playerAtk){
    //generates a number between 0 - 2
    let bearAtk = Math.floor(Math.random() * 3);
    //console.log(`Bear ${bearAtk}`);
    //console.log(`Player ${playerAtk}`);
    
    if (playerAtk === 0 && bearAtk === 1){
        // if Player BLOCKS and Bear STRIKES

        playerBodySpan.textContent = playerKao[2].face;
        bearBodySpan.innerHTML = bearKao[4].face

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- No HP Lost - block`)

    } else if (playerAtk === 0 && bearAtk === 2){
        // if Player BLOCKS && Bear THROWS

        playerBodySpan.innerHTML = playerKao[2].face;
        bearBodySpan.innerHTML = bearKao[5].face

        playerHpCount --
        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Player LOSES 1 HP`)
    } else if (playerAtk === 1 && bearAtk === 0){

        // if Player STRIKES and bear BLOCKS

        playerBodySpan.innerHTML = playerKao[4].face;
        bearBodySpan.innerHTML = bearKao[3].face

       console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- No HP Lost - block`)

    } else if (playerAtk === 1 && bearAtk === 2){
        // if Player STRIKES and Bear THROWS

        playerBodySpan.innerHTML = playerKao[1].face;
        bearBodySpan.innerHTML = bearKao[5].face

        bearHpCount--

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Bear LOSES 1 HP`)

    } else if (playerAtk === 2 && bearAtk === 1) {
        // if Player THROWS and Bear STRIKES

        playerBodySpan.innerHTML = playerKao[1].face;
        bearBodySpan.innerHTML = bearKao[4].face

        playerHpCount--

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Player LOSES 1 HP`)
    } else if (playerAtk === 2 && bearAtk === 0){
        // if Player THROWS and Bear BLOCKS
        playerBodySpan.innerHTML = playerKao[5].face;
        bearBodySpan.innerHTML = bearKao[2].face
        bearHpCount--
        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Bear LOSES 1 HP`)
    } else if (playerAtk === bearAtk){
        // same atk
        playerBodySpan.innerHTML = playerKao[3].face;
        bearBodySpan.innerHTML = bearKao[3].face
       console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- No HP lost - same strike`)
    } 
}

/* HP Check! */
function healthCheck() {
    if(playerHpCount <= 0 && bearHpCount <= 0){
        // Double KO
        resetBanner.classList.add('animated', 'slideInDown')
        resetBanner.style.display = "initial";
        resetBanner.style.background = outcome[0].bgcolor;
        resetBanner.innerHTML = outcome[0].headline

        atkMenu.classList.add('animated', 'slideOutDown')
        atkMenu.style.display = "none"

        playerBodySpan.innerHTML = playerKao[6].face;
        playerBodySpan.style.color= "#ccc";

        bearBodySpan.innerHTML = bearKao[6].face;
        bearBodySpan.style.color= "#ccc";

    } else if(bearHpCount <= 0) {
        // Player Win
        resetBanner.classList.add('animated', 'slideInDown')
        resetBanner.style.display = "initial";
        resetBanner.style.background = outcome[1].bgcolor;
        resetBanner.innerHTML = outcome[1].headline

        atkMenu.classList.add('animated', 'slideOutDown')
        atkMenu.style.display = "none"
        
        playerBodySpan.innerHTML = playerKao[7].face;
        bearBodySpan.innerHTML = bearKao[6].face;
        bearBodySpan.style.color= "#ccc";

    } else if(playerHpCount <= 0) {
        // Player Lose
        resetBanner.classList.add('animated', 'slideInDown')
        resetBanner.style.display = "initial";
        resetBanner.style.background = outcome[2].bgcolor;
        resetBanner.innerHTML = outcome[2].headline

        atkMenu.classList.add('animated', 'slideOutDown')
        atkMenu.style.display = "none"

        playerBodySpan.innerHTML = playerKao[6].face;
        playerBodyDiv.classList.add('animated', 'hinge')
        playerBodySpan.style.color= "#ccc";

        bearBodySpan.innerHTML = bearKao[7].face;
        bearBodyDiv.classList.add('animated', 'bounce')
        bearBodySpan.style.fontSize = "35px"

    } else {
        playerBodySpan.innerHTML = playerKao[0].face;
        bearBodySpan.innerHTML = bearKao[0].face;
    }
}
// create a function that allows the 3 atk buttons to do essentially the same thing
// Plug fight(); into this

/* ATKBTN EVENT LISTENERS */
 //let randoAtk= Math.floor(Math.random() * 3);
strikeBtn.addEventListener("click", function (event){   
    fight(1);
    healthCheck();
    playerHpSpan.innerHTML = playerHpCount;
    bearHpSpan.innerHTML = bearHpCount;
    event.stopPropagation()

});

throwBtn.addEventListener("click", function (event){
    fight(2);
    healthCheck();
    playerHpSpan.innerHTML = playerHpCount;
    bearHpSpan.innerHTML = bearHpCount;

    event.stopPropagation()

});

blockBtn.addEventListener("click", function (event){
    fight(0);
    healthCheck();
    playerHpSpan.innerHTML = playerHpCount;
    bearHpSpan.innerHTML = bearHpCount;
    event.stopPropagation()

});

 //HP BAR DISPLAY 
playerHpSpan.innerHTML = playerHpCount;
bearHpSpan.innerHTML = bearHpCount;