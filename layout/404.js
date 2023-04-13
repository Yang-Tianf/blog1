/**
 * Butterfly
 * 404 error page
 */

'use strict'

hexo.extend.generator.register('404', function (locals) {
  if (!hexo.theme.config.error_404.enable) return
  return {
    path: '/source/404.md',
    layout: ['page'],
    data: {
      type: '404',
      top_img: false
    }
  }
})
