export default {
    generateReport(data) {
        // Générer le rapport en utilisant les données des étudiants
        console.log("valeur data" + data.nomEtudiant);
        let NotationPFE = `
    <style>
       
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
        
        /* Centrer la table et ajuster les marges */
        table {
            border-collapse: collapse;
            width: 80%; /* Largeur de la table */
            margin: 0 auto; /* Centrer la table */
            margin-top: 20px; /* Marge en haut */
            margin-bottom: 20px; /* Marge en bas */
        }
        
    </style>
    <h1>PROJET DE FIN D'ÉTUDE DE LICENCE</h1>
    <h1>FICHE DE NOTATION</h1>
    <h3>Projet N°: ....../2023</h3>

    <table>
        <thead>
            <tr>
                <th class='grey' colspan="3">Identification de l'étudiant</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="3">Nom et prénom: ${data.nomEtudiant}</td>
            </tr>
            <tr>
                <td colspan="3">Matricule: ${data.matricule}</td>
            </tr>
        </tbody>
    </table>

    <br><br>

    <table>
        <thead>
            <tr>
                <th class='grey' colspan="4">Thème</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="4"></td>
            </tr>
        </tbody>
    </table>
    <br><br>
    <table>
        <thead>
            <tr>
                <th class='grey'>Encadrant</th>
                <th class='grey'>Promoteur</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Nom et prénom: ${data.encadrant}</td>
                <td>Nom et prénom: ${data.promoteur}</td>
            </tr>
        </tbody>
    </table>
    <br><br>
    <strong>A soutenu son mémoire de Licence le .../.../... devant le jury :</strong>
    <br>
    <table>
        <tbody>
            <tr>
                <td class='grey' colspan="3">Président</td>
                <td></td>
            </tr>
            <tr>
                <td class='grey' colspan="3">Membre</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <br>
    <strong>Et a obtenu pour le travail réalisé :</strong>
    <br>
    La note du PFE : ..../20
    `;

        return NotationPFE;
    }
}
