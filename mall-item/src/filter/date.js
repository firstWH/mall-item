// vue的过滤器其实就是一个函数, 只不是使用方式比较特殊, 需要在模版中通过管道符(|)调用
//过滤时间格式
// Vue.filter('date',function(date){
//     return new Date(date).toLocaleString();
// })
export default function(date){
    return new Date(date).toLocaleDateString();
}