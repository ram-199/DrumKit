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
        case "w":
            var w = new Audio ("sounds/tom-1.mp3");
            w.play();
            break;
        case "a":
            var a = new Audio ("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var s = new Audio ("sounds/tom-3.mp3");
            s.play();
            break;
        case "d":
            var d = new Audio ("sounds/tom-4.mp3");
            d.play();
            break;
        case "j" :
            var j = new Audio ("sounds/snare.mp3");
            j.play();
            break;
        case "k":
            var k = new Audio ("sounds/crash.mp3");
            k.play();
            break;
        case "l":
            var l = new Audio ("sounds/kick-bass.mp3");
            l.play();
            break;
        default:
            console.log(innerHtml)
            break;
}
}