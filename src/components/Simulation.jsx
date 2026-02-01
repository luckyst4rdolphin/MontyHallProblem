import "./Simulation.css"
import Door from "./assets/door.png";
import lose from "./assets/openchoice.png";
import win from "./assets/win.png"
import React, { useState } from 'react';

function Simulation () {

    const [currentImage1, setCurrentImage1] = useState(Door);
    const [currentImage2, setCurrentImage2] = useState(Door);
    const [currentImage3, setCurrentImage3] = useState(Door);
    const [clickedImage, setClickedImage] = useState(null);
    const [path, usePath] = useState(null)
    const [played, setPlay] = useState('no');
    const [status, setStatus] = useState('none');
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [games, setGames] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    var gameTotalCount = 0;
    var winning = 0;
    var losing = 0;
    const state1 = {"openDoor1":'win', "openDoor2":'lose', "openDoor3":'lose'};
    const state2 = {"openDoor2":'win', "openDoor1":'lose', "openDoor3":'lose'};
    const state3 = {"openDoor3":'win', "openDoor1":'lose', "openDoor2":'lose'};

    function winDoorGen(){
        var prizedoor = Math.floor(Math.random() * 3);
        if(prizedoor === 1){
            usePath('state1');
        }else if(prizedoor === 2){
            usePath('state2');
        }else if(prizedoor === 3){
            usePath('state3'); 
        }
    }

    function Play(){
        winDoorGen();
    }

    function Restart(){
        setCurrentImage1(Door);
        setCurrentImage2(Door);
        setCurrentImage3(Door);
        setPlay('no');
        setStatus('none');
        setClickedImage(null);
        usePath(null);
        setIsChecked(false);
    }

    const clickedFirst = () => {
        setClickedImage('door1');
        handleClick();
        if(played === 'yes' && isChecked === true){
            handleClickWin();
            console.log(wins)
            console.log(losses)
        }
    }

    const clickedSecond = () => {
        setClickedImage('door2');
        handleClick();
        if(played === 'yes' && isChecked === true){
            handleClickWin();
            console.log(wins)
            console.log(losses)
        }
    }

    const clickedThird = () => {
        setClickedImage('door3');
        handleClick();
        if(played === 'yes'  && isChecked === true){
            handleClickWin();
            console.log(wins)
            console.log(losses)
        }
    }

    const handleClick = () => {
        console.log(path);
        console.log(path == 'state1');
        console.log(path == 'state2');
        console.log(path == 'state3');
        if(path === 'state1'){
            console.log(clickedImage);
            if(clickedImage === 'door1'){
                setPlay('yes');
                console.log("clicked");
                if(state1["openDoor2"] === 'lose' && state1["openDoor3"]  === 'win'){
                    setCurrentImage2(lose);
                }else if(state1["openDoor2"] === 'win' && state1["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                }else if(state1["openDoor1"] === 'win'){
                    setCurrentImage2(lose);
                }
            }
            else if(clickedImage === 'door2'){
                setPlay('yes');
                if(state1["openDoor1"] === 'lose' && state1["openDoor3"]  === 'win'){
                    setCurrentImage1(lose);
                }else if(state1["openDoor1"] === 'win' && state1["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                }else if(state1["openDoor2"] === 'win'){
                    setCurrentImage3(lose);
                }
            }
            else if(clickedImage === 'door3'){
                setPlay('yes');
                if(state1["openDoor1"] === 'lose' && state1["openDoor2"]  === 'win'){
                    setCurrentImage1(lose);
                }else if(state1["openDoor1"] === 'win' && state1["openDoor2"] === 'lose'){
                    setCurrentImage2(lose);
                }else if(state1["openDoor3"] === 'win'){
                    setCurrentImage1(lose);
                }
            }
        }else if(path === 'state2'){
            if(clickedImage === 'door1'){
                setPlay('yes');
                if(state2["openDoor2"] === 'lose' && state2["openDoor3"]  === 'win'){
                    setCurrentImage2(lose);
                }else if(state2["openDoor2"] === 'win' && state2["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                }else if(state2["openDoor1"] === 'win'){
                    setCurrentImage2(lose);
                }
            }
            else if(clickedImage === 'door2'){
                setPlay('yes');
                if(state2["openDoor1"] === 'lose' && state2["openDoor3"]  === 'win'){
                    setCurrentImage1(lose);
                }else if(state2["openDoor1"] === 'win' && state2["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                }else if(state2["openDoor2"] === 'win'){
                    setCurrentImage3(lose);
                }
            }
            else if(clickedImage === 'door3'){
                setPlay('yes');
                if(state2["openDoor1"] === 'lose' && state2["openDoor2"]  === 'win'){
                    setCurrentImage1(lose);
                }else if(state2["openDoor1"] === 'win' && state2["openDoor2"] === 'lose'){
                    setCurrentImage2(lose);
                }else if(state2["openDoor3"] === 'win'){
                    setCurrentImage1(lose);
                }
            }
        }else if(path === 'state3'){
            if(clickedImage === 'door1'){
                setPlay('yes');
                if(state3["openDoor2"] === 'lose' && state3["openDoor3"]  === 'win'){
                    setCurrentImage3(lose);
                }else if(state3["openDoor2"] === 'win' && state3["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                }else if(state3["openDoor1"] === 'win'){
                    setCurrentImage2(lose);
                }
            }
            else if(clickedImage === 'door2'){
                setPlay('yes');
                if(state3["openDoor1"] === 'lose' && state3["openDoor3"]  === 'win'){
                    setCurrentImage1(lose);
                }else if(state3["openDoor1"] === 'win' && state3["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                }else if(state3["openDoor2"] === 'win'){
                    setCurrentImage3(lose);
                }
            }
            else if(clickedImage === 'door3'){
                setPlay('yes');
                if(state3["openDoor1"] === 'lose' && state3["openDoor2"]  === 'win'){
                    setCurrentImage1(lose);
                }else if(state3["openDoor1"] === 'win' && state3["openDoor2"] === 'lose'){
                    setCurrentImage2(lose);
                }else if(state3["openDoor3"] === 'win'){
                    setCurrentImage1(lose);
                }
            }
        }

    };

    const handleClickWin = () => {

        if(path === 'state1'){
            if(clickedImage === 'door1'){
                if(state1["openDoor2"] === 'lose' && state1["openDoor3"]  === 'win'){
                    setCurrentImage2(lose);
                    setCurrentImage1(lose);
                    setCurrentImage3(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state1["openDoor2"] === 'win' && state1["openDoor3"] === 'lose'){
                    setCurrentImage2(win);
                    setCurrentImage1(lose);
                    setCurrentImage3(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state1["openDoor1"] === 'win'){
                    setCurrentImage2(lose);
                    setCurrentImage1(win);
                    setCurrentImage3(lose);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
            else if(clickedImage === 'door2'){
                if(state1["openDoor1"] === 'lose' && state1["openDoor3"]  === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage2(lose);
                    setCurrentImage3(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state1["openDoor1"] === 'win' && state1["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                    setCurrentImage1(win);
                    setCurrentImage2(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state1["openDoor2"] === 'win'){
                    setCurrentImage3(lose);
                    setCurrentImage1(lose);
                    setCurrentImage2(win);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
            else if(clickedImage === 'door3'){
                if(state1["openDoor1"] === 'lose' && state1["openDoor2"]  === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage2(win);
                    setCurrentImage3(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state1["openDoor1"] === 'win' && state1["openDoor2"] === 'lose'){
                    setCurrentImage2(lose);
                    setCurrentImage3(lose);
                    setCurrentImage1(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state1["openDoor3"] === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage3(win);
                    setCurrentImage2(lose);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
        }else if(path === 'state2'){
            if(clickedImage === 'door1'){
                console.log("clicked");
                if(state2["openDoor2"] === 'lose' && state2["openDoor3"]  === 'win'){
                    setCurrentImage2(lose);
                    setCurrentImage1(lose);
                    setCurrentImage3(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state2["openDoor2"] === 'win' && state2["openDoor3"] === 'lose'){
                    setCurrentImage2(win);
                    setCurrentImage1(lose);
                    setCurrentImage3(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state2["openDoor1"] === 'win'){
                    setCurrentImage2(lose);
                    setCurrentImage1(win);
                    setCurrentImage3(lose);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
            else if(clickedImage === 'door2'){
                if(state2["openDoor1"] === 'lose' && state2["openDoor3"]  === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage2(lose);
                    setCurrentImage3(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state2["openDoor1"] === 'win' && state2["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                    setCurrentImage1(win);
                    setCurrentImage2(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state2["openDoor2"] === 'win'){
                    setCurrentImage3(lose);
                    setCurrentImage1(lose);
                    setCurrentImage2(win);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
            else if(clickedImage === 'door3'){
                if(state2["openDoor1"] === 'lose' && state2["openDoor2"]  === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage2(win);
                    setCurrentImage3(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state2["openDoor1"] === 'win' && state2["openDoor2"] === 'lose'){
                    setCurrentImage2(lose);
                    setCurrentImage3(lose);
                    setCurrentImage1(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state2["openDoor3"] === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage3(win);
                    setCurrentImage2(lose);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
        }else if(path === 'state3'){
            if(clickedImage === 'door1'){
                console.log("clicked");
                if(state3["openDoor2"] === 'lose' && state3["openDoor3"]  === 'win'){
                    setCurrentImage2(lose);
                    setCurrentImage1(lose);
                    setCurrentImage3(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state3["openDoor2"] === 'win' && state3["openDoor3"] === 'lose'){
                    setCurrentImage2(win);
                    setCurrentImage1(lose);
                    setCurrentImage3(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state3["openDoor1"] === 'win'){
                    setCurrentImage2(lose);
                    setCurrentImage1(win);
                    setCurrentImage3(lose);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
            else if(clickedImage === 'door2'){
                if(state3["openDoor1"] === 'lose' && state3["openDoor3"]  === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage2(lose);
                    setCurrentImage3(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state3["openDoor1"] === 'win' && state3["openDoor3"] === 'lose'){
                    setCurrentImage3(lose);
                    setCurrentImage1(win);
                    setCurrentImage2(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state3["openDoor2"] === 'win'){
                    setCurrentImage3(lose);
                    setCurrentImage1(lose);
                    setCurrentImage2(win);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
            else if(clickedImage === 'door3'){
                if(state3["openDoor1"] === 'lose' && state3["openDoor2"]  === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage2(win);
                    setCurrentImage3(lose);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state3["openDoor1"] === 'win' && state3["openDoor2"] === 'lose'){
                    setCurrentImage2(lose);
                    setCurrentImage3(lose);
                    setCurrentImage1(win);
                    losing += 1;
                    losing += losses;
                    setLosses(losing);
                }else if(state3["openDoor3"] === 'win'){
                    setCurrentImage1(lose);
                    setCurrentImage3(win);
                    setCurrentImage2(lose);
                    winning += 1;
                    winning += wins;
                    setWins(winning);
                    setStatus('win');
                    losing = 0;
                    losing += losses;
                    setLosses(losing);
                }
            }
        }
        
        };

        const handleSwitch = (event) => {
            setIsChecked(event.target.checked);
            setClickedImage(null);
        };

    return (
        <div class='overall'>
            <h2 class='title2'>Monty Hall Simulator</h2>
            <p class='inst'>Press 'Play.' Double click your door of choice. One of the incorrect doors will be revealed. <br />Tick 'Switch?', then double click your next choice. 
             Click 'Restart' for a next round. <br />Reload the page to start over.</p>
            <div class="gamearea">
        <div class='doors'>
            <img src={currentImage1} onClick={clickedFirst} alt="door-1" class='door' id="door1"/>
           <img src={currentImage2} onClick={clickedSecond} alt="door-2" class='door' id="door2"/>
           <img src={currentImage3} onClick={clickedThird} alt="door-3" class='door' id="door3"/>
        </div>
        <div class='stats'>
            <h3>Wins: {wins}</h3> <h3>Win %: {Math.trunc((wins/((wins+losses) !== 0 ? (wins+losses) : 1) * 100))} </h3> <br /> <button onClick={Play}> Play </button> <br /> 
            <label>
            <input
          type="checkbox"
          checked={isChecked}
          onChange={handleSwitch}
            />
            <span class="labl">Switch?</span>
        </label>
            < br /> <button onClick={Restart}> Restart </button>
        </div>
       </div>
        </div>
       
       
    )
}

export default Simulation;