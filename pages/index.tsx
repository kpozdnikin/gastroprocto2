import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Bottom from '../assets/img/bottom.svg';
import YouTube from '../assets/img/youtube.svg';
import VK from '../assets/img/vk.svg';
import DocWithFolder from '../assets/img/doc_with_folder.png';
import DocHands from '../assets/img/doc_hands.png';
import Ellipse from '../assets/img/Ellipse.svg';
import PhotoDoctor from "../assets/img/photo_doctor.png";
import Map from '../assets/img/map.svg';

const MapBackground = {
    backgroundImage: `url(${Map})`
};

const IndexPage: NextPage = () => {

  return (
    <Layout title="Болитживот.рф. Главная.">
      <div className='main'>
      <header className='header'>
          <Nav/>
        <div className='doctorText'>
          <div className='doctorName'>Поздникина Ольга</div>
          <div className='yourDoctor'>Ваш персональный доктор</div>
          <Button text='получить консультацию' myStyle='button'/>
          <div className='rectangle8'>
            <div>Следите за нами</div>
            <img className='header_bottom' src={Bottom} alt="header_bottom" />
            <a href="https://www.youtube.com/channel/UCp8-fpg-BqmVbzE6OV2TU2Q">
              <img src={YouTube} alt="youtube" />
            </a>
            <a href="https://vk.com/gastroprocto">
              <img src={VK} alt="vk" />
            </a>
          </div>
        </div>

        <div className='container_for_rec'>
          <div className="photo_doctor">
            <img src={PhotoDoctor} alt="pozdnikina" />
          </div>
          <div className='rectangle10'/>
          <div className='rectangle9'/>
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
            <img src={DocWithFolder} alt='фото доктора'/>
          </div>
          <div className='rec_11_bot'/>
        </div>
        <div className='welcome_info'>
          <div className='welcome_menu'>
            <ul>
              <li><a href='/'>Обо мне</a></li>
              <li><a href='/'>Мои сертификаты</a></li>
              <li><a href='/'>Отзывы</a></li>
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

      <section className='task-for-me'>
        <div className='tfm_rec11'>
        </div>
        <div className='tfm_text'>
          <p>Главная задача для меня</p>
          <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
          <Button text='получить консультацию' myStyle='button'/>
        </div>
        <div className='doc_hands'>
          <div className='doc_hands_rec_11'/>
          <div className='doc_hands_rec_10'>
            <img src={DocHands} alt='фото доктора'/>
          </div>
          <div className='doc_hands_rec_10_1'/>
        </div>
      </section>

      <section className='map' style={MapBackground}>
        <div className='contacts'>
          <div className='small_rec'>
          </div>
          <div className='text_container'>
            <p>Контакты</p>
            <ul>
              <li>Петрозаводск, Первомайский пр, 17</li>
              <li>(8142) 71-44-48, <br/> 8 911 400-43-40</li>
              <li>будни с 08:00 до 19:00</li>
            </ul>
          </div>
          <div className='map_pointer'>
            <div className="ellipse">
              <img src={Ellipse} alt='адрес'/>
            </div>
            <div className='circle'>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
    </Layout>
  )
};

export default IndexPage;
