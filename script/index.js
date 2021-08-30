function fetchOursons(){
        fetch("http://localhost:3000/api/teddies")
                .then(response => response.json())
                .then((allOursons) => {
                        console.log(allOursons);

                        // Création d'une balise <a> pour chaque ourson
                        for (let i = 0; i < allOursons.length; i++){
                                const newElt = document.createElement("a");
                                newElt.title = "Voir le nounours";  
                                newElt.href = `https://valm34.github.io/P5_01_lienGithub/product.html?id=${allOursons[i]._id}`;
                                let elt = document.querySelector("div.test");
                                elt.appendChild(newElt);

                                let test4 = document.querySelector(`div.test > a:nth-child(${i + 1})`)
                                test4.classList.add(`oursNumber${i}`);
                                // Fin création d'une balise <a> pour chaque ourson
                                
                                // Intégration du contenu (nom, image, description, prix) pour chaque ourson
                                let selectOurs = document.querySelector(`a.oursNumber${i}`);

                                // fonction qui permet de créer chaque partie (name, img, description, price)
                                function contenuVignette(newClass, html){
                                        let createDiv = document.createElement("div");
                                        selectOurs.appendChild(createDiv);
                                        createDiv.classList.add(`${newClass}`)

                                        let newClassSelect = document.querySelector(`a.oursNumber${i} > div.${newClass}`);
                                        newClassSelect.innerHTML = `${html}`;
                                }
                                contenuVignette("name", `<b>${allOursons[i].name}</b>`);
                                contenuVignette("img", `<div class="image" style="background-image:url(${allOursons[i].imageUrl})"><img src="${allOursons[i].imageUrl}" alt="image du produit (ourson)">`);
                                contenuVignette("description", `<p>${allOursons[i].description}</p>`);
                                contenuVignette("price", `${allOursons[i].price / 100}€`);
                                
                        }
                })
}
fetchOursons();