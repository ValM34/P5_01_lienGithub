/* function fetchPokemonBase(){

    fetch(`http://localhost:3000/api/teddies`)
            .then(response => response.json())
            .then((Oursons) => {
                console.log(Oursons); */

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

                    // Création div pour mettre le nom du produit
                    let createDivNomProduit = document.createElement("div");
                    createDivNomProduit.classList = "nomProduitPanier";
                    createDivNomProduit.innerHTML = `<b>Nom: </b>${produitLocalStorage[i].nomProduit}`
                    selectDiv.appendChild(createDivNomProduit);
                    
                    // Création div pour mettre la quantité sélectionnée
                    let createDivQuantity = document.createElement("div");
                    createDivQuantity.classList = "quantityPanier";
                    createDivQuantity.innerHTML = `<b>Quantitée: </b>${produitLocalStorage[i].quantity}`
                    selectDiv.appendChild(createDivQuantity);

                    // Création div pour mettre la couleur sélectionnée
                    let createDivColor = document.createElement("div");
                    createDivColor.classList = "colorPanier";
                    createDivColor.innerHTML = `<b>Couleur: </b>${produitLocalStorage[i].color}`
                    selectDiv.appendChild(createDivColor);

                    // Convertion rapide du prix et de la quantitée en nombre
                    let priceNombre = parseInt(produitLocalStorage[i].price);
                    let quantityNombre = parseInt(produitLocalStorage[i].quantity);

                    // Création div pour mettre le prix (total en fonction de la quantité)
                    let createDivPrice = document.createElement("div");
                    createDivPrice.classList = "pricePanier";
                    createDivPrice.innerHTML = `<b>Prix: </b>${priceNombre/100*quantityNombre}€`
                    selectDiv.appendChild(createDivPrice);

                    // Calcul du prix total
                    prixTotal += priceNombre/100*quantityNombre;
                    
                }
                
                // Intégration du prix total
                let selectDivPrixTotal = document.querySelector("div.prixTotal")
                selectDivPrixTotal.textContent = `Prix total : ${prixTotal}€`;
                
                console.log(prixTotal);


                // Test déclaration de chaque "variable" attendue
                let firstName = document.getElementById("firstName");
                console.log(firstName.value)
                let lastName = document.getElementById("lastName");
                let address = document.getElementById("address");
                let city = document.getElementById("city");
                let email = document.getElementById("email");

                let products = [];
                for(let i = 0; i < produitLocalStorage.length; i++){

                    products.push(produitLocalStorage[i].idProduit);

                }
                console.log(products);
                // Action quand on clique sur "Envoyer"
                let selectButtonSubmit = document.getElementById("submit");
                selectButtonSubmit.addEventListener("click", function(e){
                    e.preventDefault;
                    


                // Test création de l'objet command, qui doit être déclaré dans l'eventListener
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
                

                    // Vérification du formulaire
                    if  (!firstName.value ||
                        !lastName.value ||
                        !address.value ||
                        !city.value ||
                        !email.valid){
                        console.log("ça marche pas :");
                    }else{
                        console.log(command);
                        console.log("ça marche mais pas vraiment");
                        const options = {
                            method: "POST",
                            body: JSON.stringify(command),
                            headers: { "Content-Type": "application/json" },
                        };
    
                        // Envoi données pour recevoir l'order id
                        async function fetchPokemonBas(){
    
                            fetch("http://localhost:3000/api/teddies/order", options)
                                    .then(response => response.json())
                                    .then((teste) => {
                                        console.log(teste);
                        
                                        // Regroupement des données pour les envoyer sur la page suivante
                                        // Je dois regrouper l'order id et le prix total dans un objet pour le mettre dans le local storage. Je pourrai ensuite le récupérer à la page suivante
                                        let infosPageConfirmation = {
                                            orderId: teste.orderId,
                                            prixTotal: prixTotal
                                        }
                                        console.log(infosPageConfirmation);
    
    
                                        // Création de la variable qu'on va utiliser pour rentrer nos données dans le local storage
                                        let commandeLocalStorage = [];
                                        console.log(commandeLocalStorage);
                                        commandeLocalStorage.push(infosPageConfirmation);
                                        console.log(commandeLocalStorage);
                                        localStorage.setItem("command", JSON.stringify(commandeLocalStorage));
                                        console.log(commandeLocalStorage);
                                        // 
    
                                        
    
                                    })
                                }
                            fetchPokemonBas();
                            
                            // test de changer la page si else
                            // window.location.href='Confirmation.html';   --> A supprimer si le formulaire fonctionne correctement sans.
                    }

                    

              
                        
                                    








                })    

                }else{
                    let selectSectionPanier = document.querySelector("section.sectionPanier");
                    let createDivPanierVide = document.createElement("div");
                    createDivPanierVide.classList.add("panierVide");

                    selectSectionPanier.appendChild(createDivPanierVide);
                    let selectPanierVide = document.querySelector("div.panierVide");
                    selectPanierVide.textContent = "Votre panier est vide !"

                    // Je retire la couleur de la div.prixTotal
                    let selectDivPrixTotal = document.getElementById("prixTotal");
                    selectDivPrixTotal.style.backgroundColor = "#eedeec";
                }
                

                
/*
    })
}
fetchPokemonBase(); */