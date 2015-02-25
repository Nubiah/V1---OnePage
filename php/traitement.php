<?php 
	$nom=$HTTP_POST_VARS['nom']; 
	$mail=$HTTP_POST_VARS['email']; 
	$objet=$HTTP_POST_VARS['tel']; 
	$message=$HTTP_POST_VARS['text']; 

	/////voici la version Mine 
	$headers = "MIME-Version: 1.0\r\n"; 

	//////ici on détermine le mail en format text 
	$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n"; 

	////ici on détermine l'expediteur et l'adresse de réponse 
	$headers .= "From: $nom <$mail>\r\nReply-to : $nom <$mail>\nX-Mailer:PHP"; 

	$subject="$objet"; 
	$destinataire="alex.gibey@gmail.com";
	$body="$message"; 
	if (mail($destinataire,$subject,$body,$headers)) { 
	echo "Votre mail a été envoyé<br>"; 
	} else { 
	echo "Une erreur s'est produite"; 
	} 
?></p>
<p align="center">Vous allez bientôt etre redirigé vers la page d'accueil<br>
Si vous n'êtes pas redirigé au bout de 5 secondes cliquez <a href="http://digitalviking.fr">ici 
</a></p>
