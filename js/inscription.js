function sendMail(params){
	var tempParams={
		nom:document.getElementById("nom").value,
		mail_utilisateur:document.getElementById("mail_utilisateur").value,
		date_naissance:document.getElementById("date_naissance").value
        
	};
    
	emailjs.send('service_i3bxhot',"template_212vqb8",tempParams)
	emailjs.send('service_i3bxhot',"template_4ohvhyc",tempParams)
    .then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
		document.location.href="../index.html"; 
    }, function(error) {
       console.log('FAILED...', error);
    });
	
}