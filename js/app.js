console.log("ʕノ•ᴥ•ʔノ ︵ ┻━┻  ︵　しʕ•ᴥ•し  ʔ");

/* FACE LIBRARY */

// Player
const playerKao = [
    { /* 0 Neutral */
        id: "player-start",
        status: "neutral",
        face: "(๑و•̀ω•́)و",
        color: "#333"
    }, 
    { /* 1 Strike-damage */
        id: "player-hit-dmg",
        status: "hit!",
        face: "໒(⁄›˅̭‹∖)७",
        color: "#D0021B"
    },
    { /* 2 Throw-damage */
        id: "player-throw-dmg",
        status: "tossed!",
        face: "╭ (o^o#)ᕗ",
        color: "#D0021B"
    },
    { /* 3 Block */
        id: "player-block",
        status: "block!",
        face: "(`へ´*)ノ||",
        color: "#4A90E2"
    },
    { /* 4 Strike */
        id: "player-strike",
        status: "strike!",
        face: "(○ ｀ｰ´)○☆",
        color: "#7ED321"
    },
    { /* 5 Throw */
        id: "player-throw",
        status: "throw!",
        face: "(┛ಠДಠ)┛ミ ",
        color: "#F5A623"
    },
    { /* 6 Defeat */
        id: "player-defeat",
        status: "defeat!",
        face: "(。□°）",
        color: "#ccc"
    },
    { /* 7 Win */
        id: "player-win",
        status: "win!",
        face: "( •̀ᄇ• ́)ﻭ✧",
        color: "#333"
    }
]

// Bear
const bearKao = [
    { /* 0 Neutral */
        id: "bear-start",
        status: "neutral!",
        face: "ʕ•ᴥ•  ʔ",
        color: "#333"
    }, 
    { /* 1 Strike-damage */
        id: "bear-hit-dmg",
        status: "hit!",
        face: "ʕథᴥథʔ",
        color: "#D0021B"
    },
    { /* 2 Throw-damage */
        id: "bear-throw-dmg",
        status: "tossed!",
        face: "ʕ.□ . ʔ",
        color: "#D0021B"
    },
    { /* 3 Block */
        id: "bear-block",
        status: "block!",
        face: "||ʕノ)ᴥ(ヾʔ",
        color: "#4A90E2"
    },
    { /* 4 Strike */
        id: "bear-strike",
        status: "strike!",
        face: "しʕ•ᴥ•し  ʔ",
        color: "#7ED321"
    },
    { /* 5 Throw */
        id: "bear-throw",
        status: "throw!",
        face: "ミしʕ•ᴥ•し  ʔ",
        color: "#F5A623"
    },
    { /* 6 Defeat */
        id: "bear-defeat",
        status: "defeat!",
        face: "ʕ×ᴥ ×  ʔ",
        color: "#ccc"
    },
    { /* 7 Win */
        id: "bear-win",
        status: "win!",
        face: "ᕦʕ☯ ᴥ ☯ʔ",
        color: "#333"
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
const vs = document.getElementById("vs");

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
bearBodySpan.style.fontSize = "50px";

startBtn.addEventListener("click", function(event){
    startBtn.classList.add('animated', 'fadeOutUp')
    startBtn.style.display = "none";

    atkMenu.classList.add('animated', 'slideInUp')
    atkMenu.style.display = "initial";

    hpBars.classList.add('animated', 'slideInDown' )
    hpBars.style.display = "flex";

    arenaDiv.classList.add('animated', 'slideInDown')

    vs.classList.add('animated', 'fadeOutUp')
    vs.style.display = "none";

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

let playerHpCount = 5;
//let playerHpBars =[
 // "|","|","|","|","|","|","|","|","|","|"
//]

let bearHpCount = 5;
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

        playerBodyDiv.innerHTML = playerKao[3].face;
        playerBodyDiv.style.color = playerKao[3].color;

        bearBodyDiv.innerHTML = bearKao[4].face
        bearBodyDiv.style.color = bearKao[4].color;

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- No HP Lost - block`)

    } else if (playerAtk === 0 && bearAtk === 2){
        // if Player BLOCKS && Bear THROWS

        playerBodyDiv.innerHTML = playerKao[2].face; 
        playerBodyDiv.style.color = playerKao[2].color; // dmg

        bearBodyDiv.innerHTML = bearKao[5].face;
        bearBodyDiv.style.color = bearKao[5].color; //throw

        playerHpCount --

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Player LOSES 1 HP`)

    } else if (playerAtk === 1 && bearAtk === 0){

        // if Player STRIKES and bear BLOCKS

        playerBodyDiv.innerHTML = playerKao[4].face;
        playerBodyDiv.style.color = playerKao[4].color; //strike

        bearBodyDiv.innerHTML = bearKao[3].face;
        bearBodyDiv.style.color = bearKao[3].color; // block

       console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- No HP Lost - block`)

    } else if (playerAtk === 1 && bearAtk === 2){
        // if Player STRIKES and Bear THROWS

        playerBodyDiv.innerHTML = playerKao[4].face;
        playerBodyDiv.style.color = playerKao[4].color;

        bearBodyDiv.innerHTML = bearKao[2].face;
        bearBodyDiv.style.color = bearKao[2].color; // throw-hit
 
        bearHpCount--

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Bear LOSES 1 HP`)

    } else if (playerAtk === 2 && bearAtk === 1) {

        // if Player THROWS and Bear STRIKES

        playerBodyDiv.innerHTML = playerKao[1].face; 
        playerBodyDiv.style.color = playerKao[1].color; // strike-hit

        bearBodyDiv.innerHTML = bearKao[4].face
        bearBodyDiv.style.color = bearKao[4].color;  //strike

        playerHpCount--

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Player LOSES 1 HP`)

    } else if (playerAtk === 2 && bearAtk === 0){

        // if Player THROWS and Bear BLOCKS

        playerBodyDiv.innerHTML = playerKao[5].face;
        playerBodyDiv.style.fontSize = "35px";
        playerBodyDiv.style.color = playerKao[5].color;
        

        bearBodyDiv.innerHTML = bearKao[2].face
        bearBodyDiv.style.color = bearKao[2].color
        bearHpCount--

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- Bear LOSES 1 HP`)

    } else if (playerAtk === 0 && bearAtk === 0){
        // Both Block
        playerBodyDiv.innerHTML = playerKao[3].face;
        bearBodyDiv.innerHTML = bearKao[3].face

        playerBodyDiv.style.color = playerKao[3].color;
        bearBodyDiv.style.color = bearKao[3].color;

       console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} -- No HP lost - both block`)
    
    } else if (playerAtk === 1 && bearAtk === 1){
        // Both Strike
        playerBodyDiv.innerHTML = playerKao[4].face;
        bearBodyDiv.innerHTML = bearKao[4].face

        playerBodyDiv.style.color = playerKao[1].color;
        bearBodyDiv.style.color = bearKao[1].color;

        bearHpCount--
        playerHpCount--

        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} --  BOTH lose 1 HP - double strike`)

    } else if (playerAtk === 2 && bearAtk === 2){
        // Both Throw
        playerBodyDiv.innerHTML = playerKao[5].face;
        bearBodyDiv.innerHTML = bearKao[5].face

        playerBodyDiv.style.color = playerKao[1].color;
        bearBodyDiv.style.color = bearKao[1].color;

        bearHpCount--
        playerHpCount--
        console.log(`Bear HP: ${bearHpCount} vs. HP: ${playerHpCount} --  BOTH lose 1 HP - double throw`)
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

        playerBodyDiv.innerHTML = playerKao[6].face;
        playerBodyDiv.style.color= "#ccc";

        bearBodyDiv.innerHTML = bearKao[6].face;
        bearBodyDiv.style.color= "#ccc";

    } else if(bearHpCount <= 0) {
        // Player Win
        resetBanner.classList.add('animated', 'slideInDown')
        resetBanner.style.display = "initial";
        resetBanner.style.background = outcome[1].bgcolor;
        resetBanner.innerHTML = outcome[1].headline

        atkMenu.classList.add('animated', 'slideOutDown')
        atkMenu.style.display = "none"

        playerBodyDiv.classList.add('animated', 'bounce')
        playerBodyDiv.innerHTML = playerKao[7].face;

        bearBodyDiv.innerHTML = bearKao[6].face;
        bearBodyDiv.classList.add('animated', 'flash')
        bearBodyDiv.style.color= bearKao[6].color;

    } else if(playerHpCount <= 0) {
        // Player Lose
        resetBanner.classList.add('animated', 'slideInDown')
        resetBanner.style.display = "initial";
        resetBanner.style.background = outcome[2].bgcolor;
        resetBanner.innerHTML = outcome[2].headline

        atkMenu.classList.add('animated', 'slideOutDown')
        atkMenu.style.display = "none"

        playerBodyDiv.innerHTML = playerKao[6].face;
        playerBodyDiv.classList.add('animated', 'hinge')
        playerBodyDiv.style.color= playerKao[6].color;


        bearBodyDiv.classList.add('animated', 'bounce')
        bearBodyDiv.innerHTML = bearKao[7].face;
        bearBodyDiv.style.fontSize = "35px"

    } else {
    }
}


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


