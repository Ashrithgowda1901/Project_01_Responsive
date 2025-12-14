const Header=()=>{
    return(
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex-none">
          <img
            src="anime-boy-wallpape.png"
            alt=""
            className="w-36 h-32 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-mono text-cyan-900">
            Presentation Design
          </h1>
          <h3 className="text-xl md:text-2xl text-cyan-900">
            Ashrith B H Gowda
          </h3>
        </div>
      </div>
    )
}
export default Header