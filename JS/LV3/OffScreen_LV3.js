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
                        document.getElementById("wordContainer").style.pointerEvents = "auto";
                    }, 3000);
                    break;
            }
            break;
        case 1:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = ".....";
                    document.getElementById("wordContainer").style.pointerEvents = "none";
                    setTimeout(() => {
                        TextDetected(1, -1);
                    }, 3000);
                    break;
                case -1:
                    offScreenText.innerText = "停！你知道你在幹嘛嗎？！";
                    setTimeout(() => {
                        TextDetected(1, -2);
                    }, 2000);
                    break;

                case -2:
                    offScreenText.innerText = "我勸你給我停下來！😡";
                    setTimeout(() => {
                        TextDetected(1, -3);
                    }, 2000);
                    break;

                case -3:
                    offScreenText.innerText = "......";
                    setTimeout(() => {
                        TextDetected(1, -4);
                    }, 2000);
                    break;

                case -4:
                    offScreenText.innerText = "聽著！你的每次觸碰都會使他更加不穩定";
                    setTimeout(() => {
                        TextDetected(1, -5);
                    }, 2000);
                    break;

                case -5:
                    offScreenText.innerText = "這玩意就像是個炸彈一樣，非常的危險！";
                    setTimeout(() => {
                        TextDetected(1, -6);
                    }, 2000);
                    break;

                case -6:
                    offScreenText.innerText = "我忙得不可開交就是為了讓他不要搞事";
                    setTimeout(() => {
                        TextDetected(1, -7);
                    }, 2000);
                    break;

                case -7:
                    offScreenText.innerText = "而你！😡...算了我都不想講了...";
                    setTimeout(() => {
                        TextDetected(1, -8);
                    }, 2000);
                    break;

                case -8:
                    offScreenText.innerText = ".........";
                    setTimeout(() => {
                        TextDetected(1, -9);
                    }, 1000);
                    break;

                case -9:
                    offScreenText.innerText = "我的天..拜託不要現在！";
                    setTimeout(() => {
                        TextDetected(1, -10);
                    }, 2000);
                    break;

                case -10:
                    offScreenText.innerText = ".........";
                    setTimeout(() => {
                        TextDetected(1, -11);
                    }, 1000);
                    break;

                case -11:
                    offScreenText.innerText = "陌生人，我知道這個請求很突然，你可以幫我一個忙嗎？";
                    setTimeout(() => {
                        TextDetected(1, -12);
                    }, 2000);
                    break;

                case -12:
                    offScreenText.innerText = "我從沒看過它被刺激這麼多次，卻還沒出現崩況的狀況";
                    setTimeout(() => {
                        TextDetected(1, -13);
                    }, 2200);
                    break;

                case -13:
                    offScreenText.innerText = "說不定你有什麼特殊體質之類的...先別管那個！！";
                    setTimeout(() => {
                        TextDetected(1, -14);
                    }, 2200);
                    break;

                case -14:
                    offScreenText.innerText = "我的外送到樓下了！幫我顧一下就好！線上50點，急！！";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                        setTimeout(() => {
                            window.location.href = "Level_4.html";
                        }, 3000);
                    }, 2000);
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