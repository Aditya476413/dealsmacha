// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all buy buttons
  const buyButtons = document.querySelectorAll(".buy-button");
  const cartCount = document.getElementById("cart-count");

  let count = 0;

  buyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      count++;
      alert("Item added to cart!");
      if (cartCount) {
        cartCount.textContent = count;
      }
    });
  });

  // Optional: Product search/filter
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      const products = document.querySelectorAll(".product-card");

      products.forEach(product => {
        const title = product.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  }
});