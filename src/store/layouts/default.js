export default {
  namespaced: true,
  state: {
    sidebarIsActive: false,
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebarIsActive = !state.sidebarIsActive
    },
    CLOSE_SIDEBAR(state) {
      state.sidebarIsActive = false
    }
  },
  actions: {
    toggleSidebar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSidebar ({ commit }) {
      commit('CLOSE_SIDEBAR')
    }
  },
  getters: {
    sidebarIsActive: (state) => state.sidebarIsActive
  }
}