export const projects = [
  {
    id: 1,
    slug: 'u-market',
    title: 'U-Market',
    subtitle: 'Platform E-Commerce',
    institution: 'Universitas Lampung',
    period: 'Nov 2025 – Apr 2026',
    role: 'Frontend Developer',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Figma', 'Scrum'],
    shortDesc: 'Platform e-commerce berbasis website yang dikembangkan sebagai proyek tugas akhir (skripsi) menggunakan Vue.js dan Tailwind CSS dengan metode Scrum.',
    thumbnail: '/projects/umarket_thumb.jpg',
    badgeTone: 'bg-[var(--primary-soft)] text-[var(--primary)]',
    overview:
      'U-Market adalah platform e-commerce berbasis website yang dirancang dan dikembangkan sebagai proyek tugas akhir (skripsi) di S1 Teknik Informatika Universitas Lampung. Platform ini berfokus pada pengalaman pengguna yang responsif, interaktif, dan terstruktur untuk mempermudah transaksi jual beli dengan alur yang modern.',
    problemBackground:
      'Aktivitas jual-beli barang antar mahasiswa sebelumnya sering tersebar di berbagai platform chat informal tanpa katalog produk yang jelas, filter pencarian terstruktur, maupun sistem manajemen toko. U-Market hadir sebagai platform marketplace terpadu yang mempermudah proses pencarian, pembelian, dan pengelolaan toko secara efisien.',
    roleContribution: [
      'Mendesain antarmuka pengguna menggunakan Figma sebagai acuan dalam pengembangan frontend.',
      'Mengimplementasikan desain antarmuka menjadi aplikasi web yang responsif, interaktif, dan berorientasi pada pengalaman pengguna.',
      'Berkolaborasi dengan tim menggunakan metode Scrum dalam proses perencanaan, pengembangan, dan penyelesaian fitur aplikasi.',
      'Mengintegrasikan antarmuka pengguna dengan backend serta melakukan pengujian untuk memastikan fungsionalitas sistem berjalan dengan baik.'
    ],
    keyFeatures: [
      'Katalog & Pencarian Produk Interaktif dengan Filter Kategori',
      'Halaman Detail Produk Lengkap & Pilihan Varian',
      'Shopping Cart & Ringkasan Checkout Dinamis',
      'Dashboard Merchant "Toko Saya" & Inventaris Produk',
      'Manajemen Profil Pengguna & Riwayat Pesanan'
    ],
    screenshots: [
      {
        title: 'Halaman Utama & Katalog Produk',
        image: '/projects/umarket_thumb.jpg',
        description: 'Tampilan beranda dengan grid kartu produk yang responsif dan filter kategori.'
      },
      {
        title: 'Halaman Detail Produk',
        image: '/projects/umarket_product.jpg',
        description: 'Halaman rincian produk dengan galeri foto, spesifikasi, dan pilihan varian.'
      },
      {
        title: 'Keranjang Belanja & Checkout',
        image: '/projects/umarket_cart.jpg',
        description: 'Alur keranjang belanja interaktif dengan kalkulasi otomatis subtotal dan ringkasan pesanan.'
      },
      {
        title: 'Dashboard Penjual',
        image: '/projects/umarket_profile.jpg',
        description: 'Panel admin toko untuk memantau ringkasan pendapatan, pesanan baru, dan manajemen inventaris produk.'
      }
    ],
    developmentProcess: [
      'Analisis Kebutuhan Pengguna & Perancangan Alur (User Flow)',
      'Perancangan Antarmuka & Design System menggunakan Figma',
      'Pengembangan Komponen Frontend menggunakan Vue.js & Tailwind CSS',
      'Penerapan Metode Scrum (Sprint Planning, Development, & Review)',
      'Integrasi Antarmuka Pengguna dengan Backend & Pengujian Sistem'
    ]
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
