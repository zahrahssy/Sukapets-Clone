import './index.css'

function App() {
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

function Navbar() {
  return (
    <nav className="navbar bg-white">
      <div className="container-fluid">
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="src/assets/sukapets-logo.png" style={{ width: '48%' }} />
          </a>
        </div>
        <div>
          <a className="buttonNav" href='#'>
            <i className="bi bi-person" style={{ fontSize: 25 }} label="Person"></i>
          </a>
          <a className="buttonNav" href='#'>
            <i className="bi bi-cart m-3" style={{ fontSize: 25 }} label="Cart"></i>
          </a>
        </div>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </nav>
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
            <img src="src/assets/banner.png" style={{ width: '100%' }} />
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

function Footer() {
  return (
    <footer className='footer' style={{ backgroundColor: '#333333'}}>
      <div className="container">
        <div className="col-xs-12 text-white">
          <div className="container">
            <div className="footerHeader pt-4">Customer Support</div>
            <div className="footerContent mt-4">
              <p className='footerText'>Email - <b>info@sukapets.com</b></p>
              <div className='socialMediaContainer'>
                <div className='footerText'>Social Media - &nbsp;
                  <span>
                    <a href="#">
                      <img src="src/assets/facebook-icon.png" style={{ width: '5%' }} />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img src="src/assets/instagram-icon.png" style={{ width: '5%', marginLeft: '2%' }} />
                    </a>
                  </span>
                </div>
              </div>
              <p className="footerText mt-4">
                Jam Operasional Sukapets:
                <br />
                Senin - Sabtu (09.00-16.00)
                <br />
                Minggu & Hari Besar Nasional - Libur
              </p>
            </div>
            <div className="footerHeader mt-2">Sukapets di Marketplace</div>
            <div className="footerContent mt-2">
              <h6><b><a href="#" className='footerText'>Shopee</a></b></h6>
              <h6><b><a href="#" className='footerText'>Tokopedia</a></b></h6>
            </div>
            <div className="footerHeader mt-4">Informasi</div>
            <div className="footerContent">
              <ul className='footerList mt-2'>
                <li><a href="#" className='footerText'>Tentang Sukapets</a></li>
                <li><a href="#" className='footerText'>Informasi Pengiriman</a></li>
                <li><a href="#" className='footerText'>Kebijakan Privasi</a></li>
                <li><a href="#" className='footerText'>Syarat dan Ketentuan</a></li>
              </ul>
            </div>
            <div className="footerHeader mt-4 ">Sukapets Blog</div>
            <div className="footerContent mb-4">
              <ul className='footerList mt-2'>
                <li><a href="#" className='footerText'>Mengenai  Kucing</a></li>
                <li><a href="#" className='footerText'>Mengenai Anjing</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright pb-4'>
          2021 © PT. Langgeng Mitra Karunia. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

function CardHewan() {
  return (
    <div className='row g-3'>
      <div className="col-6">
        <CardPet
          image='src/assets/cat.png'
          title='Kucing / Cat'
        />
      </div>
      <div className="col-6">
        <CardPet
          image='src/assets/dog.png'
          title='Anjing / Dog'
        />
      </div>
    </div>
  )
}

function CardBrand() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/royal-canin.png'
          />
        </div>
        <div className="col-6 ">
          <CardLogo
            image='src/assets/pro-plan.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/kitchen-flavor.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/nature-bridge.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/whiskas.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/equilibrio.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/happy-pet.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/fancy-feast.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/meo.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/virbac.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/alpo.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/advocate.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/catsan.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/cesar.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/dentalife.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/drontal.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/friskies.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/iams.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/kitcat.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/markotops.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/pedigree.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/revolution.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/sheba.png'
          />
        </div>
        <div className="col-6">
          <CardLogo
            image='src/assets/snappy-tom.png'
          />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-6">
          <CardLogo
            image='src/assets/temptations.png'
          />
        </div>
      </div>
    </div>
  )
}

function CardMarket() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <MarketLogo
            image='src/assets/shopee-icon.png'
            title='Shopee' />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <MarketLogo
            image='src/assets/tokopedia-icon.png'
            title='Tokopedia' />
        </div>
      </div>
    </div>
  )
}

function MarketLogo(props) {
  return (
    <a href="#" style={{ textDecoration: 'none' }}>
      <div className="card" style={{ backgroundColor: 'white', height: '120%', borderRadius: '4%' }}>
        <div className="cardImage">
          <div className="row g-0 d-flex justify-content-center">
            <div className=" ">
              <img src={props.image} className='propsImage mx-3' style={{ width: '10%', }} />
              <span className="textimage" style={{ fontSize: '160%' }}>{props.title}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

function CardLogo(props) {
  return (
    <a href="#">
      <div className="card" style={{ backgroundColor: 'white', height: '100%', borderRadius: '0%' }}>
        <div className="cardImage">
          <img src={props.image} className='propsImage' style={{ width: '90%' }} />
        </div>
        <div>
          <p className="textImage">{props.title}</p>
        </div>
      </div>
    </a>
  )
}

function CardPet(props) {
  return (
    <a href="#">
      <div className="card">
        <div className="cardImage">
          <img src={props.image} className='propsImage' style={{ width: '50%' }} />
        </div>
        <div>
          <p className="textImage">{props.title}</p>
        </div>
      </div>
    </a>
  )
}

export default App;