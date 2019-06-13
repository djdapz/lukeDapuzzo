import { http } from "../api"

export const BIO_FETCHED = "BIO_FETCHED"

export const getBio = () => (dispatch) => http.get("/bio")
  .then(response => response.data)
  .then(data => dispatch({
    type: BIO_FETCHED,
    payload: data
  }))

export const saveBio = (bio) => (dispatch) =>
  http.put("/bio", { bio })
    .then(() => dispatch(getBio()))