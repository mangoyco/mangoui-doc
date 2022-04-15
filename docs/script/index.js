console.log(decodeURI('%E6%89%A7%E8%A1%8C%25c%20dhrs()%20%25c%E6%8E%88%E6%9D%83%E5%90%8E%E5%B0%86%E6%AF%8F%E4%B8%AA%E5%B0%8F%E6%97%B6%E6%8F%90%E9%86%92%E6%82%A8%E5%96%9D%E5%96%9D%E6%B0%B4'), "color: #1890ff;", '');

var g_shouldNf = false
var g_isFirstNf = true
var g_nfContent = ''
function g_creatNotify(str) {
  g_shouldNf = true
  n = new Notification('一个小时了！', {
    body: g_isFirstNf ? `现在开始将每小时提醒您${ g_nfContent }` : g_nfContent,
  })
  g_isFirstNf = false
  setTimeout(() => {
    n.close()
  }, 6000)
  setTimeout(g_creatNotify, 3600 * 1000, str)
}
function dhrs(str = '该起来走走，喝点水了') {
  if (g_shouldNf) {
    if (str === g_nfContent) {
      console.log(decodeURI('%E5%B7%B2%E7%BB%8F%E5%AD%98%E5%9C%A8%E8%AF%A5%E6%8F%90%E9%86%92%E4%BA%86~'))
    } else {
      g_nfContent = str
      console.log(decodeURI('%E5%B7%B2%E6%94%B9%E5%8F%98%E6%8F%90%E9%86%92%E5%86%85%E5%AE%B9~'))
    }
  } else {
    g_nfContent = str
    Notification.requestPermission(function (PERMISSION) {
      g_creatNotify(str)
    })
  }
}