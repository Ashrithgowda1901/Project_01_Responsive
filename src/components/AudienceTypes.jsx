import Card from "./Card"

const AudienceTypes = () => {


    let Cards = [
        {
            num: 1,
            image: "women_Phone_1.png",
            desc: " Prime customers who have access to bank credit and are satisfied with current product"
        },
        {
            num: 2,
            image: "women_Phone_1.png",
            desc: " Prime customers who have access to bank credit and are satisfied with current product"
        },
        {
            num: 3,
            image: "women_Phone_1.png",
            desc: "Prime customers who have access to bank credit and are satisfied with current product"
        }
    ]

    return (
        <div className="bg-white rounded-xl m-5 p-4 md:p-8">
            {/* Header */}
            <div className="text-base md:text-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="bg-black text-white rounded-xl px-3 py-1">
                    TARGET AUDIENCE
                </h1>
                <h1 className="text-black rounded-xl px-3 py-1">
                    DIGITAL BANKING PLATFORM
                </h1>
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
                {/* Left section */}
                <div className="bg-amber-200 flex flex-col justify-center items-center gap-3 p-4 rounded-lg w-full md:w-[27vw]">
                    <h1 className="text-lg font-bold md:text-2xl lg:text-3xl text-center">
                        Prospective customer segmentation
                    </h1>
                    <p className="text-sm md:text-base lg:text-xl text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                        voluptatem aspernatur earum quae dignissimos provident doloremque!
                        Ut fugit saepe dignissimos culpa blanditiis vel quis animi.
                    </p>
                </div>

                {/* Cards section */}
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    {Cards.map((card,index)=>(
                        <Card key={index}   num={card.num} desc={card.desc} image={card.image}/>))}
                </div>
            </div>
        </div>
    )
}

export default AudienceTypes