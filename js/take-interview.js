var studs= [
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
   "student_id": "4123",
   "college_id": "4ABC_123",
   "email_id": "4yodebu@gmail.com",
   "first_name": "4Debapriya",
   "current_cgpa": "44.5",
   "score_10": "490%",
   "score_12": "480%",
   "stream": "4CSE",
   "course": "4B.Tech",
   "contact_no": "412345667654",
   "last_name": "4Das",
   "dob": "40000-00-00",
   "board10": "4CBSE",
   "board12": "4PU",
   "yop10": "42012",
   "yop12": "42016"
 }
];

//Modal IFRAME

for(var jx in studs){
  var modal_if = "<a class=\"waves-effect waves-light btn-large red darken-2 trigger-iFrame\">"+studs[jx].first_name+" "+studs[jx].last_name+"</a>"
                +"<div id=\"modal-iFrame\" class=\"iziModal\"></div>"
                +"<br>";

         $("#sel_stud_list").prepend(modal_if);
}

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


var s_name = "<h2 id=\"col_name\" style=\"text-align: center; padding-top: 80px;\">"+studs[ix].first_name+" "+studs[ix].last_name+"</h2>";

         $("#s_name").prepend(s_name);

var dets =  "<br>"
            //+"<h2 id=\"col_name\" style=\"text-align: center; padding-top: 35px;\">"+studs[ix].first_name+" "+studs[ix].last_name+"</h2>"
                        +"<br><br>"
                        +"<div class=\"table-responsive\">"
                        +"<table class=\"table table-hover table-striped\">"
                        +"<tbody>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">10th Marks</td>"
                        +"<td align=\"right\">"+studs[ix].score_10+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">12th Marks</td>"
                        +"<td align=\"right\">"+studs[ix].score_12+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">Stream</td>"
                        +"<td align=\"right\">"+studs[ix].stream+"</td>"
                        +"</tr>"
                        +"<tr>"
                        +"<td style=\"font-weight:bold;\">Current CGPA</td>"
                        +"<td align=\"right\">"+ studs[ix].current_cgpa + "</td>"
                        +"</tr>"
                        +"</tbody>"
                        +"</table>"
                        +"</div>"
                        +"<br>";
         $("#stud_dets").prepend(dets);

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