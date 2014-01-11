// Your Javascript will go here!

$(document).ready(function() {
  	$("#copyright").click(function(){ 
  		$(this).css('color','purple'); 
	});
});



  function replaceName() {
    var myNewName = window.prompt('Pick a new name!');
    document.getElementById('user-name').innerHTML = myNewName;
  }

  document.onclick = replaceName;


