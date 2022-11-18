import './Footer.css';
import '../Header/Header.css';
import telegram from '../../images/telegram.svg';
import viber from '../../images/viber.svg';
import whatsapp from'../../images/whatsapp.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__info'>      
                <h4 className='footer__title'>О КОМПАНИИ</h4>         
                <ul className='footer__list'>                
                    <li className='footer__list-item'>Партнёрская&nbsp;программа</li>
                    <li className='footer__list-item'>Вакансии</li>
                </ul>
            </div>
            <nav className='footer__menu area-menu'>  
             <h4 className='footer__title'>МЕНЮ</h4>                          
                <ul className='footer__list'>                    
                    <li className='footer__list-item'>Расчёт стоимости</li>
                    <li className='footer__list-item'>Услуги</li>
                    <li className='footer__list-item'>Виджеты</li>
                    <li className='footer__list-item'>Интеграции</li>
                    <li className='footer__list-item'>Наши клиенты</li> 
                </ul> 
                </nav>
                <nav className='footer__menu area-menu_type_two'>
                <ul className='footer__list'>            
                    <li className='footer__list-item'>{window.innerWidth < 768 ? "Благодарность клиентов" : "Кейсы"}</li>
                    <li className='footer__list-item'>{window.innerWidth < 768 ? "Кейсы" : "Благодарственные письма"}</li>
                    <li className='footer__list-item'>Сертификаты</li>
                    <li className='footer__list-item'>Блог на Youtube</li>
                    <li className='footer__list-item'>Вопрос / Ответ</li>
                </ul>
            </nav>
            <address className='footer__contacts'>
                <h4 className='footer__title'>КОНТАКТЫ</h4>
                <p className='footer-phone'>+7 555 555-55-55</p>
                <div>
                    <img className='contact-icon footer-icon' src={telegram} alt=''/>
                    <img className='contact-icon footer-icon' src={viber} alt=''/>
                    <img className='contact-icon footer-icon' src={whatsapp} alt=''/>
                </div>                
                <p className='footer__list-item'>Москва, Путевой проезд 3с1, к 902</p>
                
            </address>  
            <p className='footer__capture'>©WELBEX 2022. Все права защищены. Политика конфиденциальности</p>          
        </footer>
    )
}

export default Footer;
