import './Comun.css'

function Comun (){
    return(
        <div className='princ'>
            <h4>Suas Comunidades:</h4>
            <div className='caixa'>
                <div className='aba'>
                    <p>Fechar</p>
                    <ul>
                        <li>
                        <img className="icone" src="https://storage.googleapis.com/atados-v3/user-uploaded/images/e8d4e9bf-6096-49a9-81e4-a39bb0bfec77.png" width={60} height={60} />
                        </li>
                        <li>
                            <h3 className='nome'>Instituto PROA</h3>
                        </li>
                    </ul>
                    
                </div>

                <div className='conteudo'>
                    <ul>
                        <li>
                            <img className="foto" src="https://media-exp1.licdn.com/dms/image/C4E22AQF4SKyrsUOuhw/feedshare-shrink_800/0/1662333734903?e=1668643200&v=beta&t=Az4fRfHXI4GKyMuD-Nx5DL1zLq7CXQ1-kGFzUF_n7a4" alt="proa" width={300} height={250}/>
                        </li>
                        <li>
                            <p>O Instituto PROA nasceu em 2007 com o objetivo de criar oportunidades de desenvolvimento pessoal e profissional para jovens de baixa renda vindos de escola pública, ajudando-os a se tornarem protagonistas de suas próprias histórias e ingressarem no mercado de trabalho. De lá para cá o PROA já formou mais de 10.000 jovens e hoje atua nos Estados de São Paulo e Rio de Janeiro, com dois principais projetos: o curso PROPROFISSÃO e a Plataforma PROA. Esta é a primeira turma do Instituto Proa em Recife - PE.</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='caixa_menor'>
                <p>Abrir</p>
                <ul>
                    <li>
                    <img className="icone" src="https://cdn.ome.lt/Fo9C9mW0bNozh_dXerA88he3HlQ=/770x0/smart/uploads/conteudo/fotos/icone-gragas-gas.jpg" width={60} height={60} />
                    </li>
                    <li>
                        <h3 className='nome'>Comunidade do lolzinho</h3>
                    </li>
                </ul>
            </div>
            <div className='caixa_menor'>
                <p>Abrir</p>
                <ul>
                    <li>
                    <img className="icone" src="https://f.i.uol.com.br/fotografia/2019/06/06/15598529615cf977a161cfd_1559852961_3x2_md.jpg" width={60} height={60} />
                    </li>
                    <li>
                        <h3 className='nome'>MasterChef</h3>
                    </li>
                </ul>
            </div>
            <div className='caixa'>
                <div className='aba'>
                    <p>Fechar</p>
                    <ul>
                        <li>
                        <img className="icone" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" width={60} height={60} />
                        </li>
                        <li>
                            <h3 className='nome'>JavaScript</h3>
                        </li>
                    </ul>
                </div>

                <div className='conteudo'>
                    <ul>
                        <li>
                            <img className="foto" src="https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg" alt="proa" width={300} height={250}/>
                        </li>
                        <li>
                            <p>JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e funcional). Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='caixa_menor'>
                <p>Abrir</p>
                <ul>
                    <li>
                    <img className="icone" src="https://blog.ucoffee.com.br/ucoffee_blog/wp-content/uploads/2018/09/java.jpg" width={60} height={60} />
                    </li>
                    <li>
                        <h3 className='nome'>Java Coffe</h3>
                    </li>
                        
                </ul>
                
            </div>
        </div>
    )
}

export default Comun