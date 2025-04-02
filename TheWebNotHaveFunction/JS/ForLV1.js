var titleHP = 8;
var isQuit = false;
var onLock = false;

window.onload = function () {
    alert("資料遺失，部分功能將無法使用");
    const title = document.getElementById("theTitle");
    title.style.left = "50%";
    title.style.top = "40%";
    const targetObject = document.getElementById("shakeObject");


    targetObject.addEventListener("mouseenter", changeLocation);
};

function changeLocation() {
    if(!onLock)
    {
        const title = document.getElementById("theTitle");
        let randomLeft = Math.floor(Math.random() * 41) + 30; // 30 ~ 70
        let randomTop = Math.floor(Math.random() * 36) + 35;  // 30 ~ 70
        title.style.left = randomLeft + "%";
        title.style.top = randomTop + "%";
    }
}

function ExitOptionDetected(){
    const quitPage = document.getElementById("quitButton");
    const cancelPage = document.getElementById("cancelButton");
    if (!isQuit) {
        isQuit = true;
        onLock = true;
        quitPage.style.display = "none";
        cancelPage.style.display = "block";
    } else {
        isQuit = false;
        onLock = false;
        quitPage.style.display = "block";
        cancelPage.style.display = "none";
    }
}

function OnTitleClick() {
    if(!onLock)
    {
        titleHP--;
        cameraShake(titleHP);
        if (titleHP <= 0) {
            ClcikEventDetected();
        }
        else {
            ColorDetected();
            TextDisplayDetected();
            MoveSpeedDetected();
        }
    }
    
}

function ColorDetected() {
    const title = document.getElementById("theTitle");
    switch (titleHP) {
        case 7:
            title.style.color = "#2F0000";
            break;

        case 5:
            title.style.color = "#750000";
            break;

        case 3:
            title.style.color = "#AE0000";
            break;

        case 2:
            title.style.color = "#EA0000";
            break;
    }
}

function TextDisplayDetected() {

}

function MoveSpeedDetected() {
    const title = document.getElementById("theTitle");
    switch (titleHP) {
        case 7:
            title.style.transition = "left 1s ease, top 1s ease";
            changeLocation();
            break;

        case 5:
            title.style.transition = "left 0.5s ease, top 0.5s ease";
            changeLocation();
            break;

        case 3:
            title.style.transition = "left 0.3s ease, top 0.3s ease";
            changeLocation();
            break;
    }

}

function ClcikEventDetected() {

}

function cameraShake(shakeTarget) {
    const wrapper = document.getElementById("shakeObject");
  if (shakeTarget > 0) {
    wrapper.classList.add("shake");
    setTimeout(() => {
      wrapper.classList.remove("shake");
    }, 300);
  } else {
    wrapper.classList.add("shake"); // 不移除，持續震動
  }
  }
