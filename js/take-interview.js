var studs= [
 
 {
   "student_id": "1313",
   "college_id": "ABC_123",
   "email_id": "r.nuzha@gmail.com",
   "first_name": "Nuzha",
   "current_cgpa": "3.14",
   "score_10": "80%",
   "score_12": "85%",
   "stream": "CSE",
   "course": "B.E.",
   "contact_no": "7896412371",
   "last_name": "Rukiya",
   "dob": "1993-12-31",
   "board10": "ICSE",
   "board12": "PU",
   "yop10": "2012",
   "yop12": "2016",
 },
 {
   "student_id": "123",
   "college_id": "ABC_123",
   "email_id": "yodebu@gmail.com",
   "first_name": "Debapriya",
   "current_cgpa": "4.5",
   "score_10": "90%",
   "score_12": "80%",
   "stream": "CSE",
   "course": "B.Tech",
   "contact_no": "12345667654",
   "last_name": "Das",
   "dob": "0000-00-00",
   "board10": "CBSE",
   "board12": "PU",
   "yop10": "2012",
   "yop12": "2016"
 },
 {
   "student_id": "423",
   "college_id": "ABC_423",
   "email_id": "jyoti.sharma@incture.com",
   "first_name": "Jyoti",
   "current_cgpa": "9.5",
   "score_10": "98%",
   "score_12": "99%",
   "stream": "ECE",
   "course": "4B.Tech",
   "contact_no": "412345667654",
   "last_name": "Sharma",
   "dob": "1993-03-03",
   "board10": "CBSE",
   "board12": "CBSE",
   "yop10": "2012",
   "yop12": "2016"
 }
];

//Modal IFRAME

// for(var jx in studs){
//   var modal_if = "<a class=\"waves-effect waves-light btn-large red darken-2 trigger-iFrame\">"+studs[jx].first_name+" "+studs[jx].last_name+"</a>"
//                 +"<div id=\"modal-iFrame\" class=\"iziModal\"></div>"
//                 +"<br>";

//          $("#sel_stud_list").prepend(modal_if);
// }

// //Modal initialization
// $(document).on('click', '.trigger-iFrame', function(event) {
//   event.preventDefault();
//   $('#modal-iFrame').iziModal('open', this); // Do not forget the "this"
// });

// //Modal options
// $("#modal-iFrame").iziModal({
//   title: 'The Mountain', //Modal title
//   subtitle: 'A gorgeous nature time lapse.', //Modal subtitle
//   fullscreen: true, //Icon to expand modal to fullscreen
//   headerColor: 'rgb(51, 76, 123)', //Color of modal header. Hexa colors allowed.
//   overlayColor: 'rgba(0, 0, 0, 0.4)', //Color of overlay behind the modal
//   iconColor: '',
//   iconClass: 'icon-chat',
//   iframe: true, //In this example, this flag is mandatory. Izimodal needs to understand you will call an iFrame from here
//   iframeURL: "https://player.vimeo.com/video/22439234?autoplay=1" //Link will be opened inside modal
// });

//FILL IN STUDENT DETS



var ix=0;

window.localStorage.setItem('cur_stud',JSON.stringify(ix));

// var s_name = "<table>"
//                 +"<thead>"
//                 +"<tr>"
//                 +"<td>"
//                 +"<h4 class=\"prev\" onclick=\"prevS()\" > << </h4>"
//                 +"</td>"
//                 +"<td>"
//                 +"<div id=\"col_name\" style=\"text-align: center; padding-top:122px;padding-left:80px\"><h2>"
//                         +studs[parseInt(localStorage.getItem('cur_stud'))].first_name+" "+studs[parseInt(localStorage.getItem('cur_stud'))].last_name
//                 +"</h2></div>"
//                 +"</td>"
//                 +"<td>"
//                 +"<h4 class=\"next\" onclick=\"nextS()\" > >> </h4>"
//                 +"</td>"
//                 +"</tr>"
//                 +"</thead>"
//                 +"</table>";

var s_name ="<h2 id=\"col_name\" style=\"text-align: center; padding-top: 80px;\">"
    +"<div ><h4 class=\"prev\" onclick=\"prevS()\" > << </h4></div>"
    +studs[parseInt(localStorage.getItem('cur_stud'))].first_name+" "+studs[parseInt(localStorage.getItem('cur_stud'))].last_name
    +"<div ><h4 class=\"next\" onclick=\"nextS()\" > >> </h4></div>"
    +"</h2>";

         $("#s_name").prepend(s_name);

// Populate buttons with student list


for(var jx in studs){
    var sl_but = "<div class=\"waves-effect waves-light btn-large blue darken-2 stud-list\" style=\"margin-left: 25%;\" onclick=\"changeStud("+jx+")\" >"
    +studs[jx].first_name+" "+studs[jx].last_name+"</div>";
    $("#stud_list").append(sl_but);
    studs[jx]["comments"] = [];
}

var dets =  //"<br>"
            //+"<h2 id=\"col_name\" style=\"text-align: center; padding-top: 35px;\">"+studs[ix].first_name+" "+studs[ix].last_name+"</h2>"
                        //+"<br><br>"
                        "<div class=\"table-responsive\">"
                        +"<table class=\"table table-hover table-striped\">"
                        +"<tbody>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">10th Marks</td>"
                        +"<td align=\"right\" id=\"stb_s_10\">"+studs[ix].score_10+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">12th Marks</td>"
                        +"<td align=\"right\" id=\"stb_s_12\">"+studs[ix].score_12+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">Stream</td>"
                        +"<td align=\"right\" id=\"stb_stream\">"+studs[ix].stream+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">Current CGPA</td>"
                        +"<td align=\"right\" id=\"stb_s_16\">"+ studs[ix].current_cgpa + "</td>"
                        +"</tr>"
                        +"</tbody>"
                        +"</table>"
                        +"</div>"
                        +"<br>";
         $("#stud_dets").prepend(dets);

// student comments

      //populate comments of current student
      studs[jx]["comments"] = [];
      for(var kx in studs[ix]['comments']){
              var stud_com = "<li class=\"done\">"
                  +"<i class=\"fa fa-close\"></i>"
                  + studs[ix].comments[kx]
                  +"</li>";

             $("#toDo").prepend(stud_com); 
      }

               

//making the iframe responsive

             var calcHeight = function() {
               $('#preview-frame').height($(window).height());
             }
             
             $(document).ready(function() {
               calcHeight();
             }); 
             
             $(window).resize(function() {
               calcHeight();
             }).load(function() {
               calcHeight();
             });        

//Change stud when button is clicked
function changeStud(sel){
  ix=sel;

  // try{
        // window.localStorage.removeItem("cur_stud");
        window.localStorage.setItem("cur_stud",JSON.stringify(sel));    
  // }catch(exception){
  //   alert("No");
  //   return false;
  // }

      $("#col_name").empty();
        var stit = "<div ><h4 class=\"prev\" onclick=\"prevS()\" > << </h4></div>"
        +studs[sel].first_name+" "+studs[sel].last_name
        +"<div ><h4 class=\"next\" onclick=\"nextS()\" > >> </h4></div>";
      $("#col_name").append(stit);

      $("#stb_s_10").text(studs[sel].score_10);
      $("#stb_s_12").text(studs[sel].score_12);
      $("#stb_stream").text(studs[sel].stream);
      $("#stb_s_16").text(studs[sel].current_cgpa);

      $('#toDo').empty();
      for(var kx in studs[sel]['comments']){
              var stud_com = "<li class=\"done\">"
                  +"<i class=\"fa fa-close\"></i>"
                  + studs[sel].comments[kx]
                  +"</li>";
              $("#toDo").prepend(stud_com); 
      }
}             


// Student Comments
// http://codepen.io/fsarachu/pen/YqZMKz

//Prev & next

function prevS(){
  var ix = parseInt(window.localStorage.getItem('cur_stud'));
  if(ix>0){
    console.log("prevS"+ix);
    ix-=1;
    window.localStorage.setItem('cur_stud',JSON.stringify(ix));
    changeStud(ix);
  }
}

function nextS(){
  var ix = parseInt(window.localStorage.getItem('cur_stud'));
  if(ix<studs.length-1){
    ix+=1;
    console.log("nextS"+ix);
    window.localStorage.setItem('cur_stud',JSON.stringify(ix));
    changeStud(ix);
  }
}