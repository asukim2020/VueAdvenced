<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div> 
            <p class='news-title'>
               <a v-if="item.domain" v-bind:href="item.url">{{ item.title }}</a>
               <router-link v-else v-bind:to="`item/${item.id}`">
                  {{ item.title }}
               </router-link>
            </p>

            <small class="link-text">
               by
               <router-link 
                  v-if="item.user"
                  v-bind:to="'/user/' + item.user" class="link-text">{{ item.user }}
               </router-link>
               <a :href="item.url" v-else>
                  {{ item.domain }}
               </a>
            </small>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {

  computed: {
     listItems() {
        return this.$store.state.list
     }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282
}
</style>