let tasks = [
    {
        request: "我想要清爽又帶點酸味的調酒。",
        three: "mojito",
        two: ["gin tonic", "moscow mule"],
        threeComment: "3星：『太棒了！這正是我想要的清爽酸味，太完美了！』",
        twoComment: "2星：『嗯，還行吧，但沒那麼酸，清爽是有了，可惜少了點薄荷的清涼感。』",
        oneComment: "1星：『這什麼啊？我要的是清爽酸味，這甜膩膩的根本喝不下去！』"
    },
    {
        request: "我喜歡甜美又有熱帶風情的酒。",
        three: "pina colada",
        two: ["mai tai"],
        threeComment: "3星：『哇，這熱帶風味真濃，甜得剛剛好，太享受了！』",
        twoComment: "2星：『還不錯，但熱帶感不夠強，甜味也有點過頭了。』",
        oneComment: "1星：『什麼？這一點都不甜，還酸得要命，完全不行！』"
    },
    {
        request: "我想喝酸酸甜甜又輕盈的調酒。",
        three: "cosmopolitan",
        two: ["daiquiri", "margarita"],
        threeComment: "3星：『完美！酸甜平衡又輕盈，超適合我！』",
        twoComment: "2星：『味道還可以，但太濃了點，我想要更輕盈的口感。』",
        oneComment: "1星：『這也太重了吧，完全不輕盈，還一點都不甜！』"
    },
    {
        request: "我要濃烈又帶點果香的調酒。",
        three: "mai tai",
        two: ["daiquiri"],
        threeComment: "3星：『太讚了！濃烈中帶著果香，太對我的胃口了！』",
        twoComment: "2星：『濃烈是有了，但果香太淡，差了點意思。』",
        oneComment: "1星：『這什麼？一點果香都沒有，清淡得像水一樣！』"
    },
    {
        request: "我想喝有氣泡又清爽的酒。",
        three: "gin tonic",
        two: ["tom collins", "moscow mule"],
        threeComment: "3星：『氣泡感十足又清爽，太舒服了！』",
        twoComment: "2星：『氣泡還行，但口感太甜了點，我想要更乾爽的。』",
        oneComment: "1星：『完全沒氣泡，還黏黏的不清爽，太失望了！』"
    },
    {
        request: "我想喝酸味濃一點的烈酒。",
        three: "margarita",
        two: ["daiquiri"],
        threeComment: "3星：『酸得夠味又夠烈，太過癮了！』",
        twoComment: "2星：『酸味還可以，但烈度不夠，差點火候。』",
        oneComment: "1星：『這一點都不酸，還軟趴趴的，太糟了！』"
    },
    {
        request: "我想要濃烈又清爽的調酒。",
        three: "dark 'n' stormy",
        two: ["moscow mule"],
        threeComment: "3星：『濃烈又清爽，太棒的組合了！』",
        twoComment: "2星：『清爽是夠了，但濃度差點，我想要更重的口感。』",
        oneComment: "1星：『一點都不濃，還甜得發膩，完全不行！』"
    },
    {
        request: "我想喝帶有草本風味的清爽酒。",
        three: "gin tonic",
        two: ["tom collins"],
        threeComment: "3星：『草本香氣配上清爽，太完美了！』",
        twoComment: "2星：『草本味還行，但甜了點，清爽感被蓋住了。』",
        oneComment: "1星：『這什麼？一點草本都沒有，還黏糊糊的！』"
    },
    {
        request: "我要一杯清涼又微酸的夏日飲品。",
        three: "mojito",
        two: ["moscow mule"],
        threeComment: "3星：『清涼又微酸，夏天的感覺太棒了！』",
        twoComment: "2星：『清涼還行，但少了點薄荷的夏日感，酸味也弱。』",
        oneComment: "1星：『一點都不清涼，還甜得發膩，太差了！』"
    },
    {
        request: "給我一杯酸甜又有氣泡的調酒。",
        three: "tom collins",
        two: ["gin tonic"],
        threeComment: "3星：『酸甜又有氣泡，太滿足了！』",
        twoComment: "2星：『氣泡不錯，但甜味不夠，酸得有點單調。』",
        oneComment: "1星：『沒氣泡還不甜，口感完全不對！』"
    }
];

let currentTask = tasks[Math.floor(Math.random() * tasks.length)];
document.getElementById("customer-request").innerHTML = currentTask.request;

function checkAnswer() {
    let answer = document.getElementById("player-answer").value.toLowerCase();
    let result = document.getElementById("result");
    let expression = document.getElementById("customer-expression");

    expression.style.display = "block";

    if (answer === currentTask.three) {
        result.innerHTML = currentTask.threeComment;
        expression.src = "happy.png";
    } else if (currentTask.two.includes(answer)) {
        result.innerHTML = currentTask.twoComment;
        expression.src = "neutral.png";
    } else {
        result.innerHTML = currentTask.oneComment;
        expression.src = "angry.png";
    }
}

function newTask() {
    currentTask = tasks[Math.floor(Math.random() * tasks.length)];
    document.getElementById("customer-request").innerHTML = currentTask.request;
    document.getElementById("result").innerHTML = ""; // 清空結果
    document.getElementById("customer-expression").style.display = "none"; // 隱藏表情
    document.getElementById("player-answer").value = ""; // 清空輸入框
}