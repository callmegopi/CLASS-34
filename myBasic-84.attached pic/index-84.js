var allElements = document.getElementsByClassName("myImages")

for (i = 0; i < allElements.length; i++) {
    console.log(allElements[i])

    var imgElement = document.createElement("img")
    imgElement.style.width = "100%"
    var imgNum = Number(i) + 1
    imgElement.setAttribute("src", "./images/" + imgNum + ".jpeg")
    allElements[i].appendChild(imgElement)
}