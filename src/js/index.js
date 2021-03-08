var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var innerHtml =this.innerHTML;
        makeSound(innerHtml);
        buttonAnimation(innerHtml);
    }); 
}
document.addEventListener("keypress",function(event){
    var keyPressed =event.key ;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
}) ;
function buttonAnimation(key){

    var activeButton = document.querySelector("."+key);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}



function makeSound(key){
    switch (key) {
        case "a":
            var w = new Audio ("src/sounds/tom-1.mp3");
            w.play();
            break;
        case "s":
            var a = new Audio ("src/sounds/tom-2.mp3");
            a.play();
            break;
        case "d":
            var s = new Audio ("src/sounds/tom-3.mp3");
            s.play();
            break;
        case "f":
            var d = new Audio ("src/sounds/tom-4.mp3");
            d.play();
            break;
        case "j" :
            var j = new Audio ("src/sounds/snare.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio ("src/sounds/crash.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio ("src/sounds/kick-bass.mp3");
            l.play();
            break;
        default:
            console.log(innerHtml)
            break;
}
}