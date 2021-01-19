
import VueI18n from 'vue-i18n'
import Vue from 'vue'

//語言
 import translationsMx from './languages/es-mx.js' //西班牙语（墨西哥）
  //英文

import './settings' //封装=用来切换语言


Vue.use(VueI18n)

// 引入语言模块  
const i18n = new VueI18n({
    locale: 'mx',    // 默认语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      'mx': translationsMx,   // 越南语言包
      // 'en': translationsEn    // 英文语言包
    }
})
export default i18n