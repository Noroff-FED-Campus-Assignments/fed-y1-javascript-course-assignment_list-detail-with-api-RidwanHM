
const detailsContainer = document.querySelector("#detailscontainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const url = `https://rickandmortyapi.com/api/character/${id}`;


async function fetchRickAndMorty() {
    try{
        const response = await fetch(url);
        const details = await response.json();


        createHtml(details);
    }
    catch (error){
        console.log(error);
        detailsContainer.innerHTML = error("error", error);
    }
}

fetchRickAndMorty();


function createHtml(details) {
    detailsContainer.innerHTML = `
      <h1>${details.name}</h1>
      <img src=${details.image}> 
      <p>Species:${details.species}</p>
      <p>Status:${details.status}</p>
      <p>Gender:${details.gender}</p>`;
  }

 