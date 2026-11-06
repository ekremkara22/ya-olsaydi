# Teknik Mimari

## İlk yön
Web tabanlı, mobil öncelikli dikey kesit (DEC-002, DEC-009). TypeScript + React + Vite, Zod, Vitest + Playwright (DEC-008). Sahneler katmanlı 2D (DEC-007). MVP'de backend yok.

## Önerilen katmanlar
- Presentation: sahneler, UI, ses ve etkileşim.
- Game State: oyuncu profili, zaman, kaynaklar, ilişkiler ve karar geçmişi.
- Rules Engine: doğrulanabilir seçim ve sonuç kuralları.
- Narrative Content: sürümlenmiş sahne ve diyalog verileri.
- AI Adapter (sonraki aşama): yapılandırılmış, sınırlandırılmış ve doğrulanan içerik üretimi.
- Persistence: MVP'de yerel kayıt; daha sonra kullanıcı hesabı ve sunucu tarafı kayıt değerlendirilebilir.

## Güvenlik
API anahtarları tarayıcıya konmaz. Kullanıcının gerçek hayatı ve ilişkileri varsayılan olarak toplanmaz. Gizli bilgiler GitHub'a commit edilmez. AI çıktıları doğrudan veritabanı komutu veya yetkili işlem olarak çalıştırılmaz.

## Açık teknik kararlar
AI sağlayıcısı, sunucu tarafı saklama, maliyet sınırları ve analitik yaklaşımı MVP sonrasına kadar açıktır.
