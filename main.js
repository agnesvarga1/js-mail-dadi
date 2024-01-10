//Esercicio 1
//Gioco dei dadi

const gameBoard = document.querySelector(".game-board");
const playerDisplay = document.querySelector("#player-display");
const computerDisplay = document.querySelector("#computer-display");
const playBtn = document.querySelector("#play-game");
const rstBtn = document.querySelector("#reset-game");
const resultDadi = document.querySelector("#result-game");
function generaRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
//1) genera un numero1 random e salva
//2) genera un numero2 random e salva
//da 1 a 6
let randomNumberComputer = generaRandomNumber(1, 6);
let randomNumberPlayer = generaRandomNumber(1, 6);

playBtn.addEventListener("click", function () {
  playBtn.classList.add("d-none");
  rstBtn.classList.remove("d-none");
  gameBoard.classList.remove("d-none");
  playerDisplay.innerHTML = randomNumberPlayer;
  computerDisplay.innerHTML = randomNumberComputer;
  resultDadi.classList.remove("d-none");
  //3) valuta se  num1 o num2 e maggiore
  //basando questo (quale e piu grande) declara un vincitore
  if (randomNumberComputer > randomNumberPlayer) {
    resultDadi.innerHTML = `${randomNumberComputer}  e maggiore di ${randomNumberPlayer} Vince la casa`;
    resultDadi.classList.add("text-danger");
  } else if (randomNumberComputer < randomNumberPlayer) {
    resultDadi.innerHTML = ` ${randomNumberPlayer} e maggiore di  ${randomNumberComputer}  Hai vinto!!`;
    resultDadi.classList.add("text-success");
    //condizione se i numeri sono uguali
  } else {
    resultDadi.innerHTML = ` ${randomNumberPlayer}  e  ${randomNumberComputer} sono uguali Nessuno vince`;
    resultDadi.classList.add("text-primary");
  }
});

rstBtn.addEventListener("click", function () {
  location.reload();
});
// console.log(`Player:${randomNumberPlayer}, Computer:${randomNumberComputer}`);

////////////////////////////////////////////////////////////////////////////////////////
//esercizio 2
//mail

//1)serve un array con gli indirizzi email

const emailAddresses = [
  "john.doe@example.com",
  "jane.smith@example.com",
  "bob.jenkins@example.com",
  "alice.walker@example.com",
  "samuel.jones@example.com",
  "emily.white@example.com",
  "david.miller@example.com",
  "olivia.davis@example.com",
  "michael.brown@example.com",
  "sarah.wilson@example.com",
];
const emailUserHtml = document.querySelector("#email-user");
const checkEmailBtn = document.querySelector("#check-email");
const mailMainContainer = document.querySelector(".esercizio-mail");
//2)chiedi utente un email

checkEmailBtn.addEventListener("click", function () {
  let userEmail = emailUserHtml.value;
  let mailEsiste = false;
  //2)basando quel value controlla se esiste nel array
  //itera nel array con un ciclo for
  for (let i = 0; i < emailAddresses.length; i++) {
    if (userEmail == emailAddresses[i]) {
      mailEsiste = true;
    }
  }

  //se esiste risposta
  if (mailEsiste === true) {
    mailMainContainer.innerHTML += `<p style="color:green">Questo email esite nella lista</p>`;
    //se non esiste altro risposta
  } else {
    mailMainContainer.innerHTML += `<p style="color:red">Questo email non esite nella lista</p>`;
  }
});
