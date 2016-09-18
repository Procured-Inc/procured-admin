var json = {
colleges: [
     {
	"name": "Nitte Meenakshi Institute of Technology",
	"city": "Bangalore",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}, {
	"name": "National Institute of Technology - Surat",
	"city": "Surat",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}, {
	"name": "Maulana Azad National Institute of Technology",
	"city": "Bhopal",
	"students": "1500",
	"poc_name": "Srijit Nair",
	"poc_email": "srijit.nair@gmail.com",
	"poc_phno":"9856272964"
}
   ]
};

$(document).ready(function()
{
         $.each(json.colleges,function(key,value)
         {
             var option = "<option value=\""+value.name+ "\"> "+value.name+"</option>";
			 $("#ddCollege").append(option);
         });
});

function showValue(newValue,type){
	var range="";
	switch(type){
		case 10: range="range10"; break;
		case 12: range="range12"; break;
		case 16: range="range16"; break;
	}
    document.getElementById(range).innerHTML=newValue;
}

angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache']).controller('AppCtrl', function($scope) {
  $scope.myDate = new Date();

  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth(),
      $scope.myDate.getDate()-2);

  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
  
  $scope.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  }
});

$("body").addClass("thin");
$("body").mouseover(function(){
  $(this).removeClass("thin");
});
$("body").mouseout(function(){
  $(this).addClass("thin");
});
$("body").scroll(function () {
  $("body").addClass("thin");
});

/*edit or save form*/

function change() {
		if($("#mybutton").val()=="Edit")
			{
				enable();
				$("#mybutton").val("Save");
			}	
		else
	      {
	      disable();
				$("#mybutton").val("Edit");	
	      }

}

function enable()
{

	var len=document.getElementsByClassName("info").length;

	// var code=document.getElementsByClassName("info");
	// $code.prop("readonly",false);

	for (var i =0;  i <len; i++) {
		var x=document.getElementsByClassName("info")[i];
		x.readOnly=false;
	}

	// document.getElementByClass("info").read=false;
}

function disable()
{
	var len=document.getElementsByClassName("info").length;

	// var code=document.getElementsByClassName("info");
	// $code.prop("readonly",false);

	for (var i =0;  i <len; i++) {
		var x=document.getElementsByClassName("info")[i];
		x.readOnly=true;
	}
}

// Shows when Written Test is enabled

function writAlt()
{
	if(document.getElementById("cb_wt").checked == false){
		 $(".wt_opts").hide();
	}else {
		$(".wt_opts").show();
	}
    // if($('.cb_wt').is(":checked"))   
    //     $(".wt_opts").show();
    // if($('.cb_wt').is(":unchecked")) 
    //     $(".wt_opts").hide();
}

//Submit form for Create Test
function sub(){
	if(document.getElementById("cb_wt").checked == true){

	}
}

document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value;
};