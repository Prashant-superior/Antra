{/* <IconSkipForward className="text-gray-600" />

const IconSkipForward = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <polygon points="5 4 15 12 5 20 5 4"></polygon>
      <line x1="19" y1="5" x2="19" y2="19"></line>
    </svg>
  );

<a href="#_" class="relative px-6 py-3 font-bold text-black group">
<span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
<span class="relative">Button Text</span>
</a>





export default function Option({ title, description,col1,col2 }) {

    return (
        <>
            <button class={`text-black hover:before:bg-black  relative h-[50px] w-40 overflow-hidden border border-black border-r-0 bg-white px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full`}><span class="relative z-10">Swipe</span></button>
            <button class={`text-pink-500 hover:text-white relative h-[50px] w-40 overflow-hidden border border-pink-500 border-l-0 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-pink-500 before:transition-all before:duration-500 hover:shadow-pink-500 hover:before:left-auto hover:before:left-0 hover:before:w-full`}>
                <span class="relative z-10">Swipe</span>
            </button>

        </>
    )


} */}


import Option from "./Option";

const Trial =()=>{
    return (
        <>
            <Option title="Option 1"   col1="red" col2="blue"/>
            <Option title="Option 2"  col1="red" col2="blue" />
            <Option title="Option 3"   col1="red" col2="blue" />
        </>
    )
}

export default Trial;