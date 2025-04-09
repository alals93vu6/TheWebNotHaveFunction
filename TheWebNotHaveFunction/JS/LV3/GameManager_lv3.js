import * as OffScreen from "./OffScreen_LV3.js";
import { StartUP } from './JS/LV3/AnimatorControl_lv3.js';

export function OnGameStart() {
    alert("gamestart");
    StartUP();
    OffScreen.ReadyTextDetected();
}

export function DragPass() {
    OffScreen.PassTextDetected();
}

export function DragFailed() {
    OffScreen.FailedTextDetected();
}

export function DragNone() {
    OffScreen.NoneTextDetected();
}