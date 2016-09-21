var aProf ={
	"hr_name":"Meghana Guru",
	"hr_email":"meghana.g@incture.com",
	"alt_hr_name":"Sampada Gupta",
	"alt_hr_email":"sampada.gupta@incture.com",
	"comp_id":"BANG_1266",
	"comp_name":"Incture Technologies",
	"comp_email":"hr@incture.com",
	"comp_desc":"Incture’s constant endeavour is - fresh work-spaces of the future. Through a good mix of challenging work environment, and a culture of sharing and learning, we provide a space for professional excellence."
};

document.getElementById('company_poc_name').value = aProf.hr_name;
document.getElementById('company_poc_email_id').value = aProf.hr_email;
document.getElementById('company_alt_poc_name').value = aProf.alt_hr_name;
document.getElementById('company_alt_poc_email_id').value = aProf.alt_hr_email;
// document.getElementBy	Id('company_id').value = "Company Id : " + aProf.comp_id;
document.getElementById('company_name').value = aProf.comp_name;
document.getElementById('company_email_id').value = aProf.comp_email;
document.getElementById('company_desc').value = aProf.comp_desc;