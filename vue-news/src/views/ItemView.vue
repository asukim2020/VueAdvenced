<template>
   <div>
      <section>
         <user-profile :info="fetchedItem">
            <div slot="username" >
               <router-link :to="`/user/${fetchedItem.user}`">
                  {{ fetchedItem.user }}
               </router-link>
            </div>
            <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
         </user-profile>
         <section>
            <h2>{{ fetchedItem.title }}</h2>
         </section>
      </section>
      
      <section>
         <!-- 질문 댓글 -->
      </section>
      <!-- <p>{{ fetchedItem.title }}</p> -->
      <div v-html="fetchedItem.content" class="content"></div>
   </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  components: { 
     UserProfile 
   },
   computed: {
      ...mapGetters(['fetchedItem'])
   },
   created() {
      const itemId = this.$route.params.id
      this.$store.dispatch('FETCH_ITEM', itemId)
   }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>