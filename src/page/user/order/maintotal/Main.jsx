import React from 'react';
import OrderHeader from '../header/OrderHeader';
import Main_Left from '../main/main_Left/Main_Left';
import Main_Right from '../main/main_Right/Main_Right';
import './StyleMain.css'
function Main() {
    return (
        <div className='main'>
            <OrderHeader/>
            <main style={{background:'#F5F5FA'}}>
                    <div className="hfMLFx elPTRG">
                            <Main_Left/>
                            <Main_Right/>
                    </div>
            </main>
        </div>
    );
}

export default Main;