import {LUKE_API} from "../config/appConfig";
import {postNoCredentials, postSecure} from "../api/Api";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

export const declareForm = (config) => {
    const {formName, fields, path, onSuccess, isInsecure, errorMessage} = config;

    const actionTypes = {
        successActionType: `${formName}_SUCCESS`,
        failureActionType: `${formName}_FAILURE`,
        openFormActionType: `OPEN_${formName}`,
        closeFormActionType: `CLOSE_${formName}`,
    };

    const actionType = (fieldName) => `UPDATE_FORM_${formName.toUpperCase()}_${fieldName.toUpperCase()}`;
    const post = isInsecure === true ? postNoCredentials : postSecure;

    const submitForm = () => (dispatch, getState) => {
        const uri = `${LUKE_API}${path}`;
        const body = getState()[formName];

        post(uri, body)
            .then((response) => {
                onSuccess(dispatch, getState, response.data)
            })
            .then(() => dispatch({type: actionTypes.successActionType}))
            .catch((err) => dispatch({type: actionTypes.failureActionType, payload: err}))
    };

    const reducer = createReducer(fields, actionType, actionTypes, errorMessage);
    const actions = createActions(fields, actionType);
    const connectToForm = createConnector(formName, actions, submitForm, actionTypes);

    return {
        actions,
        reducer,
        connect: connectToForm
    };
};

const createConnector = (formName, actions, submitForm, actionTypes) => {

    const openForm = () => ({type: actionTypes.openFormActionType});
    const closeForm = () => ({type: actionTypes.closeFormActionType});

    const mapStateToProps = (state) => ({
        [formName]: state[formName],
        error: state[formName].error,
        isOpen: state[formName].isOpen,
        valid: state[formName].valid
    });

    const mapDispatchToProps = (dispatch) => bindActionCreators(
        {
            ...actions,
            openForm,
            closeForm,
            submitForm,
        }, dispatch
    );
    return (component) => connect(mapStateToProps, mapDispatchToProps)(component);
};


const createActions = (fields, actionType) => fields
    .map(field => field.name)
    .reduce((prev, curr) => ({
        ...prev,
        [`update_${curr}`]: (payload) => ({type: actionType(curr), payload})
    }), {});


const createReducer = (fields, actionType, actionTypes, errorMessage = "") => {

    const fieldNames = fields.map(field => field.name);

    const defaultFormState = {valid: false, isOpen: false, error: ""};

    const emptyForm = fieldNames.reduce((prev, curr) => ({
        ...prev,
        [curr]: ""
    }), defaultFormState);


    const defaultStoreUpdaters = {
        [actionTypes.successActionType]: () => ({emptyForm}),
        [actionTypes.openFormActionType]: () => ({...emptyForm, isOpen: true}),
        [actionTypes.closeFormActionType]: () => ({emptyForm}),
        [actionTypes.failureActionType]: (state) => ({...state, error: errorMessage}),
    };


    const validate = (form) => {
        const requiredFields = fields
            .filter(field => field.required === true)
            .map(field => field.name);

        for (let i = 0; i < requiredFields.length; i++) {
            if (form[requiredFields[i]] === undefined || form[requiredFields[i]] === null || form[requiredFields[i]] === "") {
                return false
            }
        }
        return true
    };

    const storeUpdaters = fieldNames.reduce((prev, fieldName) => ({
        ...prev,
        [actionType(fieldName)]: (state, newValue) => ({...state, error: "", [fieldName]: newValue})
    }), defaultStoreUpdaters);


    return (state = emptyForm, action) => {
        const updater = storeUpdaters[action.type];

        if (updater !== undefined) {
            const updatedForm = updater(state, action.payload);
            if (updatedForm === null) {
                return updatedForm
            }
            return {...updatedForm, valid: validate(updatedForm)}
        }

        return state
    };
};

