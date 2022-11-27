import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { NewDestinations } from "../../Components/hotelCatagory/kathmandu/Kathmandu.style";
import Search from "../../Components/search/Search";
import { AiFillCaretDown, AiFillStar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { DestinationCatagory } from "../../Components/PopularDestination/PopularDestination.style";

function DestinationPage() {
  const [hotel, setHotel] = useState([]);
  const [city, setCity] = useState([]);
  const [place, setPlace] = useState("nepal");

  //fetching hotel data using usestate
  useEffect(() => {
    KathmanduHotel();
  }, [place]);
  const KathmanduHotel = () => {
    fetch("./json/recommended.json")
      .then((res) => res.json())
      .then((data) => setHotel(data))
      .catch((err) => console.log(err.message));
  };

  // filter hotel by location and city name
  useEffect(() => {
    setCity(() => {
      return filterdCity;
    });
  }, [place]);
  const filterdCity = hotel.filter((el) => {
    return el.city.toLocaleLowerCase() === place.toLocaleLowerCase();
  });

  // Destination catagory data
  const destinationName = [
    {
      place: "Kathmandu",
      accommodations: "1,570 accommodations",
      image: "./images/kathmandu.jpg",
    },
    {
      place: "Pokhara",
      accommodations: "1,585 accommodations",
      image: "./images/pokhara.jpg",
    },
    {
      place: "Chitwan",
      accommodations: "1,000 accommodations",
      image: "./images/chitwan.jpg",
    },
    {
      place: "Nagarkot",
      accommodations: "1,570 accommodations",
      image: "./images/nagarkot.jpg",
    },
  ];
  // using useref hook for checkbox
  const inputRef = useRef({
    "4star": "",
    "5star": "",
    "3star": "",
    "2star": "",
    "1star": "",
  });
  for (let key in inputRef.current) {
    inputRef.current[key].addEventListener("change");
  }
  useEffect(() => {
    console.log(inputRef.current);
  }, []);
  return (
    <NewDestinations>
      <Search />
      <DestinationCatagory style={{ margin: "100px 0" }}>
        {destinationName.map((elm, index) => {
          const { image, place, accommodations } = elm;
          return (
            <div className="destination" key={index}>
              <Link
                className="image"
                onClick={(el) => setPlace(el.target.dataset.name)}
              >
                <img src={image} alt="" data-name={place} />
              </Link>

              <div className="name">{place}</div>
              <div className="accommodation">{accommodations}</div>
            </div>
          );
        })}
      </DestinationCatagory>
      <h2 style={{ margin: "40px 0" }}>{`${
        city.length !== 0 ? city.length : hotel.length
      } best hotel in ${place}`}</h2>
      <div className="content">
        <div className="filters">
          <div className="star-filter">
            <h4>Star Ratings</h4>
            <div>
              <input
                type="checkbox"
                name="5"
                ref={(el) => (inputRef.current["5star"] = el)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCity((city) =>
                      city.filter((el) => el.star.toString() === e.target.name)
                    );
                  } else {
                    setCity(filterdCity);
                  }
                }}
              />
              <span>5 star</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="4"
                ref={(el) => (inputRef.current["4star"] = el)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCity((city) =>
                      city.filter((el) => el.star.toString() === e.target.name)
                    );
                  } else {
                    setCity(filterdCity);
                  }
                }}
              />
              <span>4 star</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="3"
                ref={(el) => (inputRef.current["3star"] = el)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCity((city) =>
                      city.filter((el) => el.star.toString() === e.target.name)
                    );
                  } else {
                    setCity(filterdCity);
                  }
                }}
              />
              <span>3 star</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="2"
                ref={(el) => (inputRef.current["2star"] = el)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCity((city) =>
                      city.filter((el) => el.star.toString() === e.target.name)
                    );
                  } else {
                    setCity(filterdCity);
                  }
                }}
              />
              <span>2 star</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="1"
                ref={(el) => (inputRef.current["1star"] = el)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCity((city) =>
                      city.filter((el) => el.star.toString() === e.target.name)
                    );
                  } else {
                    setCity(filterdCity);
                  }
                }}
              />
              <span>1 star</span>
            </div>
          </div>
          {/* review score */}
          <div className="reviewScore">
            <h4>Review Score</h4>
            <div>
              <input type="checkbox" name="exceptional" id="" />
              <span>Exceptional 9+ </span>
            </div>
            <div>
              <input type="checkbox" name="exceptional" id="" />
              <span>Very Good 8+ </span>
            </div>
            <div>
              <input type="checkbox" name="exceptional" id="" />
              <span>Good 7+ </span>
            </div>
            <div>
              <input type="checkbox" name="exceptional" id="" />
              <span>Pleasant 6+ </span>
            </div>
          </div>
        </div>

        <div className="hotelList">
          {city.length != 0
            ? city.map((elm) => {
                const {
                  HotelName,
                  location,
                  comment,
                  ratings,
                  // discout,
                  RealPrice,
                  ratingCount,
                  reviewType,
                  image,
                  id,
                } = elm;
                return (
                  <div key={id} className="card">
                    <Link to="/" className="image">
                      <img src={image} alt="" />
                    </Link>

                    {/* middle content of this card */}
                    <div className="details">
                      <h3 className="name">{HotelName}</h3>
                      <div className="ratings-star">
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <Link to="" className="location-link">
                          <HiLocationMarker
                            style={{
                              color: "var(--clr-primary)",
                              fontSize: "25px",
                            }}
                          />
                          <span>{location}</span>
                        </Link>
                      </div>
                      <div className="comment">
                        <span>{`" ${comment} "`}</span>
                        <button>
                          Show more <AiFillCaretDown />
                        </button>
                      </div>
                    </div>

                    {/* right side content of this card */}
                    <div className="card-right">
                      <div className="reviews">
                        <span>{reviewType}</span>
                        <span>{ratingCount}</span>
                      </div>
                      <span className="ratingStats">{ratings}</span>
                      <div className="hotel-rate">
                        <h4>Avg price per night</h4>
                        <p className="price">{RealPrice}</p>
                        <button>Check availability</button>
                      </div>
                    </div>
                  </div>
                );
              })
            : hotel.map((elm) => {
                const {
                  HotelName,
                  location,
                  comment,
                  ratings,
                  // discout,
                  RealPrice,
                  ratingCount,
                  reviewType,
                  image,
                  id,
                } = elm;
                return (
                  <div key={id} className="card">
                    <Link to="/" className="image">
                      <img src={image} alt="" />
                    </Link>

                    {/* middle content of this card */}
                    <div className="details">
                      <h3 className="name">{HotelName}</h3>
                      <div className="ratings-star">
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <AiFillStar style={{ color: "var(--ratings-color)" }} />
                        <Link to="" className="location-link">
                          <HiLocationMarker
                            style={{
                              color: "var(--clr-primary)",
                              fontSize: "25px",
                            }}
                          />
                          <span>{location}</span>
                        </Link>
                      </div>
                      <div className="comment">
                        <span>{`" ${comment} "`}</span>
                        <button>
                          Show more <AiFillCaretDown />
                        </button>
                      </div>
                    </div>

                    {/* right side content of this card */}
                    <div className="card-right">
                      <div className="reviews">
                        <span>{reviewType}</span>
                        <span>{ratingCount}</span>
                      </div>
                      <span className="ratingStats">{ratings}</span>
                      <div className="hotel-rate">
                        <h4>Avg price per night</h4>
                        <p className="price">{RealPrice}</p>
                        <button>Check availability</button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </NewDestinations>
  );
}

export default DestinationPage;
