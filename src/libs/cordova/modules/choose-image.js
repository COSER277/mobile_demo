/**
 * 使用此方法前cordova需先安装相应插件
 * cordova plugin add cordova-plugin-camera
 * 用于调用摄像头拍照功能，可返回base64，或图片路径
 * @param  {String} iQuality=50;图片质量
 * @param  {String} sSourceType="camera":"album":表示从相册获取图片
 *                                       "camera":表示从摄像头获取
 * @param  {String} sImgType= "base64":则表示返回的是base64格式字符串;
 *             "fileuri":则表示返回的是图片路径
 * @return {String}:视传参情况返回base64或者图片路径
 * @example object.chooseImage({success=>(),fail=>()})
 */
export default function (oparam) {
    let _success = oparam.success;
    let _fail = oparam.fail;
    this.isCompression = oparam.isCompression || false;
    cordova.exec(function (winParam) {
      _success(winParam)
    }, function (error) {
      _fail(error)
    }, "Camera", "takePhoto", [{"isCompression": false}]);
  
  }
  
  