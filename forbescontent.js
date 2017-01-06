
//Hide Ads in newsfeed
function clearads() {
    a=document.getElementById('top-fbs-ad-article-sticky-0');
    a.hidden = true;
    elems = document.getElementsByClassName('fbs-ad-rail clearfix');
    for (a=0; a < elems.length; a++) {
        elems[a].hidden = true
    }
    a=document.getElementById('top-fbs-ad-article-sticky-1');
    if (a) {
        a.hidden = true;
        }
    console.log('no a')
    a=document.getElementById('top-fbs-ad-article-sticky-2');
    if (a) {
        a.hidden = true;
        }
}
//clearads()
document.onload = clearads;
//document.onscroll = clearads;
window.setInterval(function(){
      clearads();
}, 2000);
