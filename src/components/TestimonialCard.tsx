
const TestimonialCard = (props: any) => {

  return (
    <div className="background p-6 rounded-xl h-[200px] w-full flex flex-col justify-between gap-6 hover:shadow-md cursor-pointer transition-all duration-200 ease-in">
        <p className="overflow-hidden text-ellipsis text-sm leading-[1.3rem]">{props.review}</p>

        <div className="flex gap-2 items-center">
            <img src="/src/assets/user.png" className="h-8 w-8" />

            <div className="flex flex-col gap-1">
                <div className="flex">
                    {[...Array(props.rating)].map((_, index) => (
                        <i key={index}
                            className="material-icons text-orange-400 text-[16px]">
                            star_rate
                        </i>
                    ))}
                </div>

                <p className="text-sm">{props.username}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard