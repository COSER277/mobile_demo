export default function (nowDate, type) {
  let day = nowDate.getDate();
  let month = (nowDate.getMonth() + 1);
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  let sentDate = nowDate.getFullYear() + '-' + month + '-' + day;
  // let utc=nowDate.toUTCString();
  /GMT([+-]\d+)/.test(nowDate.toString());
  let timezoneOffset = RegExp.$1;
  timezoneOffset = timezoneOffset.substring(0, 3) + ":" + timezoneOffset.substring(3);
  let TDate = nowDate.getFullYear() + "-" + nowDate.getMonth() + "-" + nowDate.getDate()
    + "T" + nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds() + '.' + nowDate.getMilliseconds() + timezoneOffset;
  //  let utc = Date.UTC(nowDate.getUTCFullYear(),nowDate.getUTCMonth(),nowDate.getUTCDate(),nowDate.getUTCHours(),nowDate.getUTCMinutes(),nowDate.getUTCSeconds());
  //  console.log(TDate);
  if (type == 'yyyy') {
    return nowDate.getFullYear()
  } else if (type == 'mm') {
    return month
  } else if (type == 'dd') {
    return day
  } else if (type == 'utc') {
    return TDate
  } else {
    return sentDate
  }
}
