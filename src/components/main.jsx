import React from 'react';
import Nav from './nav';
import Button from './button';
import PhotoDoctor from '../assets/img/photo_doctor.png';
import Bottom from '../assets/img/bottom.svg';
import YouTube from '../assets/img/youtube.svg';
import VK from '../assets/img/vk.svg';
import DocWithFolder from '../assets/img/doc_with_folder.png';
import FooterYoutube from '../assets/img/footer_youtube.svg';
import FooterVK from '../assets/img/footer_vk.svg';

export default class Main extends React.Component{
    render(){
        return <div className='main'>
            <header className='header'>
                <Nav/>
                <div className='container'>
                    <div className='doctorText'>
                        <div className='doctorName'>Поздникина Ольга</div>
                        <div className='yourDoctor'>Ваш персональный доктор</div>
                    <Button text='получить консультацию' style='button'/>
                    </div>
                    <div className="photo_doctor">
                        <img src={PhotoDoctor} alt="pozdnikina" />
                    </div>
                    <div className='rectangle10'/>
                    <div className='rectangle9'/>
                    <div className='rectangle8'>
                        <div>
                            <div>Следите за нами</div>
                            <img className='header_bottom' src={Bottom} alt="header_bottom" />
                            <a href="#">
                                <img src={YouTube} alt="youtube" />
                            </a>
                            <a href="#">
                                <img src={VK} alt="vk" />
                            </a>
                        </div>
                    </div>
                    <div className='rectangle7'/>
                    <div className='rectangle5'/>

                </div>
            </header>

            <section className='welcome'>
                <div className='welcome_top'>
                    <p>Добро пожаловать на мой сайт</p>
                    <div className='rec_20' />
                </div>
                <div className='doc_with_folder'>
                    <div className='rec_11'/>
                    <div className='rec_10'>
                        <img className='doc_with_folder_photo' src={DocWithFolder} alt='фото доктора' />
                    </div>
                    <div className='rec_11_bot'/>


                </div>
                <div className='welcome_info'>
                    <div className='welcome_menu'>
                        <ul>
                            <li><a href='#'>Обо мне</a></li>
                            <li><a href='#'>Мои сертификаты</a></li>
                            <li><a href='#'>Отзывы</a></li>
                        </ul>
                    </div>
                    <div className='welcome_text'>Меня зовут Поздникина Ольга Юрьевна. Я колопроктолог, врач-эндоскопист высшей квалификационной категории.
                        Это мой личный сайт, где вы можете узнать о моих услугах и получить бесплатную квалифицированную консультациюLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </div>
                </div>
                <div className='rectangle_11' />
            </section>

            <section className='quote'>
                <div className='text_quote'>
                    Медицина – это не услуга. Это сочетание своего рода чуда и профессиональных навыков
                </div>
            </section>
            <section className='task-for-me'>Четвертый блок</section>
            <section className='map'>Карта</section>
            <footer className='footer'>
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
                            <li>НУЗ Отделенческая клиническая больница на ст.</li>
                            <li>Петрозаводск</li>
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
        </div>;
    }
}
