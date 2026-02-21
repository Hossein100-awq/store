import React from "react";

export default function ProductCard({ item, onAddToCart = () => {}, className = "" }) {
  const { title, description, image, price, rating } = item || {};
  const shortDesc = description
    ? description.slice(0, 110) + (description.length > 110 ? "…" : "")
    : "";

  return (
    <div
      className={`group relative w-full max-w-sm bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl h-44 mb-5 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-36 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2 mb-2">
            {title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
            {shortDesc}
          </p>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-gray-900">
                ${price}
              </span>

              {rating && (
                <div className="flex items-center gap-1 text-sm text-amber-500 font-medium">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.493 2.62c-.785.57-1.84-.197-1.54-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.51 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                  {rating.rate}
                </div>
              )}
            </div>

            <button
              onClick={() => onAddToCart(item)}
              className="w-full py-2.5 rounded-xl bg-amber-600 text-white font-medium text-sm tracking-wide shadow-md hover:bg-amber-700 active:scale-95 transition-all duration-300"
            >
              بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}