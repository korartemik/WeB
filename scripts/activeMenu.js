const menuItems = document.querySelector('.navigation').getElementsByClassName("non-active");
for(i=0; i<menuItems.length; i=i+1){

    if(menuItems[i].href.split("?")[0] == document.location.href.split("?")[0]){
        menuItems[i].className = "active";
        break;
    }
}
