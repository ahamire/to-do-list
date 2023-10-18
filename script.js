const addbtn = document.querySelector(".add_project");
const addmenu = document.getElementById("btnad");
const addbtn2 = document.getElementById("btnadend");
const inpadd = document.querySelector(".inpadd");
const add_pr = document.querySelector(".add_project1");
const para = Document.createElement("div");
add_pr.appendChild(para);
addbtn.addEventListener("click",()=>{
    addbtn.style.display ="none";
    addmenu.classList.toggle("add_menu");
});
addbtn2.addEventListener("click",()=>{
    if(inpadd.value != ""){
    addbtn.style.display ="flex";
    inpadd.value = "";
    addmenu.classList.toggle("add_menu");
}
});