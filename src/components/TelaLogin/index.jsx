import '.style'
import Api from '../../services/Api'


export default() =>{
    const handleFacebookLogin = () =>{
        let result = await Api.fbPopup();
        if(result){

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