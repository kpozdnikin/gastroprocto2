import React from 'react';
import FooterYoutube from '../assets/img/footer_youtube.svg';
import FooterVK from '../assets/img/footer_vk.svg';

export default class Footer extends React.Component {
    render(){
        return <footer className='footer'>
            <div className='footer_container'>
                <div className='item1'><p>Болит Живот</p>
                    <div className='social'>
                        <a href="#">
                            <img src={FooterYoutube} alt='Ютуб' />
                        </a>
                        <a href="#">
                            <img src={FooterVK} alt='Vk'/>
                        </a>
                    </div>
                    <p>Политика конфиденциальности</p>
                </div>
                <div className='item2'>Контакты:
                    <ul>
                        <li>185001, Республика Карелия, город Петрозаводск</li>
                        <li>Первомайский проспект, дом 17</li>
                        <li>НУЗ Отделенческая клиническая больница на ст. Петрозаводск</li>
                    </ul>
                </div>
                <div className='item3'>Режим работы:
                    <ul>
                        <li>будни с 08:00 до 19:00</li>
                        <li>сб, вс выходные</li>
                        <p>Все права защищены</p>
                    </ul>
                </div>
            </div>
        </footer>
    }
}

