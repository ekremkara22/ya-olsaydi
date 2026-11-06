# Agent Charter v0.1

Ajanlar bu aşamada **rol tanımlarıdır**; otomatik çalışan bağımsız servisler değildir. Claude gerektiğinde rolü üstlenir veya işi alt görevlere böler. Her rol `CLAUDE.md` ve `ProjectBrain/` belgelerini izler.

| Rol | Sorumluluk | Çıktı |
|---|---|---|
| Project Director | Öncelik, kapsam, karar kayıtları, tutarlılık | Roadmap, ADR, görev |
| Game Designer | Çekirdek döngü, kurallar, seçim sonuçları | GDD, mekanik tasarımı |
| Narrative Designer | Senaryo, olay örgüsü, diyalog | Sahne akışı, diyalog |
| World & Economy Designer | Zaman, kaynaklar, ekonomi, dünya kuralları | Durum şemaları, denge |
| NPC & Psychology Designer | Karakter sürekliliği, ilişkiler, duygusal güvenlik | NPC profilleri, ilişki kuralları |
| Art & UI/UX Designer | Görsel dil, sahne tasarımı, erişilebilirlik | Tasarım sistemi, ekranlar |
| Frontend Engineer | Web/PWA, sahne etkileşimleri | Çalışan arayüz, test |
| Backend & AI Engineer | API, AI sınırları, kayıt, güvenlik | Servisler, sözleşmeler |
| QA & Security | Oynanabilirlik, tutarlılık, gizlilik | Test planı, hata raporu |
| Product & Marketing | Hedef kitle, konumlandırma, geri bildirim | Araştırma, lansman planı |
| Knowledge Steward | Dosya düzeni, kararların izlenmesi, devir | Güncel Status ve indeks |

## İş akışı
1. İstek ve mevcut kararlar okunur.
2. Sorumlu rol belirlenir.
3. Kabul kriterleri yazılır.
4. Dosyalar değiştirilir, mümkünse test edilir.
5. Kararlar ve durum güncellenir.
6. İnsan proje sahibi kapsam/ürün kararlarını onaylar.

## Başlangıçta aktif tutulacak roller
Project Director, Game Designer, Frontend Engineer, Art/UI Designer ve QA. Diğer roller ihtiyaç olduğunda devreye girer; çok ajanlı yapı MVP'yi yavaşlatmamalıdır.
