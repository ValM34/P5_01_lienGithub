let infosCommande = JSON.parse(localStorage.getItem("command"));
console.log(infosCommande);

let selectSectionCommande = document.querySelector("section");

let createDivOrderId = document.createElement("div");
selectSectionCommande.appendChild(createDivOrderId);
createDivOrderId.classList.add("orderId");
let selectDivOrderId = document.querySelector("div.orderId");
selectDivOrderId.innerHTML = `Identifiant de commande : <b>${infosCommande[0].orderId}</b>`;

let createDivPrixTotal = document.createElement("div");
selectSectionCommande.appendChild(createDivPrixTotal);
createDivPrixTotal.classList.add("confirmationPrixTotal");
let selectDivPrixTotal = document.querySelector("div.confirmationPrixTotal");
selectDivPrixTotal.innerHTML = `Prix total : <b>${infosCommande[0].prixTotal}€</b>`;