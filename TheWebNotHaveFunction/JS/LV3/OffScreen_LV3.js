var PassNumber = 0;
var FailedNumber = 0;
var NoneNumber = 0;

export function PassTextDetected() {
    PassNumber++;
    TextDetected(1, PassNumber);
    alert(PassNumber);
}

export function FailedTextDetected() {
    FailedNumber++;
    TextDetected(2, FailedNumber);
    alert(FailedNumber);
}

export function NoneTextDetected() {
    NoneNumber++;
    TextDetected(3, NoneNumber);
    alert(NoneNumber);
}

function TextDetected(textType, titleNumber) {

    const offScreenText = document.getElementById("theOffScreen");
    if (!offScreenText) {
        console.warn("無法取得 #theOffScreen");
        return;
    }
    alert(textType);
    alert(titleNumber);
    switch (textType) {
        case 1:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = "我看你現在反而還倒是玩起來了是吧";
                    setTimeout(() => {
                        TextDetected(1,2);
                    }, 1500);
                    break;
                case 2:
                    offScreenText.innerText = "🙄🙄🙄";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
            }
            break;
        case 2:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = "我看你現在反而還倒是玩起來了是吧";
                    setTimeout(() => {
                        TextDetected(2,2);
                    }, 1500);
                    break;
                case 2:
                    offScreenText.innerText = "🙄🙄🙄";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
            }
            break;
        case 3:
            switch (titleNumber) {
                case 1:
                    offScreenText.innerText = "我看你現在反而還倒是玩起來了是吧";
                    setTimeout(() => {
                        TextDetected(3,2);
                    }, 1500);
                    break;
                case 2:
                    offScreenText.innerText = "🙄🙄🙄";
                    setTimeout(() => {
                        offScreenText.innerText = "";
                    }, 1500);
                    break;
            }
            break;
    }




}