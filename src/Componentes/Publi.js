import './Style-Publi.css';

function Publi() {
    return (
        <div className="container-publi">
            <div className="container-1">
                <p className="text-publi">Faça uma uma publicação</p>
                <ul className="display">
                    <li><img src="https://cdn-icons-png.flaticon.com/512/1829/1829415.png"/></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/4396/4396936.png"/></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/5682/5682021.png"/></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/45/45538.png"/></li>
                    <li><img src="https://cdn-icons-png.flaticon.com/512/60/60525.png"/></li>
                </ul>
            </div>
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
        </div>
        
        
    )
}

export default Publi;
