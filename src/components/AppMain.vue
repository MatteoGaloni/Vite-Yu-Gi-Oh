<script>
export default {
    name: "AppMain",
}



</script>

<template>
    <main>
        <div id="cards_frame" class="container">
            <p>FOUND 50 CARDS</p>
            <div id="cards_wrapper">
                <div class="slide">
                    <img class="thumb" src="../assets/vue.svg" alt="#">
                    <p>Descrizione</p>
                    <h5>TITOLO CARD</h5>
                </div>
                <div class="slide">
                    <img class="thumb" src="../assets/vue.svg" alt="#">
                    <p>Descrizione</p>
                    <h5>TITOLO CARD</h5>
                </div>



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
}
</style>