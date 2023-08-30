function CardBrand() {
    return (
        <div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/royal-canin.png'
                    />
                </div>
                <div className="col-6 ">
                    <CardLogo
                        image='src/assets/images/pro-plan.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/kitchen-flavor.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/nature-bridge.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/whiskas.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/equilibrio.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/happy-pet.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/fancy-feast.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/meo.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/virbac.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/alpo.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/advocate.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/catsan.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/cesar.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/dentalife.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/drontal.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/friskies.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/iams.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/kitcat.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/markotops.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/pedigree.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/revolution.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/sheba.png'
                    />
                </div>
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/snappy-tom.png'
                    />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-6">
                    <CardLogo
                        image='src/assets/images/temptations.png'
                    />
                </div>
            </div>
        </div>
    )
}

function CardLogo(props) {
    return (
      <a href="#">
        <div className="card" style={{ backgroundColor: 'white', height: '100%', borderRadius: '0%' }}>
          <div className="cardImage">
            <img src={props.image} className='propsImage' style={{ width: '90%' }} />
          </div>
        </div>
      </a>
    )
  }

export default CardBrand