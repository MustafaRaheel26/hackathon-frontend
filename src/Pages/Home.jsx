import React from "react";
import PrimaryBtn from "../Components/PrimaryBtn";

const Home = () => {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-[85vh] bg-gradient-to-r from-blue-500 to-indigo-600 text-white body-font pt-20">
        <div className="w-full md:w-1/2 flex flex-col gap-5 px-6">
          <h1 className="text-2xl font-medium text-white uppercase">Social Welfare Services</h1>
          <h2 className="text-4xl font-extrabold text-white font-mono leading-snug mb-5">
            Microfinance (Apna Karobaar)
          </h2>
          <p className="text-lg text-white mb-8">
            Your loan can be the bridge to someone's brighter future. It offers
            hope where it's needed most, creating opportunities. A small act of
            kindness can spark life-changing growth. Together, we can transform
            lives, one loan at a time.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4 items-center justify-start">
            <PrimaryBtn
              routLink="loan-form"
              BtnText="Apply for Loan"
              additinalClasses="duration-300 hover:scale-105 hover:bg-green-700 bg-customGreen"
            />
            <PrimaryBtn
              BtnText="Learn More"
              additinalClasses="duration-300 hover:scale-105 hover:bg-green-700 bg-blue-700"
            />
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10">
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeodTJJnIyz_f9VZ1B-Y12_FSMpzvhHtZMw&s" // Replace with an actual image URL of Saylani Welfare
            alt="Saylani Welfare Banner"
          />
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Empowering Communities through Microfinance
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Our microfinance initiative is dedicated to empowering individuals by providing them the financial resources they need to start their businesses, improve their lives, and contribute to the community.
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <img
                className="w-full h-40 object-cover rounded-md mb-4 transition duration-500 transform hover:scale-105"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJKtQOp70vYunTg3ngLldekkY5Ro467_u9s3G2ypyPML1jR2ztubQa3E0DnjGmbgtghc&usqp=CAU" // Replace with an actual image URL of Saylani Welfare
                alt="Saylani Welfare Microfinance"
              />
              <h4 className="text-xl font-semibold text-blue-700 mb-2 transition duration-300 transform hover:text-blue-900">
                Supporting Small Businesses
              </h4>
              <p className="text-gray-600 transition duration-300 transform hover:text-gray-800">
                We offer microloans to individuals looking to start or grow their small businesses, providing them the chance to succeed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <img
                className="w-full h-40 object-cover rounded-md mb-4 transition duration-500 transform hover:scale-105"
                src="data:image/jpeg;base64,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" // Replace with an actual image URL of Saylani Welfare
                alt="Saylani Welfare Education"
              />
              <h4 className="text-xl font-semibold text-blue-700 mb-2 transition duration-300 transform hover:text-blue-900">
                Education & Skill Development
              </h4>
              <p className="text-gray-600 transition duration-300 transform hover:text-gray-800">
                Education is the key to breaking the cycle of poverty. We provide loans for education and skill development programs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <img
                className="w-full h-40 object-cover rounded-md mb-4 transition duration-500 transform hover:scale-105"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJKtQOp70vYunTg3ngLldekkY5Ro467_u9s3G2ypyPML1jR2ztubQa3E0DnjGmbgtghc&usqp=CAU" // Replace with an actual image URL of Saylani Welfare
                alt="Saylani Welfare Healthcare"
              />
              <h4 className="text-xl font-semibold text-blue-700 mb-2 transition duration-300 transform hover:text-blue-900">
                Affordable Healthcare
              </h4>
              <p className="text-gray-600 transition duration-300 transform hover:text-gray-800">
                We offer healthcare loans to ensure that individuals in need can receive essential medical treatment without financial burdens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-2xl font-bold mb-6">Join Us in Making a Difference</h3>
          <p className="text-lg mb-8">
            Your support can help bring about positive change in the lives of many. Contribute to our mission of empowering individuals through microfinance.
          </p>
          <PrimaryBtn
            routLink="donate"
            BtnText="Donate Now"
            additinalClasses="duration-300 hover:scale-105 hover:bg-blue-800 bg-blue-600"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
