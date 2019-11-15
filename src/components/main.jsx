import React from 'react';
import Nav from './nav';
import Button from './button';


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
                    <div className="photo_doctor"><img src='./img/photo_doctor.png'/></div>
                    <div className='rectangle10'></div>
                    <div className='rectangle9'></div>
                    <div className='rectangle8'>
                        <div>
                            <div>Следите за нами</div>
                            <img className='header_bottom' src="/img/bottom.svg"/>
                            <a href="#"><img src="/img/youtube.svg"/></a>
                            <a href="#"><img src="/img/vk.svg"/></a>
                        </div>
                    </div>
                    <div className='rectangle7'></div>
                    <div className='rectangle5'></div>

                </div>
            </header>

            <section className='welcome'>
                <div className='welcome_top'>
                    <p>Добро пожаловать на мой сайт</p><div className='rec_20'></div>
                </div>
                <div className='doc_with_folder'>
                    <div className='rec_11'></div>
                    <div className='rec_10'> <img className='doc_with_folder_photo' src='./img/doc_with_folder.png' alt='фото доктора'></img></div>
                    <div className='rec_11_bot'></div>


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
                <div className='rectangle_11'></div>
            </section>

            <section className='quote'>
                <div className='text_quote'>
                    Медицина – это не услуга. Это сочетание своего рода чуда и профессиональных навыков
                </div>
            </section>

            <section className='task-for-me'>Четвертый блок</section>

            <section className='map'>Карта

            </section>

            <footer className='footer'>
                <div className='footer_container'>
                    <div className='item1'><p>Болит Живот</p>
                        <div className='social'>
                            <a href="#"><img src="/img/footer_youtube.svg" alt='Ютуб'/></a>
                            <a href="#"><img src="/img/footer_vk.svg" alt='Vk'/></a>
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
