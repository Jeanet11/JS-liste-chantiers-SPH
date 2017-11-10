var tabChantier = [
    [1999, 'Janvier','Chantier de monsieur dupont'],
    [1999, 'Mars', 'Réparation toiture'],
    [1999, 'Juillet', 'Entretien jardin'],
    [2000, 'Mars','Transport materiel'],
    [2000, 'Avril', 'Peinture']
  ];

// fonction qui affichera la liste des chantiers en tableaux classés par année
function displayListeChantierHTML(tab){
    //---------on stockera l'année du chantier en cours dans une variable
    var currentYear = 0;
    //--------ajout du titre en h1
    $(".container").append("<h1 class='text-center'>Listing des chantiers</h1>");
    //---------------boucle qui parcourt le tableau --------------
    for(var i = 0; i < tabChantier.length; i++){
        //-----------si l'année du chantier en cours est différente de celle du précédent 
        if(tab[i][0] !== currentYear) {
          //---------et s'il ne s'agit pas de la 1ere année on ferme la <table> 
          if (currentYear !== 0){
            $(".container").append("</table>");
          }
          //-----------currentYear reçoit l'année en cours
          currentYear = tab[i][0];
          //------création d'un tableau avec l'année en cours en h2 et des th et avec comme id l'année en cours
          $(".container").append("<h2>" + currentYear +"</h2><br><table class='table table-hover row' id='"+currentYear+"'><tr><th class='col-lg-2'>Mois</th><th class='col-lg-6'>Nature</th></tr>");

        } // fin du 1er IF
        //-------on liste les chantiers dans la table ayant comme id l'année en cours 
        $("#"+currentYear).append("<tr><td class='col-lg-2'>" + tab[i][1] + "</td><td class='col-lg-6'>" + tab[i][2] + "</td></tr>");
    } // ---------fin boucle for 
} //--------------fin fonction

displayListeChantierHTML(tabChantier);