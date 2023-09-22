const rightCard = document.getElementById("rightCard");

const yourScore = {
  reaction: 80,
  memory: 92,
  verbal: 61,
  visual: 72,
};

function createStatName(stat) {
  const divStatName = document.createElement("div");
  divStatName.classList.add("stat-name");

  const imgStat = document.createElement("img");
  imgStat.src = `./assets/images/icon-${stat}.svg`;

  const text = document.createTextNode(
    stat.charAt(0).toUpperCase() + stat.slice(1)
  );

  divStatName.appendChild(imgStat);
  divStatName.appendChild(text);

  return divStatName;
}

function createScoreContainer(score) {
  const divScoreContainer = document.createElement("div");
  divScoreContainer.classList.add("score-container");

  const spanUserScore = document.createElement("span");
  spanUserScore.classList.add("user-score");
  const scoreText = document.createTextNode(score);
  spanUserScore.appendChild(scoreText);

  const spanMaxScore = document.createElement("span");
  spanMaxScore.classList.add("max-score");
  spanMaxScore.innerText = "/ 100";

  divScoreContainer.appendChild(spanUserScore);
  divScoreContainer.appendChild(spanMaxScore);

  return divScoreContainer;
}

function createStatInfo(stat, score) {
  const liElement = document.createElement("li");
  liElement.classList.add("stats-info");
  liElement.id = stat;

  const divStatName = createStatName(stat);
  const divScoreContainer = createScoreContainer(score);

  liElement.appendChild(divStatName);
  liElement.appendChild(divScoreContainer);

  return liElement;
}

function createButton() {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = "Continue";
  return buttonElement;
}

function createH2() {
  const h2ELemenet = document.createElement("h2");
  h2ELemenet.innerText = "Summary";
  return h2ELemenet;
}

function createRightCard() {
  rightCard.appendChild(createH2());
  const ulElement = document.createElement("ul");

  for (const key in yourScore) {
    const newLi = createStatInfo(key, yourScore[key]);
    ulElement.appendChild(newLi);
  }

  rightCard.appendChild(ulElement);
  rightCard.appendChild(createButton());
}

window.addEventListener("load", createRightCard);