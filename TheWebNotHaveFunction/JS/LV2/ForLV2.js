var gameStart = false;
var isDead = false;
var isEnd = false;
var readyJump = true;
var dinoNumber = 0;


function OpenMask() {
    document.getElementById("maskA").style.left = "-21vw";
    document.getElementById("maskB").style.right = "-17.5vw";
}

function OnGameClick()
{
    if(!gameStart)
    {
        GameStartEvent();
    }
    else{
        if(!isDead && !isEnd)
        {
            OnJump();
        }
        else if(isDead && !isEnd){
            GameReset();
        }
        else{

        }
    }
}

function GameStartEvent()
{
    OpenMask();
    setTimeout(() => {
        var Cactus = document.getElementById("TheCactus");
        var dinosaur = document.getElementById("theDinosaur");
        Cactus.style.top = "12%";
        document.getElementById("gameScore").style.display = "block";
        setTimeout(() => {
        Cactus.style.top = "27%";
        gameStart = true;
        },230)
        setTimeout(() => {
            DinoDetected();
            dinosaur.style.zIndex = 2;
        },500)

    },1400)
}

function OnJump()
{
    var Cactus = document.getElementById("TheCactus");
    if(Cactus.style.top == "27%" && readyJump)
    {
        Cactus.style.top = "12%";
        readyJump = false;
        setTimeout(() => {
        Cactus.style.top = "27%";
        },230)
        setTimeout(() => {
        readyJump = true;
        },800)
    }
}

function DinoDetected()
{
    if(dinoNumber <6)
    {
        ResetDino();
    }
    else
    {
        alert("BOSS")
    }
    dinoNumber++;
}

function GameReset()
{

}

function ResetDino()
{
    var dinosaur = document.getElementById("theDinosaur");
    dinosaur.style.transition = "none"; // 關動畫
    if(dinoNumber == 0){dinosaur.style.transform = "transform: translate(-85%, -173%)"}
    else{dinosaur.style.transform = "translate(-105%, -173%)";}
     // 瞬移

    setTimeout(() => {
        dinosaur.style.transform = "translate(-0%, -173%)";
        dinosaur.style.transition = "transform 2s linear"; // 稍後再打開動畫
    }, 50);

    setTimeout(() => {
        DinoDetected();
    }, 2800);
}