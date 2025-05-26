import Card from "../components/Card";

const UISection = () => {
  return (
    <div className="wrapper my-8">
        <h1 className="font-bold text-2xl text-center mb-12">UI Design Works</h1>
        
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 justify-between w-full">
            <Card heading="Pickup AI" subHeading="Mobile Application" image="pickup.jpg" link="https://www.figma.com/proto/w5yzY4veFI1SktwiB5d0El/Pickup-AI?page-id=8%3A2&node-id=42-435&p=f&viewport=250%2C12%2C0.11&t=BlQgnQ34MEBWYHf4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=42%3A435" />
            <Card heading="Green N Eco" subHeading="Mobile Application" image="green.jpg" link="https://www.figma.com/design/DKn4CB9Ly7ipeUbm4EVts3/Green-N-Eco-Solutions?node-id=63-1166&t=l7oIknxHO29Nm3Zs-1" />
            <Card heading="Mippa" subHeading="Mobile Application" image="mippa.jpg" link="https://www.figma.com/proto/Xwv4bmVBPti5baLunVVRAb/mippa?page-id=0%3A1&node-id=1-8&p=f&viewport=203%2C139%2C0.02&t=OOpXFONXwofmh13Z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2" />
          </div>

          <div className="flex gap-8 justify-between w-full">
            <Card heading="CatchSwipe" subHeading="Web Application" image="catchswipe.png" link="https://www.figma.com/proto/cVlojGNP7vEYjwGzjFRkk9/CatchSwipe-web?page-id=121%3A226&node-id=265-354&p=f&viewport=264%2C37%2C0.03&t=9AKlGjGDdfnUOKzx-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=265%3A354" />
            <Card heading="Tourist Property App" subHeading="Mobile Application" image="tourist.jpg" link="https://www.figma.com/design/307zuKDJP73COh9XODayF2/cserenissimo?node-id=0-1&t=knCXrxdYxE4NSRgy-1" />
            <Card heading="Rahat Medical App" subHeading="Mobile Application" image="rahat.png" link="https://www.figma.com/proto/XB0jLJEl1XRaAKU4PqBVck/Rahat?page-id=0%3A1&node-id=34-681&p=f&viewport=62%2C10%2C0.07&t=e4TmfRsRXqo7MYAm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=59%3A2&show-proto-sidebar=1" />
          </div>


        </div>
    </div>
  );
}

export default UISection