const quizData = [
    {
      question: "JavaScriptの作者は誰ですか？",
      choices: ["Brendan Eich", "Linus Torvalds", "Bill Gates", "Larry Page"],
      correctAnswer: 0
    },
    {
      question: "JavaScriptはどのプログラミング言語と関係がありますか？",
      choices: ["Java", "Python", "C++", "LiveScript"],
      correctAnswer: 3
    },
    {
      question: "JavaScriptはどのような用途に使用されますか？",
      choices: ["Web開発", "データベース管理", "人工知能", "ネットワークセキュリティ"],
      correctAnswer: 0
    },
    {
        question: "サトシが初めてゲットしたポケモンは？",
        choices: ["キャタピー", "ピカチュウ", "フシギダネ", "ポッポ"],
        correctAnswer: 0
      }
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");

    // 問題の表示
    questionElement.textContent = quizData[currentQuestion].question;

    // 選択肢の表示
    choicesElement.innerHTML = "";
    for (let i = 0; i < quizData[currentQuestion].choices.length; i++) {
      const choice = document.createElement("input");
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
      choicesElement.appendChild(choice);

      const label = document.createElement("label");
      label.textContent = quizData[currentQuestion].choices[i];
      choicesElement.appendChild(label);

      choicesElement.appendChild(document.createElement("br"));
    }

    // スコアの表示
    scoreElement.textContent = "スコア: " + score;
  }

  //ボタンが押された時の処理
  function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="answer"]:checked');

    if (selectedChoice) {//rajioButtonのどこかにチェックが入っていればここに入る次の処理に進む
      const choiceIndex = parseInt(selectedChoice.value);
      checkChoice(choiceIndex);
    }
  }

  function checkChoice(choiceIndex) {
    if (choiceIndex === quizData[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const scoreElement = document.getElementById("score");

    // 結果の表示
    document.getElementById('btn1').style.visibility = 'hidden'
    questionElement.textContent = "クイズ終了！";
    choicesElement.innerHTML = "";
    scoreElement.textContent = "最終スコア: " + score;
  }

  // 最初の問題を読み込む
  loadQuestion();