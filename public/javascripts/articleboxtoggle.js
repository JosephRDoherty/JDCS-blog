

function toggleArticlebox(){
    let title = getID("articlebox-title");
    let dropdown = getID("articledropdown");

    let isDisabled = title.classList.contains("displayOff") && dropdown.classList.contains("displayOff");

    
}


getID("articlebox-xbtn").addEventListener("click", toggleArticlebox);