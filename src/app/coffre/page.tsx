'use client';

import React, { useState } from 'react';
import styles from './coffre.module.css';
import { lots, tirerAuSort } from './coffre';

export default function CoffrePage() {
  const [selectedCoffre, setSelectedCoffre] = useState<number | null>(null);
  const [opened, setOpened] = useState(false);
  const [lot, setLot] = useState<{ nom: string; image: string } | null>(null);
  const [showLot, setShowLot] = useState(false);

  const handleClick = (index: number) => {
    if (selectedCoffre !== null) return;

    setSelectedCoffre(index);

    setTimeout(() => {
      const tirage = tirerAuSort();
      setOpened(true);

      setTimeout(() => {
        setLot(tirage);
        setShowLot(true);
      }, 600); // délai après l'ouverture du coffre
    }, 800); // délai pour déplacement du coffre
  };

  const renderCoffre = (index: number) => {
    const isSelected = selectedCoffre === index;

    const coffreClasses = [
      styles.coffre,
      isSelected && styles.selected,
      selectedCoffre !== null && !isSelected && styles.disparaitre,
      isSelected && opened && styles.ouvert,
      isSelected && !opened && styles.tremble,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div key={index} className={coffreClasses} onClick={() => handleClick(index)}>
        <img
          src="/chest_close.png"
          alt={`Coffre ${index + 1}`}
          className={styles.coffreImg}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Choisissez un coffre</h1>
      <div className={styles.container}>
        {[0, 1, 2].map(renderCoffre)}
      </div>

      {lot && (
        <div className={styles.lotContainer}>
          <img
            src={lot.image}
            alt={lot.nom}
            className={`${styles.lot} ${showLot ? 'afficher' : ''}`}
          />
        </div>
      )}
    </div>
  );
}
