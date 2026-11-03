import { useState } from 'react';

export const App = () => {
  // Példa alkatrészek listája
  const processzorok = [
    { id: 1, nev: 'Intel Core i5', ar: 50000 },
    { id: 2, nev: 'AMD Ryzen 7', ar: 75000 },
    { id: 3, nev: 'Intel Core i9', ar: 120000 }
  ];

  // State a kiválasztott processzornak (kezdetben null, azaz nincs kiválasztva semmi)
  const [kivalasztottProc, setKivalasztottProc] = useState(null);

  // Az optional chaining (?.C) és a (|| 0) használata a leírás alapján
  const processzorAr = kivalasztottProc?.ar || 0;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Számítógép-összeszerelő app</h1>
      <h2>1. Processzor kiválasztása</h2>

      <div style={{ marginBottom: '20px' }}>
        {/* Gomb a kiválasztás törlésére (tesztelni, hogy működik-e a null érték) */}
        <button 
          onClick={() => setKivalasztottProc(null)}
          style={{ marginRight: '10px', padding: '5px 10px' }}
        >
          Nincs kiválasztva processzor
        </button>

        {/* Processzorok listázása gombokkal */}
        {processzorok.map((proc) => (
          <button 
            key={proc.id} 
            onClick={() => setKivalasztottProc(proc)}
            style={{ 
              marginRight: '10px', 
              padding: '5px 10px',
              backgroundColor: kivalasztottProc?.id === proc.id ? '#lightgreen' : '' 
            }}
          >
            {proc.nev} ({proc.ar} Ft)
          </button>
        ))}
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', width: '300px' }}>
        <h3>Kiválasztott alkatrész:</h3>
        <p><strong>Név:</strong> {kivalasztottProc?.nev || 'Nincs kiválasztva'}</p>
        <p><strong>Ár:</strong> {processzorAr} Ft</p>
      </div>
    </div>
  );
};