const Social = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-full h-[50vh] bg-[#105153]">
        <p className="font-sans font-thin text-[#009da2] text-[33px] pt-[25px] pb-[10px]">
          Golestan
        </p>
        <p className="font-sans font-thin text-[#009da2] text-[23px]">
          Social Responsibility
        </p>
      </div>

      <hr className="h-[2px] bg-[#07787c] border-none" />

      <div className="w-full h-[45vh] bg-[#105153] flex justify-center items-center">
        <div className="w-[80%] mobile:w-[60%] desktop:w-[30%] text-center">
          <img
            className="w-full h-auto"
            src="/picture/csr-pic1.jpg"
            alt="Golestan Social Responsibility"
          />
        </div>
      </div>

      <div className="w-full h-[20px] bg-[#e9d69f]"></div>
    </section>
  );
};

export default Social;
