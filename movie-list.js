const addMovieForm = document.querySelector('form');
const inputField = document.querySelector('input');
const list = document.querySelector('ul');
const message = document.querySelector('#message');

function addToList (event) {
    event.preventDefault()
    let newMovie = document.createElement('li');
    newMovie.textContent = inputField.value;
    list.appendChild(newMovie);
    inputField.value = "";
    newMovie.addEventListener("click", crossOffMovie)
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie)
    newMovie.appendChild(deleteBtn)

}

function deleteMovie (event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted from your list!"
}

function crossOffMovie (event) {
    event.target.classList.toggle("checked") 
    if (event.target.classList.contains("checked")){
        message.textContent = "Movie watched!"
    } else {
        message.textContent = "Movie added back to your list!"
    }
}


addMovieForm.addEventListener("submit", addToList);