export async function StartUP() {
    const trashBin = document.getElementById("trashBin");
    const titleContainer = document.getElementById("wordContainer");
    const words = titleContainer.querySelectorAll(".word");
    const options = document.getElementsByClassName("quitButton");

    // 1. 逐字淡入
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        word.style.opacity = "1";
        word.style.transform = "translateX(0)";
        await delay(150); // 每個字間隔 0.5 秒
    }
    await delay(300);
    // 2. 垃圾桶淡入
    trashBin.style.left = "50%";
    trashBin.style.opacity = "1";
    await delay(500);

    options.style.opacity = "1";
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }