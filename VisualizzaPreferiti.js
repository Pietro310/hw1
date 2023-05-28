

fetch("RitornaPreferiti.php").then(onResponse).then(onJson);

function onResponse(response){
    return response.json();
}

function onJson(json){
    console.log(json);
    const giochi_preferiti=document.querySelector('#oggetti_preferiti');
    giochi_preferiti.innerHTML="";
    

    for(let result of json){
        const Container=document.createElement('div');
        const titolo=document.createElement('h1');
        const img=document.createElement('img');
        const bottone=document.createElement("button");
        
        bottone.textContent="Rimuovi dai preferiti";
        bottone.classList.add("preferiti");
        bottone.addEventListener("click",rimuoviPreferiti);

        img.src=result.copertina;
        titolo.textContent=result.titolo;
        Container.appendChild(img);
        Container.appendChild(titolo);
        Container.appendChild(bottone);
        giochi_preferiti.appendChild(Container);
    }
    
}

function rimuoviPreferiti(event){

    const titolo=event.currentTarget.parentNode.querySelector("h1");
    fetch("rimuoviPreferiti.php?title="+encodeURIComponent(titolo.textContent)).then(onResponse).then(json); 

}

function onResponse(response){
    return response.json();
}

function json(json){
    fetch("RitornaPreferiti.php").then(onResponse).then(onJson);
    
}