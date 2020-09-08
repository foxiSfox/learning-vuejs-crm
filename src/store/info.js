import firebase from 'firebase/app';

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  actions: {
    async updateInfo({ dispatch, commit, getters }, toUpdate) {
      try {
        const uid = await dispatch('getUid');
        const updateData = { ...getters.info, ...toUpdate };
        await firebase.database().ref(`/users/${uid}/info`).update(updateData);
        commit('setInfo', updateData);
        // eslint-disable-next-line no-empty
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('getUid');
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
        commit('setInfo', info);
        // eslint-disable-next-line no-empty
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
  getters: {
    info: (state) => state.info,
  },
};
