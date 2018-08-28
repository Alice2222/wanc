// import{ Col, Row } from 'antd';
import * as React from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import './index.css';

const { Content } = Layout;

interface IProps{
  children: any;
}

interface IState{}

class ILayout extends React.Component<IProps, IState> {
  constructor(props: any){
    super(props)
  }
  public render(){
    const { children } = this.props;
    return (
      <div className='normal'>
        <Header/>
        <Content>
          {children}
        </Content>
        <Footer/>
      </div>
    );
  }

}

export default ILayout;