document.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Screens
=======
  // Elements
>>>>>>> 6c8f0b377e8598fcc5bd1711a8da485580d9f178
  const screens = {
    mainMenu: document.getElementById("main-menu"),
    preLevel: document.getElementById("pre-level-screen"),
    level1: document.getElementById("level-1"),
<<<<<<< HEAD
    game: document.getElementById("game-screen")
  };

  // Buttons
  const levelBtns = document.querySelectorAll(".level-btn");
  const headerHome = document.getElementById("headerHome");
  const homeIconLevel1 = document.getElementById("homeIconLevel1");
  const homeIconGame = document.getElementById("homeIconGame");
  const backMain = document.getElementById("back-main");

  const startLevelBtn = document.getElementById("start-level-btn");

  // Level 1
=======
    game: document.getElementById("game-screen"),
  };

  const levelBtns = document.querySelectorAll(".level-btn");
  const startLevelBtn = document.getElementById("start-level-btn");
  const backMain = document.getElementById("back-main");
  const homeBtn = document.getElementById("homeBtn");
  const homeIcons = document.querySelectorAll(".home-icon");

>>>>>>> 6c8f0b377e8598fcc5bd1711a8da485580d9f178
  const uppercaseDisplay = document.getElementById("uppercase-display");
  const lowercaseDisplay = document.getElementById("lowercase-display");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

<<<<<<< HEAD
  // Game
  const gameTitle = document.getElementById("game-title");
  const questionBox1 = document.getElementById("question-box-1");
  const questionBox2 = document.getElementById("question-box-2");
  const wrapper1 = document.getElementById("wrapper-box-1");
  const wrapper2 = document.getElementById("wrapper-box-2");

  const optionsContainer = document.getElementById("options-container");
  const feedbackMsg = document.getElementById("feedback-msg");
  const starContainer = document.getElementById("star-container");

  const levelComplete = document.getElementById("level-complete");
  const levelCompleteText = document.getElementById("level-complete-text");
  const startNextBtn = document.getElementById("start-next-btn");
  const backToMenuBtn = document.getElementById("back-to-menu-btn");

  // Audio
  const successSound = document.getElementById("success-sound");
  const failSound = document.getElementById("fail-sound");

  let currentLevel = 0;
  let currentAlphabetIndex = 0;
  let correctAnswer = "";
  let score = 0;
  const TOTAL_QUESTIONS = 8;

  function showScreen(screen) {
    Object.values(screens).forEach(s => s.classList.add("d-none"));
    screen.classList.remove("d-none");
    levelComplete.classList.add("d-none");
  }

  // Home buttons
  [headerHome, homeIconLevel1, homeIconGame].forEach(btn => {
    if(btn){
      btn.onclick = () => showScreen(screens.mainMenu);
    }
  });

  backMain.onclick = () => showScreen(screens.mainMenu);

  levelBtns.forEach(btn => {
    btn.onclick = () => {
      currentLevel = parseInt(btn.dataset.level);

=======
  const questionBox1 = document.getElementById("question-box-1");
  const questionBox2 = document.getElementById("question-box-2");
  const wrapperBox1 = document.getElementById("wrapper-box-1");
  const wrapperBox2 = document.getElementById("wrapper-box-2");
  const optionsContainer = document.getElementById("options-container");
  const gameTitle = document.getElementById("game-title");
  const starContainer = document.getElementById("star-container");

  const successSound = document.getElementById("success-sound");
  const failSound = document.getElementById("fail-sound");
  const tutorialBtn = document.getElementById("tutorialBtn");
  const tutorialModal = new bootstrap.Modal(
    document.getElementById("tutorialModal")
  );

  // State
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let currentAlphabetIndex = 0;
  let currentLevel = 0;
  let correctAnswer = "";
  let score = 0;
  const TOTAL_QUESTIONS = 10;

  const preLevelTitles = {
    2: "Match the Uppercase Letters",
    3: "Match the Lowercase Letters",
    4: "Match the Missing Letters",
  };

  // Helpers
  const showScreen = (screenElement) => {
    document
      .querySelectorAll(".screen")
      .forEach((s) => s.classList.add("d-none"));
    screenElement.classList.remove("d-none");
  };

  // Main menu level clicks
  levelBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      currentLevel = parseInt(btn.dataset.level);
>>>>>>> 6c8f0b377e8598fcc5bd1711a8da485580d9f178
      if (currentLevel === 1) {
        startLevel1();
      } else {
        document.getElementById("pre-level-title").textContent =
<<<<<<< HEAD
          currentLevel === 2 ? "Match the Uppercase Letters" :
          currentLevel === 3 ? "Match the Lowercase Letters" :
                               "Match the Missing Letters";

        showScreen(screens.preLevel);
      }
    };
  });

  startLevelBtn.onclick = () => startGame(currentLevel);

  function startLevel1() {
    currentAlphabetIndex = 0;
    updateLevel1Display();
    showScreen(screens.level1);
  }

  function updateLevel1Display() {
    uppercaseDisplay.textContent = alphabet[currentAlphabetIndex];
    lowercaseDisplay.textContent = alphabet[currentAlphabetIndex].toLowerCase();
  }

  nextBtn.onclick = () => {
    currentAlphabetIndex = (currentAlphabetIndex + 1) % alphabet.length;
    updateLevel1Display();
  };

  prevBtn.onclick = () => {
    currentAlphabetIndex =
      (currentAlphabetIndex - 1 + alphabet.length) % alphabet.length;
    updateLevel1Display();
  };

  // GAME LOGIC

  function startGame(level) {
    currentLevel = level;
    score = 0;
    updateStars();
    generateQuestion(level);
    showScreen(screens.game);
  }

  function updateStars() {
    starContainer.innerHTML = "";
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const star = document.createElement("span");
      star.textContent = i < score ? "★" : "☆";
      starContainer.appendChild(star);
    }
  }

  function generateQuestion(level) {
    if (score >= TOTAL_QUESTIONS) {
      showLevelComplete();
      return;
    }

    questionBox1.textContent = "";
    questionBox2.textContent = "";
    questionBox1.className = "letter-box large-box empty";
    questionBox2.className = "letter-box large-box empty";
    wrapper1.style.display = "flex";
    wrapper2.style.display = "flex";
    feedbackMsg.classList.add("visually-hidden");

    const target = alphabet[Math.floor(Math.random() * alphabet.length)];
    let options = [];

    if (level === 2) {
      wrapper2.style.display = "none";
      gameTitle.textContent = "Match the Uppercase Letter";

      questionBox1.textContent = target;
      questionBox1.className = "letter-box large-box uppercase-color";
      correctAnswer = target;
      options = genOptions(target, false);

    } else if (level === 3) {
      wrapper2.style.display = "none";
      gameTitle.textContent = "Match the Lowercase Letter";

      questionBox1.textContent = target.toLowerCase();
      questionBox1.className = "letter-box large-box lowercase-color";
      correctAnswer = target.toLowerCase();
      options = genOptions(correctAnswer, true);

    } else {
      gameTitle.textContent = "Match the Missing Letter";

      if (Math.random() > 0.5) {
        questionBox1.textContent = target;
        questionBox1.className = "letter-box large-box uppercase-color";
        correctAnswer = target.toLowerCase();
        options = genOptions(correctAnswer, true);
      } else {
        questionBox2.textContent = target.toLowerCase();
        questionBox2.className = "letter-box large-box lowercase-color";
        correctAnswer = target.toUpperCase();
        options = genOptions(correctAnswer, false);
      }
    }

    shuffle(options);
    loadOptions(options);
  }

  function genOptions(correct, lower) {
    const set = new Set([correct]);
    while (set.size < 4) {
      let random = alphabet[Math.floor(Math.random() * alphabet.length)];
      random = lower ? random.toLowerCase() : random.toUpperCase();
      set.add(random);
    }
    return [...set];
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function loadOptions(options) {
    optionsContainer.innerHTML = "";

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-letter btn";
      btn.textContent = opt;

      btn.onclick = () => checkAnswer(opt, btn);

      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selected, btn) {
    if (selected === correctAnswer) {
      successSound.currentTime = 0;
      successSound.play();

      feedbackMsg.textContent = "Correct!";
      feedbackMsg.style.color = "green";
      feedbackMsg.classList.remove("visually-hidden");

=======
          preLevelTitles[currentLevel];
        showScreen(document.getElementById("pre-level-screen"));
      }
    });
  });

  // Start from pre-level
  startLevelBtn.addEventListener("click", () => {
    startGame(currentLevel);
  });
  backMain.addEventListener("click", () =>
    showScreen(document.getElementById("main-menu"))
  );
  homeBtn.addEventListener("click", () =>
    showScreen(document.getElementById("main-menu"))
  );
  homeIcons.forEach((icon) =>
    icon.addEventListener("click", () =>
      showScreen(document.getElementById("main-menu"))
    )
  );

  // Level 1
  const startLevel1 = () => {
    currentAlphabetIndex = 0;
    updateLevel1Display();
    showScreen(document.getElementById("level-1"));
  };

  const updateLevel1Display = () => {
    uppercaseDisplay.textContent = alphabet[currentAlphabetIndex];
    lowercaseDisplay.textContent = alphabet[currentAlphabetIndex].toLowerCase();
  };

  nextBtn.addEventListener("click", () => {
    currentAlphabetIndex = (currentAlphabetIndex + 1) % alphabet.length;
    updateLevel1Display();
  });

  prevBtn.addEventListener("click", () => {
    currentAlphabetIndex =
      (currentAlphabetIndex - 1 + alphabet.length) % alphabet.length;
    updateLevel1Display();
  });

  // Game logic
  const startGame = (level) => {
    score = 0;
    updateStars();
    generateQuestion(level);
    showScreen(document.getElementById("game-screen"));
  };

  const updateStars = () => {
    starContainer.innerHTML = "";
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const star = document.createElement("span");
      star.innerHTML = i < score ? "★" : '<span class="empty-star">☆</span>';
      starContainer.appendChild(star);
    }
  };

  const getRandomLetter = (exclude = []) => {
    let letter;
    do {
      letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    } while (exclude.includes(letter));
    return letter;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateQuestion = (level) => {
    if (score >= TOTAL_QUESTIONS) {
      setTimeout(() => {
        alert("Congratulations! You completed the level.");
        showScreen(document.getElementById("main-menu"));
      }, 500);
      return;
    }

    const targetLetter = getRandomLetter();
    let options = [];
    questionBox1.textContent = "";
    questionBox2.textContent = "";
    questionBox1.classList.add("empty");
    questionBox2.classList.add("empty");
    wrapperBox1.style.display = "flex";
    wrapperBox2.style.display = "flex";

    if (level === 2) {
      gameTitle.textContent = "Match the Uppercase Letter";
      wrapperBox2.style.display = "none";
      questionBox1.textContent = targetLetter;
      questionBox1.className = "letter-box large-box uppercase-color";
      correctAnswer = targetLetter;
      options = [
        targetLetter,
        getRandomLetter([targetLetter]),
        getRandomLetter([targetLetter, options[1]]),
        getRandomLetter([targetLetter, options[1], options[2]]),
      ];
    } else if (level === 3) {
      gameTitle.textContent = "Match the Lowercase Letter";
      wrapperBox2.style.display = "none";
      questionBox1.textContent = targetLetter.toLowerCase();
      questionBox1.className = "letter-box large-box lowercase-color";
      correctAnswer = targetLetter.toLowerCase();
      options = [
        targetLetter.toLowerCase(),
        getRandomLetter([targetLetter]).toLowerCase(),
        getRandomLetter([targetLetter, options[1]]).toLowerCase(),
        getRandomLetter([targetLetter, options[1], options[2]]).toLowerCase(),
      ];
    } else if (level === 4) {
      gameTitle.textContent = "Match the Missing Letter";
      if (Math.random() > 0.5) {
        questionBox1.textContent = targetLetter;
        questionBox1.className = "letter-box large-box uppercase-color";
        correctAnswer = targetLetter.toLowerCase();
        options = [
          correctAnswer,
          getRandomLetter([targetLetter]).toLowerCase(),
          getRandomLetter([targetLetter, options[1]]).toLowerCase(),
          getRandomLetter([targetLetter, options[1], options[2]]).toLowerCase(),
        ];
      } else {
        questionBox2.textContent = targetLetter.toLowerCase();
        questionBox2.className = "letter-box large-box lowercase-color";
        correctAnswer = targetLetter.toUpperCase();
        options = [
          correctAnswer,
          getRandomLetter([targetLetter]).toUpperCase(),
          getRandomLetter([targetLetter, options[1]]).toUpperCase(),
          getRandomLetter([targetLetter, options[1], options[2]]).toUpperCase(),
        ];
      }
    }

    options = shuffleArray(options);
    optionsContainer.innerHTML = "";
    options.forEach((opt) => {
      const optionEl = document.createElement("div");
      optionEl.textContent = opt;
      optionEl.classList.add(
        "option-letter",
        "btn",
        "btn-outline-success",
        "m-1"
      );
      optionEl.addEventListener("click", () => checkAnswer(opt, level));
      optionsContainer.appendChild(optionEl);
    });
  };

  const checkAnswer = (selected, level) => {
    if (selected === correctAnswer) {
      try {
        successSound.play();
      } catch (e) {}
>>>>>>> 6c8f0b377e8598fcc5bd1711a8da485580d9f178
      score++;
      updateStars();

      if (questionBox1.classList.contains("empty")) {
        questionBox1.textContent = correctAnswer;
        questionBox1.className =
<<<<<<< HEAD
          "letter-box large-box " + (isUpper(correctAnswer) ? "uppercase-color" : "lowercase-color");
      } else {
        questionBox2.textContent = correctAnswer;
        questionBox2.className =
          "letter-box large-box " + (isUpper(correctAnswer) ? "uppercase-color" : "lowercase-color");
      }

      setTimeout(() => generateQuestion(currentLevel), 800);

    } else {
      failSound.currentTime = 0;
      failSound.play();

      feedbackMsg.textContent = "Try Again!";
      feedbackMsg.style.color = "red";
      feedbackMsg.classList.remove("visually-hidden");

      btn.classList.add("border-danger");
      setTimeout(() => btn.classList.remove("border-danger"), 400);
    }
  }

  function isUpper(ch) {
    return ch === ch.toUpperCase();
  }

  function showLevelComplete() {
    levelComplete.classList.remove("d-none");
    levelCompleteText.textContent = `Level ${currentLevel} Completed!`;

    startNextBtn.textContent =
      currentLevel >= 4 ? "Back to Menu" : `Start Level ${currentLevel + 1}`;
  }

  startNextBtn.onclick = () => {
    if (currentLevel >= 4) {
      showScreen(screens.mainMenu);
    } else {
      startGame(++currentLevel);
    }
  };

  backToMenuBtn.onclick = () => showScreen(screens.mainMenu);

  showScreen(screens.mainMenu);
=======
          "letter-box large-box " +
          (correctAnswer === correctAnswer.toUpperCase()
            ? "uppercase-color"
            : "lowercase-color");
      } else {
        questionBox2.textContent = correctAnswer;
        questionBox2.className =
          "letter-box large-box " +
          (correctAnswer === correctAnswer.toLowerCase()
            ? "lowercase-color"
            : "uppercase-color");
      }

      setTimeout(() => generateQuestion(level), 1200);
    } else {
      try {
        failSound.play();
      } catch (e) {}
    }
  };

  // Tutorial modal
  tutorialBtn.addEventListener("click", () => {
    const modalEl = document.getElementById("tutorialModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  });

  // Init
  showScreen(document.getElementById("main-menu"));
>>>>>>> 6c8f0b377e8598fcc5bd1711a8da485580d9f178
});
