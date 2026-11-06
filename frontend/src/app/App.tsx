/**
 * Uygulama kabuğu (M1). Ekran akışı (Başlangıç → Oyun → Final) M3'te eklenecek.
 * Oyun kuralları `src/engine`, senaryo verisi `src/content` altında olacak (M2).
 */
export default function App() {
  return (
    <main className="shell">
      <p className="eyebrow">Ya olsaydı · MVP yapım aşamasında</p>
      <h1 className="title">
        Küçük bir kasabaya <em>taşınsaydın?</em>
      </h1>
      <p className="lead">
        Kirazlı. Bir ev, iki komşu, otuz gün. Hiçbir seçim doğru ya da yanlış
        değil; her biri başka bir hayat.
      </p>
      <p className="fineprint">
        Oynanabilir deneme için <code>prototypes/kirazli/</code> klasörüne
        bakın.
      </p>
    </main>
  );
}
