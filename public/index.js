const search=document.getElementById('searchid');
const db=document.getElementById('ename').innerText;
search.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    console.log(db);
    
})