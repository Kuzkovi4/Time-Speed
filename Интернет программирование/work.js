;(function(){ // Изолируется код от внешнего вызова, например, из консоли браузера
    var init = function() {
        $(".enter").addClass("red-button");
    }
    $(document).ready(function(){
        init();
    });
})(); // () - вызвать немедлено
