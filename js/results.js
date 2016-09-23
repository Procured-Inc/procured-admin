var data = [
	 {
		"name":"Nuzha",
		"sid":"123",
		"score":"34"
	},
	{
		"name":"Prajwal",
		"sid":"423",
		"score":"54"
	},
	{
		"name":"Shubham",
		"sid":"523",
		"score":"64"
	}
];

// var trow = "<tr>"
// 			+"<td style\"text-align:center\">STUD_ID</td>"
// 			+"<td>STUD_NAME</td>"
// 			+"<td>STUD_ID_SCORE</td>"
// 			+"</tr>";

		for(var ix in data){
			setTimeout(fill(ix,data), 2000);
		}

function fill(ix,data){	
			var trow = "<tr>"
					+"<td>"+data[ix].sid+"</td>"
					+"<td>"+data[ix].name+"</td>"
					+"<td>"+data[ix].score+"</td>"
					+"</tr>";
			$('#t_body').append(trow);
}


function sortByScore(){
	var r_kids = document.getElementById('t_body').children;
	for(var jx=0;jx<r_kids.length-1;jx++){
		for(var kx=1;kx<r_kids.length;kx++){
			var val1 = r_kids[jx].children[2].innerText;
			var val2 = r_kids[kx].children[2].innerText;

			if(val1<val2){

				for(var lx in r_kids ){
					var temp=r_kids[jx].children[lx].innerText;
					r_kids[jx].children[lx].innerText=r_kids[kx].children[lx].innerText;
					r_kids[kx].children[lx].innerText=temp;
				}
				
			}
		}
	}

}