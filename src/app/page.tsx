'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ScrollReveal } from './scroll-reveal';
import { MobileNav } from '@/components/MobileNav';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { LoadingButton } from '@/components/LoadingButton';
import { OrderModal } from '@/components/OrderModal';
import { FAQAccordion } from '@/components/FAQAccordion';

// Nomor WhatsApp
const WA_NUMBER = '6283180553200'; // 083180553200

function buildWhatsAppURL(message: string) {
  return `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(message)}`;
}

const WA_DEFAULT = buildWhatsAppURL(
  'Halo, saya tertarik untuk membuat Undangan Digital. Boleh saya konsultasi lebih lanjut?'
);

// FAQ Data
const faqData = [
  {
    question: 'Berapa lama proses pembuatan?',
    answer: 'Normalnya 1–2 hari kerja setelah seluruh data diterima dengan lengkap. Untuk pesanan mendesak, kami juga melayani express service dengan biaya tambahan.'
  },
  {
    question: 'Apakah bisa request lagu sendiri?',
    answer: 'Bisa. Paket Standard dan Premium mendukung request lagu pengiring sesuai selera Anda. Kirimkan link YouTube atau Spotify, kami akan embedding ke undangan.'
  },
  {
    question: 'Berapa batas revisi yang tersedia?',
    answer: 'Revisi minor (teks, tanggal, typo) tersedia sepuasnya sebelum undangan disebarkan. Untuk perubahan desain mayor setelah approval, akan dikenakan biaya tambahan.'
  },
  {
    question: 'Apakah undangan bisa dibuka di semua HP?',
    answer: 'Ya. Undangan berbasis web yang responsif, dapat diakses di semua perangkat (iOS, Android, Desktop) dan browser apapun. Tidak perlu install aplikasi.'
  },
  {
    question: 'Bagaimana cara pembayaran?',
    answer: 'Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, Dana), dan QRIS. DP 50% untuk mulai pengerjaan, pelunasan sebelum link disebarkan.'
  },
  {
    question: 'Apakah ada garansi jika ada masalah teknis?',
    answer: 'Ya, kami memberikan garansi support teknis hingga hari H acara. Jika ada bug atau masalah loading, tim kami siap bantu perbaikan dengan cepat.'
  }
];

export default function Home() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);


  const handleOrderClick = (pkgName: string) => {
    setSelectedPackage(pkgName);
    setOrderModalOpen(true);
  };

  return (
    <>
      <ScrollReveal />
      <FloatingWhatsApp phoneNumber={WA_NUMBER} />

      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav className="navbar anim-nav">
        <div className="navbar-brand">
          Mind Software Technology
          <span>Jasa Undangan Digital</span>
        </div>
        <div className="navbar-links">
          <a href="#layanan">Layanan</a>
          <a href="#fitur">Fitur</a>

          <a href="#pricelist">Paket & Harga</a>
          <a href="#cara-pesan">Cara Pesan</a>
          <a href="#kontak">Kontak</a>
        </div>
        <MobileNav />
      </nav>

      {/* ── PAGE WRAPPER ───────────────────────────── */}
      <div className="page-wrap">

        {/* ── HERO ───────────────────────────────────── */}
        <section className="hero anim-hero">
          <div className="hero-image" style={{ position: 'relative' }}>
            <Image
              src="/pexels-jonathanborba-28981062.jpg"
              alt="Undangan Digital Pernikahan Elegan - Mind Software Technology"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="hero-image-overlay" />
          </div>

          <span className="label">Jasa Undangan Digital Premium</span>
          <h1>Mind Software <em>Technology</em></h1>
          <p className="hero-subtitle">Eksklusif · Elegan · Modern</p>

          <p>
            Kami melayani pembuatan undangan digital untuk <strong>semua jenis acara</strong> —
            Pernikahan, Ulang Tahun, Aqiqah, Khitanan, Wisuda, hingga Acara Perusahaan.
            Desain premium, harga terjangkau, siap dalam 1–2 hari kerja.
          </p>

          <LoadingButton
            href={buildWhatsAppURL('Halo, saya ingin melihat pilihan paket undangan digital. Bisa bantu?')}
            variant="primary"
          >
            Konsultasi Gratis Sekarang
          </LoadingButton>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-number">150+</div>
              <span className="trust-label">Klien Puas</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <div className="trust-number">1–2</div>
              <span className="trust-label">Hari Kerja</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <div className="trust-number">24/7</div>
              <span className="trust-label">Fast Response</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── LAYANAN & KATEGORI ACARA ────────────────── */}
        <section id="layanan" className="section">
          <div className="section-header reveal">
            <span className="label">Semua Momen Spesial Anda</span>
            <h2>Kategori Layanan</h2>
          </div>

          <div className="category-grid">
            <a
              href={buildWhatsAppURL('Halo, saya tertarik untuk membuat Undangan Digital Pernikahan. Bisa bantu konsultasi?')}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card reveal reveal-delay-1"
            >
              <div className="category-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h4>Pernikahan</h4>
              <p>Undangan nikah elegan & romantis</p>
            </a>

            <a
              href={buildWhatsAppURL('Halo, saya tertarik untuk membuat Undangan Digital Ulang Tahun. Bisa bantu konsultasi?')}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card reveal reveal-delay-2"
            >
              <div className="category-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h4>Ulang Tahun</h4>
              <p>Rayakan hari istimewa dengan gaya</p>
            </a>

            <a
              href={buildWhatsAppURL('Halo, saya tertarik untuk membuat Undangan Digital Aqiqah. Bisa bantu konsultasi?')}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card reveal reveal-delay-3"
            >
              <div className="category-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Aqiqah</h4>
              <p>Sambut buah hati dengan penuh syukur</p>
            </a>

            <a
              href={buildWhatsAppURL('Halo, saya tertarik untuk membuat Undangan Digital Khitanan. Bisa bantu konsultasi?')}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card reveal reveal-delay-1"
            >
              <div className="category-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h4>Khitanan</h4>
              <p>Momen sunat putra tersayang</p>
            </a>

            <a
              href={buildWhatsAppURL('Halo, saya tertarik untuk membuat Undangan Digital Wisuda/Graduasi. Bisa bantu konsultasi?')}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card reveal reveal-delay-2"
            >
              <div className="category-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h4>Wisuda</h4>
              <p>Rayakan pencapaian akademis terbaik</p>
            </a>

            <a
              href={buildWhatsAppURL('Halo, saya tertarik untuk membuat Undangan Digital untuk Acara Perusahaan. Bisa bantu konsultasi?')}
              target="_blank"
              rel="noopener noreferrer"
              className="category-card reveal reveal-delay-3"
            >
              <div className="category-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h4>Acara Bisnis</h4>
              <p>Undangan profesional & korporat</p>
            </a>
          </div>
        </section>

        <hr className="divider" />

        {/* ── FITUR UNGGULAN ─────────────────────────── */}
        <section id="fitur" className="section">
          <div className="section-header reveal">
            <span className="label">Fasilitas Dalam Undangan</span>
            <h2>Fitur Unggulan</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-cell reveal reveal-delay-1">
              <div className="feature-cell-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h4>RSVP via WhatsApp</h4>
              <p>Konfirmasi kehadiran otomatis langsung via WhatsApp</p>
            </div>

            <div className="feature-cell reveal reveal-delay-2">
              <div className="feature-cell-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h4>Navigasi Maps</h4>
              <p>Integrasi Google Maps ke lokasi acara</p>
            </div>

            <div className="feature-cell reveal reveal-delay-3">
              <div className="feature-cell-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h4>Background Musik</h4>
              <p>Alunan musik pilihan memperindah pengalaman tamu</p>
            </div>

            <div className="feature-cell reveal reveal-delay-1">
              <div className="feature-cell-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h4>Kolom Ucapan &amp; Doa</h4>
              <p>Tamu dapat mengirim pesan &amp; doa secara online</p>
            </div>

            <div className="feature-cell reveal reveal-delay-2">
              <div className="feature-cell-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4>Countdown Timer</h4>
              <p>Hitung mundur menuju hari-H yang istimewa</p>
            </div>

            <div className="feature-cell reveal reveal-delay-3">
              <div className="feature-cell-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h4>Galeri Foto</h4>
              <p>Tampilkan kenangan indah hingga 8 foto pilihan</p>
            </div>
          </div>
        </section>

        <hr className="divider" />



        {/* ── PILIHAN PAKET ──────────────────────────── */}
        <section id="pricelist" className="section">
          <div className="section-header reveal">
            <span className="label">Investasi Kebahagiaan Anda</span>
            <h2>Pilihan Paket</h2>
            <p className="section-desc">Pilih paket yang paling sesuai dengan kebutuhan acara Anda. Tanpa biaya tersembunyi.</p>
          </div>

          <div className="pricing-grid">
            {/* Basic */}
            <div className="pricing-card reveal reveal-delay-1">
              <div className="pkg-name">Basic</div>
              <div className="price">Rp 75k</div>
              <div className="price-strikethrough">Rp 150.000</div>
              <ul className="pkg-features">
                <li>Cover Custom Nama</li>
                <li>Info Lengkap Mempelai</li>
                <li>Waktu &amp; Lokasi Acara</li>
                <li>Navigasi Google Maps</li>
                <li>Countdown Timer</li>
                <li>Masa Aktif 3 Bulan</li>
              </ul>
              <button
                onClick={() => handleOrderClick('Basic')}
                className="btn btn-outline btn-full"
              >
                Pesan Basic
              </button>
            </div>

            {/* Standard – Popular */}
            <div className="pricing-card popular reveal reveal-delay-2">
              <div className="badge-popular">Paling Populer</div>
              <div className="pkg-name">Standard</div>
              <div className="price">Rp 99k</div>
              <div className="price-strikethrough">Rp 200.000</div>
              <ul className="pkg-features">
                <li>Semua Fitur Basic</li>
                <li>Background Music</li>
                <li>Galeri 8 Foto</li>
                <li>Kisah Cinta (Love Story)</li>
                <li>RSVP Otomatis via WhatsApp</li>
              </ul>
              <button
                onClick={() => handleOrderClick('Standard')}
                className="btn btn-primary btn-full"
              >
                Pesan Standard
              </button>
            </div>

            {/* Premium */}
            <div className="pricing-card reveal reveal-delay-3">
              <div className="pkg-name">Premium</div>
              <div className="price">Rp 149k</div>
              <div className="price-strikethrough">Rp 300.000</div>
              <ul className="pkg-features">
                <li>Semua Fitur Standard</li>
                <li>Amplop Digital (QRIS)</li>
                <li>Embed Video Pre-wedding</li>
                <li>Buku Tamu &amp; Ucapan</li>
                <li>Masa Aktif Selamanya</li>
              </ul>
              <button
                onClick={() => handleOrderClick('Premium')}
                className="btn btn-outline btn-full"
              >
                Pesan Premium
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="comparison-section reveal reveal-delay-2">
            <h3>Perbandingan Fitur Lengkap</h3>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Komponen Fitur</th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Masa Aktif Halaman</td>
                    <td>3 Bulan</td>
                    <td>3 Bulan</td>
                    <td>3 Bulan</td>
                  </tr>
                  <tr>
                    <td>Cover Custom Name & Timer</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Info Mempelai & Navigasi Maps</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Background Music (Custom)</td>
                    <td>-</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Galeri Foto Pre-Wedding</td>
                    <td>-</td>
                    <td>Maksimal 8</td>
                    <td>Maksimal 8</td>
                  </tr>
                  <tr>
                    <td>Love Story Timeline</td>
                    <td>-</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Sistem Reservasi RSVP</td>
                    <td>-</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Amplop Digital (Rekening/QRIS)</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Penyematan Galeri Video</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                  <tr>
                    <td>Buku Tamu & Kolom Ucapan</td>
                    <td>-</td>
                    <td>-</td>
                    <td>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M20 6L9 17l-5-5"/></svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="divider" />



        {/* ── CARA PEMESANAN ─────────────────────────── */}
        <section id="cara-pesan" className="section">
          <div className="section-header reveal">
            <span className="label">Mudah &amp; Cepat</span>
            <h2>Cara Pemesanan</h2>
          </div>

          <div className="steps">
            <div className="step reveal reveal-delay-1">
              <div className="step-num">01</div>
              <div className="step-body">
                <h4>Pilih Desain &amp; Hubungi Kami</h4>
                <p>Pilih paket dan desain yang sesuai, lalu hubungi admin via WhatsApp. Ceritakan tema &amp; konsep yang Anda inginkan.</p>
              </div>
            </div>
            <div className="step reveal reveal-delay-2">
              <div className="step-num">02</div>
              <div className="step-body">
                <h4>Isi Formulir Data</h4>
                <p>Kami kirimkan formulir online. Lengkapi data, detail acara, dan foto yang diperlukan.</p>
              </div>
            </div>
            <div className="step reveal reveal-delay-3">
              <div className="step-num">03</div>
              <div className="step-body">
                <h4>Proses Desain (1–2 Hari)</h4>
                <p>Tim kami mulai mengerjakan. Draft pertama undangan akan dikirimkan untuk Anda koreksi.</p>
              </div>
            </div>
            <div className="step reveal reveal-delay-4">
              <div className="step-num">04</div>
              <div className="step-body">
                <h4>Undangan Siap Disebarkan</h4>
                <p>Setelah disetujui, link undangan final langsung aktif dan siap dibagikan ke seluruh tamu.</p>
              </div>
            </div>
          </div>
        </section>



        {/* ── FAQ ────────────────────────────────────── */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="section-header reveal">
            <span className="label">Pertanyaan Umum</span>
            <h2>FAQ</h2>
          </div>

          <FAQAccordion items={faqData} />
        </section>

        <hr className="divider" />

        {/* ── CTA ────────────────────────────────────── */}
        <section id="kontak" className="cta-section reveal">
          <span className="label" style={{ marginBottom: '1rem' }}>Mulai Sekarang</span>
          <h2>Wujudkan Undangan<br />Impian Anda</h2>
          <p>
            Konsultasikan ide dan konsep undangan Anda bersama tim kami.
            Gratis konsultasi, tanpa biaya tambahan.
          </p>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Konsultasi via WhatsApp
          </a>
        </section>

        {/* ── FOOTER ─────────────────────────────────── */}
        <footer className="footer">
          <div className="footer-brand">Mind Software Technology</div>
          <p className="footer-tagline">Jasa Undangan Digital untuk Semua Momen Spesial</p>

          <div className="footer-socials">
            {/* Instagram */}
            <a href="https://instagram.com/mindsoftwaretechnology_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" title="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href={WA_DEFAULT} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Mind Software Technology. All Rights Reserved.
          </p>
        </footer>

        <OrderModal 
          isOpen={orderModalOpen} 
          onClose={() => setOrderModalOpen(false)} 
          selectedPackage={selectedPackage} 
        />
      </div>
    </>
  );
}
