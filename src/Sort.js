import React from 'react';

class Sort extends React.Component {
  handleClick(i){
    this.props.jump(i);
  }
  handleDel(i){
    this.props.remove(i);
  }
  getStyles(){
    return{
      title:{cursor:'pointer'},
      del:{float:'right'}
    }
  }
  render () {
    let styles=this.getStyles();
    let all = this.props.list;
    //加上事件就不行了,或许用字符串模板可以，以后试试
    // let lists = all.map(function (item,index) {
    //   return <p className="list-group-item" onClick={this.handleClick.bind(this,index)} key={index}>{item.title}</p>
    // })
    let lists=[];
    for (let i = 0; i < all.length; i++) {
      lists.push(
        <div className="list-group-item" key={i}>
          <span onClick={this.handleClick.bind(this,i)} style={styles.title}>{all[i].title}</span>
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true" style={styles.del} onClick={this.handleDel.bind(this,i)}></span>
        </div>
      )
    }
    return(
      <div className="list-group">
        {lists}
      </div>
    )
  }
}

export default Sort;
