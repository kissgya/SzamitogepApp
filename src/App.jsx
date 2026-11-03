import { useState } from 'react';
import { AlkatreszKartya } from './AlkatreszKartya';

export const App = () => {
  const adatok = {
    cpu: [
      { id: 1, nev: 'AMD Ryzen 5 5600XT 3.70GHz AM4 OEM 100-000001585', ar: 49990, kep: '/cpu1_amdryzen5.webp' },
      { id: 2, nev: 'INTEL Core i5-12600KF 3.70GHz LGA-1700 BOX BX8071512600KF', ar: 74091, kep: '/cpu2_inteli5.webp' },
      { id: 3, nev: 'AMD Ryzen 7 7800X3D 4.20GHz AM5 BOX 100-100000910WOF', ar: 133990, kep: '/cpu3_amdryzen7.webp' }
    ],
    gpu: [
      { id: 4, nev: 'SAPPHIRE 11350-01-20G Radeon RX 9060 XT 16GB GDDR6 NITRO+ PCIE', ar: 280090, kep: '/gpu1_amdradeonrx9060.webp' },
      { id: 5, nev: 'PNY VCG50508DFXPB1 Dual Fan GeForce RTX 5050 8GB GDDR6 DLSS4', ar: 199989, kep: '/gpu2_geforcertx5050.webp' },
      { id: 6, nev: 'ASUS ROG-ASTRAL-RTX5080-O16G-GAMING ROG Astral OC GeForce RTX 5080 16GB GDDR7 DLSS4', ar: 949990, kep: '/gpu3_geforcertx5080.webp' }
    ],
    ssd: [
      { id: 7, nev: 'KINGSTON 1TB NV3 M.2 PCIe M.2 2280 SNV3S/1000G', ar: 56990, kep: '/ssd1.webp' },
      { id: 8, nev: 'ADATA 512GB Ultimate SU650 SATA 3 2.5" ASU650SS-512GT-R', ar: 26890, kep: '/ssd2.webp' },
      { id: 9, nev: 'SAMSUNG 1TB 990 PRO M.2 PCIe M.2 2280 MZ-V9P1T0BW', ar: 92989, kep: '/ssd3.webp' }
    ],
    winchester: [
      { id: 10, nev: 'SEAGATE Surveillance Skyhawk 1TB 3.5" 5900rpm 256MB SATA ST1000VX013', ar: 47989, kep: '/winyo1.webp' },
      { id: 11, nev: 'WD Purple 2TB 3.5" 5400rpm 64MB SATA WD23PURZ', ar: 56990, kep: '/winyo2.webp' },
      { id: 12, nev: 'WD Red Plus 2TB 3.5" 5400rpm 64MB SATA WD20EFPX', ar: 63990, kep: '/winyo3.webp' }
    ],
    ram: [
      { id: 13, nev: 'CRUCIAL 16GB DDR5 4800MHz CL40 CT16G48C40U5', ar: 129990, kep: '/ram1.webp' },
      { id: 14, nev: 'G.SKILL 32GB Flare X5 DDR5 6000MHz CL36 KIT F5-6000J3636F16GX2-FX5', ar: 240090, kep: '/ram2.webp' },
      { id: 15, nev: 'KINGSTON FURY 16GB Beast DDR4 3200MHz CL16 KIT KF432C16BBK2/16', ar: 63990, kep: '/ram3.webp' }
    ],
    haz: [
      { id: 16, nev: 'COOLERMASTER Elite 502 fekete + 3 db ARGB ventilátor', ar: 20690, kep: '/haz1.webp' },
      { id: 17, nev: 'COOLERMASTER Elite 600 TG fekete +7 db ARGB ventilátor', ar: 32990, kep: '/haz2.webp' },
      { id: 18, nev: 'DEEPCOOL MATREXX 40 3FS', ar: 16090, kep: '/haz3.webp' }
    ],
    tap: [
      { id: 19, nev: 'GIGABYTE P550B 550W 80 Plus Bronze tápegység', ar: 11990, kep: '/tap1.webp' },
      { id: 20, nev: 'DEEPCOOL Gamerstorm PF700X 700W 80 Plus Bronze tápegység', ar: 17590, kep: '/tap2.webp' },
      { id: 21, nev: 'THERMALRIGHT KG-650 650W fekete', ar: 19489, kep: '/tap3.webp' }
    ],
    eger: [
      { id: 22, nev: 'RAZER DeathAdder Essential', ar: 7990, kep: '/eger1.webp' },
      { id: 23, nev: 'LOGITECH G305 Lightspeed fekete + Call of Duty items', ar: 16090, kep: '/eger2.webp' },
      { id: 24, nev: 'LOGITECH G102 Lightsync fekete', ar: 7290, kep: '/eger3.webp' }
    ],
    billentyuzet: [
      { id: 25, nev: 'STEELSERIES Apex 3 TKL RGB UK Angol fekete', ar: 15290, kep: '/bill1.webp' },
      { id: 26, nev: 'KEYCHRON C3 Pro 8K QMK Super Banana Magyar fekete', ar: 23490, kep: '/bill2.webp' },
      { id: 27, nev: 'ASUS ROG Strix Scope II RX Magyar fekete', ar: 55990, kep: '/bill3.webp' }
    ],
    nyomtato: [
      { id: 28, nev: 'BROTHER HL-L2442DW', ar: 44990, kep: '/nyomtat1.webp' },
      { id: 29, nev: 'BROTHER HL-L2445DW', ar: 68690, kep: '/nyomtat2.webp' },
      { id: 30, nev: 'BROTHER HL-B2180DW', ar: 69990, kep: '/nyomtat3.webp' }
    ],
    webcamera: [
      { id: 31, nev: 'LOGITECH HD Pro C920 Refresh webkamera Full HD Fekete', ar: 21990, kep: '/webcam1.webp' },
      { id: 32, nev: 'LOGITECH C270 HD PC webkamera mikrofonnal fekete', ar: 6890, kep: '/webcam2.webp' },
      { id: 33, nev: 'LOGITECH Brio 100 grafitszürke', ar: 12990, kep: '/webcam3.webp' }
    ]
  };

  const [kivalasztottCpu, setKivalasztottCpu] = useState(null);
  const [kivalasztottGpu, setKivalasztottGpu] = useState(null);
  const [kivalasztottSsd, setKivalasztottSsd] = useState(null);
  const [kivalasztottWinchester, setKivalasztottWinchester] = useState(null);
  const [kivalasztottRam, setKivalasztottRam] = useState(null);
  const [kivalasztottHaz, setKivalasztottHaz] = useState(null);
  const [kivalasztottTap, setKivalasztottTap] = useState(null);
  const [kivalasztottEger, setKivalasztottEger] = useState(null);
  const [kivalasztottBillentyuzet, setKivalasztottBillentyuzet] = useState(null);
  const [kivalasztottNyomtato, setKivalasztottNyomtato] = useState(null);
  const [kivalasztottWebcamera, setKivalasztottWebcamera] = useState(null);

  const [nagyitottElem, setNagyitottElem] = useState(null);

  const kezelKivalasztast = (aktualisElem, kivalasztottElem, beallitoFuggveny) => {
    if (kivalasztottElem?.id === aktualisElem.id) {
      beallitoFuggveny(null);
    } else {
      beallitoFuggveny(aktualisElem);
    }
  };

  const osszAr = 
    (kivalasztottCpu?.ar || 0) +
    (kivalasztottGpu?.ar || 0) +
    (kivalasztottSsd?.ar || 0) +
    (kivalasztottWinchester?.ar || 0) +
    (kivalasztottRam?.ar || 0) +
    (kivalasztottHaz?.ar || 0) +
    (kivalasztottTap?.ar || 0) +
    (kivalasztottEger?.ar || 0) +
    (kivalasztottBillentyuzet?.ar || 0) +
    (kivalasztottNyomtato?.ar || 0) +
    (kivalasztottWebcamera?.ar || 0);

  const renderSzekcio = (cim, lista, kivalasztottElem, kivalasztFuggveny) => (
    <section className="mb-5 p-4 rounded-4 shadow-lg border border-secondary" style={{ backgroundColor: '#1e2229' }}>
      <h3 className="h4 mb-3 text-info border-bottom border-secondary pb-2 fw-bold">
        {cim}
      </h3>
      <div className="d-flex flex-wrap gap-3">
        {lista.map(item => (
          <AlkatreszKartya 
            key={item.id}
            nev={item.nev}
            ar={item.ar}
            kep={item.kep}
            kivalasztva={kivalasztottElem?.id === item.id}
            onKivalaszt={() => kezelKivalasztast(item, kivalasztottElem, kivalasztFuggveny)}
            onKepKattint={() => setNagyitottElem(item)}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-vh-100 pb-5 text-light" style={{ backgroundColor: '#121418' }}>
      <style>{`
        @keyframes zoomInEffect {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal-animacio {
          animation: zoomInEffect 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Modern, sötét, látványos fejléc színátmenettel */}
      <header className="py-5 mb-5 shadow text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1b2838 0%, #0f1923 100%)', borderBottom: '1px solid #30363d' }}>
        <div className="container position-relative">
          <span className="badge bg-primary bg-opacity-25 text-info mb-2 px-3 py-1 rounded-pill">PC Konfigurátor 2026</span>
          <h1 className="fw-bold display-4 text-white">PC Builder Pro</h1>
          <p className="text-secondary m-0 lead">Állítsd össze álmaid gépét prémium minőségben, profi komponensekből</p>
        </div>
      </header>

      <div className="container" style={{ marginBottom: '100px' }}>
        {renderSzekcio("CPU (Processzor)", adatok.cpu, kivalasztottCpu, setKivalasztottCpu)}
        {renderSzekcio("GPU (Videokártya)", adatok.gpu, kivalasztottGpu, setKivalasztottGpu)}
        {renderSzekcio("SSD Meghajtó", adatok.ssd, kivalasztottSsd, setKivalasztottSsd)}
        {renderSzekcio("Winchester (HDD)", adatok.winchester, kivalasztottWinchester, setKivalasztottWinchester)}
        {renderSzekcio("Memória (RAM)", adatok.ram, kivalasztottRam, setKivalasztottRam)}
        {renderSzekcio("Számítógépház", adatok.haz, kivalasztottHaz, setKivalasztottHaz)}
        {renderSzekcio("Tápegység (Táp)", adatok.tap, kivalasztottTap, setKivalasztottTap)}
        {renderSzekcio("Egér", adatok.eger, kivalasztottEger, setKivalasztottEger)}
        {renderSzekcio("Billentyűzet", adatok.billentyuzet, kivalasztottBillentyuzet, setKivalasztottBillentyuzet)}
        {renderSzekcio("Nyomtató", adatok.nyomtato, kivalasztottNyomtato, setKivalasztottNyomtato)}
        {renderSzekcio("Webkamera", adatok.webcamera, kivalasztottWebcamera, setKivalasztottWebcamera)}
      </div>

      {/* ANIMÁLT NAGYÍTÓ MODAL */}
      {nagyitottElem && (
        <div 
          className="modal show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', transition: 'background-color 0.3s' }}
          onClick={() => setNagyitottElem(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg modal-animacio" onClick={e => e.stopPropagation()}>
            <div className="modal-content bg-dark text-white border-secondary shadow-lg">
              <div className="modal-header border-secondary">
                <h5 className="modal-title fs-6 text-truncate text-info">{nagyitottElem.nev}</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setNagyitottElem(null)}
                ></button>
              </div>
              <div className="modal-body text-center bg-white p-4" style={{ borderRadius: '0 0 0.3rem 0.3rem' }}>
                <img 
                  src={nagyitottElem.kep} 
                  alt={nagyitottElem.nev} 
                  className="img-fluid" 
                  style={{ maxHeight: '450px', objectFit: 'contain' }} 
                />
                <div className="mt-3 text-dark fw-bold fs-4">
                  {nagyitottElem.ar.toLocaleString('hu-HU')} Ft
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Alapi lebegő sáv */}
      <div className="fixed-bottom py-3 shadow-lg border-top" style={{ backgroundColor: '#161b22', borderColor: '#30363d', zIndex: 1030 }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <span className="text-secondary small d-none d-sm-inline">Kiválasztott gép becsült ára:</span>
            <h4 className="m-0 text-success fw-bold">{osszAr.toLocaleString('hu-HU')} Ft</h4>
          </div>
          <button 
            className="btn btn-outline-info btn-sm px-4 rounded-pill"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Vissza a tetejére ⬆️
          </button>
        </div>
      </div>
    </div>
  );
};