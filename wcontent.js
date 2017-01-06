
//Hide Ads in newsfeed
function clearads() {
    elems = document.getElementsByClassName('advertisement');
    for (a=0; a < elems.length; a++) {
        p = elems[a].parentElement;
        p.hidden = true;
    }
    elems = document.getElementsByClassName('cns-ads-container');
    for (a=0; a < elems.length; a++) {
        p = elems[a].parentElement;
        elems[a].style.width = 0;
        p.hidden = true;
        p.width = 0;
    }
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor ="#FFFFFF"

}
clearads()
document.onload = clearads;
//document.onscroll = clearads;
window.setInterval(function(){
      clearads();
      console.log('int');
}, 500);
