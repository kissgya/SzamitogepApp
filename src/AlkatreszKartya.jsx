export const AlkatreszKartya = ({ nev, ar, kep, kivalasztva, onKivalaszt, onKepKattint }) => {
  return (
    <div 
      className={`card border-0 shadow-sm ${kivalasztva ? 'border-success border-2 bg-light' : ''}`}
      style={{ 
        width: '185px', 
        borderRadius: '12px', 
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
    >
      <div 
        className="bg-white p-3 text-center position-relative" 
        style={{ height: '120px', cursor: 'pointer' }}
        onClick={onKepKattint} // Csak a képre kattintva nyílik a nagyító
        title="Kattints a kép nagyításához!"
      >
        {kivalasztva && (
          <span className="position-absolute top-0 end-0 m-2 badge bg-success rounded-pill" style={{ zIndex: 2 }}>
            ✓
          </span>
        )}
        <span className="position-absolute bottom-0 start-0 m-1 badge bg-dark bg-opacity-50 text-white" style={{ fontSize: '0.65rem' }}>
          🔍 Nagyítás
        </span>
        <img 
          src={kep} 
          className="w-100 h-100" 
          alt={nev} 
          style={{ objectFit: 'contain' }} 
        />
      </div>

      <div 
        className="card-body p-2.5 text-center d-flex flex-column justify-content-between bg-white border-top" 
        style={{ minHeight: '130px', cursor: 'pointer' }}
        onClick={onKivalaszt} // A szövegre vagy kártyára kattintva jelöli ki a terméket
      >
        <h6 className="card-title fs-7 text-dark mb-2 text-start" style={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
          {nev}
        </h6>
        <div>
          <p className="card-text text-primary fw-bold mb-2 small">
            {ar.toLocaleString('hu-HU')} Ft
          </p>
          <button 
            className={`btn btn-sm w-100 rounded-pill py-1 fw-semibold ${kivalasztva ? 'btn-success text-white' : 'btn-outline-primary'}`}
          >
            {kivalasztva ? 'Kiválasztva' : 'Kiválaszt'}
          </button>
        </div>
      </div>
    </div>
  );
};