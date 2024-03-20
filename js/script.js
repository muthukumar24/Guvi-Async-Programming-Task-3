// Function to fetch a new fox image
function fetchNewFoxImage() 
{
    fetch('https://randomfox.ca/floof/')
        .then((response) => {            
            return response.json();
        })
        .then((data) => {
            // Update webpage content with the fetched image
            const foxContainer = document.getElementById('fox-container');
            foxContainer.innerHTML = `<img class="fox-image" src="${data.image}" alt="Random Fox">`;
        })
        .catch((error) => {
            const foxContainer = document.getElementById('fox-container');
            foxContainer.innerHTML = `There was a problem fetching the fox image: ${error}`;
            console.error('There was a problem fetching the fox image:', error);
        });
}

// Event listener for the button click
document.getElementById('new-fox-button').addEventListener('click', fetchNewFoxImage);

// Call fetchNewFoxImage function when the page loads initially
document.addEventListener('DOMContentLoaded', fetchNewFoxImage);