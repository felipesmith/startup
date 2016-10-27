var mat = [[1,2,3],[4,5,6],[7,8,9]];


$(document).ready(function() {
        $("#oculto").fadeIn();
        $("#btn").click(joke);
        averiguar();
        $("#btnSearch").click(averiguar2)
        addToDOM(mat, document.getElementById('tabla'));
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
		data.items.forEach(function(el){
			$('<li>'+el.full_name+"</li>").appendTo('ul.List')
		});
	})
}

function averiguar2(){
	var url = "https://api.github.com/search/repositories";
	var input = $('#repo').val();
	$('ul.List').empty();
	$.getJSON(url, {q: input}, function(data){
		data.items.forEach(function(el){
			$('<li>'+el.full_name+"</li>").appendTo('ul.List')
		});
	})
}



function addToDOM (mat, where) { 
  var newTable = document.createElement("table"); 
  
  mat.forEach(function(fila, index, array){

  var newFila = document.createElement("tr");
  	fila.forEach(function(el){
  		if(index==0){
  		var newElemento = document.createElement("th");
  		var newContent = document.createTextNode(el);
  		newFila.appendChild(newContent);
  	}
  	else{
  		var newElemento = document.createElement("td");
  		var newContent = document.createTextNode(el);
  		newFila.appendChild(newContent);
  	}
  	})	
	newTable.appendChild(newFila); 
  } )

  where.appendChild(newTable);
}