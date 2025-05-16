'use client';

import React, { useState } from 'react';
import styles from './coffre.module.css';

const coffres = ['/chest_close.png', '/chest_close.png', '/chest_close.png'];
const lots = ['/jackpot.png', '/pen.png', '/red_cross.png'];

export default function CoffrePage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [ouvert, setOuvert] = useState(false);
  const [lot, setLot] = useState<string | null>(null);
  const [aDejaRejoue, setADejaRejoue] = useState(false);
  const [coffresVisibles, setCoffresVisibles] = useState(true);
  const [afficherLot, setAfficherLot] = useState(false);

  // Exemple à adapter à ta logique réelle
  const fideliteStatus: 'formulaire' | 'carte' | null = 'formulaire';

  const handleClick = (index: number) => {
    if (selected !== null) return;

    setSelected(index);

    setTimeout(() => {
      setOuvert(true);

      setTimeout(() => {
        const lotAleatoire = lots[Math.floor(Math.random() * lots.length)];
        setLot(lotAleatoire);
        setCoffresVisibles(false);
        setAfficherLot(true); // lot s’affiche après disparition coffre
      }, 500); // délai entre ouverture et lot
    }, 1000); // délai avant ouverture
  };

  const getTitre = () => {
    if (!lot) return 'Choisis un coffre !';
    if (lot === '/jackpot.png') return 'Vous avez gagné le jackpot !';
    if (lot === '/pen.png') return 'Vous avez gagné !';
    if (lot === '/red_cross.png') return 'Vous avez perdu...';
    return 'Résultat';
  };

  const handleRejouer = () => {
    setSelected(null);
    setOuvert(false);
    setLot(null);
    setAfficherLot(false);
    setCoffresVisibles(true);
    setADejaRejoue(true);
  };

  const peutRejouer =
    lot === '/red_cross.png' &&
    fideliteStatus !== null &&
    !aDejaRejoue;

  return (
    <div className={styles.container}>
      <h1 className={styles.titre_coffre}>{getTitre()}</h1>

      {coffresVisibles && (
        <div className={styles.coffres}>
          {coffres.map((src, index) => (
            <img
              key={index}
              src={ouvert && selected === index ? '/chest_open.png' : src}
              className={`
                ${styles.coffre}
                ${selected === index ? styles.tremble : ''}
                ${selected !== null && selected !== index ? styles.fadeOut : ''}
              `}
              onClick={() => handleClick(index)}
              alt="Coffre"
            />
          ))}
        </div>
      )}

      {afficherLot && lot && (
        <div className={styles.lotContainer}>
          <img src={lot} alt="Lot gagné" className={styles.lot} />
        </div>
      )}

      {peutRejouer && (
        <button onClick={handleRejouer} className={styles.rejouerBtn}>
          Rejouer
        </button>
      )}
    </div>
  );
}
