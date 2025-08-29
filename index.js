let avBalance = parseInt(document.getElementById("available-balance").innerText);
let History = [];

// Call Function
function showService(serviceName) {

    if(avBalance < 20){
        alert("You don't have enough coin for call !!!");
    }else{
        alert("Calling" +" "+serviceName);
        avBalance -= 20;
        callHistory();
    }

    document.getElementById("available-balance").innerText = avBalance;
}

//Call History
function callHistory(){
    let history_container = document.getElementById("Call-History")
    history_container.innerHTML = "";

    for(let data of History){
         let div = document.createElement("div")
        div.innerHTML = `<div class="flex justify-between items-center bg-[gray]/7 mb-2 p-2 lg:mb-3 lg:p-5 rounded-xl">
                            <div>
                                <h1 class="text-[10px] font-bold lg:text-lg">${data.Name}</h1>
                                <p class="text-[10px] font-medium lg:text-lg text-[gray]">${data.number}</p>
                            </div>
                            <div class="date">
                                <p class="text-[10px] font-medium lg:text-lg text-[gray]">${data.date}</p>
                            </div>
                        </div>`

        history_container.appendChild(div)               
    }   
}

//Clear-History
document.getElementById("Clear-btn").addEventListener("click",function(e){
    e.preventDefault()
    History = []
    document.getElementById("Call-History").innerHTML = ""
})

//Event Listener for call function
    document.getElementById("National Emergency").addEventListener("click", function(e){ 
        e.preventDefault();

        const data = {
            Name : "National Emergency Number",
            number : 999,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("National Emergency service 999...");
    });


    document.getElementById("police").addEventListener("click", function(e){ 
        e.preventDefault;
         
        const data = {
            Name : "Police Helpline Number",
            number : 999,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Police Helpline service 999...");
    });
    document.getElementById("fire service").addEventListener("click", function(e){ 
        e.preventDefault;
        
        const data = {
            Name : "Fire Service Number",
            number : 999,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Fire service 999...");
    });
    document.getElementById("Ambulance").addEventListener("click", function(e){ 
        e.preventDefault;
        
        const data = {
            Name : "Ambulance Service",
            number : "1994-999999",
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Ambulance service 1994-999999...");
    });
    document.getElementById("Women & Child").addEventListener("click", function(e){ 
        e.preventDefault;

        const data = {
            Name : "Women & Child Helpline",
            number : 109,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Women & Child Helpline service 109...");
     });
    document.getElementById("Anti Corruption").addEventListener("click", function(e){ 
        e.preventDefault;

        const data = {
            Name : "Anti-Corruption Helpline",
            number : 106,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Anti-Corruption Helpline service 106...");
    });
    document.getElementById("Electricity").addEventListener("click", function(e){ 
        e.preventDefault;

        const data = {
            Name : "Electricity Helpline",
            number : 16216,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Electricity Helpline service 16216...");
     });
    document.getElementById("Brac").addEventListener("click", function(e){ 
        e.preventDefault;

        const data = {
            Name : "Brac Helpline",
            number : 16445,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Brac Helpline service 16445...");
     });
    document.getElementById("Train").addEventListener("click", function(e){ 
        e.preventDefault;

        const data = {
            Name : "Bangladesh Railway Helpliner",
            number : 163,
            date : new Date().toLocaleTimeString()
        }
        History.push(data)
        showService("Bangladesh Railway Helpline service 163...");
     });


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

