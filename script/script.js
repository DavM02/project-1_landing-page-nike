

$(document).ready(function () {

  // ////////////////////////////////////////// toggle-menu

  $("#menu-lines").click(function () {
    $('#menu-wrapper').toggleClass('active')
    $('#menu-lines').toggleClass('active')
    $('.overlay').toggleClass('active')
  })



  // ////////////////////////////////////////// toggle-menu

})


// ////////////////////////////////////////// customized-select  

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// ////////////////////////////////////////// customized-select  


// ////////////////////////////////////////// slider

$(document).ready(function () {

  let isAnimating = false;
 
  $('#next').click(function () {

    if (isAnimating) {
      return; // Если анимация уже выполняется, прерываем обработку клика
    }

    isAnimating = true;

    var currentProduct = $('.product-image.active');
    var currentDisplay = $('.products-display .item.active');
    var currentName = $('#hero-section h2.active');

    currentProduct.removeClass('active');
    currentDisplay.removeClass('active');
    currentName.removeClass('active');

    var nextProduct = currentProduct.next('.product-image');
    var nextDisplay = currentDisplay.next('.products-display .item');
    var nextName = currentName.next('#hero-section h2');

    if (!nextProduct.length) {
      nextProduct = $('.product-image').first();
      nextDisplay = $('.products-display .item').first();
      nextName = $('#hero-section h2').first();
    }

    nextProduct.addClass('active');
    nextDisplay.addClass('active');
    nextName.addClass('active');

    $('.product-image.clicked').removeClass('clicked');
    if ($('.product-image.active').prev('.product-image').hasClass('product-image')) {
      $('.product-image.active').prev('.product-image').addClass('clicked');
    } else {
      $('.product-image').last().addClass('clicked');
    }

    setTimeout(function () {
      isAnimating = false;
    }, 1500);  
  });

  $('#prev').click(function () {

    if (isAnimating) {
      return; // Если анимация уже выполняется, прерываем обработку клика
    }

    isAnimating = true;

    var currentProduct = $('.product-image.active');
    var currentDisplay = $('.products-display .item.active');
    var currentName = $('#hero-section h2.active');

    currentProduct.removeClass('active');
    currentDisplay.removeClass('active');
    currentName.removeClass('active');

    var prevProduct = currentProduct.prev('.product-image');
    var prevDisplay = currentDisplay.prev('.products-display .item');
    var prevName = currentName.prev('#hero-section h2');

    if (!prevProduct.length) {
      prevProduct = $('.product-image').last();
      prevDisplay = $('.products-display .item').last();
      prevName = $('#hero-section h2').last();
    }

    prevProduct.addClass('active');
    prevDisplay.addClass('active');
    prevName.addClass('active');

    if ($('.product-image').has('.active')) {
      $('.product-image.active').removeClass('clicked')
      $('.product-image.active').next().addClass('clicked')
      $('.product-image:not(.active)').next().removeClass('clicked')
    }

    if (prevProduct.prevAll('.product-image').length === 3) {
      $('.product-image').first().addClass('clicked');
    }

    else {
      $('.product-image').first().removeClass('clicked');
    }

    setTimeout(function () {
      isAnimating = false;
    }, 1500);

  });
});

// ////////////////////////////////////////// slider

// ////////////////////////////////////////// hover

$(document).ready(function () {
  $('.product .image').hover(function () {
    $('.product .image:not(.desk)').not(this).toggleClass('blured')
  })
});

// ////////////////////////////////////////// hover




