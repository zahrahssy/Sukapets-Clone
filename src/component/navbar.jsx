import '../index.css'

function Navbar() {
    return (        
        <nav className="navbar bg-white">
            <div className="container-fluid">
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/">
                        <img src="src/assets/images/sukapets-logo.png" style={{ width: '48%' }} />
                    </a>
                </div>
                <div>
                    <a className="buttonNav" href='/register'>
                        <i className="bi bi-person" style={{ fontSize: 25 }} label="Person"></i>
                    </a>
                    <a className="buttonNav" href='/register'>
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

export default  Navbar;