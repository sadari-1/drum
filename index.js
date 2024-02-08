var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)

    })
    }

    document.addEventListener("keypress", function(event) {

        makeSound(event.key)
        buttonAnimation(event.key)
        // alert("key was pressed")
    });


    function makeSound(key) {
        switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3"); // buffers automatically when created
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3"); // buffers automatically when created
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3"); // buffers automatically when created
                tom4.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3"); // buffers automatically when created
                crash.play();
                break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3"); // buffers automatically when created
                kick.play();
                break;
            case "l":
                var snare = new Audio("sounds/snare.mp3"); // buffers automatically when created
                snare.play();
                break;
           
            default:
                break;
           } 
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." +  currentKey);

        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed")
        }, 100);

    }




    // var snd = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
    // snd.play();
