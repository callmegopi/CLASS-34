var allElements = document.getElementsByClassName("myImages")
var onlinelinks = ["https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:q-80/et00329656-przcvuftwc-portrait.jpg", "https://assets.gadgets360cdn.com/pricee/assets/product/202205/Major-Poster_1651742450.jpg", "https://1.bp.blogspot.com/-SRVkI1Ibeh8/Xo2_-r3tdsI/AAAAAAAAZpw/lI5sluoo5HUvlS3TBjIx78yrf7aT6RRTgCLcBGAsYHQ/w347/Pushpa-Telugu-Movie-Budget-Hit-or-Flop-Box-Office-Collection-Day-Wise.jpg", "https://ibommatelugu.online/wp-content/uploads/2022/06/K-G-F-Chapter-2-Telugu-2022-230x345-1.jpg"]

for (i = 0; i < onlinelinks.length; i++) {
    console.log(onlinelinks[i])
    var imgElement = document.createElement("img")
    imgElement.style.width="100%"
    imgElement.setAttribute("src", onlinelinks[i])
    allElements[i].appendChild(imgElement)
}