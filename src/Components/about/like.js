import React, {useState} from 'react';

function Like(){
    const[contador, setcontador] = useState(0);

    function incrementar(){
        setcontador(contador + 1);
    }
    return(
        <div class="botao">
            <img class="like" src='https://freepngimg.com/thumb/facebook/65414-button-computer-facebook-like-icons-free-clipart-hq.png' alt= "Logo" onClick={incrementar}/>
    
            <p> {contador} likes</p>
            
        </div>
    );
}

export default Like;