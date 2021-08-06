function fetchPokemonBase(){

        fetch("http://localhost:3000/api/teddies")
                .then(response => response.json())
                .then((allOursons) => {
                        console.log(allOursons);

                        for (let i = 0; i < allOursons.length; i++){
                                const newElt = document.createElement("div");
                                let elt = document.querySelector("div.test");
                                elt.appendChild(newElt);

                                let test4 = document.querySelector(`div.test > div:nth-child(${i + 1})`)
                                test4.classList.add(`ours${i}`);

                                for (let o = 0; o < 4; o++){
                                        let newElt2 = document.createElement(`div`);

                                        let selectOurs = document.querySelector(`div.ours${i}`);
                                        selectOurs.appendChild(newElt2);
                                        let selectChildDiv = document.querySelector(`div.test > div.ours${i} > div:nth-child(${o + 1})`);
                                        selectChildDiv.classList.add(`a${o}`);


                                        if(o == 0){
                                                let name2Selector = document.querySelector(`div.ours${i} > div.a0`);
                                                let name2 = allOursons[i].name;
                                                name2Selector.innerHTML = `<b>${name2}</b>`
                                        }
                                        
                                        if(o == 1){
                                                let img2Selector = document.querySelector(`div.ours${i} > div.a1`);
                                                let img2 = allOursons[i].imageUrl;
                                                img2Selector.innerHTML = `<div class="image" style="background-image:url(${img2})"><img src="${img2}" alt="image du produit (ourson)">`
                                        }

                                        if(o == 2){
                                                let description2Selector = document.querySelector(`div.ours${i} > div.a2`);
                                                let description2 = allOursons[i].description;
                                                description2Selector.innerHTML = `<p>${description2}</p>`
                                        }

                                        if(o == 3){
                                                let price2Selector = document.querySelector(`div.ours${i} > div.a3`);
                                                let price2 = allOursons[i].price;
                                                price2Selector.textContent = `${price2}€`
                                        }

                                        

                                }

}
                



                        })
}
fetchPokemonBase();

