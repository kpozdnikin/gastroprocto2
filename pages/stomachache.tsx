import React, {useState} from 'react';
import Footer from '../components/Footer';
import PainStomachache from '../assets/img/pain_stomachache.svg';
import Button from '../components/Button';
import Vector from '../assets/img/blog_vector.svg';
import { BodySvg } from '../components/body';
// import Organs from '../assets/img/organs.svg';
import Layout from "../components/Layout";
import Nav from "../components/Nav"

const Stomachache = () => {
        // @ts-ignore
    const [active, setActive] = useState("");
    const [active2, setActive2] = useState("");
    const [active3, setActive3] = useState("");
    const [active4, setActive4] = useState("");
    const [active5, setActive5] = useState("");
    const [active6, setActive6] = useState("");

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
                <BodySvg />
                <div className='container'>
                    <button className='collapsible' onClick={()=>setActive(active==="show"?"":"show")}>Болит под ложечкой <br/>(эпигастральная область)</button>
                    <div className={`content ${active}`} >
                        <p> Боли в животе под ложечкой, ноющего характера, могут характеризоваться пациентом как "дискомфорт", "чувство тяжести", возникающие, после приема пищи, сопровождающиеся изжогой более характерны для хронического гастрита.
                            <br/><br/>При плохой работе пищеводно-желудочного клапана - недостаточности кардии - болевые ощущения могут распространяться на область за грудиной, имитировать сердечный приступ. Неприятным сюрпризом может быть запах изо рта.
                            <br/><br/> При остром отравлении продуктами, не предназначенными для приема в пищу или недоброкачественными, боль в животе может быть острой - острый гастрит. Интенсивные и длительные боли позволяют заподозрить не просто острый гастрит, но язву желудка.
                            <br/><br/>ЛЮБАЯ ОСТРАЯ БОЛЬ, ВОЗНИКШАЯ ВПЕРВЫЕ, ТРЕБУЕТ НЕЗАМЕДЛИТЕЛЬНОГО ОБРАЩЕНИЯ К ВРАЧУ ДЛЯ ПОСЛЕДУЮЩЕГО ОБСЛЕДОВАНИЯ</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible' onClick={()=>setActive2(active2==="show"?"":"show")}>Болит справа вверху живота, ближе к ребрам.<br/>(область правого подреберья)</button>
                    <div className={`content ${active2}`}>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible' onClick={()=>setActive3(active3==="show"?"":"show")}>Болит справа или слева сбоку живота. Колет в боку.<br/> (правая или левая боковая область)</button>
                    <div className={`content ${active3}`}>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible' onClick={()=>setActive4(active4==="show"?"":"show")}>Болит слева или справа внизу живота<br/> (подвздошная область справа или слева)</button>
                    <div className={`content ${active4}`}>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible' onClick={()=>setActive5(active5==="show"?"":"show")}>Болит низ живота по середине<br/>(надлобковая область)</button>
                    <div className={`content ${active5}`}>
                        <p>Какой-то текст</p>
                        <Button text='Записаться' myStyle='button'/>
                    </div>
                    <button className='collapsible' onClick={()=>setActive6(active6==="show"?"":"show")}>Болит в середине живота<br/>(околопупочная область)</button>
                    <div className={`content ${active6}`}>
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