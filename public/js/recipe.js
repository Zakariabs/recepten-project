document.addEventListener('DOMContentLoaded', async () => {
    const recipeContainer = document.getElementById('recipe-container');
    const recipeId = window.location.pathname.split('/').pop();

    try {
        const response = await fetch(`/api/recipes/${recipeId}`);
        const recipe = await response.json();

        recipeContainer.innerHTML = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        recipeContainer.innerHTML = '<p>Error fetching recipe details. Please try again later.</p>';
    }
});
