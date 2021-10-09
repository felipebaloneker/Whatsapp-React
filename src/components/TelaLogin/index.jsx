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
        <div>
            <button
                onClick={handleFacebookLogin}
            >Login com Facebook</button>
        </div>
    )
}