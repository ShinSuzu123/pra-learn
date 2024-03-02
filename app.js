// // ESMの場合
// import dayjs from "dayjs";
// import ja from 'dayjs/locale/ja';
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

// // CJSの場合
// const dayjs = require("dayjs");
// const ja = require("dayjs/locale/ja");
// const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');

console.log(dayjs());
dayjs.locale(ja);
dayjs.extend(dayjs_plugin_isSameOrBefore);
