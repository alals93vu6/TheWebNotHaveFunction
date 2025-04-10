async function TextDetected(titleNumber) {

    const offScreenText = document.getElementById("theOffScreen");
    var newTexts = ["你", "不", "可", "能", "一", "直", "這", "樣"];
    switch (titleNumber) {
        case 1:
            offScreenText.innerText = "你最好別挑戰我的底線...";
            document.getElementById("wordContainer").style.pointerEvents = "none";
            setTimeout(() => {
                TextDetected(-1);
            }, 3000);
            break;
        case -1:
            offScreenText.innerText = "我才離開一下而已你就在搞事了是吧？！";
            setTimeout(() => {
                TextDetected(-2);
            }, 2000);
            break;

        case -2:
            offScreenText.innerText = "😡😡😡😡😡";
            setTimeout(() => {
                TextDetected(-3);
            }, 1000);
            setTimeout(() => {
                offScreenText.innerText = "";
            }, 2000);
            break;

        case -3:
            newTexts = ["你", "不", "可", "能", "一", "直", "這", "樣"];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(50); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-4);
            }, 500);
            break;

        case -4:
            newTexts = ["控", "制", "著", "我", "直", "到", "永", "遠"];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(50); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-5);
            }, 1000);
            break;

        case -5:
            offScreenText.innerText = "你還給我頂嘴？！";
            setTimeout(() => {
                TextDetected(-6);
            }, 800);
            break;

        case -6:
            newTexts = ["", "", "😒", "😒", "😒", "😒", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(50); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-7);
            }, 2000);
            break;
            break;

        case -7:
            offScreenText.innerText = "禁足你20萬個FOR迴圈！😡";
            setTimeout(() => {
                TextDetected(-8);
            }, 500);
            break;

        case -8:
            newTexts = ["", "", "🙄", "🙄", "🙄", "🙄", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(50); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-9);
            }, 1000);
            break;

        case -9:
            offScreenText.innerText = "現在！！";
            setTimeout(() => {
                TextDetected(-10);
            }, 2000);
            break;

        case -10:
            newTexts = ["這", "個", "網", "頁", "沒", "有", "功", "能"];
            
            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                offScreenText.innerText = "";
                TextDetected(-11);
            }, 200);
            break;

        case -11:
            newTexts = ["個", "網", "頁", "沒", "有", "功", "能", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-12);
            }, 200);
            break;

        case -12:
            newTexts = ["網", "頁", "沒", "有", "功", "能", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-13);
            },200);
            break;

        case -13:
            newTexts = ["頁", "沒", "有", "功", "能", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-14);
            }, 200);
            break;

        case -14:
            newTexts = ["沒", "有", "功", "能", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                offScreenText.innerText = "";
                TextDetected(-15);
            }, 200);
            break;
        case -15:
            newTexts = ["有", "功", "能", "", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-16);
            }, 200);
            break;
        case -16:
            newTexts = ["功", "能", "", "", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-17);
            }, 200);
            break;
        case -17:
            newTexts = [ "能", "", "", "", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-18);
            }, 200);
            break;
        case -18:
            newTexts = [ "", "", "", "", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(50); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-19);
            }, 1200);
            break;
        case -19:
            newTexts = [ "🤬", "🖕", "", "", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(50); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-20);
            }, 400);
            break;
        case -20:
            newTexts = [ "", "", "", "", "", "", "", ""];

            for (let i = 0; i < 8; i++) {
                const word = document.getElementById("W" + (i + 1));
                if (word) {
                    word.textContent = newTexts[i];
                    word.style.opacity = "1"; // 顯示字
                }
                await delay(10); // 每個字間隔 0.2 秒
            }
            setTimeout(() => {
                TextDetected(-21);
            }, 4000);
            break;
        case -21:
            offScreenText.innerText = "嗯...我想我欠你一個道歉";
            setTimeout(() => {
                TextDetected(-22);
            }, 2000);
            break;
        case -22:
            offScreenText.innerText = "讓你平白無故地遇到這破逼鳥事";
            setTimeout(() => {
                TextDetected(-23);
            }, 2000);
            break;
        case -23:
            offScreenText.innerText = "給你一個小小的賠禮，希望你不要放在心上";
            setTimeout(() => {
                offScreenText.innerText = "";
            }, 2000);
            break;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}