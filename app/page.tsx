import Image from 'next/image'

const clipper = {
  name: 'Saber 2.0 Clipper',
  description: 'Profi-Haarschneider für präzise Schnitte an Kopf und Bart',
  accent: '#00e5ff',
  specs: [
    { label: 'Motor', value: 'Rotationsmotor' },
    { label: 'Geschwindigkeit', value: '7.200 RPM' },
    { label: 'Akku', value: 'Li-Ion 2.000 mAh' },
    { label: 'Laufzeit', value: '90 Minuten' },
    { label: 'Ladezeit', value: '120 Minuten' },
    { label: 'Spannung', value: '100–240 V' },
    { label: 'Gewicht', value: '320 g' },
    { label: 'Klingenbreite', value: '45 mm' },
    { label: 'Klingenmaterial', value: 'Edelstahl' },
    { label: 'Schutzklasse', value: 'IPX5' },
  ],
  attachments: ['0,8', '3', '6', '9', '12', '16', '19', '22', '25'],
  accessories: [
    '8× Aufsatzkamm (3–25 mm)',
    'Reinigungs-/Öl-Set',
    'Reinigungsbürste',
    'Ladestation',
    'USB-C Ladekabel',
    'Schutztasche',
    'Bedienungsanleitung (DE/EN)',
  ],
  price: 89.99,
}

const trimmer = {
  name: 'Saber 2.0 Trimmer',
  description: 'Präzisionstrimmer für Konturen, Kanten, Bart und Körper',
  accent: '#c8a84b',
  specs: [
    { label: 'Motor', value: 'Linearmotor' },
    { label: 'Geschwindigkeit', value: '6.000 RPM' },
    { label: 'Akku', value: 'Li-Ion 800 mAh' },
    { label: 'Laufzeit', value: '60 Minuten' },
    { label: 'Ladezeit', value: '90 Minuten' },
    { label: 'Spannung', value: '100–240 V' },
    { label: 'Gewicht', value: '185 g' },
    { label: 'Klingenbreite', value: '32 mm' },
    { label: 'Klingenmaterial', value: 'Titanbeschichteter Stahl' },
    { label: 'Schutzklasse', value: 'IPX7' },
  ],
  attachments: ['0,4', '1', '2', '3', '5', '7', '10'],
  accessories: [
    '6× Präzisionsaufsatzkamm (1–10 mm)',
    'Detailklingen-Attachment',
    'Ohr-/Nasenaufsatz',
    'Reinigungs-/Öl-Set',
    'Reinigungsbürste',
    'USB-C Ladekabel',
    'Schutzetui',
    'Bedienungsanleitung (DE/EN)',
  ],
  price: 59.99,
}

function ProductCard({ product }: { product: typeof clipper }) {
  return (
    <div style={{
      background: '#111118',
      border: `1px solid #222230`,
      borderRadius: 16,
      padding: '32px 28px',
      flex: 1,
    }}>
      <div style={{ borderLeft: `3px solid ${product.accent}`, paddingLeft: 16, marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>
          {product.name}
        </h2>
        <p style={{ color: '#888', fontSize: 14 }}>{product.description}</p>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 28 }}>
        <tbody>
          {product.specs.map((s) => (
            <tr key={s.label} style={{ borderBottom: '1px solid #1a1a24' }}>
              <td style={{ padding: '8px 0', color: '#666', fontSize: 13, width: '45%' }}>{s.label}</td>
              <td style={{ padding: '8px 0', fontSize: 13, fontWeight: 500 }}>{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 12, color: '#555', letterSpacing: 1, marginBottom: 10, textTransform: 'uppercase' }}>
          Schnittlängen (mm)
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {product.attachments.map((mm) => (
            <span key={mm} style={{
              background: '#1a1a24',
              border: `1px solid #2a2a38`,
              color: product.accent,
              borderRadius: 6,
              padding: '3px 10px',
              fontSize: 12,
              fontWeight: 600,
            }}>
              {mm}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p style={{ fontSize: 12, color: '#555', letterSpacing: 1, marginBottom: 10, textTransform: 'uppercase' }}>
          Lieferumfang
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {product.accessories.map((a) => (
            <li key={a} style={{ fontSize: 13, color: '#aaa', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: product.accent, fontSize: 10 }}>◆</span>
              {a}
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        marginTop: 28,
        padding: '14px 0 0',
        borderTop: '1px solid #1a1a24',
        display: 'flex',
        alignItems: 'baseline',
        gap: 8,
      }}>
        <span style={{ fontSize: 11, color: '#555' }}>EINZELPREIS</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>
          {product.price.toFixed(2).replace('.', ',')} €
        </span>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #111118 0%, #1a1a2e 100%)',
        borderBottom: '1px solid #222230',
        padding: '60px 24px 48px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 12, letterSpacing: 4, color: '#c8a84b', marginBottom: 12, textTransform: 'uppercase' }}>
          Made in Germany
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: 6, marginBottom: 8 }}>
          SABER
        </h1>
        <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 300, letterSpacing: 8, color: '#c8a84b', marginBottom: 40 }}>
          2.0 CLIPPER SET
        </p>

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Image
            src="/saber2_clipper_set.svg"
            alt="Saber 2.0 Clipper Set"
            width={900}
            height={600}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </div>
      </section>

      {/* Set price banner */}
      <section style={{
        background: '#0d0d14',
        borderBottom: '1px solid #222230',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 12, letterSpacing: 2, color: '#555', marginBottom: 8, textTransform: 'uppercase' }}>
          Set-Preis
        </p>
        <p style={{ fontSize: 48, fontWeight: 700, lineHeight: 1, marginBottom: 8 }}>129,99 €</p>
        <p style={{ fontSize: 14, color: '#00e5ff' }}>
          Sie sparen <strong>19,99 €</strong> gegenüber dem Einzelkauf
        </p>
        <p style={{ fontSize: 12, color: '#444', marginTop: 8 }}>
          2 Jahre Garantie · Alle Aufsätze untereinander kompatibel
        </p>
      </section>

      {/* Product cards */}
      <section className="container" style={{ padding: '56px 24px' }}>
        <div style={{
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <ProductCard product={clipper} />
          <ProductCard product={trimmer} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #1a1a24',
        padding: '24px',
        textAlign: 'center',
        color: '#444',
        fontSize: 13,
      }}>
        © Saber — Hergestellt in Deutschland
      </footer>
    </main>
  )
}
