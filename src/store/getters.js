// 过滤并计算属性
export const userTrueName = state => state.userInfo.userTrueName
export const userId = state => state.userInfo.userId
export const orgId = state => state.userInfo.orgId
export const token = state => state.userInfo.token

import {
    judgeDevice
  } from '@/utils/common.js'

export const device = state => judgeDevice()