function CardMarket() {
    return (
        <div>
            <div className="row mt-3">
                <div className="col">
                    <MarketLogo
                        image='src/assets/images/shopee-icon.png'
                        title='Shopee' />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <MarketLogo
                        image='src/assets/images/tokopedia-icon.png'
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

export default CardMarket