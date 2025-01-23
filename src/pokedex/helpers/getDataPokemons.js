export const getDataPokemons = async (urls, offset, limit) => {

    const limitUrls = urls?.slice(offset, offset+limit);

    const data = await Promise.all(limitUrls?.map(async (url) => {

        const response = await fetch(url);
        const results = await response.json();

        const img = results.sprites.other.showdown["front_default"];

        const typesIcons = await Promise.all(results.types.map((async (type) => {
            const response = await fetch(type.type.url);
            const results = await response.json()
            return {["name"]:results.name ,["img"]:results.sprites["generation-viii"]["sword-shield"]["name_icon"]}
        })))
        
        return {...results, sprites: img, types: [...typesIcons]}
    }))

    return data
}
