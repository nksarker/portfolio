import TestimonialCard from "../components/TestimonialCard"

const TestimonialSection = () => {
  return (
    <div className="wrapper my-8">
        <h1 className="font-bold text-2xl text-center mb-12">Testimonial</h1>

        <div className="flex flex-col gap-8">
            <div className="flex gap-8 justify-between w-full">
                <TestimonialCard username="ari1234_" rating={5} review="Excellent work, strongly recommend this gig." />  
                <TestimonialCard username="dragon_uk8" rating={5} review="Niloy is a highly versatile and competent UX/UI designer. Having done multiple gigs with Niloy, he is now fully conversant with the brand so he instantly understands the brand look and feel and creates flawless work every time. Thanks so much." />  
                <TestimonialCard username="rizwankhatik" rating={5} review="Working with the NiloySarker was an absolute pleasure. Communication is outstanding and speed and service is absolutely top grade. Will continue to work with this seller." />  
            </div>

            <div className="flex gap-8 justify-between w-full">
                <TestimonialCard username="darkknight_2" rating={5} review="niloysarker699 has been very co-operative at taking feedback and come up with beautiful design. He was able to come up with visual design based on basic inputs from me. I would recomend niloy for UI UX design." />  
                <TestimonialCard username="cserenissimo" rating={5} review="Nice job. We will collaborate in future occasions for sure. Thanks so much." />  
                <TestimonialCard username="camt16" rating={5} review="niloysarker699 was working very quickly and delivered a high-quality product. He was responding and doing the comments on the same day. I enjoyed working with him and I am highly recommending him!" />  
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection