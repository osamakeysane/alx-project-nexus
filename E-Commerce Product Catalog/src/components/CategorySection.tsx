import manCategory from "../assets/images/men.jpg";
import woMenCategory from "../assets/images/woman.jpeg";
import kidsCategory from "../assets/images/kids.jpg";

const categories = [
  {
    title: "men",
    imageUrl: manCategory,
  },
  {
    title: "women",
    imageUrl: woMenCategory,
  },
  {
    title: "kids",
    imageUrl: kidsCategory,
  },
];
const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={category.imageUrl}
            alt="note"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
