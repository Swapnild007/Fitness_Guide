(()=>{
const main=document.getElementById('main');
function paint(){if(window.train&&document.querySelector('.tab[data-tab="train"]')?.classList.contains('active')){main.innerHTML=window.train();main.classList.remove('page-in');requestAnimationFrame(()=>main.classList.add('page-in'));scrollTo(0,0)}}
document.addEventListener('click',e=>{const t=e.target.closest('[data-tab="train"]');if(t)requestAnimationFrame(paint)},true);
})();