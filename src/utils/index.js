export const getFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) return JSON.parse(favorites)
    return []
}

export const addFavorite = phone => {
    const favorites = getFavorites()
    const isExist = favorites.find(p => p.id === phone.id)
    if(isExist) return console.log('acha');
    
    favorites.push(phone)
    localStorage.setItem('favorites', JSON.stringify(favorites))

}

export const removeFavorite = id => {
    const favorites = getFavorites()
    const remainingFavorite = favorites.filter(phone => phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorite))

}