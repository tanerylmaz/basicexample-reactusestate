import { useState } from "react";



function Example2() {
    const [btnText, setbtnText] = useState("Aç");
    const [leftMenuClass, setleftMenuClass] = useState("col-3");
    
    function ClickButton(){
        if (btnText=="Aç") {
            setbtnText("Kapat");
            setleftMenuClass("col-1")
        }
        else{
            setbtnText("Aç");
            setleftMenuClass("col-3")
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div id="leftMenu" className={leftMenuClass}>
                    <ul>
                        <li>Anasayfa</li>
                        <li>Blog</li>
                        <li>İletişim</li>
                    </ul>
                </div>
                <div className="col-3">
                <button
                onClick={ClickButton}
                id="btn" type="button">{btnText}</button>
                </div>
            </div>
        </div>
    );
}

export default Example2;