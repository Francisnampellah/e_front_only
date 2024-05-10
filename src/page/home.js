import React from "react";


function Home() {
  return (
    <div>
      <section className="overflow-hidden bg-[url('https://lh3.googleusercontent.com/fife/ALs6j_Fa62mCdU8FCv1jagOzl27OQvYa6D8xvX21GUEAiB1Jn_yQ_6cgo-ABjulheAhWa_1mv7beHYPBrIT33PLO22dfAzzKusJfb-Db_PVTdySh1Ib-B5KcH-d6EIXSo4zZEaYS57A2TWQfYCWHbVdRQuV-LiQuWhvHXuIinfRpbxpwBZOBLUGm2DC3nWuRSbOvEt1Avu35GcW6C2gNflQv70Q2d2c_ZDuzwJViPn3QHnKjX6mvcl27hdu64ae9KAH_8zHSpRLOYemOLAbytyxSYPhW4019DKFqoDNx4oWz8-VDbdr_dvTTRp_zexc2NJW1xQqfqTzR4A4bkIIMmgZGhWiGiTCadKoySlIcKk9lvE9j7yQ5_X2QsJN1-Gz9G1hk-PMdPKQ42W2ciDm3hAMJRptJVCwgWuAS7KAbTn4AbALaafRtAoToH31FS-I2OwLfkwH2ve8NyGOzOoOI3HACMo54-wYCK2kZk3tZTnZ5ylgUsMRhLq8lT6JEpavmMi6bXAhOg_24doIQEUvGbI_ZeR2lgcfsyYFT50uEphcDWRi2E-NXfpDl1jrw_-IxVy7vIHi35ReLmX75knnRng6s3c2uK1rVv4vFK0rht2-C1-Ea1meCvVHSXMJA-fFt9S0cevKfKYHadpOAt7GfCErBxEsbsZG_g6lCIgLmFW-jYlWyIOpc9Cs8TYHa53Q5dSpjFeOiW3PBZealIGMdfIiXCIbLj0Z3LXL035hr6ql9KCF0ZhX2c3TUTRAKMd7XXu8AAkYBOeqQ3eDpoVlwv6iBxuDoXsvN7Qw_FAFXbTPtHJHu7UreNOmq4xfG25CMSb6f59Rq-mvgvIRaBeAqOG2herPZSUATc-dmkj_l3v9WsUNwHTctN1Fv_zBZu5T6CczQmj_SoN7LSDVpnLn71An3KW0-wsEiHoQFJdhlMNRhQcFI2fKN2RYzZcu307ik43o-EbI6nOhjoXL7_7L6nSbw-Cg48IJIIdmgd3zCgqhkmN9Inm_AuTd1e1YO_zyEXgLlT_HmNbT8f3hu2kTQHfV_VqpbAIovPJehXWmW4wFX42AtslNmCeZnUD6WyA8ufxseQkLSUBQVxm6WX1xUH2hYwUs43ba8Y4YL3WvzfRri_k2Mbl_-WIjklHUVgEpTOj-S7CljWY9Tl8-k4QcqYYeg5rjdjcH5T_oPzVq5-4ussYHkxZYtIy9P6TioctSKxAjNF22SN2GGvpeodXOIsaFBE8Rg0hJbJjjfG3ycfD0hFXzJ8xVQLomXbRuxxitFppancw9WI-hHlc7wb1NrzhtKz0GjmM81vkE4Sbc955WaIhq5yFUg2tlW4XLLYArHjeEgiHZUIiuHUVRFPybov85ZSzF5WDBlj3rSxPre4Hzv0RunXf-O5vyNQok=s512')] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Shirts
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
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
            <li>
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" class="group block overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div class="relative bg-white pt-3">
                  <h3 class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Basic Tee
                  </h3>

                  <p class="mt-2">
                    <span class="sr-only"> Regular Price </span>

                    <span class="tracking-wider text-gray-900">
                      {" "}
                      £24.00 GBP{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div class="bg-indigo-600 px-4 py-3 text-white">
        <p class="text-center text-sm font-medium">
          Love Alpine JS?
          <a href="#" class="inline-block underline">
            Check out this new course!
          </a>
        </p>
      </div>

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Watches
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  href="#"
                  class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
