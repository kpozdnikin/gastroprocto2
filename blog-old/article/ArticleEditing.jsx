import React from 'react';
// import 'react-trumbowyg/dist/trumbowyg.min.css';
import Trumbowyg from 'react-trumbowyg';

class ArticleEditing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
            status: this.props.status
        };
        if(this.state.status === 'add'){
            this.state.article.text = '';
        }
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEditClick = this.cancelEditClick.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
        this.addArticle = this.addArticle.bind(this);
    }

    handleChangeImage(event) {
        event.preventDefault();
        var preview = document.querySelector('#image-preview');
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function(upload) {
            this.setState((prevState) => {
                prevState.article.mainImg = upload.target.result;
                return prevState;
            });
            if(preview) preview.src = reader.result;
        }.bind(this);
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
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

        //if author avatar not exists
        if(!this.state.authorImg){
            this.getDataUri('/img/avatar.jpg', function (dataUri) {
                this.setState((prevState) => {
                    prevState.article.authorImg = dataUri;
                    return prevState;
                });
            }.bind(this));
        }

        //now filling article fields
        //article name
        $('#article-name').val(this.state.article.name);
        //article description
        $('#article-description').val(this.state.article.description);
        //article image
        //$('#article-image').src(this.state.article.mainImg);
        //article image description (alt)
        $('#article-image-alt').val(this.state.article.mainImgAlt);
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
                    article: resp.data
                });
                return true;
            }.bind(this),
            error: function(status, err) {
                console.log(status + ' ' + err);
                return false;
            }.bind(this)
        });
    }

    addArticle(article){
        var user = JSON.parse(localStorage.getItem("user_auth_data")) || null;
        if (user && user.telegram) {
            return $.ajax({
                type: 'POST',
                url: '/api/article?user=' + user.telegram,
                data: article,
                dataType: 'json',
                success: function(resp) {
                    location.href='../';
                    return true;
                }.bind(this),
                error: function(status, err) {
                    return false;
                }.bind(this)
            });
        }
        else return false;
    }

    updateArticle(article) {
        var user = JSON.parse(localStorage.getItem("user_auth_data")) || null;
        if (user && user.telegram) {
            return $.ajax({
                type: 'PUT',
                url: '/api/article?user=' + user.telegram,
                data: article,
                dataType: 'json',
                success: function (resp) {
                    location.href = '../';
                    return true;
                }.bind(this),
                error: function (status, err) {
                    return false;
                }.bind(this)
            });
        }
        else return false;
    }


    getDataUri(url, callback) {
        var image = new Image();
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
            canvas.getContext('2d').drawImage(this, 0, 0);
            // Get raw image data
            callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
            // ... or get as Data URI
            callback(canvas.toDataURL('image/png'));
        };

        image.src = url;
    }

    cancelEditClick(){
        this.props.onButtonCancelClick(
            this.status = 'read'
        );
    }

    handleSubmit(event){
        var name = $('#article-name'),
            description = $('#article-description'),
            mainImg = $('#article-image'),
            mainImgVal = (document.querySelector('#image-preview'))?document.querySelector('#image-preview').src:'',
            mainImgAlt = $('#article-image-alt'),
            text = $('#react-trumbowyg');

        if(!name.val()){
            alert('Название статьи не заполнено!');
            name.parent().addClass('error');
            location.href=('#' + name.attr('id'));
            return
        }
        if(!description.val()){
            alert('Описание статьи не заполнено!');
            description.parent().addClass('error');
            location.href=('#' + description.attr('id'));
            return
        }
        if(!mainImg.val() && !mainImgVal){
            alert('Картинка для статьи не заполнена!');
            mainImg.parent().addClass('error');
            location.href=('#' + mainImg.attr('id'));
            return
        }
        if(!mainImgAlt.val()){
            alert('Описание картинки не заполнено!');
            mainImgAlt.parent().addClass('error');
            location.href=('#' + mainImgAlt.attr('id'));
            return
        }
        if(!text.html()){
            alert('Текст статьи не заполнен!');
            text.parent().addClass('error');
            location.href=('#' + text.attr('id'));
            return
        }
        var article = this.state.article;
        article.name = name.val();
        article.description = description.val();
        article.mainImg = mainImgVal;
        article.mainImgAlt = mainImgAlt.val();
        article.text = text.html();
        article.commentsTreeId = '1';
        article.url = name.val();
        article.authorFirstName = 'Ольга';
        article.authorLastName = 'Поздникина';
        article.authorId = '1';
        article.authorAlt = 'Поздникина Ольга Юрьевна';

        console.log(article);

        if(this.state.status === 'edit'){
            this.updateArticle(article).promise().done(function(arg){
                location.href = '/blog-old/' + article._id + '/' + article.name;
            })
        }
        else if(this.state.status === 'add'){
            this.addArticle(article).promise().done(function(arg){
                //location.href = '/blog-old/' + article._id + '/' + article.name;
                console.log('Статья добавлена!');
                console.log(arg);
            })
        }
    }

    render() {
        return  (
            <div>
                <h3>Редактирование статьи</h3>
                <form className="ui form article-input-form">
                    <div className="field">
                        <label htmlFor="article-name" className="sr-only" >Название статьи</label>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Название статьи
                            </div>
                            <input name="article-name" id="article-name" type="text" placeholder="Название статьи"/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="descr-input" className="sr-only" >Описание статьи</label>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Описание статьи
                            </div>
                            <textarea id="article-description" name="descr-input" type="text" placeholder="Описание статьи"/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="article-image">Загрузить изображение</label>
                        <div id="image-input-block" className="ui icon input">
                            <input id="article-image"
                                   name="article-image"
                                   ref="file"
                                   encType="multipart/form-data"
                                   type="file"
                                   onChange={ this.handleChangeImage }
                                   placeholder="Изображение..." />
                            <i className="file image outline icon"/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="article-image-alt" className="sr-only" >Описание изображения</label>
                        <div className="ui labeled input">
                            <div className="ui label">
                                Описание изображения
                            </div>
                            <input id="article-image-alt" name="article-image-alt" type="text" placeholder="Название изображения"/>
                        </div>
                    </div>

                    <div className="field">
                        { (this.state.article.mainImg)?<img id="image-preview" src={ this.state.article.mainImg } alt={ this.state.article.mainImgAlt } />:'' }
                    </div>
                    <div className="field">
                        <Trumbowyg id='react-trumbowyg'
                                   lang="ru"
                                   data={ ' ' + this.state.article.text }
                                   placeholder='Текст статьи'/>
                    </div>
                    <div className="ui buttons">
                        <input className="ui button" type="reset" onClick={ this.cancelEditClick } value="Отмена" />
                        <input className="ui positive button" type="button" onClick={ this.handleSubmit } value="Сохранить" />
                    </div>
                </form>
                {/*<BlogArticle article={ this.state.article }/>*/}
            </div>
        );
    }
}

export default ArticleEditing;