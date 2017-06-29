import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class ResourceVisual extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                资源可视化
            </div>
        )
    }

}

export default ResourceVisual;