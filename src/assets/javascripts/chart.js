const ELEMENT_HEIGHT = 20
const ELEMENT_WIDTH = 10
const CONNECT_HEIGHT = 5
const CONNECT_WIDTH = 2

const DATA_INPUT = [
  2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 3, 6, 6, 6, 6, 6, 8, 8,
  2, 3, 3, 7, 7, 7, 7, 7,
]
document.getElementById('inputArray').textContent = JSON.stringify(DATA_INPUT)

const handleResponse = (inputArray = []) => {
  const outputArray = []
  let i = 0

  while (i < inputArray.length) {
    const value = inputArray[i]
    let XMax = i

    while (XMax < inputArray.length && value === inputArray[XMax]) {
      XMax++
    }

    outputArray.push({ value, XMin: i, XMax: XMax - 1 })
    i = XMax
  }

  return outputArray
}

const parsedArray = handleResponse(DATA_INPUT)

const createColumnsPositionArray = () => {
  const columnsArray = []

  parsedArray.forEach((parsed, index) => {
    const { value, XMax, XMin } = parsed
    const count = XMax - XMin + 1

    // Config connect column
    if (index > 0) {
      const prevValue = parsedArray[index - 1].value
      columnsArray.push({
        type: 'connect',
        left: XMin * ELEMENT_WIDTH - index * CONNECT_WIDTH,
        bottom:
          (Math.min(value, prevValue) - 1) * (ELEMENT_HEIGHT + CONNECT_HEIGHT) +
          ELEMENT_HEIGHT,
        width: CONNECT_WIDTH,
        height:
          ELEMENT_HEIGHT * (Math.abs(value - prevValue) - 1) +
          Math.abs(value - prevValue) * CONNECT_HEIGHT,
      })
    }

    // Config element column
    columnsArray.push({
      type: 'element',
      left: index === 0 ? 0 : XMin * ELEMENT_WIDTH - index * CONNECT_WIDTH,
      bottom: (value - 1) * (ELEMENT_HEIGHT + CONNECT_HEIGHT),
      width: count * ELEMENT_WIDTH,
      height: ELEMENT_HEIGHT,
    })
  })

  return columnsArray
}

const drawChart = () => {
  const chartElement = document.getElementById('chart')
  const maxInputValue = Math.max(...DATA_INPUT)

  // Set chart width and height
  const CHART_WIDTH =
    DATA_INPUT.length * ELEMENT_WIDTH - (parsedArray.length - 1) * CONNECT_WIDTH
  const CHART_HEIGHT =
    ELEMENT_HEIGHT * maxInputValue + (maxInputValue - 1) * CONNECT_HEIGHT
  chartElement.style.width = `${CHART_WIDTH}px`
  chartElement.style.height = `${CHART_HEIGHT}px`

  // Draw columns
  const columnsArray = createColumnsPositionArray()
  columnsArray.forEach(({ type, left, bottom, width, height }) => {
    const element = document.createElement('div')
    element.style.position = 'absolute'
    element.style.backgroundColor = type === 'element' ? 'blue' : 'red'
    element.style.left = `${left}px`
    element.style.bottom = `${bottom}px`
    element.style.width = `${width}px`
    element.style.height = `${height}px`
    chartElement.appendChild(element)
  })
}

drawChart()
