import React from 'react'

const Results = props=>{
    return(
        <div className="col-6">
            <h1>Results</h1>
            <h3>Alias: {props.oneChar.alias}</h3>
            <h3>Real Name: {props.oneChar.realName}</h3>
            <h3>Years Active: {props.oneChar.yearsActive}</h3>
            <h3>Leaning: {props.oneChar.leaning}</h3>
            <h3>Is Alive: {props.oneChar.isAlive ? "Yes":"No"}</h3>
            <h3>Abilities: {props.oneChar.abilities}</h3>
        </div>
    )
}

export default Results