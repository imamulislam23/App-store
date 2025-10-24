import React from "react";
import Container from "../Components/Container";
import useApps from "../Hooks/useApps";
import Appcard from "../Components/Appcard";

const Home = () => {
  const { apps, loading, error } = useApps();
  const Homeapps = apps.slice(0, 8);
  return (
    <div>
      <Container>
        <div>
          <div>We Build Productive Apps</div>
          <div>
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </div>
        </div>

        <div>
          <div>Google Play</div>
          <div>App Store</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {Homeapps.map((apps) => (
            <Appcard key={apps.id} apps={apps}></Appcard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
