export function ReportCrashBord() {
    document.getElementById("firstCrash").style.display = "block";
}

export function CloseCrashWindow(objectName) {
    document.getElementsByClassName(objectName)[0].style.display = "none";
}

export async function AddedCrashWindow() {
    await delay(1000);
    for (let i = 1; i <= 5; i++) {
        const el = document.getElementsByClassName("CrashObject" + i)[0];
        if (el) {
            el.style.display = "block";
        }
        await delay(80);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}