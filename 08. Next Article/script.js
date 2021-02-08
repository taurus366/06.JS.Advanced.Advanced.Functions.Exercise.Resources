function getArticleGenerator(articles) {







     let divContent =  document.querySelector('#content');

    return function () {
        if (articles.length > 0){
            let article = document.createElement('article');
            article.textContent = articles.shift();
            divContent.appendChild(article);
        }
    }

     //   let container = $('div#content');
        // return function () {
        //     if (articles.length > 0) {
        //         container.append($('<article>')
        //             .text(articles.shift()));
        //     }
        // }
   // }



}
