var BabelRegister = require('babel-register');
var path = require('path');
var Navigator = require('navigator');

var articles = require('../controllers/articles');
var users = require('../controllers/users');
var helpers = require('../helpers/helperFunctions');

var React = require('react');
var RectDOMServer = require('react-dom/server');

import { renderToString } from "react-dom/server";
import { match, RouterContext } from 'react-router';
import routes from '../../blog/routes';

import { Resolver } from "react-resolver";

var routesAPI = function(app){
    app.get('/blog',  (req, res) => {
    //  res.sendFile(path.join(__dirname, 'public', 'index.html'))
        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

            if (redirectLocation) { // Если необходимо сделать redirect
                return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
            }

            if (error) { // Произошла ошибка любого рода
                return res.status(500).send(error.message);
            }

            if (!renderProps) { // Мы не определили путь, который бы подошел для URL
                return res.status(404).send('Not found');
            }

           /* const componentHTML = RectDOMServer.renderToString(<RouterContext {...renderProps} />);
            var article = {};
            article.url = "https://gastroprocto.ru/blog/";
            var metaTitle = "Врачебный блог";
            var metaHeader = '<meta property="og:title" prefix="og: http://ogp.me/ns#" content="Врачебный блог" />' +
                '<meta property="og:type" prefix="og: http://ogp.me/ns#" content="article" /> ' +
                '<meta property="og:url" prefix="og: http://ogp.me/ns#" content="https://gastroprocto.ru/blog" /> ' +
                '<meta property="og:image" prefix="og: http://ogp.me/ns#" content="https://gastroprocto.ru/img/footer.png" /> ' +
                '<meta property="og:description" prefix="og: http://ogp.me/ns#" content="Информация о лечении заболеваний пищеварительного тракта." /> ' +
                '<meta property="og:site_name" prefix="og: http://ogp.me/ns#" content="болитживот.рф" />' +
                '<meta name="keywords" content="Блог, медицинский, Поздникина О.Ю."> ' +
                '<meta name="author" content="Поздникина О Ю">' +
                '<meta name="description" content="Определения, советы, рекомендации, случаи из медицинской практики">';
            return res.end(renderHTML(componentHTML, metaHeader, metaTitle));*/

            Resolver
                .resolve(() => <RouterContext {...renderProps} /> )
                .then(({ Resolved, data }) => {
                    var article = {};
                    article.url = "https://gastroprocto.ru/blog/";
                    var metaTitle = "Врачебный блог";
                    var metaHeader = '<meta property="og:title" prefix="og: http://ogp.me/ns#" content="Врачебный блог" />' +
                        '<meta property="og:type" prefix="og: http://ogp.me/ns#" content="article" /> ' +
                        '<meta property="og:url" prefix="og: http://ogp.me/ns#" content="https://gastroprocto.ru/blog" /> ' +
                        '<meta property="og:image" prefix="og: http://ogp.me/ns#" content="https://gastroprocto.ru/img/footer.png" /> ' +
                        '<meta property="og:description" prefix="og: http://ogp.me/ns#" content="Информация о лечении заболеваний пищеварительного тракта." /> ' +
                        '<meta property="og:site_name" prefix="og: http://ogp.me/ns#" content="болитживот.рф" />' +
                        '<meta name="keywords" content="Блог, медицинский, Поздникина О.Ю."> ' +
                        '<meta name="author" content="Поздникина О Ю">' +
                        '<meta name="description" content="Определения, советы, рекомендации, случаи из медицинской практики">';
                    res.send(renderHTML(renderToString(<Resolved />), metaHeader, metaTitle));
                })
                .catch((error) => res.status(500).send(error))
        });
    });

    app.get('/blog/:articleId/:articleName',  (req, res) => {
        //res.sendFile(path.join(__dirname, 'public', 'index.html'))
        match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

            if (redirectLocation) { // Если необходимо сделать redirect
                return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
            }

            if (error) { // Произошла ошибка любого рода
                return res.status(500).send(error.message);
            }

            if (!renderProps) { // Мы не определили путь, который бы подошел для URL
                return res.status(404).send('Not found');
            }

            /*const componentHTML = RectDOMServer.renderToString(<RouterContext {...renderProps} />);
            var article =  data['.0.0'].article;
            var metaTitle = article.name;
            var metaHeader = '<meta property="og:title" prefix="og: http://ogp.me/ns#" content="' + article.name + '" />' +
                '<meta property="og:type" prefix="og: http://ogp.me/ns#" content="article" /> ' +
                '<meta property="og:url" prefix="og: http://ogp.me/ns#" content="' + article.url + '" /> ' +
                '<meta property="og:image" prefix="og: http://ogp.me/ns#" content="' + article.mainImg  + '" /> ' +
                '<meta property="og:description" prefix="og: http://ogp.me/ns#" content="' + article.description + '" /> ' +
                '<meta property="og:site_name" prefix="og: http://ogp.me/ns#" content="болитживот.рф" />' +
                '<meta name="keywords" content="' + article.name + '"> ' +
                '<meta name="author" content="Поздникина О Ю">' +
                '<meta name="description" content="' + article.description + '">';
            return res.end(renderHTML(componentHTML, metaHeader, metaTitle));*/

            Resolver
                .resolve(() => <RouterContext {...renderProps} /> )
                .then(({ Resolved, data }) => {
                    var article =  data['.0.0'].article;
                    var metaTitle = article.name;
                    var metaHeader = '<meta property="og:title" prefix="og: http://ogp.me/ns#" content="' + article.name + '" />' +
                        '<meta property="og:type" prefix="og: http://ogp.me/ns#" content="article" /> ' +
                        '<meta property="og:url" prefix="og: http://ogp.me/ns#" content="' + article.url + '" /> ' +
                        '<meta property="og:image" prefix="og: http://ogp.me/ns#" content="' + article.mainImg  + '" /> ' +
                        '<meta property="og:description" prefix="og: http://ogp.me/ns#" content="' + article.description + '" /> ' +
                        '<meta property="og:site_name" prefix="og: http://ogp.me/ns#" content="болитживот.рф" />' +
                        '<meta name="keywords" content="' + article.name + '"> ' +
                        '<meta name="author" content="Поздникина О Ю">' +
                        '<meta name="description" content="' + article.description + '">';
                    res.send(renderHTML(renderToString(<Resolved />), metaHeader, metaTitle));
                })
                .catch((error) => res.status(500).send(error))
        });
    });

	//articles api routes
	app.get('/api/articles', helpers.isAuthenticated, articles.get);
	app.get('/api/article', helpers.isAuthenticated, articles.getOne);
    app.post('/api/article', helpers.isAuthenticated, articles.insertOne);
    app.put('/api/article', helpers.isAuthenticated, articles.updateOne);
    app.delete('/api/article', helpers.isAuthenticated, articles.delete);

    //users routes
    app.get('/api/users', helpers.isAuthenticated, users.get);
    app.get('/api/user', helpers.isAuthenticated, users.getOne);
    app.get('/api/user/telegram', helpers.isAuthenticated, users.getByTelegram);
    app.post('/api/user', helpers.isAuthenticated, users.insertOne);
    app.put('/api/user', helpers.isAuthenticated, users.updateOne);
    app.delete('/api/user', helpers.isAuthenticated, users.delete);
};

function renderHTML(componentHTML, headerHTML, titleHTML) {
    return `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Standard Meta -->
    ${headerHTML}
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/images/android-icon-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="/images/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16">
    <!--<link rel="manifest" href="/images/manifest.json">-->

    <!-- Site Properties -->
    <title>${titleHTML}</title>
    <link rel="stylesheet" type="text/css" href="/semantic/dist/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="/node_modules/semantic-ui/dist/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="/node_modules/semantic-ui-transition/transition.min.css">
    <link rel="stylesheet" type="text/css" href="/node_modules/react-trumbowyg/dist/trumbowyg.min.css">

    <link rel="stylesheet" type="text/css" href="/css/old/style.css">
    <!-- Yandex.Metrika counter -->
  <script type="text/javascript">
    (function (d, w, c) {
      (w[c] = w[c] || []).push(function() {
        try {
          w.yaCounter42546899 = new Ya.Metrika({
            id:42546899,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            trackHash:true
          });
        } catch(e) { }
      });

      var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://mc.yandex.ru/metrika/watch.js";

      if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
      } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
  </script>
  <!-- /Yandex.Metrika counter -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-91471920-1', 'auto');
    ga('send', 'pageview');

  </script>

  </head>

  <body id="blog">
    
        <!-- Following Menu -->
        <div class="ui large top fixed hidden menu">
            <div class="ui container">
                <a class="item" href="/">Главная</a>
                <a class="item" href="/abdominalpain">О боли в животе</a>
                <a class="item active" href="/blog">Блог</a>
                <div class="right menu">
                    <div class="item">
                        <a class="ui positive button" href="https://vk.com/gastroprocto">Получить консультацию</a>
                    </div>
                </div>
            </div>
        </div>
    
        <!-- Sidebar Menu -->
        <div class="ui vertical sidebar menu">
            <a class="item" href="/">Главная</a>
            <a class="item" href="/abdominalpain">О боли в животе</a>
            <a class="item active" href="/blog">Блог</a>
            <a class="item" href="https://vk.com/gastroprocto">Получить консультацию</a>
        </div>
    
        <div class="pusher">
            <div class="ui vertical masthead center aligned segment blog-top-header">
                <div class="ui small header" style="font-size: 0.7em; display: none">БолитЖивот.рф, НУЗ Отделенческая клиническая больница на ст. Петрозаводск, (8142) 71-44-48, 8 911 400-43-40</div>
    
                <div class="ui container">
                    <div class="ui large secondary pointing menu">
                        <a class="toc item">
                        <i class="sidebar icon"></i>
                        </a>
                        <a class="item" href="/">Главная</a>
                        <a class="item" href="/abdominalpain">О боли в животе</a>
                        <a class="item active" href="/blog">Блог</a>
                        <div class="right item">
                            <a class="ui basic button" href="https://vk.com/gastroprocto">Получить консультацию</a>
                        </div>
                    </div>
                </div>
    
                <div class="ui main text container" id="blog-header-block">
                    <span id="blog-header" class="ui header">Врачебный блог</span>
                </div>
            </div>
    
            <div class="ui vertical segment" style="padding-top: 2em; padding-bottom: 2em;">
                <div class="ui stackable grid container">
                    <div class="row">
                        <div class="five wide column">
                            <div class="left-blog-block">
                                    <div class="ui text myshape transition">
                                        <div class="sides">
                                            <div class="ui header side"><a href="https://gastroprocto.ru/blog/5893345ef4b4492fd629d92b/%D0%A4%D0%93%D0%94%D0%A1%20(%D1%84%D0%B8%D0%B1%D1%80%D0%BE%D0%B3%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B4%D1%83%D0%BE%D0%B4%D0%B5%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F)">Фиброгастродуоденоскопия, ФГДС</a></div>
                                            <div class="ui header side"><a href="https://gastroprocto.ru/blog/589343b6f4b4492fd629d92c/%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%91%D0%98%D0%9E%D0%9F%D0%A1%D0%98%D0%AF">БИОПСИЯ</a></div>
                                            <div class="ui header side"><a href="https://gastroprocto.ru/blog/58936e50f4b4492fd629d92d/%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%A5%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D0%B0%D0%BA%D1%82%D0%B5%D1%80%20%D0%BF%D0%B8%D0%BB%D0%BE%D1%80%D0%B8%20(%D0%9D%D0%A0)">Helicobakter pylori</a></div>
                                            <div class="ui header side"><a href="https://gastroprocto.ru/blog/588c6ab3bab7332f90eecaef/%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B6%D0%B5%D0%BB%D1%83%D0%B4%D0%BE%D1%87%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%BA%D0%B0">Кислотопродуцирующая функция</a></div>
                                            <div class="ui header side"><a href="https://gastroprocto.ru/blog/589378a6f4b4492fd629d92e/%D0%A0%D0%A0%D0%A1%20(%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F)">Ректороманоскопия, РРС</a></div>
                                            <div class="ui header side"><a href="https://gastroprocto.ru/blog/58937b52f4b4492fd629d92f/%D0%A4%D0%9A%D0%A1%20(%D1%84%D0%B8%D0%B1%D1%80%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F)">Фиброколоноскопия, ФКС</a></div>
                                        </div>
                                    </div>
                                    <svg version="1.1" id="digestive" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         viewBox="300 220 400 800">
    
            <path id="path10680" class="st0" d="M439.2,387.5
                c-6.8-9.1-1.4-15.4,1.9-20.2c0.4-0.6,0.3-1.6,0.3-2.2c0-0.6-1.1-0.1-1.1-0.7c0.2-10.6,1.6-20.7,3.9-22.6c3.6-0.4,1.7-6.6,1.4-8.8
                c0.7,0.9,4.2,0.3,6.2,0.2c0.4,2.5-1.2,14.8-1.2,16c0,2.5-5.4,21.6-2.9,33.7l-5.8,7.4C442.3,389,440.1,387.2,439.2,387.5L439.2,387.5
                z"/>
            <g>
                <path id="path128" class="st1" d="M408.4,233.1
                    c-7.5,3-14.3,12.8-15.4,20.6c-0.9,6.6-0.4,13.3-2.1,19.8c-1.1,4.2-4.8,7.7-7.5,11.4c-4.2,5.5-8.7,11.1-12.4,17
                    c-5,7.8-6.4,13.5,3.4,17c3,1.1,5.1,0.8,6.9,3.7c1.7,2.8-1.3,11.6-1.7,14.5c0,2.6,3.2,4.7,8,2.6"/>
            </g>
            <g>
                <path id="path130" class="st1" d="M392.6,348.6
                    c-9.8-3.3-6,6.2-5.5,9.8c0.7,5.8-3,10.9-2.7,16.6c0.6,11.6,17.9,15.3,28.4,16.4c5.4,0.6,10.8-1.2,12.8,4.4c1.8,5.1,4.4,10,7,15.2"
                    />
            </g>
            <path id="path172" class="st1" d="M295.7,462.1c24.6-35.9,91.2-27.1,123.9-57.6"/>
            <path class="st2" d="M520.3,595.6c-3.9-11.5-7-15-18.9-15.4c-14.9-0.4-32.2,12.9-33.3,27.2c-0.2,0.9-1.4,1.4-3-3.2
                c-4.7-2-10.8,5.3-8.3,8.6c2.9,2.6,4.2,4.1,4.5,5.3c1.2,4.4,2.9,9.6,3.2,13.2c0.7,8.4,0.1,11.2-5.1,12.1c-6.5,1.1-10.8-1.8-14.5-3.9
                c-2.2-1.3-5-0.9-6.5,0.2c0,0.2-0.1,0.3-0.2,0.4c0,0,0,0,0,0.1c0,1.9,0.1,3.8-0.4,5.6c-0.5,1.7-1.4,3.2-1.9,4.9
                c0.1,0.2,0.1,0.4-0.1,0.6c3.3,4.5,5.3,6.6,7.8,10.2c2,2.8,7.5,6.9,11.5,8.2c1.1,0.4,2.6,0.8,4.2,1.3c2.7,0.4,5.4,1.1,8.1,1.3
                c3.3,0.2,6.6,0.1,9.9,0.1c7.1-2.2,14.9-4.5,30.1-16.8c7.5-6.1,14-14.3,15.4-26.6h0C523.5,623.3,524.9,609.3,520.3,595.6z"/>
            <path class="st3" d="M455.8,568.8l-0.2,0c-0.5-10.4-3.1-45.7-7.8-90.8c-0.3-2.9-0.4-9.8-0.1-12.7c2.6-22.5,3.3-49,2.7-65.6
                c-0.3-6.8-2-12.5-2.6-17.6l-8.1,8.2c1.1-0.3,2.5,1.1,2.6,2.2c-1,2.6-10.9,40.2-4.3,73.6c0.5,2.7-0.1,8.4-0.5,11.2
                c-4.5,36.9-0.5,70.8,4.5,91.3l-0.2,0c2.3,17.1,5.8,32.5,13.8,42.5c0.6-6.7,5-6.8,8.5-8.1C461.7,595.9,457.5,585,455.8,568.8z"/>
            <g>
    
                    <path id="path10149" class="st4" d="
                    M502.3,735.7c0.9-1.3,2.6-1.4,4.1-1.8c2.3-4.4,6.9-4.7,10.1-8.1c5.1-5.4,3.4-20.5-4.3-23.3c-6.9-2.5-14,2.4-18.6,6.7
                    c-4.2,3.9-9.1,9.2-8.8,15c-0.1-1-0.1-2.5-0.5-3.4c-1.5,0.5-3.1,1.7-4.9,1.8c2-0.8,4.2-1.6,5.8-3c3.1-2.9,5.1-8.5,5.2-12.4
                    c0.1-4.1-2.5-6.9-6.9-7.6c-11.3-1.9-16.8,8.6-26.8,9c-19.9-4-28.5,14.5-22.7,15.4c1-0.9,1.2-1.7,2.6-2.2c1.7-0.6,3.6-0.7,5.3-1
                    c1.9-0.3,4-0.3,5.9-0.1c2.4,0.2,4.6,1.1,6.9,1.5c1.8,0.3,3.6,0.4,5.4,0.8c1.5,0.3,4.9,1.8,6.1,0.4c0.6-0.7,0.8-1.7,1.5-2.4
                    c0.8-0.9,1.8-1.6,2.7-2.4c2.3-2,4.5-4.3,6.2-6.7c1-1.4,0.8-3.7,0.4-5.4c0.5,1.3,0.2,2.7,0.9,3.9c0.3-0.8,3.7-1.2,4.6-1.7
                    c-1.9,0.5-4,1.3-5.4,2.5c-2,1.8-3.2,4.5-5,6.5c-1.6,1.8-6.2,3.2-5.8,6c0.2,1.5,1.7,1.8,3.2,2.5c2.4,1.2,4.7,2.3,7.1,3.5
                    c2.8,1.3,9.9,3.3,12.6,1c1.7-1.4,3.3-3.6,4.9-5.3c4.1-4.3,9.6-8,12-13.4c-0.4,1.9-2.8,4.8-3.9,6.8c2-1.6,3.8-2.7,6.5-3.1
                    c-5.8,1.3-8.4,4.1-12.2,8c-1.8,1.9-3.3,3.9-5,5.8c-0.9,1-2.2,1.9-3,3c-0.7,1-0.5,1.7-0.6,2.8c-0.1,1.8-1.1,2.9-1.7,4.7
                    c-1.1,3.2,1.9,4.9,4.7,6c1.6,0.6,3.2,1.1,4.8,1.8c0.6,0.3,1.7,0.7,2.1,1.1c0.9,0.9,0.4,2,0.7,3c0.3,1.2,1.4,2.3,1.7,3.6
                    c0.3,1.3,0.4,2.7-0.2,3.9c-0.6,1.2-2,1.8-2.4,3c3.5,2.7,11.9,4.7,14.4,0.2c0.8-1.4,0.9-3.2,1-4.7c0.1-2.1,0.3-4.3,0.1-6.5
                    c-0.1-1.6-0.5-3.1-0.7-4.7c-0.2-1.1-0.9-3-0.6-4.1c0.2-0.7,1.3-1.5,1.8-2.1c1.1-1.3,2-2.8,3.2-4c-2.1,1.7-4.6,4.5-4.4,7.2
                    c0.2,3,0.4,6,0.5,9c0.2,4.2-0.5,8.2-2.3,12.1c-1.7,3.8-5.7,7.7-4.6,11.9c0.2-4,1.1-9,4.3-12c-1,0.9-4,0.8-5.2,0.7
                    c-1.9-0.2-3.6-0.8-5.2-1.7c-3.1-1.7-5.3,0.1-6.5,2.9c-0.8,1.9-0.3,4.4-0.1,6.4c0.2,2.1-0.5,4.1,0.5,6c1,1.8,2.6,3.4,3.4,5.2
                    c-0.5-0.9-1.1-1.7-1.6-2.5c-0.4-0.5-1.6-2.7-2.2-2.8c-0.6-0.1-0.9,0.5-1.4,0.9c-1.6,1.3-3.4,2.6-5.1,3.6c1.3-1.8,3.6-2.9,5.2-4.5
                    c1.5-1.4,0.8-3.5,0.8-5.2c0-2.5,0.5-5.3,1.1-7.7c0.7-2.9,4.3-3.8,5.7-6.3c0.6-1.1,1.2-3.1,1-4.3c-0.2-1-2.5-3.3-2.5-3.6
                    c0.3-2.1-1.4-3.9-3.4-4.7c-2.2-0.8-4.1-0.3-6,0.9c-3.7,2.3-5.4,6.4-7.5,9.8c-0.6,1-1.1,2-1.5,3c-0.4,0.8-1.5,2.2-1.5,3.1
                    c0,0.6,0.7,1.3,1,1.7c0.6,1,1.2,2,1.6,3.1c-0.2-1.1-1.7-4.5-3.2-4.3c1.8-5.4,6.2-10.1,9.3-14.9c0.4-0.7,0.8-1.4,1.4-2
                    c0.2-0.3,1-0.6,1.1-0.9c0.3-1-1.4-1.3-2-1.7c-0.8-0.6-1.3-1.7-1.4-2.6c-0.5-2.5,1.5-3.6,2-5c0.8-2.3-0.1-3.9-2.4-5
                    c-1.1-0.5-2.2-0.6-3.3-0.7c-0.7,0-1,0.2-1.9-0.1c-2.1-0.7-4.1-2-6.1-3c-2.1-1-4.4-1.8-6.6-2.6c-4.2-1.4-8.4-2.6-12.7-3.6
                    c-4.2-1-8.4-2.4-12.8-1.9c-2.5,0.3-7.5,1.2-8.1,4c-0.2,1.1,1.3,2.2,1.6,3.3c1,3.1-2.2,5.6-4.2,7.7c-2.2,2.2-4.3,4.5-5.5,7.3
                    c0.9,1.3,3.1,1.3,4.6,1.5c2.6,0.4,4.9,1.7,7.4,2.7c5.1,2,11,4.6,14.9,8.3c1.4-2.4,3.2-4.5,5.6-6.3c-4.3,4.9-7.1,6.6-3.3,12.7
                    c-0.6-4.1-3.4-7.3-7.2-9.4c-5.8-3.2-22.8-14.5-26.3-3.4c2.2-2.3,2.9-5.5,4.8-8c1.8-2.3,4.2-4.2,6.1-6.5c1.6-2.1,3.9-5.2,2.2-7.7
                    c-1.8-2.6-5-1.3-7.5-0.9c-9.2,1.5-15.2-0.7-23.7-3.5c-7.4-2.4-13.2-1.7-17.7,3.6c-1.9,2.2-4.4,3.8-4.7,6.4c-0.2,2.3,0.6,4.6,0,7.2
                    c-0.7,3.1-1.5,6-1.8,9.1c-0.4,4.5,1.8,8.4,1.7,12.9c-0.1,3-1.8,6.3-1.3,9.3c0.3,0.1,0.5,0,0.8,0.1c1,1.7,0,3.3,0.7,5.3
                    c1.4,3.6,5.3,9.8,9.5,11.1c2.8,0.8,8.5,1.6,11-0.2c1.3-0.9,1.6-2.9,2.1-4.2c0.8-2.3,2.4-5.4,4.5-6.9c5.3-3.7,13.7-0.4,18.2-5.3
                    c0.5-0.5,1-1.2,1.5-1.7c-0.8,1.1-1.9,2.3-2.3,3.5c0,0,0.1,0.1,0.1,0.1c2.1-0.3,4.5-0.6,6.6-0.5c-1.3,0.6-3.4,0.3-4.9,0.5
                    c-1.1,0.2-2.1,0.3-3.3,0.4c-1.8,0.2-3.4,0.9-5.1,1.1c-1.4,0.2-2.8,0.1-4.2,0.2c-3,0.3-6.2,0.9-8.2,3.1c-1.1,1.1-1.3,3.8-2,5.2
                    c-0.5,1-2.1,2.8-2.3,3.9c-1.1,5.9,7.3,12.1,12.4,14c6.6,2.4,8.7-2.4,12.3-6.3c4.5-5,9.9-8.9,16-12.1c2.3-1.2,2.9-2.1,2.9-4.6
                    c0.1,0.9,0.1,1.9,0.5,2.7c0.9-0.3,2-0.2,3-0.3c-3.8,0-7,2.5-9.9,4.5c-0.9,0.6-4.2,2.4-2.5,3.6c1.1,0.8,2.4,0.5,3.7,0.7
                    c1.5,0.2,3,0.7,4.4,1c1.6,0.4,7.5,1.5,5.2,3.7c1.5-0.4,3.3,0,4.8,0.3c0.8,0.1,1.9,0,2.5,0.4c-0.1-0.7,0.4-2,0.6-2.8
                    c0.6-2.5,1.8-4.9,3-7.2c0.6-1.1,3.4-4.2,4.9-3.7c-2.3,0.5-3.9,2.7-5,4.5c1.7-0.3,3.2-1.2,4.8-1.6c1.3-0.3,2.7-0.2,4-0.4
                    c-2.5,0.4-4.9,0.9-7.4,1.7c-1.2,0.3-1.5,0.4-2.1,1.4c-1,1.9-1.3,3.9-2.1,5.8c-0.3,0.7-0.7,1.4-0.6,2.2c0.5,2.5,3.9,3.4,6.2,4.4
                    c3.3,1.3,4.7,3.5,7.1,6c1.8,1.8,3.1,4.5,5.9,5.1c2.9,0.7,5.4-1.2,8-1.9c-1.9,0.9-4.7,0.7-6.2,2.2c-1.8,1.8-3.2,5.8-2.6,8.1
                    c0.3-2,2.2-6.5,0.8-8.1c-0.7-0.8-2.5-1.3-3.4-2.1c-3.1-2.8-4.6-7-8.8-8.8c-1.5-0.6-3.2-0.7-4.7-1.3c-1.9-0.8-2-3.1-4.1-3.7
                    c-0.8-0.2-6.6-0.2-6.7,0c0.2-0.5,0.7-0.8,1.3-0.9c-0.3-0.7-1.4-1.3-2.2-1.7c-3.8-1.7-10.4-3-14.5-1.8c-2.6,0.7-4.6,2.5-6.2,4.4
                    c-1.5,1.9-3.1,4.1-4.3,6.2c-0.7,1.3-0.2,2.4,1,3.2c1.1,0.8,2.9,1.6,4.2,2.1c3.5,1.5,7.4,0.5,11,0.8c2,0.2,3.7,0,5.4,1
                    c1.8,1,3,2.9,4.3,4.4c-1.5-2.4-6.9-5.2-10-5.5c-3.9-0.4-7.4,0.3-11.3-0.9c-2.9-0.9-10.3-5.1-12.9-1.7c-0.7,1-0.8,3.7-1.1,4.9
                    c-0.6,2.1-1.8,4.8-1.3,6.9c0.8,3.8,6.6,7.2,10,8.9c1.7,0.9,3.4,1.1,5.2,1.5c1.6,0.4,3.3,0.8,5,0.9c2.3,0.2,4.7,0.1,7.1,0.2
                    c1.9,0.1,3.7,0.4,5.6,0.5c2.4,0.1,4.9,0.3,7.3,0.2c0.9,0,1.6-0.4,2.5-0.5c1.1-0.2,2.1-0.2,3.1-0.1c-1.4,0.2-3.6-0.1-4.9,0.6
                    c1.2,0.7,2.1,1.7,3.3,2.4c-0.9-0.6-1.7-1.4-2.8-1.9c-0.8-0.4-1.5-0.4-2.4-0.4c-3.2-0.2-6.4-0.6-9.7-0.7c-3.6-0.1-7.1-0.4-10.7-1
                    c-7.2-1.1-15.1-3.4-18.5-9.9c-1.7-3.3,1.1-7.3,1.5-10.6c0.5-4.2-3.8-7.5-8.1-8.2c-1.8-0.3-6.1-4.1-8-3.5c-1.7,0.5-3.9,1.4-5.4,2.4
                    c-1.5,1-2.9,2.4-4,3.9c-2.8,4-2.2,2.5,2.5,3c3.5-0.8,10.4,4.1,11.7,2.9c-0.6,1.8-0.4,2.7-2.1,3.9c-1.5,1-1.6,1.1-2.1,2.7
                    c-1.2,3.2-0.4,5.1-0.5,8.6c-0.1,2.8,3.3,4.7,5.6,6.5c0.7,1,3,1.3,5,1c2.2,3.8,7.4,7.5,12.4,9.5c4.9,2,10.7,1.8,15.9,1.1
                    c3.9-0.5,7.2-0.4,11.1-0.2c4.7,0.3,8.3,0.3,12.9-0.7c3.4-0.8,8.2-1.6,8.6-5.6c0.3-2.5,0.4-6.2-1.3-8.3c-1.4-1.8-3.9-2.7-5.2-4.5
                    c-0.8,0.8-1.8,0.3-3,0.5c-1.3,0.3-2.4,1.1-3.8,1.2c-4.2,0.2-8.9-1.1-12.8-2.5c-2.9-1-6-1.2-8.8-2.4c-2-0.8-4.1-2.2-6.2-2.9
                    c-2.1-0.6-4.3,0.2-6.4,0.6c1.2,0,2.3-0.6,3.5-0.6c-0.5-0.9-1.1-1.8-1.3-2.8c0.7,3.5,4.7,3.1,7.4,4.2c0.9,0.4,1.6,0.9,2.4,1.3
                    c1.6,0.8,3.3,1.1,5,1.4c1.6,0.4,3.3,0.6,4.9,1c1.4,0.4,2.7,1.1,4.1,1.6c1.8,0.7,3.6,0.7,5.5,0.8c1.9,0.1,3.5-0.3,5.3-0.6
                    c1.5-0.3,3.3-0.6,3.9-2.1c0.6-1.6,0.1-3.7-0.6-5.2c-1.9-4.2-5.5-9.9-10.3-11.7c-1.3-0.5-1.9-1-2.9-1.7c-1.3-0.8-1.3-0.7-3.1-0.8
                    c-1.1-0.1-2.2-0.3-3.3-0.3c-1.3,0-2.5,0.3-3.9,0.3c1.6-1,3.9-0.9,5.6-0.4c-0.8-0.8-1.1-1.9-1.9-2.7c0.4,0.8,1.5,2.5,2.4,3
                    c0.8,0.4,2,0,2.8,0.2c1.7,0.4,2.9,1.9,4.6,2.6c2.1,0.8,4.7,2.1,6.2,3.8c1.5,1.7,2.1,4.2,2.9,6.2c0.7,1.8,1.6,3.6,1.7,5.5
                    c0.1,1.6,0.5,2.7,1.8,3.9c2.2,2,5.4,3.2,8.3,3.9c2.7,0.7,5.4,1,8.1,0.9c2.7-0.1,3.4-0.1,5.2-1.8c4.7-4.7,7.3-9.3,8.6-15.7
                    c0.3-1.6-0.5-3.5-1.7-4.8c-1.5-1.8-4.7-1.6-6.7-2.7c0,0,0.1-0.2,0.1-0.3c-5.5-1.9-10.8-3.2-11.4-9.4c-0.2-2.8,0.8-5.4,2.2-7.7
                    c3.4-5.8-3.2-7.3-7.2-9.4c-1.2-0.6-2.9-2-4.3-2c-2.4-0.1-4.1,2-6.4,2.3c-2.6,0.2-5.8-0.8-8.3-1.4c-1.9-0.4-3.5-0.9-5.1-1.8
                    c-1.6-0.9-2.9-1.5-4.7-0.7c-2.4,1.1-2.6,4.1-5.2,5.8c-2.5,1.6-5.5,2.6-8.1,3.9c-2.8,1.4-8.9,3.6-9.9,6.7c-0.7,2.2-0.7,5.4,0.4,7.5
                    c-1.2-2.9-0.2-5.6-0.4-8.5c-0.1-1.3-0.4-1.3-1.6-1.8c-2.3-1-4.7-1.4-6.3-3.4c1.3,1.7,5.1,3.5,7.3,3.8c1.3,0.2,3.9-1.2,5.1-1.7
                    c2.8-1,5.4-2.7,8-4.1c2.9-1.5,6.2-2.4,7.8-5.3c0.9-1.6,2.1-2.8,1.5-4.7c-0.5-1.6-2.1-3-3.5-3.9c-1.6-1-3.3-1.9-5.2-2.4
                    c-1.4-0.4-2.9-0.5-4.4-1c-1.3-0.4-2.3-1.1-3.6-1.4c-2.6-0.8-5.5-0.7-8.2-0.5c-1.3,0.1-2.6,0.1-3.8,0.4c-1.2,0.3-2.4,0.7-3.6,0.3
                    c-2.5-0.9-3.6-3.9-3.7-6.1c-0.2-3.1,1-5.5,1.8-8.3c0.6-1.9,1.2-3.8,1.1-5.7c-0.1-1.4-0.3-1.5-1.9-1.7c-1.4-0.2-2.7-0.3-4.1-0.1
                    c-3.6,0.4-5.4,3.6-6.4,6.4c-1.3,3.6-2.4,6.9-2.8,10.7c-0.4,3-0.4,5.7,0.2,8.6c0.6,2.7,0.4,5.1,4,4.6c-0.7-0.2-1.6,0.3-2.4,0.1
                    c0.9,2.3,2.3,4.8,3.7,6.9c-3-3.5-5.3-8.3-6-12.7c-0.5-3.4,0.2-7.7,1.3-11c1.4-4.2,1.1-10,5.8-12.5c0.3-0.4,1.2-1,1.9-1.1
                    c-5.7,0.6-12.3-1-13.3-6.9c0.9,2.6,4,5.8,7,6.7c1.7,0.5,3.7,0,5.5,0.2c1.2,0.1,2.1,0.1,3.4,0c2.3,0,4.5,0.3,6.7-0.3
                    c3-0.8,6.3-2.4,9-3.8c-3.2,1.2-6.1,3-9.2,4.3c-1.3,0.6-1.8,0.7-2.2,2c-0.5,1.6-0.5,3.2-0.8,4.8c-0.3,1.5-1,2.9-1.5,4.4
                    c-0.9,3-1,6.5,1.3,9c2.5,2.8,6.5,0.2,10.2,0.1c4.8-0.2,7.9,1.7,12.1,3.1c2.5,0.9,5.8,1.2,8,2.7c2.1,1.4,3,3.6,5.5,4.7
                    c5.2,2.4,11.7,4.8,17.6,4.4c6-0.4,7.6-6,8.5-10.6c0.5-2.7,0.8-5.4,1.1-8.1c0.3-2.5,1.2-4.8,1.4-7.3c0.4-6.3-4.2-6.8-10.2-8.6
                    c-3-0.9-7.9-3.1-10.9-3c-1.8,0.1-4.9,1.7-6.9,2.1c2.1-0.9,4.2-1.8,6.3-2.5c-4.2-1.2-3.3-3.5-5.9-6.2c3,8.6,17.9,7,24.3,11.3
                    c6.1,4.1,3.1,9.9,2.4,16.3c-0.4,3.4-1,7.1-2.2,10.4c-1.1,3.1-2,3.3,0.6,5.4c1.3,1,3.2,1.1,4.7,1.8c3,1.3,6.7,3.7,5.6,7.3
                    c-0.7,2.3-2,4.4-2.4,6.8c-1.1,6.2,4.4,10.8,10.5,12.1c2.9,0.6,6.5,1.2,9.5,0.2c4.2-1.4,3.8-4.7,6.4-7.4c-1.4-0.9-2.1-2.6-2-4.2
                    c-0.1,6.4,13.2-1.5,15.3-2.8c5-3.2,5.6-7.9,8.2-12.6c2.2-4,0.4-5.4-0.5-9.9c-0.9-4.7,1.3-9.3,2-13.9c0.9-6.4,1.9-21-7.7-22.3
                    c-3-0.4-6.6,1-8.7,3.1c-1.2,1.2-1.6,2.8-3.2,3.7c-2.3,1.3-5.1-0.2-7.3,1.2c2.3-0.5,4.7-0.9,7-1.3"/>
            </g>
            <g>
                <path id="path10118" class="st5" d="M405.4,809.8
                    c-1.1-16.3-14.8-11.9-19.4-8.3c-3.3,2.6-9.3-3.4-10.3-4.9"/>
            </g>
            <g>
                <path id="rect11465" class="st6" d="M375.3,798.1l-1.4-3.5l3,2
                    L375.3,798.1z"/>
            </g>
            <g>
                <line class="st7" x1="437" y1="638" x2="434" y2="649"/>
            </g>
            <path class="st8" d="M475.9,672C475.9,672,475.9,672,475.9,672c0.1,0-1-4.9-4.7-7.8c-3.9-3.1-8.6-3.6-11.8-0.9
                c-3.3,2.8-4.8,6.9-4.5,7.1c0.2,0.1,0.4,0.1,0.5,0.2c-0.4,3.5,0.1,10.6-4.3,14.8c-8.9,8.5-25.8,5.1-30,2.6c-17-10.1-10.1-27.4-7.2-32
                c2.4-3.8,8.3-4.9,12.5-4.8c3.7,1.1,5.2,0.5,7.5-2c-0.1-0.1-0.2-0.3-0.1-0.4c0.4-1.6,1.2-2.9,1.8-4.5c0.7-1.9,0.6-4,0.6-6
                c0-0.2,0.1-0.4,0.3-0.4c0-0.1,0-0.3,0.1-0.4c-1-2.9-3.9-5.6-7.7-6.2c-10.1-2.8-23.5-0.8-30.7,8c-9.4,11.6-13.6,32.3-4.1,51
                c4.3,8.5,11.2,14.9,19.4,18.6c12.9,5.7,28.2,4.3,38,0.6c7-2.7,11.4-7.9,13.5-14.5c-1.2,9.1-0.9,13.7-1.9,17.5
                c7.7,4.3,11.1,6.2,13.6,5.8c2.2-8.1,0.9-8.8,1.9-23C479.5,681.7,478.2,677.1,475.9,672z"/>
            <g>
                <path class="st9" d="M547.3,715.9c-1,7.1-4,7.1-3.4,9.3c0.4,1.9,3.1,3.8,3.3,8.8c0.2,4.4-2.9,4.2-3.4,6.5c-0.6,2.3,0.3,3.5,1,5.7
                    c1.1,3.5,1,7.5-0.2,11c-0.4,1.2-1,2.1-0.7,3.2c0.3,1.2,1.4,2.6,1.9,3.8c1.3,3,1.1,5.9-0.1,9c-0.8,2.2-3.1,4-3.6,6.1
                    c-0.6,2.5,1.2,5.2,1.2,7.7c0,4.8-4,6.5-4.7,10c-0.8,4.1,2.5,7-0.2,11.3c-0.7,1.1-1.9,1.5-2.5,2.5c-1.1,1.8-0.9,3.5-1.5,5.6
                    c-1,3.4-4,5.3-5.9,8.1c-1.6,2.4-2.5,5.2-3.6,7.9c-9,20.5-23.5,22.6-43.9,25.6c-12.1,1.7-18.2-4.8-27.4-11c0-0.1-0.1-0.1-0.1-0.2
                    c0,0,0.1-0.1,0.1-0.3c0-0.1-0.1-0.2-0.3-0.2c0-0.1,0-0.2-0.1-0.3c-0.2-2.2,0.6-4.6,1.4-6.6c1-2.3,2.1-4.6,2.8-7
                    c0.4-1.4,0.7-3,0.7-4.5c0-0.5-0.1-0.8-0.2-1c0.1-0.1,0.1-0.2,0.1-0.3c0.2,0,0.3,0,0.4,0c2.5,0.1,27.2,11.4,27.5,9.6
                    c1.3-7.6,7.7-13.4,15.3-13.3c0-3.7-1.8-8.4-0.7-11.8c1.3-4,5.8-3.9,7-6.8c1.5-3.8-1.4-8.3,0.9-12c1.7-2.7,6.1-3.2,7.8-6
                    c0.5-0.8,2.8-13.8,2.6-15.4c-0.3-3.1-2.6-4.5-2-8.2c0.5-2.7,2.2-4.4,2.1-6.7c-0.1-3.2-2.2-6.5-1.5-10.8c0.6-3.1,1.3-3.8,0.7-6.3
                    c-1-4.2-3.3-4.6-2.5-9.9c0.5-3.5,0.9-6.8,3.9-8.8c-3.8,2.6-3.6-9.3-3.6-9.9c0.5-4.6,0-6.1-1-10.5c-0.3-1.1-0.5-2.2-0.5-3.3
                    c-0.3,0.1-0.6,0.2-1,0.2c-2.5,0.3-2.8,5.8-4.5,6.7c-4.3,2.4-3.3,2-6.2,6.9c-1.5,2.7-2.3,2.3-5.7,3.7c-1.4,0.6-6.2-0.5-7.4,0.3
                    c-0.9,0.6,0.1,2.4-2.7,3.9c-2.8,1.4-6.6,3.9-8.8,2.7c1.7,4.5-8.2,5.9-10.8,5.8c-0.5,3.5-14.8,8.7-16.7,5.5c0,0.9-7.6,5.4-11.1,2.7
                    c0.7,2.4-8.5,4-9.8,3.1c-4.1,3.8-12.6,4-15.9-0.9c-2.3,2.1-7.2,0.2-9.6-0.8c-0.9-0.4-2.5-1.7-3.5-1.7c-0.7,0-0.7,0.5-1.2,0.7
                    c-3.5,1.3-17.3-4.5-16.8-11.4c-6.6-0.6-4.4-3.8-10-8.8c1.5,1.3,2.2,3.1,3.6,4.5c-0.2,0-0.1,3.5-0.1,3.7c-0.1,1.5,0.2,2.7,0.4,4.1
                    c0.6,3.3-0.8,6.4-2.4,9.2c2.3,1.8,0.1,8.9-1.2,10.7c3.4,1.4,0.1,6.3-1.1,8c2.3,0.8,3,6.4,2.8,8.4c-0.3,2.6-0.3,3.9-1.5,5.1
                    c1-0.8,2-1.6,3-1.3c2.4,0.7,6.1,3.1,8.1,8.6c0,0,0,2.5-1.2,3.5c5.9-0.7,8,3,8,5.7c0.5,2.3,0.1,5.8-0.5,8.1c0,0,2-0.2,4.8-0.2
                    c3.4,0.2,5.8,7.3,6.3,14c-0.5,4.2-2.2,8.3-3.9,12.2c-1,2.3-3.4,5.6-4.9,7c0.4,0.8,0.9,1.5,1.5,3c1.8,3.5,4.3,4.2,7.4,8.4
                    c0.3,1.6-1.7,2.4-2.1,1.8c-2.1-3-5.2-5.1-7.1-8.2c-0.4-1.1-2-2.8-2-2.8c-1.4,0.6-6.2,3.1-8.8,3.3c-4.6,0.2-8.6-0.5-12.7-2.5
                    c-0.9-0.4-1.7-1-2.5-1.5c-7.1-5-9.9-14.1-10.5-22.5c-1.6,0-3.3-2.9-3.9-4.2c-1.5-3.1,0-6.7,1.8-9c0.4-1.7-1.9,2.6-6.6-0.2
                    c-1.9-1.3-3-3.6-3.6-5.7c-1.4-4.7-3.3-13.2,3.7-12.9c-4.6-0.9-6.8-3-7.4-6c-0.5-2.4-0.1-9.4,3.2-9.8c-1.3-2.8-2.8-5.8,1.5-7.1
                    c-3.3-2.9-2.9-7.8-2.1-10.6c0.2-0.7,1-1.3,1.2-2c0.3-0.9,0.2-2.1,0.1-3.2c-0.1-1.3-0.5-2.3-0.4-3.6c0.2-1.9,1.8-3.1,2.1-4.8
                    c0.2-1.2-0.4-3-0.4-4.3c0.1-3.4,1.6-4.8,3.5-7.2c0.6-0.8,0.7-0.6,0.9-1.4c0.4-1.3,0-3,0.4-4.3c0.6-2.3,2.2-5.1,4.6-5.9
                    c-0.9-1.7,0-4.6,0.5-6.4c0.9-3.3,2.6-5.5,5.2-7.6c2.3-1.8,5.5-3.1,8.5-2.6c1.5,0.3,5.5,1.4,6.4,2.5c1.2-2.6,7.3-3.5,9.7-2.4
                    c2.5,1.1,2.9,3.8,4.3,5.8c1.6,2.4,5.9,7.6,5.2,10.1c3.5-1.5,8.9,0.1,11.2,3.9c3.9-4.3,9.3-0.4,12.1,2.5c0.7-2.7,3.5,0.6,5.7,0
                    c3.4-0.9,4.4,0.6,5.9,1.5c0-0.1,0.1-0.3,0.2-0.4c-0.6-0.4,0.9-2.8,4.2-4.4c3.4-1.7,7.9-0.8,9.3,0.9c-1.1-3.1,5.2-4.5,7.2-5.1
                    c1.5-0.5,6.3,0.7,7.8,1.3c0.6,0.2,1.1,0.8,1.8,1.1c-0.8-3.1,3.4-5.8,5.7-6.9c2.8-1.3,6.6-0.2,9.2,1.2c2.3-3.8,10-11.6,11.5-8.1
                    c0.2-1.5,0.8-3.5,4.1-5c2.7-1.3,4-1.4,6.9-0.5c4-9.1,21.4-22.6,27.6-18.1c2.6,1.7,4.5,5.1,5.4,8.5c5.2-1.1,9.1,2.1,10.7,8.3
                    c5.8,7,6.1,11.4,3.5,20.1C546.6,705.8,548.2,709.2,547.3,715.9z"/>
            </g>
            <path class="st10" d="M454.4,833.4c0.4-1.5,0.7-3,0.7-4.5c0-0.6-0.1-1-0.4-1.2c-0.4-0.3-1.1-0.2-1.9-0.1c-2.4,0.2-4.8,0.9-6.9,2.1
                c-4.3,2.3-7.7,6.1-10,10.3c-4.4,7.9-3.9,13.1-1.8,20.3c0.7,2.5,0.9,2,2.7,4.5c-1.8,6.1-1.6,7.6-0.9,14.8c1.4,5.4,3.3,10.4,7.7,14.6
                c1.3,2.8,1.3,5.7,0,7.4l2.4-0.1c-0.2-2.2-0.2-5.1,0.7-7.3c3.1-2.9,6.3-7.4,7.1-12.5c0.3-1.6,0.7-13.8-4-17.5c2.9-3.5,3.3-7.8,2.1-12
                c-0.4-1.4-1.1-2.8-1.5-4.2c-0.7-2.4,0.3-5.3,1.2-7.6C452.5,838.1,453.7,835.8,454.4,833.4z"/>
            </svg>
                            </div>
                        </div>
                        <div id="blog-content" class="eleven wide column">
                        ${componentHTML}
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="ui inverted vertical footer segment">
                <div class="ui container">
                    <h3>Наши услуги:</h3>
                    <div class="ui stackable inverted divided equal height stackable grid">
                        <div class="six wide column">
                              <h4 class="ui inverted header">Эндоскопическая диагностика заболеваний пищевода, желудка, двенадцатиперстной кишки:</h4>
                              <div class="ui inverted link list">
                                <a href="https://gastroprocto.ru/blog/5893345ef4b4492fd629d92b/%D0%A4%D0%93%D0%94%D0%A1%20(%D1%84%D0%B8%D0%B1%D1%80%D0%BE%D0%B3%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B4%D1%83%D0%BE%D0%B4%D0%B5%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F)" class="item">ФГДС (фиброгастродуоденоскопия) – осмотр пищевода, желудка, начального отдела двенадцатиперстной кишки;</a>
                                <a href="https://gastroprocto.ru/blog/589343b6f4b4492fd629d92c/%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%91%D0%98%D0%9E%D0%9F%D0%A1%D0%98%D0%AF" class="item">Забор материала на гистологическое и цитологическое исследование (в т.ч. для выявления онкологической патологии) – БИОПСИЯ;</a>
                                <a href="https://gastroprocto.ru/blog/58936e50f4b4492fd629d92d/%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%A5%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D0%B0%D0%BA%D1%82%D0%B5%D1%80%20%D0%BF%D0%B8%D0%BB%D0%BE%D1%80%D0%B8%20(%D0%9D%D0%A0)" class="item">Тестирование на Helicobacter pylori (микроорганизмы вызывающие и поддерживающие развитие воспаления, в т.ч. язвенную болезнь);</a>
                                <a href="https://gastroprocto.ru/blog/588c6ab3bab7332f90eecaef/%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B6%D0%B5%D0%BB%D1%83%D0%B4%D0%BE%D1%87%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BE%D0%BA%D0%B0" class="item">Исследование кислотопродуцирующей функции желудка;</a>
                              </div>
                            </div>
                            <div class="six wide column">
                              <h4 class="ui inverted header">Эндоскопическая диагностика заболеваний толстой кишки, в т.ч. прямой кишки и анального канала:</h4>
                              <div class="ui inverted link list">
                                <a href="https://gastroprocto.ru/blog/589378a6f4b4492fd629d92e/%D0%A0%D0%A0%D0%A1%20(%D1%80%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F)" class="item">РРС (ректороманоскопия) – осмотр прямой кишки и анального канала с помощью короткой металлической трубки с оптическим волокном;</a>
                                <a href="https://gastroprocto.ru/blog/58937b52f4b4492fd629d92f/%D0%A4%D0%9A%D0%A1%20(%D1%84%D0%B8%D0%B1%D1%80%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F)" class="item">ФКС (фиброколоноскопия) – осмотр толстой кишки с помощью длинной гибкой трубки с оптическим волокном;</a>
                                <a href="https://gastroprocto.ru/blog/589343b6f4b4492fd629d92c/%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%91%D0%98%D0%9E%D0%9F%D0%A1%D0%98%D0%AF" class="item">Забор материала на гистологическое и цитологическое исследование (в т.ч. для выявления онкологической патологии) – БИОПСИЯ;</a>
                              </div>
                              <h4 href="#" class="item">Вы можете получить <a href="https://vk.com/gastroprocto">телефонные и онлайн консультации, а так же записаться на прием.</a></h4>
                            </div>
                        <div class="four wide column vcard" itemscope itemtype="http://schema.org/Organization">
                            <div itemprop="address" class="adr" itemscope itemtype="http://schema.org/PostalAddress">
                                <p class="ui inverted header">Контакты:</p>
                                <p style="margin-bottom:0.5em" class="locality">185001, Республика Карелия, город Петрозаводск</p>
                                <p style="margin-bottom:0.5em" class="street-address">Первомайский проспект, дом 17</p>
                            </div>
                            <p itemprop="name" style="margin-bottom:0.5em" class="fn org">НУЗ Отделенческая клиническая <span class="">больница</span> на ст. Петрозаводск</p>
                            <p class="ui inverted header" itemprop="telephone">Телефоны: <p class="tel">(8142) 71-44-48, 8 911 400-43-40</p>
                            <p class="ui inverted header">
                                Режим работы:
                                <time style="margin-bottom: 0" class="workhours" itemprop="department" datetime="Mo, Tu, We, Th, Fr 08:00−19:00">будни с 08:00 до 19:00</time>
                            <p>сб, вс выходные</p>
                        </div>
                    </div>
                </div>
    
                <div class="ui center aligned container">
                    <div class="ui inverted section divider"></div>
                    <img src="/img/footer.png" alt="Болитживот.рф" class="ui centered mini image">
                    <p>БолитЖивот.рф</p>
                    <!--<p>Все права защищены</p>-->
                </div>
            </div>
        </div>
        <script src="/js/jquery.min.js"></script>
        <script src="/semantic/dist/semantic.min.js"></script>
        <script src="/node_modules/semantic-ui-transition/transition.min.js"></script>
        <script src="/js/index.js"></script>
        <script src="/js/script.js"></script>
    </body>
    </html>`;
}


module.exports = routesAPI;