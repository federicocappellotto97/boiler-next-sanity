import Logo from "./_partials/Logo"
import Menu from "./_partials/Menu"

const Header = () => {
  return (
    <header className="p-30 flex items-center">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
