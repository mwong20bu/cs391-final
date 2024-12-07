//implemented by Gwen Stewart

import { useEffect, useState } from "react";
import { Magic } from "../magic";
import MagicCardChild from "./MagicCardChild";

//function to fetch all magic card data from magic:the gathering API
export default function MagicCard() {
    //useState hook to store the magic card data
    const [cards, setCards] = useState<Magic[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try{
                const rawData = await fetch("https://api.magicthegathering.io/v1/cards");
                const data  = await rawData.json();
                setCards(data.cards);
            } catch (error) {
                //an error occurred while trying to fetch data
                console.log("Error fetching data" + error);
            }
        }
        fetchData();
    });

    return(
        <MagicCardChild data={cards}/>
    )
}
