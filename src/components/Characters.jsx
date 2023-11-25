
// import React from 'react'

export default function Characters(props) {
    // console.log(props)
    const { characters, setCharacters } = props

    const resetCharacters = () => {
        setCharacters(null);
    }

    // console.log(characters)

    return (
        <div className="characters">
            <h2 className="color-text">Personajes</h2>
            <spam className="back-home color-text" onClick={resetCharacters}>Volver a la home</spam>
            <div className="container-characters">
                { characters.map((character,index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>    
                        <div>
                            <h3 className="color-text">{character.name}</h3>
                            <h6 className="color-text">
                                { (character.status) === "Alive" ? (
                                    <>
                                        <spam className="Alive"/>
                                        Alive
                                    </>
                                ) : (
                                    <>
                                    <spam className="dead"/>
                                        Dead
                                    </>
                                )
                                }
                            </h6>
                            <p>
                                <spam className="text-grey">Episodios:</spam>
                                <spam className="color-text">{character.episode.length}</spam>
                            </p>
                            <p>
                                <spam className="text-grey">Especie:</spam>
                                <spam className="color-text">{character.species}</spam>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <spam className="back-homer color-text" onClick={resetCharacters}>Volver a la home</spam>
        </div>
    )
}
