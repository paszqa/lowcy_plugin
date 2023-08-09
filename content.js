// Remove trash
const recommendedPostsDivs = document.querySelectorAll('.container.header-container.overflow-hidden');
recommendedPostsDivs.forEach(div => {
  div.remove();
});

const recommendedPostsDivs2 = document.querySelectorAll('.recommended-posts-container');
recommendedPostsDivs2.forEach(div => {
  div.remove();
});

const recommendedPostsDivs3 = document.querySelectorAll('.col-lg-4.col-md-12.col-sm-12.col-xs-12.col-12.sidebar.is-sticked');
recommendedPostsDivs3.forEach(div => {
  div.remove();
});

const recommendedPostsDivs4 = document.querySelectorAll('.col-lg-4.col-md-12.col-sm-12.col-xs-12.col-12.sidebar');
recommendedPostsDivs4.forEach(div => {
  div.remove();
});

const recommendedPostsDivs5 = document.querySelectorAll('.intro');
recommendedPostsDivs5.forEach(header => {
  header.remove();
});

const recommendedPostsDivs6 = document.querySelectorAll('.browser-plugin-info');
recommendedPostsDivs6.forEach(div => {
  div.remove();
});

const recommendedPostsDivs7 = document.querySelectorAll('.nc-submeta-info');
recommendedPostsDivs7.forEach(div => {
  div.remove();
});

const recommendedPostsDivs8 = document.querySelectorAll('.small-moneymaker-container.moneymaker-container');
recommendedPostsDivs8.forEach(div => {
  div.remove();
});

const recommendedPostsDivs9 = document.querySelectorAll('.price-info');
recommendedPostsDivs9.forEach(span => {
  span.remove();
});

// Modify ARTICLE elements with class "post-widget post entry clearfix"
const articleElements = document.querySelectorAll('.post-widget.post.entry.clearfix');
articleElements.forEach(article => {
  article.style.margin = '2px';
  article.style.padding = '4px';
  article.style.fontSize = '12px';
  article.style.maxWidth = '30%';
  article.style.height = '400px';
  article.style.display = 'inline-block';
});

// Modify IMG elements with class "img-fluid thumb-image"
const imgElements = document.querySelectorAll('.img-fluid.thumb-image');
imgElements.forEach(img => {
  img.style.width = '100px';
});

const imagePartElements = document.querySelectorAll('.nc-media.image-cover');
imagePartElements.forEach(div => {
  div.style.width = '110px';
  div.style.marginRight = '5px';
});

const postTitleElements = document.querySelectorAll('.post-title');
postTitleElements.forEach(h2 => {
  h2.style.fontSize = '14px';
  h2.style.lineHeight = '18px';
});

const postTextElements = document.querySelectorAll('.promos-box-wrapper');
postTextElements.forEach(div => {
  div.style.margin = '5px';
  div.style.height = '100px';
  div.style.maxHeight = '100px';
  div.style.overflowWrap = 'break-word';
});

const documentElements = document.querySelectorAll('.main-container.container');
documentElements.forEach(div => {
  div.style.maxWidth = '80%';
});


// Modify MAIN elements with class "col-lg-8 col-md-12 col-sm-12 col-xs-12 col-12 content-column"
const mainElements = document.querySelectorAll('.col-lg-8.col-md-12.col-sm-12.col-xs-12.col-12.content-column');
mainElements.forEach(main => {
  main.style.maxWidth = '100%';
  main.style.marginRight = '10px'; // Adjust margin as needed
});
                                   
// Modify DIV elements with class "text-wrapper lead-wrapper lead-shorten with-offer ddd-truncated"
const textWrapperDivs = document.querySelectorAll('.text-wrapper.lead-wrapper.lead-shorten.with-offer.ddd-truncated');
textWrapperDivs.forEach(div => {
  div.style.fontSize = '14px';
  div.style.height = '200px';
});

const textWrapperDivs2 = document.querySelectorAll('.post:not(.post-single) .lead-wrapper.lead-shorten.with-offer');
textWrapperDivs2.forEach(div => {
  div.style.height = '120px';
  div.style.maxHeight = '120px';
});

const textWrapperDivs3 = document.querySelectorAll('.lead-wrapper.lead-shorten:not(.with-offer)');
textWrapperDivs3.forEach(div => {
  div.style.fontSize = '14px';
  div.style.height = '250px';
  div.style.maxHeight = '250px';
  div.style.color = 'rgb(179, 184, 208)';
});


// Modify LI elements with class "offer-row recommended-row"
const offerRowLIs = document.querySelectorAll('li.offer-row');
offerRowLIs.forEach(li => {
  li.style.fontSize = '13px';
  li.style.lineHeight = '13px';
  li.style.whiteSpace = 'nowrap';
  li.style.overflowWrap = 'break-word';
  li.style.height = '15px';
  li.style.maxHeight = '15px';
  li.style.width= '90%';
  li.style.maxWidth= '90%';
  li.style.textOverflow = 'fade';
  li.style.overflow = 'hidden';
});

// Modify IMG elements with class "img-fluid thumb-image"
const buttonElements = document.querySelectorAll('.nc-submeta-wrapper');
buttonElements.forEach(div => {
  div.style.paddingRight = '10px';
});

// Modify IMG elements with class "img-fluid thumb-image"
const buttonElements2 = document.querySelectorAll('.post-read-more');
buttonElements2.forEach(a => {
  a.style.paddingLeft = '5px';
  a.style.paddingRight = '5px'
  a.style.marginLeft = '5px';;
  a.style.borderRadius = '4px';
  a.style.fontSize = '14px';
  a.style.fontWeight = '800';
  a.style.textDecoration = 'none';
  a.style.height = '15px';
  a.style.backgroundColor = '#026da1';
});
