import * as g from '../g'
import {message} from "antd";
import {actions, store} from "../store";
import * as util from '../util'


export const re = {
    url: (url) => {
        return /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(url)
    }
}