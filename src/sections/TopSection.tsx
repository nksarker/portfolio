// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const TopSection = () => {
  return (
    <div>
        <div className="flex justify-between gap-8 items-center wrapper pb-16">
            <div>
                <h4 className="text-[20px]"><label className="text-teal-500">Hello</label> | This is</h4>
                <h1 className="text-[64px] font-semibold mb-4">Niloy Kumer</h1>
                <p>I am a graduate from Rajshahi University of Engineering & Technology (RUET). I have worked as an Intern <b>Frontend Developer</b> and on several freelance <b>UI/UX Design</b> projects.</p>
                <div className="mt-8 flex gap-4"> 
                    <a href="mailto:nksarker11@gmail.com" className="w-[160px] py-4 text-white flex justify-center items-center gap-2 rounded-full hover:w-[180px] bg-slate-800 hover:bg-teal-500 transition-all duration-300 ease-in">
                        <span className="">Email me</span>
                        <i className="material-icons">arrow_forward</i>
                    </a>
                    <a href="/src/assets/resume_niloy_kumer.pdf" download className="w-[160px] py-4 flex justify-center items-center gap-2 rounded-full hover:w-[200px] border-2 border-slate-800 hover:border-teal-500 text-slate-800 hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in">
                        <span>Resume</span>
                        <i className="material-icons group-hover:block">download</i>
                    </a>
                </div>
            </div>

            <div className="h-[320px] w-[300px] mr-16 overflow-hidden rounded-full">
                <img src="assets/profile.png" alt="Niloy Kumer" title="Niloy Kumer" className="h-full object-cover hover:scale-110 ease-in duration-200 transition-transform cursor-pointer" />
            </div>
        </div>

        <div className="background wrapper flex gap-8">
            <div className="flex flex-col items-center justify-center gap-8 h-full w-full bg-white py-16 rounded-2xl group">
                <div>
                    <div className="bg-orange-300 h-12 w-12 rounded-tl-3xl rounded-br-3xl group-hover:bg-orange-400 group-hover:rotate-[-15deg] transition-all duration-300 ease-in" />
                    <div className="bg-orange-400 h-12 w-12 rounded-tl-3xl rounded-br-3xl -mt-8 ml-4 group-hover:bg-orange-300 group-hover:rotate-[15deg] transition-all duration-300 ease-in" />
                </div>
                <h2 className="font-semibold text-16">UI/UX Design</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 h-full w-full bg-white py-16 rounded-2xl group">
                <div>
                    <div className="bg-red-300 h-12 w-12 rounded-bl-full rounded-br-full group-hover:bg-red-400 group-hover:rotate-[-15deg] transition-all duration-300 ease-in" />
                    <div className="bg-red-400 h-12 w-12 rounded-tl-full rounded-tr-full -mt-8 ml-4 group-hover:bg-red-300 group-hover:rotate-[15deg] transition-all duration-300 ease-in" />
                </div>
                <h2 className="font-semibold text-16">Web Design</h2>
            </div>
        </div>
    </div>
    
  )
}

export default TopSection;