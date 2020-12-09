 $(document).ready(function () {
        $("div img").hover(function () {
          var Color = $(this).attr("data-color");
          $("body").css("background", Color);
        });
      });



      