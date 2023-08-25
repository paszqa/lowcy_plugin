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
    mainThing.style.maxWidth = '100% - 370px';
});
const mainElements2 = document.querySelectorAll('.main-container');
mainElements2.forEach(mainThing => {
    mainThing.style.maxWidth = '1634px';
});
const mainElements3 = document.querySelectorAll('.main-container.container');
mainElements3.forEach(mainThing => {
    mainThing.style.padding = '20px 20px 20px 260px;';
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

//============= Remove comments and disqus recommendations================
browser.storage.local.get('removeCommentsSetting', result => {
  const removeCommentsSetting = result.removeCommentsSetting;
  if (removeCommentsSetting) {
    const similarElement = document.querySelectorAll('.comments.entry');
    similarElement.forEach(section => {
      section.remove();
    });
    const similarElement2 = document.querySelectorAll('#disqus_recommendations');
    similarElement2.forEach(section => {
      section.remove();
    });


    
  }
});


//===========Remove useless footer stuff at the bottom because it goes crazy====================

const shittyElement = document.querySelectorAll('.footer-widget');
shittyElement.forEach(thing => {
  thing.remove();
});

const shittyElement2 = document.querySelectorAll('.resize-sensor');
shittyElement2.forEach(thing => {
  thing.remove();
});

const shittyElement3 = document.querySelectorAll('sidebar.is-sticked');
shittyElement3.forEach(aside => {
  aside.style.width = '1px';
  aside.remove();
});
/*
// Intercept and block the main.js script
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.includes('main.js?v=c0c5d939')) {
      return { cancel: true };
    }
  },
  { urls: ['https://lowcygier.pl/wp-content/themes/lowcygier/assets/scripts/main.js?v=c0c5d939', 'moz-extension://7da54353-fd98-4a3c-b3b1-55be9e5a03bf/lockdown-install.js', 'moz-extension://7da54353-fd98-4a3c-b3b1-55be9e5a03bf/lockdown-run.js'] },
  ['blocking']
);
// Inject a blocking script to prevent main.js from loading
const blockingScript = document.createElement('script');
blockingScript.textContent = 'Object.defineProperty(window, "main_js_blocked", { value: true, writable: false });';
(document.head || document.documentElement).appendChild(blockingScript);
blockingScript.remove();
*/