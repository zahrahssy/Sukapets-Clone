import { Link } from "react-router-dom"


function CardHewan() {
    return (
        <div className='row g-3'>
            <div className="col-6">
                <CardPet
                    image='src/assets/images/cat.png'
                    title='Kucing / Cat'
                    to= '/kucing'
                />
            </div>
            <div className="col-6">
                <CardPet
                    image='src/assets/images/dog.png'
                    title='Anjing / Dog'
                    to= '/anjing'
                />
            </div>
        </div>
    )
}

function CardPet(props) {
    return (
      <Link to={props.to}>
        <div className="card">
          <div className="cardImage">
            <img src={props.image} className='propsImage' style={{ width: '50%' }} />
          </div>
          <div>
            <p className="textImage">{props.title}</p>
          </div>
        </div>
      </Link>
    )
  }

export default CardHewan