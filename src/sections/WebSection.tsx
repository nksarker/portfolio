import Card from "../components/Card"

const WebSection = () => {
  return (
        <div className="wrapper my-8">
            <h1 className="font-bold text-2xl text-center mb-12">Web Design Works</h1>
            
            <div className="flex flex-col gap-8">
                <div className="flex gap-8 justify-between w-full">
                    <Card heading="CatchSwipe" subHeading="React.js, Tailwind-css" image="catchswipe.png" link="https://catchswipe.vercel.app/" />
                    <Card heading="HumorHive" subHeading="React.js" image="humorhive.png" link="https://github.com/nksarker/humor-hive" />
                    <Card heading="Boisell" subHeading="HTML, CSS, PHP" image="boisell.png" link="https://github.com/nksarker/Boisell" />
                </div>
            </div>
        </div>
  )
}

export default WebSection