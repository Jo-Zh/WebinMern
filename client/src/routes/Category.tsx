import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
// import "./base.css";

const Category = ({ data }: CategoryProps) => {
  return (
    <div className="container vh-100">
      <h1 className="text-warning">This is Home</h1>
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};
interface CategoryProps {
  data: {
    id: number;
    title: string;
    slug: string;
    price: number;
    category: string;
  }[];
}
export default Category;
