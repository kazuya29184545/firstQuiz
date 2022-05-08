const quiz = [
    {
        question: "Q1. 好きな食べ物は？",
        answers: ["ハムカツ","オムライス","焼き鳥","おにぎり"],
        correct: "オムライス",
    },{
        question: "Q2. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q3. 無人島に1つだけ持っていくなら？",
        answers: ["水","女の子","スマホ","お酒"],
        correct: "スマホ",
    },{
        question: "Q4. ？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q5. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q6. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q7. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q8. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q9. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    },{
        question: "Q10. 好きな女優は？",
        answers: ["今田美桜","橋本環奈","広瀬すず","浜辺美波"],
        correct: "広瀬すず",
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () =>{
    document.getElementById('js-question').textContent=quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex = buttonIndex+1;
    }
};
setupQuiz();

const clickHandler = (e) =>{
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score = score+1;
    } else{
        window.alert('不正解！');
    }

    quizIndex = quizIndex+1;
    if (quizIndex<quizLength) {
        setupQuiz();
    } else {
        window.alert("終了！あなたの正解数は"+score+"/"+quizLength+"です！");
    }
};

// ボタンを押したら正誤判定
let handlerIndex = 0;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex = handlerIndex+1;
};

// $button[0].addEventListener('click',(e)=>{
//     clickHandler(e);
// });
// $button[1].addEventListener('click',(e)=>{
//     clickHandler(e);
// });
// $button[2].addEventListener('click',(e)=>{
//     clickHandler(e);
// });
// $button[3].addEventListener('click',(e)=>{
//     clickHandler(e);
// });