import Card from "../components/Card";

const UISection = () => {
  return (
    <div className="wrapper my-8">
        <h1 className="font-bold text-2xl text-center mb-12">UI Design Works</h1>
        
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 justify-between w-full">
            <Card heading="Pickup AI" subHeading="Mobile Application" image="pickup.jpg" link="https://www.figma.com/design/w5yzY4veFI1SktwiB5d0El/Pickup-AI?node-id=8-2&t=Pztl0jZdng1QH5ZW-1" />
            <Card heading="Green N Eco" subHeading="Mobile Application" image="green.jpg" link="https://www.figma.com/design/DKn4CB9Ly7ipeUbm4EVts3/Green-N-Eco-Solutions?node-id=63-1166&t=l7oIknxHO29Nm3Zs-1" />
            <Card heading="Mippa" subHeading="Mobile Application" image="mippa.jpg" link="https://www.figma.com/design/Xwv4bmVBPti5baLunVVRAb/mippa?node-id=1901-28701&t=DwEY11XNQnC0lQZg-1" />
          </div>

          <div className="flex gap-8 justify-between w-full">
            <Card heading="CatchSwipe" subHeading="Web Application" image="catchswipe.png" link="https://www.figma.com/design/XB0jLJEl1XRaAKU4PqBVck/Rahat?node-id=0-1&t=P5wCz7mI6GGQTKWq-1" />
            <Card heading="Tourist Property App" subHeading="Mobile Application" image="tourist.jpg" link="https://www.figma.com/design/307zuKDJP73COh9XODayF2/cserenissimo?node-id=0-1&t=knCXrxdYxE4NSRgy-1" />
            <Card heading="Rahat Medical App" subHeading="Mobile Application" image="rahat.png" link="https://www.figma.com/design/XB0jLJEl1XRaAKU4PqBVck/Rahat?node-id=0-1&t=P5wCz7mI6GGQTKWq-1" />
          </div>


        </div>
    </div>
  );
}

export default UISection