import { 
   fetchNewsList, 
   fetchAskList, 
   fetchJobsList, 
   fetchuserInfo,
   fetchCommentItem,
   fetchList
} from '../api/index'

export default {
   FETCH_NEWS(context) {
      return fetchNewsList()
      .then(response => {
         context.commit('SET_NEWS', response.data)
         return response
      })
      .catch(error => console.log(error))
   },
   FETCH_ASK(context) {
      return fetchAskList()
      .then(response => context.commit('SET_ASK', response.data))
      .catch(error => console.log(error))
   },
   FETCH_JOBS(context) {
      return fetchJobsList()
      .then(({ data }) => context.commit('SET_JOBS', data))
      .catch(error => console.log(error))
   },     
   FETCH_USER({ commit }, userName) {
      console.log('FETCH_USER');
      return fetchuserInfo(userName)
      .then(({ data }) => commit('SET_USER', data))
      .catch(error => console.log(error))
   },
   FETCH_ITEM({ commit }, id) {
      return fetchCommentItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(error => console.log(error))
   },
   FETCH_LIST({ commit }, pageName) {
      console.log('FETCH_LIST');
      return fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(error => console.log(error))
   }
}