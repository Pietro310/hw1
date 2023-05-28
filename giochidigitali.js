const api_endpoint = 'https://www.cheapshark.com/api/1.0/games?title=';
const collegamento = "https://www.cheapshark.com/redirect?dealID=";
const risultati_giochi = 10;

function onResponse(response) {
  return response.json();
}

function visualizza_giochi(json) {
  console.log(json);
  const offerte = document.querySelector('#offerte');
  offerte.innerHTML = "";
  if (json.length === 0) {
    const noElement = document.createElement('h1');
    noElement.textContent = "Non ho trovato nessun gioco";
    offerte.appendChild(noElement);
  } else {
    for (let result of json) {
      const Container = document.createElement('div')
      const img = document.createElement('img');
      const nomeGioco = document.createElement('a');
      const prezzo = document.createElement('p');
      prezzo.textContent = "$" + result.cheapest;
      nomeGioco.textContent = result.external;
      nomeGioco.href = collegamento + result.cheapestDealID;
      nomeGioco.target = "_blank";
      img.src = result.thumb;
      Container.appendChild(img);
      Container.appendChild(nomeGioco);
      Container.appendChild(prezzo);
      offerte.appendChild(Container);
    }
  }
}

function ricerca_gioco(event) {
  event.preventDefault();
  const testo = document.querySelector('#contenuto').value;
  const testoCodificato = encodeURIComponent(testo);
  const richiesta = api_endpoint + testoCodificato + '&limit=' + risultati_giochi;
  fetch(richiesta).then(onResponse).then(visualizza_giochi);
}

// Aggiungi l'evento di submit al form di ricerca
const formRicerca = document.querySelector('#ricerca');
formRicerca.addEventListener('submit', ricerca_gioco);
