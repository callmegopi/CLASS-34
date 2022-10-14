var movieDetailes = ["comics","movis","directors","films","producers"]
// var movieDetailes = movieDetailes.map((movieDetailes)=>{
//     return "TEL - " +movieDetailes
// })

for(i=0;i<movieDetailes.length;i++) {
    console.log(movieDetailes[i])

    var myLi = document.createElement("li")
    var anchorElement = document.createElement("a")
    anchorElement.innerHTML = movieDetailes[i]
    myLi.appendChild(anchorElement)
   document.getElementById("myUl").appendChild(myLi)
}