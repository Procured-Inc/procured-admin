// Upcoming tests
var companies = {
company1: [
     {
	"name": "Nitte Meenakshi Institute of Technology",
	"city": "Bangalore",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"09",
	"dot_day":"27",
	"comp":1
}, {
	"name": "National Institute of Technology",
	"city": "Surat",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"09",
	"dot_day":"27",
	"comp":1
}, {
	"name": "Maulana Azad National Institute of Technology",
	"city": "Bhopal",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"11",
	"dot_day":"17",
	"comp":1
}
   ],
   company2: [
     {
	"name": "Nitte Meenakshi AM Institute of Technology",
	"city": "Mangalore",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2021",
	"dot_month":"09",
	"dot_day":"29",
	"comp":2
}, {
	"name": "National Institute of Technology",
	"city": "Trichy",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2018",
	"dot_month":"01",
	"dot_day":"27",
	"comp":2
}, {
	"name": "Maulana Azad National Institute of Technology",
	"city": "Bhopal",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964",
	"dot_year":"2016",
	"dot_month":"10",
	"dot_day":"17",
	"comp":2
}
   ]
};

//manage-tests

//sets a different row colour according to the city
var cityList=[];
function cityColours(companies){
	var count=0;
	$.each(companies, function(keys, values){
		for(var ix in values){
			if(values[ix].name != "cur_date"){
			var flag=1;
			for(var iy in cityList){
				if(cityList[iy][0] == values[ix].city) flag--;
			}
			if(flag>0){
				cityList.push([values[ix].city, getColour(count)]);
				count++;
			}
		}
	}
	});
}

cityColours(companies);

	$.each(companies, function(keys, values){
		for(var ix in values){
			if(values[ix].name != "cur_date"){
				col="";
			for(var iy in cityList){
				if(values[ix].city==cityList[iy][0]){
					col=cityList[iy][1];
					// console.log(ix+"_"+col +"_"+values[ix].name);
				} 
			}
			var cool = keys+","+ix;
			console.log(cool);
	         	var row = 	"<div class=\"col-lg-12\">"
	                        +"<div class=\"panel\" style=\"border-color:"+col+"; background-color:"+col+";\">"
	                        +"<div class=\"panel-heading\" style=\"color:#fff;\">"
	                        +"<div class=\"row\">"
	                        +"<div class=\"col-xs-2\">"
	                        +"<i class=\"fa fa-pencil-square-o fa-4x\"></i>"
	                        +"</div>"
	                        +"<div class=\"col-xs-10 text-right\">"
	                        +"<div style=\"font-size:22px;\">"+values[ix].name+" - <span style=\"font-weight:bold;\">"+values[ix].city+"</span></div>"
	                        +"<div>"+month(values[ix].dot_month)+" "+values[ix].dot_day+", "+values[ix].dot_year+"</div>"
	                        +" </div>"
	                        +"</div>"
	                        +"</div>"
	                        +"<a href=\"#\">"
	                        +"<div class=\"panel-footer\" onclick=\"viewDetails("+ix+","+values[ix].comp+")\" style=\"color:"+col+";\">"
	                        +"<span class=\"pull-left\" >View Details</span>"
	                        +"<span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>"
	                        +"<div class=\"clearfix\"></div>"
	                        +"</div>"
	                        +"</a>"
	                        +" </div>"
	                        +"</div>";
				 $("#mt_row").prepend(row);
			}
		}
	});

function month(num){
	switch(num){
		case "01":
	       return ("January");
	       break;
	case "02":
	       return ("February");
	       break;
	case "03":
	       return ("March");
	       break;
	case "04":
	       return ("April");
	       break;
	case "05":
	       return ("May");
	       break;
	case "06":
	       return ("June");
	       break;
	case "07":
	       return ("July");
	       break;
	case "08":
	       return ("August");
	       break;
	case "09":
	       return ("September");
	       break;
	case "10":
	       return ("October");
	       break;
	case "11":
	       return ("November");
	       break;
	case "12":
	       return ("December");
	       break;
	}
}

function getColour(index){
	switch(index){
		case 0 : return "#1abc9c";
				break;
		case 1 : return "#34495e";
				break;
		case 2 : return "#2ecc71";
				break;
		case 3 : return "#1abc9c";
				break;
		case 4 : return "#9b59b6";
				break;
		case 5 : return "#95a5a6";
				break;
		// case 6 : return "#34495e";
		// 		break;
		// case 7 : return "#e67e22";
		// 		break;
		// case 8 : return "#9b59b6";
		// 		break;
		default: return "#e74c3c";
				break;
	}
}

function viewDetails(ix,cix){
	// var data = kx+"_"+objIx;
	// window.loaction.href="col-details.htm?data="+data;
	console.log(cix+"Hello"+ix);
	localStorage.setItem('company', ix);
	localStorage.setItem('college', cix);
	window.location.href="col-details.html";
}

