//Hide sidebar ads
elem = document.getElementsByClassName('pagelet-group pagelet');
elem.pagelet_ego_pane.style.visibility = "hidden";
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
}
clearads()
document.onload = clearads;
document.onscroll = clearads;
