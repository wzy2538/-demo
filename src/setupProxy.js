const Mock = require('mockjs');
const bodyParser = require('body-parser');
const Data = Mock.mock({
    'list|30':[
        {
            img:'@image(100x100,@color)',
            title:'@ctitle',
            "price|30-200":0,
            num:1,
            id:'@id',
            isChecked:false,
            "sex|1":['男','女']
        }
    ]
})
const user =[
    {
        username:'123',
        password:'123'
    }
]
module.exports = app =>{
    app.use(bodyParser.json())
    app.post('/list',(req,res)=>{
        res.send({
            code:0,
            data:Data.list
        })
    })
    app.post('/login',(req,res)=>{
        let {username,password} = req.body;
        const arr=user.filter(item=>item.username===username&&item.password===password)
        if(arr.length>0){
            res.send({
                code:0,
                msg:'登录成功'
            })
        }else{
            res.send({
                code:1,
                mag:'登录失败'
            })
        }
    })
}