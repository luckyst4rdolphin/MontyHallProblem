import './MidScroll.css';
import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Img1 from './assets/start.svg'
import Img2 from './assets/remind.gif'
import Img3 from './assets/stick.gif'
import Img4 from './assets/stay.gif'
import Img5 from './assets/twothirds.gif'

const MidScroll = () => {
    const [currentImage, setCurrentImage] = useState(Img1);

    const onStepEnter =({ data }) => {
        setCurrentImage(data);
    };
    
    return (
        <div class='midscrolly'>
            <div class='sticky2'>
            <figure>
                <img class='inside2' src={currentImage}/>
            </figure>
            </div>
            <Scrollama offset={0} threshold={2} onStepEnter={onStepEnter}>
                <Step data={Img2}>
                <div class='textscroll'>
                    Remind yourself that...
                </div>
                </Step>
                <Step data={Img3}>
                <div class='textscroll'>
                    at the start you have three doors. 
                    This gives you a ⅓ chance of picking the correct door.
                </div>
                </Step>
                <Step data={Img4}>
                <div class='textscroll'>
                    This means if you stick to your first choice your odds will remain ⅓,
                </div>
                </Step>
                <Step data={Img5}>
                <div class='textscroll'>
                    even if one incorrect door was revealed.
                </div>
                </Step>
                <Step data={Img5}>
                <div class='textscroll'>
                    The other door will have the rest of the chances, that is ⅔ .
                </div>
                </Step>
                <Step data={Img1}>
                <div class='lastscroll2'>

                </div>
                </Step>
            </Scrollama>
        </div>
        
    );

};

export default MidScroll;