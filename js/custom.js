jQuery(document).ready(function($) {
    if ($('#socket').find('.footerpopup').length>0) {
        var popup = $('#socket').find('.footerpopup').waypoint({
                handler: function(direction) {
                if (direction==='up') {
                        $(popup).each(function(index,item){$(item.element).children('.textwidget').stop(true,true).animate({
                                'opacity' : 0,
                                'bottom' : '-150px'
                        },500,'easeInCubic')});
                    }
                if (direction==='down') {
                        $(popup).each(function(index,item){$(item.element).children('.textwidget').stop(true,false).animate({
                                'opacity' : 1,
                                'bottom' : '0px'
                        },500,'easeOutCubic')});
                    }
              },
                offset: function(){return $(window).height() + $('#socket').height()/2;} 
            });
            $('html').on("DOMSubtreeModified", function () {
                setTimeout(refreshwaypoints, 500);
            });
            function refreshwaypoints() {
                $(popup).each(function (index, item) {
                    item.context.refresh();
                });
            }
    }
    
    if ($('#main').find('.space-form-wrapper').length>0) {
    var formid = $('#main').find('.space-form-wrapper').find('input[name="gform_submit"]').val();
    $('.space-form-wrapper .gform_'+formid+'_14-group-wrap').find('.iphorm-errors-wrap.iphorm-hidden').hover(function(){
        $(this).css('display','none');
    });
    
    var radios = $('.space-form-wrapper .iphorm-input-radio-ul').find('.gfield_radio li').length;    
    $('.space-form-wrapper .ginput_container_radio').find('.gfield_radio li').each(function(rad_index){
        var checkbox = $(this);
        $(this).remove();
        $('<div class="wrapper">'+checkbox[0].innerHTML+'</div>').insertAfter($('.space-form-wrapper .options-wrapper').find('.flex_column:eq('+rad_index+')').find('.image-block'));
        if (rad_index == (radios-1)) {
        space_app_bg(); 
        $('.space-form-wrapper').one("load", function() {
            }).each(function() {
            if(this.complete) {
              space_app_radios();  
              }
          });
        }
    });
    
  
    }
	
	


});