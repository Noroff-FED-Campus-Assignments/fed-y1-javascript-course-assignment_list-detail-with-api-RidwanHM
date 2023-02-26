 const resultsContainer = document.querySelector(".results");


 const url =
 "https://rickandmortyapi.com/api/character";

async function fetchRickAndMorty() {
 try {
   const response = await fetch(url);
   const json = await response.json();


   resultsContainer.innerHTML = "";

   const RickAndMorty = json.results;

   RickAndMorty.forEach(function (RickAndMorty) {
     resultsContainer.innerHTML += `
     <a href="/details.html?id=${RickAndMorty.id}" class="card">
         <div class="details">
             <h4 class="name">${RickAndMorty.name}</h4>
             <img src=${RickAndMorty.image}> 
             <p>Species:${RickAndMorty.species}</p>
             <p>Gender:${RickAndMorty.gender}</p>
             <p>Status:${RickAndMorty.status}</p>
             

         </div>
     </a>
     `;
   });
 } catch (error) {
   console.log(error);
   resultsContainer.innerHTML = error("error", error);
 }
}

fetchRickAndMorty();