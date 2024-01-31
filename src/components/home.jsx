import React from "react"
import transition from "../transition"

const Home = () => {
  
    return(
   <div>
     <section id="home">
       <div className="conteudo">
       <h1>
        Discover Your Perfect <br />
        Property Today
       </h1>
       <p>
        Real estate properties sale and <br />
        rent in over 12+ countries
       </p>
       </div>

       <div className="sales">

       </div>
     </section>
   </div>
    )
}

export default transition(Home)