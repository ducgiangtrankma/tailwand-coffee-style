const topMenu = document.getElementById('ct-top-menu')
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon')

document.addEventListener('click',(e)=>{
    if(toggleTopMenuIcon.contains(e.target)){
        //Click to icon top menu
        topMenu.classList.toggle('ct-topmenu-expanded')
        topMenu.classList.toggle('hidden')

    }else{
        //click outside from icon
        if(topMenu.classList.contains('ct-topmenu-expanded')){
            topMenu.classList.remove('ct-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})