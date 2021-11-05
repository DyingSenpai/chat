function chat(player) {
        
    let container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("id", "container");

    let chat = document.createElement("div"); 
    chat.classList.add("chat");
    chat.setAttribute("id", "messages");
        
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", "send");
        
    let textArea = document.createElement("textarea"); 
    textArea.classList.add("text_area");
    textArea.setAttribute("id", "textArea");
    textArea.setAttribute("placeholder", "Ваше сообщение");

    let button = document.createElement("button"); 
    button.classList.add("btn");
    button.setAttribute("id", "btnSend");
    button.setAttribute("type", "submit");
    button.innerHTML = "Отправить";
        
    container.appendChild(chat);
    row.appendChild(textArea);
    row.appendChild(button);
    container.appendChild(row);

    if(sessionStorage.getItem("chat")) {
        chat.outerHTML = sessionStorage.getItem("chat");
    }

    button.onclick = function() {
        let inputText = document.getElementById("textArea").value;
        if(inputText != "") {
            let p = document.createElement("p");
            let messages = document.getElementById("messages");
            p.innerHTML = inputText;
            messages.appendChild(p);
            document.getElementById("textArea").value = "";
            sessionStorage.setItem("chat", messages.outerHTML);
        }
    }

    let trackDisplay = document.querySelector(".vjs-text-track-display");
    trackDisplay.parentNode.insertBefore(container, trackDisplay.nextSibling);

    document.addEventListener("DOMContentLoaded", function(event) { 
        let widthWind = document.querySelector('video').offsetWidth;
        console.log(widthWind);

        if (widthWind <= 1071 && widthWind > 881) {
            container.style.marginTop = "75px";
        }
        else if (widthWind <= 881) {
            container.style.marginTop = "100px"
            chat.style.width = "250px";
        }
    });

    let videoPlay = document.querySelector(".video-js");
    videoPlay.onclick = function() {
        container.style.display = "flex";
    }
    videoPlay.ontouchend = function() {
        container.style.display = "flex";
    }
        
}
videojs.registerPlugin('chat', chat);