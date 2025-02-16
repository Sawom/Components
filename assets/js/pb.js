


// pricing table

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownOptions = document.querySelector(".dropdown-options");
const dropdownSelected = document.querySelector(".dropdown-selected");

// Toggle dropdown visibility on button click
dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent bubbling
    dropdownButton.parentElement.classList.toggle("open");
});

// Handle dropdown option selection
dropdownOptions.addEventListener("click", function (e) {
    if (e.target.classList.contains("dropdown-option")) {
        dropdownSelected.textContent = e.target.textContent; // Update selected item text
        dropdownButton.parentElement.classList.remove("open"); // Hide dropdown
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
    if (!dropdownButton.parentElement.contains(e.target)) {
        dropdownButton.parentElement.classList.remove("open");
    }
});

function toggleDetails() {
    // Toggle visibility of tables and titles
    const tables = document.querySelectorAll('.tables-container .table-title, .tables-container table');
    tables.forEach(table => {
        table.classList.toggle('d-none');
    });

    // Toggle button text
    const button = document.querySelector('button');
    if (button.innerHTML === "See Details") {
        button.innerHTML = "Hide Details";
    } else {
        button.innerHTML = "See Details";
    }
}




document.addEventListener('DOMContentLoaded', () => {
    const trialContent = document.querySelector('.trial-content');
    const tableTitles = document.querySelectorAll('.table-title');
    const tables = document.querySelectorAll('table');
    const tableDescriptions = document.querySelectorAll('.table-desc');
    const pricingCardContainer = document.querySelector('.pricing-card-container');
    const button = document.getElementById('toggleButtonPrice');
    const bottomButton = document.getElementById('toggleButtonPriceBottom');
    const bottomBtnContainer = document.querySelector('.table-bottom-btn');

    // Set default state to hidden
    trialContent.style.display = 'none';
    tableTitles.forEach(title => title.style.display = 'none');
    tables.forEach(table => table.style.display = 'none');
    tableDescriptions.forEach(desc => desc.style.display = 'none');
    pricingCardContainer.style.display = 'flex';
    button.innerText = 'See Details';
    bottomBtnContainer.classList.add('d-none'); // Hide bottom button initially
});

function toggleDetails() {
    const button = document.getElementById('toggleButtonPrice');
    const trialContent = document.querySelector('.trial-content');
    const tableTitles = document.querySelectorAll('.table-title');
    const tables = document.querySelectorAll('table');
    const tableDescriptions = document.querySelectorAll('.table-desc');
    const pricingCardContainer = document.querySelector('.pricing-card-container');
    const bottomBtnContainer = document.querySelector('.table-bottom-btn');

    if (button.innerText === 'See Details') {
        // Show tables, trial content, table titles, and descriptions; hide pricing card
        trialContent.style.display = 'flex';
        tableTitles.forEach(title => title.style.display = 'block');
        tables.forEach(table => table.style.display = 'table');
        tableDescriptions.forEach(desc => desc.style.display = 'flex');
        pricingCardContainer.style.display = 'none';
        button.innerText = 'Hide Details';

        // Show bottom hide button
        bottomBtnContainer.classList.remove('d-none');
    } else {
        // Hide tables, trial content, table titles, and descriptions; show pricing card
        trialContent.style.display = 'none';
        tableTitles.forEach(title => title.style.display = 'none');
        tables.forEach(table => table.style.display = 'none');
        tableDescriptions.forEach(desc => desc.style.display = 'none');
        pricingCardContainer.style.display = 'flex';
        button.innerText = 'See Details';

        // Hide bottom hide button
        bottomBtnContainer.classList.add('d-none');
    }
}

function hideTables() {
    const tables = document.querySelectorAll('table');
    const trialContent = document.querySelector('.trial-content');
    const tableTitles = document.querySelectorAll('.table-title');
    const tableDescriptions = document.querySelectorAll('.table-desc');
    const pricingCardContainer = document.querySelector('.pricing-card-container');
    const button = document.getElementById('toggleButtonPrice');
    
    // Hide tables, trial content, table titles, and descriptions; show pricing card
    trialContent.style.display = 'none';
    tableTitles.forEach(title => title.style.display = 'none');
    tables.forEach(table => table.style.display = 'none');
    tableDescriptions.forEach(desc => desc.style.display = 'none');
    pricingCardContainer.style.display = 'flex';
    button.innerText = 'See Details';
    
    // Optionally, hide the bottom hide button
    const bottomBtnContainer = document.querySelector('.table-bottom-btn');
    bottomBtnContainer.classList.add('d-none');
}