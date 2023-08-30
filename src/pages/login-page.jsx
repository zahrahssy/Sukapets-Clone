import NavRegist from '../component/nav-regist';
import '../index.css'

function Login() {
    return (
        <>
            <div className='container-fluid d-flex row'>
                <div className='col-3'>
                </div>
                <div className='col-5'>
                    <div>
                        <NavRegist />
                        <Bar />
                        <Main />
                    </div>
                </div>
                <div className='col-3'>
                </div>
            </div>
        </>
    )
}

function Bar() {
    return (
        <div className='search bg-primary'>
            <div class="container-fluid text-white d-flex justify-content-center p-1">
                <span className='text-bar'>Jadi member Sukapets untuk mulai berbelanja.</span>
            </div>
        </div>
    )
}

function Main() {
    return (
        <div className='content'>
            <div className="container">
                <div className="row bg-light">
                    <div className='pb-5'>
                        <div className="headerContainer m-4">
                            <div className="registHeader d-flex justify-content-center">
                                <p className='text-1'>Login</p>
                            </div>
                        </div>
                        <hr />
                        <div className="mainForm">
                            <div className="card" style={{ backgroundColor: '#ECF0F1' }}>
                                <div className="container">
                                    <form action="">
                                        <div className='isian mt-3'>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1" required/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-3">
                                    <div className='d-grid gap-2 col-11 mx-auto'>
                                        <button type="button" class="btn text-white">Daftar Sekarang</button>
                                    </div>
                                    <div className='mt-3'>
                                        <p className='login-text'>Kamu belum punya akun? <a href="/register" className='login-button'>Daftar di sini</a></p>
                                    </div>
                                    <div className="mt-3">
                                        <p className='forgot-pass'><a href="/forgot" style={{color: '#EF6C00'}}>Lupa Password</a></p>
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

export default Login;