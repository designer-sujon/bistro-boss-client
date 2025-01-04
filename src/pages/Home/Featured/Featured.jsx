import React from "react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-200">
      <SectionTitle
        subHeading="Check it Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center py-8 px-16 gap-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get Some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            cumque reiciendis itaque saepe vel cupiditate nostrum? Suscipit,
            eligendi nostrum amet rem consequuntur laboriosam adipisci facere
            est repellat, eveniet laborum reiciendis?
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
