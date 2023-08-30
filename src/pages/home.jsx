import Navbar from '../component/navbar';
import CardHewan from '../component/card-hewan';
import CardBrand from '../component/card-brand';
import CardMarket from '../component/card-market';
import Footer from '../component/footer';
import '../index.css'

function Home() {
  return (
    <>
      <div className='container-fluid d-flex row'>
        <div className='col-3'>
        </div>
        <div className='col-5'>
          <div>
            <Navbar />
            <Search />
            <Main />
            <Footer />
          </div>
        </div>
        <div className='col-3'>
        </div>
      </div>
    </>
  )
}

function Search() {
  return (
    <div className='search bg-primary'>
      <div class="container-fluid text-white">
        <div className="searchBox pt-2">
          <div>
            <i className="bi bi-search m-3" style={{ fontSize: 20 }} label="Person"></i>
            <input type="text" className='inputBox' placeholder='Temukan Produk untuk Peliharaanmu' />
          </div>
        </div>
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="row">
      <div className="container">
        <div >
          <div className="banner">
            <img src="src/assets/images/banner.png" style={{ width: '100%' }} />
          </div>
          <div className="promoBanner text-white p-3">
            <h6>Sukapets telah melayani lebih dari puluhan ribu Pet Lovers di seluruh Indonesia</h6>
          </div>
        </div>
        <div className="container">
          <div className="row bg-light">
            <div className="col-xs-12">
              <div className="container">
                <div className='content mt-4'>
                  <div className="sectionHeader">
                    <h5 style={{ fontWeight: 'bold' }}>Daftar GRATIS Jadi Member Sukapets</h5>
                  </div>
                  <div className="sectionContent">
                    <div>
                      <p className='text'>Daftar sekarang untuk langsung menikmati promo <b>Gratis Ongkir daerah Jabodetabek</b>. Promo Gratis Ongkir hanya untuk pembelian member Sukapets di sukapets.com. Yuk daftar sekarang, sebelum promo berakhir!</p>
                      <div className='d-grid gap-2'>
                        <button type="button" class="btn text-white">Daftar Sekarang</button>
                      </div>
                    </div>
                    <hr style={{ marginTop: 40 }} />
                    <div className='sectionHeader'>
                      <h5 style={{ fontWeight: 'bold' }}>Shop By Pets</h5>
                    </div>
                    <div className='sectionContent mt-3'>
                      <div className="container">
                        <div className='row'>
                          <div className="col-12">
                            <CardHewan />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ marginTop: 40 }} />
                    <div className='brandHeader'>
                      <h5 style={{ fontWeight: 'bold' }}>Shop By Brands</h5>
                    </div>
                    <div className="brandContent mt-4">
                      <div className="row">
                        <div className="col-12">
                          <CardBrand />
                        </div>
                      </div>
                      <div className="d-grid gap-2 col-6 mx-auto mt-4">
                        <button type='button' className='btn btn-outline-primary' style={{ backgroundColor: 'transparent', height: '130%' }}>Lihat Katalog Lengkap</button>
                      </div>
                    </div>
                    <hr style={{ marginTop: 40 }} />
                    <div className='marketHeader'>
                      <h5 style={{ fontWeight: 'bold' }}>Shop By Marketplace</h5>
                    </div>
                    <div className="marketContent">
                      <div className="row">
                        <div className="col-12">
                          <CardMarket />
                        </div>
                      </div>
                    </div>
                    <hr style={{ marginTop: 40 }} />
                    <div className='questionHeader'>
                      <h5 style={{ fontWeight: 'bold' }}>Anda punya pertanyaan?</h5>
                    </div>
                    <div className="questionContent">
                      <div>
                        <p>Tim customer service kami siap untuk membantu anda! Anda bisa klik tombol dibawah ini untuk berbicara dengan tim CS kami via WhatsApp.</p>
                        <div className="d-grid gap-2 col-6 mx-auto m-4">
                          <button type='button' className='btn btn-outline-success' style={{ backgroundColor: 'transparent', height: '130%' }}>Hubungi CS via WhatsApp</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;