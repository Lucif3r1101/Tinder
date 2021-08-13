import React,{useState, useEffect} from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css";
import database from '../Firebase';
//import axios from "../axios";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {


        const unsubscribe = database.collection('people').onSnapshot((snapShot) => 
            setPeople(snapShot.docs.map(doc => doc.data()))
        );

        return () => {
            unsubscribe();
        }
    }, [people]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe"
                     key={person.name}
                     preventSwipe={["up","down"]}
                     onSwipe={(dir) => swiped(dir,person.name)}
                     onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div 
                         style={{backgroundImage: `url(${person.imgUrl})` }}
                         className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
