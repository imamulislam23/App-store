import React from "react";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import Appcard from "../Components/Appcard";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import { Link } from "react-router";

const Home = () => {
  const { apps, loading, error } = useApps();
  const Homeapps = apps.slice(0, 8);
  return (
    <div className="py-16">
      <Container>
        <div>
          <div className="text-4xl text-center">
            We Build{" "}
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </div>
          <div className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </div>
        </div>

        <div className="flex justify-center gap-x-2 mb-4 mt-4">
          <div className="btn items-center">
            <IoLogoGooglePlaystore />
            <p>Google Play</p>
          </div>
          <div className="btn items-center">
            <div>
              <FaAppStoreIos />
            </div>
            <p>App Store</p>
          </div>
        </div>

        <div className="mx-auto flex justify-center">
          <img src={`/public/assets/hero.png`} alt="" />
        </div>
      </Container>

      <div>
        <section class="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  py-16 px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto text-center">
            <h2 class="text-4xl sm:text-5xl font-extrabold text-white mb-12">
              Trusted By Millions, Built For You
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="flex flex-col items-center">
                <p class="text-white text-xl uppercase tracking-wider font-semibold mb-3">
                  Total Downloads
                </p>
                <p class="text-7xl sm:text-8xl font-bold text-white mb-2">
                  29.6M
                </p>
                <p class="text-custom-light-purple text-lg">
                  21% More Than Last Month
                </p>
              </div>

              <div class="flex flex-col items-center">
                <p class="text-white text-xl uppercase tracking-wider font-semibold mb-3">
                  Total Reviews
                </p>
                <p class="text-7xl sm:text-8xl font-bold text-white mb-2">
                  906K
                </p>
                <p class="text-custom-light-purple text-lg">
                  46% More Than Last Month
                </p>
              </div>

              <div class="flex flex-col items-center">
                <p class="text-white text-xl uppercase tracking-wider font-semibold mb-3">
                  Active Apps
                </p>
                <p class="text-7xl sm:text-8xl font-bold text-white mb-2">
                  132+
                </p>
                <p class="text-custom-light-purple text-lg">
                  31 More WiFi Launch
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Container>
        <div className="max-w-2xl mx-auto flex flex-col items-center my-4">
          <h1 className="text-4xl font-semibold">Trending Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {Homeapps.map((apps) => (
            <Appcard key={apps.id} apps={apps}></Appcard>
          ))}
        </div>
        <div className="flex justify-center mx-auto my-4">
          <Link to="/Apps">
            <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
              Show All
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
