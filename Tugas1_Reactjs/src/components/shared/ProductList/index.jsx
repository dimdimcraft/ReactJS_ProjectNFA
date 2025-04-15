export default function ProductList() {
  return (
    <>
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
    </>
  );
}
