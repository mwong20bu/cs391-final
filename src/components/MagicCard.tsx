import { useEffect, useState } from "react";
import { Magic } from "../magic";
import MagicCardChild from "./MagicCardChild";

export default function MagicCard() {
    const [cards, setCards] = useState<Magic[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try{
                const rawData = await fetch("https://api.magicthegathering.io/v1/cards");
                const data  = await rawData.json();
                setCards(data.cards);
            } catch (error) {
                console.log("Error fetching data" + error);
            }
        }
        fetchData();
    });

    return(
        <MagicCardChild data={cards}/>
    )
}
