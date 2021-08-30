let params = new URL(document.location).searchParams;
let id = params.get("id");
function fetchOursons(){

    fetch(`http://localhost:3000/api/teddies/${id}`)
            .then(response => response.json())
            .then((Oursons) => {
                console.log(Oursons);

                // Création des div nameProduct, imgProduct, descriptionProduct, priceProduct
                let selectContainerDiv = document.querySelector("div.pageProduit");

                // fonction pour intégrer le nom, l'image, la description et le prix du produit
                function createDivOption(newClass, innerHtmlContent){
                    let createDiv = document.createElement("div");
                    selectContainerDiv.appendChild(createDiv);
                    createDiv.classList.add(`${newClass}`);

                    let selectArgument = document.querySelector(`div.${newClass}`);
                    selectArgument.innerHTML = `${innerHtmlContent}`;
                }
                // Création div nameProduct
                createDivOption("nameProduct", `${Oursons.name}`);
                // Création div imgProduct
                createDivOption("imgProduct", `<div class="imageProduct" style="background-image:url(${Oursons.imageUrl})"><img src="${Oursons.imageUrl}" alt="image du produit (ourson)">`);
                // Création div descriptionProduct
                createDivOption("descriptionProduct", `${Oursons.description}`);
                // Création div priceProduct
                createDivOption("priceProduct", `${Oursons.price / 100}€`);
                // Fin création des div nameProduct, imgProduct, descriptionProduct, priceProduct

                // Création du menu pour choisir les couleurs
                let createForm = document.createElement("select");
                let containerDiv = document.querySelector("div.pageProduit");
                containerDiv.appendChild(createForm);
                let selectForm = document.querySelector("select");

                // Boucle pour générer les couleurs disponibles en fonction de l'ourson choisit
                for(o = 0; o < Oursons.colors.length; o++){
                    let createDiv = document.createElement(`option`);
                    selectForm.appendChild(createDiv);
                    let selectDiv = document.querySelector(`select > option:nth-child(${o + 1})`);
                    selectDiv.textContent= `${Oursons.colors[o]}`;
                }

                // Création de la div qui contiendra l'input pour sélectionner la quantité
                let createDivQuantity = document.createElement("div");
                containerDiv.appendChild(createDivQuantity);
                createDivQuantity.classList.add("quantity");

                // Création du bouton "moins"
                let createLessButton = document.createElement("button");
                createLessButton.textContent = "-";
                createDivQuantity.appendChild(createLessButton);
                // Ajout de l'évènement "click" sur le bouton "moins"
                createLessButton.addEventListener("click", function(e){
                    e.stopPropagation();
                    if(InputNumber > 1){
                        createInput.value = `${--InputNumber}`
                    }
                })

                // création de l'input pour rentrer la quantité voulue
                let createInput = document.createElement("input");
                let InputNumber = 1;
                createInput.value = `1`;
                createDivQuantity.appendChild(createInput);
                // Ajout de l'évènement "input" pour prendre en compte la quantité sélectionnée
                createInput.addEventListener("input", function(e){
                    e.stopPropagation();
                    if(e.target.value >= 0){
                        InputNumber = e.target.value;
                    }
                })

                // Création du bouton "plus"
                let createMoreButton = document.createElement("button");
                createMoreButton.textContent = "+";
                createDivQuantity.appendChild(createMoreButton);
                // Ajout de l'évènement "click" sur le bouton "plus"
                createMoreButton.addEventListener("click", function(e){
                    e.stopPropagation();
                    createInput.value = `${++InputNumber}`
                })

                // Création du bouton "Valider" pour ajouter au panier le produit choisit
                let createButtonValider = document.createElement("button");
                containerDiv.appendChild(createButtonValider);
                createButtonValider.classList.add("ButtonValider");
                createButtonValider.textContent = "Ajouter au panier";
                // Evènement pour écouter le choix de la couleur
                couleurSelectionnee = Oursons.colors[0];
                selectForm.addEventListener("change", function(e){
                    e.preventDefault;
                    couleurSelectionnee = e.target.value;
                })
                
                // Evènement pour écouter le clique sur le bouton valider, qui va permettre l'envoi des options sélectionnées dans le local storage
                createButtonValider.addEventListener("click", function(e){
                    e.preventDefault;
                     
                    // Création d'un objet qui contient les options sélectionnées pour les envoyer dans le local storage
                    let optionsProduit = {
                        nomProduit: Oursons.name,
                        idProduit: Oursons._id,
                        price: `${Oursons.price}€`,
                        color: couleurSelectionnee,
                        quantity: InputNumber,
                    };
                    // Déclaration variable ProduitLocalStorage. Son rôle est de retranscrire en javascript la valeur envoyée par la méthode "getItem("produit") en un objet réutilisable.
                    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
                    console.log(produitLocalStorage);

                    // S'il y a déjà des produits enregistrés dans le local storage on va envoyer les nouvelles infos dans la clef "produit"
                    if(produitLocalStorage){
                        produitLocalStorage.push(optionsProduit);
                        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

                        console.log(produitLocalStorage);
                    }
                    // S'il n'y a pas déjà des produits enregistrés dans le local storage on doit créer d'abord un tableau vide
                    else{
                        produitLocalStorage = [];
                        produitLocalStorage.push(optionsProduit);
                        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

                        console.log(produitLocalStorage);
                    }
                })

                

    })
}
fetchOursons();