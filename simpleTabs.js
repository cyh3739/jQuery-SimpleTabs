(function($){
    $.fn.simpleTabs = function(){
        return this.each(function(){
            var _this = $(this);
            var $contents =_this.find('[data-st-title]');
            

            /*=== add buttons ===*/
            var button = "";
            $contents.each(function(i){
                var title = $(this).data('st-title');
                if(i === 0){ button += '<ul class="simpleTabs_button"><li class="active">'+title+'</li>'; }
                else{ button += '<li>'+title+'</li>'; }
            });
            button += "</ul>";
            _this.prepend(button);


            /*=== button event ===*/
            _this.find('.simpleTabs_button li').click(function(){
                var index = $(this).index();
                $(this).siblings('li').removeClass('active');
                $(this).addClass('active');

                $contents.removeClass('active').hide().eq(index).show().delay(10).queue(function(next){
                    $contents.eq(index).addClass('active');
                next();});
            });


            /*=== init ===*/
            $contents.wrapAll('<div class="simpleTabs_contents"></div>');
            $contents.eq(0).addClass('active').show();
        });
    };
})(jQuery);