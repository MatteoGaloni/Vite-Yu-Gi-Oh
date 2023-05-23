import { reactive } from 'vue'

export const store = reactive({
    prova : "PROVA",
    urlApi: "https://rickandmortyapi.com/api/character",
    urlYu: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    gameCards: [],
});