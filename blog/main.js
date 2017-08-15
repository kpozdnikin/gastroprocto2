import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import NoMatch from './NotMatch.jsx';
import Articles from './articles/Articles.jsx';
import Article from './article/Article.jsx';



ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <Route path="blog" component={ Articles }/>
            <Route path="blog/:articleId/:articleName" component={ Article }/>
            <Route path="*" component={ NoMatch }/>
        </Route>
    </Router>,
    document.getElementById('blog-content')
);