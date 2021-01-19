/**
 * 图像转Base64
 * @param  {String}  img    图片地址
 * @return {String}  base64
 */
function getBase64Image(img) {
  let canvas = document.createElement("canvas");
  let w = img.width/2;
  let h = img.height/2;
  let ctx = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0, w, h);
  let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  let base64 = canvas.toDataURL("image/" + ext);
  return base64;
}

/**
 * Base64字符串转二进制
 * @param  {String}  base64
 * @return {Object}  Blob
 */
function base64ToBlob(base64) {
  let arr = base64.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
    type: mime
  });
}
/**
 * 图像转二进制
 * @param  {String}  src    图片地址
 * @param  {String}  type   图片类型 base64 or blob
 * @return {Object}  imgItem = {
 *     FileName:"文件名",
 *     Image: Blob
 * }
 */
export default function ImgToBase64(src, type) {
  let image = new Image();

  let imglth = src.split("/");
  let imgItem = {};
  imgItem.FileName = imglth[imglth.length - 1];//文件名
  // console.log("imgItem.FileName",imgItem.FileName)

  image.crossOrigin = 'Anonymous';
  image.src = src;

  return new Promise(function (resolve, reject) {
    image.onload = function () {
      //文件的Base64字符串
      let base64 = getBase64Image(image);
      // console.log("base64");
      let file = null;
      if (type === "blob") {
        //Base64字符串转二进制
        file = base64ToBlob(base64);
        // console.log(file);
      }
      // 正则替换哈 imgData 为base64字符串
      base64 = base64.replace(/^data:image\/\w+;base64,/, "");
      imgItem.Image = file ? file : base64;
      resolve(imgItem);
    };
  })
}
