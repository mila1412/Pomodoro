import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const time = parseInt(process.env.VUE_APP_TIME)
const timeBreak = parseInt(process.env.VUE_APP_TIME_BREAK)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sound1: 'Cartoon.mp3',
    sound2: 'Cartoon.mp3',
    // 待辦清單
    list: [],
    // 已完成清單
    finished: [],
    // 剩餘清單
    rest: [],
    current: '',
    timeleft: time,
    isBreak: false,
    // 0 = 停止
    // 1 = 倒數中
    // 2 = 暫停
    status: 0,
    tomato: 0,
    tomatoArray: []
  },
  mutations: {
    selectSound1 (state, data) {
      state.sound1 = data
    },
    selectSound2 (state, data) {
      state.sound2 = data
    },
    tomato (state) {
      // function resetAtMidnight () {
      //   var now = new Date()
      //   var night = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 35)
      //   var msToMidnight = night.getTime() - now.getTime()
      //   setTimeout(() => {
      //     state.tomato = 0
      //     resetAtMidnight()
      //   }, msToMidnight)
      // }
      state.tomato++
      window.setInterval(function () {
        var now = new Date()
        if (now.getHours() === 0 && now.getMinutes() === 0) {
          state.tomatoArray.push(state.tomato)
          state.tomato = 0
        }
      }, 60000)
    },
    addList (state, data) {
      state.list.push({
        name: data,
        edit: false,
        model: data
      })
    },
    editList (state, data) {
      state.list[data].edit = true
    },
    changeList (state, data) {
      state.list[data].name = state.list[data].model
      state.list[data].edit = false
    },
    cancelList (state, data) {
      state.list[data].model = state.list[data].name
      state.list[data].edit = false
    },
    delList (state, data) {
      state.list.splice(data, 1)
    },
    start (state) {
      if (state.isBreak) {
        state.current = ' '
      } else {
        // 從 List 抓第一個待辦事項放在 current，時間到再放到 finished
        state.current = state.list.shift().name
        state.rest = state.list.slice(0, state.list.length)
        // for (let i = 0; i < state.list.length; i++) {
        //   state.rest += state.list[i].name
        // }
      }
    },
    changeStatus (state, data) {
      state.status = data
    },
    countdown (state) {
      state.timeleft--
    },
    addFinish (state) {
      // 不然會連 '休息一下' 都放進 finished
      if (state.current.length > 1) {
        state.finished.push(state.current)
      }
      state.current = ''
      // 如果待辦清單有東西才要進休息時間
      if (state.list.length > 0) {
        state.isBreak = !state.isBreak
      }
      // 如果是 state.isBreak，timeleft 為 timeBreak 不然就 time
      state.timeleft = state.isBreak ? timeBreak : time
    },
    delFinish (state, data) {
      state.finished.splice(data, 1)
    },
    changeOrder (state, data) {
      const a = state.current
      const b = state.rest[data].name
      state.current = b
      state.rest[data].name = a
    }
  },
  getters: {
    list (state) {
      return state.list
    }
  },
  // 支援非同步
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: 'pomodoro'
  })]
})
