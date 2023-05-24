import { reactive } from 'vue'

export const store = reactive({
    prova: "PROVA",
    loading: false,
    urlAlien: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien&num=20&offset=0",
    urlBluEyes: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes&num=20&offset=0",
    urlarchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php?",
    // urlGeneral: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    gameCards: [],
});
// https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien&num=20&offset=0
// // "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"

