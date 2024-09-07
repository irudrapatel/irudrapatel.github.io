// Function to toggle the submenu visibility
function toggleSubmenu(event) {
    // Prevent the default action of the click event
    event.preventDefault();
    
    // Get the parent list item
    const parentLi = event.target.closest('li.st-has-submenu');
    
    // Find the submenu within the parent list item
    const submenu = parentLi.querySelector('ul.st-submenu');
    
    // Toggle the 'show' class on the submenu
    submenu.classList.toggle('show');
  }
  