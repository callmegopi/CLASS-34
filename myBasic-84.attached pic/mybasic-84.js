var allElement = document.getElementsByClassName("myImages")

for (i = 0; i < allElement.length; i++) {
    console.log(allElement[i])

    var imgElement = document.createElement("img")
    imgElement.style.width = "100%"
    var imgNum = Number(i) + 1
    imgElement.setAttribute("src", "./images/" + imgNum + ".jpeg")
    allElement[i].appendChild(imgElement)

}



