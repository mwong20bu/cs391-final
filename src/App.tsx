import MagicCard from "./components/MagicCard.tsx";
import styled from "styled-components";
import Header from './components/Header'; {/* Header component */}

//parent div for the app as a whole, containing all the data displayed from the API 
const ParentDiv=styled.div`
    width: 90vw;
    margin: auto;
    border: 5px black solid;
`;

export default function App(){
    return(
        <ParentDiv>
          <Header/>  
          <MagicCard/>
        </ParentDiv>
    )
}