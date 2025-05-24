
const FooterSection = () => {
  return (
    <div className="wrapper my-8">
        <h1 className="font-bold text-2xl text-center mb-4">Let's Work Together</h1>

        <div className="flex flex-col gap-8 justify-between items-center w-full">
            <p className="text-center">Write to me anytime to discuss anything.</p>

            <a href="mailto:nksarker11@gmail.com" className="w-[160px] py-4 text-white flex justify-center items-center gap-2 rounded-full hover:w-[180px] bg-slate-800 hover:bg-teal-500 transition-all duration-300 ease-in">
                <span className="">Write to me</span>
                <i className="material-icons">arrow_forward</i>
            </a>
        </div>

    </div>
  )
}

export default FooterSection