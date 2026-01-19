import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './MidScroll.css';

const Chartscroll = () => {
    const [currentImage, setCurrentImage] = useState(null);

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