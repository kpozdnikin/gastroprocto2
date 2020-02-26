import React from 'react';
import Footer from "../components/Footer";
import PainStomachache from '../assets/img/pain_stomachache.svg';
import Button from "../components/Button";
import Vector from '../assets/img/blog_vector.svg';
import Organs from '../assets/img/organs.svg';
import Layout from "../components/Layout";
import Nav from "../components/Nav"

const Stomachache = () => {
        return (
            <Layout title='Болит живот. О боли в животе'>
            <div className='stomachache'>
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
                        <Button text='записаться' myStyle='button'/>
                        <a href='/stomachache'>причины боли в животе</a>
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
                    <button className='collapsible'>Болит под ложечкой <br/>(эпигастральная область)</button>
                    <div className='content'>
                        <p> Боли в животе под ложечкой, ноющего характера, могут характеризоваться пациентом как "дискомфорт", "чувство тяжести", возникающие, после приема пищи, сопровождающиеся изжогой более характерны для хронического гастрита.
                            <br/><br/>При плохой работе пищеводно-желудочного клапана - недостаточности кардии - болевые ощущения могут распространяться на область за грудиной, имитировать сердечный приступ. Неприятным сюрпризом может быть запах изо рта.
                            <br/><br/> При остром отравлении продуктами, не предназначенными для приема в пищу или недоброкачественными, боль в животе может быть острой - острый гастрит. Интенсивные и длительные боли позволяют заподозрить не просто острый гастрит, но язву желудка.
                            <br/><br/>ЛЮБАЯ ОСТРАЯ БОЛЬ, ВОЗНИКШАЯ ВПЕРВЫЕ, ТРЕБУЕТ НЕЗАМЕДЛИТЕЛЬНОГО ОБРАЩЕНИЯ К ВРАЧУ ДЛЯ ПОСЛЕДУЮЩЕГО ОБСЛЕДОВАНИЯ</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible'>Болит справа вверху живота, ближе к ребрам.<br/>(область правого подреберья)</button>
                    <div className='content'>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible'>Болит справа или слева сбоку живота. Колет в боку.<br/> (правая или левая боковая область)</button>
                    <div className='content'>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible'>Болит слева или справа внизу живота<br/> (подвздошная область справа или слева)</button>
                    <div className='content'>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible'>Болит низ живота по середине<br/>(надлобковая область)</button>
                    <div className='content'>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible'>Болит в середине живота<br/>(околопупочная область)</button>
                    <div className='content'>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
       </Layout>);
    };
export default Stomachache;