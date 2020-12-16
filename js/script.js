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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';



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


// generateTags

function generateTags(){

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles: ', articles);

  /* START LOOP: for every article: */
  for(let article of articles){
  console.log('article: ', article);

    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log('tagsWrapper ', tagsWrapper);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute ('data-tags');
    console.log('articleTags: ', articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log('articleTagsArray: ', articleTagsArray);

    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
    console.log('tag: ', tag);

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag +'</a></li>';
      console.log('linkHTML: ', linkHTML);

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log('html: ', html);

    /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */

    tagsWrapper.innerHTML = html;

  /* END LOOP: for every article: */
  }
}

generateTags();

}
