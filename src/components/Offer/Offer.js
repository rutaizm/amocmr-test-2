import './Offer.css';

function Offer() {

    return (
        <div className='offer'>
                <p className='offer-header'>Вместе с <span className='gradient-text offer-text'>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</p>
                <ul className='offer-list'>
                    <li className='offer-list-item'>
                        <h4 className='offer-list__mobile'>SKYPE&nbsp;АУДИТ</h4>
                        <h4 className='offer-list__header'>ВИДЖЕТЫ</h4>
                        <p className='offer-list__text'>30 готовых решений</p>
                    </li>
                    <li className='offer-list-item'>
                        <h4 className='offer-list__mobile'>30&nbsp;ВИДЖЕТОВ</h4>
                        <h4 className='offer-list__header'>DASHBOARD</h4> 
                        <p className='offer-list__text'>с показателями вашего&nbsp;бизнеса</p>
                    </li>
                    <li className='offer-list-item'>
                        <h4 className='offer-list__mobile'>DASHBOARD</h4>
                        <h4 className='offer-list__header'>SKYPE&nbsp;АУДИТ</h4>
                        <p className='offer-list__text'>отдела&nbsp;продаж и&nbsp;CRM&nbsp;системы</p>
                    </li>
                    <li className='offer-list-item'>
                        <h4 className='offer-list__mobile'>МEСЯЦ&nbsp;AMOCRM</h4>
                        <h4 className='offer-list__header'>35 ДНЕЙ</h4> 
                        <p className='offer-list__text'>использования CRM</p>
                    </li>
                </ul>
                <button className='offer-button' type='submit'>Получить консультацию</button>
            </div>
    )
}

export default Offer;