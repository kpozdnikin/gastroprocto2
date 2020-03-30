import React from 'react';
//import Vector from '../../../assets/img/blog_vector.svg';
//import Sad from '../../../assets/img/sad.png';
import Layout from "../../../components/Layout";
import Nav from "../../../components/Nav"
import Footer from '../../../components/Footer';
// import {useRouter} from "next/router";
// import unfetch from 'isomorphic-unfetch';
// import ArticleItem from "../ArticleItem";
// import PostLink from '../../components/PostLink';
const artData = {
    _id: "5c6ebb000860a0029f72edf4",
    text: "В последнее время участились обращения пациентов, самостоятельно решивших обследовать желудок, кишечник при отсутствии каких-либо жалоб на работу данных органов. ↵↵На вопрос о причине столь серьезного решения они отвечают, что длительное время кто-то из близких им людей или знакомых страдал от поздно диагностированной опухоли.&nbsp;</p><p>&nbsp;Проблемы больного они принимали так близко к сердцу, что, невольно, переносили их на себя. Возникали опасения заболеть раком, которые , постепенно, перерастали в твердую уверенность пациента в наличии у них данного заболевания. То есть, проходило  - перенос проблем одного человека на другогоести исследование. Показаний медицинских нет, но сама по себе ситуация есть показание (психологическое) к исслед",
    mainImg: "https://gastroprocto.ru/uploads/5c6ebb000860a0029f72edf4.jpg",
    name: "Проецирование",
    description: "Психологическое проецирование болезней других людей на себя",
    mainImgAlt: "Психологическое проецирование болезней других людей на себя",
    commentsTreeId: 1,
    url: "Проецирование",
    authorFirstName: "Ольга",
    authorLastName: "Поздникина",
    authorId: 1,
    authorAlt: "Поздникина Ольга Юрьевна",
    categoryId: null,
    categoryName: "",
    mainImgId: "",
    sequence: 1,
    userModified: 1,
    isDeleted: false,
    dateModified: "2019-02-21T14:53:30.231Z",
    dateCreate: "2019-02-21T14:52:21.182Z",
    ratings: []
};

  const Article = () =>{

      return (
          <Layout>
              <Nav/>
              <div id='article'>
                  <div className='article_top'>
                      <p className='article_mt'>{artData.description}</p>
                      <div className='rec20'/>
                  </div>
                  <div className='container'>
                      <div className='rec11'/>
                      <div className='rec10'/>
                      <div className='rec12'/>
                      <img src={artData.mainImg} alt="фото"/>
                  </div>
                  <div className='article_text'>
                      <p>
                          {artData.text}
                      </p>
                  </div>

              </div>
              <Footer/>
          </Layout>
      )
  };

{/*
Article.getInitialProps = async function() {
    //console.log('gETINITIAL ',router.query.articleId);
    const res = await unfetch('https://gastroprocto.ru/api/articles');
    console.log(`до Json: ${res}`, res);
    const data = res.json();
    console.log(`Получена конкретная статья: ${data}`, data);
    console.log(`Cтатья: `, data.name);
    return { article: data }
    };
*/}

export default Article;
