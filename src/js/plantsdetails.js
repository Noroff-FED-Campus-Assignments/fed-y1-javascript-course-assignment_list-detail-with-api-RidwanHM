const detailsContainer = document.querySelector("#detailscontainer");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const url = `https://excellent-things.flywheelsites.com/wp-json/wp/v2/posts/${id}`;


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


function createHtml(blog) {
    detailsContainer.innerHTML = `
                
       
    <h2>${blog.title.rendered}<h2>
        <h4>${blog.content.rendered}<h4>
        <h4>${blog.date}<h4>
    <div>
   <a>
   `;
  }
