import React from 'react';
import {StarTwoTone} from '@ant-design/icons';
import {Row, Col} from 'antd';

const DisplayStars = ({stars}) => {
    const customStyle = {
        fontSize: 70,
        margin: 10
    }
    console.log(stars);
    return (
        <Row className="starsContainer">
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
            <Col span={8}><StarTwoTone twoToneColor="rgb(240, 225, 17)" style={customStyle}/></Col>
        </Row>
    )
}

export default DisplayStars
