var gameStart = false;
var isDead = false;
var isEnd = false;
var readyJump = true;
var dinoNumber = 0;

function OpenMask() {
  document.getElementById("maskA").style.left = "-21vw";
  document.getElementById("maskB").style.right = "-17.5vw";
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

function GameEndEvent() {}

function DinoDetected() {
  if (isDead) return;
  if (dinoNumber < 5) {
    dinoNumber++;
    ResetDino();
  } else {
    document.getElementById("dinoDetectedArea").style.left = "85%";
    document.getElementById("theBOSSDinosaur").style.transform =
      "translate(135%, -115%)";
    document.getElementById("theBOSSDinosaur").style.transition =
      "transform 15s linear";
  }
}

function GameReset() {
  isDead = false;
  readyJump = true;
  dinoNumber = 0;
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
    dinosaur.style.transition = "transform 2s linear"; // 稍後再打開動畫
  }, 50);
}
