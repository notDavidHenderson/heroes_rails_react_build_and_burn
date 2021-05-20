import React from 'react'
import HeroCard from './HeroCard'

export default function HeroCardsContainer({ heroes }) {

    const heroCards = () => heroes.map((hero) => {
        return <HeroCard key={hero.id} hero={hero} />
    })

    return (
        <section className="hero-cards-container">
            {heroCards()}
        </section>
    )
}
