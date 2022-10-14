var movieDetailes = ["comics","actors", "directors","producers","films"]
var bannerlink = ["https://designwizard.com/blog/banner-sizes/banner-size_1650380767674.jpg"]


for(i=0;i<movieDetailes.length;i++) {
    console.log(movieDetailes[i])
    var li = document.createElement("li")
    var anchor = document.createElement("a")
    anchor.innerHTML = movieDetailes[i]
    li.appendChild(anchor)
    document.getElementById("myUL").appendChild(li)
}

for(i=0;i<bannerlink.length;i++) {
    var imgElement = document.createElement("img")
    imgElement.setAttribute("src",bannerlink[i])
    imgElement.style.width="100%"
    imgElement.style.height="300px"
    document.getElementById("slider").appendChild(imgElement)
    
}