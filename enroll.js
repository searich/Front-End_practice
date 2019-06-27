var enroll = document.getElementById("enroll");
enroll.onclick = function(e){
    e.preventDefault();
    enroll.innerHTML = "You got it!";
    enroll.style.background = "#27cb8b";
    enroll.style.borderColor = "#27cb8b";
}