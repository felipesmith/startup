$(document).ready(function() {
        $("#oculto").fadeIn();
        $("#btn").click(joke);
        $("#btn").click(averiguar);
    });

function joke(){
	var url = "http://api.icndb.com/jokes/random";
	$.getJSON(url, function(data){
		$('#oculto').text(data.value.joke);
	})
  .fail(function(data) {
    $("#oculto").css('color', 'red');
  })
}

function averiguar(){
	var url = "https://api.github.com/search/repositories";
	$.getJSON(url, {q:'JavaScript'}, function(data){
		console.log(data.items.forEach(function(el){
			console.log(el.full_name);
		}));
	})
}

/*$('#btn').click(function(){
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.List')
    }
});*/