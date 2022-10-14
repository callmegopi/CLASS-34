var movieDetailes = ["comics", "movies", "producers", "films", "actors"]
var movieDetailes = movieDetailes.map((movieDetailes)=>{
    return "TEL - " + movieDetailes
})

for (i = 0; i < movieDetailes.length; i++) {
    console.log(movieDetailes[i])

    var myLi = document.createElement("li")
    var anchorTagELement = document.createElement("a")
    anchorTagELement.innerHTML = movieDetailes[i]
    myLi.appendChild(anchorTagELement)
    document.getElementById("myUl").appendChild(myLi)
}


var anchor = document.createElement("a")
var imgElement = document.createElement("img")
imgElement.setAttribute("src","https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/06/Twitter-Banner.jpg?w=720")
anchor.appendChild(imgElement)
document.getElementById("slider").appendChild(anchor)
