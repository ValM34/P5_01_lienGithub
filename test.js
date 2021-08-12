function fetchPokemonBase(){

        fetch("http://localhost:3000/api/teddies")
                .then(response => response.json())
                .then((allOursons) => {
                        console.log(allOursons);

                        // Création d'une balise <a> pour chaque ourson
                        for (let i = 0; i < allOursons.length; i++){
                                const newElt = document.createElement("a");
                                newElt.title = "Voir le nounours";  
                                // newElt.href = `http://localhost:3000/api/teddies/${allOursons[i]._id}`;
                                newElt.href = `http://127.0.0.1:5500/product.html?id=${allOursons[i]._id}`;
                                let elt = document.querySelector("div.test");
                                elt.appendChild(newElt);

                                let test4 = document.querySelector(`div.test > a:nth-child(${i + 1})`)
                                test4.classList.add(`ours${i}`);
                        // Fin création d'une balise <a> pour chaque ourson
                                
                                // Intégration du contenu (nom, image, description, prix) pour chaque ourson
                                let selectOurs = document.querySelector(`a.ours${i}`);

                                // Création div name
                                let newDivName = document.createElement("div");
                                selectOurs.appendChild(newDivName);
                                let selectChildName = document.querySelector(`div.test > a.ours${i} > div:nth-child(1)`);
                                selectChildName.classList.add(`name`);
                                
                                let nameSelector = document.querySelector(`a.ours${i} > div.name`);
                                let name = allOursons[i].name;
                                nameSelector.innerHTML = `<b>${name}</b>`

                                
                                // Création div img2
                                let newDivImg = document.createElement("div");
                                selectOurs.appendChild(newDivImg);
                                let selectChildImg = document.querySelector(`div.test > a.ours${i} > div:nth-child(2)`);
                                selectChildImg.classList.add(`img2`);
                                
                                let img2Selector = document.querySelector(`a.ours${i} > div.img2`);
                                let img2 = allOursons[i].imageUrl;
                                img2Selector.innerHTML = `<div class="image" style="background-image:url(${img2})"><img src="${img2}" alt="image du produit (ourson)">`

                                // Création div description
                                let newDivDescription = document.createElement("div");
                                selectOurs.appendChild(newDivDescription);
                                let selectChildDescription = document.querySelector(`div.test > a.ours${i} > div:nth-child(3)`);
                                selectChildDescription.classList.add(`description`);
                                
                                let descriptionSelector = document.querySelector(`a.ours${i} > div.description`);
                                let description = allOursons[i].description;
                                descriptionSelector.innerHTML = `<p>${description}</p>`

                                // Création div price
                                let newDivPrice = document.createElement("div");
                                selectOurs.appendChild(newDivPrice);
                                let selectChildPrice = document.querySelector(`div.test > a.ours${i} > div:nth-child(4)`);
                                selectChildPrice.classList.add(`price`);
                                
                                let priceSelector = document.querySelector(`a.ours${i} > div.price`);
                                let price = allOursons[i].price;
                                priceSelector.innerHTML = `${price / 100}€`
                                // Fin intégration du contenu (nom, image, description, prix) pour chaque ourson


}
                



                        })
}
fetchPokemonBase();

