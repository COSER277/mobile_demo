/**
 * 实现本地数据模糊查询
 * @param  {Array}  sourceList  原数组
 * @param  {String} keyWord     查询的关键词
 * @param  {String} objAttr     对象属性（可空）
 * @return {Array}  arr         目标数组
 *
 * @example1：
 * let sourceList = [10,11,12,15,"25",35,44,56];
 * let targetList = [];
 * targetList = fuzzyQuery(sourceList,"5");
 * console.log(targetList)
 *
 * 输出：[15, "25", 35, 56]
 *
 * @example2：
 * let sourceList = [
 * {"No":"ABC010203001","Name":"AAA"},
 * {"No":"DEF010203001","Name":"BBB"},
 * {"No":"ABC010503002","Name":"CCC"},
 * {"No":"DEF010503001","Name":"DDD"},
 * {"No":"ABC010206003","Name":"EEE"},
 * {"No":"GHI040506001","Name":"FFF"},
 * ];
 * let targetList = [];
 * targetList = fuzzyQuery(sourceList,"05","No");
 * console.log(targetList)
 *
 * 输出：[
 * {"No":"ABC010503002","Name":"CCC"},
 * {"No":"DEF010503001","Name":"DDD"},
 * {"No":"GHI040506001","Name":"FFF"},
 * ]
 */
export default function fuzzyQuery(sourceList, keyWord, objAttr) {
  let reg = new RegExp(keyWord);
  return sourceList.filter((currentValue) => {
    return reg.test(objAttr ? currentValue[objAttr] : currentValue);
  });
}
