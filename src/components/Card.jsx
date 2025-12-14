const Card = ({ num, desc, image }) => {
    return (
      <div className="flex-1">
        <div style={{ backgroundImage: `url(${image})` }}
       className="relative h-64 md:h-[55vh]  bg-cover bg-center rounded-2xl flex flex-col items-center justify-center p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 rounded-2xl"></div>
  
          {/* Number badge */}
          <h1 className="absolute top-4 left-4 h-10 w-10 bg-white rounded-full flex items-center justify-center font-bold z-10">
            {num}
          </h1>
  
          {/* Text */}
          <p className="relative text-gray-100 text-sm md:text-base lg:text-lg text-center z-10">
            {desc}
          </p>
        </div>
      </div>
    )
  }
  
  export default Card