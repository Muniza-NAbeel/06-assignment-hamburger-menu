export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:items-stretch md:flex-wrap lg:flex-row lg:w-full">
        <div className="bg-red-500 text-white h-[160px] md:h-80 w-full lg:h-80 lg:flex-1">
          Muniza Nabeel, Web Developer.
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-full lg:flex-1 lg:flex-row lg:w-auto">
        <div className="bg-blue-500 text-white w-full h-40 md:h-80 lg:h-80 lg:flex-1">
          Muniza Nabeel, Web Developer.
        </div>
        <div className="bg-green-500 text-white w-full h-40 md:h-80 lg:h-80 lg:flex-1">
          Muniza Nabeel, Web Developer.
        </div>
        </div>
      </div>
    </>
  );
}
