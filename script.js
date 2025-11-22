// fill year
document.getElementById('year').textContent = new Date().getFullYear();

// reveal on scroll (lightweight, no library)
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
},{threshold:0.12});
reveals.forEach(r=>obs.observe(r));

// smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  }); 
});