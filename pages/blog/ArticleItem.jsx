import React from "react";
import Vector from '../../assets/img/blog_vector.svg';

const ArticleItem = (props) => {
  return(
      <div>
          <div className='article_top'>
              {/*     <p>{props.data.description}</p> */}
              <div className='rec20'/>
          </div>

          <div className='container'>
              <div className='rec11'/>
              <div className='rec10'/>
              <div className='rec12'/>
              {/*    <img src={props.data.mainImg} alt="фото"/> */}
          </div>

          <div className='article_text'>
              {/*}    <p>{props.data.text}</p> */}
          </div>

          <div className='return_back' >
              {/*   <a href={`/blog/${props.data.id}`}вернуться назад</a> */}
              <img src={Vector} alt='стрелка'/>
          </div>
      </div>
  )
};
export default ArticleItem;