# Prototip: Kirazlı'da Bir Ay

**Durum:** Deneme prototipi. Bir ürün kararı değildir; senaryo (DEC-006) ve teknik yığın (DEC-008) hâlâ açıktır.
**Tarih:** 2026-11-06

## Amaç
"Kısa duygusal deneyim" yaklaşımını oynanabilir biçimde sınamak: Seçimler bir şeyi değiştirdi hissi oluşuyor mu? Mektupla kapanış etkili mi? Metin miktarı doğru mu?

## Nasıl çalıştırılır
`index.html` dosyasını tarayıcıda açın. Kurulum veya sunucu gerekmez (yazı tipleri Google Fonts'tan yüklenir; çevrimdışıyken yedek yazı tipleri kullanılır).

## İçerik
- Senaryo: "Küçük bir kasabaya taşınsaydın?" — kurgusal kasaba Kirazlı, 30 gün.
- 5 sahne: Varış → Mavi kapılı ev → Çarşı → Kiraz Şenliği → Tepedeki bank.
- Durum: Huzur (0–100), Birikim (₺), Saniye Hanım ve Deniz ile ilişki (0–100), bayraklar.
- Bedelli seçimler; önceki seçimler sonraki sahnelerin metnini ve seçeneklerini değiştirir.
- İnceleme noktaları (hotspot): dikkat edilenler günlüğe düşer, bazıları hikâyeye geri döner (ör. penceredeki fotoğraf).
- 3 son: Kök saldım / Arada kaldım / Dönme zamanı. Son, final seçimi ve `huzur + (saniye + deniz) / 2` ölçüsüne göre belirlenir.
- Kapanışta oynanan yola göre değişen "Kirazlı'daki sen"den mektup ve hayat ağacı (seçilen / seçilmeyen yollar).
- Günlük, ayarlar (hareketi azalt, büyük metin), tarayıcıda yerel otomatik kayıt.
- Sahneler canvas üzerinde kodla çizilen katmanlı 2D geçici görsellerdir; üçüncü taraf asset yoktur.

## Sınırlar
- Tek dosya, framework yok, otomatik test yok. MVP kodu bu dosyadan değil, onaylanacak yığınla yeniden yazılmalıdır; içerik ve kurallar oraya taşınabilir.
- Yapay zekâ kullanılmaz; tüm içerik deterministiktir.
- İsimler, metinler ve denge değerleri taslaktır.

## Test edilenler
Tarayıcıda iki tam oynanış (Kök saldım ve Dönme zamanı sonları), masaüstü ve 375 px telefon genişliği; konsol hatası ve yatay taşma yok.
