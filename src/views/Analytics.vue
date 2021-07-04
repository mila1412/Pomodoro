<template lang='pug'>
#analytics
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
        b-col.focus(cols='12')
          | FOCUS TIME
        b-col(cols='6')
          | TODAY
        b-col(cols='6')
          | WEEK
        b-col(cols='6')
          span.number 20
          span.tomato /TOMATO
        b-col(cols='6')
          span.number 108
          span.tomato /TOMATO
        b-col.chart(cols='12')
          | CHART
        apexchart.apexchart(width="500" type="bar" :options="options" :series="series")
</template>

<script>
export default {
  name: 'Analytics',
  data () {
    return {
      series: [
        { name: 'Data1', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      options: {
        xaxis: {
          categories: ['7/5', '7/6', '7/7', '7/8', '7/9', '7/10', '7/11', '7/12', '7/13']
        }
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          }
        }
      }
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
  }
}
</script>
