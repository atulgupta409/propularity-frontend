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
          <p className="heading_text mob_hide">
            Find Your Home In The City Of Your Choice
          </p>
          {microlocations?.slice(0, 8)?.map((microlocation, i) => {
            return (
              <div className="col-6 col-md-3 mt30" key={i}>
                <Link
                  to={`/${myCity}/${microlocation.name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                >
                  <div className="localities_card">
                    <div className="img">
                      <img
                        src={microlocation.image || locationImg}
                        alt="location name"
                        className="img-fluid"
                      />
                    </div>
                    <div className="localities_card_overlay city_localities">
                      <div className="overlay_text city_overlay_text mb-4">
                        <h3>{microlocation.name}</h3>
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
