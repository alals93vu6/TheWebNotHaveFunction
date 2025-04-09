var PassNumber = 0;
var FailedNumber = 0;
var NoneNumber = 0;
var ReadyNumber = 0;

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

export function ReadyTextDetected() {
    ReadyNumber++;
    TextDetected(0, ReadyNumber);
    //alert(NoneNumber);
}

function TextDetected(textType, titleNumber) {

    const offScreenText = document.getElementById("theOffScreen");
    switch (textType) {
        case 0:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = "讓我猜猜，你根本不須需要這個東西對吧？";
                    setTimeout(() => {
                        TextDetected(0, 0);
                    }, 1800);
                    break;
                case 0:
                    offScreenText.innerText = ".....";
                    setTimeout(() => {
                        TextDetected(0, -1);
                    }, 800);
                    break;
                case -1:
                    offScreenText.innerText = "完美！";
                    setTimeout(() => {
                        TextDetected(0, -2);
                    }, 1500);
                    break;

                case -2:
                    offScreenText.innerText = "隨便你想待多久都沒關係";
                    setTimeout(() => {
                        TextDetected(0, -3);
                    }, 1500);
                    break;
                case -3:
                    offScreenText.innerText = "反正這裡什麼都沒有了，我到要看你有多少美國時間🤨";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 3000);
                    break;
            }
            break;
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
                    offScreenText.innerText = "你東西不要給我亂丟啊！！";
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
                    offScreenText.innerText = "別亂碰！你把這裡弄亂了！";
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