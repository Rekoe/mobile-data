// 格式化时间，大于9返回空，小于9前面补0
function formatDig(num) {
  return num > 9 ? '' + num : '0' + num
}

function formatDate(mill) {
  var y = new Date(mill)
  let raws = [
    y.getFullYear(),
    formatDig(y.getMonth() + 1),
    formatDig(y.getDate())
    // y.getDay() || 7
  ]
  let format = ['/', '/']
  return String.raw({
    raw: raws
  }, ...format)
}

function* createWeeks(year) {
  const ONE_DAY = 24 * 3600 * 1000
  let start = new Date(year, 0, 1)
  let end = new Date(year, 11, 31)
  let firstDay = start.getDay() || 7
  let lastDay = end.getDay() || 7
  let startTime = +start
  let endTime = startTime + (7 - firstDay) * ONE_DAY
  let _endTime = end - (7 - lastDay) * ONE_DAY
  yield [startTime, endTime]
  startTime = endTime + ONE_DAY
  endTime = endTime + 7 * ONE_DAY
  while (endTime < _endTime) {
    yield [startTime, endTime]
    startTime = endTime + ONE_DAY
    endTime = endTime + 7 * ONE_DAY
  }
  yield [startTime, +end]
}

export function getWeeks(NewYear) {
  let index = 1
  for (let i of createWeeks(NewYear)) {
    let start = i[0]
    let end = i[1]
    let week = formatDig(index++)
    let startTime = formatDate(start)
    let endTime = formatDate(end)
    // console.log(`第${formatDig(index++)}周 ${formatDate(start)}-${formatDate(end)}`)
    console.log(week + '周')
    console.log('开始时间' + startTime)
    console.log('结束时间' + endTime)
  }
}