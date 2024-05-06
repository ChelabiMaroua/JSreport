import express from 'express';
import rapportModel from './NotationPFE.js';
import { getRapportData } from './db/db.js';
import jsreport from 'jsreport';
import handlebars from 'handlebars';
import fs from 'fs';

const router = express.Router();

let jsreportInstance;

async function initJsReport() {
    try {
        jsreportInstance = jsreport();
        await jsreportInstance.init();
        console.log('jsreport est prêt');
    } catch (err) {
        console.error('Erreur lors de l\'initialisation de jsreport :', err);
    }
}

// Appeler la fonction d'initialisation au démarrage de l'application
initJsReport();

router.get('/pdf', async (req, res) => {
    try {
        // Récupérer les données depuis la base de données
        const rows = await getRapportData();
        console.log('Données récupérées depuis la base de données :', rows);
        // Générer le rapport à partir des données
        const rapport = rapportModel.generateReport(rows);

        // Compiler le rapport HTML avec Handlebars pour inclure les styles CSS
        const template = fs.readFileSync('./rapport.html', 'utf-8');
        const compiledTemplate = handlebars.compile(template);
        const html = compiledTemplate({ rapport });

        // Assurez-vous que jsreport est prêt avant de générer le rapport
        if (!jsreportInstance) {
            return res.status(500).send('jsreport n\'est pas prêt');
        }

        // Génération du rapport PDF
        const result = await jsreportInstance.render({
            template: {
                content: html,
                engine: 'handlebars',
                recipe: 'chrome-pdf',
            },
        });

        // Envoi du fichier PDF au navigateur en tant que téléchargement
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline');
        res.send(result.content);
    } catch (err) {
        console.error('Erreur lors de la génération du rapport PDF :', err);
        res.status(500).send('Erreur lors de la génération du rapport PDF.');
    }
});

export default router;
