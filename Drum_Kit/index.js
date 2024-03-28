//Detecting Button Press

const numberOfButtons = document.querySelectorAll(".drum").length;
// 設定變數 numberOfButtons 為所有 drum div 的總數量
for (var i = 0; i < numberOfButtons; i++) {
//使用 for loop，遍歷 drum 所有的 div（querySelectorAll(".drum")[i]），皆產生互動   
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //點擊 button 後觸發互動，要使用 addEventListener(type, listener)
    //使用 querySelectorAll(".drum") 指定 drum 的 div，在點擊 button 後觸發互動    
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML);
    });
}
//Detecting Keyboard Press

//syntax: element.addEventListener(event, function)
//refer to https://www.w3schools.com/jsref/met_element_addeventlistener.asp
//refer to https://www.w3schools.com/jsref/dom_obj_event.asp
document.addEventListener("keypress", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch (key) { //使用 switch 可以根據點擊不同 button 而設置不同的互動
        case "w": //點擊 w 按鈕，發出 tom-1.mp3 的聲音
            var tom1 = new Audio("sounds/tom-1.mp3");
            //設定變數 tom1 為 Audio tom-1.mp3 的聲音
            tom1.play(); //使用 play() method 播放 tom-1.mp3 的聲音
            break; //停止
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        
        default: console.log(buttonInnerHTML); 
    
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}