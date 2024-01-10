//Esercicio 1
//Gioco dei dadi

//1) genera un numero1 random e salva
//2) genera un numero2 random e salva
function generaRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

let randomNumberComputer = generaRandomNumber(1, 6);
let randomNumberPlayer = generaRandomNumber(1, 6);
console.log(`Player:${randomNumberPlayer}, Computer:${randomNumberComputer}`);
//3) valuta se  num1 o num2 e maggiore
//basando questo (quale e piu grande) declara un vincitore

if (randomNumberComputer > randomNumberPlayer) {
  console.log("computer vince");
} else if (randomNumberComputer < randomNumberPlayer) {
  console.log("hai vinto");
  //condizione se i numeri sono uguali
} else {
  console.log("Parita");
}

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
