import React from 'react';
import Nav from './nav';
import Footer from "./footer";
import PainStomachache from '../assets/img/pain_stomachache.svg';
import Button from "./button";
import Vector from '../assets/img/blog_vector.svg';
import Organs from '../assets/img/organs.svg';

export default class Stomachache extends React.Component {
    render() {
        return <div className='stomachache'>
            <Nav/>
            <div className='top_stomachache'>
                <div className='top'>
                    <p>О боли в животе</p>
                    <div className='rec20'/>
                </div>

                <div className='left_header'>
                    <h2>Когда болит живот</h2>
                    <p>Организм может сигнализировать о временных трудностях:</p>
                    <ul>
                        <li>переедание</li>
                        <li>эмоцианально напряжение</li>
                        <li>повышенная физическая нагрузка</li>
                        <li>и о возможном заболевании</li>
                    </ul>

                    <div className='more_details'>
                        <Button text='записаться' style='button'/>
                        <a href='#'>причины боли в животе</a>
                        <img src={Vector} alt='more details'/>
                    </div>
                </div>

                <div className='right_header'>
                    <div className='rec10'/>
                    <div className='rec12'/>
                    <div className='rec13'/>
                    <img src={PainStomachache} alt='Боль в животе'/>
                </div>
            </div>
            <div className='text_stomachache'>
                <img src={Organs} alt='картинка брюшной полости'/>
                <div className='container'>
                    <div className='top_text'>
                        <p className='active'>Болит под ложечкой <br/>(эпигастральная область)</p>
                        <ul>
                            <li>Боли в животе под ложечкой, ноющего характера, могут характеризоваться пациентом как "дискомфорт", "чувство тяжести", возникающие, после приема пищи, сопровождающиеся изжогой более характерны для хронического гастрита.</li>
                            <li>При плохой работе пищеводно-желудочного клапана - недостаточности кардии - болевые ощущения могут распространяться на область за грудиной, имитировать сердечный приступ. Неприятным сюрпризом может быть запах изо рта.</li>
                            <li>При остром отравлении продуктами, не предназначенными для приема в пищу или недоброкачественными, боль в животе может быть острой - острый гастрит. Интенсивные и длительные боли позволяют заподозрить не просто острый гастрит, но язву желудка.</li>
                            <li>ЛЮБАЯ ОСТРАЯ БОЛЬ, ВОЗНИКШАЯ ВПЕРВЫЕ, ТРЕБУЕТ НЕЗАМЕДЛИТЕЛЬНОГО ОБРАЩЕНИЯ К ВРАЧУ ДЛЯ ПОСЛЕДУЮЩЕГО ОБСЛЕДОВАНИЯ</li>
                        </ul>
                        <Button text='Записаться' style='button'/>
                        <p>Болит справа вверху живота, ближе к ребрам.<br/>(область правого подреберья)</p>
                        <p>Болит справа или слева сбоку живота. Колет в боку.<br/>(правая или левая боковая область)</p>
                        <p>Болит слева или справа внизу живота.<br/>(подвздошная область справа или слева)</p>
                        <p>Болит низ живота по середине.<br/>(надлобковая область)</p>
                        <p>Болит в середине живота.<br/>(околопупочная область)</p>

                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    }
}