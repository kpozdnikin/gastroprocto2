import React from 'react';
import moment from 'moment';
import { Icon, Popup, Dimmer, Loader, Image, Segment, Divider } from 'semantic-ui-react';
import { resolve } from "react-resolver";
import http from 'http';
import axios from 'axios';

var articleModel = require('../../api/models/articles');

global.$ = require('jquery');
//['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

@resolve("articles", function(props) {
    return articleModel.get().then(function(data){ return data });
})

class ArticlesServer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            status:'inProgress'
        };

        this.addArticle = this.addArticle.bind(this);
        this.cancelArticle = this.cancelArticle.bind(this);
    }

    addArticle(event){
        event.preventDefault();
        console.log('Add');
        this.setState({ status: 'add' });
    }

    cancelArticle(){
        this.setState({ status: 'read' });
        location.href = '#blog-content';
    }

    render() {
        const { articles } = this.props;
        this.state.articles = articles;

        if(this.state.status) {
            return (
                <div className="hidden">
                    <div id="blog-controls" className="blog-controls">
                        <a id="add-article-btn" onClick={ this.addArticle }>
                            <Popup trigger={<Icon name='add' />} wide>Добавить статью</Popup>
                        </a>
                    </div>
                    <div className="ui relaxed divided items">
                        <h1>Врачебный блог Поздникиной О.Ю.</h1>
                        <ReactCSSTransitionGroup
                            transitionName="blog-animation"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false}
                            transitionLeave={false}>
                            { this.state.articles.map((article, index) =>
                                <div className="item" key={ index }>
                                    <BlogArticles key={index} article={ article }/>
                                    <Divider />
                                </div>
                            )}
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Dimmer className="blog-dimmer" active inverted>
                        <Loader inverted>Загрузка</Loader>
                    </Dimmer>
                </div>
            );
        }
    }
}

function BlogArticles(props){
    return (
        <div className="article-blog-item" itemScope itemType="http://schema.org/BlogPosting">
            <div className="ui small image">
                <img src={ props.article.mainImg } alt={ props.article.mainImgAlt }/>
            </div>
            <div className="content">
                <a className="header" href={ '/blog/' + props.article._id + '/' + props.article.name }><h3 itemProp="headline">{ props.article.name }</h3></a>
                <div className="meta">
                    { moment(props.article.dateCreate).format('LL') }
                </div>
                <div className="description" itemProp="description">
                    { props.article.description }
                </div>
                <div>
                    <div className="extra" itemProp="author" itemScope itemType="http://schema.org/Person">
                        <img src={ props.article.authorImg } className="ui circular avatar image" alt={ props.article.authorAlt }/>
                        <span itemProp="name">{ props.article.authorFirstName }{ props.article.authorLastName }</span>
                        <a href={ '/blog/' + props.article._id + '/'+ props.article.name } className="ui right floated positive button">
                            Читать далее
                            <i className="right chevron icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticlesServer;