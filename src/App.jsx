import AudienceTypes from "./components/AudienceTypes"
import Header from "./components/Header"

const App=()=>{
    return(
        <div className="min-h-screen 
        bg-[radial-gradient(circle_at_top_left,#bbdefb,transparent_60%),linear-gradient(135deg,#ffffff,#64b5f6)] 
        py-10 px-15  box-border overflow-y-scroll hide-scrollbar ">  
            <Header/>
            <AudienceTypes/>
        </div>
    )
}

export default App