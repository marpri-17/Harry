const formatSpells = (spell) => {
    return {
        id: spell._id,
        name: spell.spell,
        type: spell.type || "Indeterminado",
        description: spell.effect || "Desconocido",
    }
}

const getSpellsFromServer = () => {
    const generalEndpoint = "https://www.potterapi.com/v1"
    const spellsEndpoint = "/spells"
    const ApiAuth = "?key=$2a$10$9XwMOrQ/SFxrwkZcUiuzTez37kkckl3TeyJuVhrPQlBjA554U37G6"
    return fetch(`${generalEndpoint}${spellsEndpoint}${ApiAuth}`)
        .then(resp => resp.json())
        .then(spells => spells.map(spell => formatSpells(spell)))
        .catch(error => console.error(error))
}

export default getSpellsFromServer;