<template>
<div>
   <section class="destination">
       <GoBack/>
       <h2>{{destination.name}}</h2>
       <div class="destination-details">
           <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
           <p>{{destination.description}}</p>
       </div>
   </section>
    <section class="experiences" >
        <h2>Top experiences in {{destination.name}}</h2>
        <div id="experience" class="cards">
            <div v-for="experience in destination.experiences" :key="experience.slug" class="card">
                <router-link :to="{
                    name: 'ExperienceDetails', 
                    params:{experienceSlug: experience.slug},
                    hash:'#experience' 
                    }"
                >
                    <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
                    <span class="card__text">
                        {{experience.name}}
                    </span>
                </router-link>
            </div>
        </div>
        <router-view :key="$route.path" />
    </section>
</div>
</template>
<script>
import store from '@/store.js'
import GoBack from '@/components/GoBack.vue'
export default {
    props: {
        slug:{
            type: String,
            required: true
        }
    },
    components: {
        GoBack
    },
    computed: {
        destination () {
            return store.destinations.find(
                destination => destination.slug === this.slug
            )
        }

    }
}
</script>
<style scoped>
.destination {
    padding: 50px 15px;
}
img {
    max-width: 600px;
    width: 100%;
    max-height: 400px;
    height: auto;
}
.destination-details, .cards{
display: flex;
justify-content: space-between;
}
.experience{
    padding: 40px 0;
}
p {
    margin: 0 40px;
    text-align: left;
    font-size: 20px;
}
.card{
    position: relative;
    padding: 0 20px;
}
.cards img{
    max-height: 200px;
}
.card__text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    font-weight: bold;
    color: #fff;
}
</style>