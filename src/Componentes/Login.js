function Login() {
    return (
        <div className="page-login">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/2560px-Logo_ORKUT.svg.png" />
                <p className="text-1 text-white">Acesse o orkut.br com a sua conta</p>
            </div>
            <div>
                <form>
                    <input className="form-login" type="email"  placeholder="Digite o seu e-mail"/> <br/>
                    <input className="form-login" type="password"  placeholder="Digite a sua senha"/> <br/>
                    <input className="form-login login text-white" type="submit" value="LOGIN"/> <br/>
                </form>
            </div>
            <div>
                <p className="text-white text-underline">Não consegue acessar sua conta?</p>
            </div>
            <div className="text-bottom">
                <p className="text-2 text-white">Ainda não é membro?</p>
                <p className="text-2 text-pink text-underline">ENTRE JÁ</p>
            </div>
        </div>
    )
}

export default Login;