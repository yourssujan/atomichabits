// Array of random quotes from Atomic Habits
const quotes = [
    "You do not rise to the level of your goals. You fall to the level of your systems.",
    "Habits are the compound interest of self-improvement.",
    "Success is the product of daily habits—not once-in-a-lifetime transformations.",
    "The process of building habits is actually the process of becoming yourself.",
    "You do not need to be the victim of your environment. You can also be the architect of it.",
    "The most practical way to change who you are is to change what you do.",
    "Goals are good for setting a direction, but systems are best for making progress."
];

// Function to display a random quote when the button is clicked
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = `"${quotes[randomIndex]}"`;
}

// Simulate adding to cart
let cartItemCount = 0;

function addToCart() {
    cartItemCount++;
    let discountMessage = '';
    if (cartItemCount >= 2) {
        discountMessage = ' (You get 10% off!)';
    }
    document.getElementById('cart-info').textContent = `Book added to cart. Total items: ${cartItemCount}${discountMessage}`;
}
