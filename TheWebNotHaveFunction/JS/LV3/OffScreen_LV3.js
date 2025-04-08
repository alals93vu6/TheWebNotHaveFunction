var PassNumber = 0;
var FailedNumber = 0;
var NoneNumber = 0;

export function PassTextDetected() {
    PassNumber++;
    TextDetected(1, PassNumber);
    //alert(PassNumber);
}

export function FailedTextDetected() {
    FailedNumber++;
    TextDetected(2, FailedNumber);
    //alert(FailedNumber);
}

export function NoneTextDetected() {
    NoneNumber++;
    TextDetected(3, NoneNumber);
    //alert(NoneNumber);
}

function TextDetected(textType, titleNumber) {

    const offScreenText = document.getElementById("theOffScreen");
    if (!offScreenText) {
        console.warn("無法取得 #theOffScreen");
        return;
    }
    switch (textType) {
        case 1:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = ".....";
                    setTimeout(() => {
                        TextDetected(1, -1);
                    }, 3000);
                    break;
                case -1:
                    offScreenText.innerText = "好，算你厲害";
                    setTimeout(() => {
                        TextDetected(1, -2);
                    }, 1500);
                    break;

                case -2:
                    offScreenText.innerText = "只是我真的不明白你為甚麼非得要在這裡跟我耗?";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 3000);
                    break;
            }
            break;
        case 2:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = "你倒是不要亂丟啊！！";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 3:
                    offScreenText.innerText = "你不要再堅持了！";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 5:
                    offScreenText.innerText = "放過我吧，算我求你了";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 8:
                    offScreenText.innerText = "我無法明白你的行為";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 12:
                    offScreenText.innerText = "🙄🙄🙄🙄🙄🙄🙄🙄";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
            }
            break;
        case 3:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = "你把這裡弄亂了！";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 3:
                    offScreenText.innerText = "嘿！住手！！";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 5:
                    offScreenText.innerText = "你搞啥？!";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 8:
                    offScreenText.innerText = "😡😡😡";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
                case 12:
                    offScreenText.innerText = "🤬🤬🤬🤬🤬";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
            }
            break;
    }




}