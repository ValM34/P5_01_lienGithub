let params = new URL(document.location).searchParams;
let id = params.get("id");

function fetchPokemonBase(){

    fetch(`http://localhost:3000/api/teddies/${id}`)
            .then(response => response.json())
            .then((Oursons) => {
                console.log(Oursons);


                // Création des div nameProduct, imgProduct, descriptionProduct, priceProduct
                let selectContainerDiv = document.querySelector("div.pageProduit");

                // Création div nameProduct
                let createDivNameProduct = document.createElement(`div`);
                selectContainerDiv.appendChild(createDivNameProduct);
                let selectDivNameProduct = document.querySelector(`div.pageProduit > div:nth-child(1)`);
                selectDivNameProduct.classList.add(`nameProduct`);

                let nameProduct = document.querySelector("div.nameProduct");
                nameProduct.textContent = `${Oursons.name}`;

                // Création div imgProduct
                let createDivImgProduct = document.createElement(`div`);
                selectContainerDiv.appendChild(createDivImgProduct);
                let selectDivImgProduct = document.querySelector(`div.pageProduit > div:nth-child(2)`);
                selectDivImgProduct.classList.add(`imgProduct`);

                let imgProduct = document.querySelector("div.imgProduct");
                imgProduct.innerHTML = `<div class="imageProduct" style="background-image:url(${Oursons.imageUrl})"><img src="${Oursons.imageUrl}" alt="image du produit (ourson)">`;

                // Création div descriptionProduct
                let createDivDescriptionProduct = document.createElement(`div`);
                selectContainerDiv.appendChild(createDivDescriptionProduct);
                let selectDivDescriptionProduct = document.querySelector(`div.pageProduit > div:nth-child(3)`);
                selectDivDescriptionProduct.classList.add(`descriptionProduct`);

                let descriptionProduct = document.querySelector("div.descriptionProduct");
                descriptionProduct.textContent = `${Oursons.description}`;

                // Création div priceProduct
                let createDivPriceProduct = document.createElement(`div`);
                selectContainerDiv.appendChild(createDivPriceProduct);
                let selectDivPriceProduct = document.querySelector(`div.pageProduit > div:nth-child(4)`);
                selectDivPriceProduct.classList.add(`priceProduct`);

                let priceProduct = document.querySelector("div.priceProduct");
                priceProduct.textContent = `${Oursons.price / 100}€`;
                // Fin création des div nameProduct, imgProduct, descriptionProduct, priceProduct

                
                let createForm = document.createElement("select");
                let containerDiv = document.querySelector("div.pageProduit");
                containerDiv.appendChild(createForm);
                let selectForm = document.querySelector("select");
                for(o = 0; o < Oursons.colors.length; o++){
                    let createDiv = document.createElement(`option`);
                    selectForm.appendChild(createDiv);
                    let selectDiv = document.querySelector(`select > option:nth-child(${o + 1})`);
                    selectDiv.classList.add(`c${o}`);
                    selectDiv.textContent= `${Oursons.colors[o]}`;
                }

                let createDivQuantity = document.createElement("div");
                containerDiv.appendChild(createDivQuantity);
                let selectDivQuantity = document.querySelector("div.pageProduit > div:nth-child(6)")
                selectDivQuantity.classList.add("quantity")
                let createButton = document.createElement("button");
                let createButton2 = document.createElement("button");
                let createInput = document.createElement("input");
                let InputNumber = 1;
                createInput.value = `1`;
                selectDivQuantity.appendChild(createButton);
                selectDivQuantity.appendChild(createInput);
                selectDivQuantity.appendChild(createButton2);
                let selectButtonQuantity1 = document.querySelector("div.quantity > button:nth-child(1)");
                let selectInputQuantity = document.querySelector("div.quantity > input");
                let selectButtonQuantity2 = document.querySelector("div.quantity > button:nth-child(3)");
                selectButtonQuantity1.textContent = "-";
                selectButtonQuantity2.textContent = "+";
                selectButtonQuantity1.addEventListener("click", function(e){
                    e.stopPropagation();
                    if(InputNumber > 1){
                        selectInputQuantity.value = `${--InputNumber}`
                    }
                })
                selectButtonQuantity2.addEventListener("click", function(e){
                    e.stopPropagation();
                    selectInputQuantity.value = `${++InputNumber}`
                })
                selectInputQuantity.addEventListener("input", function(e){
                    e.stopPropagation();
                    if(e.target.value >= 0){
                        InputNumber = e.target.value;
                    } else{
                        InputNumber = 0;
                    }
                })
                let createButtonValider = document.createElement("button");
                containerDiv.appendChild(createButtonValider);
                let selectButtonValider = document.querySelector("div.pageProduit > button:nth-child(7)");
                selectButtonValider.classList.add("ButtonValider");
                selectButtonValider.textContent = "Ajouter au panier"; 
    })
}
fetchPokemonBase();