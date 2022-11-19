import './Header.css';
import logo from '../../images/logo.svg'
import telegram from '../../images/telegram.svg';
import viber from '../../images/viber.svg';
import whatsapp from'../../images/whatsapp.svg';

function Header() {
    return(
        <header className='header'>
            <div className='header-wrap'>
                <div className='logo-wrap'>
                    <img className='logo' src={logo} alt=''/>
                    <p className='logo__capture'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
                </div>            
                <nav className='menu'>
                    <ul className='menu__list'>
                        <li className='menu__list-item'>Услуги</li>
                        <li className='menu__list-item'>Виджеты</li>
                        <li className='menu__list-item'>Интеграции</li>
                        <li className='menu__list-item'>Кейсы</li>
                        <li className='menu__list-item non-dispayed'>Сертификаты</li>
                    </ul>
                </nav>
            </div>
            <div className='purple-light'></div>
            <div className='purple-ball'></div>
            <address className='contacts'>
                <p className='phone'>+7 555 555-55-55</p>
                <img className='contact-icon' src={telegram} alt='телеграм'/>
                <img className='contact-icon' src={viber} alt='вайбер'/>
                <img className='contact-icon' src={whatsapp} alt='ватсап'/>
            </address>
        </header>
    )
}
export default Header;