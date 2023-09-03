import React, { useState } from "react";
import lady from "../assets/lady.png";
import tico from "../assets/articles/tico_rose.jpg";
import veste from "../assets/articles/vest_rose.jpg";
import robe from "../assets/articles/robe_move.jpg";
import emsemble from "../assets/articles/ensemble_short.jpg";
import "./style.css";

function Navbar() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      img: robe,
      title: "summer dress",
      color: "purple",
      quantity: 1,
      size: "S",
      price: 10,
    },
    {
      id: 2,
      img: tico,
      title: "Transparent Shirt",
      color: "Pink",
      quantity: 1,
      size: "M",
      price: 20,
    },
    {
      id: 3,
      img: veste,
      title: "professional jacket",
      color: "Pink",
      quantity: 1,
      size: "M",
      price: 40,
    },
    {
      id: 4,
      img: emsemble,
      title: "Half sleeve cardigan",
      color: "beige",
      quantity: 1,
      size: "S",
      price: 25,
    },
  ]);

  const totalPrice = articles.reduce(
    (total, items) => (total += items.price * items.quantity),
    0
  );
  function decrement(id) {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? {
              ...article,
              quantity: Math.max(1, article.quantity - 1),
            }
          : article
      )
    );
  }

  function increment(id) {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? {
              ...article,
              quantity: article.quantity + 1,
            }
          : article
      )
    );
  }
  function deleteArticle(id) {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
  }
  return (
    <>
      <nav className="max-w-6xl  p-5 bg-trasparent border-gray-200 flex flex-wrap items-center justify-between ">
        <div className="">
          {/* logo */}
          <a
            href="https://www.instagram.com/elegantlady.only/"
            className="flex items-center"
          >
            <img src={lady} className="h-8 mr-3" alt="Elegant Lady logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Elegant Lady
            </span>
          </a>
        </div>

        <button
          className=""
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <svg
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z"
              fill="black"
            />
          </svg>
        </button>
        {/* <!-- Drawer component --> */}
        <div
          id="drawer-right-example"
          class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-gray-200 w-96"
          tabindex="-1"
          aria-labelledby="drawer-right-label"
        >
          {/* <!-- Drawer Header --> */}
          <div class="flex items-center justify-between mb-8">
            <h5
              id="drawer-right-label"
              class="text-base font-semibold text-black"
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                class=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.96360 16.9995 9.92854 16.9989 9.89349C16.9978 9.82900 16.9957 9.73670 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.9170 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.87110 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.03320 9.06001 7.01674 9.38848 7.00845 9.62056C7.00430 9.73670 7.00219 9.82900 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.0790 4.39466 9.76472 5.15322 9.53352 6Z"
                  fill="black"
                />
              </svg>
              Items in Your Bag
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              class="text-black bg-transparent hover:bg-gray-400 hover:text-white rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          </div>

          {/* <!-- Drawer Content --> */}
          <div class="grid grid-rows-4 grid-flow-col gap-4">
            {articles.length !== 0 ? (
              articles.map((article) => (
                <div class="grid grid-cols-3 gap-5 mb-2" id={article.id}>
                  <img
                    src={article.img}
                    alt={article.title}
                    class="article w-28 h-28 rounded-md object-cover"
                  />
                  <div>
                    <p class="text-sm font-semibold capitalize">
                      {article.title}
                    </p>
                    <p class="text-sm capitalize">Color: {article.color}</p>
                    <p class="text-sm capitalize">Size: {article.size}</p>
                    <div class="flex items-center">
                      <button
                        class="bg-gray-200 hover:bg-gray-300 rounded-full px-2 mr-1 py-0.5"
                        onClick={() => decrement(article.id)}
                      >
                        -
                      </button>
                      <span class="text-lg">{article.quantity}</span>
                      <button
                        class="bg-gray-200 hover:bg-gray-300 rounded-full px-2.5 py-0.5 ml-1"
                        onClick={() => increment(article.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="relative">
                    <div class="absolute top-1 right-1">
                      <svg
                        class="w-3 h-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        onClick={() => deleteArticle(article.id)}
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </div>
                    <div class="absolute right-1 bottom-1">
                      <p>${article.price * article.quantity}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>no items</p>
            )}
          </div>

          <hr class="h-px my-8 bg-gray-400 border-0" />
          {/* <!-- Drawer Actions --> */}
          <div className="flex flex-col gap-2 mb-5">
            <div className="flex justify-between">
              <h1>Total</h1>
              <h1>${totalPrice}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Shipping</h1>
              <h1>Free</h1>
            </div>
          </div>

          <div class="w-full">
            <a
              href="#"
              class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Continue Shopping
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
