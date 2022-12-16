// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterResult>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索用户 GET /api/user/search */
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('/api/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除用户 GET /api/user/search */
export async function deleteUser(body: API.deleteUserParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 搜索产品 GET /api/product/search */
export async function searchProduct(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentProduct[]>>('/api/product/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 添加产品 GET /api/product/add */
export async function addProduct(body) {
  return request<API.BaseResponse<API.CurrentProduct[]>>('/api/product/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body
  });
}
/** 更新产品 GET /api/product/update */
export async function editProduct(body: API.deleteProductParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentProduct>>('/api/product/update', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    params:{
      id:body.id
    },
    ...(options || {}),
  });
}
/** 删除产品 GET /api/product/search */
export async function deleteProduct(body: API.deleteProductParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentProduct>>('/api/product/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    params:{
      id:body.id
    },
    ...(options || {}),
  });
}

/** 搜索零件 GET /api/component/search */
export async function searchComponent(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentComponent[]>>('/api/component/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除零件 GET /api/component/delete */
export async function deleteComponent(body: API.deleteComponentParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentComponent>>('/api/component/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    params:{
      id:body.id
    },
    ...(options || {}),
  });
}
/** 搜索原材料 GET /api/material/search */
export async function searchMaterial(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMaterial[]>>('/api/material/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 删除原材料 GET /api/material/delete */
export async function deleteMaterial(body: API.deleteMaterialParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMaterial>>('/api/material/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    params:{
      id:body.id
    },
    ...(options || {}),
  });
}
/** 搜索制造表 GET /api/manufacture/search */
export async function searchManufacture(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMaterial[]>>('/api/manufacture/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 搜索组成表 GET /api/composition/search */
export async function searchComposition(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMaterial[]>>('/api/composition/search', {
    method: 'GET',
    ...(options || {}),
  });
}
/** 搜索运输表 GET /api/composition/search */
export async function searchTransportation(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMaterial[]>>('/api/transport/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
