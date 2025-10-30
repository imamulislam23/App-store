import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { updateList } from "../Utils/Utils";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((p) => p.id === Number(id));

  const [installed, setInstalled] = useState(false);
  const handleInstall = () => {
    updateList(app);
    setInstalled(true);
  };

  const { image } = app || {};
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="" />
          <button onClick={handleInstall}>
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
