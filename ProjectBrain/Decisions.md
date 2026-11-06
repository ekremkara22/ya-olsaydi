# Decision Log

Karar biçimi: ID, tarih, durum, karar, gerekçe, alternatifler ve etkiler. **Öneri**, **kabul edildi** ve **açık** statüleri birbirine karıştırılmaz.

## DEC-001 — GitHub ana kaynak
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: Proje dosyaları ve kod için GitHub deposu `ekremkara22/ya-olsaydi` kullanılacak.
- Gerekçe: Sürüm takibi ve Claude/Codex gibi araçlarla taşınabilirlik.

## DEC-002 — İlk dağıtım yönü
- Tarih: 2026-11-06
- Durum: Kabul edildi (2026-11-06, DEC-009 ile teyit edildi)
- Karar: İlk oynanabilir deneyim web tabanlı/PWA olarak hedeflenecek.
- Gerekçe: Hızlı prototip, kolay test ve paylaşım.
- Not: Framework DEC-008 ile, sahne yaklaşımı DEC-007 ile seçildi. PWA/çevrimdışı destek MVP sonrasına bırakıldı.

## DEC-003 — Çalışma aracı
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: Sonraki geliştirme süreci Claude ile devam edecek; bu depo devrin kaynağıdır.

## DEC-004 — YA Engine
- Durum: Fikir / kabul edilmedi
- Açıklama: AI, NPC, ekonomi, zaman, dünya ve hikâyeyi yöneten tekrar kullanılabilir motor vizyonu.
- Uyarı: MVP öncesinde ayrı, büyük bir motor inşa etmek zorunlu değildir.

## DEC-005 — Proje adı
- Durum: Geçici
- Açıklama: YA OLSAYDI kod adı, Hayalinde Yaşa olası ticari adıdır.

## DEC-006 — İlk oynanabilir senaryo
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: İlk senaryo **"Küçük bir kasabaya taşınsaydım"**. Çalışma taslağı: kurgusal kasaba Kirazlı, 30 gün, 5 sahne, 2 NPC (`prototypes/kirazli/`).
- Gerekçe: Dar kapsam; ilişki ve huzur/para/zaman dengesi doğal; güç fantezisine kaymaz (Anayasa §3); lüks görsel gerektirmez.
- Alternatifler: Köy yaşamı, zenginlik.
- Etki: İçerik ve sahne çalışması bu senaryoya odaklanır. Kasaba adı, NPC'ler ve metinler taslaktır; senaryo belgesiyle (M0) netleşir.

## DEC-007 — Sahne yaklaşımı
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: **Katmanlı 2D** sahneler: illüstrasyon katmanları, hafif parallax, gün/ışık renklendirmesi, CSS/canvas animasyonu.
- Gerekçe: En düşük maliyetle sinematik his; performans ve erişilebilirlik kolay; ileride 2.5D'ye büyütülebilir.
- Alternatifler: 2.5D (Pixi/Three), 3D.
- Etki: Tüm animasyonlar "hareketi azalt" ayarına ve `prefers-reduced-motion` tercihine uyar.

## DEC-008 — Teknik yığın
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: **TypeScript + React + Vite**; içerik şema doğrulaması için **Zod**; testler **Vitest** (birim) + **Playwright** (uçtan uca). MVP'de backend yok.
- Gerekçe: Yaygın ve hızlı; PWA'ya kolay geçiş; kural motoru UI'dan bağımsız saf TypeScript olarak test edilebilir.
- Alternatifler: Svelte, Phaser, Godot Web.
- Etki: Oyun durumu tek kaynaktır ve deterministik `engine` katmanında yönetilir; sahneler kod değil, şema ile doğrulanan veridir. Prototip kodu (`prototypes/kirazli/`) MVP'ye taşınmaz; içerik ve kurallar yeniden yazılır.

## DEC-009 — Hedef cihaz
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: **Mobil öncelikli responsive web**; masaüstünde de tam çalışır.
- Gerekçe: Paylaşım ve test kolaylığı; DEC-002 ile uyumlu.
- Alternatifler: Önce masaüstü.

## DEC-010 — Geliştirme akışı
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: `main` korumalıdır. Çalışma `feat/*`, `fix/*`, `docs/*` dallarında yapılır → PR → CI yeşil → merge. Commit mesajları Conventional Commits biçimindedir. Sürümler SemVer etiketleriyle işaretlenir; `v0.1.0` = ilk oynanabilir MVP.
- Gerekçe: Sürüm kontrollü, geri alınabilir ilerleme.
- Alternatifler: Doğrudan `main`'e commit.
- Etki: Her kilometre taşı bir issue ve en az bir PR ile ilerler. GitHub'da branch koruma kuralını depo sahibi açar.

## DEC-011 — Asset stratejisi
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: MVP'de **kendi ürettiğimiz geçici görseller** (SVG/canvas/şekil) kullanılır. Final görsellerin üretim yöntemi (AI üretimi, sipariş vb.) ayrı bir kararla belirlenir.
- Gerekçe: Görsel bütçe riskini yönetir; lisans sorunu oluşmaz.
- Alternatifler: Baştan AI görsel üretimi.
- Etki: Her asset `assets/README.md` içinde kaynak ve lisansıyla kaydedilir.

## DEC-012 — Lisans
- Tarih: 2026-11-06
- Durum: Kabul edildi
- Karar: **Tüm hakları saklıdır.** Kod herkese açık depoda görülebilir ancak izinsiz kullanılamaz, kopyalanamaz veya dağıtılamaz (`LICENSE`).
- Gerekçe: Olası ticari ürünü korur; ileride açık kaynağa geçmek her zaman mümkündür.
- Alternatifler: MIT.
