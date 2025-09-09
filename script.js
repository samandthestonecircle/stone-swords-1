function openMenu(text, menu, otherText, otherMenu){
    document.getElementById(text).style.display = 'none';
    document.getElementById(menu).style.display = 'flex';
    document.getElementById(menu).style.backgroundColor = 'white';
    document.getElementById(menu).style.filter = 'invert()';
    
    document.getElementById(otherMenu).style.display = 'none';
    document.getElementById(otherText).style.display = 'flex';

}

function closeMenus(){
    document.getElementById('socialbar').style.display = 'none';
    document.getElementById('listen').style.display = 'flex';
    document.getElementById('contactbar').style.display = 'none';
    document.getElementById('contact').style.display = 'flex';
}