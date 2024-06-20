/*
 * @Author: jiangjianhao1997@163.com
 * @Date: 2024-03-08 14:20:17
 * @LastEditors: adolf Jiang jiangjianhao1997@163.com
 * @LastEditTime: 2024-05-09 20:05:07
 * @FilePath: /oiltrack-management/src/api/typing.ts
 * @Description: api types
 * Copyright (c) 2024 by mxj, All Rights Reserved.
 */
export interface ResponseBody<T = any> {
  message?: string
  code?: number
  data?: T
  success: boolean
}

/** 统一返回结构体 */

export interface PageResult<T = any> {
  data: T[]
  current?: number
  pageSize?: number
  total?: number
  success: boolean
}

export interface PostRegisterBodyType {
  PhoneNum: string
  UserCode: string
  UserPwd: string
  code: string
  state: string
}

export interface PostLoginBodyType {
  UserCode?: string
  UserPwd?: string
  code: string
  state: string
}
