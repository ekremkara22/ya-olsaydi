# Game Design Document v0.1

## Kısa tanım
Tek oyunculu, alternatif yaşam senaryolarında geçen, sahne odaklı AI destekli yaşam simülasyonu. Tasarım hâlâ keşif aşamasındadır.

## Oyuncu deneyimi
1. Başlangıç: kurgusal profil veya isteğe bağlı kişisel profil.
2. Senaryo seçimi: örn. zenginlik, köy, kasaba.
3. Sahne: atmosferik çevre, etkileşim noktaları, karakterler, kısa bağlamsal metin.
4. Seçim: oyuncu iki veya daha fazla eylem arasında karar verir.
5. Sonuç: zaman, para, ilişki, itibar veya yaşam memnuniyeti gibi değişkenler etkilenir.
6. Süreklilik: günlüğe olay düşer, dünya durumu saklanır, sonraki sahne önceki seçimi hatırlar.

## MVP önerisi — onay bekliyor
- Tek senaryo ve yaklaşık 10 dakika oynanış.
- 3–5 yüksek kaliteli sahne.
- 1–2 tekrar eden NPC.
- 3 veya daha fazla anlamlı seçim noktası.
- Basit kaynak/ilişki/zaman durumu.
- Günlük ve yerel save/load.
- Önce deterministik hikâye; AI destekli varyasyon daha sonra.

## UI ilkeleri
- Görsel sahne birincil yüzeydir.
- Kısa, anlaşılır karar kartları.
- Profil, günlük ve ayarlar ikincil yüzeylerdir.
- Ses, animasyon ve efektler kapatılabilir.
- Mobil ve masaüstü erişilebilirliği değerlendirilir.

## AI ilkeleri
AI diyalog, olay önerisi ve sahne betimleme için yardımcı olabilir. Kalıcı dünya durumu şema doğrulaması ve oyun kurallarıyla yönetilir. Prompt injection, maliyet limiti, moderasyon ve güvenlik tasarımın parçasıdır.

## Değerlendirme
- Oyuncu ilk 2 dakikada amacı anlıyor mu?
- Kararların sonucu açıkça hissediliyor mu?
- Sahne, uzun metin okumadan deneyim yaratıyor mu?
- Önceki olaylar sonraki sahnelerde tutarlı mı?
- 10 dakikalık oturum teknik hatasız tamamlanıyor mu?

## Henüz karar verilmeyenler
Teknik stack, görsel stilin üretim yöntemi, ilk senaryo, ekonomi modelinin ayrıntıları, hedef platform önceliği ve ticari model.
