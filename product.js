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
                // selectForm.appendChild(createDiv);
                for(o = 0; o < Oursons.colors.length; o++){
                    let createDiv = document.createElement(`option`);
                    selectForm.appendChild(createDiv);
                    let selectDiv = document.querySelector(`select > option:nth-child(${o + 1})`);
                    selectDiv.classList.add(`c${o}`);
                    selectDiv.textContent= `${Oursons.colors[o]}`;
                }
                console.log(Oursons.colors);

    })
}
fetchPokemonBase();