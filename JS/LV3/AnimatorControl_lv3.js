

export async function StartUP() {
    const trashBin = document.getElementById("trashBin");
    const titleContainer = document.getElementById("wordContainer");
    const words = titleContainer.querySelectorAll(".word");
    const options = document.getElementById("exitOption");

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
    options.style.left = "50%";
    options.style.opacity = "1";
}

export async function ClearOption() {
    const options = document.getElementById("exitOption");
    await delay(500);
    options.style.top = "75%";
    await delay(300);
    options.style.opacity = "0";
}

export function ActivateRGBCycle() {
    const words = document.querySelectorAll("#wordContainer .word");
    document.getElementById("theLight").style.display = "block";

    words.forEach(word => {
        if (word.id !== "W5") { // 排除掉 "沒" 字
            let hue = Math.floor(Math.random() * 360); // 每個字初始色不同

            const cycle = () => {
                hue = (hue + 2) % 360; // 色相變化速度
                word.style.color = `hsl(${hue}, 100%, 50%)`;
                word.style.textShadow = `
                -1px -1px 0 black,
                 6px -1px 0 black,
                -1px  6px 0 black,
                6px  6px 0 black`;
                requestAnimationFrame(cycle);
            };

            cycle(); // 啟動循環動畫
        }
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}