/* GitHub Pages personal wish collection. No server or cross-device sharing. */
(() => {
 'use strict';
 const KEY='sbu-pages-wishes-v1';
 function read(){try{const list=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(list)?list:[]}catch{throw new Error('Browser storage is unavailable. You can still draw and download your wish.')}}
 function save(list){try{localStorage.setItem(KEY,JSON.stringify(list))}catch{throw new Error('Could not save in this browser. Storage may be full or disabled. Download your wish to keep it.')}}
 window.afterDarkLocalWishApi=async(path,options={})=>{
  const method=(options.method||'GET').toUpperCase();
  if(path==='/api/wishes'&&method==='GET')return {wishes:read().map(w=>({...w,mine:true,liked:false,hearts:0})),signedIn:false};
  if(path==='/api/wishes'&&method==='POST'){
   const input=JSON.parse(options.body||'{}'),message=String(input.message||'').trim();
   const drawing=Array.isArray(input.drawing)?input.drawing:[];
   if(!message&&!drawing.length)throw new Error('Draw or type a wish first.');
   if(message.length>200)throw new Error('Keep your wish under 200 characters.');
   if(!['sbu','alumni','friend'].includes(input.campus))throw new Error('Choose your Stony Brook connection.');
   if(drawing.length>160)throw new Error('This drawing has too many strokes. Please simplify it.');
   let total=0;
   for(const s of drawing){if(!s||!['#3c3548','#a84f37','#49685b','#7254a0'].includes(s.color)||![2,4,7].includes(s.width)||!Array.isArray(s.points)||!s.points.length)throw new Error('Please redraw your wish.');total+=s.points.length;for(const p of s.points)if(!Number.isFinite(p.x)||!Number.isFinite(p.y)||p.x<0||p.x>1||p.y<0||p.y>1)throw new Error('Please redraw your wish.')}
   if(total>14000)throw new Error('This drawing is too detailed. Please simplify it a little.');
   const list=read();if(list.length>=100)throw new Error('This device already has 100 wishes. Download or remove an older one to make room.');
   const wish={id:crypto.randomUUID(),name:String(input.name||'').trim().slice(0,30)||'A midnight friend',campus:input.campus,message,drawing,paper:['peach','sage','lavender'].includes(input.paper)?input.paper:'peach',created_at:Date.now()};
   save([wish,...list]);return {id:wish.id};
  }
  if(method==='DELETE'&&/^\/api\/wishes\/[^/]+$/.test(path)){const id=decodeURIComponent(path.split('/').at(-1));save(read().filter(w=>w.id!==id));return {ok:true}}
  throw new Error('Shared wishes and reactions require the hosted community wall.');
 };
})();
