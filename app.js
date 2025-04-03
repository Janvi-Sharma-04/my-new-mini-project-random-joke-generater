const jokesetup = document.querySelector("#joke-setup");
const randomjoke = document.querySelector("#random-joke");
const jokebtn = document.querySelector("#joke-btn");


 async function fetchjokes() {
    try {
        const responce =await fetch("https://official-joke-api.appspot.com/random_joke");
        console.log(responce);
        const data =await  responce.json();
        console.log(data);
        jokesetup.textContent = data.setup;
        randomjoke.textContent = data.punchline;
        
     } catch (error) {
        console.error("Error fetching jokes:", error);
        jokesetup.textContent = "Error fetching jokes.";
        randomjoke.textContent = "Please try again later.";
    }
}

jokebtn.addEventListener("click", fetchjokes);
fetchjokes();
