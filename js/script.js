function filterItems(category) {
  const listItems = document.querySelectorAll('.collection-list > .p-2');
  
  listItems.forEach(item => {
    item.style.display = 'none'; // Hide all items initially
    
    if (category === 'all') {
      item.style.display = 'block'; // Show all items if 'All' button is selected
    } else if (item.classList.contains(category)) {
      item.style.display = 'block'; // Show items that match the selected category
    }
  });
}


window.onscroll = function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 700) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};