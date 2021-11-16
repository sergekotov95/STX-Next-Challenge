export const heroesFetched = (title) => {
    return {
        type: 'FILMS_FETCHED',
        payload: title.searchTitle
    }
}