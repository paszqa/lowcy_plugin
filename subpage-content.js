// Remove breadcrumbs on top
const recommendedPostsDivs = document.querySelectorAll('.container.header-container.overflow-hidden');
recommendedPostsDivs.forEach(div => {
  div.remove();
});
      
// Remove alert boxes
const recommendedPostsDivs2 = document.querySelectorAll('.alert-grey');
recommendedPostsDivs2.forEach(div => {
  div.remove();
});

const recommendedPostsDivs3 = document.querySelectorAll('.post-meta-sc');
recommendedPostsDivs3.forEach(div => {
  div.remove();
});

const recommendedPostsDivs4 = document.querySelectorAll('.disqus-moneymaker-container.moneymaker-container');
recommendedPostsDivs4.forEach(div => {
  div.remove();
});

//Tags below article
const recommendedPostsDivs5 = document.querySelectorAll('.nc-tags');
recommendedPostsDivs5.forEach(div => {
  div.remove();
});

//Affilation info
const recommendedPostsDivs6 = document.querySelectorAll('.nc-affiliation-info');
recommendedPostsDivs6.forEach(div => {
  div.remove();
});

//Navigation crap below article
const recommendedPostsDivs7 = document.querySelectorAll('.post-navigation.post-navigation-widget.d-flex.align-items-center.justify-content-between.border-top');
recommendedPostsDivs7.forEach(div => {
  div.remove();
});

//Remove menu on top
const recommendedPostsDivs8 = document.querySelectorAll('.main-menu-wrapper');
recommendedPostsDivs8.forEach(div => {
  div.remove();
});
const recommendedPostsDivs9 = document.querySelectorAll('.intro');
recommendedPostsDivs9.forEach(header => {
    header.remove();
});


//Remove useless empty space
const articleElements = document.querySelectorAll('[id^="post-entry-"]');
articleElements.forEach(article => {
    article.style.padding = '12px 0 0 0';
    article.style.margin = '0px';
});

//Remove margin for related articles
const relatedArticlesElements = document.querySelectorAll('.similar-posts-container');
relatedArticlesElements.forEach(related => {
    related.style.margin = '12px 0 0 0';
    related.style.fontSize = '12px';
});

//Main class width
const mainElements = document.querySelectorAll('.col-lg-8.col-md-12.col-sm-12.col-xs-12.col-12.content-column');
mainElements.forEach(mainThing => {
    mainThing.style.maxWidth = '100%';
});




//==============Article text fixes==============================================================================
// Get all elements with class "nc-lead text-wrapper"
const leadTextWrappers = document.querySelectorAll('.nc-lead.text-wrapper, .nc-extended.text-wrapper');

// Apply font size to <p> elements inside the .nc-lead.text-wrapper
leadTextWrappers.forEach(wrapper => {
  wrapper.style.margin = '8px';
  const paragraphs = wrapper.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.fontSize = '14px';
    p.style.lineHeight = '20px';
  });
  const uls = wrapper.querySelectorAll('ul');
  uls.forEach(ul => {
    ul.style.fontSize = '14px';
    ul.style.lineHeight = '20px';
    const lis = ul.querySelectorAll('li');
    lis.forEach(li => {
        li.style.fontSize = '14px';
        li.style.lineHeight = '20px';
    });
  });
});
//==============Article text fixes (end)=========================================================================

const imageElements = document.querySelectorAll('.nc-media.image-cover');
imageElements.forEach(div => {
    div.style.width = '37%';
    div.style.display = 'inline-block';
    div.style.padding = '5px'; // Optional padding
});

const headerElements = document.querySelectorAll('.nc-main');
headerElements.forEach(header => {
    header.style.width = '56%';
    header.style.display = 'inline-block';
    header.style.padding = '5px'; // Optional padding
    header.style.paddingLeft = '3%';
});
const divContainerElements = document.querySelectorAll('.nc.has-media');
divContainerElements.forEach(div => {
    div.style.display = 'inline-block';
});


//================= Video fixes========================


const videoElements = document.querySelectorAll('.wp-block-embed.is-type-video');
videoElements.forEach(div => {
    div.style.width = '30%';
    div.style.margin = 'auto';
    div.style.padding = '5px'; // Optional padding
});


//=============Remove comments :D=====================

browser.storage.local.get('removeSimilarSetting', result => {
  const removeSimilarSetting = result.removeSimilarSetting;
  if (removeSimilarSetting) {
    const similarElement = document.querySelectorAll('.similar-posts-container');
    similarElement.forEach(section => {
      section.remove();
    });
  }
});