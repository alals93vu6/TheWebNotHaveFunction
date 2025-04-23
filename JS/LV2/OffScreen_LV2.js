function TextDetected(titleNumber) {
  const offScreenText = document.getElementById("theOffScreen");
  switch (titleNumber) {
    case 1:
      offScreenText.innerText = "我看你現在反而還倒是玩起來了是吧";
      setTimeout(() => {
        TextDetected(2);
      }, 1500);
      break;
    case 2:
      offScreenText.innerText = "🙄🙄🙄";
      setTimeout(() => {
        offScreenText.innerText = "";
      }, 1500);
      break;
    case 3:
      offScreenText.innerText = "別再玩了！快離開吧！";
      setTimeout(() => {
        offScreenText.innerText = "";
      }, 1500);
      break;

    case 4:
      offScreenText.innerText = "你試多少次也不會有什麼改變的！快離開吧！";
      setTimeout(() => {
        offScreenText.innerText = "";
      }, 1500);
      break;

    case 5:
      offScreenText.innerText = "你到底是在為了甚麼而堅持?😒";
      setTimeout(() => {
        offScreenText.innerText = "";
      }, 1500);
      break;
    case 6:
      offScreenText.innerText = "夠了！！你很愛玩是吧？！那我就讓他來陪你玩！";
      setTimeout(() => {
        FinalyText();
      }, 1500);
      break;

      case 7:
      offScreenText.innerText = "你明明知道你跳不過去，為甚麼還要繼續待在這裡？🙄";
      setTimeout(() => {
        offScreenText.innerText = "";
      }, 1500);
      break;

      case 8:
      offScreenText.innerText = "天啊，瞧瞧你把這裡弄的這麼狼狽";
      setTimeout(() => {
        FinalyTextB();
      }, 1500);
      break;
  }

  function FinalyText() {
    const offScreenText = document.getElementById("theOffScreen");
    offScreenText.innerText = "🤬🤬🤬🤬🤬";

    setTimeout(() => {
        offScreenText.innerText = "";
      }, 4000);
  }

  function FinalyTextB() {
    const offScreenText = document.getElementById("theOffScreen");
    offScreenText.innerText = "我還要充當老媽子幫你收拾是吧😒";

    setTimeout(() => {
        offScreenText.innerText = "";
      }, 4000);
  }
}
