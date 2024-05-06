
export default {
    generateReport(data) {
        // Générer le rapport en utilisant les données des étudiants
        console.log("valeur data"+data.nomEtudiant)
        let ReleveDeNote = `
<style>

    @page { size: landscape; }
    .info-group {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2px; /* Ajoute un espace entre les groupes d'informations */
        margin-left: 40px; /* Marge à gauche */
        margin-right: 30px; /* Marge à droite */
        margin-top : 2px ; /* Marge en haut */
    }

    .info-label {
        flex-basis: 30%; /* Largeur fixe pour les libellés */
        text-align: left; /* Alignement à gauche des libellés */
    }

    h1 {
        font-weight: bold;
        margin-top: 0px; /* Réduit l'espace entre le titre et le contenu */
        margin-bottom: 0px; /* Ajoute un espace entre le titre et le contenu */
    }

</style>
`; // Ajout de la feuille de style pour le format paysage

ReleveDeNote += "<div style='text-align: center;'>"; // Centre le contenu
ReleveDeNote += "<h2>RELEVE DE NOTES</h2>";
ReleveDeNote += "<p class='info-group'>";
ReleveDeNote += `<span class='info-label'>Année universitaire : <b> 2023/2024 </b></span>`;

        // Informations sur l'étudiant (affichées côte à côte)
        data.forEach(student => {
            ReleveDeNote += "<p class='info-group'>";
            ReleveDeNote += `<span class='info-label'>Nom : <b> ${student.nomEtudiant} </b></span>`;
            ReleveDeNote += `<span class='info-label'>Prénom : <b>${student.prenomEtudiant}</b> </span>`;
            ReleveDeNote += `<span class='info-label'>Né(e) le : <b> ${student.dateNaissanceEtudiant}</b> a <b>${student.lieuNaissance} </b></span>`;
            ReleveDeNote += "</p>";

        // Autres informations (affichées côte à côte)
        ReleveDeNote += "<p class='info-group'>";
        ReleveDeNote += `<span class='info-label'>N° Inscription : <b>${student.matricule}</b> </span>`;
        ReleveDeNote += `<span class='info-label'>Année d'étude : <b> ${student.semestre} </b> </span>`;
        ReleveDeNote += `<span class='info-label'>Diplôme préparé : <b> ${student.intituleCycle} </b> </span>`;
        ReleveDeNote += "</p>";

        ReleveDeNote += `<p class='info-group'><span class='info-label'>Domaine : <b> ${student.intituleDomaine} </b>  </span></p>`;

        // Tableau des notes des étudiants
        ReleveDeNote+=`  <style>
       
        th, td {
            border: 1px solid black;
            padding: 6px;
            text-align: center;
        }
        
        .grey {
            background-color: lightgray;
        }
        /* Réduire la taille de la police dans la table */
        table th, table td {
            font-size: 10px; /* Taille de police plus petite */
        }
        
        table {
            border-collapse: collapse;
            margin-left: 80px; /* Marge à gauche */
            margin-right: 40px; /* Marge à droite */
        }
        table {
            border-collapse: collapse;
            width: 100%; /* Réduire la largeur de la table */
            margin: 0 auto; /* Centrer la table */
        }
        
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th class='grey' rowspan="3">Sem</th>
                <th colspan='9' class='grey'>Unités d'Enseignements (U.E)</th>
                <th colspan='14' class='grey'>Matière(s) Constitutive(s) de l'unité d'enseignement</th>
                <th colspan='12' class='grey'>Résultats Obtenus</th>
            </tr>
            <tr>
                <th rowspan="2" class='grey'>Nature U.E</th>
                <th colspan='6' rowspan="2" class='grey'>Code et Intitulé de l'Unité d'Enseignement</th>
                <th class='grey'rowspan="2">Crédit Requis</th>
                <th rowspan="2" class='grey'>Coef U.E</th>
                <th class='grey'colspan='12' rowspan="2">Intitulé de la Matiere </th>
                <th class='grey'rowspan="2">Crédit Requis</th>
                <th class='grey'rowspan="2">Coef Mat</th>
                <th class='grey'colspan="4">Matieres</th>
                <th class='grey'colspan="4">Unités d'Enseignement</th>
                <th class='grey' colspan="4">Semestre</th>
            </tr>
            <tr>
                <th class='grey'>Note/20</th>
                <th class='grey'>Credits</th>
                <th class='grey'>Session</th>
                <th class='grey'>Note/20</th>
                <th class='grey' >Credits</th>
                <th class='grey' >Session</th>
                <th class='grey'>Note/20</th>
                <th class='grey' >Credits</th>
                <th class='grey'>Session</th>
            </tr>
        </thead>
    
        <tbody>
            <tr>
                <td rowspan="3" class='sem'>1</td>
            </tr>
            <tr>
                <td rowspan="2">U.E.F</td>
                <td rowspan="4" colspan='6'>01-U.E. Fondamentale 1</td>
                <td rowspan="2">22</td>
                <td rowspan="2">14</td>
                <td colspan='12' rowspan="2">Mécanique du point</td>
                <td rowspan="2">5</td>
                <td rowspan="2">2</td>
                <td>17</td>
                <td>5</td>
                <td>Janvier</td>
                <td>15</td>
                <td>5</td>
                <td>Mai</td>
                <td>14</td>
                <td>5</td>
                <td>Septembre</td>
            </tr>
    
        </tbody>
    </table>
    
</body>`;

ReleveDeNote+=`
<br><body>
    <table>
            <tr>
                <th class="grey">Moyenne annuelle</th>
                <th class="grey">Total des crédits cumulés pour l'année (S1+S2)</th>
                <th class="grey">Total des crédits cumulés pour le cursus</th>
                <th class="grey">Décision</th>
                <th class="grey">Session</th>
            </tr>
            <tr>
                <td>14.5</td>
                <td>30</td>
                <td>60</td>
                <td>Admis</td>
                <td>Septembre</td>
            </tr>
 
           </table>
    </body>` ;
});

        return ReleveDeNote;
    }
}
