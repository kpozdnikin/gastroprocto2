import React, { Component } from 'react';
import ArticleEditing from './ArticleEditing.jsx';
import ArticleText from './ArticleText.jsx';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {},
            status:'inProgress'
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.editArticle = this.editArticle.bind(this);
        this.cancelArticle = this.cancelArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    editArticle(){
        this.setState({ status: 'edit' });
    }

    cancelArticle(){
        this.setState({ status: 'read' });
        location.href = '#blog-content';
    }

    componentDidMount() {

        //putting article data to inputs
        let promise = new Promise((resolve, reject) => {
            resolve(this.getArticle(this.props.params.articleId));
        });
        promise.then(()=>{
        });

        $('#edit-article-btn').on('click', function(e){
            e.preventDefault();
            console.log(e);
            this.setState({ status: 'edit' })
        })
    }

    componentWillUnmount(props) {

    }

    getArticle(articleId){
        return $.ajax({
            type: 'GET',
            url: '/api/article?articleId=' + articleId,
            data: '',
            dataType: 'json',
            success: function(resp) {
                this.setState({
                    article: resp.data,
                    status: 'read'
                });
                return true;
            }.bind(this),
            error: function(status, err) {
                console.log(status + ' ' + err);
                return false;
            }.bind(this)
        });
    }

    deleteArticle(){
        var user = JSON.parse(localStorage.getItem("user_auth_data")) || null;
        if(user && user.telegram){
            return $.ajax({
                type: 'DELETE',
                url: '/api/article?articleId=' + this.state.article._id + '&user=' + user.telegram,
                data: '',
                dataType: 'json',
                success: function(resp) {
                    location.href='/blog/';
                    return true;
                }.bind(this),
                error: function(status, err) {
                    console.log(status + ' ' + err);
                    return false;
                }.bind(this)
            });
        }
        else return false;
    }

    render() {
        if(this.state.article.text && this.state.status === 'read'){
            return  (
                <ArticleText article={ this.state.article } status={ this.state.status } onButtonEditClick={ this.editArticle } onDeleteButtonClick={ this.deleteArticle }/>
            );
        }
        else if(this.state.article.text && this.state.status === 'edit'){
            return  (
                <ArticleEditing article={ this.state.article } status={ this.state.status } onButtonCancelClick={ this.cancelArticle } />
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

export default Article;