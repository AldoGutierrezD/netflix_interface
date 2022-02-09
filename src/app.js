Vue.component('parties',{
    mounted() {
        this.chargeProfileParties();
    },
    props: {
        cover: String,
        title: String,
        genre: String,
        profileParties: Array,
    },
    template: `
        <div class="w-1/3 lg:w-1/4 h-full mx-2 flex flex-wrap justify-between shadow-xl cursor-pointer hover:shadow-2xl bg-gray-200 rounded-xl">
            <div class="w-full flex justify-between">
                <div class="w-1/2 h-1/2 p-2">
                    <img class="w-12 h-12 rounded-xl object-cover" :src="cover">
                </div>
                <div class="w-1/2 h-1/2 flex justify-end p-2">
                    <img class="w-6 h-6 rounded-full" v-for="image in profileParties" :src="image.picture.thumbnail">
                </div>
            </div>
            <div class="w-full h-1/2 p-2">
                <h2 class="text-sm font-bold">{{title}}</h2>
                <h3 class="text-sm text-gray-400">{{genre}}</h3>
            </div>
        </div>
    `,
    methods: {
        chargeProfileParties(){
            this.$http.get("https://randomuser.me/api/?results=3").then(res => {
                this.profileParties = res.body.results;
            });
        },
    },
});

Vue.component('watching',{
    props: {
        background: String,
        experience: String,
        title: String,
    },
    template: `
        <div class="w-1/3 lg:w-1/4 h-full mx-2 flex flex-wrap justify-between shadow-xl cursor-pointer hover:shadow-2xl bg-gray-200 rounded-xl">
            <div class="w-full h-3/5 rounded-t-xl bg-cover" :class="background">
                <div class="w-12 p-1 mt-2 ml-2 rounded-xl bg-gray-400 flex justify-center items-center bg-opacity-30">
                    <h2 class="text-xs text-white">{{experience}}</h2>
                </div>
            </div>
            <div class="w-full h-2/5 flex justify-start items-center">
                <h2 class="text-sm px-3">{{title}}</h2>
            </div>
        </div>
    `
});

new Vue({
    el: '#main'
});