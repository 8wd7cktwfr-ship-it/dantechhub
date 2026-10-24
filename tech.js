let myWhatsApp = "2349054177523";
function buy(product){
    let message = "Hello DAN TECH HUB, I want to buy: " + product;
    let link = "https://wa.me/" + myWhatsApp + "?text=" + encodeURIComponent(message);
    window.open(link, "_blank");
}
function filterCat(cat, btn){
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    if(btn && btn.classList) btn.classList.add('active');
    document.querySelectorAll('.card').forEach(card=>{
        card.style.display = card.classList.contains(cat) ? "block" : "none";
    });
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
function filterAll(btn){
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.card').forEach(card=>card.style.display="block");
}
function searchProduct(){
    let q = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll('.card').forEach(card=>{
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(q) ? "block" : "none";
    });
}