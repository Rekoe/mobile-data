import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
// import axios from 'axios'

export function getWeek() {
  const url = 'http://132.122.150.52:8080/bocc/'

  const data = Object.assign({}, commonParams, {})

  return jsonp(url, data, options)
}