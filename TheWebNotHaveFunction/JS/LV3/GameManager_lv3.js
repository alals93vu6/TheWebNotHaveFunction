import * as OffScreen from "./OffScreen_LV3.js";
import * as Animator from "./AnimatorControl_lv3.js";


export async function OnGameStart(){
    Animator.StartUP();
    await delay(2800);
    OffScreen.ReadyTextDetected();
    await delay(1600);
    Animator.ClearOption();
}

export function DragPass(){
    Animator.ActivateRGBCycle();
    OffScreen.PassTextDetected();
}

export function DragFailed(){
    OffScreen.FailedTextDetected();
}

export function DragNone(){
    OffScreen.NoneTextDetected();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }