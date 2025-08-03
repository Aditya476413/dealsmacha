// Simple popup for add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Added to cart!');
  });
});

// Optional: Responsive menu toggle (expand logic as needed)
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
