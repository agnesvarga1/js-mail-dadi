//Esercicio 1
//Gioco dei dadi

//1) genera un numero1 random e salva
//2) genera un numero2 random e salva
//3) valuta se  num1 o num2 e maggiore
//basando questo (quale e piu grande) declara un vincitore
//condizione se i numeri sono uguali
function generaRandomNumber(min, max) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
//esercizio 2
//mail

//2)basando quel value controlla se esiste nel array
//itera nel array con un ciclo for
//se esiste risposta
//se non esiste altro risposta
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
const displayResult = document.querySelector("#result-search");
//2)chiedi utente un email

checkEmailBtn.addEventListener("click", function () {
  let userEmail = emailUserHtml.value;
  let mailEsiste = false;
  for (let i = 0; i < emailAddresses.length; i++) {
    if (userEmail == emailAddresses[i]) {
      mailEsiste = true;
    }
  }
  if (mailEsiste === true) {
    console.log("esiste");
  } else {
    console.log("non esiste");
  }
});
