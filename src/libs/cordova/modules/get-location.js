/**
 * 获取当前定位
 */
export default function () {
    alert("获取定位信息");
    return new Promise(function (resolve, reject) {
        cordova.exec(function (obj) {
            resolve(obj)
        }, function (e) {
            reject(e)
        }, "Loc", "queryLoc", []);
    })
}