export default class{getTable(e){const t=[],s=Math.max(...e.map((e=>+e.gs$cell.col))),l=Math.max(...e.map((e=>+e.gs$cell.row)));for(let e=0;e<l;e++){const e=Array(s);t.push(e)}for(const s of e){const e=+s.gs$cell.row,l=+s.gs$cell.col;t[e-1][l-1]=+s.gs$cell.numericValue||s.gs$cell.$t}for(let e=0;e<l;e++)for(let s=0;s<t[e].length;s++)t[e][s]||(t[e][s]="");return{table:t,size:{cols:s,rows:l}}}async getJSON(e){const t="https://spreadsheets.google.com/feeds/cells/"+e+"/1/public/values?alt=json";try{const e=await async function(e){try{const t=await fetch(e);return(await t.json()).feed.entry}catch(e){throw new Error(e)}}(t),{table:s,size:l}=this.getTable(e),a=s.shift();return{data:s.map((e=>e.reduce(((e,t,s)=>(e[a[s]]=t,e)),{}))),headers:a,size:l}}catch(e){throw new Error(e)}}}