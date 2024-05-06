// Configuration de la base de données et fonctions connexes
import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'esst',
    port: 3305
});

// Fonction pour récupérer les données depuis la base de données
export async function getRapportData() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(
            `SELECT nomEtudiant, prenomEtudiant, dateNaissance, lieuNaissance, matricule, intituleCycle, intituleDomaine, semestre
            FROM etudiant e
            JOIN groupe g ON e.idGroupe = g.idGroupe
            JOIN section s ON g.idSection = s.idSection
            JOIN domaine d ON s.idDomaine = d.idDomaine
            JOIN cycle c ON d.idCycle = c.idCycle`
        );
        
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) await conn.end();
    }
}

// Export du pool de connexions
export default pool;
