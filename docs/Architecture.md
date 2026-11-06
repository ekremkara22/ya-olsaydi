# Teknik Mimari — Taslak

## İlk yön
Web tabanlı/PWA dikey kesit. Framework, oyun render teknolojisi ve backend henüz seçilmedi.

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
React/Vite mi, başka bir UI yığını mı? 2D sahne motoru gerekli mi? AI sağlayıcısı, saklama biçimi, maliyet sınırları ve analitik yaklaşımı henüz net değil.
