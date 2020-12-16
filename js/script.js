{
'use strict';

// titleClickHandler

const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute ('href');
    console.log(articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    /* [DONE]  add class 'active' to the correct article */

    targetArticle.classList.add('active');
}

// generateTitleLinks

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

const generateTitleLinks = function (customSelector = '') {

  /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    console.log('titleList: ', titleList);
    titleList.innerHTML = '';

  /* for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('articles: ', articles);

    let html = '';

    for(let article of articles){
        console.log('article: ', article);

        /* get the article id */

        const articleId = article.getAttribute ('id');
        console.log('articleId: ', articleId);

        /* find the title element */

        /* get the title from the title element */

        const articleTitle = article.querySelector(optTitleSelector).innerHTML;
        console.log('articleTitle: ', articleTitle);

        /* create HTML of the link */

        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        console.log('linkHTML: ', linkHTML);

        /* insert link into titleList */

        html = html + linkHTML;
        console.log('html: ', html);

        /* insertAdjacentHTML into titleList
        titleList.insertAdjacentHTML('afterend', linkHTML);
        console.log('insertAdjacentHTML titleList: ', titleList);*/

    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    console.log('links= ', links);

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }
}

generateTitleLinks();
}
