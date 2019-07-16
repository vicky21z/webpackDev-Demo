import $ from "jquery";
import "./js/index.js";
import "./css/index.css";

$(function(){
    $("div").css({"backgroundColor": "pink", "border": "10px solid black"});
})
class Person {
    static info = {
        name: "mike",
        age: 15
    }
}
console.log(Person.info);