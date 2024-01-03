import './Header.css';

const Header = () => {
  return (
      <header className="header">
            <div className='header__section'>
              <div>
                <img className='header__logo' src={require('../Images/logo.svg').default} alt='logo' />
              </div>
              <div className='header__date'>Date</div>
            </div>
            <div className='header__section'>
              <button type='button' className='header__button_add-clothes'>Add New Clothes</button>
              <div className='header__title'>Terrence Tegegne</div>
              <div className='header__avatar'>
                <img src={require('../Images/avatar.svg').default} alt='avatar' />
              </div>
            </div>
          </header>
  )
}

export default Header