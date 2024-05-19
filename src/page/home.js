import React from "react";
import Shop from "../assets/shop.svg";
import Product_card from "../component/product_card";
import data from "../data/product.json";
import { The_Context } from "../data/Context";
import { useContext } from "react";
import { auth } from "../firebase/firebase";

function Home() {
  const { access_token } = useContext(The_Context);



  return (
    <div>
      <section className="overflow-hidden bg-[url('https://lh3.googleusercontent.com/fife/ALs6j_Fa62mCdU8FCv1jagOzl27OQvYa6D8xvX21GUEAiB1Jn_yQ_6cgo-ABjulheAhWa_1mv7beHYPBrIT33PLO22dfAzzKusJfb-Db_PVTdySh1Ib-B5KcH-d6EIXSo4zZEaYS57A2TWQfYCWHbVdRQuV-LiQuWhvHXuIinfRpbxpwBZOBLUGm2DC3nWuRSbOvEt1Avu35GcW6C2gNflQv70Q2d2c_ZDuzwJViPn3QHnKjX6mvcl27hdu64ae9KAH_8zHSpRLOYemOLAbytyxSYPhW4019DKFqoDNx4oWz8-VDbdr_dvTTRp_zexc2NJW1xQqfqTzR4A4bkIIMmgZGhWiGiTCadKoySlIcKk9lvE9j7yQ5_X2QsJN1-Gz9G1hk-PMdPKQ42W2ciDm3hAMJRptJVCwgWuAS7KAbTn4AbALaafRtAoToH31FS-I2OwLfkwH2ve8NyGOzOoOI3HACMo54-wYCK2kZk3tZTnZ5ylgUsMRhLq8lT6JEpavmMi6bXAhOg_24doIQEUvGbI_ZeR2lgcfsyYFT50uEphcDWRi2E-NXfpDl1jrw_-IxVy7vIHi35ReLmX75knnRng6s3c2uK1rVv4vFK0rht2-C1-Ea1meCvVHSXMJA-fFt9S0cevKfKYHadpOAt7GfCErBxEsbsZG_g6lCIgLmFW-jYlWyIOpc9Cs8TYHa53Q5dSpjFeOiW3PBZealIGMdfIiXCIbLj0Z3LXL035hr6ql9KCF0ZhX2c3TUTRAKMd7XXu8AAkYBOeqQ3eDpoVlwv6iBxuDoXsvN7Qw_FAFXbTPtHJHu7UreNOmq4xfG25CMSb6f59Rq-mvgvIRaBeAqOG2herPZSUATc-dmkj_l3v9WsUNwHTctN1Fv_zBZu5T6CczQmj_SoN7LSDVpnLn71An3KW0-wsEiHoQFJdhlMNRhQcFI2fKN2RYzZcu307ik43o-EbI6nOhjoXL7_7L6nSbw-Cg48IJIIdmgd3zCgqhkmN9Inm_AuTd1e1YO_zyEXgLlT_HmNbT8f3hu2kTQHfV_VqpbAIovPJehXWmW4wFX42AtslNmCeZnUD6WyA8ufxseQkLSUBQVxm6WX1xUH2hYwUs43ba8Y4YL3WvzfRri_k2Mbl_-WIjklHUVgEpTOj-S7CljWY9Tl8-k4QcqYYeg5rjdjcH5T_oPzVq5-4ussYHkxZYtIy9P6TioctSKxAjNF22SN2GGvpeodXOIsaFBE8Rg0hJbJjjfG3ycfD0hFXzJ8xVQLomXbRuxxitFppancw9WI-hHlc7wb1NrzhtKz0GjmM81vkE4Sbc955WaIhq5yFUg2tlW4XLLYArHjeEgiHZUIiuHUVRFPybov85ZSzF5WDBlj3rSxPre4Hzv0RunXf-O5vyNQok=s512')] bg-cover bg-top bg-no-repeat">
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
                    Nunua bidhaa za bei nafuu kutoka kwa wauzaji wa Kariakoo ,
                    na safirishiwa mpaka ulipo
                  </p>
                </div>
                <div class="mt-10 flex flex-col items-center md:flex-row">
                  <a
                    href="/all_product"
                    class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-slate-900 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800"
                  >
                    Shop Now{" "}
                  </a>
                  <a
                    href="/all_product"
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
      </section>

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>
          </header>

          <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.products.slice(0, 4).map((product) => {
              return (
                <li>
                  <Product_card data={product} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div class="bg-indigo-600 px-4 py-3 text-white">
        <p class="text-center text-sm font-medium">
          Bidhaa zote zina warrant mpaka mwaka mmoja .
        </p>
      </div>

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Our Best Seller
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Jipatie bidhaa hizi kwa bei ya jumla , sawa na bei za
                    wauzaji wa Kariakoo
                  </p>
                </header>

                <a
                  href="/all_product"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Nunua sasa
                </a>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                {data.products.slice(0, 2).map((product) => {
                  return (
                    <li>
                      <a href={`/product/${product.id}`} class="group block">
                        <img
                          src={product.productImages[0]}
                          alt=""
                          class="aspect-square w-full rounded object-cover"
                        />

                        <div class="mt-3">
                          <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                            {product.productName}
                          </h3>

                          <p class="mt-1 text-sm text-gray-700">
                            {product.price}
                          </p>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
