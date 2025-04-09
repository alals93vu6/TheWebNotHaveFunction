import { NoneTextDetected,PassTextDetected,FailedTextDetected,ReadyTextDetected } from "./OffScreen_LV3.js";
import { StartUP } from './JS/LV3/AnimatorControl_lv3.js';

export function OnGameStart(){
    StartUP();
    ReadyTextDetected();
}

export function DragPass(){
    PassTextDetected();
}

export function DragFailed(){
    FailedTextDetected();
}

export function DragNone(){
    NoneTextDetected();
}