import React from 'react';
import moment from 'moment';
import { resolve } from "react-resolver";
import { Icon, Popup, Confirm } from 'semantic-ui-react'

var articleModel = require('../../api/models/articles');


@resolve("article", function(props) {
    return articleModel.getOne(props.params.articleId).then(function(data){ return data });
})

class ArticleServer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {},
            open: false
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.editArticle = this.editArticle.bind(this);
        this.show = this.show.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.confirmationText = 'Вы уверены, что хотите удалить статью ' + this.state.article.name + '?';
    }

    componentDidMount() {
        $('.ui.vertical.masthead.center.aligned.segment.blog-old-top-header').animate({
            minHeight: 0,
            height: 'auto',
            textAlign: 'left',
            paddingBottom: 0
        }, 500, function() {
            $('#blog-old-header-block').animate(
                {
                    height: 0
                }, 500, function(){
                    $('#blog-old-header-block').css({ display: 'none' })
                })
        });

    }

    componentWillUnmount(props) {

    }

    editArticle(event){
        event.preventDefault();
        this.props.onButtonEditClick(
            this.status = 'edit'
        );
    }

    show(){
        this.setState({ open: true });
    }

    handleCancel(){
        this.setState({ open: false });
    }

    handleConfirm(){
        this.props.onDeleteButtonClick();
        this.setState({ open: false });
    }

    render() {
        const { article } = this.props;
        this.state.article = article;

        return  (
            <div itemScope itemType="http://schema.org/BlogPosting" className="hidden">
                <span itemProp="headline">
                    <a id="edit-article-btn" className="tooltiped" onClick={ this.editArticle } href="#">
                        <Popup trigger={<Icon name='edit' />} wide>Редактировать статью</Popup>
                    </a>
                    <a id="delete-article-btn" className="delete-icon" onClick={ this.show } href="#">
                        <Popup trigger={<Icon name='remove' />} wide>Удалить статью</Popup>
                    </a>
                    <Confirm
                        header="Подтверждение удаления"
                        content={ this.confirmationText }
                        open={ this.state.open }
                        onCancel={ this.handleCancel }
                        onConfirm={ this.handleConfirm }
                    />
                </span>
                <h1>{ this.state.article.name }</h1>
                <div className="ui feed">
                    <div className="event">
                        <div className="label">
                            <img src={ this.state.article.authorImg } alt={ this.state.article.authorAlt } />
                        </div>
                        <div className="content">
                            <div className="date" itemProp="dateCreated">
                                { moment(this.state.article.dateCreate).format('LL') }
                            </div>
                            <div itemProp="author" itemScope itemType="http://schema.org/Person" className="summary">
                                <span  itemProp="name">{ this.state.article.authorFirstName } { this.state.article.authorLastName }</span>
                            </div>
                        </div>
                    </div>
                </div>
                { (this.state.article.mainImg)?<div  itemScope itemType="http://schema.org/ImageObject"><img id="image-preview" itemProp="contentUrl" className="wireframe" src={ this.state.article.mainImg } alt={ this.state.article.mainImgAlt }/></div>:''}
                <div className="article-text" itemProp="articleBody" dangerouslySetInnerHTML={ createMarkup(this.state) }></div>
            </div>
        );
    }
}

//транслируем тип текст в html
function createMarkup(props) {
    return {__html: props.article.text };
}

export default ArticleServer;