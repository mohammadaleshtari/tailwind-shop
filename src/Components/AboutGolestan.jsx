const AboutGolestan = () => {
  return (
    <section className="mt-[50px]">
      <div className="text-left desktop:w-[70%] mobile:w-[50%] mx-auto mb-[100px]">
        <h2 className="text-[#fd4444] font-roboto text-[22px] mobile:text-[31px] font-normal mb-[20px] mt-16 mobile:mt-20">
          About Golestan
        </h2>
        <h3 className="text-[#898989] mobile:text-[16px] desktop:text-[20px] font-light leading-relaxed">
          With a history of more than 71 years, Golestan is presently one of the
          largest food companies in Iran. It blends, packs and sells teas as
          well as a wide variety of other types of food products, including
          rice, spices, pistachios, saffron and so forth. The company has 20
          main groups of food and 550 sub-food items altogether.
        </h3>
      </div>

      <div className="mt-[70px] mb-[170px] flex flex-col items-center desktop:flex-row desktop:justify-center">
        {["Employees", "Retailers", "Products", "Consumers"].map(
          (item, index) => (
            <div key={index} className={`mx-[15px] text-center`}>
              <img
                src={`./picture/statistics-icon-${4 - index}.png`}
                alt={item}
              />
              <p className="pt-[8px] pb-[8px] text-[#afa7a7] font-Roboto font-medium">
                {item}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AboutGolestan;
