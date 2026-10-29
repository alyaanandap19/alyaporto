export const projects = [
  {
    id: 1,
    slug: 'u-market',
    title: 'U-Market',
    subtitle: 'Platform E-Commerce Kampus',
    institution: 'Universitas Lampung',
    period: 'Nov 2025 – Apr 2026',
    role: 'Frontend Developer',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Figma', 'Scrum', 'Git/GitHub', 'Trello', 'Vue Router', 'axios'],
    shortDesc: 'Frontend website e-commerce untuk komunitas jual beli Universitas Lampung yang menggantikan grup WhatsApp "U Marketplace". Dibangun dengan Vue.js dan Tailwind CSS memakai metode Scrum (4 sprint) sebagai proyek skripsi.',
    cardDesc: 'Platform e-commerce kampus berbasis Vue.js dan Tailwind CSS dengan 21 halaman dan fitur untuk pembeli, penjual, dan admin. UEQ: 5 dari 6 dimensi Excellent.',
    thumbnail: '/projects/umarket_thumbnail.png',
    badgeTone: 'bg-[var(--primary-soft)] text-[var(--primary)]',
    overview:
      'Frontend website e-commerce untuk komunitas jual beli Universitas Lampung yang menggantikan grup WhatsApp "U Marketplace". Dibangun dengan Vue.js dan Tailwind CSS memakai metode Scrum (4 sprint) sebagai proyek skripsi.',
    problemBackground:
      'Survei terhadap 34 pengguna grup WhatsApp "U Marketplace" menunjukkan masalah utama: informasi produk cepat tertimbun, pencarian sulit, dan konfirmasi pesanan masih manual. U-Market dibuat sebagai platform terpusat dengan katalog, pencarian, keranjang, dan status pesanan.',
    projectLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/alyaananda19/E-Commerce-U-Market' },
      { label: 'Desain Figma', url: 'https://www.figma.com/design/rNeNJWTLGPSDrvweBg0dRt/umarket-hi-fi?node-id=1-2&t=U2L5297Hxdye1cmx-1' }
    ],
    team: 'Tim 4 orang: Product Owner, Scrum Master, Frontend Developer (saya), Backend Developer.',
    roleContribution: [
      'Merancang 15 desain High Fidelity di Figma sebagai acuan frontend',
      'Mengimplementasikan 21 halaman dan fitur dengan Vue.js dan Tailwind CSS dalam 3 sprint implementasi, untuk sisi pengguna dan admin',
      'Mengintegrasikan antarmuka dengan backend dari rekan tim menggunakan API',
      'Menjalankan Blackbox Testing dan evaluasi UEQ dengan 50 responden',
      'Berkolaborasi dalam sprint planning, daily scrum, review, dan retrospective'
    ],
    featureGroups: [
      {
        title: 'Pembeli',
        items: [
          'Katalog produk di landing dan beranda',
          'Pencarian produk berdasarkan nama produk atau toko',
          'Detail produk dengan pemilih jumlah sesuai stok',
          'Keranjang: pilih semua, ubah jumlah, hapus item',
          'Checkout dengan ringkasan per toko dan halaman konfirmasi pesanan',
          'Pesanan Saya per status dengan tombol Hubungi Penjual',
          'Profil pengguna dan pengelolaan rekening bank'
        ]
      },
      {
        title: 'Penjual',
        items: [
          'Toko Saya: saldo penjualan, ringkasan pesanan (masuk, perlu dikirim, dikirim), tabel produk dengan tambah, ubah, hapus',
          'Profil toko publik berisi galeri produk'
        ]
      },
      {
        title: 'Admin',
        items: [
          'Dashboard: jumlah pengguna, total transaksi, grafik penjualan, produk populer',
          'Manajemen produk, manajemen pengguna, riwayat penjualan'
        ]
      },
      {
        title: 'Umum',
        items: [
          'Login dan register dengan validasi form, navigasi sesuai status login, konfirmasi logout, halaman Syarat & Ketentuan dan Hubungi Kami'
        ]
      }
    ],
    testResults: [
      { label: 'Blackbox Testing', value: 'Valid', detail: 'Seluruh test case valid' },
      { label: 'UEQ Excellent', value: '5 dari 6', detail: 'Dimensi' },
      { label: 'UEQ Good', value: '1 dari 6', detail: 'Dimensi' },
      { label: 'Efisiensi', value: '2,07', detail: 'Mean UEQ' },
      { label: 'Kejelasan', value: '2,04', detail: 'Mean UEQ' },
      { label: 'Daya Tarik', value: '2,00', detail: 'Mean UEQ' },
      { label: 'Ketepatan', value: '1,99', detail: 'Mean UEQ' },
      { label: 'Stimulasi', value: '1,87', detail: 'Mean UEQ' },
      { label: 'Kebaruan', value: '1,32', detail: 'Mean UEQ' }
    ],
    screenshots: [
      {
        title: 'Halaman Beranda',
        image: '/projects/umarket_home.png',
        description: 'Beranda U-Market menampilkan katalog produk dan pencarian.'
      },
      {
        title: 'Detail Produk',
        image: '/projects/umarket_product_detail.png',
        description: 'Halaman detail produk menampilkan informasi produk, stok, dan pilihan jumlah.'
      },
      {
        title: 'Halaman Keranjang',
        image: '/projects/umarket_cart_page.png',
        description: 'Keranjang belanja menampilkan pilihan item dan pengaturan jumlah produk.'
      },
      {
        title: 'Halaman Pesanan Saya',
        image: '/projects/umarket_my_orders.png',
        description: 'Halaman pesanan menampilkan produk yang dibeli, status pesanan, dan tombol Hubungi Penjual.'
      },
      {
        title: 'Halaman Toko Saya',
        image: '/projects/umarket_my_store.png',
        description: 'Halaman penjual menampilkan saldo, ringkasan pesanan, dan tabel pengelolaan produk.'
      },
      {
        title: 'Beranda Admin',
        image: '/projects/umarket_admin_dashboard.png',
        description: 'Dashboard admin menampilkan jumlah pengguna, riwayat transaksi, diagram penjualan, dan produk populer.'
      },
      {
        title: 'Manajemen Pengguna Admin',
        image: '/projects/umarket_admin_users.png',
        description: 'Halaman admin menampilkan daftar pengguna beserta status, jumlah produk, dan opsi pengelolaan.'
      },
      {
        title: 'Grafik Benchmark Pengujian UEQ',
        image: '/projects/umarket_ueq_benchmark.png',
        description: 'Grafik benchmark menampilkan kategori hasil dan nilai mean pada enam dimensi UEQ.'
      }
    ],
  },
  {
    id: 2,
    slug: 'magnet',
    title: 'MAGNET',
    subtitle: 'Sistem Informasi Magang',
    institution: 'BPS Kota Bandar Lampung',
    period: 'Jul 2025 – Sep 2025',
    role: 'Frontend Developer (Magang)',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Figma', 'Git/GitHub'],
    shortDesc: 'Frontend 3 fitur baru untuk sistem informasi magang BPS Kota Bandar Lampung (MAGNET): Laporan Magang, Jadwal & Kuota Magang, dan Cek Status Pendaftaran. Mencakup 10 halaman untuk 3 peran pengguna, dibangun dengan Next.js dan Tailwind CSS selama magang 6 minggu.',
    cardDesc: 'Frontend 3 fitur untuk sistem informasi magang BPS Kota Bandar Lampung (10 halaman, 3 peran pengguna) dengan Next.js dan Tailwind CSS.',
    thumbnail: '/projects/magnet_monitoring_laporan.png',
    badgeTone: 'bg-[var(--soft-blue)] text-blue-600',
    projectLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/alyaananda19/MAGNET-BPS' },
      { label: 'Desain Figma', url: '' }
    ],
    overview:
      'MAGNET (Magang dan Monitoring Elektronik Terpadu) adalah sistem informasi magang di Badan Pusat Statistik (BPS) Kota Bandar Lampung. Selama magang di Tim Pengolahan dan IT, saya mengembangkan sisi antarmuka untuk tiga fitur baru: Laporan Magang, Jadwal & Kuota Magang, dan Cek Status Pendaftaran. Cakupannya 10 halaman untuk peserta, pembimbing, dan admin.',
    problemBackground:
      'Sebelumnya MAGNET hanya mengelola pendaftaran dan data peserta. Laporan magang dikumpulkan manual lewat dokumen fisik atau file terpisah, jadwal dan kuota hanya diinformasikan lewat grup komunikasi, dan peserta tidak bisa memantau status pendaftaran secara langsung. Akibatnya informasi terlambat, pengelolaan laporan kurang efisien, dan status pendaftaran kurang transparan.',
    team: 'Tim 2 developer (frontend dan backend) di bawah Ketua Tim Pengolahan dan IT serta satu mentor. Saya sebagai frontend developer.',
    roleContribution: [
      'Merancang use case, activity diagram, dan 10 wireframe bersama pembimbing lapangan sebagai acuan frontend',
      'Mengimplementasikan 10 halaman dengan Next.js dan Tailwind CSS untuk peran peserta, pembimbing, dan admin',
      'Membangun logika tampilan: kuota harian berkode warna, validasi unggah laporan (PDF atau PowerPoint, maksimal 5 MB), serta tampilan sesuai peran dan status login',
      'Mengintegrasikan antarmuka dengan backend rekan tim dan menguji 12 skenario fungsionalitas bersama pembimbing',
      'Menambahkan fitur Cek Status Pendaftaran atas masukan pembimbing, lalu mempresentasikan hasilnya kepada pegawai dan pimpinan BPS'
    ],
    featureGroups: [
      {
        title: 'Jadwal & Kuota Magang',
        items: ['Kalender dengan kode warna hijau, kuning, oranye, dan merah menurut persentase keterisian kuota; dapat dibuka sebelum login']
      },
      {
        title: 'Cek Status Pendaftaran',
        items: ['Ringkasan menunggu persetujuan dan ditolak beserta daftar pendaftar; dapat dibuka sebelum login']
      },
      {
        title: 'Laporan Magang untuk Peserta',
        items: ['Tambah, ubah, hapus, filter, dan unggah file PDF atau PowerPoint (maksimal 5 MB) dengan notifikasi kesalahan']
      },
      {
        title: 'Kalender Magang untuk Admin dan Pembimbing',
        items: ['Jumlah peserta per tanggal dan detail peserta melalui tombol Lihat Detail']
      },
      {
        title: 'Monitoring Laporan untuk Admin dan Pembimbing',
        items: ['Filter, pencarian, unduh file, serta komentar dan tanda suka pada laporan']
      }
    ],
    testResults: [
      { label: 'Skenario Uji Fungsionalitas', value: '12', detail: 'Seluruhnya berhasil' },
      { label: 'Nilai Kerja Praktik', value: '97,8 (A)', detail: 'Dari pembimbing lapangan' },
      { label: 'Uji Coba', value: 'Bersama peserta magang', detail: 'Dipresentasikan kepada pegawai dan pimpinan BPS' },
      { label: 'Penggunaan', value: '3 peran', detail: 'Admin, pembimbing, dan peserta magang BPS Kota Bandar Lampung' }
    ],
    screenshots: [
      {
        title: 'Halaman Sign In & Akses Publik',
        image: '/projects/magnet_sign_in.png',
        description: 'Login untuk 3 peran, serta akses Jadwal & Kuota dan Cek Status Pendaftaran sebelum login.'
      },
      {
        title: 'Jadwal & Kuota Magang',
        image: '/projects/magnet_jadwal_kuota.png',
        description: 'Kalender dengan kode warna tingkat keterisian kuota.'
      },
      {
        title: 'Cek Status Pendaftaran',
        image: '/projects/magnet_cek_status.png',
        description: 'Ringkasan Menunggu Persetujuan dan Ditolak beserta daftar pendaftar.'
      },
      {
        title: 'Kalender Magang (Sesudah)',
        image: '/projects/magnet_kalender_after.png',
        description: 'Kalender menampilkan jumlah peserta per tanggal dengan tombol Lihat Detail.'
      },
      {
        title: 'Laporan Magang',
        image: '/projects/magnet_laporan_magang.png',
        description: 'Daftar laporan dengan filter, serta aksi tambah, ubah, dan hapus.'
      },
      {
        title: 'Monitoring Laporan',
        image: '/projects/magnet_monitoring_laporan.png',
        description: 'Daftar laporan seluruh peserta dengan filter, pencarian, unduh file, dan tombol detail.'
      },
      {
        title: 'Detail Laporan',
        image: '/projects/magnet_detail_laporan.png',
        description: 'Dokumen terlampir, komentar, dan tanda suka dari admin atau pembimbing.'
      }
    ],
    developmentProcess: [
      'Orientasi dan Analisis Kebutuhan Bersama Pembimbing Lapangan BPS',
      'Perancangan Use Case, Activity Diagram, dan 10 Wireframe Halaman',
      'Implementasi 10 Halaman Frontend dengan Next.js dan Tailwind CSS',
      'Integrasi dengan Backend dan Pengujian 12 Skenario Fungsionalitas',
      'Demo ke Pembimbing, Uji Coba bersama Peserta Magang, dan Presentasi Akhir kepada Pegawai dan Pimpinan BPS'
    ]
  }
]

export const featuredProjects = projects
export const otherProjects = []
