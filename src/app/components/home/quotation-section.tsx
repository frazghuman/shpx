import React from "react";

const QuotationSection: React.FC = () => {
    return (
      <section className="lg:px-[93px] px-[23px] py-[46px]" >
        <div className="bg-red-50 self-center flex w-full flex-col mt-40 mb-24 rounded-none border-radius-tr max-md:max-w-full max-md:my-10">
          <div className="bg-red-50 self-stretch flex grow flex-col pt-28 pb-20 px-5 rounded-none border-radius-tr max-md:max-w-full">
            <h2 className="justify-center text-neutral-600 text-6xl leading-[150%] max-w-[790px] md:ml-16 ml-5 md:pr-0 pr-2 max-md:max-w-full max-md:text-4xl">
              Get your quotation today
            </h2>
            <div className="flex flex-col md:flex-row w-[458px] max-w-full items-start justify-between gap-5 md:ml-20 ml-5 mt-7 max-md:flex-wrap">
              <div className="lg:w-[214px] w-[175px] bg-neutral-600 flex flex-col flex-1">
                <div className="justify-center text-white text-center md:text-2xl text-base font-medium leading-[150%] bg-neutral-600 self-stretch w-full grow px-5 py-6">
                  Quote me
                </div>
              </div>
              <div className="lg:w-[214px] w-[175px] bg-white flex flex-col flex-1">
                <div className="justify-center text-neutral-600 text-center md:text-2xl text-base font-medium leading-[150%] bg-white self-stretch w-full grow px-5 py-6">
                  Contact Sales
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default QuotationSection;