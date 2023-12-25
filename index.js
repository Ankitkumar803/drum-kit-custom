
document.addEventListener("keydown",function(event) {
    soundplay(event.key);
    buttonAni(event.key);
});

var cnt = document.querySelectorAll(".drum").length

for (var i = 0; i < cnt; i++) {
    // console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        soundplay(this.innerHTML);
        buttonAni(this.innerHTML);

    });
  }

var cnt1 = document.querySelectorAll(".drum1").length

for (var i = 0; i < cnt1; i++) {
    // console.log(i);
    document.querySelectorAll(".drum1")[i].addEventListener("click",function (){
        soundplay(this.innerHTML);
        buttonAni(this.innerHTML);

    });
}
function soundplay(input) {
    if (typeof input === 'string' && input.match(/[a-zA-Z]/)) {
        input = input.toLowerCase();
    }
    if (!isNaN(input)) {
        input = '_' + input;
    }
    // var input = this.innerHTML;
    console.log(input);
    switch (input) {
        case "w":
            var sound = new Audio('band/track_1a.opus');
            sound.play();
            break;
        case "a":
            var sound = new Audio('band/track_1b.opus');
            sound.play();
            break;
        case "s":
            var sound = new Audio('band/track_1c.opus');
            sound.play();
            break;
        case "d":
            var sound = new Audio('band/track_1d.opus');
            sound.play();
            break;
        case "j":
            var sound = new Audio('band/track_1e.opus');
            sound.play();
            break;
        case "k":
            var sound = new Audio('band/track_1f.mp3');
            sound.play();
            break;
        case "l":
            var sound = new Audio('band/track_2a.mp3');
            sound.play();
            break;
        case "b":
            var sound = new Audio('band/track_2b.mp3');
            sound.play();
            break;
        case "n":
            var sound = new Audio('band/track_2c.mp3');
            sound.play();
            break;
        case "m":
            var sound = new Audio('band/track_2d.mp3');
            sound.play();
            break;
        case "z":
            var sound = new Audio('band/track_3a.mp3');
            sound.play();
            break;
        case "x":
            var sound = new Audio('band/track_3b.mp3');
            sound.play();
            break;
        case "_1":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case "_2":
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;
        case "_3":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
        case "_4":
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case "_5":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case "_6":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;
        case "_7":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;

        
        default :
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;

    }


}
  

// function buttonAni(input){

//     document.querySelector("." + input ).classList.add("pressed");

//     setTimeout(function() {document.querySelector("." + input ).classList.remove("pressed");}, 500);

// }

function buttonAni(input) {
    if (typeof input === 'string' && input.match(/[a-zA-Z]/)) {
        input = input.toLowerCase();
    }
    if (!isNaN(input)) {
        input = '_' + input;
    }
    var element = document.querySelector("." + input);
    element.classList.add("pressed");
  
    // Array of image paths
    var imagePaths = [
      'swap/birthday.jpg',
      'swap/cycle.jpg',
      'swap/dance.jpg',
      'swap/ice.jpg',
      'swap/white.jpg',
      'swap/Holi.jpg'
    ];
  
    var randomIndex = Math.floor(Math.random() * imagePaths.length);
  
    element.style.backgroundImage = 'url(' + imagePaths[randomIndex] + ')';

    var body = document.body;
    body.style.backgroundImage = 'url(' + imagePaths[randomIndex] + ')';
    body.classList.add('body-background');
  
    setTimeout(function() {
      // Remove the "pressed" class and reset the background image after the animation
      element.classList.remove("pressed");
      element.style.backgroundImage = '';
      body.style.backgroundImage = '';
      body.classList.remove('body-background');
    }, 600);
  }
  
