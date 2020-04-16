import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Bottom from '../assets/img/bottom.svg';
import YouTube from '../assets/img/youtube.svg';
import VK from '../assets/img/vk.svg';
import GroupPhoto from '../assets/img/group_photo.png';
import GroupColonos from '../assets/img/group_photo_2.png';
import Ellipse from '../assets/img/Ellipse.svg';
import PhotoDoctor from '../assets/img/photo_pozdnikina.png';
import Map from '../assets/img/map.svg';
import {useState} from 'react';
import Cert_1 from '../assets/img/Cert1.svg';
import Cert_2 from '../assets/img/certif_2.png';
import Cert_3 from '../assets/img/certif_3.png';
import Cert_4 from '../assets/img/certif_4.png';
import Cert_5 from '../assets/img/certif_5.png';
import Cert_6 from '../assets/img/certif_6.png';
import Cert_7 from '../assets/img/certif_6.png';
import Cert_8 from '../assets/img/certif_6.png';

const MapBackground = {
    backgroundImage: `url(${Map})`
};

const IndexPage: NextPage = () => {
  // Для переключения вкладок
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Layout title="Болитживот.рф. Главная.">
      <div className="main">
      <header className="header">
          <Nav/>
        <div className="doctorText">
          <div className="doctorName">Поздникина Ольга</div>
          <div className="yourDoctor">Ваш персональный доктор</div>
          <Button text="получить консультацию" myStyle="button"/>
          <div className="rectangle8">
            <div>Следите за нами</div>
            <img className="header_bottom" src={Bottom} alt="header_bottom" />
            <a href="https://www.youtube.com/channel/UCp8-fpg-BqmVbzE6OV2TU2Q">
              <img src={YouTube} alt="youtube" />
            </a>
            <a href="https://vk.com/gastroprocto">
              <img src={VK} alt="vk" />
            </a>
          </div>
        </div>

        <div className="container_for_rec">
          <div className="rec10"/>
          <div className="rec9"/>
          <div className="rec_light_blue"/>
          <div className="rec30"/>
          <div className="rec9_green"/>
          <div className="rec7"/>
          <div className="photo_doctor">
              <img src={PhotoDoctor} alt="pozdnikina" />
          </div>
        </div>
      </header>

      <section className="welcome">
        <div className="welcome_top">
          <p>Добро пожаловать на мой сайт</p>
          <div className="rec_20" />
        </div>
        <div className="group_docs">
          <div className="rec_11"/>
          <div className="rec_12_bot"/>
          <div className="rec_10">
            <img src={GroupPhoto} alt="групповое фото врачей"/>
          </div>
          <div className="rec_12"/>

        </div>
        <div className="welcome_info">
          <div className="welcome_menu">
            <ul>
              <li onClick={() => setTabIndex(0)}><a>Обо мне</a></li>
              <li onClick={() => setTabIndex(1)}><a>Мои сертификаты</a></li>
              <li onClick={() => setTabIndex(2)}><a>Отзывы</a></li>
            </ul>
          </div>
          <div className="welcome_text">
              { tabIndex === 0 &&
                <>  Меня зовут Поздникина Ольга Юрьевна. Я колопроктолог, врач-эндоскопист высшей квалификационной категории.
                    Это мой личный сайт, где вы можете узнать о моих услугах и получить бесплатную квалифицированную консультациюLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </>
                }
              {
                tabIndex === 1 &&
                <div className="certs">
                    <img src={Cert_1} alt="doctor's certificate" />
                    <img src={Cert_2} alt="doctor's certificate" />
                    <img src={Cert_3} alt="doctor's certificate" />
                    <img src={Cert_4} alt="doctor's certificate" />
                    <img src={Cert_5} alt="doctor's certificate" />
                    <img src={Cert_6} alt="doctor's certificate" />
                    <img src={Cert_7} alt="doctor's certificate" />
                    <img src={Cert_8} alt="doctor's certificate" />
                </div>
              }
              {
                tabIndex === 2 &&
                <>
                    Отзывы
                </>
              }
          </div>
        </div>
        <div className="rectangle_11" />
      </section>

      <section className="quote">
        <div className="text_quote">
          Медицина – это не услуга. Это сочетание своего рода чуда и профессиональных навыков
        </div>
      </section>

      <section className="task-for-me">
        <div className="tfm_rec11">
        </div>
        <div className="tfm_text">
          <p>Главная задача для меня</p>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
          <Button text="получить консультацию" myStyle="button"/>
        </div>
        <div className="docs_wrap">
          <div className="rec_light_blue" />
          <div className="rec_green"/>
          <div className="rec_blue"/>
          <div className="rec_img">
              <img src={GroupColonos} alt="фото доктора"/>
          </div>
        </div>
      </section>

      <section className="map" style={MapBackground}>
        <div className="contacts">
          <div className="small_rec">
          </div>
          <div className="text_container">
            <p>Контакты</p>
            <ul>
              <li>Петрозаводск,<br/> Первомайский пр, 17</li>
              <li>(8142) 71-44-48, <br/> 8 911 400-43-40</li>
              <li>будни с 08:00 до 19:00</li>
            </ul>
          </div>
          <div className="map_pointer">
            <div className="ellipse">
              <img src={Ellipse} alt="адрес"/>
            </div>
            <div className="circle">
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
