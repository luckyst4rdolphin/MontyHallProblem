import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './MidScroll.css';
import Img1 from './assets/start.svg';
import Img2 from './assets/distribution.gif';
import Img3 from './assets/center.gif';
import Img4 from './assets/distswitch.gif';
import Img5 from './assets/distribution.png';

const Chartscroll = () => {
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
                    This data is from a simulation of 400 trials...
                </div>
                </Step>
                <Step data={Img3}>
                <div class='textscroll'>
                    repeated 100,000 times.
                </div>
                </Step>
                <Step data={Img4}>
                <div class='textscroll'>
                    After many trials, the distribution centers at around 0.665,
                </div>
                </Step>
                <Step data={Img5}>
                <div class='textscroll'>
                    which means that if we switch doors, there is actually a 66.65% chance that we win.
                </div>
                </Step>
                <Step data={Img5}>
                <div class='textscroll'>
                    See, it's not 50-50 afterall.
                </div>
                </Step>
                <Step data={Img5}>
                <div class='lastscroll2'>

                </div>
                </Step>
            </Scrollama>
        </div>
        
    );

};

export default Chartscroll;