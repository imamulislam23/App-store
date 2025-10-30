import React, { useState } from "react";
import { loadInstalled, removeFromInstalled } from "../Utils/Utils";
import Container from "../Components/Container";

const Installed = () => {
  const [installedlist, setInstalled] = useState(() => loadInstalled());
  const [sortOrder, setSortOrder] = useState("none");

  const sorted = (() => {
    if (sortOrder === "price-asc") {
      return [...installedlist].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "price-desc") {
      return [...installedlist].sort((a, b) => b.size - a.size);
    } else {
      return installedlist;
    }
  })();

  const handleuninstalled = (id) => {
    removeFromInstalled(id);
    setInstalled((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <div>
        <div className="max-w-2xl mx-auto flex flex-col items-center my-10">
          <h1 className="text-4xl font-semibold">Your Installed Apps</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">{sorted.length} Apps Found</span>
          <label className="form-control w-full max-w-xs">
            <select
              className="select "
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Size</option>
              <option value="price-asc">Low-&gt;High</option>
              <option value="price-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>

        <div>
          {sorted.map((p) => (
            <div
              className="card flex flex-row justify-between bg-base-100 shadow-sm my-2 px-2"
              key={p.id}
            >
              <div className="flex justify-between items-center">
                <div>
                  <img src={p.image} className="h-10 w-10" alt="" />
                </div>
                <div className="flex flex-col px-2">
                  <div>{p.title}</div>
                  <div className="flex justify-between gap-x-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <img
                          src="/public/assets/icon-downloads.png"
                          className="h-4 w-4"
                          alt=""
                        />
                      </div>
                      <div>{p.downloads}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <img
                          src="/public/assets/icon-ratings.png"
                          className="h-4 w-4"
                          alt=""
                        />
                      </div>
                      <div>{p.ratingAvg}</div>
                    </div>
                    <div> {p.size}</div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleuninstalled(p.id)}
                  className="btn text-white bg-[#00D390] "
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Installed;
