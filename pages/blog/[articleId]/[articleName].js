import React from 'react';
//import Vector from '../../../assets/img/blog_vector.svg';
//import Sad from '../../../assets/img/sad.png';
import Layout from "../../../components/Layout";
import Nav from "../../../components/Nav"
import Footer from '../../../components/Footer';
import {useRouter} from "next/router";
import ArticleItem from "../ArticleItem";

//import PostLink from '../../components/PostLink';
// временные данные для тестирования
export  const artData =
    {
        id: "5c6ebb000860a0029f72edf4",
        text: "В последнее время участились обращения пациентов, самостоятельно решивших обследовать желудок, кишечник при отсутствии каких-либо жалоб на работу данных органов. На вопрос о причине столь серьезного решения они отвечают, что длительное время кто-то из близких им людей или знакомых страдал от поздно диагностированной опухоли. \n" +
        "\n" +
        " Проблемы больного они принимали так близко к сердцу, что, невольно, переносили их на себя. Возникали опасения заболеть раком, которые , постепенно, перерастали в твердую уверенность пациента в наличии у них данного заболевания. То есть, проходило «проецирование» - перенос проблем одного человека на другого. \n" +
        "\n" +
        "Что делать? \n" +
        "\n" +
        " Разумеется, провести исследование. Показаний медицинских нет, но сама по себе ситуация есть показание (психологическое) к исследованию. \n" +
        "\n" +
        " Почему? \n" +
        "\n" +
        "Тут хочется использовать еще один умный термин – «программирование». Не до конца понимаем мы тонкости человеческой психологии, однако по опыту могу сказать: «Если человек упорно ищет у себя рак, то возможность заболеть им возрастает многократно». Значит порочную цепочку нужно прервать – провести обследование (гастроскопию, ректоскопию, колоноскопию), убедиться в отсутствии болезни и успокоить пациента.",
        authorImg: "../../../assets/img/sad.png",
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
    }
;

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


  const Article = () =>{
      return (
          <Layout>
              <div id='article'>
                  <Nav/>
                  <ArticleItem artdata={artData} />
                  <Footer/>
              </div>
          </Layout>
      )
  };

export default Article;
