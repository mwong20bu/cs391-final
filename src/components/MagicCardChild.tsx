//this file contains the component used for mapping data from api call in MagicCard to 
//individual cards 
//written by Madeline Wong

import styled from "styled-components";
import {Magic} from "../magic";

//container for the card display
const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: beige;
`;

//styling div for each individual card
const SingleCharDiv=styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 25%;
    padding: 1%;
    margin: 1%;
    background-color: black;
    color: white;
    border: white 2px solid;
    font: small-caps bold calc(2px + 1vw) Arial, fantasy;
    text-align: center;
`;

//function for mapping data from MagicCard.tsx into individual cards and displaying them
export default function MagicCardChild(props : { data:Magic[] } ){
    
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Magic) =>
                    //using the fields, as specified in src/magic.ts, to show information for each card
                    <SingleCharDiv key={char.id}>
                        <h1>{char.name}</h1>
                        <img src={char.imageUrl} alt={`image of ${char.name}`} />
                        <p>Rarity: {char.rarity}</p>
                        <p>Converted mana cost: {char.cmc}</p>
                        <p>Power: {char.power}</p>
                        <p>Toughness: {char.toughness}</p>
                        <p>Card Number: {char.number}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}