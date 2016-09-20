function getFormat(){

	var apti = document.getElementById('cb_wt_apti');
	var bev = document.getElementById('cb_wt_bev');
	var reas = document.getElementById('cb_wt_reas');
	var tech = document.getElementById('cb_wt_tech');
	var verb = document.getElementById('cb_wt_verb');

	var format =[apti, bev, reas, tech, verb];

	var ques= {};

	for(var ix in format){
		if(format[ix].checked){
			Object.defineProperty(ques, format[ix].value , []);
		}
	}

}