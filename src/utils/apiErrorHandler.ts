/*
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-05-09 20:09:50
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-09 20:34:43
 * @FilePath: /oiltrack-management/src/utils/apiErrorHandler.ts
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
 */
// utils/apiErrorHandler.js
import { showFailToast } from 'vant'

export function handleApiError(error) {
  if (error.response)
    showFailToast(`请求错误，状态码：${error.response.status}`)
  else if (error.request)
    showFailToast('请求失败，请检查网络连接')
  else
    showFailToast('发生了未知错误')
}

export function handleApiSuccessNotExcept(response) {
  showFailToast(`请求错误：${response.Message}`)
}
