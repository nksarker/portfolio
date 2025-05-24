import Card from "../components/Card";

const UISection = () => {
  return (
    <div className="wrapper my-8">
        <h1 className="font-bold text-2xl text-center mb-12">UI Design Works</h1>
        
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 justify-between w-full">
            <Card heading="Mippa" subHeading="Mobile Application" image="mippa.jpg" />
            <Card heading="Rahat Medical App" subHeading="Mobile Application" image="rahat.png" />
            <Card heading="Green N Eco" subHeading="Mobile Application" image="green.jpg" />
          </div>

          <div className="flex gap-8 justify-between w-full">
            <Card heading="Pickup AI" subHeading="Mobile Application" image="pickup.jpg" />
            <Card heading="Social App" subHeading="Mobile Application" image="social.png" />
            <Card heading="CatchSwipe" subHeading="Web Application" image="catchswipe.png" />
          </div>


        </div>
    </div>
  );
}

export default UISection