let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

console.log(produitLocalStorage);
if(produitLocalStorage){
    let selectSection = document.querySelector("section.sectionPanier");
    let prixTotal = 0;
    for(let i = 0; i < produitLocalStorage.length; i++){
        let createDiv = document.createElement("div");
        selectSection.appendChild(createDiv);
        let selectDiv = document.querySelector(`section > div:nth-child(${i+1})`);
        selectDiv.classList.add("divProduitPanier");


        function addOptions(option, htmlContent){
            let createDivTest = document.createElement("div");
            selectDiv.appendChild(createDivTest);
            createDivTest.classList = option;
            createDivTest.innerHTML = htmlContent;
        }
        
        // Création div pour mettre le nom du produit
        addOptions("nomProduitPanier", `<b>Nom: </b>${produitLocalStorage[i].nomProduit}`);
        // Création div pour mettre la quantité sélectionnée
        addOptions("quantityPanier", `<b>Quantitée: </b>${produitLocalStorage[i].quantity}`);
        // Création div pour mettre la couleur sélectionnée
        addOptions("colorPanier", `<b>Couleur: </b>${produitLocalStorage[i].color}`);
        // Convertion du prix et de la quantitée en nombre (c'était en string)
        let priceNombre = parseInt(produitLocalStorage[i].price);
        let quantityNombre = parseInt(produitLocalStorage[i].quantity);
        // Création div pour mettre le prix (total en fonction de la quantité)
        addOptions("pricePanier", `<b>Prix: </b>${priceNombre/100*quantityNombre}€`);

        // Calcul du prix total
        prixTotal += priceNombre/100*quantityNombre;
        
    }
    
    // Intégration du prix total
    let selectDivPrixTotal = document.querySelector("div.prixTotal")
    selectDivPrixTotal.textContent = `Prix total : ${prixTotal}€`;
    
    console.log(prixTotal);

    // Déclaration des variables pour chaque valeur attendue par le backend
    let firstName = document.getElementById("firstName");
    console.log(firstName.value)
    let lastName = document.getElementById("lastName");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let email = document.getElementById("email");

    let codePostal = document.getElementById("codePostal");

    // Création du tableau dans lequel on va mettre l'id de chaque produit, qu'on enverra ensuite au backend
    let products = [];
    for(let i = 0; i < produitLocalStorage.length; i++){

        products.push(produitLocalStorage[i].idProduit);

    }
    console.log(products);
    
    // Action quand on clique sur "Envoyer"
    let selectButtonSubmit = document.getElementById("submit");
    selectButtonSubmit.addEventListener("click", function(e){
        e.preventDefault;
        


        // Création de l'objet command, qui doit être déclaré dans l'eventListener
        const command = {
            contact: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
        products: products
        }
        
        // Déclaration des regexp
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regexCodePostal = /[0-9]/;
        let regexAddress = /\d([ ])(\w+[ ]?)+/;


        // Vérification du formulaire pour savoir si on envoie ou non la commande dans le local storage
        
        if  (!firstName.value ||
            !lastName.value ||
            !regexAddress.test(address.value) ||
            !city.value ||
            !regexCodePostal.test(codePostal.value) ||
            !regexEmail.test(email.value)){
            console.log("Il manque des valeurs à renseigner");
            let selectH2Formulaire = document.querySelector("h2.h2Formulaire");
            selectH2Formulaire.innerHTML = "Veuillez renseigner vos données correctement";
            selectH2Formulaire.style.color = "red";

        }else{
            const options = {
                method: "POST",
                body: JSON.stringify(command),
                headers: { "Content-Type": "application/json" },
            };

            // Envoi données pour recevoir l'order id
            function fetchOursons(){

                fetch("http://localhost:3000/api/teddies/order", options)
                        .then(response => response.json())
                        .then((infosCommande) => {
                            console.log(infosCommande);
            
                            // Regroupement des données pour les envoyer sur la page suivante
                            // Je dois regrouper l'order id et le prix total dans un objet pour le mettre dans le local storage. Je pourrai ensuite le récupérer à la page suivante
                            let infosPageConfirmation = {
                                orderId: infosCommande.orderId,
                                prixTotal: prixTotal
                            }
                            console.log(infosPageConfirmation);


                            // Création de la variable qu'on va utiliser pour rentrer nos données dans le local storage
                            let commandeLocalStorage = [];
                            commandeLocalStorage.push(infosPageConfirmation);
                            localStorage.setItem("command", JSON.stringify(commandeLocalStorage));
                            // 
                            
                            
                            // Lien vers la page confirmation
                            document.location.href = "confirmation.html";

                        })
                    }
                fetchOursons();
                
        }

    

    })    

}else{
    let selectSectionPanier = document.querySelector("section.sectionPanier");
    let createDivPanierVide = document.createElement("div");
    createDivPanierVide.classList.add("panierVide");

    selectSectionPanier.appendChild(createDivPanierVide);
    let selectPanierVide = document.querySelector("div.panierVide");
    let removeForm = document.querySelector("form");
    removeForm.remove();
    let removeValider = document.querySelector("div.divBoutonValider");
    removeValider.remove();
    selectPanierVide.textContent = "Votre panier est vide";
    selectPanierVide.style.color = "red";

    // Je retire la couleur de la div.prixTotal
    let selectDivPrixTotal = document.getElementById("prixTotal");
    selectDivPrixTotal.style.backgroundColor = "#eedeec";
}