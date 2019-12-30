import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Fgds from '../assets/img/fgds.png';
import Rrc from '../assets/img/rrs.png';
import Fks from '../assets/img/fks.png';
import Button from "./button";
import Organs from '../assets/img/organs.svg';

export default class Illnesses extends React.Component{

render(){
        return <div className='illnesses'>
            <Nav/>
            <div className='top_ill'>
                <h1>Заболевания желудочно-кишечного тракта</h1>
                <div className='rec20'/>
                <p>Эндоскопические методы исследования, позволяющие осмотреть пищевод, желудок, кишечник изнутри, со стороны слизистой оболочки.</p>
            </div>
            <div className='inspection'>
                <div className='fgds'>
                    <div className='rec20'/>
                    <div className='rec21'/>
                    <img src={Fgds} alt='ФГДС'/>
                    <h2>фгдс</h2>
                    <p>Осмотр пищевода, желудка и начального отдела (луковицы) двенадцатиперстной кишки</p>
                    <Button text='записаться' style='button'/>
                </div>
                <div className='rrs'>
                    <div className='rec22'/>
                    <div className='rec23'/>
                    <img src={Rrc} alt='РРС'/>
                    <h2>ррс</h2>
                    <p>Осмотр прямой кишки и анального канала с помощью тонкой трубки с оптическим волокном.</p>
                    <Button text='записаться' style='button'/>
                </div>
                <div className='fks'>
                    <div className='rec25'/>
                    <img src={Fks} alt='ФКС'/>
                    <div className='rec24'/>
                    <h2>фкс</h2>
                    <p>Осмотр толстой кишки с помощью длинной трубки с оптическим волокном.</p>
                    <Button text='записаться' style='button'/>
                </div>
            </div>

            <div className='ill_text'>
                <img src={Organs} alt='Внутренние органы'/>
                <div className='illnesses_list'>
                    <button className='collapsible'>Гастрит</button>
                    <div className='content'>
                        <p>Гастрит - это воспаление слизистой оболочки желудка. Острое воспаление слизистой оболочки желудка, острый гастрит, возникает в следствие непродолжительного действия раздражителей: химических веществ, некоторых лекарственных препаратов, недоброкачественной пищи и др. Если слизистая воспаляется неоднократно, то происходит ее структурная перестройка или атрофия – развивается хронический гастрит. При гастрите, как остром, так и хроническом, болевые ощущения локализованы, преимущественно, в верхних отделах живота («под ложечкой»). Интенсивность болей при остром гастрите может быть выраженной, характерным признаком является возникновение или усиление болей после приема пищи. При хроническом гастрите пациент характеризует болевые ощущения как чувство тяжести, дискомфорт, «ноет», «давит». Сопровождаются они изжогой, реже отрыжкой, иногда пациента «мутит». Тошнота и рвота указывает на присоединение вторичного раздражения поджелудочной железы. Диагностика как острого, так и хронического гастрита осуществляется на основании совокупности жалоб пациента и данных эндоскопического исследования - фиброгастроскопии (ФГДС). Данное исследование позволяет осмотреть слизистую оболочку, выявить воспаление, уточнить : какие отделы желудка поражены, провести забор материала (биопсию) для гистологического подтверждения диагноза и тестирования на наличие микроорганизмов «Хеликобактер пилори», вызывающих и поддерживающих воспаление. Знание данного вопроса поможет Вашему лечащему врачу оценить необходимость назначения антибиотиков. Кроме того, при хроническом гастрите нарушается продукция оболочкой желудка химических веществ и гормонов. Наибольшее внимание уделяется нарушению кислотопродуцирующей функции. Для терапевта, назначающего лечение, необходимо знать : повышена кислотность желудочного содержимого или понижена, т.к. лекарственные препараты в этих случаях назначаются диаметрально противоположного действия. Такую информацию можно получить при проведении ФГДС с оценкой кислотопродуцирующей функции.</p>
                    </div>
                    <button className='collapsible'>Язва</button>
                    <div className='content'>
                        <p>Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва Язва </p>
                    </div>
                    <button className='collapsible'>Холецистит</button>
                    <div className='content'>
                        <p>Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит Холецистит </p>
                    </div>
                    <button className='collapsible'>Панкреатит</button>
                    <div className='content'>
                        <p>ПанкреатитПанкреатитПанкреатитПанкреатитПанкреатитПанкреатитПанкреатитПанкреатит</p>
                    </div>
                    <button className='collapsible'>Гепатит</button>
                    <div className='content'>
                        <p>ГепатитГепатитГепатитГепатитГепатитГепатит  ГепатитГепатитГепатитГепатитГепатит</p>
                    </div>
                    <button className='collapsible'>Колит</button>
                    <div className='content'>
                        <p>КолитКолитКолитКолитКолитКолит Колит super Колит  Колит Колит  Колит Колит  Колит Колит </p>
                    </div>
                    <button className='collapsible'>Синдром раздраженной кишки (СРК)</button>
                    <div className='content'>
                        <p> Синдром раздраженной кишки (СРК)v  Синдром раздраженной кишки (СРК)Синдром раздраженной кишки (СРК)  Синдром раздраженной кишки (СРК)   </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>;
    }
}