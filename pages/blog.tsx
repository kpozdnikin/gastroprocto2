import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Vector from '../assets/img/blog_vector.svg';
import Symptom_img from '../assets/img/grbs.svg';
// import ManSmell from '../assets/img/man_smell.svg';
// import DocWithFolder from '../assets/img/doc_with_folder.svg';
// import ManWithFolder from '../assets/img/Man_with_folder.svg';
// import Proctolog from '../assets/img/proctologs.svg';
// import VideoImg_1 from '../assets/img/video_img_1.svg';
// import VideoImg_2 from '../assets/img/video_img_2.svg';
// import VideoImg_3 from '../assets/img/video_img_3.svg';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import unfetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Blog = (props: any) => {

    function createMarkup(text) {
        return {__html: text};
    }

    return (
        <Layout title="Болит живот. Блог">
        <div className="blog">
            <div className="my_medical_blog">
                <Nav/>
                <div className="blog_top">
                    <p>Мой врачебный блог</p>
                    <div className="rec20"/>
                </div>
                <div className="blog_content_left">
                    <div className="rec11"/>
                    <div className="rec10_big"/>
                    <div className="rec10"/>
                    <img src={props.articles[0].mainImg} alt="Фото доктора"/>
                </div>
                <div id="blog_content_right">
                    <p className="top">{props.articles[0].description}</p>
                    <div className="blog_text" dangerouslySetInnerHTML={createMarkup(props.articles[0].text)} />

                    <div className="blog_more_details">
                        <Link href={`/${props.articles[0]._id}/${props.articles[0].name}`} as={`/blog/${props.articles[0]._id}/${props.articles[0].name}`}>
                            <>
                                <Button text="записаться" myStyle="button"/>
                                <a href={`/blog/${props.articles[0]._id}/${props.articles[0].name}`}>читать далее</a>
                                <img src={Vector} alt="more details"/>
                            </>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="video_symptoms">
                <div className="symptoms_left">
                    {/*<iframe title='myFrame' src="https://www.youtube.com/embed/kNJX1CJIWjY" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        Видео на YouTube
                    </iframe>
                     */}
                    <h2>Видео на YouTube</h2>
                    <p>Краткое описание о чем видео и для кого оно будет интересным</p>
                    <Button text="посмотреть видео" myStyle="button"/>
                </div>
                <div className="symptoms_right">
                    <div className="rec15"/>
                    <div className="rec13"/>
                    <div className="rec19"/>
                    <div className="rec14"/>
                    <img src={Symptom_img} alt="Гастроэзофагеальная рефлюксная болезнь. Симптомы"/>
                </div>
            </div>

            <div className="articles">
                {props.articles.map((article: any) => (
                    <div className="container" key={article._id}>
                        <div className="art_img">
                            <div className="rec13"/>
                            <img src={article.mainImg} />
                            <div className="rec12"/>
                        </div>
                        <div className="text">
                            <p>{article.name}</p>
                            <Link href={`/${article._id}/${article.name}`} as={`/blog/${article._id}/${article.name}`}>
                                <a> {/*//Кривое решение, нужно разобраться как сделать правильно */}
                                    <Button text="посмотреть статью" myStyle="button"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
        </Layout>
    );
};

Blog.getInitialProps = async function() {
    const res = await unfetch('https://gastroprocto.ru/api/articles');
    const data = await res.json();
    return  { articles: data.data };
};

export default Blog;

