$(function(){
	$('button').click(function(){
		 var requestURL = 'http://api.census.gov/data/2013/acs5?get=NAME,B01001_001E&for=school+district+(elementary):*&in=state:50&key=ff063179a36395ac91e4f4acf79b25f1678fc074';
	    $.ajax({
	        type: 'GET',
	        url: requestURL,
	        dataType: 'json',
	        success: Automatic,
	        error: function (data) {
	            console.log("ERROR:  " + data);
	        }

	    });

	    function Automatic ( data ) {
	        $.each(data, function(key, value){
	            var name = value[0],
	                district = value[1],
	                state = value[2];
	            $('.content').append( "<ul class='wrapper'> <li>" + name + "</li>"
	            + "<li>" + district + "</li>"
	            + "<li>" + state + "</li>"
	            + "</ul>");

	        });
	    }
	});
	// ff063179a36395ac91e4f4acf79b25f1678fc074

});