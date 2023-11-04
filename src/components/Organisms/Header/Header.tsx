import Logo from './_partials/Logo'
import Menu from './_partials/Menu'

const Header = () => {
  return (
    <header className="flex items-center p-30">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header
