# FUTURE CASA — The Future of Living

Website Next.js untuk brand properti, arsitektur/interior, dan smart living.

## Isi versi awal
- Beranda premium futuristik, responsif untuk desktop dan ponsel.
- Katalog properti dengan pencarian dan filter kategori di sisi browser.
- Halaman layanan, jurnal, kontak, dan dashboard demo.
- CTA WhatsApp menggunakan nomor contoh yang wajib diganti.
- Metadata dasar dan konfigurasi Vercel.

## Persyaratan
- Node.js 20.9 atau lebih baru.
- npm 10+ disarankan.

## Menjalankan di komputer
```bash
npm install
npm run dev
```
Buka `http://localhost:3000`.

## Build pemeriksaan
```bash
npm run build
```

## Upload ke GitHub
1. Buat repository baru bernama `future-casa` pada akun GitHub `estehtian`.
2. Pilih Public atau Private sesuai kebutuhan.
3. Ekstrak ZIP ini.
4. Upload **isi folder** `future-casa` ke root repository (jangan mengunggah folder pembungkusnya).
5. Pastikan `package.json`, `app/`, `components/`, dan `public/` berada langsung di root repository.
6. Commit ke branch `main`.

## Deploy ke Vercel
1. Masuk ke Vercel dan pilih **Add New → Project**.
2. Import repository `estehtian/future-casa`.
3. Biarkan Framework Preset terdeteksi sebagai Next.js.
4. Root Directory `./`; Build Command `next build`; Output Directory biarkan default.
5. Klik Deploy. Setiap push ke branch produksi akan memicu deployment baru.

## Pengaturan kontak
Buat `.env.local` dari `.env.example`, lalu ganti nomor WhatsApp:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=628xxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://alamat-domain-anda
```
Nomor ditulis angka saja dengan kode negara, tanpa `+`, spasi, atau tanda hubung. Restart server setelah mengubah env.

## Struktur
```text
future-casa/
├── app/
│   ├── properties/page.tsx
│   ├── services/page.tsx
│   ├── journal/page.tsx
│   ├── contact/page.tsx
│   ├── dashboard/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PropertyCard.tsx
│   └── WhatsAppLink.tsx
├── lib/data.ts
├── public/
│   └── favicon.svg
├── .env.example
├── next.config.ts
├── package.json
└── README.md
```

## Batasan penting versi starter
Katalog, artikel, dan dashboard pada paket ini menggunakan data contoh lokal. Belum ada database, login aman, upload foto, sistem pemesanan, pembayaran, atau CMS. Jangan gunakan dashboard demo sebagai panel admin produksi. Tahap berikutnya dapat menghubungkan Supabase untuk autentikasi, database, storage, dan peran admin/editor.
