window.onload = function(){
	const calcForm = document.getElementById("calcForm");
	calcForm.addEventListener("submit", function(e){
		let firstWeight = document.getElementById("weight").value;
		let firstReps = document.getElementById("reps").value;

		let oneRepMax = calculateOneRep(firstWeight, firstReps);
		
		document.body.append("Your one rep max is: " + oneRepMax);
		//document.write wont work for this, gotta figure out another way to format the page

	});
}

function calculateOneRep(weight, reps){ //calculates one rep max
	var percent = 100 - (reps * 2.5);
	var max = (weight / (percent/100)).toFixed(2).replace(/[.,]00/,"");
	return max;
}