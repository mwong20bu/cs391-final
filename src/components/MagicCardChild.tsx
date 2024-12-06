import styled from "styled-components";
import {Magic} from "../magic";

//child component used for displaying info / UI

//container for the character displays
const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: teal;
`;

//styling div for each individual character
const SingleCharDiv=styled.div`
    font: Arial, sans-serif;
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 25%;
    padding: 1%;
    margin: 1%;
    background-color: black;
    color: white;
    border: 'lightgreen 3px solid')};
    font: small-caps bold calc(2px + 1vw) Arial, fantasy;
    text-align: center;
`;

export default function MagicCardChild(props : { data:Magic[] } ){
    
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Magic) =>
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