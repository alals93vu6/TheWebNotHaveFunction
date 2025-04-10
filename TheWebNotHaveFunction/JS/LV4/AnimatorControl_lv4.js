export async function OnCrash() {
    document.getElementById("blackScreen").style.opacity = 1;
    document.getElementById("loader").style.display = "block";
    document.getElementById("loaderText").style.display = "block";
    await delay(2500);
    document.getElementById("blackScreen").style.opacity = 0;
    document.getElementById("loader").style.display = "none";
    document.getElementById("loaderText").style.display = "none";
    await delay(2000);
    alert("ˇ%@🐢?#?");
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}