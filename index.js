// Import des modules nécessaires
import express from 'express';
import handlebars from 'handlebars';
import fs from 'fs';
import rapportRoutes from './rapportRoutes.js'; // Importez les routes depuis le fichier rapportRoutes.js
import jsreport from 'jsreport';

// Création de l'application Express
const app = express();

// Configuration de la Content Security Policy
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' data:");
    next();
});

app.use(express.static('public'));


// Configuration d'Express pour utiliser Handlebars
app.engine('html', function (filePath, options, callback) {
    fs.readFile(filePath, 'utf-8', function (err, content) {
        if (err) {
            return callback(err);
        }
        const rendered = handlebars.compile(content)(options);
        return callback(null, rendered);
    });
});
app.set('view engine', 'html');
app.set('views', './views');

// Utilisation des routes définies dans rapportRoutes.js
app.use('/', rapportRoutes);

// Démarrage du serveur
const port = 8002;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
