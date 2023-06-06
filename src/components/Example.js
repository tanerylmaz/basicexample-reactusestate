import {useState} from 'react';

function Example() {
    var [clickSayisi, setClickSayisi] = useState(0);
    return(
        
        <div className='container' style={{textAlign:'center',marginTop:'110px'}}>
            <span>Click Sayisi</span>
            <span>{clickSayisi}</span>
            <button type='button' 
            onClick={()=>{
                clickSayisi++;
                setClickSayisi(clickSayisi);
            }}>Tıkla</button>
        </div>
    );
}

export default Example;