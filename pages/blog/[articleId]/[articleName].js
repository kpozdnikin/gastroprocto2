import React from 'react';
import Vector from '../../../assets/img/blog_vector.svg';
import Sad from '../../../assets/img/sad.png';
import Layout from "../../../components/Layout";
import Nav from "../../../components/Nav"
import Footer from '../../../components/Footer';
import {useRouter} from "next/router";

//import PostLink from '../../components/PostLink';
// временные данные для тестирования
const artData = [
    {
        id: "5c6ebb000860a0029f72edf4",
        text: "В последнее время участились обращения пациентов, самостоятельно решивших обследовать желудок, кишечник при отсутствии каких-либо жалоб на работу данных органов. ↵↵На вопрос о причине столь серьезного решения они отвечают, что длительное время кто-то из близких им людей или знакомых страдал от поздно диагностированной опухоли.&nbsp;</p><p>&nbsp;Проблемы больного они принимали так близко к сердцу, что, невольно, переносили их на себя. Возникали опасения заболеть раком, которые , постепенно, перерастали в твердую уверенность пациента в наличии у них данного заболевания. То есть, проходило «<strong>проецирование</strong>» - перенос проблем одного человека на другого.&nbsp;</p><p>Что делать?&nbsp;</p><p>&nbsp;Разумеется, провести исследование. Показаний медицинских нет, но сама по себе ситуация есть показание (психологическое) к исследованию.&nbsp;</p><p>&nbsp;Почему?&nbsp;</p><p>Тут хочется использовать еще один умный термин – «программирование». Не до конца понимаем мы тонкости человеческой психологии, однако по опыту могу сказать: «Если человек упорно ищет у себя рак, то возможность заболеть им",
        authorImg: "/uploads/avatar.jpg",
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
    },
    {
        id: "5bc4a83b9639e020921da86b",
        text: "последнее время ко мне части обращаются пациенты с вопросом: «Почему мне назначили гастроскопию, или колоноскопию? Ведь сейчас есть прекрасный метод ",
        authorImg: "/uploads/avatar.jpg",
        mainImg: "/uploads/5bc4a83b9639e020921da86b.jpg",
        name: "Диагностика заболеваний желудочно-кишечного тракта с помощью видеокапсулы.",
        description: "Диагностика заболеваний желудочно-кишечного тракта с помощью видеокапсулы.",
        mainImgAlt: "Диагностика заболеваний желудочно-кишечного тракта с помощью видеокапсулы.",
        commentsTreeId: 1,
        url: "Диагностика заболеваний желудочно-кишечного тракта с помощью видеокапсулы.",
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
        dateModified: "2018-10-16T06:24:59.795Z",
        dateCreate: "2018-10-16T06:24:15.903Z",
        ratings: []
    }
];

const Content = () => {
    const router = useRouter();
    const {param} = router.query;
    return(
        <>
            <h1>{router.query.articleId}</h1>
            <h2>{router.query.articleName}</h2>
            <h3>{param}</h3>
            <p>Тут будет контент статьи</p>
        </>
    )
};

const Article = () => {
  return(
      <Layout>
          <Nav/>
          {/*<defaultArticle /> */}
           <Content/>

      </Layout>
  )};
  const defaultArticle = () =>{
      return (
          <Layout>
              <div id='article'>
                  <Nav/>
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
                      <a href='/blog'>вернуться назад</a>
                      <img src={Vector} alt='стрелка'/>
                  </div>
                  <Footer/>
              </div>
          </Layout>
      )
  };

export default Article;
