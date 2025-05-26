// import { ReactNode } from 'react';

const Card = (props: any) => {
  return (
        <div className="flex flex-col gap-2 w-full">
            <div className="h-[300px] mb-2 rounded-xl overflow-hidden cursor-pointer">
                <a href={`${props.link}`}>
                  <img src={`/assets/${props.image}`} 
                    title={props.heading} 
                    alt={props.heading} 
                    className=" hover:scale-110 transition-transform duration-200 ease-in h-full object-cover" 
                  />
                </a>
              </div>
            <h4 className="font-semibold text-md"><a href={props.link}>{props.heading}</a></h4>
            <p className="font-normal text-sm">{props.subHeading}</p>
        </div>
  )
}

export default Card;