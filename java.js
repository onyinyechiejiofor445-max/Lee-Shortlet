// Function to handle the property search form submission
function handleSearch(event) {
    event.preventDefault(); 
    
    // Get values from the search form
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    // Basic placeholder alert for a successful search query
    alert(`Searching for available shortlets:\nLocation: ${location}\nDates: ${checkin} to ${checkout}\n\n(A real site would send this data to a server and display search results.)`);
    
    // In a real application, you would use fetch() or axios to call a backend API here.
}

// Function to handle the contact form submission
function handleContactSubmit(event) {
    event.preventDefault(); 
    
    // Basic placeholder alert
    alert('Your premium inquiry has been sent to our concierge team. We will respond within 4 hours.');
    
    // Clear the form fields after submission
    event.target.reset(); 
    
    // In a real application, you would use fetch() to send the form data to an email service or CRM.
}

// Function to handle the Login/Book Now clicks
function handleCtaClicks() {
    // 1. Login/Registration CTA
    const loginLink = document.getElementById('login-link');
    if (loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('A Login/Registration Modal or redirection to the secure portal would happen here.');
        });
    }
    // Function to toggle the dropdown menu visibility
function toggleDropdown() {
    // Get the element with the ID 'myDropdownContent' (the actual menu)
    document.getElementById("myDropdownContent").classList.toggle("show");
}

// Attach the function to the button click event
// Get the button element by its ID and listen for a 'click'
document.getElementById("dashboardDropdown").addEventListener('click', toggleDropdown);

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    // If the click did NOT originate from the dropdown button
    if (!event.target.matches('.dropdown-btn')) {
        
        // Find all currently visible dropdowns
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        
        // Loop through them and close any that are open
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    
    // =======================================================
    // 1. DASHBOARD DROPDOWN FUNCTIONALITY
    // =======================================================

    // Function to toggle the dashboard dropdown menu
    function toggleDropdown() {
        const dropdownContent = document.getElementById("myDashboardDropdown");
        if (dropdownContent) {
            dropdownContent.classList.toggle("show");
        }
    }

    const dropdownButton = document.getElementById("dashboardDropdownButton");
    if (dropdownButton) {
        dropdownButton.addEventListener('click', toggleDropdown);

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (!event.target.matches('#dashboardDropdownButton')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        });
    }
    // =======================================================
// 3. PRODUCTS FILTERING LOGIC
// =======================================================

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-bar button');
// Get all apartment cards
const propertyCards = document.querySelectorAll('.apartment-card');

if (filterButtons.length > 0 && propertyCards.length > 0) {

    // Loop through each button and attach an event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Get the filter value (e.g., 'lagos' or 'all')
            const filterValue = this.getAttribute('data-filter');

            // 2. Manage the 'active' button class for styling
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 3. Loop through all property cards to show/hide them
            propertyCards.forEach(card => {
                const cardLocation = card.getAttribute('data-location');

                if (filterValue === 'all' || cardLocation === filterValue) {
                    // Show the card (remove the 'hidden' class)
                    card.classList.remove('hidden');
                } else {
                    // Hide the card (add the 'hidden' class)
                    card.classList.add('hidden');
                }
            });
        });
    });
}
// =======================================================
// 6. ABOUT PAGE: ANIMATED COUNTER
// =======================================================

// Note: This needs to be inside or called from the DOMContentLoaded listener.

function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the number, the faster the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Calculate increment
            const inc = target / speed;

            if (count < target) {
                // Round up the new count
                counter.innerText = Math.ceil(count + inc);
                // Call updateCount again after a small pause
                setTimeout(updateCount, 1);
            } else {
                // Ensure the final number is the exact target
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

// Optional: Start counters when the user scrolls the stats into view (better UX)
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(statsSection); // Stop observing once started
            }
        });
    }, {
        threshold: 0.5 // Start when 50% of the section is visible
    });

    observer.observe(statsSection);
} else {
    // Fallback: If no IntersectionObserver, just start the counters immediately
    startCounters();
}

    // =======================================================
    // 2. LOGIN FORM VALIDATION
    // =======================================================

    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            if (!validateLoginForm()) {
                event.preventDefault(); 
                alert('Please ensure both email and password fields are filled out and valid.');
            } 
        });
    }

    function validateLoginForm() {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Basic check for empty fields
        if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            return false;
        } 
        
        // Advanced Email Format Check using Regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            // Optional: You could highlight the input field border in red here
            emailInput.style.border = '2px solid red';
            return false;
        } else {
             emailInput.style.border = '1px solid #ccc'; // Reset border if valid
        }

        return true;
    }

    // =======================================================
    // 3. CONTACT FORM VALIDATION (Placeholder for future use)
    // =======================================================

    // You would add similar validation logic for the contact form here.
    
});

    // 2. Book Now buttons (on product cards)
    document.querySelectorAll('.book-now').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Redirecting to the booking page for this property...');
        });
    });
    
    // 3. Attach the forms to their handlers
    const searchForm = document.querySelector('.search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
    
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}


// Function for simple smooth scrolling when clicking on navigation links
function setupSmoothScroll() {
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize all functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    handleCtaClicks();
    setupSmoothScroll();
});