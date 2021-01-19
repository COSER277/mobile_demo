export const validPhone = function (phoneNumber) {
    if (!/^1[3456789]\d{9}$/.test(phoneNumber)) {
        return "手机号码格式不正确"
    }   
}