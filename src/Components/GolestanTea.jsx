const GolestanTea = () => {
  return (
    <div className="text-left desktop:w-[70%] mobile:w-[50%] mx-auto mb-[100px]">
      <h2 className="text-[#fd4444] font-roboto text-[22px] mobile:text-[31px] font-normal mb-[20px] mt-16 mobile:mt-20">
        Golestan Tea
      </h2>
      <h3 className="text-[#898989] mobile:text-[16px] desktop:text-[20px] font-light leading-relaxed">
        Sourced from the best tea estates on the banks of Brahmaputra River in
        Assam and Darjeeling, India, Golestan teas possess the smell and taste
        of traditional Indian teas.
      </h3>
      <button className="mt-[20px] font-Roboto text-[14px] font-light leading-[14px] text-[#7c7d7e] bg-[#ffffff] border border-gray-300 rounded-[8px] w-[116px] h-[40px] hover:text-[#ffffff] hover:bg-[#FF0000] transition duration-300">
        Read more
      </button>
    </div>
  );
};

export default GolestanTea;
