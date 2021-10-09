import './style.css'
import Api from '../../services/Api'

export default({onReceive}) =>{
    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
           onReceive(result.user)
        }
        else{
            alert('Erro!!!!');
        }
    }

    return(
        <div className='container'>
            <div className='container-header'>
            </div>
            <div className="containe-main">
                <div className='container-center'>
                    <div>
                        <span>WhatsApp Web</span>
                        <p>
                            Para acessar, Utilizer sua conta do Facebook
                        </p>
                    </div>
                    <div className='wrp-facebook'>
                        <input type='button' value='Login com Facebook'
                        className="btn-login"
                        onClick={handleFacebookLogin}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}