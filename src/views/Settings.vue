<template lang="pug">
#settings
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
      b-row
        b-col.work(cols='12')
          | WORK
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options1' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options2' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options3' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options4' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options5' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options6' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options7' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options8' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options9' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options10' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options11' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options12' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options13' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options14' @change='select1')
        b-col(cols='4')
          b-form-radio-group(v-model='value1' :options='options15' @change='select1')
        b-col.work(cols='12')
          | BREAK
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options1' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options2' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options3' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options4' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options5' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options6' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options7' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options8' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options9' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options10' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options11' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options12' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options13' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options14' @change='select2')
        b-col(cols='4')
          b-form-radio-group(v-model='value2' :options='options15' @change='select2')
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      value1: this.$store.state.sound1,
      value2: this.$store.state.sound2,
      options1: [
        { text: 'BLUESY', value: 'Bluesy.mp3' }
      ],
      options2: [
        { text: 'DEFAULT', value: 'Cartoon.mp3' }
      ],
      options3: [
        { text: 'CHEER', value: 'Cheer.mp3' }
      ],
      options4: [
        { text: 'COLD', value: 'Cold.mp3' }
      ],
      options5: [
        { text: 'CRUISE', value: 'Cruise.mp3' }
      ],
      options6: [
        { text: 'DANZON', value: 'Danzon.mp3' }
      ],
      options7: [
        { text: 'DIZZY', value: 'Dizzy.mp3' }
      ],
      options8: [
        { text: 'DOUG', value: 'Doug.mp3' }
      ],
      options9: [
        { text: 'GUITAR', value: 'Guitar.mp3' }
      ],
      options10: [
        { text: 'LEFT', value: 'Left.mp3' }
      ],
      options11: [
        { text: 'LOPING', value: 'Loping.mp3' }
      ],
      options12: [
        { text: 'MESS', value: 'Mess.mp3' }
      ],
      options13: [
        { text: 'PUPPY', value: 'Puppy.mp3' }
      ],
      options14: [
        { text: 'SOUR', value: 'Sour.mp3' }
      ],
      options15: [
        { text: 'NONE' }
      ]
    }
  },
  computed: {
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
    }
  },
  methods: {
    select1 (item) {
      this.$store.commit('selectSound1', item)
      console.log(this.sound1)
      const audio = new Audio()
      audio.src = require('../assets/' + this.$store.state.sound1)
      audio.play()
    },
    select2 (item) {
      this.$store.commit('selectSound2', item)
      // console.log(item)
      const audio = new Audio()
      audio.src = require('../assets/' + this.$store.state.sound2)
      audio.play()
    }
  }
}
</script>
