document.addEventListener('DOMContentLoaded', async () => {
    const recipeContainer = document.getElementById('recipe-container');
    const recipeId = window.location.pathname.split('/').pop();

    try {
        const response = await fetch(`/api/recipes/${recipeId}`);
        const recipe = await response.json();

        recipeContainer.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> ${recipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <p><strong>Calories Per Serving:</strong> ${recipe.caloriesPerServing}</p>
            <p><strong>Rating:</strong> ${recipe.rating} (${recipe.reviewCount} reviews)</p>
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            <h3>Tags</h3>
            <div class="tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h3>Meal Type</h3>
            <p>${recipe.mealType.join(', ')}</p>
        `;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        recipeContainer.innerHTML = '<p>Error fetching recipe details. Please try again later.</p>';
    }
});
