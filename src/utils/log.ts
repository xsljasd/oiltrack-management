class Log {
  group
  isProduct
  constructor() {
    this.group = []
    // eslint-disable-next-line node/prefer-global/process
    this.isProduct = process.env.NODE_ENV === 'production'
  }

  info(info, data) {
    if (this.isProduct)
      return
    const COLOR = 'blue'
    let label = 'info'
    let print
    if (data) {
      label = info
      print = data
    }
    else {
      print = info
    }
    this.prettyLog(COLOR, label, print)
  }

  error() {

  }

  warning() {

  }

  success() {

  }

  private prettyLog(color, label, info) {
    if (Array.isArray(info)) {
    // eslint-disable-next-line no-console
      console.table(info)
    }
    else if (typeof info === 'object') {
    // eslint-disable-next-line no-console
      console.dirxml(info)
    }
    // eslint-disable-next-line no-console
    console.log(`%c ${label} %c ${info} %c`, `background:${color}; min-width:320px; border-radius: 10px 0 0 10px; border: 1px solid ${color}`, `color:${color}; border-radius: 0 10px 10px 0; border: 1px solid ${color}; background: transparent`, `display: flex`)
  }
}

const prettyLog = new Log()
export default prettyLog
