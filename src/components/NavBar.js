import './NavBar.css';

function NavBar() {
  return (
    <header>
<nav class="navbar">
<ul class="navbar__links ">
    <a href="index.html"> <img class="navbarlogo" src="../src/assets/logoipsum-logo-54.svg" alt="navbarlogo" /> </a>
    <li class="navbar__item">
        <a class="navbar__link" href="#">Sobre Nosotros</a>
    </li>
    <li class="navbar__item">
        <a class="navbar__link" href="#">Tienda</a>
    </li>
    <li class="navbar__item">
        <a class="navbar__link" href="#">Contacto</a>
    </li>
    <li class="navbar__item">
        <a class="navbar__link" href="#">Empleos</a>
    </li>
</ul>
</nav>
    </header>
   );
}

export default NavBar;
