import React from 'react'
import axios from 'axios'

const MyApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=524b5482c573759992765668e997e0de&language=en-US&page=1'
})

export default class App extends React.Component{

  state ={
    movies: []
  }

  getMovie = async () =>{
    const response = await MyApi.get()
    const FilmesMapeados = response.data.results.map(item => {
      return{
       ...item 
      }
    })



    this.setState({movies: FilmesMapeados})
    console.log(response.data.results)
  }



  componentDidMount(){
    this.getMovie()
  }
 
  render(){
    return(
      <>
       <ul>{this.state.movies.map(item => (
         <>
         <li>{item.title} </li>
         <p> {item.overview}</p>
         </>
       ))}</ul>
      </>
    )
  }
}