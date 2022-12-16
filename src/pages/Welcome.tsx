import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import bg from './bg.png';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'欢迎使用'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <div style={{
          minHeight: 800,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>

          <iframe style={{
            width: '50%',
            height: 400
          }} src="http://www.seniverse.com/weather/weather.aspx?c=CHXX0008&l=zh-CN&p=MSN&a=1&u=C&s=5&m=1&x=1&d=3&fc=&bgc=&bc" frameborder="0"></iframe>

          <img src={bg} style={{
            width: 400
          }} />
        </div>
        <Typography.Text strong>
          {/*高级表格{' '}*/}
          {/*<a*/}
          {/*  href="https://procomponents.ant.design/components/table"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  target="__blank"*/}
          {/*>*/}
          {/*  欢迎使用*/}
          {/*</a>*/}
        </Typography.Text>
        {/*<CodePreview>yarn add @ant-design/pro-table</CodePreview>*/}
        {/*<Typography.Text*/}
        {/*  strong*/}
        {/*  style={{*/}
        {/*    marginBottom: 12,*/}
        {/*  }}*/}
        {/*>*/}
        {/*  高级布局{' '}*/}
        {/*  <a*/}
        {/*    href="https://procomponents.ant.design/components/layout"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*    target="__blank"*/}
        {/*  >*/}
        {/*    欢迎使用*/}
        {/*  </a>*/}
        {/*</Typography.Text>*/}
        {/*<CodePreview>yarn add @ant-design/pro-layout</CodePreview>*/}
      </Card>
    </PageContainer>
  );
};

export default Welcome;
