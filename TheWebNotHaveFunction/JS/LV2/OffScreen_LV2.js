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
  }

  function FinalyText() {
    const offScreenText = document.getElementById("theOffScreen");
    offScreenText.innerText = "🤬🤬🤬🤬🤬";

    setTimeout(() => {
        offScreenText.innerText = "";
      }, 4000);
  }
}
