function App() {
  return (
    <>
      {/* header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#main" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#team" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link px-2">
                Kontak
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
      </div>

      {/* hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu di Satu Tempat
            </h1>
            <p className="lead">
              Jelajahi ribuan koleksi buku menarik dari berbagai genre. Mulai
              dari fiksi, edukasi, hingga pengembangan diri — semua bisa kamu
              beli atau sewa dengan mudah dan cepat.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Jelajahi Buku
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Cara Kerja
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Tumpukan Buku"
              width="720"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* main konten */}
      <section id="main" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Koleksi Buku Terbaru</h1>
            <p className="lead text-body-secondary">
              Temukan beragam pilihan buku menarik yang siap untuk kamu baca,
              beli, atau sewa. Mulai dari karya fiksi, non-fiksi, hingga
              literatur edukatif — semua tersedia di satu tempat.
            </p>
          </div>
        </div>
      </section>

      <section id="album" className="album py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Koleksi Buku Pilihan</h2>
          <p className="text-center mb-5">
            Temukan buku favoritmu dan pilih untuk dibeli atau disewa sesuai
            kebutuhan.
          </p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Kartu Buku */}
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://i.pinimg.com/736x/aa/bf/eb/aabfebe2deaf9b96bb7c75e5acb2792a.jpg"
                  className="card-img-top"
                  alt="Cover Buku"
                  style={{ height: "225px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Laskar Pelangi</h5>
                  <p className="card-text">
                    Kisah inspiratif anak-anak Belitong yang penuh semangat dan
                    harapan dalam dunia pendidikan.
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-outline-success">
                        Sewa
                      </button>
                    </div>
                    <small className="text-muted">Tersedia</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Duplikat contoh lainnya */}
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://i.pinimg.com/736x/ca/ba/1a/caba1a570a8a849cc9c4d6e472c84021.jpg"
                  className="card-img-top"
                  alt="Cover Buku"
                  style={{ height: "225px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Atomic Habits</h5>
                  <p className="card-text">
                    Strategi membentuk kebiasaan baik dan menghapus kebiasaan
                    buruk secara bertahap dan konsisten.
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-outline-success">
                        Sewa
                      </button>
                    </div>
                    <small className="text-muted">Tersedia</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Tambahan buku lainnya */}
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://i.pinimg.com/736x/f2/79/bf/f279bfb96f51baaeeb5f6227fc7c3fa9.jpg"
                  className="card-img-top"
                  alt="Cover Buku"
                  style={{ height: "225px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Rich Dad Poor Dad</h5>
                  <p className="card-text">
                    Pelajaran penting tentang uang, investasi, dan mindset
                    keuangan dari dua sudut pandang ayah.
                  </p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button className="btn btn-sm btn-primary">Detail</button>
                      <button className="btn btn-sm btn-outline-success">
                        Sewa
                      </button>
                    </div>
                    <small className="text-muted">Tersedia</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section id="team" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Kenalan dengan Tim Kami</h2>
          <p className="text-center mb-5 text-muted">
            Di balik layar, kami adalah tim yang penuh semangat, beragam
            keahlian, dan satu tujuan: menciptakan solusi terbaik untukmu.
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Card 1 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img
                  src="https://i.pinimg.com/736x/3d/07/8c/3d078c4b317d55fde720379d25cdd0e9.jpg"
                  className="rounded-circle mx-auto mt-4"
                  alt="Raka Saputra"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Raka Saputra</h5>
                  <p className="card-text text-muted">Frontend Developer</p>
                  <p className="small">
                    Pecinta React dan desain pixel-perfect.
                  </p>
                  <div>
                    <a href="#" className="text-secondary mx-2">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="text-primary mx-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img
                  src="https://i.pinimg.com/736x/06/ad/5e/06ad5e43ed9b9f239ac3e887d4f4e64a.jpg"
                  className="rounded-circle mx-auto mt-4"
                  alt="Salsa Amelia"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Salsa Amelia</h5>
                  <p className="card-text text-muted">UI/UX Designer</p>
                  <p className="small">
                    Ahli dalam menciptakan antarmuka ramah pengguna.
                  </p>
                  <div>
                    <a href="#" className="text-secondary mx-2">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="text-primary mx-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card h-100 text-center shadow-sm border-0">
                <img
                  src="https://i.pinimg.com/736x/c3/64/6d/c3646d3d6d5a2cfa56feb70c736e19a3.jpg"
                  className="rounded-circle mx-auto mt-4"
                  alt="Dimas Arya"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">Dimas Arya</h5>
                  <p className="card-text text-muted">Backend Developer</p>
                  <p className="small">
                    Spesialis API dan arsitektur data yang scalable.
                  </p>
                  <div>
                    <a href="#" className="text-secondary mx-2">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="text-primary mx-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* kontak */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Hubungi Kami</h2>
          <p className="text-center mb-5">
            Punya pertanyaan? Kirimkan pesanmu melalui form di bawah!
          </p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nama@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tulis pesanmu di sini..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fa-solid fa-paper-plane me-2"></i> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Explore</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Resources</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Documentation
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Tutorials
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Press
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Stay in the Loop</h5>
                <p>
                  Get exclusive updates, tips, and insights delivered straight
                  to your inbox. No spam, we promise!
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2025 BookStore. Web by Dimas Aji Nugroho.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
