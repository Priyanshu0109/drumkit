
var arr=document.querySelectorAll(".drum");

for(var i=0; i<arr.length; i++)
{
    arr[i].addEventListener("click",function()
    {  
        var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case "w":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;    
            case "d":
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;  
            case "k":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;    
            default:
                console.log("hello");
        }
        buttonAnimation(buttonInnerHTML);
    });
    
}

document.addEventListener("keypress",function(event)
{
    var buttonInnerHTML=event.key;
    switch(buttonInnerHTML){
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;    
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;  
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;    
        default:
            console.log("hello");
    }
    buttonAnimation(buttonInnerHTML);
});


function buttonAnimation(currentkey)
{
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    const myTimeout = setTimeout(myGreeting, 1000);

    function myGreeting() {
        activeButton.classList.remove("pressed");
    }
}
