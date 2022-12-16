// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender:number;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    planetCode: string;
    createTime: Date;
  };
  /**\
   * 商品类型
   */
  type CurrentProduct = {
    id?: number;
    productName?: string;
    productQuantity?:number;
    productType?:string;

  };
  /**
   * 零件类型
   */
  type CurrentComponent ={
    id:number;
    componentName?: string;
    componentImg?: string;
    componentQuantity?:number;
  }
  /**
   * 原材料类型
   */
  type CurrentMaterial={
    id:number;
    materialName:string;
    materialQuantity:number;
    materialType:string;
  }
  /**
   * 组成表类型
   */
  type CurrentComposition={
    id:number;
    objectName:string;
    component1:string;
    com1Quantity:number;
    component2:string;
    com2Quantity:number;
    component3:string;
    com3Quantity:number;
    component4:string;
    com4Quantity:number;
  }
  /**
   * 制造表类型
   */
  type CurrentManufacture={
    id:number;
    objectName:string;
    mar1:string;
    mar1Q:number;
    mar2:string;
    mar2Q:number;
    mar3:string;
    mar3Q:number;
  }
  /**
   * 运输表类型
   */
  type CurrentTransportation={
    id:number;
    goodsId:number;
    goodsName:string;
    goodsQuantity:number;
    inDate:Date;
    outDate:Date;
  }

  type LoginResult = {
    status: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  /**
   * 通用返回类
   */
  type BaseResponse<T> = {
    code: number,
    data: T,
    message: string,
    description: string,
  }

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    planetCode?: string;
    type?: string;
  };
  /**
   * 删除参数
   */
  type deleteUserParams = {
    id?: number;
  };
  type deleteProductParams = {
    id?: number;
  };

  type deleteComponentParams = {
    id?: number;
  };
  type deleteMaterialParams = {
    id?: number;
  };


  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
