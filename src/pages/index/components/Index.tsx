

import { Form, Row, Col, InputNumber, Button, Input, Table } from 'antd';
import * as React from 'react';
import axios from 'axios';
import './Index.css';
// require('../../../mock/data');

const FormItem = Form.Item;

interface IProps{
  form: any;
}

interface IState{
  data: any;
  loading: boolean;
}

class Index extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
      data: null,
      loading: false
    }
    this.getTomorrowTmp = this.getTomorrowTmp.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  public render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const inputStyle = {
      style: {
        width: '70%',
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 0,
        },
      },
    };
    const { data } = this.state;
    const columns = [{
      title: "参数/时间",
      dataIndex: "name",
      width: 170,
      fixed: true
    }, ...this.getColumns()]
    return(<div className="content-box">
      <Form onSubmit={this.submitForm}>
        <Row>
          <Col lg={12} xs={24}>
            <h3>当前冷却塔参数</h3>
            <FormItem label="塔出水最小温度" {...formItemLayout}>
              {getFieldDecorator('coolingTowerOutWaterTmptMin', {
                initialValue: 27,
                rules: [{ required: true, message: '请输入冷却塔出水最小温度!' }],
              })(
                <InputNumber step={1} min={27} max={38} placeholder="27-38" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="塔出水最大温度" {...formItemLayout}>
              {getFieldDecorator('coolingTowerOutWaterTmptMax', {
                initialValue: 27,
                rules: [{ required: true, message: '请输入冷却塔出水最大温度!' }],
              })(
                <InputNumber step={1} min={27} max={38} placeholder="27-38" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="塔风机最小运行频率" {...formItemLayout}>
              {getFieldDecorator('coolingTowerFanFreqMin', {
                initialValue: 35,
                rules: [{ required: true, message: '请输入塔风机最小运行频率!' }],
              })(
                <InputNumber step={1} min={35} max={48} placeholder="35-48" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="塔风机最大运行频率" {...formItemLayout}>
              {getFieldDecorator('coolingTowerFanFreqMax', {
                initialValue: 35,
                rules: [{ required: true, message: '请输入塔风机最大运行频率!' }],
              })(
                <InputNumber step={1} min={35} max={48} placeholder="35-48" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="湿球温度补偿修正值" {...formItemLayout}>
              {getFieldDecorator('unused1', {
                initialValue: "不可调"
              })(
                <Input disabled={true} {...inputStyle}/>
              )}
            </FormItem>
          </Col>
          <Col lg={12} xs={24}>
            <h3>当前冷却泵参数</h3>
            <FormItem label="冷却水温差设定值" {...formItemLayout}>
              {getFieldDecorator('coolingWaterTmptRange', {
                initialValue: 4,
                rules: [{ required: true, message: '请输入湿球温度补偿修正值!' }],
              })(
                <InputNumber step={1} min={4} max={6} placeholder="4-6" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="冷却供水温度设定值" {...formItemLayout}>
              {getFieldDecorator('unused2', {
                initialValue: "不可调"
              })(
                <Input disabled={true} {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="冷却泵最小运行频率" {...formItemLayout}>
              {getFieldDecorator('coolingPumpFreqMin', {
                initialValue: 35,
                rules: [{ required: true, message: '请输入冷却泵最小运行频率!' }],
              })(
                <InputNumber step={1} min={35} max={48} placeholder="35-48" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="冷却泵最大运行频率" {...formItemLayout}>
              {getFieldDecorator('coolingPumpFreqMax', {
                initialValue: 35,
                rules: [{ required: true, message: '请输入冷却泵最大运行频率!' }],
              })(
                <InputNumber step={1} min={35} max={48} placeholder="35-48" {...inputStyle}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={24}>
            <h3>当前冷冻泵参数</h3>
            <FormItem label="冷冻水温差设定值" {...formItemLayout}>
              {getFieldDecorator('chilledWaterTmptRange', {
                initialValue: 4,
                rules: [{ required: true, message: '请输入冷冻水温差设定值!' }],
              })(
                <InputNumber step={1} min={4} max={6} placeholder="4-6" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="冷冻回水温度设定值" {...formItemLayout}>
              {getFieldDecorator('chilledWaterTmpt', {
                initialValue: 27,
                rules: [{ required: true, message: '请输入冷冻回水温度设定值!' }],
              })(
                <InputNumber step={1} min={12} max={17} placeholder="12-17" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="冷冻泵最小运行频率" {...formItemLayout}>
              {getFieldDecorator('chilledPumpFreqMin', {
                initialValue: 35,
                rules: [{ required: true, message: '请输入冷冻泵最小运行频率!' }],
              })(
                <InputNumber step={1} min={35} max={48} placeholder="35-48" {...inputStyle}/>
              )}
            </FormItem>
            <FormItem label="冷冻泵最大运行频率" {...formItemLayout}>
              {getFieldDecorator('chilledPumpFreqMax', {
                initialValue: 35,
                rules: [{ required: true, message: '请输入冷冻泵最大运行频率!' }],
              })(
                <InputNumber step={1} min={35} max={48} placeholder="35-48" {...inputStyle}/>
              )}
            </FormItem>
            <h3>当前磁悬浮主机</h3>
            <FormItem label="出水温度设置" {...formItemLayout}>
              {getFieldDecorator('maglevEngineWaterTmpt', {
                initialValue: 6.5,
                rules: [{ required: true, message: '请输入出水温度设置!' }],
              })(
                <InputNumber step={0.1} min={6.5} max={8.5} placeholder="6.5-8.5" {...inputStyle}/>
              )}
            </FormItem>
          </Col>
          <Col lg={12} xs={24}>
            <h3>温度信息(摄氏度)</h3>
            <Row>
              <Col lg={4} xs={6}>
                <FormItem label="今天22点">
                  {getFieldDecorator('todayDayTemperatures[0]', {
                    initialValue: 27,
                    rules: [{ required: true, message: '请输入温度!' }],
                  })(
                    <InputNumber/>
                  )}
                </FormItem>
              </Col>
              <Col lg={4} xs={6}>
                <FormItem label="今天23点">
                  {getFieldDecorator('todayDayTemperatures[1]', {
                    initialValue: 27,
                    rules: [{ required: true, message: '请输入温度!' }],
                  })(
                    <InputNumber/>
                  )}
                </FormItem>
              </Col>
              { this.getTomorrowTmp() }
            </Row>
          </Col>
          <Col span={24}>
            <FormItem {...tailFormItemLayout}>
              <Button size="large" type="primary" htmlType="submit" loading={this.state.loading}>预测和调优</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      { data && <div className="result-box">
          <p>当前配置预计耗电量：{data.initTotalElect}度</p>
          <p>推荐配置预计耗电量：{data.tuneTotalElect}度</p>
          <p>耗电量：
            <span className={data.increament > 0 ? "green" : "red"}>
              {Math.abs(data.increament).toFixed(2)}度 {data.increament > 0 ? "↓" : "↑"}
            </span>
          </p>
          <Table
            columns={columns}
            dataSource={data.tableData}
            scroll={{ x: 2813 }}
            bordered={true}
            size="middle"
          />
        </div>
      }
    </div>)
  }
  private getTomorrowTmp() {
    const formItems: any = [];
    const { getFieldDecorator } = this.props.form;

    for(let i = 0; i < 24; i++) {
      formItems.push(<Col  lg={4} xs={6} key={i}>
        <FormItem label={`明天${i}点`}>
          {getFieldDecorator(`tomorrowDayTemperatures[${i}]`, {
            initialValue: 27,
            rules: [{ required: true, message: '请输入温度!' }],
          })(
            <InputNumber/>
          )}
        </FormItem>
      </Col>)
    }
    return formItems;
  }
  private submitForm(e:any) {
    e.preventDefault();
    this.props.form.validateFields((err:any, values:any) => {
      if (!err) {
        this.setState({ loading: true })
        const { todayDayTemperatures, tomorrowDayTemperatures } = values;
        const initParam = Object.assign({}, values);
        Reflect.deleteProperty(initParam, 'unused1');
        Reflect.deleteProperty(initParam, 'unused2');
        Reflect.deleteProperty(initParam, 'tomorrowDayTemperatures');
        Reflect.deleteProperty(initParam, 'todayDayTemperatures');
        const requestData = {
          initParam,
          todayDayTemperatures,
          tomorrowDayTemperatures
        }
        console.log(requestData)
        const instance = axios.create({
          timeout: 7200000
        });
        // instance.post('http://test/request')
        instance.post('http://42.159.86.241:5000/tune_param', requestData)
          .then((response:any) => {
            const result = response.data;
            const initTotalElect = result['initElectPerHour'].reduce((prev:number, curr:number) => (prev + curr)).toFixed(2);
            const tuneTotalElect = result['tuneElectPerHour'].reduce((prev:number, curr:number) => (prev + curr)).toFixed(2);
            const increament = initTotalElect - tuneTotalElect;
            const tableData:any = [{
              name: '塔出水最小温度值', 
              key: 'coolingTowerOutWaterTmptMin'
            }, {
              name: '塔出水最大温度', 
              key: 'coolingTowerOutWaterTmptMax'
            }, {
              name: '塔风机最小运行频率', 
              key: 'coolingTowerFanFreqMin'
            }, {
              name: '塔风机最大运行频率', 
              key: 'coolingTowerFanFreqMax'
            }, {
              name: '冷却水温差设定值', 
              key: 'coolingWaterTmptRange'
            }, {
              name: '冷却泵最小运行频率', 
              key: 'coolingPumpFreqMin'
            }, {
              name: '冷却泵最大运行频率', 
              key: 'coolingPumpFreqMax'
            }, {
              name: '冷冻水温差设定值', 
              key: 'chilledWaterTmptRange'
            }, {
              name: '冷冻回水温度设定值', 
              key: 'chilledWaterTmpt'
            }, {
              name: '冷冻泵最小运行频率', 
              key: 'chilledPumpFreqMin'
            }, {
              name: '冷冻泵最大运行频率', 
              key: 'chilledPumpFreqMax'
            }, {
              name: '出水温度设置', 
              key: 'maglevEngineWaterTmpt'
            }];
            result['tuneParams'].forEach((element:any, index:number) => {
              tableData.forEach((item: any) => {
                if (!item.data) {
                  item.data = [];
                }
                item.data.push(element[item.key].toFixed(2))
              })
            });
            const data  = {
              initTotalElect,
              tuneTotalElect,
              increament,
              tableData
            }
            this.setState({ data, loading: false })
          })
          .catch((error: any) => {
            console.log(error)
          })
      } 
    })
  }
  private getColumns() {
    const columns = [];
    for(let i = 0; i < 24; i++) {
      columns.push({
        key: `data${i}`,
        title: `${i}点`,
        width: 110,
        render: (text: any, record: any) => record.data[i] || ''
      })
    }
    return columns;
  }
}

export default Form.create()(Index);