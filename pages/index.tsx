import React, { useState } from 'react';
import Layout from '../components/Layout';
import Certs from '../components/Certs';
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
          <h1 className="doctorName">Поздникина Ольга</h1>
          <h2 className="yourDoctor">Ваш персональный доктор</h2>
          <Button text="получить консультацию" myStyle="button" link="https://vk.com/gastroprocto" targetBlank />
          <div className="rectangle8">
            <div>Следите за нами</div>
            <img className="header_bottom" src={Bottom} alt="header_bottom" />
            <a href="https://www.youtube.com/channel/UCp8-fpg-BqmVbzE6OV2TU2Q" target="_blank" rel="noopener noreferer">
              <img src={YouTube} alt="youtube" />
            </a>
            <a href="https://vk.com/gastroprocto" target="_blank" rel="noopener noreferer">
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
              <li onClick={() => setTabIndex(0)}><a className={tabIndex === 0 ? 'active' : ''}>Обо мне</a></li>
              <li onClick={() => setTabIndex(1)}><a className={tabIndex === 1 ? 'active' : ''}>Мои сертификаты</a></li>
              {/* <li onClick={() => setTabIndex(2)}><a>Отзывы</a></li> */}
            </ul>
          </div>
          <div className="welcome_text">
              { tabIndex === 0 &&
                <>
                    <p>Поздникина Ольга Юрьевна, 1967 г. рождения, в 1991году окончила медицинский факультет</p>
                    <p>Петрозаводского государственного университета,получив диплом врача по специальности «Лечебное дело».</p>
                    <p>По окончании учебы – 1991-1992г. проходила интернатуру по терапии</p>
                    <p>в качестве врача-интерна на базе Больницы Скорой медицинской помощи города Петрозаводска.</p>
                    <p> В 1993г. закончила курсы первичной специализации по эндоскопии на базе БСМП г. Петрозаводска.</p>
                    <p>В последующем регулярно проходила сертификационные курсы повышения квалификации</p>
                    <p>по «Эндоскопической диагностике и лечебно-оперативной эндоскопии».</p>
                    <p>В 1994г. прошла курсы усовершенствования по </p>
                    <p>«Методам диагностики и лечения злокачественных опухолей» – 1.5 месяца</p>
                    <p>и «Паллиативному и симптоматическому лечению в онкологии» - 1 месяц</p>
                    <p>при Академии постдипломного образования г. Санкт-Петербурга.</p>
                    <p>С 1995г. по настоящее время работаю врачом - эндоскопистом –</p>
                    <p>ЧУЗ «Клиническая Больница РЖД медицина» на ст. Петрозаводск.</p>
                    <p>В 2007г. прошла специализацию по специальности «Колопроктология»</p>
                    <p>и веду амбулаторный прием в Железнодорожной поликлинике в качестве врача-колопроктолога.</p>
                    <p>Аттестована высшую квалификационную категорию по специальности «Эндоскопия».</p>
                    <p>С 2004 года являюсь членом общества «Эндоскопическая хирургия».</p>
                    <p>В 2001г поступила в заочную аспирантуру ПетрГУ по специальности «Хирургия»,</p>
                    <p>которую закончила досрочно в 2004г. в связи с защитой диссертации</p>
                    <p>на соискание ученой степени кандидата медицинских наук по теме:</p>
                    <p>«Эндоскопия в диагностике состояния культи желудка в отдаленные сроки после резекций».</p>
                    <p>В 2015г. награждена знаком «За безупречный труд на железнодорожном транспорте».</p>
                    <p>В 2017г. – присвоено звание «Заслуженный врач республики Карелия».</p>
                  <br />
                  <p>
                    Это мой личный сайт, где вы можете узнать о моих услугах и получить бесплатную квалифицированную консультацию.
                  </p>
                </>
                }
              {
                tabIndex === 1 &&
                <Certs />
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
          <div className="text">
            Когда-то, у одного умного доктора, я прочитала фразу, что главная задача врача:
            “Помочь пациенту быть здоровым”. Я с ним полностью согласна.
          </div>
          <Button text="получить консультацию" myStyle="button" link="https://vk.com/gastroprocto" targetBlank />
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
              <li><a href="tel: (8142) 71-44-48">(8142) 71-44-48</a>, <br/> <a href="tel: 8 911 400-43-40">8 911 400-43-40</a></li>
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
  );
};

export default IndexPage;
