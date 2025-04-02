var TitleHP = 5;

window.onload = function () {
    alert("資料遺失，部分功能將無法使用");
    const title = document.getElementById("theTitle");
    title.style.left = "50%";
    title.style.top = "55%";


    title.addEventListener("mouseenter", changeLocation);
};

function changeLocation() {
    const title = document.getElementById("theTitle");
    let randomLeft = Math.floor(Math.random() * 51) + 25; // 25 ~ 75
    let randomTop = Math.floor(Math.random() * 51) + 25;  // 25 ~ 75
    title.style.left = randomLeft + "%";
    title.style.top = randomTop + "%";
}

function OnTitleClick() {
    TitleHP--;
    if (TitleHP <= 0) {
        ClcikEventDetected();
    }
    else {
        ColorDetected();
        TextDisplayDetected();
        MoveSpeedDetected();
    }
}

function ColorDetected() {
    const title = document.getElementById("theTitle");
    switch (TitleHP) {
        case 4:
            title.style.color = "#2F0000";
            break;

        case 3:
            title.style.color = "#750000";
            break;

        case 2:
            title.style.color = "#AE0000";
            break;

        case 1:
            title.style.color = "#EA0000";
            break;
    }
}

function TextDisplayDetected() {

}

function MoveSpeedDetected() {
    const title = document.getElementById("theTitle");
    switch (TitleHP) {
        case 4:
            title.style.transition = "left 1s ease, top 1s ease";
            changeLocation();
            break;

        case 3:
            title.style.transition = "left 0.5s ease, top 0.5s ease";
            changeLocation();
            break;

        case 2:
            title.style.transition = "left 0.3s ease, top 0.3s ease";
            changeLocation();
            break;

        case 1:
            title.style.transition = "left 0.3s ease, top 0.3s ease";
            changeLocation();
            break;
    }

}

function ClcikEventDetected() {

}
