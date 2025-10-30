import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import Appcard from "../Components/Appcard";
import Container from "../Components/Container";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  return (
    <Container>
      <div>
        <div className="max-w-2xl mx-auto flex flex-col items-center my-10">
          <h1 className="text-4xl font-semibold">Our All Applications</h1>
          <p>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">
            ({searchedApps.length}) Apps Found
          </span>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-4">
          {searchedApps.map((apps) => (
            <Appcard key={apps.id} apps={apps}></Appcard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Apps;
