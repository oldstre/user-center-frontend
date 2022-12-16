import React, {useRef, useState} from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import {searchProduct, deleteProduct, addProduct, editProduct} from "@/services/ant-design-pro/api";
import {Button, Image, message} from "antd";
import {history} from "@@/core/history";
import {deleteUserParams} from "@/services/ant-design-pro/typings";
import {request} from "umi";
import {EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import Dropdown from "antd/es/dropdown";
// import { request } from 'umi';

const columns: ProColumns<API.CurrentProduct>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '商品名',
    dataIndex: 'productName',
    copyable: true,
  },

  {
    title: '商品数量',
    dataIndex: 'productQuantity',
    // valueType: '',
  },
  {
    title: '商品类型',
    dataIndex: 'productType',
    copyable: true,
  },

  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={`/admin/composition-manage?current=1&pageSize=5&productName=${record.productName}`} rel="noopener noreferrer" key="view">
        查看
      </a>,
      // onSelect={() => action?.reload()}
      <TableDropdown
        key="actionGroup"
        onSelect={
            async (values) => {
              // const actRef= useRef<ActionType>();
              if(values==='delete') {
                  const params = {
                    id:record.id
                  }
                // const params =record.id;
                console.log(params);
                try {
                  await deleteProduct(params as  API.deleteProductParams);

                  const defaultLoginSuccessMessage = '删除成功！';
                  message.success(defaultLoginSuccessMessage);

                } catch (error: any) {
                  const defaultLoginFailureMessage = '删除失败，请重试！';
                  message.error(defaultLoginFailureMessage);
                }
                finally {
                  //刷新页面
                 action?.reload()
                }
                }
              }
            }

        menus={[

          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const form_ref = useRef<any>();
  const [table_data, set_table_data] = useState([]);
  return (
    <ProTable<API.CurrentProduct>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      dataSource={table_data}
      formRef={form_ref}
      request={async (params = {}, sort, filter) => {
        const { current, pageSize, productName, productQuantity, productType } = params;
        console.log("params = ", params)
        console.log(sort, filter);
        const productList = await searchProduct({
          params: {
             productName, productQuantity, productType
          }
        });
        set_table_data(productList);
        return {
          data: productList
        }
      }}
      editable={{
        type: 'single',
        onSave: (key, row) => {
          console.log(key)
          console.log(row)
          const {productName, productQuantity, productImg, productType, id} = row;
          if(row.id == 'add'){
          //  调添加接口
            addProduct({
              productName,
              productQuantity,
              productType,
            }).then(() => {
              actionRef.current.reload();
              message.success('新增成功');
            });
          }else{
          //  调编辑接口
            editProduct({
              productName, productQuantity, productType, id
            }).then(() => {
              actionRef.current.reload();
              message.success('编辑成功');
            });
          }
        }
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
      }}
      dateFormatter="string"
      headerTitle="产品页"
      toolBarRender={() => [
        <Button onClick={() => {
          let deep = [...table_data];
          deep.push({
            id: 'add',
            productName: '',
            productQuantity: '',
            productImg: '',
            productType: '',
          });
          set_table_data(deep);
        }} key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
        // <Dropdown
        //   key="menu"
        //   menu={{
        //     items: [
        //       {
        //         label: '1st item',
        //         key: '1',
        //       },
        //       {
        //         label: '2nd item',
        //         key: '1',
        //       },
        //       {
        //         label: '3rd item',
        //         key: '1',
        //       },
        //     ],
        //   }}
        // >
        //   <Button>
        //     <EllipsisOutlined />
        //   </Button>
        // </Dropdown>,
      ]}
    />
  );
};
