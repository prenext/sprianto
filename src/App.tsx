import AppBar from './components/containers/AppBar';
import NavBar from './components/containers/NavBar';
import NavLink from './components/links/NavLink';
import IconButton from './components/buttons/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HandleShowNavClick = () =>{
   const navbar = document.getElementById('navbar');
   if(navbar){
      navbar.classList.toggle("showNavBar");
   }
}

function App() {
  return (
    <div>
      <AppBar>
            <IconButton onClick={HandleShowNavClick}>
                  <FontAwesomeIcon icon="bars" /> 
            </IconButton>            
            <NavBar id='navbar'>
                  <NavLink>Home</NavLink>
                  <NavLink>Services</NavLink>
                  <NavLink>Customers</NavLink>
                  <NavLink>Contacts US</NavLink>
                  <NavLink>About</NavLink>
            </NavBar>
      </AppBar>
      <main>
     
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
