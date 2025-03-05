# To do list :
- [ ] Récupérer le message nouvelle note coté serveur

# Documentation pratique github

## Configuration de git :
### Configuration nom, email :
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre-email@example.com"
```
### Génération de d'une Clé SSH :
```bash
ssh-keygen -C "votre-email@example.com"
```
**/!\ Une fois la clé générée, elle sera stockée dans ~/.ssh/id_rsa par défaut.**

### Ajouter la clé SSH à l'agent SSH :
Démarrage l'agent SSH :
```bash
eval $(ssh-agent -s)
```
Ajout de la clé SSH a l'agent: 
```bash
ssh-add ~/.ssh/id_rsa
```

### Ajout de la clé a notre compte GitHub
Tout d'abord l'afficher:
```bash
cat ~/.ssh/id_rsa.pub
```
Puis la copier et aller dans les paramètre de notre compte et aller dans le menu et trouver la partie nommée : "SSH and GPG keys", le reste sera intuitif.

### Tester la connexion SSH à GitHub:
```bash
ssh -T git@github.com
```
Vous obtiendrez un résultat similaire a celui ci :
```bash
"Hi <Votre nom d'utilisateur GitHub>! You've successfully authenticated, but GitHub does not provide shell access."
```

### Vous pouvez maintenant cloner votre dépôt ou un autre dépôt !
Il vous suffit d'aller récupérer la clé SSH qui se trouve la case code quand vous cliquer sur un projet. Après l'avoir copier il vous suffit d'entrer cette commande afin de cloner un dépôt GitHub.
```bash
git clone clé_ssh_du_projet_github_récupérer
```
**/!\ Vérifier ou vous vous situez avant de cloner un projet !** Il sera cloner la ou votre prompt Git Bash se trouve ! Afin de pouvoir vous déplacer tout seul dans un prompt je vous renvoie ici : https://ss64.com/nt/cd.html

Et ici pour savoir ou vous vous trouvez :
https://ss64.com/bash/pwd.html

### Création d'une branche sur GitHub :
Afin de créer une branche sur GitHub il vous suffit d'exécuter cette commande :
```bash
git branch nom_de_la_branche
```
Pour l'utiliser il vous suffit d'exécuter cette commande :
```bash
git checkout nom_de_la_branche
```
Pour ajouter votre branche et les modification apportée a cette branche sur GitHub il vous suffit d'exécuter cette commande :

```bash
git psuh origin nom_de_la_branche
```

### Ajout des modifications
Afin d'ajouter les différentes modification apportée il vous surffit d'exécuter ces commande dans l'ordre :

Pour ajouter les modification faites : 
```bash
git add .
```
Pour committer les modification faite :
```bash
git commit -m "Message du commit"
```
Pour les ajouter a votre branche :
```bash
git push origin nom_de_la_branche
```
                 
