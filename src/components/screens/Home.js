import React,{useState,} from 'react'
const Home  = ()=>{
    const [data,setData] = useState([])
  
    const makeReply = (text,messageId)=>{
          fetch('/reply',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  messageId,
                  text
              })
          }).then(res=>res.json())
          .then(result=>{
              console.log(result)
              const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
             })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }

    const deleteMessage = (messageId)=>{
        fetch(`/deletemessage/${messageId}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
   return (
       <div className="home">
           {
               data.map(item=>{
                   return(
                       <div className="card home-card" key={item._id}>
                            <h5 style={{padding:"5px"}}>
                                 <i className="material-icons" style={{float:"right" }} 
                               onClick={()=>deleteMessage(item._id)}
                               >
                            delete</i>
                            }</h5>
                            <div className="card-image">
                                <img alt="" src={item.photo}/>
                            </div>
                            <div className="card-content">
                                }
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                {
                                    item.messages.map(record=>{
                                        return(
                                        <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
                                        )
                                    })
                                }
                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeReply(e.target[0].value,item._id)
                                }}>
                                  <input type="text" placeholder="add a reply" />  
                                </form>
                                
                            </div>
                        </div> 
                   )
               })
           }
          
          
       </div>
   )
}


export default Home