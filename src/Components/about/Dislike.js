import React, {useState} from 'react';

function Dislike(){
    const[contador, setcontador] = useState(0);

    function incrementar(){
        setcontador(contador + 1);
    }
    return(
        <div class="botao">
            <img class="dislike" src='https://cdn-icons-png.flaticon.com/512/3670/3670156.png' alt= "Logo" onClick={incrementar} />
            <p> {contador} Dislikes</p>
        </div>
    );
}

export default Dislike;