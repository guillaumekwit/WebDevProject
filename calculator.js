window.onload = function(){
	const calcForm = document.getElementById("calcForm");
	calcForm.addEventListener("submit", function(e){
		let firstWeight = document.getElementById("weight").value;
		let firstReps = document.getElementById("reps").value;

		//get one rep max
		let oneRepMax = calculateOneRep(firstWeight, firstReps);

		//change h2 to list one rep max weight
		var ormHeader = document.getElementById("ormHeader");
		ormHeader.innerHTML = "Your one-rep max is: " + oneRepMax;

		//if table already exists, delete
		var existingRows = document.querySelectorAll('tr');
		for (let i=0; i<existingRows.length; i++){
			let columns = existingRows[i].querySelectorAll('td');
			for (let j=0; j<columns.length; j++){
				existingRows[i].removeChild(columns[j]);
			}
		}

		//fill in table header
		let tableHeader = document.getElementsByTagName("th");
		tableHeader[0].innerHTML = "Repetitions";
		tableHeader[1].innerHTML = "Weight";
		tableHeader[2].innerHTML = "Percentage of 1RM";


		//initialize table
		let table = document.getElementById("tableBody");
		let unit = document.getElementById("unit").value; //grabs unit (kg or lb)

		for (i=1; i<=30; i++){
			var weight = calculateWeight(oneRepMax, i)
			var percent = calculatePercent(i);
			
			//adds row to table
			let row = table.insertRow(i-1);
			let col1 = row.insertCell(0);
			let col2 = row.insertCell(1);
			let col3 = row.insertCell(2);

			col1.innerHTML = i;
			col2.innerHTML = weight + " " + unit;
			col3.innerHTML = percent + "%";
		}

	});
}

function calculateOneRep(weight, reps){ //calculates one rep max
	var percent = 100 - (reps * 2.5);
	var max = (weight / (percent/100)).toFixed(2).replace(/[.,]00/,"");
	return max;
}

function calculateWeight(maxWeight, reps){
	var percent = 100 - (reps * 2.5);
	var weight = (maxWeight * (percent/100)).toFixed(2).replace(/[.,]00/,"");
	return weight;
}

function calculatePercent(reps){
	var percent = (100 - (reps * 2.5)).toFixed(0);
	return percent;
}
	

