$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		$(this).find('input[name=email], button').hide();
		$('#api_key').val('api key val');
		$('#api').show();
		$.post('http://swig.io/new', $(this).serialize(), function(d,t,x){
			console.log(d);
			console.log(t);
		}).fail(function() {
			$(this).find('label.error').show();
		});
	});
}); 
