function r(n){let t=2166136261;for(let a=0;a<n.length;a+=1)t^=n[a],t=Math.imul(t,16777619);return(t>>>0).toString(16).padStart(8,"0")}export{r as f};
