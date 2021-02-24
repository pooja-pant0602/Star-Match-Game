import React, {useState} from 'react'
import {Card, Row, Col} from 'antd';
import DisplayStars from './DisplayStars';
import DisplayNums from './DisplayNums';
import './style.css';

const Game = () => {
    const [stars, setStars] = useState(5);
    return (
        <Card hoverable style={{width: 700, height: 500, borderRadius: 20}}>
            <Row>
                <Col span={12}>
                    <DisplayStars stars={stars}/>
                </Col>

                <Col span={12}>
                    <DisplayNums />
                </Col>
            </Row>
        </Card>
    )
}

export default Game
