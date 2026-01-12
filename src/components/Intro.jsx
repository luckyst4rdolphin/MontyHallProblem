import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Image1 from "./assets/start.svg";
import Image2 from "./assets/doors.svg";
import Image3 from "./assets/head.svg";
import Image4 from "./assets/talk.svg";
import Image5 from "./assets/night.svg";
import Image6 from "./assets/cont.svg";
import './Intro.css';

const ScrollyIntro = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(Image1);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };

    return (
    <div class='scrolly'>
        <div class='sticky'>
            <figure>
                <img class='inside' src={currentStepIndex}/>
            </figure>
        </div>
      <Scrollama offset={0} threshold={2} onStepEnter={onStepEnter}>
        <Step data={Image2}>
          <div class='textscroll'>
            You’re on your usual route home but something feels off…
          </div>
        </Step>
        <Step data={Image3}>
          <div class='textscroll'>
            At the end of it should be your house, but you see 3 doors instead.
          </div>
        </Step>
        <Step data={Image4}>
          <div class='textscroll'>
            A talking head appears.
          </div>
        </Step>
        <Step data={Image5}>
          <div class='textscroll'>
            “One of these 3 doors is the way to your house..."
          </div>
        </Step>
        <Step data={Image6}>
          <div class='textscroll'>
            "The other 2, well, let’s just say it’s the stuff of nightmares. You get to pick 1.”
          </div>
        </Step>
        <Step data={Image6}>
          <div class='textscroll'>
            "Once you've chosen, I'll reveal one of the bad doors and you may take your pick once more.”
          </div>
        </Step>
        <Step data={Image6}>
          <div class='lastscroll'>
           This is the premise of...
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyIntro;