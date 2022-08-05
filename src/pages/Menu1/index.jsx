import { Input  } from 'antd';
import {useState , useEffect } from 'react';
import './style.css';
function Menu1() {
    const [string,setString] = useState(localStorage.getItem('save')?localStorage.getItem('save'):'')
    const [flag,isFlag] = useState('false')



    let change=(e)=>{
    //   string = e.target.value
      setString(e.target.value)
    }
    let save = () =>{
        console.log(string)
        localStorage.setItem('save',string)
        isFlag(!flag)
    }
    return <div className="menu1">
       <Input  value = {string} style={{width:'200px'}} onChange={change}></Input>
       <button onClick={save}>保存</button>
    </div>
}
export default Menu1