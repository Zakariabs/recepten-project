# Recepten Project

Dit project is een receptenzoeker gebouwd met Node.js en Express. Het maakt gebruik van dummy JSON data van [dummyjson.com](https://dummyjson.com/recipes). De applicatie biedt verschillende functionaliteiten zoals het zoeken naar recepten, het weergeven van individuele recepten, en het opslaan van zoektermen in LocalStorage.

## Inspiratie

Dit project is geïnspireerd door de tutorial in de YouTube-video: [Build a Node.js REST API with Express](https://www.youtube.com/watch?v=JB1aKAoj2o0&t=5876s).

## Functionaliteiten

### 1. Elementen selecteren
**Status**: ✅ Geïmplementeerd
- Elementen worden geselecteerd met `document.getElementById` in [`public/js/scripts.js`](public/js/scripts.js).

### 2. Elementen manipuleren
**Status**: ✅ Geïmplementeerd
- Elementen worden gemanipuleerd met `innerHTML` en `appendChild` in [`public/js/scripts.js`](public/js/scripts.js).

### 3. Event aan een element koppelen
**Status**: ✅ Geïmplementeerd
- Events worden gekoppeld met `addEventListener` in [`public/js/scripts.js`](public/js/scripts.js).

### 4. Formulier valideren
**Status**: ✅ Geïmplementeerd
- Formulier validatie gebeurt door te controleren of de zoekterm niet leeg is in [`public/js/scripts.js`](public/js/scripts.js).

### 5. Gebruiken van een constante
**Status**: ✅ Geïmplementeerd
- Constantes zoals `const form`, `const searchInput` worden gebruikt in [`public/js/scripts.js`](public/js/scripts.js).

### 6. Gebruiken van template literals
**Status**: ✅ Geïmplementeerd
- Template literals worden gebruikt voor het dynamisch genereren van HTML in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 7. Destructuring
**Status**: ✅ Geïmplementeerd
- Destructuring wordt gebruikt in de functies `displayRecipes` en `filter` in [`public/js/scripts.js`](public/js/scripts.js).

### 8. Spread & Rest operator
**Status**: ❌ Niet geïmplementeerd

### 9. Iteration over een array
**Status**: ✅ Geïmplementeerd
- Iteratie over arrays gebeurt met `forEach` in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 10. Arrow function
**Status**: ✅ Geïmplementeerd
- Arrow functions worden gebruikt in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 11. Callback function
**Status**: ✅ Geïmplementeerd
- Callbacks worden gebruikt in `forEach` in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 12. Promise
**Status**: ✅ Geïmplementeerd
- Promises worden gebruikt met `fetch` in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 13. Consumer methods
**Status**: ❌ Niet expliciet geïmplementeerd

### 14. Async & Await
**Status**: ✅ Geïmplementeerd
- Async/Await wordt gebruikt voor asynchrone operaties in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 15. Self executing function
**Status**: ✅ Geïmplementeerd
- Zelf-uitvoerende functies worden gebruikt in [`public/js/scripts.js`](public/js/scripts.js).

### 16. Fetch om data op te halen
**Status**: ✅ Geïmplementeerd
- Data wordt opgehaald met `fetch` in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 17. JSON manipuleren en weergeven
**Status**: ✅ Geïmplementeerd
- JSON data wordt gemanipuleerd en weergegeven in [`public/js/scripts.js`](public/js/scripts.js) en [`public/js/recipe.js`](public/js/recipe.js).

### 18. Basis CSS Animatie
**Status**: ✅ Geïmplementeerd
- Basis CSS animaties worden gebruikt in [`public/css/styles.css`](public/css/styles.css).

### 19. Gebruiken van een flexbox of CSS grid
**Status**: ✅ Geïmplementeerd
- Flexbox wordt gebruikt voor de lay-out in [`public/css/styles.css`](public/css/styles.css).

### 20. Gebruik van LocalStorage
**Status**: ✅ Geïmplementeerd
- LocalStorage wordt gebruikt om zoektermen op te slaan in [`public/js/scripts.js`](public/js/scripts.js).

