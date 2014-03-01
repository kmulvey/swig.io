$(document).ready(function(){
	$('form').on('submit', function(e){
		var $form = $(this);
		e.preventDefault();
		
		$.post('/new', $(this).serialize(), function(d,t,x){
			$form.find('input, button').hide();
			$('#api_key').text(d.apiKey);
			$('#user_key').text(d.userKey);
			$('#api').show();
		}).fail(function() {
			$(this).find('label.error').show();
		});
	});
}); 
