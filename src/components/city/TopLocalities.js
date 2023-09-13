import React, { useState, useEffect } from "react";
import locationImg from "../media/sample-image.png";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MICROLOCATIONS } from "../../service/MicrolocationService";

function TopLocalities({ cityName, myCity }) {
  const city = cityName;
  const { loading, error, data } = useQuery(GET_MICROLOCATIONS, {
    variables: { city },
  });

  const [microlocations, setMicrolocations] = useState([]);
  useEffect(() => {
    if (data) {
      setMicrolocations(data.microlocations);
    }
  }, [data]);
  return (
    <div className="mt100 localities_main">
      <div className="container">
        <div className="row section_row">
          <h2 className="heading">
            Top Localities in <span className="primary_color">{cityName}</span>
          </h2>
          <p className="heading_text">
            Find Your Home In The City Of Your Choice
          </p>
          {microlocations?.slice(0, 8)?.map((microlocation, i) => {
            return (
              <div className="col-12 col-sm-6 col-md-3 mt30" key={i}>
                <Link
                  to={`/${myCity}/${microlocation.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                >
                  <div className="localities_card">
                    <div className="img">
                      <img
                        src={locationImg}
                        alt="location name"
                        className="img-fluid"
                      />
                    </div>
                    <div className="localities_card_overlay">
                      <div className="overlay_text">
                        <h3>{microlocation.name}</h3>
                        <p>12000+ Properties</p>
                      </div>
                    </div>
                    <div className="overlay2"></div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopLocalities;
