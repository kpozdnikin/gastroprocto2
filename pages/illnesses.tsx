import React, {useState} from 'react';
import Footer from '../components/Footer';
import Fgds from '../assets/img/fgds.png';
import Rrc from '../assets/img/rrs.png';
import Fks from '../assets/img/fks.png';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import DigestiveSvg from '../components/digestiveSvg';


const Illnesses = () => {

    const [active, setActive] = useState("");
    const [active2, setActive2] = useState("");
    const [active3, setActive3] = useState("");
    const [active4, setActive4] = useState("");
    const [active5, setActive5] = useState("");
    const [active6, setActive6] = useState("");
    const [active7, setActive7] = useState("");

        return (
            <Layout title="Болит живот. Заболевания ЖКТ">
            <div className="illnesses">
                <Nav/>
            <div className="top_ill">

                <h1>Заболевания желудочно-кишечного тракта</h1>
                <div className='rec20'/>
                <p>Эндоскопические методы исследования,
                    позволяющие осмотреть пищевод, желудок, кишечник изнутри, со стороны слизистой оболочки.</p>
            </div>
            <div className='inspection'>
                <div className='fgds'>
                    <img src={Fgds} alt='ФГДС'/>
                    <h2>фгдс</h2>
                    <p>Осмотр пищевода, желудка и начального отдела (луковицы) двенадцатиперстной кишки</p>
                    <Button text='записаться' myStyle='button'/>
                </div>
                <div className='rrs'>
                    <img src={Rrc} alt='РРС'/>
                    <h2>ррс</h2>
                    <p>Осмотр прямой кишки и анального канала с помощью тонкой трубки с оптическим волокном.</p>
                    <Button text='записаться' myStyle='button'/>
                </div>
                <div className='fks'>
                    <img src={Fks} alt='ФКС'/>
                    <h2>фкс</h2>
                    <p>Осмотр толстой кишки с помощью длинной трубки с оптическим волокном.</p>
                    <Button text='записаться' myStyle='button'/>
                </div>
            </div>

            <div className="ill_text">
                <DigestiveSvg />
                <div className='illnesses_list'>
                    <button className='collapsible' onClick={() => {setActive(active===""?"show":"")}}>Гастрит</button>
                    <div className={`content ${active}`}>
                        <p>Гастрит - это воспаление слизистой оболочки желудка. Острое воспаление слизистой оболочки желудка,
                            острый гастрит, возникает в следствие непродолжительного действия раздражителей: химических веществ,
                            некоторых лекарственных препаратов, недоброкачественной пищи и др. Если слизистая воспаляется неоднократно,
                            то происходит ее структурная перестройка или атрофия – развивается хронический гастрит.
                            При гастрите, как остром, так и хроническом, болевые ощущения локализованы, преимущественно,
                            в верхних отделах живота («под ложечкой»). Интенсивность болей при остром гастрите может быть выраженной,
                            характерным признаком является возникновение или усиление болей после приема пищи.
                            При хроническом гастрите пациент характеризует болевые ощущения как чувство тяжести,
                            дискомфорт, «ноет», «давит». Сопровождаются они изжогой, реже отрыжкой, иногда пациента «мутит».
                            Тошнота и рвота указывает на присоединение вторичного раздражения поджелудочной железы. Диагностика как острого, так и хронического гастрита осуществляется на основании совокупности жалоб пациента и данных эндоскопического исследования - фиброгастроскопии (ФГДС). Данное исследование позволяет осмотреть слизистую оболочку, выявить воспаление, уточнить : какие отделы желудка поражены, провести забор материала (биопсию) для гистологического подтверждения диагноза и тестирования на наличие микроорганизмов «Хеликобактер пилори», вызывающих и поддерживающих воспаление. Знание данного вопроса поможет Вашему лечащему врачу оценить необходимость назначения антибиотиков. Кроме того, при хроническом гастрите нарушается продукция оболочкой желудка химических веществ и гормонов. Наибольшее внимание уделяется нарушению кислотопродуцирующей функции. Для терапевта, назначающего лечение, необходимо знать : повышена кислотность желудочного содержимого или понижена, т.к. лекарственные препараты в этих случаях назначаются диаметрально противоположного действия. Такую информацию можно получить при проведении ФГДС с оценкой кислотопродуцирующей функции.</p>
                    </div>
                    <button className='collapsible' onClick={() => {setActive2(active2===""?"show":"")}}>Язва</button>
                    <div className={`content ${active2}`}>
                        <p>Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва </p>
                    </div>
                    <button className='collapsible' onClick={() => {setActive3(active3===""?"show":"")}}>Холецистит</button>
                    <div className={`content ${active3}`}>
                        <p>Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит </p>
                    </div>
                    <button className='collapsible' onClick={() => {setActive4(active4===""?"show":"")}}>Панкреатит</button>
                    <div className={`content ${active4}`}>
                        <p>ПанкреатитПанкреатитПанкреатитПанкреатитПанкреатитПанкреатитПанкреатитПанкреатит</p>
                    </div>
                    <button className='collapsible' onClick={() => {setActive5(active5===""?"show":"")}}>Гепатит</button>
                    <div className={`content ${active5}`}>
                        <p>ГепатитГепатитГепатитГепатитГепатитГепатит  ГепатитГепатитГепатитГепатитГепатит</p>
                    </div>
                    <button className='collapsible' onClick={() => {setActive6(active6===""?"show":"")}}>Колит</button>
                    <div className={`content ${active6}`}>
                        <p>КолитКолитКолитКолитКолитКолит Колит super Колит  Колит Колит  Колит Колит  Колит Колит </p>
                    </div>
                    <button className='collapsible' onClick={() => {setActive7(active7===""?"show":"")}}>Синдром раздраженной кишки (СРК)</button>
                    <div className={`content ${active7}`}>
                        <p> Синдром раздраженной кишки (СРК)v  Синдром раздраженной кишки (СРК)Синдром раздраженной кишки (СРК)  Синдром раздраженной кишки (СРК)   </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>;
            </Layout>)
    };
export default Illnesses;
