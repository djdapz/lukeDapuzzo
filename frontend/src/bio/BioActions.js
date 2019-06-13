import Api from "../api/Api"

export const BIO_FETCHED = "BIO_FETCHED"

export const getBio = () => (dispatch) => Api.get("/bio")
  .then(response => response.data)
  .then(data => dispatch({
    type: BIO_FETCHED,
    payload: data
  }))

export const saveBio = (bio) => (dispatch) =>
  Api.put("/bio", { bio })
    .then(() => dispatch(getBio()))