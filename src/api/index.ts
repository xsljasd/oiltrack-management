/*
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-08 14:20:17
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-04-07 13:28:16
 * @FilePath: /oiltrack-management/src/api/index.ts
 * @Description:
 * Copyright (c) 2024 by mxj, All Rights Reserved.
 */
import type {
  PostRegisterBodyType,
} from './typing.ts'
import request from '@/utils/request'

export async function queryProse(): Promise<any> {
  return request('/project/prose')
}

export async function postRegister(params: PostRegisterBodyType) {
  return request.post('/UserRegister', {
    ...params,
  })
}

export async function postLogin(params: PostRegisterBodyType) {
  return request.post('/UserRegister', {
    ...params,
  })
}
