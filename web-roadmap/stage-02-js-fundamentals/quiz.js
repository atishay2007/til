const QUESTIONS = [
  {
    prompt: "Which keyword declares a block-scoped constant?",
    options: ["var", "let", "const"],
    answerIndex: 2,
  },
  {
    prompt: "What does Math.random() return?",
    options: ["An integer 0..10", "A float in [0, 1)", "A boolean"],
    answerIndex: 1,
  },
  {
    prompt: "Which loop is best when the iteration count is known?",
    options: ["for", "while", "switch"],
    answerIndex: 0,
  },
];

function scoreQuiz(responses, questions = QUESTIONS) {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (responses[i] === questions[i].answerIndex) {
      score++;
    }
  }
  return { score, total: questions.length };
}

if (typeof module !== "undefined") {
  module.exports = { QUESTIONS, scoreQuiz };
}
