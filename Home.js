fetch("Home2.php")
.then(onResponse).then(onJson);

function onResponse(response) { 
    console.log(response); 
    return response.json(); 
} 
 
function onJson (json) {
    console.log(json);
    const elenco_shop = document.querySelector('#in_tendenza');
    elenco_shop.innerHTML = "";
    
        
        for (let result of json) { 
            const container = document.createElement('div'); 
            const containerTesto = document.createElement('div'); 
            const img = document.createElement('img'); 
            const titolo = document.createElement('p'); 
            const nome = document.createElement('h1'); 
            const prezzo = document.createElement('h1');

            nome.textContent = result.title; 
            img.src = result.image; 
            titolo.textContent=result.name;
            prezzo.textContent=result.prezzo;

            container.appendChild(img); 
            containerTesto.appendChild(nome); 
            containerTesto.appendChild(titolo); 
            container.appendChild(containerTesto); 
            containerTesto.appendChild(prezzo);

            const preferiti=document.createElement("button");
            preferiti.classList.add("preferiti");
    
            if(result.preferiti==true){
                preferiti.textContent="Rimuovi dai preferiti";
                preferiti .addEventListener('click',rimuoviPreferiti);
    
            }else{
                preferiti.textContent="Aggiungi ai preferiti";
                preferiti .addEventListener('click',aggiungiPreferiti);
            }
    
            container.appendChild(preferiti);
            
 
            elenco_shop.appendChild(container); 

        }
}