import React from 'react';
import moment from 'moment';
import { Icon, Popup, Confirm } from 'semantic-ui-react';
import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
} = ShareButtons;

const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');


class ArticleText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: this.props.article,
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
        this.getUserAuth();
    }

    componentWillUnmount(props) {

    }

    getUserAuth(){
        //user_auth
        var user = JSON.parse(localStorage.getItem("user_auth_data")) || null;
        if(user && user.telegram)
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
        const shareUrl = 'https://gastroprocto.ru/blog/' +  this.state.article._id + '/' + this.state.article.name;
        const exampleImage = 'https://gastroprocto.ru/' + this.state.article.mainImg;
        const title = this.state.article.name;
        return  (
            <div itemScope itemType="http://schema.org/BlogPosting">
                <div className="social-buttons">
                    <VKShareButton
                        url={shareUrl}
                        image={exampleImage}
                        className="vk-share-button share-btn">
                        <VKIcon
                            size={32}
                            round />
                    </VKShareButton>
                    <FacebookShareButton
                        url={shareUrl}
                        title={title}
                        picture={exampleImage}
                        className="facebook-share-button share-btn">
                        <FacebookIcon
                            size={32}
                            round />
                    </FacebookShareButton>
                </div>
                <span itemProp="headline">
                    <ArticleControls  user={ this.state.userAuth } article={ this.state.article } onButtonEditClick={ this.editArticle } onButtonDeleteClick={ this.show }/>
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

function ArticleControls(props){
    if (props.user && props.user.isAdmin)
        return (
            <div>
                <a id="edit-article-btn" className="tooltiped" onClick={ props.onButtonEditClick } href="#">
                    <Popup trigger={<Icon name='edit' />} wide>Редактировать статью</Popup>
                </a>
                <a id="delete-article-btn" className="delete-icon" onClick={ props.onButtonDeleteClick } href="#">
                    <Popup trigger={<Icon name='remove' />} wide>Удалить статью</Popup>
                </a>
            </div>
        );
    else
        return (
            <div></div>
        )
}

export default ArticleText;