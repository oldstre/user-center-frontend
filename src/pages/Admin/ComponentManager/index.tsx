import React, { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import {searchProduct, deleteProduct, deleteComponent, searchComponent} from "@/services/ant-design-pro/api";
import {Button, Image, message} from "antd";
import {history} from "@@/core/history";
import {deleteUserParams} from "@/services/ant-design-pro/typings";
import {request} from "umi";
import {EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import Dropdown from "antd/es/dropdown";
import CreateForm from "@/pages/TableList/components/CreateForm";
// import { request } from 'umi';

const columns: ProColumns<API.CurrentComponent>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '零件名',
    dataIndex: 'componentName',
    copyable: true,
  },
  {
    title: '零件照片',
    dataIndex: 'componentImg',
    render: (_, record) => (
      <div>
        <Image src={record.componentImg} width={100} />
      </div>
    ),
  },
  {
    title: '零件数量',
    dataIndex: 'componentQuantity',
    // valueType: '',
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
      // <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
      //   查看
      // </a>,
      // onSelect={() => action?.reload()}
      <TableDropdown
        key="actionGroup"
        onSelect={
            async (values) => {
              if(values==='delete') {
                  const params = {
                    id:record.id
                  }
                // const params =record.id;
                console.log(params);
                try {
                  await deleteComponent(params as  API.deleteComponentParams);

                  const defaultLoginSuccessMessage = '删除成功！';
                  message.success(defaultLoginSuccessMessage);

                } catch (error: any) {
                  const defaultLoginFailureMessage = '删除失败，请重试！';
                  message.error(defaultLoginFailureMessage);
                }
                finally {
                  //刷新页面
                  location.reload();
                }
                }
              }
            }

        menus={[
          // { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.CurrentComponent>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const productList = await searchComponent();
        return {
          data: productList
        }
      }}
      editable={{
        type: 'multiple',
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
      headerTitle="零件页"
      toolBarRender={() => [
        <Button key="button" icon={<PlusOutlined />} type="primary">
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
