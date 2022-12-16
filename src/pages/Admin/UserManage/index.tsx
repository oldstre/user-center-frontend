import React, { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import {searchUsers, deleteUser} from "@/services/ant-design-pro/api";
import {Button, Image, message} from "antd";
import {history} from "@@/core/history";
import {deleteUserParams} from "@/services/ant-design-pro/typings";
import {   EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import Dropdown from 'antd/es/dropdown';

const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    copyable: true,
  },
  {
    title: '用户账户',
    dataIndex: 'userAccount',
    copyable: true,
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={100} />
      </div>
    ),
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: '邮件',
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: '状态',
    dataIndex: 'userStatus',
    valueEnum: {
      0: {text: '在岗', status: 'Success'},
      1: {
        text: '离岗',
        status: 'Default',
      },
    }
  },
  {
    title: '员工编号',
    dataIndex: 'planetCode',
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: '普通员工', status: 'Default' },
      1: {
        text: '管理员',
        status: 'Success',
      },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
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
              if(values==='delete'&&record.userRole==1) {
                  const params = {
                    id:record.id
                  }
                // const params =record.id;
                console.log(params);
                try {
                  await deleteUser(params as  API.deleteUserParams);

                  // const defaultLoginSuccessMessage = '删除成功！';
                  // message.success(defaultLoginSuccessMessage);

                } catch (error: any) {
                  const defaultLoginFailureMessage = '删除失败，请重试！';
                  message.error(defaultLoginFailureMessage);
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
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const userList = await searchUsers();
        return {
          data: userList
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
      headerTitle="管理员页"

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
