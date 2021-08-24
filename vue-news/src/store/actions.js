import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index'

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
}