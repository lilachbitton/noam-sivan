// assets/js/main.js

// אתחול AOS לאנימציות בגלילה
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,  // אורך האנימציה במילישניות
    once: true      // אנימציה אחת בלבד לכל אלמנט
  });
});

// דוגמה לסקרול חלק לסקשנים פנימיים (אם תרצי)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
