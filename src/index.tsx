import { LocaleProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from "./layouts";
import RouterIndex from './router';

const moment = require('moment');

moment.locale('zh-cn');

ReactDOM.render(
  <BrowserRouter>
    <LocaleProvider locale={zhCN}>
      <Layout>
        <RouterIndex/>
      </Layout>
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
