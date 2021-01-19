import Vue from "vue";
/*
  使用:1.在项目根页面(APP.vue)
        调用初始化(initLanguagae())
        或者 setLanguage(lang)
*/
var Settings = {
  //获取语言
  /*
   参数:
   可选值:
   默认值:
   返回值:'值'
  */
  getLanguage() {
    //目前当前语言先存储本地
    // console.log(localStorage.getItem('language'))
    //获取语言
    let a = "";
    switch (Vue.i18n.locale()) {
      case "vi":
        a = "Việt nam";
        break;
      case "mx":
        a = "Español";
        break;
      default:
        a = "中文";
        break;
    }
    return a;
  },
  //初始化默认语言
  /*
   参数:
   可选值:
   默认值:'zh'
   返回值:无
  */
  initLanguage() {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "zh");
    }
    this.setLanguage(localStorage.getItem("language") || "zh");
  },
  //更改语言==>用来按钮切换操作等
  /*
   参数:
   可选值:
   默认值:
   返回值:无
  */
  locale: localStorage.getItem("language") || "zh",
  i: 1,
  changeLanguage() {
    let langs = Vue.i18n.locales();
    this.setLanguage(langs[this.i]);
    this.i++
    if (this.i>langs.length) {
      this.setLanguage("zh");
      this.i = 0;
    }
    // console.log(this.i);
    // console.log("浏览器存储语言:" + localStorage.getItem('language'))
    // console.log("内部应用语言:" + Vue.i18n.locale())
  },
  //设置语言
  /*
   参数:{String} lang 
   可选值:'zh'/'en'/'vi'
   默认值:'zh'
   返回值:无
  */
  setLanguage(lang) {
    if (lang) {
      Vue.i18n.set(lang);
      localStorage.language = lang;
    } else {
      Vue.i18n.set("zh");
      localStorage.language = "zh";
    }
  }
};

//挂载全局变量
Vue.prototype.$i18nSettings = Settings;

export default Settings;
