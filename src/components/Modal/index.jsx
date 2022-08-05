import React, { Component } from 'react'
import { Modal } from 'antd';
export default class index extends Component {
    state ={
        valueMess:{
            title:'',
            price:'',
            num:''
        }
    }
    //回显
    componentWillReceiveProps(nextProps){
        if(nextProps.defaultList.id){
            this.setState({
                valueMess:{...nextProps.defaultList}
            })
        }else{
            this.setState({
                valueMess:{
                    title:'',
                    price:'',
                    num:''
                }
            })
        }
    }
    handelChange =(e,type)=>{
        this.setState({
            //讲输入框内输入的值覆盖掉回显或者原来的value值
            valueMess:{...this.state.valueMess,[type]:e.target.value}
        })
    }
    render() {
         let {isModalVisible,handleOk,handleCancel,selectTitle} = this.props;
         let {valueMess} = this.state
        return (
            <div>
                <Modal title={selectTitle} visible={isModalVisible} onOk={()=>handleOk(valueMess,selectTitle)} onCancel={handleCancel}>
                    <p>商品: <input type="text" value={valueMess.title} onChange={(e)=>this.handelChange(e,'title')}/></p>
                    <p>价格:<input type="number" value={valueMess.price} onChange={(e)=>this.handelChange(e,'price')}/></p>
                    <p>数量:<input type="number" value={valueMess.num} onChange={(e)=>this.handelChange(e,'num')}/></p>
                </Modal>
            </div>
        )
    }
}
