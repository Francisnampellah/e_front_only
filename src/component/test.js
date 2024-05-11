import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProductCart from "../component/productCart";
import CaterorieesCard from "../component/caterorieesCard";
import useAuth from "../hooks/useAuth";
import { fetchDataWithOutAuthorization } from "../Data/AxiosRequest";
import ProductCard from "../component/ProductKard";
import Shop from "../Assets/shop.svg";

import Product_card from "../component/Product_card";

export default function Homepage({ cart, setCart }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");

  useEffect(() => {
    fetchDataWithOutAuthorization("/")
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!data) {
    return (
      <div class="min-h-[100vh] flex justify-center item-center w-full">
        <div class="loader">
          <div class="cube-wrapper">
            <div class="cube">
              <div class="cube-faces">
                <div class="cube-face shadow"></div>
                <div class="cube-face bottom"></div>
                <div class="cube-face top"></div>
                <div class="cube-face left"></div>
                <div class="cube-face right"></div>
                <div class="cube-face back"></div>
                <div class="cube-face front"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(61,145,72,0.5)]" style={{ minHeight: "100vh" }}>
      <div class="bg-[rgba(61,145,72,0.5)]">
        <div class="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div class="flex flex-col items-center justify-between lg:flex-row">
            <div class="">
              <div class="lg:max-w-xl lg:pr-5">
                <p class="flex text-sm uppercase text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 inline h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </p>
                <h2 class="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-black sm:text-7xl sm:leading-snug">
                  Bei za
                  <span class="my-1 inline-block border-b-8 border-white bg-[rgb(247,109,87)] px-4 font-bold text-white">
                    Kariakoo
                  </span>
                </h2>
                <p class="text-base text-black-800">
                  Nunua bidhaa za bei nafuu kutoka kwa wauzaji wa Kariakoo , na
                  safirishiwa mpaka ulipo
                </p>
              </div>
              <div class="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/allproduct"
                  class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-slate-900 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800"
                >
                  Shop Now{" "}
                </a>
                <a
                  href="/allproduct"
                  aria-label=""
                  class="group inline-flex items-center font-semibold text-white"
                >
                  Bidhaa Zote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <div class="abg-orange-400 w-fit rounded-[0] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                <div class="flex w-96 flex-wrap">
                  <img src={Shop} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-orange-100 text-blue-800">
        <div class="mx-auto max-w-7xl px-2 py-2 sm:px-6 sm:py-0 lg:px-8">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex w-0 flex-1 items-center">
              <p class="ml-3 text-center font-medium leading-5 sm:text-left">
                <span class="">
                  <span class="rounded-md bg-rose-400 px-2 text-white">
                    Save
                  </span>{" "}
                  upto 20% with the coupons
                </span>
              </p>
            </div>
            <div class="order-2 min-h-12 flex-shrink-0 sm:order-3 sm:ml-2">
              {/* <button
                type="button"
                class="m-2 -mr-1 flex rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
          <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-md text-center">
              <h2 class="font-serif text-2xl font-bold sm:text-3xl">
                Our featured Products
              </h2>
              <p class="mt-4 text-base text-gray-700"></p>
            </div>

            <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
              {/* {data?.slice(0, 4).map((each) => {
                return <ProductCard each={each} />;
              })} */}
              {data?.slice(0, 4).map((each, index) => {
                return (
                  <ProductCart
                    cart={cart}
                    setCart={setCart}
                    indx={index}
                    data={each}
                  />
                );
              })}
            </div>
            <div class="p-5 m-5">
              <a
                href="/allproduct"
                aria-label=""
                class="group inline-flex items-center font-semibold text-black"
              >
                View all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div class="w-full flex items-center justify-center">
        <div class="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8">
          <div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
            <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
                Our Best Product
              </h2>
              <p class="mt-2 text-lg">By West Point</p>
              <p class="mt-4 mb-8 max-w-md text-gray-500">
                Westpoint Washing Machines 10kg Manual Twin Tub Top Load White,
                WTF-10122.P
              </p>
              <a
                href="#"
                class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-slate-900 px-6 py-2 text-white transition"
              >
                <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                  {" "}
                  Shop now{" "}
                </span>
                <svg
                  class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                class="h-full w-full object-cover"
                src="https://d93otpay7pbuw.cloudfront.net/public/photos/67OKMtDpKhtW15UGjhzzLPjTe31Ag5Z5Cwl1DIna.jpeg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
        <div class="rounded bg-blue-800 p-2 shadow-lg sm:p-3">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex w-0 flex-1 items-center">
              <p class="ml-3 truncate font-medium text-white">
                <span class="md:hidden">Updates to privacy policy</span>
                <span class="hidden md:inline">
                  We've updated our privacy policy. Have a look
                </span>
              </p>
            </div>
            <div class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="#"
                class="flex items-center justify-center rounded bg-yellow-400 px-4 py-2 text-sm font-medium text-blue-900 shadow-sm hover:bg-yellow-500"
              >
                Privacy Policy
              </a>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                class="-mr-1 flex rounded p-2 focus:outline-none focus:ring-2 focus:ring-white hover:bg-blue-600"
              >
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <div class="mx-auto max-w-md text-center">
          <h2 class="font-serif text-2xl font-bold sm:text-3xl">
            Our Popular Product
          </h2>
          <p class="mt-4 text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

        <div className="flex gap-5 flex-wrap items-center justify-center">
          {data?.slice(0, 4).map((each, index) => {
            return (
              <ProductCart
                cart={cart}
                setCart={setCart}
                indx={index}
                data={each}
              />
            );
          })}
        </div>
        <div class="p-5 m-5">
          <a
            href="/allproduct"
            aria-label=""
            class="group inline-flex items-center font-semibold text-black"
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}