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

export async function OnDestroyEvent()
{
    document.getElementById("theFire").style.opacity = "0.6";
    await delay(1500);
    document.getElementsByClassName("winAlert")[0].style.opacity = "1";
    await delay(500);
    Animator.ReadyDestory();

    await delay(12000);
    ENDEvent();
}

async function ENDEvent() {
    ReadyToENDText();
    await delay(1000);
    document.getElementById("theFire").style.display = "none";
    document.getElementsByClassName("winAlert")[0].style.display = "none";
    await delay(1200);
    document.getElementById("W7").innerText = "功";
    await delay(1500);
    window.location.href = "Level_5.html";
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

async function ReadyToENDText()
{
    document.getElementById("theOffScreen").innerText = "什麼鬼？！這裡又發生甚麼事了？？！！";
    document.getElementById("W6").innerText = "有";
    document.getElementById("W7").innerText = "龔";
    document.getElementById("W8").innerText = "能";
    await delay(2000);
    document.getElementById("theOffScreen").innerText = "";
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