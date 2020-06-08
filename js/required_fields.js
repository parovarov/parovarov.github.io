(function( $ ){

	$(function() {

		$('.rf').each(function(){
			var form = $(this),
				btn = form.find('.btn_submit');
                $success = $('.success');

			
			form.find('.rfield').addClass('empty_field');

            var successPopup = function() {
                $success.fadeIn();
            }
			// Функция проверки полей формы
			function checkInput(){
				form.find('.rfield').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty_field');
					} else {
						$(this).addClass('empty_field');
					}
				});
			}
			
			// Функция подсветки незаполненных полей
			function lightEmpty(){
				form.find('.empty_field').css({'border-color':'#d8512d'});
				setTimeout(function(){
					form.find('.empty_field').removeAttr('style');
				},500);
			}
			
			setInterval(function(){
				checkInput();
				var sizeEmpty = form.find('.empty_field').size();
				if(sizeEmpty > 0){
					if(btn.hasClass('disabled')){
						return false
					} else {
						btn.addClass('disabled')
					}
				} else {
					btn.removeClass('disabled')
				}
			},500);

            btn.click(function(e){

                e.preventDefault();
                var $this = $(this);

                if($this.hasClass('disabled')){
                    lightEmpty();
                    return false
                } else {
                    //form.submit();
                    $this.hide();
                    successPopup();
                }
            });
			
		});
		
	});

	$('[data-lang]').on('click', function() {
		var _this = $(this),
			_lang = _this.data('lang');

		if (_lang == 'ru') {
            $('.lv').hide();
            $('.ru').show();
        } else {
            $('.ru').hide();
            $('.lv').show();
        }
	})

})( jQuery );