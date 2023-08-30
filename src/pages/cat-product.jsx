import Navbar from '../component/navbar';
import Footer from '../component/footer';
import CardCat from '../component/card-cat';

function CatProduct() {
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
        <>
            <div className="row">
                <div className="container">
                    <div className="container">
                        <div className="row bg-light">
                            <div className="col-xs-12 pb-5">
                                <div className="judul m-3 pb-3">
                                    <span className='judul-hewan'>Cat</span>
                                    <div className='button-cat mt-2'>
                                        <button type="button" class="btn btn-outline-dark m-1" style={{ backgroundColor: 'transparent' }}>wet food</button>
                                        <button type="button" class="btn btn-outline-dark m-1" style={{ backgroundColor: 'transparent' }}>dry food</button>
                                        <button type="button" class="btn btn-outline-dark m-1" style={{ backgroundColor: 'transparent' }}>obat & vitamin</button>
                                        <button type="button" class="btn btn-outline-dark m-1" style={{ backgroundColor: 'transparent' }}>snack & treats</button>
                                        <button type="button" class="btn btn-outline-dark m-1" style={{ backgroundColor: 'transparent' }}>pasir</button>
                                        <button type="button" class="btn btn-outline-dark m-1" style={{ backgroundColor: 'transparent' }}>perlengkapan & aksesoris</button>
                                    </div>
                                </div>
                                <hr />
                                <div className='container'>
                                    <div className="content">
                                        <div className="product m-2">
                                            <CardCat />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatProduct