window.addEventListener('load', function () {
  let preloader = document.getElementById('preloader');
  let body =  document.body
  let wrapper =  document.getElementById('scroll')
 
  setTimeout(function () {
    if (preloader) {
      preloader.parentNode.removeChild(preloader);
      body.style.overflow = 'initial'
      wrapper.style.opacity = '1'
    }
  }, 4000)
});