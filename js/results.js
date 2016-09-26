var data = [
	 {
    "name":"Nuzha",
    "sid":123,
    "apti":34,
    "tech":43
  },
  {
    "name":"Vikash",
    "sid":911,
    "apti":73,
    "tech":73
  },
  {
    "name":"Prajwal",
    "sid":423,
    "apti":54,
    "tech":56
  },
  {
    "name":"Shubham",
    "sid":523,
    "apti":64,
    "tech":34
  },
  {
    "name":"Jyoti",
    "sid":023,
    "apti":74,
    "tech":73
  },
  {
    "name":"Debapriya",
    "sid":451,
    "apti":46,
    "tech":93
  },{
    "name":"Manogna",
    "sid":144,
    "apti":100,
    "tech":100
  },
  {
    "name":"Sujit",
    "sid":346,
    "apti":35,
    "tech":73
  },
  {
    "name":"Ashish",
    "sid":745,
    "apti":88,
    "tech":73
  },
  {
    "name":"Amarya",
    "sid":534,
    "apti":35,
    "tech":72
  },
  {
    "name":"Freya",
    "sid":235,
    "apti":36,
    "tech":73
  }
];

// var trow = "<tr>"
// 			+"<td style\"text-align:center\">STUD_ID</td>"
// 			+"<td>STUD_NAME</td>"
// 			+"<td>STUD_ID_SCORE</td>"
// 			+"</tr>";

// function makeTable(){

// }
// makeTable();

var switcher = Boolean(0);
var arr = ["sid","name","apti","tech","score"];
var chosen;

function compD(b,a){
		switch(chosen){
			case 0: return b.sid-a.sid;
					break;
			case 1: return a.name.localeCompare(b.name);
					break;
			case 2: return b.apti-a.apti;
					break;
			case 3: return b.tech-a.tech;
					break;
			case 4: return (b.apti+b.tech)-(a.apti+a.tech);
					break;
		}
		// return a.apti-b.apti;
}
function compA(a,b){
		switch(chosen){
			case 0: return b.sid-a.sid;
					break;
			case 1: return a.name.localeCompare(b.name);
					break;
			case 2: return b.apti-a.apti;
					break;
			case 3: return b.tech-a.tech;
					break;
			case 4: return (b.apti+b.tech)-(a.apti+a.tech);
					break;
		}
}

function sortBy(val){
	chosen=val;
	switcher=(!switcher);
	if(switcher){
		data.sort(compD);
	}else{
		data.sort(compA);
	}
	// data.sort(comp);
	var cutoff = localStorage.getItem('cutoff');
	$('#mytable tbody').empty();
	var dataz=[];
	for(var ix in data){
			if(data[ix].apti+data[ix].tech>cutoff){
				dataz.push(data[ix]);
				var trow = "<tr>"
								+"<td>"+data[ix].sid+"</td>"
								+"<td>"+data[ix].name+"</td>"
								+"<td>"+data[ix].apti+"</td>"
								+"<td>"+data[ix].tech+"</td>"
								+"<td>"+parseInt(data[ix].apti+data[ix].tech)+"</td>"
								+"</tr>";
						$('#t_body').append(trow);
			}
		}
		graphit(dataz);
		$('#stacked').children()[1].remove();
}

	// for(var ix in data){
	// 	var trow = "<tr>"
	// 					+"<td>"+data[ix].sid+"</td>"
	// 					+"<td>"+data[ix].name+"</td>"
	// 					+"<td>"+data[ix].score+"</td>"
	// 					+"</tr>";
	// 			$('#t_body').append(trow);
	// }

sortBy(0);
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

function setCutoff(){

	var cutoff = $('#cutoff').val();
	localStorage.setItem('cutoff',cutoff);

	var dataz=[];
		chosen=2;
		switcher=(!switcher);
		if(switcher){
			data.sort(compD);
		}else{
			data.sort(compA);
		}
		// data.sort(comp);
		$('#mytable tbody').empty();
		for(var ix in data){
			if(data[ix].apti+data[ix].tech>cutoff){
				dataz.push(data[ix]);
				var trow = "<tr>"
								+"<td>"+data[ix].sid+"</td>"
								+"<td>"+data[ix].name+"</td>"
								+"<td>"+data[ix].apti+"</td>"
								+"<td>"+data[ix].tech+"</td>"
								+"<td>"+parseInt(data[ix].apti+data[ix].tech)+"</td>"
								+"</tr>";
						$('#t_body').append(trow);
			}
		}

		// $('#stacked').remove();
		graphit(dataz);
		$('#stacked').children()[1].remove();
	

}


function graphit(data){
	var datax = data,
    config = {
      data: datax,
      xkey: 'name',
      ykeys: ['apti','tech'],
      labels: ['Aptitude','Technical'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['gray','red']
  };


	config.element = 'stacked';
	config.stacked = true;
	Morris.Bar(config);
}

// graphit(data);