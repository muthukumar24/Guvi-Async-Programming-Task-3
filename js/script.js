// Function to fetch a new fox image
function fetchNewFoxImage() 
{   //Getting the datas using fetch method
    fetch('https://randomfox.ca/floof/')
        //URL Response handler
        .then((response) => {            
            return response.json();
        })
        .then((data) => { //response data handler
            // Update webpage content with the fetched image
            const foxContainer = document.getElementById('fox-container');
            foxContainer.innerHTML = `<img class="fox-image" src="${data.image}" alt="Random Fox">`;
        })
        .catch((error) => { //response data - error handler
            const foxContainer = document.getElementById('fox-container');
            foxContainer.innerHTML = `There was a problem fetching the fox image: ${error}`;
            console.error('There was a problem fetching the fox image:', error);
        });
}

// Event listener for the button click
document.getElementById('new-fox-button').addEventListener('click', fetchNewFoxImage);

// Call fetchNewFoxImage function when the page loads initially
document.addEventListener('DOMContentLoaded', fetchNewFoxImage);