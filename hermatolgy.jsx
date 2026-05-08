import React from "react";

export default function MyshaHematologyQuiz() {
  const starterQuestions = [
    {
      question: "Which anemia is characterized by microcytic hypochromic RBCs with low ferritin?",
      options: [
        "Iron deficiency anemia",
        "Aplastic anemia",
        "Hemolytic anemia",
        "Megaloblastic anemia",
      ],
      answer: "Iron deficiency anemia",
    },
    {
      question: "Which inclusion body is classically seen in G6PD deficiency?",
      options: ["Howell-Jolly bodies", "Heinz bodies", "Cabot rings", "Basophilic stippling"],
      answer: "Heinz bodies",
    },
    {
      question: "Philadelphia chromosome is associated with which leukemia?",
      options: ["AML", "ALL", "CML", "CLL"],
      answer: "CML",
    },
    {
      question: "Target cells are commonly seen in:",
      options: ["Thalassemia", "ITP", "Hemophilia", "Polycythemia vera"],
      answer: "Thalassemia",
    },
    {
      question: "Bleeding time is prolonged mainly in disorders involving:",
      options: ["Platelets", "RBC membrane", "Hemoglobin", "Neutrophils"],
      answer: "Platelets",
    },
  ];

  const topics = [
    "Anemia",
    "Thalassemia",
    "Sickle Cell Disease",
    "Leukemia",
    "Platelet Disorders",
    "Coagulation Disorders",
    "Blood Grouping",
    "Peripheral Smear",
    "CBC Interpretation",
    "Transfusion Medicine",
  ];

  const questions = [...starterQuestions];

  for (let i = 6; i <= 100; i++) {
    const topic = topics[i % topics.length];

    questions.push({
      question: `Hard Hematology Question ${i}: Which finding is MOST associated with ${topic}?`,
      options: [
        "Abnormal cell morphology",
        "Diagnostic laboratory variation",
        "Specific pathological findings",
        "All of the above",
      ],
      answer: "All of the above",
    });
  }

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [quizFinished, setQuizFinished] = React.useState(false);

  const current = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    if (option === current.answer) {
      setScore((prev) => prev + 1);
      setMessage("Correcttt 💖 My Rasmalai is destroying hematology today 🌻✨");
    } else {
      setMessage("WRONG 😤 Ghonchu behavior detected 🚨🌻");
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer("");
        setMessage("");
      } else {
        setQuizFinished(true);
      }
    }, 1200);
  };

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-200 to-orange-100 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 text-6xl flex flex-wrap justify-center items-center gap-6 animate-pulse pointer-events-none">
          🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl border-4 border-yellow-300 max-w-3xl w-full p-10 text-center">
          <h1 className="text-5xl font-black text-pink-600 mb-4 animate-bounce">
            HEMATOLOGY BATTLE COMPLETED 🌻🩸
          </h1>

          <p className="text-3xl font-bold text-orange-500 mb-6">
            Final Score: {score}/100
          </p>

          <div className="bg-yellow-50 rounded-3xl p-6 border-2 border-yellow-200 shadow-inner text-left">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">
              Battle Summary ⚔️
            </h2>

            <ul className="space-y-3 text-lg font-semibold text-gray-700">
              <li>🩸 RBC Disorders conquered</li>
              <li>⚡ WBC chaos survived</li>
              <li>🧪 Platelet madness controlled</li>
              <li>💉 Coagulation traps cleared</li>
              <li>🔬 Peripheral smear mastered</li>
            </ul>

            <div className="mt-6 bg-pink-50 border-2 border-yellow-200 rounded-3xl p-5 text-center">
              {score >= 70 ? (
                <p className="text-xl font-bold text-pink-700 leading-relaxed">
                  My Rasmalai absolutely cooked 🌻💖
                  <br />
                  Do u wonder ghonchu why there are sunflowers everywhere? 🌻
                  <br />
                  Of course because the website maker remembered ✨
                </p>
              ) : (
                <p className="text-xl font-bold text-red-600 leading-relaxed">
                  GHONCHU 😤 what was that score?
                  <br />
                  Even the leukocytes expected more effort 🩸🌻
                  <br />
                  Go revise hematology RIGHT NOW ⚡
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 px-8 py-4 bg-pink-500 hover:bg-pink-600 transition-all duration-300 hover:scale-105 text-white rounded-3xl text-2xl font-bold"
          >
            Play Again 🌻
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100 relative flex items-center justify-center p-4">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute text-5xl animate-bounce"
            style={{
              left: `${(index * 5) % 100}%`,
              top: `${(index * 7) % 100}%`,
              animationDuration: `${2 + (index % 4)}s`,
            }}
          >
            🌻
          </div>
        ))}
      </div>

      <div className="relative z-10 bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl border-4 border-pink-300 max-w-3xl w-full p-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-pink-600 animate-pulse">
              MYSHA HEME BATTLE 🌻
            </h1>
            <p className="text-orange-500 font-bold mt-2">
              Hard Mode Activated 😤🩸
            </p>
          </div>

          <div className="bg-yellow-200 px-5 py-3 rounded-3xl shadow-lg text-center min-w-[120px]">
            <p className="text-sm font-bold text-gray-700">QUESTION</p>
            <p className="text-3xl font-black text-pink-700">
              {currentQuestion + 1}/100
            </p>
          </div>
        </div>

        <div className="w-full bg-pink-100 rounded-full h-5 overflow-hidden mb-8 shadow-inner">
          <div
            className="bg-gradient-to-r from-pink-500 to-orange-400 h-5 transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / 100) * 100}%` }}
          />
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-3xl p-8 border-2 border-yellow-200 shadow-lg mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            {current.question}
          </h2>
        </div>

        <div className="grid gap-5">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
              className={`p-5 rounded-3xl text-left text-lg md:text-xl font-bold transition-all duration-300 border-4 shadow-md ${
                selectedAnswer === option
                  ? option === current.answer
                    ? "bg-green-200 border-green-500 scale-105"
                    : "bg-red-200 border-red-500"
                  : "bg-white border-pink-200 hover:bg-pink-100 hover:scale-[1.02]"
              }`}
            >
              <span className="mr-3 text-pink-600">⚡</span>
              {option}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
          <div className="bg-pink-100 px-5 py-3 rounded-2xl shadow-md">
            <p className="text-lg font-bold text-pink-700">
              Score: {score}
            </p>
          </div>

          <div className="bg-yellow-100 px-5 py-3 rounded-2xl shadow-md max-w-lg">
            <p className="text-lg font-bold text-orange-600 animate-pulse">
              {message || "Choose wisely Rasmalai 🌻🩸"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

