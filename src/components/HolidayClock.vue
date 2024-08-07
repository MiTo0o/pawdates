<template>
  <div class="clock-container green">
    <div class="clock">
      <div class="time">{{ time }}</div>
      <div class="date">{{ date }}</div>
      <div class="timezone">{{ timezone }}</div>
      <div class="message">{{ message }}</div>
    </div>
  </div>
</template>

<script>
// import staticHolidays from './holiday'
// import floatingHolidays from './special'
import petHoli from './test.js'
import messages from './messages.js'
export default {
  data() {
    return {
      time: '',
      date: '',
      timezone: '',
      day: null,
      message: '',
      petHoli: null
    }
  },

  created() {
    this.petHoli = new petHoli()
    this.updateTime()
    this.timer = setInterval(this.updateTime, 1000)
    this.message = messages[Math.floor(Math.random() * messages.length)]
  },

  methods: {
    updateTime() {
      const now = new Date()
      const hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12 // Convert to 12-hour format

      this.time = `${String(displayHours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`
      this.date = now.toDateString()
      this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

      const currDay = now.getDate()
      if (this.day === null || currDay > this.day) {
        this.day = currDay
        console.log(this.checkHolidays(now.getFullYear(), now.getMonth(), currDay))
      }
    },

    checkHolidays(year, month, day) {
      return this.petHoli.isTodayHoliday(year, month, day)
    }
  },
  beforeUnmount() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 20px;
  box-sizing: border-box;
}

.clock {
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 2em;
  line-height: 1.5em;
}

.time {
  font-weight: bold;
  font-size: 1.5em;
}

.date,
.message,
.timezone {
  font-size: 0.6em;
}
</style>
