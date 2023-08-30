function PropsHewan(props) {
    return (
        <a href="#">
            <div className="card-cat">
                <div class="card bg-light" style={{ width: '95%', }}>
                    <img src={props.image} class="card-img-top" />
                    <div class="card-body" style={{ alignItems: 'center' }}>
                        <div className="title" >
                            <p class="card-title" style={{ fontSize: '85%' }}>{props.title}</p>
                        </div>
                        <div className="price">
                            <div className="col d-flex justify-content-between">
                                <div>
                                    <div className="discount">
                                        <span class="card-disc" style={{ color: '#7E7474', textDecoration: 'line-through' }}>{props.discount}</span>
                                    </div>
                                    <div className="price">
                                        <span class="card-price" style={{ fontWeight: 'bold', color: 'red' }}>{props.price}</span>
                                    </div>
                                </div >
                                <div className="my-auto">
                                    <i class="bi bi-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="#" class="btn btn-outline mt-2 " style={{ backgroundColor: 'transparent', borderColor: '#EF6C00', color: '#EF6C00' }}>Tambah ke Keranjang</a>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default PropsHewan