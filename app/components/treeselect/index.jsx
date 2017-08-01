import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Tree} from 'antd'
import './style.less'

const TreeNode = Tree.TreeNode;

class TreeSelectComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }


  render() {
      const loop = data => data.map((item) => {
          if (item.children) {
              return (
<<<<<<< HEAD
                  <TreeNode className="title1" key={item.key} title={item.label}>
=======
                  <TreeNode key={item.key} title={item.label}>
>>>>>>> 8b75128681fcf03a2e78b6feaad01c4b83938f8d
                      {loop(item.children)}
                  </TreeNode>
              );
          }
<<<<<<< HEAD
          return <TreeNode className="title1" key={item.key} title={item.label} />;
      });

    return (
            <div className="title1">
                <Tree className="title1">
=======
          return <TreeNode key={item.key} title={item.label} />;
      });

    return (
            <div>
                <Tree>
>>>>>>> 8b75128681fcf03a2e78b6feaad01c4b83938f8d
                    {loop(this.props.treeDate)}
                </Tree>
            </div>
    );
  }
}

export default TreeSelectComponent;