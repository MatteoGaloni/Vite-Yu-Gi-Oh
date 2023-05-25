import { reactive } from 'vue'

export const store = reactive({
    prova: "PROVA",
    loading: false,
    urlAlien: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien&num=20&offset=0",
    // ***prima versione con scelta di due archetipi aggiungendo una chiamata***
    // urlBluEyes: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes&num=20&offset=0",

    urlarchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php?",
    urlGeneral: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    gameCards: [],
});
