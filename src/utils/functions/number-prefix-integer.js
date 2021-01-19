    
/**
 * 
 * @scrip 用于數字前面自動加“0”
 * @param {Number}  num:待處理的數字 （僅限非負整數）
 * @param {Number}  n:完成后的數字位數
 * @return {String||Number} '0056'
 * @example prefixInterger(56,4)
 * @author 曾德銘
 */
export default function prefixInterger(num,n){
   if(num.toString().length>n){return num}else{
    return  (Array(n).join(0) + num).slice(-n);
}
}