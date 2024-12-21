import React from "react";
import { motion } from "framer-motion";

const FeaturedReviewsCard = () => {
  const reviews = [
    {
      name: "Alicent Hightower",
      date: "20 January 2023",
      consultation: "Consulted for Skin care",
      rating: 5,
      img:"https://photosly.in/wp-content/uploads/2024/08/cute-girl-pic10.jpg",
      feedback:
        "Might be a bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
    },
    {
      name: "narayan borwankre",
      date: "22 june 2023",
      consultation: "Consulted for Pregnancy",
      rating: 5,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Eq0lvKZpOFuaLytUjwJiLjLe2QWl1ZsvKA&s",
      feedback:
        "Might be a bit early to confirm but yes I can see noticeable difference. Will write again after using it for longer periods.",
    },
  ];

  return (
    <motion.div
      className="p-4 bg-green-50 rounded-lg  shadow-md border border-gray-200 mt-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold text-gray-800">
        Featured Reviews (102)
      </h2>
      <div className="mt-4 space-y-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-600">{review.consultation}</p>
                </div>
              </div>
              <p className="text-xs text-gray-600">{review.date}</p>
            </div>
            <div className="mt-2 flex items-center">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">{review.feedback}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export  default FeaturedReviewsCard;
