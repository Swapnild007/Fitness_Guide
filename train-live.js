(()=>{'use strict';
const paint=()=>{const main=document.getElementById('main');if(window.FitEngine&&typeof window.train==='function'&&main&&document.querySelector('.tab[data-tab="train"]')?.classList.contains('active')){main.innerHTML=window.train();main.classList.remove('page-in');requestAnimationFrame(()=>main.classList.add('page-in'));window.scrollTo(0,0)}};
document.addEventListener('click',e=>{const t=e.target.closest('[data-tab="train"]');if(t)setTimeout(paint,0)});
window.addEventListener('load',()=>setTimeout(paint,100));
})();