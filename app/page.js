"use client";
import React, { useState } from "react";

function ImageFilter() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterableData = [
    {
      name: "nature",
      src:
        "https://img.freepik.com/free-vector/landscape-man-canoe-river_24877-76260.jpg?w=740&t=st=1694446052~exp=1694446652~hmac=4fc7e9ca0518e8e388fa624cd489f6c10b78a64af4282e4dd655cc634ab2d8b9",
      title: "Mountains",
      text: "Lorem ipsum dolor.."
    },
    {
      name: "cars",
      src:
        "https://img.freepik.com/free-vector/modern-blue-urban-adventure-suv-vehicle-illustration_1344-205.jpg?w=740&t=st=1694446118~exp=1694446718~hmac=0a6e41b6fae424827675b4812511df7be26f56b27431f4ddf468905143affd05",
      title: "BMW",
      text: "Lorem ipsum dolor.."
    },
    {
      name: "people",
      src:
        "https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?w=740&t=st=1694447776~exp=1694448376~hmac=ba75301c83a4c9e8d013881f9915db30d081f8c02cc3cb7b7b79b7ca8cc068f4",
      title: "Person 1",
      text: "Lorem ipsum dolor.."
    }
    // Add more data for other images/cards
  ];

  const handleFilterClick = filter => {
    setActiveFilter(filter);
  };

  return (
    <div className="image-filter-container">
      <div className="filter-buttons" id="filter-buttons">
        {["all", "cars", "nature", "people"].map(filter =>
          <button
            key={filter}
            className={`btn-filter ${activeFilter === filter
              ? "active-filter"
              : ""}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter === "all" ? "Show all" : filter}
          </button>
        )}
      </div>
      <div className="filterable-cards" id="filterable-cards">
        {filterableData.map((item, index) =>
          <div
            key={index}
            className={`card-filter ${activeFilter === "all" ||
            activeFilter === item.name
              ? ""
              : "hide"}`}
          >
            <img src={item.src} alt={item.title} />
            <div>
              <h6>
                {item.title}
              </h6>
              <p>
                {item.text}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageFilter;
