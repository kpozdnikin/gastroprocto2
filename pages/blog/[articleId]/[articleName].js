import React from 'react';
//import Vector from '../../../assets/img/blog_vector.svg';
//import Sad from '../../../assets/img/sad.png';
import Layout from "../../../components/Layout";
import Nav from "../../../components/Nav"
import Footer from '../../../components/Footer';
import unfetch from 'isomorphic-unfetch';

const Article = (props) =>{

      return (
          <Layout>
              <div id='article'>
                  <Nav/>
                  <div className='article_top'>
                      <p>{props.article.description}</p>
                      <div className='rec20'/>
                  </div>
                  <div className='container'>
                      <div className='rec11'/>
                      <div className='rec10'/>
                      <div className='rec12'/>
                      <img src={props.article.mainImg} alt="фото"/>
                  </div>
                  <div className='article_text'>
                      <p>
                          {props.article.text}
                      </p>
                  </div>
                  <Footer/>
              </div>
          </Layout>
      )
  };

    Article.getInitialProps = async function(context) {

        const { articleId } = context.query;
        const res = await unfetch(`https://gastroprocto.ru/api/article?articleId=${articleId}`);
        const data = await res.json();

        return { article: data.data }
    };


export default Article;
