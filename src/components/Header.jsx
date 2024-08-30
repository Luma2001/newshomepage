import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-8">
      <img src={logo} alt="Logo de News" />
        
        <NavBar/>
    </header>
  )
}



//rafce abreviatura para crear el componente :ES7+react/redux