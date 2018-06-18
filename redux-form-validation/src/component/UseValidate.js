import isValidEmail from 'sane-email-validation'
//validating function
export let validate = values => {
    const errors = {}

    if (!values.userName) {
        errors.userName = "*Required"
    }
    if (!values.email) {
        errors.email = "*Required"
    } else if (!isValidEmail(values.email)) {
        errors.email = "*Email is not valid!"
    }
    if (!values.password) {
        errors.password = "*Required"
    }
    if (!values.mobile) {
        errors.mobile = "*Required"
    }
    if (!values.zip) {
        errors.zip = "*Required"
    }
    return errors;

}