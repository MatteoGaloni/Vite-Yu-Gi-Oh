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
    <main>
        <div id="cards_frame" class="container">
            <div id="cards_header">
                <h3>FOUND {{ store.gameCards.length }} CARDS</h3>
            </div>
            <div id="cards_wrapper">
                <template v-for="item in store.gameCards">
                    <div v-if="item.archetype == 'Alien'" class="slide">
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
    background-color: orange;

    #cards_frame {
        min-height: 600px;
        background-color: white;

    }

    #cards_header {
        background-color: #222;
        color: white;
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