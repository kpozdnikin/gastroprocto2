import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import NoMatch from './NotMatch.jsx';
import ArticlesServer from './articles/ArticlesServer.jsx';
import ArticleServer from './article/ArticleServer.jsx';

export default (
    <Router history={ browserHistory }>
        <Route path="/" component={ App }>
            <Route path="blog" component={ ArticlesServer } />
            <Route path="blog/:articleId/:articleName" component={ ArticleServer }/>
            <Route path="*" component={ NoMatch }/>
        </Route>
    </Router>
);