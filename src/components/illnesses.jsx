import React from 'react';
import Nav from './nav';
import Footer from './footer';


export default class Illnesses extends React.Component{
    render(){
        return <div>
            <Nav/>

            Заболевания ЖКТ
            <Footer/>
        </div>;
    }
}