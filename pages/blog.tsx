import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Vector from '../assets/img/blog_vector.svg';
import Symptom_img from '../assets/img/grbs.svg';
import ManSmell from '../assets/img/man_smell.svg';
import DocWithFolder from '../assets/img/doc_with_folder.svg';
import ManWithFolder from '../assets/img/Man_with_folder.svg';
import Proctolog from '../assets/img/proctologs.svg';
import VideoImg_1 from '../assets/img/video_img_1.svg';
import VideoImg_2 from '../assets/img/video_img_2.svg';
import VideoImg_3 from '../assets/img/video_img_3.svg';
import Layout from "../components/Layout";
import Nav from "../components/Nav"

//import PostLink from '../components/PostLink';
//import ArticleItem from './blog/ArticleItem';
//import {artData} from "./blog/[articleId]/[articleName]";
//import 'isomorphic-fetch';
import fetch from 'isomorphic-unfetch';

const Blog = () => {
    return (
        <Layout title="Болит живот. Блог">
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
                        <Button text='записаться' myStyle='button'/>
                         <a href='/articleId'>читать далее</a>
                        {/* <PostLink id="3434436456445645564" name="Проецирование болезний других людей на себя"/>*/}
                        <img src={Vector} alt='more details'/>
                    </div>
                </div>
            </div>

            <div className='video_symptoms'>
                <div className='symptoms_left'>
                    {/*<iframe title='myFrame' src="https://www.youtube.com/embed/kNJX1CJIWjY" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        Видео на YouTube
                    </iframe>
                     */}
                    <h2>Видео на YouTube</h2>
                    <p>Краткое описание о чем видео и для кого оно будет интересным</p>
                    <Button text='посмотреть видео' myStyle='button'/>
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
                    <Button text='посмотреть видео' myStyle='button'/>
                </div>
                <div className='container_video'>
                    <div className='video2'>
                        <img src={VideoImg_2} alt='Фитотерапия'/>
                        <div className='rec19'/>
                        <div className='rec15'/>
                        <div className='rec14'/>
                        <div className='rec18'/>
                    </div>
                    <Button text='посмотреть видео' myStyle='button'/>
                </div>
                <div className='container_video'>
                    <div className='video3'>
                        <div className='rec16'/>
                        <div className='rec17'/>
                        <img src={VideoImg_3} alt='Симптомы'/>
                    </div>
                    <Button text='посмотреть видео' myStyle='button'/>
                </div>
            </div>

            <Footer/>
        </div>
        </Layout>
    );
};

{/*Blog.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        shows: data.map((entry: any)  => entry.show)
    };
};
*/}
Blog.getInitialProps = async function(){
  const res = await fetch('https://gastroprocto.ru/api/articles');
  const data = await res.json();
  //console.log(`Show data from GastroProcto2: ${data.lenght}`);
    return data;
};
export default Blog;

