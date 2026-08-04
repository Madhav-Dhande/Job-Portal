import {
  FaCode,
  FaChartLine,
  FaUserTie,
  FaLaptopCode,
  FaHospital,
  FaUniversity,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";

import "./Categories.css";

const categories = [
  { name: "Software", jobs: "250 Jobs", icon: <FaCode /> },
  { name: "Marketing", jobs: "120 Jobs", icon: <FaBullhorn /> },
  { name: "Finance", jobs: "180 Jobs", icon: <FaChartLine /> },
  { name: "HR", jobs: "90 Jobs", icon: <FaUserTie /> },
  { name: "Web Development", jobs: "200 Jobs", icon: <FaLaptopCode /> },
  { name: "Healthcare", jobs: "150 Jobs", icon: <FaHospital /> },
  { name: "Education", jobs: "75 Jobs", icon: <FaUniversity /> },
  { name: "UI/UX Design", jobs: "60 Jobs", icon: <FaPaintBrush /> },
];

const Categories = () => {
  return (
    <section className="categories py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2>Popular Categories</h2>
          <p>Browse jobs by category</p>
        </div>

        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="category-card text-center shadow-sm">
                <div className="icon">{category.icon}</div>

                <h5>{category.name}</h5>

                <p>{category.jobs}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;