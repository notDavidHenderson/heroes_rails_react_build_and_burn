import {useState, useEffect} from 'react'
export default function HeroForm() {

    // name, weaponid, powers
    const [name, setName] = useState('')
    const [weaponId, setWeaponId] = useState(0)
    const [powers, setPowers] = useState([])
    const [allWeapons, setAllWeapons] = useState([])
    const [allPowers, setAllPowers] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/weapons')
            .then(response => response.json())
            .then(apiWeapons =>{
                 setAllWeapons(apiWeapons)
                 setWeaponId(apiWeapons[0].id)
                })
        fetch('http://localhost:3000/powers')
            .then(response => response.json())
            .then(apiPowers =>{
                setAllPowers(apiPowers)
            })
        }, [])
        
    const displayWeapons = () => {
        return allWeapons.map(weapon => {
            return <option key={weapon.id} value={weapon.id}>{weapon.name}</option>
        })
    }
    
    const displayPowers = () => {
        return allPowers.map(power => {
            return (
                <>
                    <label htmlFor={`${power.name}-checkbox`}>{power.name}</label>
                    <input 
                        type="checkbox"
                        id={`${power.name}-checkbox`}
                        name={power.name}
                        value={power.id}
                        onChange={event => {
                            const included = powers.includes(event.target.id)
                            if (!included) {
                                setPowers([...powers, event.target.value])
                            }
                        }}
                         
                    />
                </>
            )
        })
    }

    const handleSubmit = () => {
        fetch('http://localhost:3000/heros',{
            method: 'POST',
            headers: {
                'Content-Type' : 'Application/json',
                'Accept' : 'Application/json'
            },
            body: JSON.stringify({
                name,
                weapon_id: weaponId,
                powers
            })
        })
    }

    return (
        <form className="new-hero-form">
            <label htmlFor="name">Declare Your Name Hero!</label>
            <input
                type="text" 
                id="name"
                name="name" 
                value={name} 
                onChange={event => setName(event.target.value)}
            />
            <label>Choose Your Weapon</label>
            <select onChange={(event) => setWeaponId(event.target.value)}>
                { displayWeapons() }
            </select>
            {displayPowers()}
        </form>
    )
}
