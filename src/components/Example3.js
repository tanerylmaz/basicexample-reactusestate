import { useState } from "react";
import APage from './APage';
import BPage from './BPage';

function Example3() {
    const [pageState, setPageState] = useState(<APage />)
    return (
        <div className="container tnr">
            <div className="row">
                <div className="col-3">
                    <ul>
                        <li>
                            <button onClick={() => {
                                setPageState(<APage />)
                            }} type="button">
                                A Sayfasını Aç
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setPageState(<BPage />)
                            }} type="button">
                                B Sayfasını Aç
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-9">
                    {pageState}
                </div>
            </div>
        </div>
    );
}
export default Example3;
