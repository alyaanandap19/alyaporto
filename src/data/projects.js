export const projects = [
  {
    id: 1,
    slug: 'u-market',
    title: 'U-Market',
    subtitle: 'E-Commerce Website',
    role: 'Frontend Developer',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    shortDesc: 'Platform e-commerce berbasis website yang dikembangkan sebagai proyek tugas akhir dengan fokus pada pengalaman pengguna dan antarmuka yang responsif.',
    thumbnail: '/projects/umarket_thumb.jpg',
    badgeTone: 'bg-[var(--primary-soft)] text-[var(--primary)]',
    overview:
      'U-Market adalah platform e-commerce berbasis web yang dikembangkan secara komprehensif sebagai proyek tugas akhir. Platform ini dirancang khusus untuk memenuhi kebutuhan marketplace di lingkungan kampus dengan antarmuka yang modern, cepat, serta pengalaman pengguna yang mulus pada berbagai perangkat.',
    problemBackground:
      'Aktivitas jual-beli barang antar mahasiswa sering kali tersebar di berbagai platform chat informal tanpa sistem pencarian yang terstruktur, katalog produk yang jelas, maupun sistem verifikasi toko. U-Market hadir sebagai platform terpadu yang memudahkan mahasiswa dan masyarakat dalam mencari, membeli, maupun menjual barang kebutuhan secara efisien.',
    roleContribution: [
      'Merancang arsitektur antarmuka pengguna (UI/UX) yang bersih, intuitif, dan responsif.',
      'Mengembangkan seluruh komponen modular dan reusable antarmuka menggunakan Vue.js dan Tailwind CSS.',
      'Membangun alur interaksi pengguna mulai dari katalog produk, filter dinamis, detail produk, sistem keranjang (cart), hingga alur checkout.',
      'Mengembangkan dashboard merchant "Toko Saya" untuk manajemen produk, pantauan pesanan, dan analitik toko.',
      'Memastikan performa rendering halaman cepat, struktur kode terorganisasi, dan responsif di berbagai resolusi layar.'
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
        description: 'Tampilan beranda dengan grid kartu produk yang responsif.'
      },
      {
        title: 'Halaman Detail Produk',
        image: '/projects/umarket_product.jpg',
        description: 'Halaman rincian produk dengan galeri foto.'
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
      'Perancangan Antarmuka & Design System menggunakan prinsip Atomic UI',
      'Pengembangan Komponen Frontend menggunakan Vue.js & Tailwind CSS',
      'Integrasi State Management & Interaktivitas UI Komprehensif'
    ]
  },
  {
    id: 2,
    slug: 'magnet',
    title: 'MAGNET',
    subtitle: 'Sistem Informasi Magang',
    role: 'Frontend Developer',
    technologies: ['Next.js', 'Tailwind CSS'],
    shortDesc: 'Sistem informasi untuk membantu proses pendaftaran magang, pengecekan status, serta pengelolaan jadwal dan kuota peserta.',
    thumbnail: '/projects/magnet_thumb.jpg',
    badgeTone: 'bg-[var(--soft-blue)] text-blue-600',
    overview:
      'MAGNET (Sistem Informasi Magang) adalah aplikasi web komprehensif yang dirancang untuk mendigitalkan dan mengoptimalkan seluruh siklus program magang, mulai dari registrasi peserta, verifikasi berkas, pemantauan status seleksi secara real-time, hingga pengelolaan alokasi kuota penerimaan oleh institusi.',
    problemBackground:
      'Proses pendaftaran magang yang sebelumnya dilakukan secara manual melalui pengumpulan berkas fisik atau form terpisah sering mengakibatkan ketidakpastian status bagi peserta. MAGNET menyediakan satu pintu informasi terpusat yang transparan dan efisien.',
    roleContribution: [
      'Mengembangkan arsitektur antarmuka frontend berbasis Next.js dan Tailwind CSS yang rapi dan terstruktur.',
      'Merancang dashboard data kuota magang secara ringkas dan informatif.',
      'Membangun tabel data pendaftar magang interaktif yang dilengkapi pencarian, filter status, dan navigasi.',
      'Mengimplementasikan badge status visual (Diterima, Menunggu, Dalam Proses) untuk kemudahan scanning informasi.'
    ],
    keyFeatures: [
      'Dashboard Pemantauan & Metrik Statistik Kuota Magang',
      'Tabel Data Pendaftar Mahasiswa Interaktif',
      'Pelacakan Status Seleksi Real-Time (Diterima / Menunggu / Proses)',
      'Fitur Filter Status & Pencarian Cepat'
    ],
    screenshots: [
      {
        title: 'Halaman Utama Sistem MAGNET',
        image: '/projects/magnet_thumb.jpg',
        description: 'Tampilan antarmuka halaman utama sistem MAGNET.'
      }
    ],
    developmentProcess: [
      'Analisis Kebutuhan Alur Pendaftaran & Verifikasi Magang',
      'Perancangan Wireframe & Tata Letak Dashboard Admin',
      'Slicing UI & Komposisi Komponen Berbasis Next.js dan Tailwind CSS',
      'Penyelarasan Desain Responsif untuk Kemudahan Akses Pengguna'
    ]
  },
  {
    id: 3,
    slug: 'sistem-rental-buku',
    title: 'Sistem Rental Buku',
    subtitle: 'Web-Based Rental System',
    role: 'Web Developer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    shortDesc: 'Aplikasi berbasis website untuk mengelola proses penyewaan buku.',
    thumbnail: '/projects/rental_buku_thumb.jpg',
    badgeTone: 'bg-[var(--soft-orange)] text-orange-600',
    overview:
      'Sistem Rental Buku adalah aplikasi web yang dirancang untuk memodernisasi layanan persewaan dan peminjaman buku.',
    problemBackground:
      'Pencatatan peminjaman buku manual pada kartu kertas rentan terhadap kesalahan penghitungan durasi sewa, kehilangan catatan ketersediaan stok, dan ketidakjelasan tanggal jatuh tempo pengembalian buku bagi pelanggan.',
    roleContribution: [
      'Membangun seluruh struktur halaman web semantik menggunakan HTML5 dan CSS modern.',
      'Merancang katalog buku dengan visual cover, status ketersediaan (Tersedia / Dipinjam), dan opsi durasi sewa.',
    ],
    keyFeatures: [
      'Katalog Buku Digital & Label Status Ketersediaan Stok',
      'Kalkulator Tarif Sewa Otomatis Berdasarkan Durasi',
      'Pencarian & Penyaringan Kategori Koleksi Buku'
    ],
    screenshots: [
      {
        title: 'Halaman Utama Web Rental Buku',
        image: '/projects/rental_buku_thumb.jpg',
        description: 'Tampilan halaman utama web Rental Buku.'
      }
    ],
    developmentProcess: [
      'Perancangan Struktur Data Buku & Alur Transaksi Penyewaan',
      'Penyusunan Struktur HTML5 dan Styling Responsif CSS',
      'Implementasi Logika dengan JavaScript',
      'Optimalisasi Pengalaman Pengguna pada Modal Transaksi'
    ]
  },
  {
    id: 4,
    slug: 'segmentasi-citra-mangga',
    title: 'Segmentasi Citra Mangga',
    subtitle: 'Image Processing Project',
    role: 'Developer',
    technologies: ['Python'],
    shortDesc: 'Implementasi segmentasi citra mangga menggunakan metode Global Thresholding untuk memisahkan objek berdasarkan nilai intensitas citra.',
    thumbnail: '/projects/mangga_thumb.jpg',
    badgeTone: 'bg-[var(--soft-green)] text-emerald-600',
    overview:
      'Segmentasi Citra Mangga adalah proyek pengolahan citra digital (Digital Image Processing) yang bertujuan untuk mendeteksi objek buah mangga secara otomatis dengan menerapkan metode Global Thresholding.',
    problemBackground:
      'Dalam pemantauan hasil klasifikasi buah otomatis, variasi intensitas cahaya membuat deteksi objek menjadi tantangan. Proyek ini menguji keefektifan segmentasi berbasis nilai intensitas ambang (thresholding) untuk memisahkan objek buah secara presisi.',
    roleContribution: [
      'Menulis script pemrosesan citra menggunakan bahasa pemrograman Python.',
      'Melakukan pra-pemrosesan citra digital: konversi ruang warna RGB ke citra Grayscale dan normalisasi intensitas.',
      'Melakukan analisis distribusi histogram nilai keabuan citra untuk menentukan nilai threshold (T) optimal.',
      'Mengimplementasikan pembentukan binary threshold mask dan visualisasi kontur batas objek buah mangga.',
    ],
    keyFeatures: [
      'Prapemrosesan Citra Digital (Konversi RGB ke Grayscale)',
      'Analisis Histogram Distribusi Intensitas Piksel',
      'Penerapan Metode Global Thresholding (Nilai Ambang T=128)',
    ],
    screenshots: [
      {
        title: 'Analisis Global Thresholding & Segmentasi Citra',
        image: '/projects/mangga_thumb.jpg',
        description: 'Tampilan yang menampilkan pemrosesan: citra asli, binary mask, dan hasil akhir deteksi kontur buah.'
      }
    ],
    developmentProcess: [
      'Studi Literatur Metode Thresholding dalam Pengolahan Citra Digital',
      'Pengumpulan & Penyiapan Dataset Citra Buah Mangga di Pohon',
      'Implementasi Algoritma Pengolahan Citra dengan Python',
    ]
  }
]

export const featuredProjects = projects
export const otherProjects = []
