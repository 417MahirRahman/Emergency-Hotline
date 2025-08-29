// Call Function 
function showService(serviceName) {

    let avBalance = parseInt(document.getElementById("available-balance").innerText);
    
    if(avBalance < 20){
        alert("You Don't have coin for call !!!");
    }else{
        alert("Calling" +" "+serviceName);
        avBalance -= 20;
    }

    document.getElementById("available-balance").innerText = avBalance;
}

//Event Listener for call function
    document.getElementById("National Emergency").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("National Emergency service 999..."); });
    document.getElementById("police").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Police Helpline service 999..."); });
    document.getElementById("fire service").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Fire service 999..."); });
    document.getElementById("Ambulance").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Ambulance service 1994-999999..."); });
    document.getElementById("Women & Child").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Women & Child Helpline service 109..."); });
    document.getElementById("Anti Corruption").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Anti-Corruption Helpline service 106..."); });
    document.getElementById("Electricity").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Electricity Helpline service 16216..."); });
    document.getElementById("Brac").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Brac Helpline service 16445..."); });
    document.getElementById("Train").addEventListener("click", function(e){ 
        e.preventDefault;
        showService("Bangladesh Railway Helpline service 163..."); });


//Event Listener for like function
let heart_icon = document.getElementsByClassName("heart-icon");
let heart = document.getElementById("heart")
let Count = parseInt(document.getElementById("heart").innerText)

for(let i=0; i<heart_icon.length; i++){
    heart_icon[i].addEventListener("click",function(e){
        e.preventDefault()
        Count++
        heart.innerText = Count;
    })
}

//Copy-Number
let btn = document.getElementsByClassName("copy-btn")
let copy_btn = document.getElementById("copy-count")
let Count2 = parseInt(copy_btn.innerText)

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click",function(e){
        e.preventDefault()
        Count2++
        copy_btn.innerText = Count2
        let card = this.closest(".card-body")
        let text = card.querySelector(".card-body .phone-number").innerText

        navigator.clipboard.writeText(text)
        .then(() => {
            alert("Number Copied")
        })
    })
}
         