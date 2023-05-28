document.getElementById("btn-ricerca").addEventListener("click", function() {
    var searchTerm = document.getElementById("barra-ricerca").value;
    searchItem(searchTerm);
});

function searchItem(searchTerm) {
    if (searchTerm.trim() === "") {
        alert("Cerca un prodotto");
        return;
    }

    fetch("INFO.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var results = data.results.filter(function(item) {
                return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.prezzo.toLowerCase().includes(searchTerm.toLowerCase());
            });

            var risultatiDiv = document.getElementById("risultati");
            risultatiDiv.innerHTML = "";

            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    var item = results[i];

                    var itemDiv = document.createElement("div");
                    itemDiv.classList.add("risultato");

                    var titleElement = document.createElement("h1");
                    titleElement.textContent = item.title;

                    var imageElement = document.createElement("img");
                    imageElement.src = item.image;
                    imageElement.alt = item.title;

                    var nameElement = document.createElement("p");
                    nameElement.textContent = item.name;

                    var prezzoElement = document.createElement("h1");
                    prezzoElement.textContent = item.prezzo;

                    itemDiv.appendChild(titleElement);
                    itemDiv.appendChild(imageElement);
                    itemDiv.appendChild(nameElement);
                    itemDiv.appendChild(prezzoElement);

                    risultatiDiv.appendChild(itemDiv);
                }
            } else {
                var noResultsElement = document.createElement("p");
                noResultsElement.textContent = "Nessun risultato trovato.";
                risultatiDiv.appendChild(noResultsElement);
            }
        })
        .catch(function(error) {
            console.log("Si è verificato un errore nella fetch del INFO.json:", error);
        });
}
