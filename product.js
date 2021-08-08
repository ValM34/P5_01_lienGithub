let params = new URL(document.location).searchParams;
let id = params.get("id");

function fetchPokemonBase(){

    fetch(`http://localhost:3000/api/teddies/${id}`)
            .then(response => response.json())
            .then((Oursons) => {
                console.log(Oursons);

                for (let i = 0; i < 4; i++){
                    let createDiv = document.createElement(`div`);
                    let containerDiv = document.querySelector("div.pageProduit");
                    containerDiv.appendChild(createDiv);
                    let selectDiv = document.querySelector(`div.pageProduit > div:nth-child(${i + 1})`);
                    selectDiv.classList.add(`b${i}`);

                    if(i == 0){
                        let name = document.querySelector("div.b0");
                        name.textContent = `${Oursons.name}`;
                    }

                    if(i == 1){
                        let image = document.querySelector("div.b1");
                        image.innerHTML = `<div class="imageProduct" style="background-image:url(${Oursons.imageUrl})"><img src="${Oursons.imageUrl}" alt="image du produit (ourson)">`;
                    }

                    if(i == 2){
                        let description = document.querySelector("div.b2");
                        description.textContent = `${Oursons.description}`;
                    }

                    if(i == 3){
                        let price = document.querySelector("div.b3");
                        price.textContent = `${Oursons.price / 100}€`;
                    }

                }

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