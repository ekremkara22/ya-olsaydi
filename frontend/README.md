# Frontend

"Kirazlı'da Bir Ay" MVP'sinin web uygulaması. Yığın: TypeScript + React + Vite (DEC-008). Sahneler katmanlı 2D olacak (DEC-007). Önce mobil düşünülür (DEC-009).

## Gereksinimler

Node.js 20.19 veya üstü (CI Node 22 kullanır).

## Komutlar

| Komut                  | Ne yapar                                     |
| ---------------------- | -------------------------------------------- |
| `npm install`          | Bağımlılıkları kurar                         |
| `npm run dev`          | Geliştirme sunucusunu başlatır               |
| `npm test`             | Birim testlerini bir kez çalıştırır (Vitest) |
| `npm run test:watch`   | Testleri izleme modunda çalıştırır           |
| `npm run lint`         | ESLint denetimi                              |
| `npm run typecheck`    | TypeScript tip denetimi                      |
| `npm run format`       | Prettier ile biçimlendirir                   |
| `npm run format:check` | Biçimlendirmeyi denetler                     |
| `npm run build`        | Üretim derlemesi (`dist/`)                   |
| `npm run preview`      | Derlemeyi yerelde sunar                      |

CI (`.github/workflows/ci.yml`) her PR'da lint, format, typecheck, test ve build adımlarını çalıştırır.

## Klasör yapısı

```
src/
  app/        Uygulama kabuğu ve ekran akışı
  engine/     (M2) Saf TS kural motoru: durum, applyChoice, son belirleme
  content/    (M2) Senaryo verisi + Zod şemaları
  persistence/(M5) Yerel kayıt/yükleme
  ui/         (M3) Sahne, seçim kartları, HUD, günlük, ayarlar
  test/       Test kurulumu
```

İlke: Oyun durumu tek kaynaktır ve `engine` içinde deterministik olarak yönetilir. UI yalnızca engine fonksiyonlarını çağırır. Sahneler kod değil, şema ile doğrulanan veridir.
