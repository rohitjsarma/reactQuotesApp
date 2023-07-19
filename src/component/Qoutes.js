
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Qoutes() {
    let [qt,setQt]=useState([]);
    let [quote,setQuotes]=useState([])
    let[author,setAuthor]=useState('')
    let[value,setValue]=useState('')
    
  
   

    let fetchQoutes=()=>{
        let url="https://type.fit/api/quotes"
        axios.get(url).then((res)=>{
            console.log(res.data[value].author)
            console.log(res.data[value].text)
            setAuthor(res.data[value].author)
            setQuotes(res.data[value].text)

        }).catch((err)=>{
            console.log(err)
        })
    }

    let urldata="https://api.adviceslip.com/advice"
   
    let fetchAdvice=()=>{
        axios.get(urldata).then((res)=>{
            setQt(res.data.slip)
         }).catch((err)=>{
           console.log(err)
         })

    } 

    useEffect(()=>{
        fetchAdvice()
        
    },[])

    let randomvalue=()=>{
        fetchQoutes()
        const val= Math.floor(Math.random()*10)
        setValue(val)
    }

 
  return (
   <div>
     <React.Fragment>
            <div className="container mt-3">
                <div className="row animated slideInLeft">
                    <div className="col">
                        <p className="h3 text-success">Quotes and Advice Page</p>
                        <div className="card w-75">
                       
                            <h1 className="heading text-primary">{qt.id}</h1>
                            <h3 className="heading text-warning">{qt.advice}</h3>
                           
                 
                    </div>
                           <button className="button btn-sm mt-1" onClick={fetchAdvice}>
                                <span className='text-danger'>Give Me Advice</span>
                            </button>
                </div>
            </div>
                <div className="row animated zoomIn delay-1s mt-3">
                    
                                                <div className="card w-50 float-center">
                                                    
                                                    <div className="card-body">
                                                        <ul className="list-group">
                                                            <span>
                                                            <li className="list-group-item text-danger">
                                                                Author : {JSON.stringify(author)}
                                                            </li>
                                                            </span>
                                                           <span>
                                                           <li className="list-group-item text-primary ">
                                                                Qoutes : {JSON.stringify(quote)}
                                                            </li>
                                                           </span>
                                                           <h3 className='tex-secondary'>Random value {value}</h3>
                                                            
                                                        </ul>
                                                    </div>
                                                    <div  className='card-footer'>
                                                    <button className='btn btn-sm btn-danger' onClick={randomvalue}>Random Value/Quotes </button>

                                                    </div>
                                                </div>
                                            
                                        
                                    
                                
                            
                     <div className="app">
               
            </div>
                </div>
            </div>
        </React.Fragment>
   </div>
  )
}
export default Qoutes;