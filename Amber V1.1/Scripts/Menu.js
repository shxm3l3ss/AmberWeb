
const Menu = document.querySelector('.Nav_bar');

const Menubuttons = document.querySelector('.Nav_bar_buttons')

const Openbutton = document.querySelector('.fa-bars')

const Closebutton = document.querySelector('.fa-times')

const openMenu = document.querySelector('.openmenu');

const closeMenu = document.querySelector('.closemenu');

openMenu.addEventListener('click',showM);

closeMenu.addEventListener('click',closeM);

function showM (){

    Menu.style.height = '900px';

    Menu.style.position = 'fixed';

    Menu.style.width = '96%';

    Menu.style.transitionDuration =  '200ms';

    Menu.style.flexDirection = 'column';

    Openbutton.style.display = 'none';

    Closebutton.style.display = 'inline';

    Menubuttons.style.transition = '200ms';

    Menubuttons.style.display = 'flex';

    Menubuttons.style.flexDirection = 'column';

    Menubuttons.style.justifyContent = 'space-between';

    Menubuttons.style.height = '100%'

}

function closeM (){

    Menu.style.height = '60px';

    Menu.style.width = 'auto';

    Menu.style.flexDirection = 'row';

    Openbutton.style.display = 'inline-block';

    Closebutton.style.display = 'none';

    Menubuttons.style.display = 'none';

    Menu.style.position = 'static';

}