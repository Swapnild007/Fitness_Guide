(()=>{'use strict';
const paint=()=>{if(window.FitEngine&&typeof window.train==='function'){const main=document.getElementById('main');if(main&&document.querySelector('.tab[data-tab="train"]')?.classList.contains('active')){main.innerHTML=window.train();main.classList.remove('page-in');requestAnimationFrame(()=>main.classList.add('page-in'));window.scrollTo(0,0)}}};
document.addEventListener('click',e=>{const tab=e.target.closest('[data-tab="train"]');if(tab)setTimeout(paint,0)});
window.addEventListener('load',()=>setTimeout(paint,50));
})();