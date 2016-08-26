import React from 'react';

import Sort from './Sort.js';
import Item from './Item.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      menu:[
        {title:'JS',items:['hello JS','nice sfdsfdyou']},
        {title:'PHP',items:['hello PHP','nice to meet you','fsdfdsfdsfds']},
        {title:'Node',items:['hello ,world','nice to meet you','454654654']},
        {title:'React',items:['hello ,world','nice to meet you','421321321sfds']}
      ],
      value:'',
      nowShow:0,
      listValue:'',
    }
  }
  handleDel(i){
    let newMenu=this.state.menu;
    newMenu.splice(i,1);
    this.setState({
      menu:newMenu,
      nowShow:0
    })
  }
  handleAdd(){
    let val = this.state.value;
    let newItem = {title:val,items:[]};
    let newMenu=this.state.menu;
    newMenu.push(newItem);
    this.setState({
      menu:newMenu,
      value:''
    })
  }
  handleAddList(i){
    let val = this.state.listValue;
    let newMenu=this.state.menu;
    newMenu[i].items.push(val);
    this.setState({
      menu:newMenu,
      listValue:''
    })
  }
  handleInput(e){
    this.setState({
      value:e.target.value,
    })
  }
  handleInputList(e){
    this.setState({
      listValue:e.target.value,
    })
  }
  handleJump(i){
    this.setState({
      nowShow:i
    })
  }
  render () {
    let styles={
      root:{
        padding:'10px'
      },
      num:{
        fontSize:'18px'
      },
      h3:{
        textAlign:'center'
      },
      left:{
        width:'50%',
        float:'left',
        padding:'10px'
      }
    }
    let items = this.state.menu[this.state.nowShow].items;
    return(
      <div className="clearfix" style={styles.root}>
        <h3 style={styles.h3}>我的任务 <span className="badge" style={styles.num}>{this.state.menu.length}</span></h3>
        <div style={styles.left}>
          <h4 className="text-center">博客分类</h4>
          <div className="input-group" style={{marginBottom:'5px'}}>
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleInput.bind(this)}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.handleAdd.bind(this)}>添加</button>
            </span>
          </div>
          <Sort list={this.state.menu} remove={this.handleDel.bind(this)} jump={this.handleJump.bind(this)}/>
        </div>
        <div style={styles.left}>
          <h4 className="text-center">任务列表</h4>
          <div className="input-group" style={{marginBottom:'5px'}}>
            <input type="text" className="form-control" value={this.state.listValue} onChange={this.handleInputList.bind(this)}/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.handleAddList.bind(this,this.state.nowShow)}>添加</button>
            </span>
          </div>
          <Item items={items} />
        </div>
      </div>
    )
  }
}

export default App;
