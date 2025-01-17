
import Typewriter from "typewriter-effect";

const bStyle ={
    background: "linear-gradient(115deg, #120930, #4c858a)"
}

const HowItWorks = () => {
    return (
<section style={bStyle}  class="py-14 relative ">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                <div class="w-full flex-col justify-start items-center gap-2 flex"><p className="mt-0 my-1 text-red-200">Apply Process</p>
                    <h2 class="w-full text-center text-slate-50 text-4xl font-bold font-manrope leading-normal">How It Works</h2>
                    <p className='text-sky-500' >
                <Typewriter
                      options={{
                        strings: 'A detailed breakdown of processes and mechanisms behind a system or product, <br/>simplifying complex concepts for easy understanding.',
                        autoStart: true,
                        loop: true,
                      }}/>
                   
                      </p>
                </div>
                <div class="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                    <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3 class="self-stretch text-center text-sky-400 text-4xl font-extrabold font-manrope leading-normal">1</h3>
                            <h4 class="self-stretch text-center text-slate-50  text-xl font-semibold leading-8">Search a Job</h4>
                        </div>
                        <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">Enter the job title or keywords related to the position you’re looking for. You can also include the location..</p>
                    </div>
                    <svg class="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3 class="self-stretch text-center text-sky-400 text-4xl font-extrabold font-manrope leading-normal">2</h3>
                            <h4 class="self-stretch text-center text-slate-50  text-xl font-semibold leading-8">Apply for Job</h4>
                        </div>
                        <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">Carefully review the responsibilities and qualifications to ensure you meet the requirements...</p>
                    </div>
                    <svg class="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div class="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3 class="self-stretch text-center text-sky-400 text-4xl font-extrabold font-manrope leading-normal">3</h3>
                            <h4 class="self-stretch text-center text-slate-50  text-xl font-semibold leading-8">Get Your Job</h4>
                        </div>
                        <p class="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">Practice common interview questions and prepare your own questions to ask...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HowItWorks;