'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel=document.querySelector("#result p")

  const quizSet = [
    {q: '次の中でアルコールに弱い国は？', c: ['日本', 'タイ', 'ドイツ']},
    {q: '体の中でアルコールは何処で処理されるでしょう？', c: ['肝臓', '小腸', '大腸']},
    {q: 'ビール500ml分のアルコールを処理するには一般的にどのくらいの時間がかかるといわれているでしょう？', c: ['4時間', '2時間', '3時間']},
    {q: '「イッキ飲のみ」をすると、体のある部分が働かなくなり命を落とす危険があります。それはどこでしょう？', c: ['脳', '心臓', '肺']},
    {q: '日本酒造りの最高責任者を蔵元では何と呼んでいるでしょうか。', c: ['杜氏(とうじ)', '酒人', '社長']},
    {q: '日本酒造りが始まったのはいつ？', c: ['弥生時代', '平安時代時代', '江戸時代']},
    {q: '日本で本格的なビール醸造が始まったのはいつ？', c: ['明治', '大正', '昭和']},
    {q: 'カクテル「レッド・アイ」って、ビールに何を加えたもの？', c: ['トマトジュース', 'ケチャップ', 'パプリカ']},
    {q: '瓶ビール・缶ビールと、居酒屋などにある生ビールの違いは？', c: ['違いはない', '原材料', '鮮度']},
    {q: '黒ビール、色が黒いのはなぜ？', c: [' 麦芽の色', '使用する水の違い', '着色料を使っている']},
  ];
  let currentNum = 0;
  let isAnswered;
  let score=0;

  

  function shuffle(arr){
    for(let i= arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[j],arr[i]]= [arr[i],arr[j]]
    }
    return arr;
  }

  function checkAnswer(li){
      if(isAnswered===true){
          return;
      }
      isAnswered=true;
  if(li.textContent===quizSet[currentNum].c[0]){
      li.classList.add("correct");
      score++;
            
  }else{
      li.classList.add("wrong");
  }

  btn.classList.remove("disabled");
}

function setQuiz(){
  isAnswered=false;
  question.textContent = quizSet[currentNum].q;

while(choices.firstChild){
    choices.removeChild(choices.firstChild);
}

  const shuffledChoices=shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener("click",()=>{
        checkAnswer(li);
    });
    choices.appendChild(li);
  });

  if(currentNum===quizSet.length-1){
      btn.textContent="Show Score";
  }
}
setQuiz();

btn.addEventListener("click",()=>{
    if(btn.classList.contains("disabled")){
        return;
    }
    btn.classList.add("disabled");

    if(currentNum===quizSet.length-1){
        scoreLabel.textContent=`Score:${score}/${quizSet.length}`;
        result.classList.remove("hidden");
     } else{
            currentNum++;
            setQuiz();

        }
    
});
}