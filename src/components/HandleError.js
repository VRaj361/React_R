import React, { Component } from 'react'

class HandleError extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info){
         console.log(error)
         console.log("information " , info)
    }
  render() {
      if(this.state.hasError){
          return <h1>Something wents wrong</h1>
      }
    return this.props.children;
  }
}
export default  HandleError
