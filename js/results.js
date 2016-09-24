var data = [
	 {
		"name":"Nuzha",
		"sid":"123",
		"score":"34"
	},
	{
		"name":"Vikash",
		"sid":"911",
		"score":"73"
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
	},
	{
		"name":"Jyoti",
		"sid":"023",
		"score":"74"
	},
	{
		"name":"Debapriya",
		"sid":"451",
		"score":"46"
	}
];

// var trow = "<tr>"
// 			+"<td style\"text-align:center\">STUD_ID</td>"
// 			+"<td>STUD_NAME</td>"
// 			+"<td>STUD_ID_SCORE</td>"
// 			+"</tr>";

// function makeTable(){
	for(var ix in data){
		var trow = "<tr>"
						+"<td>"+data[ix].sid+"</td>"
						+"<td>"+data[ix].name+"</td>"
						+"<td>"+data[ix].score+"</td>"
						+"</tr>";
				$('#t_body').append(trow);
	}
// }
// makeTable();


// sort by score
var switcher = Boolean(0);

function compD(b,a){
		return a.score-b.score;
}
function compA(a,b){
		return a.score-b.score;
}

function sortByScore(){
	switcher=(!switcher);
	if(switcher){
		data.sort(compD);
	}else{
		data.sort(compA);
	}
	// data.sort(comp);
	$('#mytable tbody').empty();
	for(var ix in data){
		var trow = "<tr>"
						+"<td>"+data[ix].sid+"</td>"
						+"<td>"+data[ix].name+"</td>"
						+"<td>"+data[ix].score+"</td>"
						+"</tr>";
				$('#t_body').append(trow);
	}
}
// function sortByScore(){
//        var rkl = document.getElementById('t_body').children.length;
//        for(var jx=0;jx<rkl-1;jx++){
//                for(var kx=1;kx<rkl;kx++){
//        				var r_kids = document.getElementById('t_body').children;
//                        var val1 = r_kids[jx].children[2].innerText;
//                        var val2 = r_kids[kx].children[2].innerText;

//                        if(val1<val2){
//                        	// console.log(r_kids.children);

//                                for(var lx in r_kids.children ){
//                                        var temp=document.getElementById('t_body').children[jx].children[lx].innerText;
//                                        document.getElementById('t_body').children[jx].children[lx].innerText=r_kids[kx].children[lx].innerText;
//                                        document.getElementById('t_body').children[kx].children[lx].innerText=temp;
//                                }

//                        }

//                        // console.log(r_kids.children);
//                        document.getElementById('t_body').children=r_kids
//                    }
//                }
//            }

// function sorter(){
//        var kids = document.getElementById('t_body').children;

//        kids.sort(function(a,b){
//        				   var val1 = kids[a].children[2].innerText;
//                        var val2 = kids[b].children[2].innerText;
//                        return val1-val2;
//        });
 
//  		$.each(kids, function(index, row) {
//    			 $('#t_body').children('tbody').append(row);
//   		});

// }

// $("#myTable").tablesorter();