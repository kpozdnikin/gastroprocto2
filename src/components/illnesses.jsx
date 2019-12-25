import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Fgds from '../assets/img/fgds.png';
import Rrc from '../assets/img/rrs.png';
import Fks from '../assets/img/fks.png';
import Button from "./button";

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

            <Footer/>
        </div>;
    }
}