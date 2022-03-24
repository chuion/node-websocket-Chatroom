import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "@/locale/en";
import cn from "@/locale/cn";

// 准备翻译的语言环境信息
const messages = {
  en,
  cn,
};

Vue.use(VueI18n);
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: "cn", // 设置地区
  messages, // 设置地区信息
});

export default i18n;
