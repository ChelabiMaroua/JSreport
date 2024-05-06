
export default {
    generateReport(data) {
        // Générer le rapport en utilisant les données des étudiants
        console.log("valeur data"+data.nomEtudiant)
        let rapport = `
        <style>
           h5{
            text-align: center ; 
           }
            th, td {
                border: 1px solid black;
                padding: 6px;
             
            }
            
            .grey {
                background-color: lightgray;
            }
            /* Réduire la taille de la police dans la table */
            table th, table td {
                font-size: 10px; /* Taille de police plus petite */
            }
            
            table , h6{
                border-collapse: collapse;
                margin-left: 80px; /* Marge à gauche */
                margin-right: 50px; /* Marge à droite */
            }
           
            table {
                margin-top:80px;
                border-collapse: collapse;
                width: 80%; /* Réduire la largeur de la table */
                margin: 0 auto; /* Centrer la table */
            }
            
        </style>
    <h1><center>Demande de stage</center></h1>
    <h6>
        Madame , Monsieur <br>
    
        Dans le cadre de l'enrichissement de nos diffrentes formations par l'organisation de stages pratiques , nous vous demandons de bien vouloir accepter nos étudiants dans votre établissement . 
        Nous vous signalons que pendant cette période , le stagiaire est soumis à votre réglement de travail et est tenu le respecter rigoureusement . 
        Veuillez agréer Madame , Monsieur l'expression de nos sentimets les meilleurs . 
    </h6>
    <h5>
        Le directeur de l'établissement 
    <h5>
    <table>
        <thead>
            <tr>
                <th class='grey' colspan="4">information de l'etablissement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="4">Nom : Ecole Supérieure des Sciences et Technologie (ESST)</td>
            </tr>
            <tr>
                <td colspan="4">Adresse : </td>
            </tr>
            <tr>
                <td>Site</td>
                <td>Mail :</td>
                <td>Tél :</td>
                <td>Mob : </td>
            </tr>
            <tr>
                <td colspan="4">Secteur d'activité : </td>
            </tr>
            <tr>
                <td colspan="4">
                    Domaine de formation : <br>
                    -Sciences de la matiére (SM)<br>
                    -Sciences et technologies (ST) <br>
                    -Mathematiques et informatiques (SM)
                </td>
            </tr>
        </tbody>
    </table>
    
    <br><br>
    
    <table>
        <thead>
            <tr><th class='grey' colspan="4">Information sur le stagiaire </th></tr>
            
        </thead>
        <tbody>
            <tr>
               <td colspan="4">Nom et prénom :</td> 
            </tr>
            <tr>
                <td colspan="4">Adresse : </td>
            </tr>
            <tr><td colspan="4">Mail :</td></tr>
            <tr>
            <td>Année d'étude : </td>
            <td>Domaine : </td>
            <td>Filiére : </td>
            </tr>
            <tr><td colspan="4">Specialité:</td></tr>
            <tr><td colspan="4">Tuteur: </td></tr>
            <tr><td colspan="4">Contact :</td></tr>
            <tr>
            <td class='grey'>Nom , Prénom , date et visa de l'étudiant : </td>
            <td class='grey'>Nom , Prénom , date et visa du tuteur (mineurs) : </td>
            <td class='grey'>Nom , Prénom , date et cachet du responsable de l'ESST: </td>
            </tr>
            <tr>
            <td rowspan="5"><br><br><br><br><br><br><br><br></td>
            <td rowspan="5"></td>
            <td rowspan="5">M.Chafik FERROUKHI</td>
            </tr>
        </tbody>
    </table>
    <br><br>
    
    <table>
        <thead>
            <tr>
                <th colspan="4" class="grey">
                    Information sur l'entreprise 
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
               <td colspan="4">Nom de l'entreprise :</td> 
            </tr>
            <tr>
                <td colspan="4">Adresse : </td>
            </tr>
            <tr><td colspan="2">Mail :</td><td colspan="2">Tél:</td></tr>
            <tr><td colspan="4">Domaine d'activité :</td></tr>
            <tr><td colspan="4">Promoteur: </td></tr>
            <tr><td colspan="4">Contact :</td></tr>
            <tr><td colspan="2">Durée du stage :</td><td colspan="2">Péruide du stage:</td></tr>
            <tr><td colspan="4">Lieu du stage: </td></tr>
        </tbody>
    </table>
    <br><br>
    <table>
        <thead>
            <tr>
                <td class='grey' colspan="2">Nom , Prénom , date , visa et cachet de l'encadreur : </td>
                <td class='grey' colspan="2">Nom , Prénom , date , visa et cachet du responsable de l'entreprise: </td>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td  colspan="2"></td>
            <td  colspan="2"> </td>
        </tr>
    </tbody>
    </table>
     </body>` ;
    
    
            return rapport;
        }
    }