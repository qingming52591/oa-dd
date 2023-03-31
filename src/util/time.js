import * as g from '../g'
import {message} from "antd";
import {actions, store} from "../store";
import * as util from '../util'

/**
 * @name timeFromMs
 * @param {number} millisecond
 * @returns {string}
 */
export const timeFromMs = (millisecond) => {
    let d = new Date(parseInt(millisecond))
    let year = d.getFullYear()
    let month = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1
    let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate()
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    let minu = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
    let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
    return year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + second
}