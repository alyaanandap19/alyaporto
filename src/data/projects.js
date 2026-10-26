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
    technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    shortDesc: 'Sistem informasi magang dan monitoring elektronik terpadu di BPS Kota Bandar Lampung yang mencakup fitur Laporan Magang, Jadwal & Kuota, serta Cek Status Pendaftaran.',
    thumbnail: '/projects/magnet_thumb.jpg',
    badgeTone: 'bg-[var(--soft-blue)] text-blue-600',
    overview:
      'MAGNET (Sistem Informasi Magang dan Monitoring Elektronik Terpadu) adalah aplikasi web yang dikembangkan selama masa magang di Badan Pusat Statistik (BPS) Kota Bandar Lampung. Sistem ini mendigitalkan dan mengoptimalkan seluruh siklus magang, mulai dari pendaftaran, pengecekan status, hingga pelaporan berkala peserta magang.',
    problemBackground:
      'Proses pendaftaran dan pelaporan magang yang sebelumnya dilakukan secara terpisah dan manual sering mengakibatkan ketidakpastian status bagi peserta dan pembimbing. MAGNET menyediakan satu pintu informasi terpusat yang transparan, terstruktur, dan efisien.',
    roleContribution: [
      'Mengembangkan antarmuka sistem informasi magang dan monitoring elektronik terpadu (MAGNET) dengan Next.js dan Tailwind CSS.',
      'Membangun 3 fitur utama: Laporan Magang, Jadwal dan Kuota Magang, serta Cek Status Pendaftaran.',
      'Mengintegrasikan antarmuka dengan backend dan menguji setiap fitur bersama tim sebelum diserahkan.',
      'Mempresentasikan hasil pengembangan kepada pembimbing dan pihak BPS, serta sistem diuji coba langsung oleh peserta magang.'
    ],
    keyFeatures: [
      'Cek Status Pendaftaran Magang secara Real-Time',
      'Manajemen Jadwal dan Alokasi Kuota Magang',
      'Modul Laporan Magang Berkala & Pemantauan Aktivitas',
      'Dashboard Data & Informasi Terpusat BPS'
    ],
    screenshots: [
      {
        title: 'Halaman Utama Sistem MAGNET',
        image: '/projects/magnet_thumb.jpg',
        description: 'Tampilan antarmuka beranda sistem MAGNET untuk kuota magang dan cek status pendaftaran.'
      }
    ],
    developmentProcess: [
      'Analisis Kebutuhan Sistem Magang & Alur Kerja BPS Kota Bandar Lampung',
      'Perancangan Antarmuka & Tata Letak Komponen Dashboard',
      'Pengembangan Komponen Frontend menggunakan Next.js & Tailwind CSS',
      'Integrasi Endpoint Backend & Pengujian Fungsionalitas Bersama Tim',
      'Presentasi Hasil Pengembangan & Uji Coba Langsung oleh Peserta Magang'
    ]
  }
]

export const featuredProjects = projects
export const otherProjects = []
