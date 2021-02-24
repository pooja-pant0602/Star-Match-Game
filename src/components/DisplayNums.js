import React from 'react'
import {Row, Col} from 'antd';

const DisplayNums = () => {
    const nums = [1,2,3,4,5,6,7,8,9];
    return (
        <Row className="numsContainer">
            {nums.map((num) => (
                <Col span={8} style={{width: "33%"}}>
                    <div className="num">
                        {num}
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default DisplayNums
