import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {DatePicker} from 'antd';

const { RangePicker } = DatePicker;
class Time extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
              <div className="bg3">
              <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format="YYYY-MM-DD HH:mm"
                  placeholder={['Start Time', 'End Time']}
              />
            </div>
    );
  }
}

export default Time;