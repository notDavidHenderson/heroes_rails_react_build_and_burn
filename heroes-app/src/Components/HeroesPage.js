import React from 'react'
import { useState, useEffect} from 'react'
import HeroCardsContainer from './HeroCardsContainer'
import HeroForm from './HeroForm'
export default function HeroesPage() {

    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/heros')
            .then(response => response.json())
            .then(heros => setHeroes(heros))
    }, [])

    return (
        <section className="heros-page">
            <h2>Heroes Page</h2>
            <HeroForm />
            <HeroCardsContainer heroes={heroes}/>
        </section>
    )
}
