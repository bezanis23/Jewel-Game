$(document).ready(function(){
	startGame();

	$(document).on("keyup",function(event){
		
	});

	function startGame(){

	var targetNumber = Math.floor((Math.random() * 120) + 19);

	var crystals = [];

	var score = [];

	$("#target-number").text(targetNumber);

	for (i = 0; i < 4; i++) { 
    	var allCrystals = Math.floor((Math.random() * 12) + 1);
    	crystals.push(allCrystals);
    	$("#crystal-" + (i+1)).text(crystals[i]);
    	console.log(crystals);
		}

  	$('.all-crystals').on('click', function(){
  		crystals+= $(this).attr("#crystal-" + (i+1));
  		allCrystals = parseInt(crystals, 0)
  		alert(crystals);
  		/*crystals += $(this).attr('value');
        if(crystal- +(i+1) == ''){
            $("#score").text(crystals);
        }*/
	});
	};







});