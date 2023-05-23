<script>
import { store } from '../data/store';

export default {
    name: "AppMain",

    data() {
        return {
            store: store,

        }
    }
}


</script>

<template>
    <div class="input-group my-3 container" style="width: 20rem">
        <select class=" custom-select" id="inputGroupSelect02">
            <option value="1">Alien</option>
            <option value="2">Pippo</option>
            <option value="3">Topolino</option>
        </select>
    </div>

    <main>
        <div id="cards_frame" class="container">
            <div class="d-flex justify-content-center">
                <button v-if="store.gameCards.length < 20" class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
            <div id="cards_header" class="p-3">
                <h5 class="mb-0">Found {{ store.gameCards.length }} cards</h5>
            </div>
            <div id="cards_wrapper">
                <template v-for="item in store.gameCards">
                    <div class="slide">
                        <img :src="item.card_images[0].image_url" alt="">
                        <h5>{{ item.name }}</h5>
                        <p>{{ item.archetype }}</p>
                    </div>
                </template>
            </div>
        </div>

    </main>
</template> 

<style scoped lang="scss">
main {
    #cards_frame {
        min-height: 600px;
        background-color: white;

    }

    #cards_header {
        background-color: #222;
        color: white;
        margin-top: 2rem;

    }

    #cards_wrapper {
        min-height: 300px;
        background-color: pink;
        display: flex;
        flex-wrap: wrap;
    }
}

.slide {
    width: calc(100% /5);
    padding: 1rem;
    background-color: orange;

    img {
        width: 100%;
    }
}
</style>