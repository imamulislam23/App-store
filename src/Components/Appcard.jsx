import React from "react";
import { Link } from "react-router";

const Appcard = ({ apps }) => {
  return (
    <div>
      <Link to={`/apps/${apps.id}`}>
        <div className="rounded-2xl shadow-2xl p-2">
          <div>
            <img
              src={apps.image}
              className="h-40 w-full object-center"
              alt=""
            />
          </div>
          <div className="font-bold">{apps.title}</div>
          <div className="flex justify-between">
            <div className="flex justify-between items-center">
              <div>
                <img
                  src="/public/assets/icon-downloads.png"
                  className="h-4 w-4"
                  alt=""
                />
              </div>
              <div>{apps.downloads}</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <img
                  src="/public/assets/icon-ratings.png"
                  className="h-4 w-4"
                  alt=""
                />
              </div>
              <div>{apps.ratingAvg}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Appcard;
