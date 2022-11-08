/**
 * 时间戳过滤器
 * @param {Number} timestamp
 */
export const formatDate = function (timestamp: number, format = '') {
  // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear();
  const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  const D = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}`;
  const m = `${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  switch (format) {
    case 'YYYY-MM-DD hh:mm:ss':
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    case 'YYYY-MM-DD hh:mm':
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m;
    case 'YYYY-MM-DD':
      return Y + '-' + M + '-' + D;
    case 'MM-DD hh:mm':
      return M + '-' + D + ' ' + h + ':' + m;
    case '':
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    default:
      // console.log('时间过滤器参数格式有误！查看filter.js')
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
  }
};
