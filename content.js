//Hide sidebar ads
elem = document.getElementsByClassName('pagelet-group pagelet');
//elem.pagelet_ego_pane.style.visibility = "hidden";
elems = document.getElementsByClassName('uiStreamSponsoredLink');

//Hide Ads in newsfeed
function clearads() {
    elems = document.getElementsByClassName('uiStreamSponsoredLink');
    for (a=0; a < elems.length; a++) { 
        p = elems[a].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        if (!p.textContent.match("Color Genomics")) {
            p.style.visibility = "hidden";
        }
    }
    elems = document.getElementsByClassName('uiStreamAdditionalLogging');
    for (a=0; a < elems.length; a++) {
        p9=elems[a].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        if (!p9.textContent.match("Color Genomics")) {
             p9.style.visibility = "hidden";
        }
    }
    elems = document.getElementsByClassName('ego_section')
    for (a=0; a < elems.length; a++) {
        elems[a].style.visibility = "hidden";
        elems[a].hidden = true
    }

}
clearads()
document.onload = clearads;
document.onscroll = clearads;
window.setInterval(function(){
      clearads();
}, 500);
