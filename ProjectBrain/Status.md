# Current Status — 2026-11-06

## Aşama
Kararlar alındı; MVP geliştirmesine hazırlık (M0). Henüz MVP kodu yok. Oynanabilir bir deneme prototipi var (`prototypes/kirazli/`, MVP değil).

## Tamamlananlar
- Ürün vizyonu konuşuldu.
- GitHub deposu oluşturuldu.
- Constitution, Vision, GDD ve Claude handoff dokümanlarının ilk sürümü hazırlandı.
- Mevcut durum değerlendirmesi ve MVP planı: `docs/MVP-Plan.md` (kabul edildi).
- Deneme prototipi: `prototypes/kirazli/`. "Kirazlı'da Bir Ay": 5 sahne, bedelli seçimler, mektupla kapanış, hayat ağacı.
- Kabul edilen kararlar (2026-11-06): DEC-006 senaryo (Kasaba), DEC-007 katmanlı 2D, DEC-008 TypeScript + React + Vite, DEC-009 mobil öncelikli web, DEC-010 PR tabanlı akış, DEC-011 geçici görseller, DEC-012 tüm hakları saklı (`LICENSE`). DEC-002 teyit edildi.

## Bekleyenler
- Prototip geri bildirimi: seçimlerin etkisi hissediliyor mu, mektup etkili mi, metin miktarı doğru mu?
- `main` için GitHub branch koruma kuralı (depo sahibi açar).
- Final görsel üretim yöntemi (DEC-011 kapsamında ayrı karar).

## Sonraki görevler
1. M0: `docs/scenarios/kasaba.md`: 10 dakikalık akış, durum değişkenleri, sonlar, NPC profilleri (prototip ve geri bildirim temel alınır).
2. ~~M1: `frontend/` içinde Vite + React + TypeScript iskeleti, ESLint/Prettier, Vitest, GitHub Actions CI.~~ (Tamamlandı. GitHub Pages önizlemesi ertelendi; depo ayarlarında Pages açılınca eklenebilir.)
3. M2: Deterministik çekirdek: state şeması, `applyChoice`, son motoru, içerik şeması ve doğrulayıcı, birim testler.
4. M3–M6: `docs/MVP-Plan.md` kilometre taşlarına göre.

## Riskler
- Görsel kalite hedefinin MVP bütçesini aşması.
- Kontrolsüz AI çıktılarının tutarsızlık üretmesi.
- Gerçek yaşam profillerinin hassas veri içermesi.
- Aşırı ajan ve dokümantasyon yükü.

## Devir
Claude önce `CLAUDE.md` dosyasını okumalı; sonra `ProjectBrain/` ve `docs/` belgelerini incelemeli.
