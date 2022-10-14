var h1 = document.createElement("h1")
h1.innerHTML = "Basic-83"
document.getElementById("hgroup").appendChild(h1)

var h2 = document.createElement("h2")
h2.innerHTML = "Free HTML5 Website Template"
document.getElementById("hgroup").appendChild(h2)

var textLinks = ["Home Page", "About", "Login", "User Detailes", "FeedBack"]

for (i = 0; i < textLinks.length; i++) {
    var li = document.createElement("li")
    var anchor = document.createElement("a")
    anchor.innerHTML = textLinks[i]
    li.appendChild(anchor)
    document.getElementById("myUl").appendChild(li)
}

document.getElementById("myBanner").setAttribute("src", "https://laois.ie/wp-content/uploads/SSR-960x280-Horz-Banner-ENG-page-001@2x.jpg")

document.getElementById("myBanner").style.cssText = ` width:100%;height:300px;`



var allSmallImages = document.getElementsByClassName("my32*32-Images")

for (i = 0; i < allSmallImages.length; i++) {
    var imgElement = document.createElement("img")
    imgElement.style.cssText = `width:32px;height:32px;`
    imgElement.setAttribute("src", "https://preview.redd.it/e2b1pbldn5k81.png?auto=webp&s=3dfa1428707e3c6d93eed1da6ec8014bc2e5211c")
    allSmallImages[i].appendChild(imgElement)
}

