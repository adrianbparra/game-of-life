import React,{ useState, useContext } from "react";
import { GridContext } from "../util/context.js";

function GridSamples() {
    const { state, generateSample } = useContext(GridContext);

    const [samples,setSamples] = useState({'stillLifes':'block', 'oscillators':'blinker','spaceships':'glider'})


    function onSampleChange(e) {
        setSamples({
            ...samples,
            [e.target.name]: e.target.value
        })
        console.log(samples)
    }

    function onSampleGenerate(e) {
        generateSample(samples[e.target.value])
    }
    

    return (
        <div className="samples-container">
            <h2>Sample Generations</h2>
            <div className='sample-options'>
                <div className='sample'>
                    <h3>Still Lifes</h3>
                    <select name="stillLifes" id='stillLifes' defaultValue='block' onChange={onSampleChange}>
                        <option value="block">Block</option>
                        <option value="beehive">Bee-hive</option>
                        <option value="loaf">Loaf</option>
                        <option value="boat">Boat</option>
                        <option value="tub">Tub</option>
                    </select>

                    <img src={require(`../util/images/${samples['stillLifes']}.jpg`)} alt={`still life ${samples['stillLifes']}`}/>

                    <button name='still Lifes button' value="stillLifes" disabled={state.play} onClick={onSampleGenerate}>Generate Still Life</button>
                </div>
                <div className='sample'>
                    <h3>Oscillators</h3>
                    <select name="oscillators" id='oscillators' defaultValue='blinker' onChange={onSampleChange}>
                        <option value="blinker">Blinker</option>
                        <option value="toad">Toad</option>
                        <option value="beacon">Beacon</option>
                        <option value="pulsar">Pulsar</option>
                        <option value="penta_decathlon">Penta-decathlon</option>
                    </select>

                    <img src={require(`../util/images/${samples['oscillators']}.gif`)} alt={`oscillator ${samples['oscillators']}`}/>

                    <button name='oscillators button' value="oscillators" disabled={state.play} onClick={onSampleGenerate}>Generate Oscillator</button>
                </div>
                <div className='sample'>
                    <h3>Spaceships</h3>
                    <select name="spaceships" id='spaceships' defaultValue='glider' onChange={onSampleChange}>
                        <option value='glider'>Glider</option>
                        <option value='lwss'>Light-weight Spaceship</option>
                        <option value='mwss'>Middle-weight Spaceship</option>
                        <option value='hwss'>Heavy-weight Spaceship</option>
                    </select>

                    <img src={require(`../util/images/${samples['spaceships']}.gif`)} alt={`spaceship ${samples['spaceships']}`}/>

                    <button name='spaceships button' value="spaceships" disabled={state.play} onClick={onSampleGenerate}>Generate Spaceship</button>
                </div>
            </div>
        </div>
    )
}


export default GridSamples