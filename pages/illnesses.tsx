import React, {useState} from 'react';
import Footer from '../components/Footer';
import Fgds from '../assets/img/fgds.png';
import Rrc from '../assets/img/rrs.png';
import Fks from '../assets/img/fks.png';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import DigestiveSvg from '../components/digestiveSvg';
import diseases from '../utils/diseases';
import {PathStyleInterface, ZoneDiseases} from '../interfaces';

const Illnesses = () => {
    const [openedAccordion, setOpenedAccordion] = useState<ZoneDiseases | null>(diseases[0]);
    const selectedPathStyle: PathStyleInterface = {
        stroke: '#CDD5F0',
        fill: 'CDD5F0',
    };

    const toggleAccordion = (disease: ZoneDiseases) => {
        if (openedAccordion?.id === disease.id) {
            setOpenedAccordion(null);
        } else {
            setOpenedAccordion(disease);
        }
    };
        return (
            <Layout title="Болит живот. Заболевания ЖКТ">
            <div className="illnesses">
                <Nav/>
            <div className="top_ill">

                <h1>Заболевания желудочно-кишечного тракта</h1>
                <div className="rec20"/>
                <p>Эндоскопические методы исследования,
                    позволяющие осмотреть пищевод, желудок, кишечник изнутри, со стороны слизистой оболочки.</p>
            </div>
            <div className="inspection">
                <div className="fgds">
                    <img src={Fgds} alt="ФГДС"/>
                    <h2>фгдс</h2>
                    <p>Осмотр пищевода, желудка и начального отдела (луковицы) двенадцатиперстной кишки</p>
                    <Button text="записаться" myStyle="button"/>
                </div>
                <div className="rrs">
                    <img src={Rrc} alt="РРС"/>
                    <h2>ррс</h2>
                    <p>Осмотр прямой кишки и анального канала с помощью тонкой трубки с оптическим волокном.</p>
                    <Button text="записаться" myStyle="button"/>
                </div>
                <div className="fks">
                    <img src={Fks} alt="ФКС"/>
                    <h2>фкс</h2>
                    <p>Осмотр толстой кишки с помощью длинной трубки с оптическим волокном.</p>
                    <Button text="записаться" myStyle="button"/>
                </div>
            </div>

            <div className="ill_text">
                <DigestiveSvg
                    zones={openedAccordion ? openedAccordion.zones : []}
                    selectedPathStyle={selectedPathStyle}
                />
                <div className="container">
                    { diseases.map(disease => (
                        <React.Fragment key={disease.id}>
                            <button className="collapsible" onClick={() => toggleAccordion(disease)}>
                                {disease.title}
                            </button>
                            <div className="content">
                                {openedAccordion?.id === disease.id && (
                                    <>
                                        <div className="text-content">
                                            {disease.text}
                                        </div>
                                    </>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <Footer/>
        </div>
        </Layout>);
};
export default Illnesses;
