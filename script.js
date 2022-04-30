"use strict"

var form = document.querySelector("form")
var vardas = document.getElementById("name")
var surname = document.getElementById("surname")
 var input = document.getElementsByTagName("input")
var age = document.getElementById("age")
var addButton = document.getElementById("prideti")
var removeButtonFirst = document.getElementById("istrinti-pirma")
var removeButtonLast = document.getElementById("istrinti-paskutini")
var table = document.querySelector("table")
// var trFirst = document.querySelectorAll("tr")[1]
// var trLast = document.querySelectorAll("tr")[3]


//  prideti 
addButton.addEventListener("click",function(e){
    e.preventDefault()
    if(vardas.value){
        var createTr = document.createElement("tr")
        table.append(createTr)
    var createTd = document.createElement("td") 
    createTd.innerHTML = vardas.value
    table.append(createTd)
  
 
}
     

     if(surname.value){
    var createTd = document.createElement("td") 
    createTd.innerHTML =  surname.value
    table.append(createTd)
} 
else {
    alert ("Iveskite duomenis visur")
  }
 

  if(age.value > 0){
    var createTd = document.createElement("td") 
    createTd.innerHTML =  age.value
    table.append(createTd)
}else  if (age.value <=0){
   
    alert ("amzius  netinkamas")
 


}




})

// istrinti  pirma :  

removeButtonFirst.addEventListener("click",function(e){
  var tdFirst = document.querySelector("td")
  tdFirst.remove(table)
  var trFirst = document.querySelector("tr:not(:first-child)")
  trFirst.remove(table)

 
})

// istrinti  paskutini :  

removeButtonLast.addEventListener("click",function(e){
    var tdLast = document.querySelectorAll("td")[3]
    tdLast.remove(table)
  
 
})

