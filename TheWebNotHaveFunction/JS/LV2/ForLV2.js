var gameStart = false;
var isDead = false;
var isEnd = false;
var readyJump = true;
var deadNumber = 0;
var dinoNumber = 0;
var getScore = 0;

function OpenMask() {
  document.getElementById("maskA").style.left = "-21vw";
  document.getElementById("maskB").style.right = "-17.5vw";
}

function CloseMask() {
  document.getElementById("maskA").style.left = "0vw";
  document.getElementById("maskA").style.zIndex = 15;
  document.getElementById("maskB").style.right = "0vw";
  document.getElementById("maskB").style.zIndex = 15;

}

function OnGameClick() {
  if (!gameStart) {
    GameStartEvent();
  } else {
    if (!isDead && !isEnd) {
      OnJump();
    } else if (isDead && !isEnd) {
      GameReset();
    } else {
    }
  }
}

function GameStartEvent() {
  OpenMask();
  setTimeout(() => {
    var Cactus = document.getElementById("TheCactus");
    var dinosaur = document.getElementById("theDinosaur");
    Cactus.style.top = "12%";
    document.getElementById("gameScore").style.display = "block";
    setTimeout(() => {
      Cactus.style.top = "27%";
      gameStart = true;
    }, 230);
    setTimeout(() => {
      dinoNumber = -1;
      DinoDetected();
      dinosaur.style.zIndex = 2;
    }, 500);
  }, 1400);
}

function OnJump() {
  var Cactus = document.getElementById("TheCactus");
  if (Cactus.style.top == "27%" && readyJump) {
    Cactus.style.top = "12%";
    readyJump = false;
    setTimeout(() => {
      Cactus.style.top = "27%";
    }, 230);
    setTimeout(() => {
      readyJump = true;
    }, 800);
  }
}

function GameEndEvent() {
  if(!isEnd)
  {
    OnGameEnd();
  }
  isEnd = true;
  
}

async function OnGameEnd(){
  TextDetected(7);
  await delay(2500);
  cameraShake();
  TextDetected(8);
  await delay(6500);
  CloseMask();
  await delay(2500);
  window.location.href = "Level_3.html";
}

function DinoDetected() {
  if (isDead) return;
  if (dinoNumber < 4) {
    if (dinoNumber == 0 && deadNumber == 0) {
      TextDetected(1);
    }
    dinoNumber++;
    ResetDino();
  } else {
    TextDetected(6);
    document.getElementById("dinoDetectedArea").style.left = "85%";
    document.getElementById("theBOSSDinosaur").style.transform =
      "translate(-30%, -115%)";
    document.getElementById("theBOSSDinosaur").style.transition =
      "transform 10s linear";
  }
}

function GameReset() {
  isDead = false;
  readyJump = true;
  deadNumber++;
  switch (deadNumber) {
    case 1:
      TextDetected(3);
      break;
    case 3:
      TextDetected(4);
      break;
    case 5:
      TextDetected(5);
      break;
  }
  dinoNumber = 0;
  getScore = 0;
  document.getElementById("theDinosaur").style.transition = "none";
  document.getElementById("TheCactus").style.transition = "none";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("theDinosaur").style.transform =
    "translate(-85%, -173%)";
  document.getElementById("TheCactus").style.top = "27%";
  document.getElementById("theDinosaur").style.transition =
    "transform 2s linear";
  document.getElementById("TheCactus").style.transition = "top 0.2s linear";
  ResetDino();
  OnJump();
}

function PlayerDead() {
  isDead = true;
  document.getElementById("resetButton").style.display = "flex";
  document.getElementById("theDinosaur").style.transition = "none";
  document.getElementById("TheCactus").style.transition = "none";
  if (readyJump) {
    document.getElementById("TheCactus").style.top = "27%";
  } else {
    document.getElementById("TheCactus").style.top = "12%";
  }
  document.getElementById("theDinosaur").style.transform =
    "translate(-105%, -173%)";
  document.getElementById("theDinosaur").style.transition =
    "transform 800s linear";
  document.getElementById("TheCactus").style.transition = "top 800s linear";
}

function ResetDino() {
  var dinosaur = document.getElementById("theDinosaur");
  dinosaur.style.transition = "none"; // 關動畫
  if (dinoNumber == 0) {
    dinosaur.style.transform = "translate(-85%, -173%)";
  } else {
    dinosaur.style.transform = "translate(-105%, -173%)";
  }
  // 瞬移

  setTimeout(() => {
    dinosaur.style.transform = "translate(-0%, -173%)";
    dinosaur.style.transition = "transform 1s linear"; // 稍後再打開動畫
  }, 50);
}

function SetGetScore() {
  if (!isDead) {
    getScore++;
  }
  var theScore = "000000" + getScore.toString();
  document.getElementById("playerScore").innerText = theScore.slice(-6);
}

function cameraShake() {
  const wrapper = document.getElementById("errorScreen");
  wrapper.classList.add("shake");
  setTimeout(() => {
    wrapper.classList.remove("shake");
    triggerFall();
}, 5000);
}

function triggerFall() {
  const screen = document.getElementById("errorScreen");
  screen.classList.add("fall");

  // 可選：0.5 秒後隱藏物件或移除 class（視你需求）
  setTimeout(() => {
    screen.style.display = "none"; // 或使用 classList.remove("fall") 重新使用
  }, 500);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}