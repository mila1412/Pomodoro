<template lang='pug'>
#list
  router-link.times(to='/')
    font-awesome-icon(:icon='["fas", "times"]' size='lg')
  b-container.ab.d-flex
    b-container.a
      b-row.flex-column.h-100.justify-content-between
        div
          b-col.todo
            font-awesome-icon(:icon='["fas", "list"]' size='lg')
            router-link(to='/list') TO-DO LIST
          b-col.ana
            font-awesome-icon(:icon='["fas", "chart-bar"]' size='lg')
            router-link(to='/analytics') ANALYTICS
          b-col.ring
            font-awesome-icon(:icon='["fas", "music"]' size='lg')
            router-link(to='/settings') RINGTONES
        //- 左下半圓
        div
          b-col
            div.circle
              div.bigCircle
              router-link.play(to='/')
                font-awesome-icon(:icon='["fas", "play"]' size='lg')
              span.time {{ timeText }}
              span.current {{ current }}
    b-container.b
      b-row.flex-column
        b-col.addInput(cols='12')
          b-input-group(invalid-feedback='Enter at least 4 characters.', :state='state')
            b-form-input(
              v-model='newitem',
              placeholder='ADD A NEW MISSION...'
              :state='state',
              trim,
              @keydown.enter='additem'
            )
            b-input-group-append
              b-button.addBtn(@click='additem')
                font-awesome-icon(:icon='["fas", "plus"]')
        b-col.input(cols='12')
        //- 待辦清單
        b-btn.todoBtn(v-b-toggle.collapse-1.visible) TO-DO
        b-collapse#collapse-1(visible)
          b-card
            b-table-simple
              thead
                tr
              tbody
                tr(v-for="(item, index) in list", :key="index")
                  td
                    b-form-input(
                      v-if="item.edit",
                      v-model="item.model",
                      trim,
                      :state="item.state",
                      @keydown.enter="changelist(index)",
                      @keydown.esc="cancellist(index)"
                    )
                    span(v-else)
                      font-awesome-icon(:icon="['far', 'circle']")
                      |  {{ item.name }}
                  //- icon 靠右對齊
                  td.d-flex.justify-content-end
                    span(v-if="!item.edit")
                      b-btn(@click="editlist(index)")
                        font-awesome-icon(:icon="['fas', 'pen']")
                      b-btn(@click="dellist(index)")
                        font-awesome-icon(:icon="['fas', 'trash']")
                    span(v-else)
                      b-btn(@click="changelist(index)")
                        font-awesome-icon(:icon="['fas', 'check']")
                      b-btn(@click="cancellist(index)")
                        font-awesome-icon(:icon="['fas', 'undo']")
        //- 已完成清單
        b-btn.todoBtn(v-b-toggle.collapse-2.visible) DONE
        b-collapse#collapse-2(visible)
          b-card
            b-table-simple
              thead
                tr
              tbody
                tr(v-for="(item, idx) in finished", :key="idx")
                  td
                    font-awesome-icon(:icon="['far', 'check-circle']")
                    span.finishedItem  {{ item }}
                  td.d-flex.justify-content-end
                    b-btn(@click="delfinish(idx)")
                      font-awesome-icon(:icon="['fas', 'trash']")
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newitem: ''
    }
  },
  computed: {
    // 表單新增
    state () {
      // 沒有return null會有驚嘆號
      if (this.newitem.length === 0) {
        return null
      } else if (this.newitem.length < 2) {
        return false
      } else {
        return true
      }
    },
    // 個別項目
    list () {
      return this.$store.getters.list.map((item) => {
        if (item.model.length < 2) {
          item.state = false
        } else {
          item.state = true
        }
        return item
      })
    },
    current () {
      return this.$store.state.current
    },
    finished () {
      return this.$store.state.finished
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    }
  },
  methods: {
    additem () {
      if (this.state) {
        this.$store.commit('addList', this.newitem)
        this.newitem = ''
      } else {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '必須要兩個字以上'
        })
      }
    },
    editlist (index) {
      this.$store.commit('editList', index)
    },
    changelist (index) {
      console.log(index)
      // 如果是state的狀態(2個字以上)
      if (this.list[index].state) {
        this.$store.commit('changeList', index)
      }
    },
    cancellist (index) {
      // 取消不用判斷
      this.$store.commit('cancelList', index)
    },
    dellist (index) {
      this.$store.commit('delList', index)
    },
    delfinish (index) {
      this.$store.commit('delFinish', index)
    }
  }
}
</script>
