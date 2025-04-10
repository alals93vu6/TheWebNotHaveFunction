import{OnDestroyEvent}from "./GameManager_lv4.js";

export async function OnCrash() {
    document.getElementById("blackScreen").style.opacity = 1;
    document.getElementById("loader").style.display = "block";
    document.getElementById("loaderText").style.display = "block";
    await delay(2500);
    document.getElementById("blackScreen").style.opacity = 0;
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderText").style.display = "none";
    await delay(2000);
    alert("ˇ%👆@🐢?#?");
}

export async function EevealWordsInOrder() {
    const newPositions = [
        { left: "23%", top: "250%" },
        { left: "30%", top: "250%" },
        { left: "37%", top: "250%" },
        { left: "44%", top: "250%" },
        { left: "51%", top: "250%" },
        { left: "58%", top: "250%" },
        { left: "65%", top: "250%" },
        { left: "72%", top: "250%" }
    ];

    var newTexts = ["這", "個", "網", "頁", "沒", "有", "功", "能"];

    for (let i = 0; i < 8; i++) {
        const word = document.getElementById("W" + (i + 1));
        if (word) {
            word.style.left = newPositions[i].left;
            word.style.top = newPositions[i].top;
            word.textContent = newTexts[i];
            word.style.opacity = "1"; // 顯示字
        }
        await delay(200); // 每個字間隔 0.2 秒
    }

    await delay(500);

    newTexts = ["這", "#", "%", "🍁", "&", "有", "*", "能"];

    for (let i = 0; i < 8; i++) {
        const word = document.getElementById("W" + (i + 1));
        if (word) {
            word.style.left = newPositions[i].left;
            word.style.top = newPositions[i].top;
            word.textContent = newTexts[i];
            word.style.opacity = "1"; // 顯示字
        }
        await delay(50); // 每個字間隔 0.2 秒
    }

    await delay(100);

    newTexts = ["仄", "一", "往", "也", "格", "蚴", "焱", "薴"];

    for (let i = 0; i < 8; i++) {
        const word = document.getElementById("W" + (i + 1));
        if (word) {
            word.style.left = newPositions[i].left;
            word.style.top = newPositions[i].top;
            word.textContent = newTexts[i];
            word.style.opacity = "1"; // 顯示字
        }
        await delay(50); // 每個字間隔 0.2 秒
    }

    await delay(100);

    newTexts = ["這", "個", "網", "頁", "沒", "人", "監", "管"];

    for (let i = 0; i < 8; i++) {
        const word = document.getElementById("W" + (i + 1));
        if (word) {
            word.style.left = newPositions[i].left;
            word.style.top = newPositions[i].top;
            word.textContent = newTexts[i];
            word.style.opacity = "1"; // 顯示字
        }
        await delay(500); // 每個字間隔 0.2 秒
    }

    await delay(800);

    newTexts = ["😈", "🐢", "🔥", "🔥", "🔥", "🔥", "🐢", "😈"];

    for (let i = 0; i < 8; i++) {
        const word = document.getElementById("W" + (i + 1));
        if (word) {
            word.style.left = newPositions[i].left;
            word.style.top = newPositions[i].top;
            word.textContent = newTexts[i];
            word.style.opacity = "1"; // 顯示字
        }
        await delay(20); // 每個字間隔 0.2 秒
    }

    await delay(800);

    newTexts = ["這", "個", "網", "頁", "沒", "人", "監", "管"];

    for (let i = 0; i < 8; i++) {
        const word = document.getElementById("W" + (i + 1));
        if (word) {
            word.style.left = newPositions[i].left;
            word.style.top = newPositions[i].top;
            word.textContent = newTexts[i];
            word.style.opacity = "1"; // 顯示字
        }
        await delay(20); // 每個字間隔 0.2 秒
    }

    await delay(1000);
    OnDestroyEvent();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}