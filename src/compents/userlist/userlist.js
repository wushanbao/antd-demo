import React from 'react'
import axios from 'axios'
class  Userlist extends  React.Component{
  constructor(props) {
    super(props)
    this.state={
      firstView:true,
      loading:true,
      users:null,
      error:null

    }
  }
   componentWillReceiveProps(nextProps){
     //我修该状态为Loading
     this.setState({
       firstView:false,
       loading:true

     })
      console.log(nextProps)
     let  url = `https://api.github.com/search/users?q=${nextProps.searchName}`
     axios.get(url)
       .then((response)=>{

         console.log(response);
         //拿到数据 再次修改状态
         this.setState({
           loading:false,
           users:response.data.items

         })
       })
       .catch((error)=>{
         console.log(error);
         this.setState({
           loading:false,
           error:'没用此用户名'
         })
       })
    }

  render(){
     let {firstView,loading,users,error} = this.state
    //这里需要根据状态来看 return 什么东西
    if(firstView){
      return <p>请输入用户名</p>

    }else if(loading){
      return <p>loading...</p>
    }else if(users){
         return(
           <div className="row">
             {
               users.map((user,index)=>{
                 return(
                   <div key={index} className="card">
                     <a href={user.html_url}  targrt="_blank">
                       <img src={user.avatar_url} style={{width:'100px'}}/>

                     </a>
                     <p  className="card-text">{user.login}</p>

                   </div>

                 )


               })

             }
           </div>
         )

    }else {
      return <p>{error}</p>
      }
    }
}

export default Userlist