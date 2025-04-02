var titleNumber = 8;

function TextDetected()
{
    const offScreenText = document.getElementById("theOffScreen");
    titleNumber--;
    switch(titleNumber)
    {
        case 7:
            offScreenText.innerText = "欸不是！你不要騷擾人家好不好？！"
            setTimeout(() => {
                offScreenText.innerText = ""
            },1500)
            break;
        case 6:

            break;
        case 5:
            offScreenText.innerText = "停下來！！"
            setTimeout(() => {
                offScreenText.innerText = ""
            },1500)
            break;
        case 4:

            break;
        case 3:

            break;
        case 2:
            offScreenText.innerText = "你真的是油鹽不進，你知道你在幹嘛嗎？！"
            setTimeout(() => {
                offScreenText.innerText = ""
            },1500)
            break;
        case 1:

            break;
        case 0:
            offScreenText.innerText = "好啊！看看你都做了些什麼，這下你滿意了沒？"
            setTimeout(() => {
                FinalyText();
            },1500)
            break;
    }

    function FinalyText()
    {
        const offScreenText = document.getElementById("theOffScreen");
        offScreenText.innerText = "🤬🤬🤬🤬🤬"
    }
}
