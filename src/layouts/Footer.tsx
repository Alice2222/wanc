import * as React from 'react';
import { Layout } from 'antd';

const { Footer: ReactFooter } = Layout;

function Footer() {
  return (
    <ReactFooter>
      <div className="footer">
        <div className="footer-text">深圳智易科技有限公司</div>
        <div className="footer-text">Made by Zhiyi with ❤️ from Shenzhen.</div>
        <div className="footer-text">Copyright All Rights Reserved. Zhiyi Tech© 2018 | 粤ICP备18038707号</div>
      </div>
    </ReactFooter>
  );
}

export default Footer;