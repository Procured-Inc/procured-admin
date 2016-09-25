var str="",ix=0;
                        var fullFormat =["Aptitude", "Behavioral", "Psyschometric", "Technical", "Verbal"];
                        var stuff = JSON.parse(localStorage.getItem("quesFormat"));
                        $.each(stuff, function( key,values){
                        if(values=="yes") str+=fullFormat[ix]+" \n"; 
                        ix++;
                        });
                        $('#info').text("\nTest successfully created. \n \nQuestion database created for the following:  \n"+str);

									$.ajax({
											"url":"http://178.33.132.20:30000/questions/"+fin,
											"method" :"GET",
											"contentType":"application/json",
											"data" : data ,
											// "processData": false,
											"dataType" : "json",
									       	
										success: function(data) {
												console.log(data);
												console.log("SUCCESS");
												for(var lx in data){
													// ok=data[lx].answers;
													// console.log("here"+ok);
													popTable(data[lx], data[lx].answers);
												}


										},error: function(d) {
											console.log(d);
											console.log("FAILURE");
										}
									});                        