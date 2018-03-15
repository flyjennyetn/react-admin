/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import BreadcrumbCustom from 'components/BreadcrumbCustom/';
import img from 'assets/images/404.png';

@connect()

export default class extends PureComponent {

    state = {
    }

    componentWillMount(){
    }

    componentDidMount(){

    } 


    render(){

        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="404" second="404" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="404"  bordered={false}>
                                <div className="center" style={{height: '100%', background: '#ececec', overflow: 'hidden'}}>
                                    <img src={img} alt="404" className={`animated swing`} />
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

