const p=[...Array(20)].map((_,i)=>`photo${i+1}.jpeg`);
const c=['Some smiles stay with you...','Some moments never fade...','And some people quietly become important...'];
heart.onclick=()=>{start.classList.add('hidden');show.classList.remove('hidden');audio.play().catch(()=>{});
let i=0;img.src=p[0];caption.textContent=c[0];
const t=setInterval(()=>{i++;if(i>=p.length){clearInterval(t);show.classList.add('hidden');letter.classList.remove('hidden');return;}img.src=p[i];caption.textContent=c[Math.min(2,Math.floor(i/7))];},3500)};
