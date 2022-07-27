export const state = () => ({
  applications: [],
});

export const mutations = {
  ADD_ITEM(state, payload) {
    state.applications.unshift(payload);
  },
  REFRESH_ITEM(state) {
    state.applications = [];
  },
};

export const actions = {
  onCreate({ commit }, item) {
    let parseItem = JSON.parse(JSON.stringify(item));
    commit("ADD_ITEM", parseItem);
  },

  onRefresh({ commit }) {
    commit("REFRESH_ITEM");
  },
};
