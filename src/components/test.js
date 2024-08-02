import staticHolidays from './holiday.js'
import floatingHolidays from './special.js'

export default class petHoli {
  constructor() {}
  getDate(year, month, week, dayOfWeek) {
    // Validate month and dayOfWeek
    if (month < 0 || month > 11) {
      throw new Error('Month must be between 0 (January) and 11 (December)')
    }
    if (dayOfWeek < 0 || dayOfWeek > 6) {
      throw new Error('Day of the week must be between 0 (Monday) and 6 (Sunday)')
    }

    // Adjust dayOfWeek to match JavaScript's getDay method (0 = Sunday, 6 = Saturday)
    // Our input 0 = Monday, 6 = Sunday
    let adjustedDayOfWeek = (dayOfWeek + 1) % 7

    // Create a Date object for the first day of the given month and year
    let firstDay = new Date(year, month, 1)
    let firstDayOfWeek = firstDay.getDay()

    // Calculate the offset to the first occurrence of the specified dayOfWeek
    let offset = (adjustedDayOfWeek - firstDayOfWeek + 7) % 7
    let firstOccurrence = 1 + offset

    // Create an array of all the days in the month for the given dayOfWeek
    let days = []
    for (let day = firstOccurrence; day <= new Date(year, month + 1, 0).getDate(); day += 7) {
      days.push(day)
    }

    // Validate the week parameter
    if (week >= days.length || week < -days.length) {
      throw new Error('The specified week is out of range for the given month and day')
    }

    // Get the nth occurrence
    let dayOfMonth = week >= 0 ? days[week] : days[days.length + week]

    // Return the Date object
    return new Date(year, month, dayOfMonth)
  }

  // js date() month is 0 index but day is 1 index....bruh
  isTodayHoliday(year, month, day) {
    let holidays = []
    for (const [key, holiday] of Object.entries(floatingHolidays)) {
      const [holMonth, holWeek, holDay] = key.split('/').map(Number)
      const holidayDate = this.getDate(year, holMonth, holWeek, holDay)
      //   console.log(
      //     key,
      //     holidayDate.getDate(),
      //     holidayDate.toLocaleString('default', { month: 'long' })
      //   )
      if (holidayDate.getDate() === day && holidayDate.getMonth() === month - 1) {
        if (Array.isArray(holiday)) {
          holidays.push(...holiday) // Spread operator to push all elements of the array
        } else {
          holidays.push(holiday) // Directly push the single string
        }
      }
    }

    let key = `${month.toString()}/${day.toString()}`
    if (staticHolidays[key]) {
      if (Array.isArray(staticHolidays[key])) {
        holidays.push(...staticHolidays[key]) // Spread operator to push all elements of the array
      } else {
        holidays.push(staticHolidays[key]) // Directly push the single string
      }
    }
    if (holidays === undefined || holidays.length == 0) {
      return null
    } else {
      return holidays
    }
  }

  //   // Example usage:
  //   const today = new Date()
  //   const holiday = isTodayHoliday(today.getFullYear(), today.getMonth(), today.getDate())
  //   if (holiday) {
  //     console.log(`Today is ${holiday}`)
  //   } else {
  //     console.log('Today is not a holiday')
  //   }
}
