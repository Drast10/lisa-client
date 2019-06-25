import * as request from "superagent";
import { baseUrl } from "../constants";
import {
  SET_DAY_MENU
} from './'

export const setDayMenu = menu => {
  return ({
    type: SET_DAY_MENU,
    menu
  })
}

export const getDayMenu = date => dispatch => {
  console.log("GET REQ DATE", date)
  request
    .get(`${baseUrl}/menus/?date=${date}`)
    .send(date)
    .then(res => {
      console.log(res.body)
      const { menu } = res.body
      setDayMenu(menu)
    })
}

