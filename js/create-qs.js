var ques = {
	apti : []
};

function addQues(){

	clearErr();

	// var x=0;

	// var tr=document.createElement('tr');

	// tr.innerHTML='<td>TI_ID</td>'+'<td>'+$('#ques').val()+'</td>'+'<td>'+$('#q_1').val()+'</td>'+'<td>'+$('#q_2').val()+'</td>'+'<td>'+$('#q_3').val()+'</td>'+'<td>'+$('#q_4').val()+'</td>';
	var in_ques = document.getElementById('ques');
	var in_q_1 = document.getElementById('q_1');
	var in_q_2 = document.getElementById('q_2');
	var in_q_3 = document.getElementById('q_3');
	var in_q_4 = document.getElementById('q_4');

	var flag=-1;

		if(in_ques.value.trim()=="" || in_ques.value==null){
			flag=0;
	    	$('#ques').parent('td').addClass('has-error');
	    }else if(in_q_1.value.trim()=="" || in_q_1.value==null){
	    	flag=1;
	    	$('#q_1').parent('td').addClass('has-error');
	    }else if(in_q_2.value.trim()=="" || in_q_2.value==null){
	    	flag=2;
	    	$('#q_2').parent('td').addClass('has-error');
	    }else if(in_q_3.value.trim()=="" || in_q_3.value==null){
	    	flag=3;
	    	$('#q_3').parent('td').addClass('has-error');
	    }else if(in_q_4.value.trim()=="" || in_q_4.value==null){
	    	flag=4;
	    	$('#q_4').parent('td').addClass('has-error');
	    }
	    if(flag<0){
	    		var corAnsCSS = " class=\'success\'";
				var qrow= '<tr>'
				+'<td width=\"10%\">TI_ID</td>'
				+'<td width=\"50%\">'+$('#ques').val()+'</td>'
				+'<td width=\"10%\">'+$('#q_1').val()+'</td>'
				+'<td width=\"10%\">'+$('#q_2').val()+'</td>'
				+'<td width=\"10%\">'+$('#q_3').val()+'</td>'
				+'<td width=\"10%\">'+$('#q_4').val()+'</td>'
				+'</tr>';

				var corAns = document.querySelector('input[type="radio"]:checked').id;;
				var test = {
					"testID": "TI_ID",
					"ques": JSON.stringify($('#ques').val()),
					"correct": corAns,
					"answers": [
						JSON.stringify($('#q_1').val()),
						JSON.stringify($('#q_2').val()),
						JSON.stringify($('#q_3').val()),
						JSON.stringify($('#q_4').val())
					]
				};

				$("#q_body").append(qrow);
				ques.apti.push(test);

							// $('#ques').text('');
							// $('#q_1').text('');
							// $('#q_2').text('');
							// $('#q_3').text('');
							// $('#q_4').text('');

							clearErr();

			
	    }

}

function clearErr(){
	$('#ques').parent('td').removeClass('has-error');
	$('#q_1').parent('td').removeClass('has-error');
	$('#q_2').parent('td').removeClass('has-error');
	$('#q_3').parent('td').removeClass('has-error');
	$('#q_4').parent('td').removeClass('has-error');
}