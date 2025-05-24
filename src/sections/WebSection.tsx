import Card from "../components/Card"

const WebSection = () => {
  return (
        <div className="wrapper my-8">
            <h1 className="font-bold text-2xl text-center mb-12">Web Design Works</h1>
            
            <div className="flex flex-col gap-8">
                <div className="flex gap-8 justify-between w-full">
                    <Card heading="HumorHive" subHeading="React.js, Tailwind-css" image="mippa.jpg" link="" />
                    <Card heading="Rahat Medical App" subHeading="React JS" image="rahat.png" link="" />
                    <Card heading="Green N Eco" subHeading="React JS" image="green.jpg" link="" />
                </div>
            </div>
        </div>
  )
}

export default WebSection