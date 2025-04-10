import * as Animator from "./AnimatorControl_lv4.js";
import * as ObjectControl from "./ObjectControl_lv4.js";

var eventA = false;

export function OnGameLoad()
{
    Animator.OnCrash();
}

export function ReportErrorEvent()
{
    if(!eventA)
    {
        ObjectControl.ReportCrashBord();
        eventA = true;
    }
}

export function ReportErrorEventB()
{   
    ObjectControl.CloseCrashWindow("posCenter");
    ObjectControl.AddedCrashWindow();
}

export function TextLogEvent()
{
    Animator.EevealWordsInOrder();
}

export function OnDestroyEvent()
{
    alert("你完蛋了");
}

export async function OnButtonA()
{
    ObjectControl.CloseCrashWindow("CrashObject1");
    document.getElementById("W8").innerText = "";

    await delay(800);
    TextLogEvent();
}

export function OnButtonB()
{
    ObjectControl.CloseCrashWindow("CrashObject2");
    document.getElementById("W6").innerText = "";
    document.getElementById("W4").innerText = "";
    document.getElementById("W2").innerText = "";
}

export function OnButtonC()
{
    ObjectControl.CloseCrashWindow("CrashObject3");
    document.getElementById("W5").innerText = "";
    document.getElementById("W1").innerText = "";
}

export function OnButtonD()
{
    ObjectControl.CloseCrashWindow("CrashObject4");
    document.getElementById("W7").innerText = "";
    document.getElementById("W3").innerText = "";
    document.getElementById("trashBin").innerText = "";
}

export function OnButtonE()
{
    ObjectControl.CloseCrashWindow("CrashObject5");
    document.getElementById("theLight").style.display = "none";
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.GameAPI = {
    OnButtonA,
    OnButtonB,
    OnButtonC,
    OnButtonD,
    OnButtonE,
    ReportErrorEvent,
    ReportErrorEventB,
};