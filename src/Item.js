import React,{Component} from 'react';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      listLength:0,
    }
  }
  componentDidMount(){
    let num = parseInt(this.props.items.length,10);
    // console.log(this.props.items.length);
    this.setState({
      listLength:num,
    })
  }
  componentWillReceiveProps(nextProps){
    // console.log(nextProps.items.length);
    let num = parseInt(nextProps.items.length,10);
    this.setState({
      listLength:num,
    })
  }
  render () {
    let lists=[];
    for (let i = 0; i < this.props.items.length; i++) {
      lists.push(
        <div className="list-group-item" key={i}><p key={i}>{this.props.items[i]}</p></div>
      )
    }
    return(
      <div className="list-group">
        {this.state.listLength==0 ? '请添加任务' : lists}
      </div>
    )
  }
}

export default Item;
