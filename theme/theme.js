(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var imgs = document.getElementsByTagName('img');
    Array.prototype.forEach.call(imgs, wrapImageWithA);
    new SimpleLightbox('.image-previewer', { /* options */ });
  });

  function wrapImageWithA(img) {
    var parent = img.parentElement;
    if (parent.nodeName === 'A'){
      return
    }
    var a = document.createElement('a');
    a.className = 'image-previewer';
    a.href = img.src;
    a.appendChild(img);
    parent.appendChild(a);
  }
}());
