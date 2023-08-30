import '../index.css'

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
                        <img src="src/assets/images/facebook-icon.png" style={{ width: '5%' }} />
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <img src="src/assets/images/instagram-icon.png" style={{ width: '5%', marginLeft: '2%' }} />
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

export default Footer