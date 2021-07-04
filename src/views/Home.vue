<template lang="pug">
#home
  div.iconGroup.d-flex.flex-column
    router-link(to='/list')
      font-awesome-icon(:icon='["fas", "list"]' size='lg')
    router-link(to='/analytics')
      font-awesome-icon(:icon='["fas", "chart-bar"]' size='lg')
    router-link(to='/settings')
      font-awesome-icon(:icon='["fas", "music"]' size='lg')
  div.pink
    div.ping-bg(v-if='current.length === 1' :style='{background: bgblue}')
    div.ping-bg(v-else)
    div.pink-outside(v-if='current.length === 1' :style='{borderColor: blue}')
    div.pink-outside(v-else)
    div.pink-inside(v-if='status !== 1 && current.length === 1' :style='bcircleBreak')
    div.pink-inside(v-else-if='status === 1 && current.length === 1' :style='bcircleCount')
    div.pink-inside(v-else-if='status === 1 && current.length > 1' :style='rcircleCount')
    div.pink-inside(v-else)
    div.rightSquare
      div.rightCircle(ref='rightCircle' v-if='current.length === 1' :style='rightBlue' :class="{circleRightBlue: true}")
      div.rightCircle(ref='rightCircle' v-if='current.length > 1' :style='rightPink' :class="{circleRightPink: true}")
      div.rightCircle(ref='rightCircle' v-else)
    div.leftSquare
      div.leftCircle(ref='leftCircle' v-if='current.length === 1' :style='leftBlue' :class="{circleLeftBlue: true}")
      div.leftCircle(ref='leftCircle' v-if='current.length > 1' :style='leftPink' :class="{circleLeftPink: true}")
      div.leftCircle(ref='leftCircle' v-else)
    //- 狀態 break 搭配 icon:play，狀態count 搭配 icon:pause
    b-btn.playBtn(v-if='status !== 1 && current.length === 1' @click='start' :style='bbtnBreak')
      font-awesome-icon(:icon='["fas", "play"]' size='lg')
    b-btn.playBtn(v-else-if='status === 1 && current.length === 1' @click='pause' :style='bbtnCount')
      font-awesome-icon(:icon='["fas", "pause"]' size='lg')
      //- 問題
    b-btn.playBtn(v-else-if='status === 1 && current.length > 1' @click='pause' :style='rbtnCount')
      font-awesome-icon(:icon='["fas", "pause"]' size='lg')
    b-btn.playBtn(v-else @click='start')
      font-awesome-icon(:icon='["fas", "play"]' size='lg')
  b-container.rightContainer
    b-row.h-100.flex-column.justify-content-between
      b-col.addInput
        b-input-group(invalid-feedback='Enter at least 4 characters.', :state='state')
          b-form-input(
            :class="[current.length === 1 ? 'placeBlue' : 'placePink']"
            v-model='newitem',
            placeholder='ADD A NEW MISSION...',
            :state='state',
            trim,
            @keydown.enter='additem'
          )
          b-input-group-append
            b-button(@click='additem' :class="[current.length === 1 ? 'addBlue' : 'addPink']")
              font-awesome-icon(:icon='["fas", "plus"]')
      div.middle.d-flex.flex-column.justify-content-center
        h2.currentText
          b-btn.stepBtn(v-if='current.length === 1' @click='finish(true)' :style='skipBreak')
            font-awesome-icon(:icon="['fas', 'forward']" size='lg')
          b-btn.stepBtn(v-else @click='finish(true)')
            font-awesome-icon(:icon="['fas', 'forward']" size='lg')
          span  {{ current }}
        h2.timeText(v-if='current.length === 1' :style='{color: blue}') {{ timeText }}
        h2.timeText(v-else) {{ timeText }}
        //- 分成兩個部分對齊 v-if='status === 1'
      div.rest.d-flex.justify-content-between(v-for='(item, i) in restText', :key='i', v-if='list.length > 0')
        div
          font-awesome-icon(:icon="['far', 'circle']")
          span  {{ item.name }}
        div.d-flex
          font-awesome-icon.restBtn(:icon="['far', 'play-circle']" @click='changeorder(i)' v-if='current.length === 1' :style='{background :bgblue}')
          font-awesome-icon.restBtn(:icon="['far', 'play-circle']" @click='changeorder(i)' v-else)
    //- a.moreBtn(v-if='rest.length > 3 && status === 1' @click='more') MORE
    router-link.moreBtn(to='/list' v-if='rest.length > 3 && list.length > 0')
      | MORE
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newitem: '',
      timer: 0,
      bgblue: '#E5F3FF',
      blue: '#00A7FF',
      rbtnCount: {
        color: 'white',
        background: '#FF4384'
      },
      bbtnBreak: {
        color: '#00A7FF',
        background: 'white'
      },
      bbtnCount: {
        color: 'white',
        background: '#00A7FF'
      },
      bcircleBreak: {
        background: '#00A7FF',
        borderColor: '#00A7FF'
      },
      bcircleCount: {
        background: 'white',
        borderColor: '#00A7FF'
      },
      rcircleCount: {
        background: 'white'
      },
      skipBreak: {
        background: '#E5F3FF',
        color: '#00A7FF'
      },
      rightBlue: {
        borderTopColor: '#00A7FF',
        borderRightColor: '#00A7FF'
      },
      rightPink: {
        borderTopColor: '#FF4384',
        borderRightColor: '#FF4384'
      },
      leftBlue: {
        borderBottomColor: '#00A7FF',
        borderLeftColor: '#00A7FF'
      },
      leftPink: {
        borderBottomColor: '#FF4384',
        borderLeftColor: '#FF4384'
      }
    }
  },
  computed: {
    // transform 設在不同地方會被蓋掉
    // styleTimeleft () {
    //   return { transform: 'rotate(' + (180 - this.timeleft * 18) + 'deg)' }
    // },
    // styleTime () {
    //   return { transform: 'rotate(' + (180 - this.timeleft * 36) + 'deg)' }
    // },
    tomato () {
      return this.$store.state.tomato
    },
    state () {
      if (this.newitem.length === 0) {
        return null
      } else if (this.newitem.length < 2) {
        return false
      } else {
        return true
      }
    },
    status () {
      return this.$store.state.status
    },
    list () {
      return this.$store.state.list
    },
    rest () {
      return this.$store.state.rest
    },
    restText () {
      let text = this.rest
      if (text.length > 3) {
        text = text.slice(0, 3)
      }
      return text
    },
    current () {
      return this.$store.state.current
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    isBreak () {
      return this.$store.state.isBreak
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
    changeorder (i) {
      // 休息時間交換，rest會變空白
      if (this.current.length > 1) {
        this.$store.commit('changeOrder', i)
      }
    },
    pause () {
      // this.$refs.leftCircle.style.animationPlayState = 'paused'
      // this.$refs.rightCircle.style.animationPlayState = 'paused'
      clearInterval(this.timer)
      // 狀態暫停
      this.$store.commit('changeStatus', 2)
    },
    start () {
      // this.$refs.leftCircle.style.animationPlayState = 'running'
      // this.$refs.rightCircle.style.animationPlayState = 'running'
      // 暫停的話不用改 state.current
      if (this.status !== 2 && this.list.length > 0) {
        this.$store.commit('start')
      }
      // 一開始進度條歸零
      // if (this.status === 0) {
      //   this.$refs.leftCircle.style.animation = ''
      //   this.$refs.rightCircle.style.animation = ''
      // }
      // 如果有東西在倒數
      if (this.current.length > 0) {
        // 狀態倒數中
        this.$store.commit('changeStatus', 1)
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
            // 結束時=0，休息時=1，工作時>1
            // console.log(this.current.length)
          }
        }, 1000)
      }
    },
    finish (skip) {
      // this.$refs.leftCircle.style.animationIterationCount = '0'
      // this.$refs.rightCircle.style.animationIterationCount = '0'
      // this.$refs.leftCircle.style.animation = 'none'
      // this.$refs.rightCircle.style.animation = 'none'
      // this.$refs.leftCircle.style.animation = ''
      // this.$refs.rightCircle.style.animation = ''
      // 結束時進度條從頭開始，但重整網頁會被洗掉
      clearInterval(this.timer)
      // 狀態停止
      this.$store.commit('changeStatus', 0)
      this.$store.commit('addFinish')
      // finish(false) => if(!false) => if(true)
      // 如果不是skip就播音效
      if (!skip) {
        console.log(this.isBreak)
        // console.log(this.current.length)
        const audio = new Audio()
        if (this.list.length === 0) {
          audio.src = require('../assets/' + this.$store.state.sound2)
        } else if (this.isBreak) {
          audio.src = require('../assets/' + this.$store.state.sound2)
        } else {
          audio.src = require('../assets/' + this.$store.state.sound1)
        }
        audio.play()
      }

      if (this.list.length > 0) {
        this.start()
      } else {
        this.restText = ''
        this.$swal({
          icon: 'success',
          title: '結束'
        })
      }
    }
  },
  watch: {
    current: {
      handler: function () {
        this.$store.commit('tomato')
        console.log(Math.floor(this.tomato / 2))
      },
      deep: true
    }
  }
}
</script>
