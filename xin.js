let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let backToFirstButton = document.getElementById("backToFirst");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;
let questionStage = 1;

const noTexts = [
    "再想想",
    "真的不考虑了吗",
    "你想好了吗",
    "最后给你一次机会",
    "求求你了"
];

noButton.addEventListener("click", function () {
    clickCount++;

    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    if (clickCount === 1) mainImage.src = "https://pic3.zhimg.com/v2-1df9bd6879ad4713abc1372521da6140_r.jpg?source=1940ef5c";
    if (clickCount === 2) mainImage.src = "https://tse3-mm.cn.bing.net/th/id/OIP-C.xpafEwQA8ToN5zbE75Id8QAAAA?rs=1&pid=ImgDetMain";
    if (clickCount === 3) mainImage.src = "https://tse1-mm.cn.bing.net/th/id/OIP-C.aPU8uBzMzsrba8Xk7fMu6QHaHa?rs=1&pid=ImgDetMain";
    if (clickCount === 4) mainImage.src = "https://ts1.tc.mm.bing.net/th/id/R-C.556116c7d4fc6bf33c627c711779ab13?rik=hTvwA6UHu%2fpzjg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20211106ac%2f554%2fw690h664%2f20211106%2f3f1b-a8304a3e33bbfaf8a745341a3ae018b2.jpg&ehk=Tv1okAHAikMKzUUySnKe5q07ILfHsZS5md2o2TZw9NQ%3d&risl=&pid=ImgRaw&r=0";
    if (clickCount >= 5) mainImage.src = "https://img.keaitupian.cn/newupload/2021/12/23/5844A493ECA5B11BB4CD253BA9CA0F27.gif";
});

yesButton.addEventListener("click", function () {
    switch (questionStage) {
        case 1:
            questionText.innerHTML = '<img id="期待" src="https://picx.zhimg.com/50/v2-f6774d261eb00c41ea836d293d2774e1_720w.gif?source=1def8aca" alt="期待">确定一直做搭档下去而不是手滑？';
            resetUI();
            questionStage = 2;
            break;
        case 2:
            questionText.innerHTML = '<img id="期待" src="https://picx.zhimg.com/50/v2-f6774d261eb00c41ea836d293d2774e1_720w.gif?source=1def8aca" alt="期待">搭档几天没联系你，你会主动联系他嘛？';
            resetUI();
            questionStage = 3;
            backToFirstButton.style.display = 'inline-block';
            break;
        case 3:
            questionText.innerHTML = '<img id="期待" src="https://picx.zhimg.com/50/v2-f6774d261eb00c41ea836d293d2774e1_720w.gif?source=1def8aca" alt="期待">看到什么有趣好玩的会分享给搭档嘛';
            resetUI();
            questionStage = 4;
            backToFirstButton.style.display = 'none';
            break;
        case 4:
            document.body.innerHTML = `
                <div class="yes-screen">
                    <h1 class="yes-text">太好了，咱俩天下第一好！！！</h1>
                    <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.q1TPuLFzcQ9QFPrC1qFJhwAAAA?rs=1&pid=ImgDetMain" alt="芜湖" class="yes-image">
                </div>
            `;
            document.body.style.overflow = "hidden";
            break;
    }
});

backToFirstButton.addEventListener("click", function () {
    questionText.innerHTML = '<img id="期待" src="https://picx.zhimg.com/50/v2-f6774d261eb00c41ea836d293d2774e1_720w.gif?source=1def8aca" alt="期待">可不可以一直做搭档?';
    resetUI();
    questionStage = 1;
    backToFirstButton.style.display = 'none';
});

function resetUI() {
    mainImage.src = "https://k.sinaimg.cn/n/sinacn10111/580/w690h690/20191103/e496-ihuuxuu2717254.jpg/w700d1q75cms.jpg";
    clickCount = 0;
    yesButton.style.transform = 'scale(1)';
    noButton.style.transform = 'translateX(0px)';
    mainImage.style.transform = 'translateY(0px)';
    questionText.style.transform = 'translateY(0px)';
    noButton.innerText = '不可以！';
}