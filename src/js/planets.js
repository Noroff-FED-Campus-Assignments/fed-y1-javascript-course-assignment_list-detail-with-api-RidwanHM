const resultsContainer = document.querySelector(".eventcontainer");

const url = "https://excellent-things.flywheelsites.com/wp-json/wp/v2/posts/"

async function fetchBlogs () {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        resultsContainer.innerHTML = "";
        

        const blogs = json;
        

        blogs.forEach(function (blog) {
            resultsContainer.innerHTML += `
                
                <a href="/index.html"><p>Go Back</p></a>
                <a href="/details.html?id=${blog.id}">    
                <h2>${blog.title.rendered}<h2>
                    <h4>${blog.content.rendered}<h4>
                    <h4>${blog.date}<h4>
                <div>
               <a>
               `;                

        });
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = `Error: ${error}`;
    }
}

fetchBlogs();