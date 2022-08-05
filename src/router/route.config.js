import Index from '../pages';

import Menu1 from '../pages/Menu1';
import Menu3 from '../pages/Menu3';
import Menu2 from '../pages/Menu2';



const config = [
    {
        from:'/',
        to:'/index'
    },
    {
        path:'/index',
        isLogin:true,
        component:Index,
        children:[
            {
                from:'/',
                to:'/menu1'
            },
            {
                path:'/menu1',
                title:localStorage.getItem('save')?localStorage.getItem('save'):'菜单1',
                component:Menu1
            },
            {
                path:'/menu2',
                title:'菜单2',
                component:Menu2
            },
            {
                path:'/menu3',
                title:'菜单3',
                component:Menu3
            }
        ]
    },
   
]
export default config