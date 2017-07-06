import React, { Component } from 'react';
import { Card, Row, Col, Avatar, Timeline, Icon } from 'antd';
import Highlight from './3rd-party/react-highlight';
import './App.css';

class App extends Component {
  render() {
    const avatars = []
    for (let i = 1; i <= 186; ++i) {
      const src = `http://stars.fe-artisan.com/images/avatar-${i}.jpg`;
      avatars.push(
        <a href={`http://stars.fe-artisan.com/api/${i}`}>
          <Avatar shape="square" size="large" src={src} />
        </a>)
    }

    return (
      <div className="App">
        <Row gutter={8}>
          <Col xs={24} sm={12}>
            <Card style={{ minHeight: 300 }}>
              <h3 style={{ marginBottom: 24 }}>中国内陆明星 Mock 数据</h3>
              <Timeline pending={<a href="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer">参考 <strong>json-server</strong> 文档</a>}>
                <Timeline.Item>全部数据： <a href="http://stars.fe-artisan.com/api">http://stars.fe-artisan.com/api/</a></Timeline.Item>
                <Timeline.Item>特定 ID ： <a href="http://stars.fe-artisan.com/api/1">http://stars.fe-artisan.com/api/1</a></Timeline.Item>
                <Timeline.Item>明星查找： <a href="http://stars.fe-artisan.com/api/?name_like=陈">http://stars.fe-artisan.com/api/?name_like=陈</a></Timeline.Item>
              </Timeline>
              <a href="https://github.com/wenris/stars"><Icon type="github" style={{ fontSize: 16, color: '#08c' }} /></a>
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card style={{ minHeight: 300 }}>
              <h3 style={{ marginBottom: 16 }}>数据示例</h3>
              <Highlight className='json'>
                {`{
  "avatar": "http://stars.fe-artisan.com/images/avatar-1.jpg",
  "name": "马可",
  "sex": "m",
  "born": "河南省商丘市梁园区 1990年2月9日",
  "country": "中国",
  "info": ["O型", "水瓶", "186cm", "65kg"],
  "img1": "http://stars.fe-artisan.com/images/img1-1.jpg",
  "img2": "http://stars.fe-artisan.com/images/img2-1.jpg",
  "id": 1
}`}
              </Highlight>
            </Card>
          </Col>
          <Col xs={24} sm={24}>
            <Card className="avatars-list">{avatars}</Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
