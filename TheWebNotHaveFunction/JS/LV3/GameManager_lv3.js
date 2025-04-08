import { NoneTextDetected,PassTextDetected,FailedTextDetected } from "./OffScreen_LV3.js";

export function DragPass(){
    PassTextDetected();
}

export function DragFailed(){
    FailedTextDetected();
}

export function DragNone(){
    NoneTextDetected();
}