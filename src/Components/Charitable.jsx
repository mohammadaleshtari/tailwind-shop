const Charitable = () => {
  return (
    <div className="text-left desktop:w-[70%] mobile:w-[50%] mx-auto mb-[100px] mt-[200px]">
      <h2 className="text-[#fd4444] font-roboto text-[22px] mobile:text-[31px] font-normal mb-[20px] mt-16 mobile:mt-20">
        Golestan Pistachios
      </h2>
      <h3 className="text-[#898989] mobile:text-[16px] desktop:text-[20px] font-light leading-relaxed">
        Golestan has been involved in charity work and some of its charitable
        activities include but not limited to, the construction of a hospital, a
        charity and a number of schools and educational centers.
      </h3>
      <button
        className="mt-[20px] font-roboto text-[14px] font-light leading-[14px] text-[#7c7d7e] bg-[#ffffff] border border-gray-300 rounded-[8px] px-4 py-2 hover:text-[#ffffff] hover:bg-[#FF0000] transition duration-300"
        aria-label="Read more about Golestan Pistachios charitable activities"
      >
        Read more
      </button>
    </div>
  );
};

export default Charitable;
