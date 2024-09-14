
const fs = require('fs');
const exec = require('child_process').exec;

// Met à jour le fichier README.md avec la date actuelle
function updateReadme() {
    const content = `# Mise à jour automatique\nDernière mise à jour : ${new Date().toLocaleString()}`;
    fs.writeFileSync('README.md', content);
    console.log('README.md mis à jour.');
}

// Commit et push les changements
function commitAndPush() {
    exec('git add README.md && git commit -m "Mise à jour automatique du README : ' + new Date().toLocaleString() + '" && git push', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur lors du commit ou du push : ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erreur : ${stderr}`);
            return;
        }
        console.log(`Résultat : ${stdout}`);
    });
}

// Exécute l'update
updateReadme();
commitAndPush();
