function deploiement(id) 
{
	var x=document.getElementById(id);                        /*On récupère l'id (section Formations,Compétences,...) que l'on place dans une variable*/
	if(x.className.indexOf("cacher")==-1)
	{
		x.className+="cacher";                              /*Boucle if(): si la section concernée n'est pas cachée (-1) alors on lui applique la class 'cacher'*/
	}
	else													/*Sinon, on lui retire cette class, et celle initiale est alors reprise (section affichée)*/
	{
		x.className=x.className.replace("cacher"," ");
	}
}

function validation(id)
{
	var form=document.getElementById("Formulaire");					/*Récupération de l'email, du formulaire et du texte que l'on veut afficher*/
	var email=document.getElementById('email');
	var saisie=document.getElementById('saisie');
	var pattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;                     /*Composants nécessaires à une adresse mail valide*/

	if(email.value.match(pattern))                               /*Si le caractère saisie dans l'email est contenu dans pattern*/
	{
		form.classList.add("valide");							/*alors on affiche que l'adresse est valide et on ajoute la class valide*/
		form.classList.remove("invalide");   					/*et on enelève au passage la class invalide si elle y était.*/
		saisie.innerHTML="Votre adresse est correcte!";			/*On envoit sur le html le texte suivant.*/
		saisie.style.color="#00ff00";							/*Avec une couleur verte.*/
	}
	else
	{
		form.classList.remove("valide");                      /*Même principe que pour if() mais pour une saisie invalide par l'utilisateur.*/
		form.classList.add("invalide");
		saisie.innerHTML="Votre adresse est invalide!";
		saisie.style.color="#ff0000";

	}
	if(email.value=='')
	{
		Formulaire.classlist.removeClass("valide");             /*Ma fonction remove ne fonctionne pas, je ne suis pas parvenu à trouver une solution.*/
		Formulaire.classList.removeClass("invalide");			/*Le principe est de ne rien afficher si le contenu dans mail est vide (et */
		saisie.innerHTML="";									/*ne pas continuer a afficher adresse mail 'valide' ou 'invalide'*/
																/*Néanmoins l'utilisateur est tout de même indiqué si l'entrée d'adresse mail est*/
	}															/*bonne ou mauvaise*/
}

