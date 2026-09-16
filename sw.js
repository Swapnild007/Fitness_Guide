const CACHE='fitness-guide-v8';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  if(url.pathname.endsWith('/styles.css')){event.respondWith(fetch('./v8.css?v=8',{cache:'no-store'}));return;}
  if(url.pathname.endsWith('/app.js')){event.respondWith(fetch(event.request,{cache:'no-store'}).then(async r=>{const text=await r.text();const extra=await fetch('./v7.js?v=7',{cache:'no-store'}).then(x=>x.text());return new Response(text+'\n;'+extra,{headers:{'Content-Type':'application/javascript; charset=utf-8'}})}));return;}
  if(url.pathname.endsWith('/v8.js')){event.respondWith(fetch('./v8.js?v=8',{cache:'no-store'}));return;}
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));return response}).catch(()=>caches.match('./index.html')));return;
  }
  event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html'))));
});