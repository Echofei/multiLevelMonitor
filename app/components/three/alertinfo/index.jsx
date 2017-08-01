import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'
import { Carousel } from 'antd';

class AlertInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
//     const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     swipeToSlide: true,
//     beforeChange: function (currentSlide, nextSlide) {
//         console.log('before change', currentSlide, nextSlide);
//     },
//     afterChange: function (currentSlide) {
//         console.log('after change', currentSlide);
//     },
// };
    render() {
        return (
            <div>
                <Carousel className="alert-info-list"
                    autoplay
                    dots="false"
                    infinite={true}
                    slidesToShow ="3"
                    vertical="true"
                    verticalSwiping="true"
                    swipeToSlide="true"
                >
                    <div><h3>机柜3-存储计算组数据服务器-磁盘空间不足 2017-07-27 12:00</h3></div>
                    <div><h3>机柜3-存储计算组数据服务器-磁盘空间不足 2017-07-27 12:00</h3></div>
                    <div><h3>机柜3-存储计算组数据服务器-磁盘空间不足 2017-07-27 12:00</h3></div>
                    <div><h3>机柜3-存储计算组数据服务器-磁盘空间不足 2017-07-27 12:00</h3></div>
                </Carousel>
            </div>
        )
    }
}

export default AlertInfo