<template>
   <div>
      <section>
         <!-- 질문 상세 정보 -->
         <div class="user-container">
            <div>
               <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
               <router-link :to="`/user/${fetchedItemd.user}`">
                  {{ fetchedItemd.user }}
               </router-link>
               <div class="time">
                  {{ fetchedItemd.time_ago }}
               </div>
            </div>
         </div>
         <h2>{{ fetchedItemd.title }}</h2>
      </section>
      
      <section>
         <!-- 질문 댓글 -->
      </section>
      <!-- <p>{{ fetchedItemd.title }}</p> -->
      <div v-html="fetchedItemd.content" class="content"></div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
   computed: {
      ...mapGetters(['fetchedItemd'])
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