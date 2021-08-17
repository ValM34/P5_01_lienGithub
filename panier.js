/* function fetchPokemonBase(){

    fetch(`http://localhost:3000/api/teddies`)
            .then(response => response.json())
            .then((Oursons) => {
                console.log(Oursons); */

                let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

                console.log(produitLocalStorage);
                
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

                let products = ["5beaabe91c9d440000a57d96"];
                // Test création de l'objet contact
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
                console.log(command);
                // Ca n'a pas l'air d'avoir marché, à retirer surement

                // Action quand on clique sur "Envoyer"
                let selectButtonSubmit = document.getElementById("submit");
                selectButtonSubmit.addEventListener("click", function(e){
                    e.preventDefault;

                    

                    


                    // Vérification du formulaire
                    if  (!firstName.value ||
                        !lastName.value ||
                        !address.value ||
                        !city.value ||
                        !email.value){
                        console.log("ça marche pas :");
                    }

                    const options = {
                        method: "POST",
                        body: JSON.stringify(command),
                        headers: { "Content-Type": "application/json" },
                    };
                    
                    fetch("http://localhost:3000/api/teddies/order", options)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data)
                            localStorage.setItem("orderId", data.orderId);
                      
                    
                    })
                })
                

                       
                        

                    
                

                
/*
    })
}
fetchPokemonBase(); */