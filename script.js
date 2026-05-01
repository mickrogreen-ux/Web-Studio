// 1. Плавний скрол до секцій
function scrollToSection(event, sectionId) {
    // Якщо функція викликана з посилання (меню), відміняємо стандартний перехід
    if (event) event.preventDefault(); 
    
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 2. Скрол в самий верх (для кнопки "Головна")
function scrollToTop(event) {
    if (event) event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 3. Старі функції (залишаю для сумісності з твоїми onclick у кнопках)
function scrollToContact() {
    scrollToSection(null, 'contact');
}

function scrollToWorks() {
    scrollToSection(null, 'works');
}

// 4. Обробка форми
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Збираємо дані (можна потім додати відправку на пошту)
            const name = this.querySelector('input[type="text"]').value;
            
            alert(`Дякуємо, ${name}! Ваша заявка відправлена (тестовий режим).`);
            
            this.reset(); // Очищуємо поля
        });
    }
});