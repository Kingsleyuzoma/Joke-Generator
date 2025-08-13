
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function generateJoke() {
    jokeEl.textContent = "Loading joke...";
    jokeBtn.disabled = true;

    try {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single", );
        const data = await res.json();

        if (data && data.joke) {
            jokeEl.textContent = data.joke;
        } else {
            jokeEl.textContent = "No joke found! try again later.";
        }
        
        
    } catch (error) {
        jokeEl.textContent = "Oops! couldn't fetch a joke";
    }

    jokeBtn.disabled = false;
}

jokeBtn.addEventListener("click" , generateJoke);

generateJoke();
// Initial joke generation on page load