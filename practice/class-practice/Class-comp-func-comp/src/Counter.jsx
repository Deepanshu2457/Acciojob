import React from 'react'



class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count: 0
        }

    }

    componentDidMount(){
        

    }
    componentDidUpdate(){

    }
    componentDidUpdate(){

    }

    render(){
        return(
           <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
    <div className="text-4xl font-bold text-blue-600 mb-2">{this.state.count}</div>
    <div className="text-gray-500 mb-6">{this.state.name}</div>

    <div className="flex justify-center gap-4">
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        Increment
      </button>

      <button
        onClick={() => {
          this.setState({ count: 0 })
        }}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        Reset
      </button>

      <button
        onClick={() => this.setState({ count: this.state.count - 1 })}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        Decrement
      </button>
    </div>
  </div>
</div>

        )

    }

}
  


export default Counter