import React, { useState } from 'react';
import Footer from '../components/Footer';
import PainStomachache from '../assets/img/pain_stomachache.svg';
import Button from '../components/Button';
import Vector from '../assets/img/blog_vector.svg';
import { BodySvg } from '../components/body';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import zonesOfPain from '../utils/zonesOfPain';

const Stomachache = () => {
    const [openedAccordion, setOpenedAccordion] = useState<number | null>(0);
    const toggleAccordion = (index: number) => {
        if (openedAccordion === index) {
            setOpenedAccordion(null);
        } else {
            setOpenedAccordion(index);
        }
    };
    return (
            <Layout title="Болит живот. О боли в животе">
            <div className="stomachache">
            <Nav/>
            <div className="top_stomachache">
                <div className="top">
                    <p>О боли в животе</p>
                    <div className="rec20"/>
                </div>

                <div className="left_header">
                    <h2>Когда болит живот</h2>
                    <p>Организм может сигнализировать о временных трудностях:</p>
                    <ul>
                        <li>переедание</li>
                        <li>эмоцианально напряжение</li>
                        <li>повышенная физическая нагрузка</li>
                        <li>и о возможном заболевании</li>
                    </ul>

                    <div className="more_details">
                        <Button text="записаться" myStyle="button"/>
                        <a href="/stomachache">причины боли в животе</a>
                        <img src={Vector} alt="more details"/>
                    </div>
                </div>

                <div className="right_header">
                    <div className="rec10"/>
                    <div className="rec12"/>
                    <div className="rec13"/>
                    <img src={PainStomachache} alt="Боль в животе"/>
                </div>
            </div>
            <div className="text_stomachache">
                <BodySvg />
                <div className="container">
                    { zonesOfPain.map((zone, index) => (
                       <React.Fragment key={zone.id}>
                           <button className="collapsible" onClick={() => toggleAccordion(index)}>
                               {zone.title} <br/>({zone.subTitle})
                           </button>
                           <div className="content">
                               {openedAccordion === index && (
                                   <>
                                       <div className="text-content">
                                           {zone.text}
                                       </div>
                                       {/*<Button text="Записаться" myStyle="button"/>*/}
                                   </>
                               )}
                           </div>
                       </React.Fragment>
                    ))}
                    <p>Определить насколько серьезно Ваше заболевание может только врач!
                        Просто ознакомиться с материалом данной статьи и аналогичных сообщений в интернете недостаточно.
                        Каждый человек индивидуален. Болезненные ощущения слабой интенсивности
                        и продолжительности могут сигнализировать о серьезных проблемах.
                        И наооборот - сильные боли быть признаком функциональных нарушений или
                        кратковременных расстройств, легко поддающихся лекарственной терапии.
                        Только сочетание знаний и клинического опыта, данных обследования
                        – залог правильной диагностики, правильного лечения.</p>
                </div>
            </div>

            <Footer/>
        </div>
       </Layout>);
    };
export default Stomachache;
