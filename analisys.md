# Analisis Website Agro Hero: Kekurangan dari Segi UI & Ajakan Download (CTA)

Selain konten, antarmuka pengguna (UI) dan penempatan Call-to-Action (CTA) sangat mempengaruhi tingkat konversi (seberapa banyak orang yang akhirnya mendownload aplikasi). Berikut adalah analisis kekurangannya:

## 1. Minimnya Visibilitas Ajakan Download Aplikasi (CTA)

- **Kekurangan:** Saat ini, tombol "Download App" hanya terdapat di _Header_ bagian atas. Di bagian _Hero Section_, CTA berfokus pada "Lihat Proyek Perdana" dan "Gabung Sebagai Mitra". Padahal, jika _core product_ Anda adalah aplikasi _mobile_ (untuk memantau GPS lahan via Agro Hero ID), mendownload aplikasi harus menjadi prioritas utama.
- **Solusi:**
  - Tambahkan tombol **Google Play** dan **App Store** di Hero Section (bisa diselipkan di bawah dua tombol utama atau diletakkan berdampingan).
  - Buat **Satu Section Khusus (App Download Banner)** sebelum _Footer_. Section ini bisa berisi _mockup_ layar aplikasi _mobile_ yang menampilkan fitur pemantauan lahan (GPS/Dashboard), dengan teks ajakan kuat seperti: _"Pantau Lahan Anda Kapan Saja, Dari Mana Saja. Download Agro Hero Sekarang."_ disertai tombol _store_ yang besar.

## 2. Nuansa "Agritech" yang Kurang Kuat pada UI

- **Kekurangan:** Desain saat ini sangat _clean_ dan modern (berbasis _Shadcn UI_), yang mana itu sangat bagus. Namun, desain ini terasa sedikit terlalu _generic_ (seperti aplikasi SaaS biasa) dan kurang memancarkan identitas "Pertanian" atau bumi.
- **Solusi:**
  - Tambahkan aksen tekstur atau ornamen visual organik (seperti pola daun samar atau kontur tanah/peta topografi) pada _background_ komponen tertentu (misalnya di `Traction Bar` atau `Hero`).
  - Pastikan _Mockup_ gambar di Hero Section benar-benar menampilkan antarmuka aplikasi Anda yang sedang memantau lahan hijau atau grafik pertumbuhan tanaman.

## 3. Hirarki Visual pada "Value Proposition"

- **Kekurangan:** Komponen `Value Proposition` untuk Investor dan Petani disajikan dalam ukuran kartu (card) yang sama besar dan berdampingan. Terkadang, pengunjung bingung harus fokus ke mana terlebih dahulu.
- **Solusi:**
  - Jika target utama pemasaran _landing page_ saat ini adalah mencari **Investor** (karena Anda sudah punya 3 Kelompok Tani), buat ukuran porsi "Untuk Investor" sedikit lebih menonjol, atau tambahkan tombol CTA spesifik di dalam kartu investor ("Mulai Danai Sekarang").
  - Pastikan menggunakan warna kontras yang memandu mata (contoh: Tombol khusus Investor berwarna _Orange_ terang, sedangkan untuk Petani berwarna _Emerald/Hijau_ gelap).

## 4. Ketiadaan Simulasi Investasi Interaktif

- **Kekurangan:** Informasi ROI disajikan berupa teks statis di dalam kartu proyek (misal: 15% - 18%).
- **Solusi (UI Tingkat Lanjut):**
  - Tambahkan kalkulator investasi sederhana interaktif di halaman utama atau halaman detail proyek. _Contoh: Terdapat slider "Jika saya mendanai [Rp 10.000.000], estimasi pengembalian dalam 4 bulan adalah [Rp 11.500.000]"._
  - Fitur interaktif secara psikologis sangat ampuh mendorong pengguna untuk segera mendownload aplikasi karena mereka sudah merasakan "bayangan keuntungan".

## 5. Optimalisasi Tampilan Mobile (Mobile Responsiveness)

- **Catatan UI:** Pastikan komponen `Featured Projects` dapat digeser dengan format _carousel/swipe_ di layar ponsel (HP), bukan memanjang ke bawah (stack) terlalu jauh yang membuat pengguna kelelahan melakukan _scroll_. Pengalaman menggunakan aplikasi _Agritech_ umumnya dinilai dari kemudahan antarmuka di perangkat _mobile_.
