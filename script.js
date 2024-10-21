// Select the necessary elements
const searchMenuCheckbox = document.getElementById('search-menu');
const searchInput = document.getElementById('js-search-input');
const searchForm = document.getElementById('searchform2');
const closeButton = document.querySelector('.header-search-exit');

// Event listener to close the search menu when clicking the close button
closeButton.addEventListener('click', () => {
    searchMenuCheckbox.checked = false; // Uncheck the checkbox
});

// Event listener for pressing the Enter key in the search input
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission behavior
        const query = searchInput.value.trim();
        
        // Only submit if the query is not empty
        if (query) {
            searchForm.action = `/search/?q=${encodeURIComponent(query)}`; // Update the action with the query
            searchForm.submit(); // Submit the form
        }
    }
});

// Optional: Show the search menu when the search icon is clicked (add this to your HTML if needed)
const searchIcon = document.querySelector('.icon.i-search'); // Adjust this selector to match your actual search icon
searchIcon.addEventListener('click', () => {
    searchMenuCheckbox.checked = true; // Check the checkbox to show the search menu
    searchInput.focus(); // Focus on the input field
});


// Select necessary elements
const sideMenuCheckbox = document.getElementById('side_menu');
const sideNav = document.getElementById('side-navigation');

// Function to toggle the side navigation
function toggleSideNav() {
    if (sideMenuCheckbox.checked) {
        sideNav.style.display = 'block'; // Show side navigation
    } else {
        sideNav.style.display = 'none'; // Hide side navigation
    }
}

// Event listener for checkbox change
sideMenuCheckbox.addEventListener('change', toggleSideNav);

// Close the side menu when the close button is clicked
const closeButton = document.querySelector('.menu-icon.i-close-menu');
closeButton.addEventListener('click', () => {
    sideMenuCheckbox.checked = false; // Uncheck the checkbox
    toggleSideNav(); // Update side navigation visibility
});

// Toggle submenu visibility
const subNavCheckboxes = document.querySelectorAll('.css-menu--checkbox');

subNavCheckboxes.forEach((checkbox) => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    label.addEventListener('click', () => {
        const subNav = checkbox.nextElementSibling; // Find the corresponding submenu
        if (subNav) {
            subNav.classList.toggle('css-menu--target'); // Toggle the display class for submenu
        }
    });
});

// Optional: Close the side menu if clicking outside of it (optional enhancement)
document.addEventListener('click', (event) => {
    if (!sideNav.contains(event.target) && !sideMenuCheckbox.contains(event.target)) {
        sideMenuCheckbox.checked = false;
        toggleSideNav();
    }
});
