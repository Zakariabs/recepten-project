(() => { // Self executing function
    // Elementen selecteren
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const recipesContainer = document.getElementById('recipes-container');

    // Laad zoekterm van LocalStorage
    const loadSearchTerm = () => {
        const storedSearchTerm = localStorage.getItem('searchTerm');
        if (storedSearchTerm) {
            searchInput.value = storedSearchTerm;
        }
    };

    loadSearchTerm();

    // Event aan een element koppelen
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) return;

        // Sla zoekterm op in LocalStorage
        localStorage.setItem('searchTerm', searchTerm);

        try {
            // Fetch om data op te halen
            const response = await fetch(`/api/recipes`);
            const data = await response.json();
            const filteredRecipes = data.recipes.filter(({ name }) => // Destructuring
                name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            displayRecipes(filteredRecipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    });

    // Elementen manipuleren
    const displayRecipes = (recipes) => {
        recipesContainer.innerHTML = '';
        recipes.forEach(({ id, image, name, ingredients }) => { // Destructuring
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            // Gebruiken van template literals
            recipeCard.innerHTML = `
                <a href="/recipe/${id}">
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                    <p>Ingredients: ${ingredients}</p>
                </a>
            `;

            recipesContainer.appendChild(recipeCard);
        });
    };

    // Data ophalen en weergeven bij laden van de pagina
    const fetchAllRecipes = async () => {
        try {
            const response = await fetch(`/api/recipes`);
            const data = await response.json();
            displayRecipes(data.recipes);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    fetchAllRecipes();
})();
