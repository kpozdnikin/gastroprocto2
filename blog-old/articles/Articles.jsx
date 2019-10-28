import React from 'react';
import moment from 'moment';
import { Icon, Popup, Dimmer, Loader, Image, Segment, Divider } from 'semantic-ui-react';
import ArticleEditing from '../article/ArticleEditing.jsx';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

class Articles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            status:'inProgress',
            userAuth: ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.addArticle = this.addArticle.bind(this);
        this.cancelArticle = this.cancelArticle.bind(this);
    }

    componentDidMount() {
        this.getArticles();
        this.getUserAuth();
    }

    componentWillUnmount() {

    }

    getUserAuth(){
        //user_auth
        var user = JSON.parse(localStorage.getItem("user_auth_data")) || null;
        if(user.telegram)
            $.ajax({
                type: 'GET',
                url: '/api/user/telegram?telegram=' + user.telegram,
                data: '',
                dataType: 'json',
                success: function(resp) {
                    this.setState({
                        userAuth: resp.data,
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        else{
            console.log('user was not authorized');
        }
    }

    getArticles(){
        $.ajax({
            type: 'GET',
            url: '/api/articles',
            data: '',
            dataType: 'json',
            success: function(resp) {
                this.setState({
                    articles: resp.data,
                    status: 'read'
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    addArticle(event){
        event.preventDefault();
        console.log('Add');
        this.setState({ status: 'add' });
    }

    cancelArticle(){
        this.setState({ status: 'read' });
        location.href = '#blog-old-content';
    }

    render() {
        if(this.state.status === 'read') {
            var artcls = this.state.articles.sort((a, b) => a.dateCreate < b.dateCreate);
            return (
                <div>
                    <AddArticle user={ this.state.userAuth } article={ this.state.article } onButtonAddClick={ this.addArticle }/>
                    <div className="ui relaxed divided items">
                        <ReactCSSTransitionGroup
                            transitionName="blog-animation"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false}
                            transitionLeave={false}>
                        { artcls.map((article, index) =>
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
        else if(this.state.status === 'add'){
            var article = {};
            return  (
                <ArticleEditing article={ article } status={ this.state.status } onButtonCancelClick={ this.cancelArticle } />
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
                <a className="header" href={ '/blog-old/' + props.article._id + '/' + props.article.name }><h3 itemProp="headline">{ props.article.name }</h3></a>
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
                        <a href={ '/blog-old/' + props.article._id + '/'+ props.article.name } className="ui right floated positive button">
                            Читать далее
                            <i className="right chevron icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AddArticle(props){
    if (props.user && props.user.isAdmin)
        return (
            <div id="blog-controls" className="blog-controls">
                <a id="add-article-btn" onClick={ props.onButtonAddClick }>
                    <Popup trigger={<Icon name='add' />} wide>Добавить статью</Popup>
                </a>
            </div>
        );
    else
        return (
            <div></div>
        )
}

export default Articles;