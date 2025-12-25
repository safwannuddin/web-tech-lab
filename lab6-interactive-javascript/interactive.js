// Lab 6: Interactive JavaScript Features

// Image Gallery & Lightbox
let currentImageIndex = 0;
const galleryImages = [
    { color: '#ff6b6b', text: 'Image 1' },
    { color: '#4ecdc4', text: 'Image 2' },
    { color: '#45b7d1', text: 'Image 3' },
    { color: '#f9ca24', text: 'Image 4' }
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    updateLightboxImage();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const image = galleryImages[currentImageIndex];
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.backgroundColor = image.color;
    lightboxImage.textContent = image.text;
}

// To-Do List
function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (text === '') {
        input.style.borderColor = '#dc3545';
        input.placeholder = 'Please enter a task!';
        setTimeout(() => {
            input.style.borderColor = '';
            input.placeholder = 'Enter a new task...';
        }, 2000);
        return;
    }
    
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span onclick="toggleTodo(this)">${text}</span>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    `;
    
    todoList.appendChild(li);
    input.value = '';
}

function toggleTodo(element) {
    element.parentElement.classList.toggle('completed');
}

function deleteTodo(button) {
    button.parentElement.remove();
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

// Accordion
function toggleAccordion(index) {
    const items = document.querySelectorAll('.accordion-item');
    const item = items[index];
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('.icon');
    
    // Close all other accordions
    items.forEach((otherItem, i) => {
        if (i !== index) {
            otherItem.querySelector('.accordion-header').classList.remove('active');
            otherItem.querySelector('.accordion-content').classList.remove('active');
            otherItem.querySelector('.icon').textContent = '+';
        }
    });
    
    // Toggle current accordion
    header.classList.toggle('active');
    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '-' : '+';
}

// Tabs
function openTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab and mark button as active
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Modal
function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Counter
let counterValue = 0;

function incrementCounter() {
    counterValue++;
    updateCounter();
}

function decrementCounter() {
    counterValue--;
    updateCounter();
}

function resetCounter() {
    counterValue = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById('counterValue').textContent = counterValue;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Interactive JavaScript Lab loaded successfully!');
});
