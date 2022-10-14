for (i = 0; i < 5; i++) {
    console.log(i)
    var myLi = document.createElement("li")
    var myanchor = document.createElement("a")
    myanchor.innerText = "Text Link"
    myLi.appendChild(myanchor)
    document.getElementById("myUl").appendChild(myLi)
}


var allElements = document.getElementsByClassName("myImages")
var onlineLinks = ["https://www.movienewsletters.net/photos/306752R1.JPG", "https://static.toiimg.com/photo/msid-80265987/80265987.jpg", "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/14/Naga-Chaitanya-Sai-Pallavi-and-Sekhar-Kammula-s-Love-Story-Movie-First-Look-and-Sankranthi-Poster-.jpg?quality=80&zoom=1&ssl=1", "https://bingeddata.s3.amazonaws.com/uploads/2021/10/love-story.jpg"]

for (i = 0; i < onlineLinks.length; i++) {
    console.log(onlineLinks[i])

    var imgElement = document.createElement("img")
    imgElement.setAttribute("src", onlineLinks[i])
    imgElement.style.width = "100%"
    allElements[i].appendChild(imgElement)
}

var anchorTag = document.createElement("a")
var imgElement = document.createElement("img")
imgElement.style.width = "100%"
imgElement.style.height = "400px"
imgElement.setAttribute("src", "http://cinebuds.com/wp-content/uploads/2021/04/Aha-Upcoming-Telugu-Movies-Release-Dates-with-Link.jpg")
anchorTag.appendChild(imgElement)
document.getElementById("slider").appendChild(anchorTag)