# MVP Geliştirme Planı — v0.1

**Durum:** Kabul edildi (2026-11-06). Kararlar `ProjectBrain/Decisions.md` içinde DEC-006…DEC-012 olarak kayıtlıdır.
**Tarih:** 2026-11-06
**Hazırlayan rol:** Project Director (Claude)

---

## 1. Mevcut durum değerlendirmesi

### Var olanlar
- Net bir vizyon ve ürün anayasası (Constitution, Vision).
- MVP sınırları için iyi bir çerçeve (GDD: tek senaryo, ~10 dk, 3–5 sahne, 1–2 NPC, 3+ anlamlı seçim, günlük, yerel kayıt, önce deterministik).
- Katmanlı mimari taslağı (Presentation / Game State / Rules / Content / AI Adapter / Persistence).
- Rol tabanlı ajan tüzüğü, GitHub deposu ve temel `.gitignore`.

### Eksikler
| Alan | Eksik | Etki |
|---|---|---|
| Ürün kararı | İlk senaryo seçilmedi (DEC-006 açık) | Tüm içerik ve sahne işi bloke |
| Oyun tasarımı | 10 dakikalık akış, durum değişkenleri, sonlar yazılmadı | Kural motoru tasarlanamaz |
| Görsel yön | 2D / 2.5D / 3D seçilmedi; stil rehberi yok | Asset ve frontend işi bloke |
| Teknik | Framework, test aracı, paket yöneticisi seçilmedi; hiç kod yok | Geliştirme başlayamaz |
| Veri | Durum şeması, içerik (sahne) formatı, kayıt formatı tanımsız | Tutarlılık ilkesi uygulanamaz |
| Kalite | CI, test stratejisi, erişilebilirlik kontrol listesi yok | "Ölçülebilir kalite" ilkesi karşılanmıyor |
| Süreç | Branch/PR kuralları, issue/milestone yapısı, sürümleme yok | Sürüm kontrollü geliştirme tanımsız |
| Asset | Lisans/kaynak politikası var ama üretim yöntemi yok | Placeholder ile başlamak gerekiyor |
| Hukuki | Depo herkese açık ama LICENSE dosyası yok | Kodun kullanım hakları belirsiz |

---

## 2. Kararlar (kabul edildi, 2026-11-06)

| ID | Konu | Karar | Gerekçe | Alternatifler |
|---|---|---|---|---|
| DEC-006 | İlk senaryo | **"Küçük bir kasabaya taşınsaydım"** | Dar kapsam, ilişki ve huzur/para/zaman dengesi doğal; güç fantezisine kaymaz (Anayasa §3); görsel olarak lüks gerektirmez | Köy (benzer, daha yalnız), Zenginlik (gösterişli görsel + güç fantezisi riski) |
| DEC-007 | Sahne yaklaşımı | **Katmanlı 2D** (illüstrasyon katmanları, hafif parallax, gün/ışık renklendirme, CSS animasyon) | En düşük maliyetle sinematik his; performans ve erişilebilirlik kolay; sonra 2.5D'ye büyütülebilir | 2.5D (Pixi/Three), 3D (yüksek maliyet) |
| DEC-008 | Teknik yığın | **TypeScript + React + Vite**, şema doğrulama için **Zod**, testler **Vitest** + **Playwright**, MVP'de backend yok | Yaygın, hızlı, PWA'ya kolay geçiş; kural motoru UI'dan bağımsız saf TS | Svelte, Phaser, Godot Web |
| DEC-009 | Hedef cihaz | **Mobil öncelikli responsive web**, masaüstünde de tam çalışır | Paylaşım ve test kolaylığı; DEC-002 ile uyumlu | Önce masaüstü |
| DEC-010 | Geliştirme akışı | `main` korumalı; `feat/*`, `fix/*`, `docs/*` dalları → PR → CI yeşil → merge; Conventional Commits; SemVer etiketleri (`v0.1.0` = ilk oynanabilir MVP) | Sürüm kontrollü, geri alınabilir ilerleme | Doğrudan `main`'e commit |
| DEC-011 | Asset stratejisi | MVP'de **kendi ürettiğimiz placeholder** (SVG/gradient/şekil); final görseller için yöntem (AI üretim / sipariş) ayrıca karar | Görsel bütçe riski (Status) yönetilir; lisans sorunu olmaz | Baştan AI görsel üretimi |
| DEC-012 | Lisans | **Tüm hakları saklıdır** (`LICENSE`) | Olası ticari ürünü korur; depo public | MIT |

---

## 3. MVP tanımı (kabul kriterleri)

İlk oynanabilir sürüm (`v0.1.0`) şu koşullarda "bitti" sayılır:
1. Tarayıcıda açılan, kurgu profil ile başlayan tek senaryo; baştan sona ~10 dakikada oynanır.
2. 4–5 sahne; her sahne görsel katmanlı arka plan, en az bir etkileşim noktası ve kısa bağlamsal metin içerir.
3. 2 tekrar eden NPC; önceki seçimleri sonraki sahnelerde hatırlar (diyalog/tepki değişir).
4. En az 3 anlamlı seçim; her biri durum değişkenlerini (zaman, para, enerji/huzur, ilişkiler, bayraklar) görünür biçimde etkiler.
5. Seçim sonrası net sonuç geri bildirimi (ne değişti, neden).
6. Günlük paneli: her önemli olay otomatik kayda geçer.
7. En az 2–3 farklı final, birikmiş duruma göre belirlenir.
8. Yerel kayıt/yükleme (otomatik kayıt + elle kayıt), sürüm numaralı kayıt formatı.
9. Ayarlar: animasyonu azalt, ses kapat, metin boyutu.
10. Klavye ile oynanabilir, temel ekran okuyucu etiketleri, WCAG AA kontrast.
11. CI'da lint + typecheck + birim test + baştan sona e2e oynanış testi geçer.
12. Hiçbir API anahtarı, gerçek kişisel veri veya lisanssız asset içermez.

**Kapsam dışı (MVP sonrası):** AI üretimi, kişisel profil, hesap/sunucu kaydı, çoklu senaryo, ses tasarımı (opsiyonel basit ambiyans hariç), PWA offline.

---

## 4. Teknik tasarım özeti (DEC-008)

```
frontend/
  src/
    engine/        # Saf TS: state tipleri, applyChoice(), koşul değerlendirme, son belirleme
    content/       # Senaryo verisi (sahne, seçim, NPC, günlük metinleri) + Zod şemaları
    persistence/   # localStorage kayıt/yükleme, sürüm göçleri
    ui/            # React bileşenleri: SceneView, ChoiceCards, StatusHud, Journal, Settings
    app/           # Ekran akışı: Başlangıç → Profil → Oyun → Final
  tests/           # Vitest birim testleri, Playwright e2e
```

İlkeler:
- **Oyun durumu tek kaynak:** UI yalnızca `engine` fonksiyonlarını çağırır; sonuçlar deterministiktir ve test edilir.
- **İçerik veri olarak:** Sahneler kod değil, şema ile doğrulanan veri. İleride AI Adapter aynı şemayı üretecek (Anayasa §4).
- **İçerik doğrulayıcı:** Ulaşılamayan sahne, tanımsız bayrak, sonsuz döngü gibi hatalar testte yakalanır.

---

## 5. Kilometre taşları

Her madde bir GitHub issue'su ve bir PR olarak ilerler.

| # | Kilometre taşı | Çıktılar | Bağımlılık |
|---|---|---|---|
| M0 | Kararlar ve senaryo tasarımı | DEC-006…012 kaydı; `docs/scenarios/<senaryo>.md` (10 dk akış, durum değişkenleri, sonlar); Status güncellemesi | Proje sahibi onayı |
| M1 | Proje iskeleti | Vite + React + TS (`frontend/`), ESLint/Prettier, Vitest, GitHub Actions CI, GitHub Pages önizleme | M0 (DEC-008) |
| M2 | Deterministik çekirdek | State şeması, `applyChoice`, koşul/son motoru, içerik şeması + doğrulayıcı, birim testler | M1 |
| M3 | Sahne ve arayüz | SceneView (katmanlı 2D), etkileşim noktaları, seçim kartları, durum HUD'ı, sonuç geri bildirimi, günlük, ayarlar | M2 |
| M4 | Senaryo içeriği | 4–5 sahne, 2 NPC, 3+ seçim, 2–3 final, günlük metinleri, placeholder görseller | M0, M2 (M3 ile paralel) |
| M5 | Kayıt/yükleme | Otomatik + elle kayıt, sürümlü format, bozuk kayıt koruması | M2 |
| M6 | QA ve sürüm | Playwright tam oynanış, erişilebilirlik kontrolü, GDD değerlendirme listesiyle oyun testi, `v0.1.0` etiketi | M3–M5 |
| M7 | (MVP sonrası) AI Adapter | Backend proxy, şema doğrulamalı diyalog varyasyonu, maliyet limiti | v0.1.0 + ayrı onay |

---

## 6. Senaryo taslağı (DEC-006: Kasaba)

Bu bir başlangıç önerisidir; isimler, mekânlar ve sonlar M0'da birlikte netleşir.

1. **Varış** — Akşamüstü küçük bir kasaba terminali. Oyuncu neden geldiğini seçer (tükenmişlik / yeni başlangıç / merak). → Başlangıç değerlerini belirler.
2. **Yeni ev** — Ev sahibi NPC ile tanışma. Pazarlık mı, güven mi? → para ↔ ilişki.
3. **Çarşı ve iş** — Uzaktan eski işini sürdürmek mi, kasabada bir işe (ör. fırın) girmek mi? → para, zaman, huzur, ikinci NPC ile bağ.
4. **Kasaba şenliği** — Hazırlığa yardım etmek mi, işe yetişmek mi? Önceki seçimler NPC tepkilerini değiştirir.
5. **Bir ay sonra** — Mektup/günlük kapanışı. Durum birikimine göre final: "Kök saldım" / "Arada kaldım" / "Dönme zamanı".

---

## 7. Sıradaki somut adımlar

1. ~~Kararları kaydet, planı kabul et, Status'u güncelle.~~ (Tamamlandı.)
2. Senaryo belgesini birlikte yaz (`docs/scenarios/kasaba.md`). Temel: `prototypes/kirazli/`.
3. M1 iskeletini `feat/scaffold` dalında kur, CI'ı yeşile getir, PR aç.
