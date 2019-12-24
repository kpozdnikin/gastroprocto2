import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Button from './button';
import Vector from '../assets/img/blog_vector.svg';
import Symptom_img from '../assets/img/grbs.svg';
import ManSmell from '../assets/img/man_smell.svg';
import DocWithFolder from '../assets/img/doc_with_folder.svg';
import ManWithFolder from '../assets/img/Man_with_folder.svg';
import Proctolog from '../assets/img/proctologs.svg';
import VideoImg_1 from '../assets/img/video_img_1.svg';
import VideoImg_2 from '../assets/img/video_img_2.svg';
import VideoImg_3 from '../assets/img/video_img_3.svg';
import Sad from '../assets/img/sad.svg';

const Blog = () => {
    return (
        <div className='blog'>
            <div className='my_medical_blog'>
                <Nav/>

                <div className='blog_top'>
                    <p>Мой врачебный блог</p>
                    <div className='rec20'/>
                </div>
                <div className='blog_content_left'>
                    <div className='rec11'/>
                    <div className='rec10_big'/>
                    <div className='rec10'/>
                    <img src={ManWithFolder} alt='Фото доктора'/>
                </div>
                <div id='blog_content_right'>
                    <p>Психологическое проецирование болезней других людей на себя</p>
                    <div className='blog_text'>В последнее время участились обращения пациентов, самостоятельно решивших
                        обследовать желудок, кишечник при отсутствии каких-либо жалоб на работу данных органов.
                        На вопрос о причине столь серьезного решения они отвечают, что длительное время кто-то из
                        близких им людей или знакомых страдал от поздно диагностированной опухоли
                    </div>
                    <div className='blog_more_details'>
                        <Button text='записаться' style='button'/>
                        <a href='#article'>читать далее</a>
                        <img src={Vector} alt='more details'/>
                    </div>
                </div>
            </div>

            <div className='video_symptoms'>
                <div className='symptoms_left'>
                    <iframe src="https://www.youtube.com/embed/kNJX1CJIWjY" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        Видео на YouTube
                    </iframe>
                    <p>Краткое описание о чем видео и для кого оно будет инетеесным</p>
                    <Button text='посмотреть видео' style='button'/>
                </div>
                <div className='symptoms_right'>
                    <div className='rec15'/>
                    <div className='rec13'/>
                    <div className='rec19'/>
                    <div className='rec14'/>
                    <img src={Symptom_img} alt='Гастроэзофагеальная рефлюксная болезнь. Симптомы'/>
                </div>
            </div>

            <div className='third_screen'>
                <div className='container_smell'>
                    <div className='smell'>
                        <div className='rec13'/>
                        <img src={ManSmell} alt='Man'/>
                        <div className='rec12'/>
                    </div>
                    <div><p>Запах изо рта</p></div>
                </div>
                <div className='container'>
                    <div className='modern_methods'>
                        <div className='rec19'/>
                        <div className='rec15'/>
                        <div className='rec14'/>
                        <div className='rec18'/>
                        <img src={DocWithFolder} alt='Doctor'/>
                    </div>
                    <div><p>Современные эндоскопические методы исследования</p></div>
                </div>
                <div className='container_which_includes'>
                    <div className='which_includes'>
                        <div className='rec16'/>
                        <div className='rec17'/>
                        <img src={Proctolog} alt='Proctologs'/>
                    </div>
                    <div><p>Что включает в себя консультация проктолога</p></div>
                </div>
                <div className='container_video'>
                    <div className='video1'>
                        <div className='rec13'/>
                        <div className='rec12'/>
                        <img src={VideoImg_1} alt='исследование желудка'/>
                    </div>
                    <Button text='посмотреть видео' style='button'/>
                </div>
                <div className='container_video'>
                    <div className='video2'>
                        <img src={VideoImg_2} alt='Фитотерапия'/>
                        <div className='rec19'/>
                        <div className='rec15'/>
                        <div className='rec14'/>
                        <div className='rec18'/>
                    </div>
                    <Button text='посмотреть видео' style='button'/>
                </div>
                <div className='container_video'>
                    <div className='video3'>
                        <div className='rec16'/>
                        <div className='rec17'/>
                        <img src={VideoImg_3} alt='Симптомы'/>
                    </div>
                    <Button text='посмотреть видео' style='button'/>
                </div>
            </div>

            <div className='probiotics'>
                <div className='rec21'/>

                <div className='probiotics_text'>
                    <h2>Пробиотики и Пребиотики</h2>
                    <p>Пробиотики – препараты, содержащие микроорганизмы, в норме проживающие в различных органах
                        человека, способные губительно воздействовать на вредные бактерии и восстанавливать,
                        при необходимости, нормальную микрофлору. Наиболее часто пробиотики назначаются терапевтом или
                        гастроэнтерологом после проведения антибактериальной терапии, при синдроме раздраженной кишки.
                        Примером наиболее часто назначаемых пробиотиков могут служить
                    </p>
                    <div className='probiotics_more_info'>
                        <Button text='записаться' style='button'/>
                        <a href='#'>читать далее</a>
                        <img src={Vector} alt='more details'/>
                    </div>
                </div>

                <div className='probiotics_doc_with_folder'>
                    <div className='rec11'/>
                    <div className='rec10'/>
                    <div className='rec12'/>
                    <img src={ManWithFolder} alt='Фото врача'/>
                </div>
            </div>

            <div id='article'>
                <div className='article_top'>
                    <p>Психологическое проецирование болезней других людей на себя</p>
                    <div className='rec20'/>
                </div>
                <div className='container'>
                    <div className='rec11'/>
                    <div className='rec10'/>
                    <div className='rec12'/>
                    <img src={Sad} alt="фото"/>
                </div>
                <div className='article_text'>
                    <p>В последнее время участились обращения пациентов, самостоятельно решивших обследовать желудок,
                        кишечник при отсутствии каких-либо жалоб на работу данных органов. На вопрос о причине столь
                        серьезного решения они отвечают, что длительное время кто-то из близких им людей или знакомых
                        страдал от поздно диагностированной опухоли.<br/><br/>
                        Проблемы больного они принимали так близко к сердцу, что, невольно, переносили их на себя.
                        Возникали опасения заболеть раком, которые , постепенно, перерастали в твердую уверенность
                        пациента в наличии у них данного заболевания. То есть, проходило «проецирование» - перенос
                        проблем одного человека на другого. <br/>
                        Что делать?<br/><br/>
                        Разумеется, провести исследование. Показаний медицинских нет, но сама по себе ситуация есть
                        показание (психологическое) к исследованию. <br/> Почему? <br/><br/>
                        Тут хочется использовать еще один умный термин – «программирование». Не до конца понимаем мы
                        тонкости человеческой психологии, однако по опыту могу сказать: «Если человек упорно ищет у себя
                        рак, то возможность заболеть им возрастает многократно». Значит порочную цепочку нужно прервать
                        – провести обследование (гастроскопию, ректоскопию, колоноскопию), убедиться в отсутствии
                        болезни и успокоить пациента
                    </p>
                </div>
                <div className='return_back'>
                    <a href='#'>вернуться назад</a>
                    <img src={Vector} alt='стрелка'/>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Blog;

