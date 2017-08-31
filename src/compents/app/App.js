import React from 'react'
import Search from  '../search/search'
import Userlist from  '../userlist/userlist'
class  App extends  React.Component{
  constructor(props){
    super(props)
  //初始化状态
    this.state={
      searchName:''

    }
  }
  search =(searchName)=>{
  this.setState({searchName})

  }
 render() {
   return (
     <div className="container">
        <Search  search={this.search}/>
        <Userlist searchName={this.state.searchName}/>
     </div>
   )
 }
}

export default App