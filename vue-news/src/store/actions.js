import { 
   fetchNewsList, 
   fetchAskList, 
   fetchJobsList, 
   fetchuserInfo,
   fetchCommentItem
} from '../api/index'

export default {
   FETCH_NEWS(context) {
      fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(error => console.log(error))
   },
   FETCH_ASK(context) {
      fetchAskList()
      .then(response => context.commit('SET_ASK', response.data))
      .catch(error => console.log(error))
   },
   FETCH_JOBS(context) {
      fetchJobsList()
      .then(({ data }) => context.commit('SET_JOBS', data))
      .catch(error => console.log(error))
   },     
   FETCH_USER({ commit }, userName) {
      console.log('FETCH_USER');
      fetchuserInfo(userName)
      .then(({ data }) => commit('SET_USER', data))
      .catch(error => console.log(error))
   },
   FETCH_ITEM({ commit }, id) {
      fetchCommentItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(error => console.log(error))
   }
}