var Module = function () {
    var configurator = {};
    var gameId = "";

    $("#mdl-video").on("shown.bs.modal", function () {
        var src = $("#mdl-video iframe").attr("src");
        var autoplay = src.substr(src.length - 11);
        if (autoplay != "autoplay=1;")
            src += "autoplay=1;"

        $("#mdl-video iframe").attr("src", src);
    });

    $("#mdl-video").on("hidden.bs.modal", function () {
        var src = $("#mdl-video iframe").attr("src");
        var autoplay = src.substr(src.length - 11);
        if (autoplay == "autoplay=1;")
            src = src.substring(0, src.length - 11);

        $("#mdl-video iframe").attr("src", src);
    });

    var rebindEvents = function (e) {
        $(".show-video").unbind().on("click", function () {
            show_modal($("#mdl-video"));
        });

        $(".menu_link").unbind().on("click", function () {
            var self = $(this);
            if (self.hasClass("disabled")) {
                return;
            }

            var id = self.attr("data-id");
            $(".menu_link").removeClass("active");

            //$(".menu_link").each(function () {
            //    $(this).find("img").attr("src", "/assets/img/Module1/menu" + $(this).attr("data-id") + "-inactive.png");
            //});

            self.addClass("active");
            //self.find("img").attr("src", "/assets/img/Module1/menu" + $(this).attr("data-id") + ".png");
            $(".pages").addClass("hidden");
            $("#page_" + id).removeClass("hidden").addClass('animated fadeIn');
        });



        $(".a-red-dot1").unbind().on("click", function () {
            var self = $(this);
            var id = self.attr("data-id");

            $(".a-red-dot1").removeClass("active");
            $(".a-red-dot1[data-id='" + id + "']").addClass("active").addClass("clicked");

            $(".a_popup").addClass("hidden");
            $(".a_popup[data-id='" + id + "']").removeClass("hidden").addClass('animated fadeIn');

            var showNext = true;
            $(".a-red-dot1").each(function () {
                if (!$(this).hasClass("clicked"))
                    showNext = false;
            });
            if (showNext) {
                $(".btn-completed-section").removeClass("hidden");
                $(".menu_link").removeClass("disabled");
            }
        });



        $(".tab").unbind().on("click", function () {
            var self = $(this);
            var id = self.attr("data-id");
            var heights = ["934px", "1572px"];
            $(".tab").removeClass("active");
            $(".tab[data-id='" + id + "']").addClass("active").addClass("clicked");
            var h = heights[id - 1];
            $(".full-box").css("height", h);

            var showNext = true;
            $(".tab").each(function () {
                if (!$(this).hasClass("clicked"))
                    showNext = false;
            });
            if (showNext)
                $(".btn-completed").removeClass("hidden");
        });





        $(".btn-completed").on("click", function () {
            $.ajax({
                url: "/Home/ConfirmModule",
                data: "ID=" + gameId,
                type: "POST",
                success: function (data) {
                    if (data.Response == "OK") {
                        window.location = "/quiz/?ID=" + gameId;
                    } else {
                        if (data.Result == "")
                            data.Result = "Something went wrong.";

                        console.log(data.Result);
                    }
                }
            });
        });



        //$(".btn-steps").unbind().on("click", function () {
        //    $("#step_1").addClass("hidden").click();
        //    $("#step_2").removeClass("hidden").click();
        //});



        $(".btn-completed-section").unbind().on("click", function () {
            var id = $(this).attr("data-id");
            $(".menu_link[data-id='" + id + "']").removeClass("disabled").click();
        });
        /*
        $(".btn-tab").unbind().on("click", function () {
            var id = $(this).attr("data-id");
            $(".menu_link[data-id='" + id + "']").removeClass("disabled").click();
        });*/


        $(".select").unbind().on("click", function () {
            var span = $(this).find("span");

            $(".select").removeClass("select-active");
            $(this).addClass("select-active");

            $(".select").find("span").addClass("hidden");
            span.removeClass("hidden");


            //if ($('.select_2 > a.select-active').length != 0) {
            //    $("#page_1a").addClass("hidden");
            //    $("#page_1b").removeClass("hidden");
            //    $("#page_1c").addClass("hidden");
            //}

            //else if ($('.select_3 > a.select-active').length != 0) {
            //    $("#page_1a").addClass("hidden");
            //    $("#page_1b").addClass("hidden");
            //    $("#page_1c").removeClass("hidden");
            //}
            //else if
            //    ($('.select_1 > a.select-active').length != 0) {
            //    $("#page_1a").removeClass("hidden");
            //    $("#page_1b").addClass("hidden");
            //    $("#page_1c").addClass("hidden");
            //}



        });


        $(".select").unbind().on("click", function () {
            var self = $(this);
            if (self.hasClass("disabled")) {
                return;
            }

            var id = self.attr("data-id");
            $(".select").removeClass("select-active");

            //$(".menu_link").each(function () {
            //    $(this).find("img").attr("src", "/assets/img/Module1/menu" + $(this).attr("data-id") + "-inactive.png");
            //});

            self.addClass("select-active");
            //self.find("img").attr("src", "/assets/img/Module1/menu" + $(this).attr("data-id") + ".png");
            //$(".subpages").addClass("hidden");
            //$("#subpage_" + id).removeClass("hidden").addClass('animated fadeIn');
        });

     /*   $(".a-red-dot3").unbind().on("click", function () {
            var self = $(this);
            var id = self.attr("data-id");

            $(".a-red-dot3").removeClass("active");
            $(".a-red-dot3[data-id='" + id + "']").addClass("active").addClass("clicked");

            $(".a_popup3").addClass("hidden");
            $(".a_popup3[data-id='" + id + "']").removeClass("hidden").addClass('animated fadeIn');

            var showNext = true;
            $(".a-red-dot3").each(function () {
                if (!$(this).hasClass("clicked"))
                    showNext = false;
            });
            if (showNext)
                $(".btn-completed-section3").removeClass("hidden");
        });


        $(".btn-completed-section3").unbind().on("click", function () {
            var id = $(this).attr("data-id");
            $(".select[data-id=2]").removeClass("disabled").click();
        });
        */

        $(".first-door").unbind().on("click", function () {
            $(".select_1 > a").addClass("select-active");
            $(".select_1").find("span").removeClass("hidden");
        });

  
        $("#btninstall").click(function () {
            $("#container").toggle();
            $("#pic3").hide();
            $("#btninstall").hide();
           
          });


        

        $(".btn-steps").unbind().on("click", function () {
            var id = $(this).attr("data-id");
            $(".step[data-id='" + id + "']").addClass("hidden").click();
            $(".step[data-id='" + ++id + "']").removeClass("hidden").click();
        });



        $('#checkbox').change(function () {
            setInterval(function () {
                moveRight();
            }, 3000);
        });

        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;

        $('#slider').css({ width: slideWidth, height: slideHeight });

        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

        $('#slider ul li:last-child').prependTo('#slider ul');

        function moveLeft() {
            $('#slider ul').animate({
                left: + slideWidth
            }, 200, function () {
                $('#slider ul li:last-child').prependTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        function moveRight() {
            $('#slider ul').animate({
                left: - slideWidth
            }, 200, function () {
                $('#slider ul li:first-child').appendTo('#slider ul');
                $('#slider ul').css('left', '');
            });
        };

        $('a.control_prev').click(function () {
            moveLeft();
        });

        $('a.control_next').click(function () {
            moveRight();
        });

        $("button.btn-scroll").click(function () {
            $('html,body').animate({
                scrollTop: $(".col-content").offset().top - 50
            },
                'slow');
        });
    };

    /*
    var button = document.getElementById('next'),
        count = 0;
    button.onclick = function () {
        count += 1;
        if (count > 5) {
            $(".slider-btn").removeClass("hidden");
        }
    };

    var button = document.getElementById('prev'),
        count = 0;
    button.onclick = function () {
        count += 1;
        if (count > 5) {
            $(".slider-btn").removeClass("hidden");
        }
    };*/



    return {
        init: function () {
            rebindEvents();
            show_modal($("#instructions"));
        },
        setGameId: function (id) {
            gameId = id;
        }
    };
}();

jQuery(document).ready(function () {
    Module.init();
});













var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}