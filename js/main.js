

  $(function () {
    $('.burger').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('menu__btn-active')
      $('.header__menu-nav').toggleClass('header__menu-nav--active')
    });
    $(".header__menu-nav a, .logo").on("click", function (e) {
      e.preventDefault()
      var id = $(this).attr('href'),
        top = $(id).offset().top - 150
      $('body,html').animate({ scrollTop: top }, 1500)
    })
  })
  



