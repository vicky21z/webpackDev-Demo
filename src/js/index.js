window.onload = function(){

    var li = document.getElementsByTagName("li");

    // console.error('I get called from print.js!');
    for(var i = 0, length = li.length; i < length; i++){
        if(i % 2 === 0){
            li[i].style.backgroundColor = "lightblue";
        }else {
            li[i].style.backgroundColor = "pink";
        }
    }
}