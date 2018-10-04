/**
 * Created by devondapuzzo on 8/24/17.
 */
export const DELETE_SHOW = "DELETE_SHOW";
export const SHOW_DELETED = "SHOW_DELETED";
export const DELETE_SHOW_FAILED = "DELETE_SHOW_FAILED";

export const deleteShow = (id) => {
    return {
        type: DELETE_SHOW,
        payload: {id}
    }
};

export const showDeleted = (id) => {
    return {
        type: SHOW_DELETED,
        payload: {id}
    }
};

export const deleteShowFailed = (status, id) => {
    return {
        type: DELETE_SHOW_FAILED,
        payload: {status, id}
    }
};
