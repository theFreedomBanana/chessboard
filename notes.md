Afficher un échiquier 8x8
Pouvoir cliquer sur les cases et placer/retirer des reines
Quand une reine est placer mettre en évidence toutes les cases attaquable
Les reines attaques toutes les cases verticales/horizontales/diagonales
L'utilsateur doit trouver comment pouvoir placer 8 reines sans qu'elles ne puissent s'attaquer entre elles
Calculer et afficher quand le joueur est dans une position gagnante

Créer un chessboard => new Array(8).fill(["a", "b", "c", "d", "e", "f", "g", "h"])
Avoir un State qui détermine pour chacune de ces cases si elle est occupé ou disponible
Au click sur une case son état change pour !(caseValue)

queen = { boardCase: 4, rowCase: 4 };

boardCaseState

