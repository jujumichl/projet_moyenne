import json
from typing import Union

def lire_fichier_json(fichier: str) -> Union[list, dict] :
    """Lit données présentes dans le fichier sous format JSON et retourne le dictionnaire."""
    with open(fichier, encoding="utf-8") as f:
        donnees = json.loads(f.read())
    return donnees


def ecrire_fichier_json(fichier: str, donnees: Union[list, dict]) -> None:
    """Ecrit les données  du dictionnaire dans le fichier au format JSON."""
    with open(fichier, 'w', encoding="utf-8") as f:
        f.write(json.dumps(donnees, indent=2))