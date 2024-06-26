import React, { useState } from "react";
import Shop from "../assets/shop.svg";
import { The_Context } from "../data/Context";
import { useContext } from "react";
import { logOut } from "../auth/auth";
import Modal from "../component/costume_modal";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modal, setModal] = useState({
    status: false,
    success: false,
    msg: "",
    color: "",
  });

  const { access_token } = useContext(The_Context);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    setModal({
      status: true,
      success: true,
      msg: "Successfully logged out",
      color: "green",
      title: "Logged out",
    });
    logOut();
  };

  return (
    <header className="bg-white">
      <Modal modal={modal} setModal={setModal} />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img src={Shop} alt="Shop" className="h-8 w-auto" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {/* Menu Items */}

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/all_product"
                  >
                    {" "}
                    Product{" "}
                  </a>
                </li>

                {access_token ? (
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/order"
                    >
                      Order
                    </a>
                  </li>
                ) : (
                  ""
                )}

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/about"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/testmonony"
                  >
                    Testimonal
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {access_token ? (
                <div className="hidden sm:flex">
                  <a href="/">
                    <button
                      onClick={handleLogOut}
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    >
                      Logout
                    </button>
                  </a>
                </div>
              ) : (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/sign_up"
                  >
                    Register
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/sign_in"
                    >
                      Login
                    </a>
                  </div>
                </div>
              )}

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu} // Toggle menu visibility
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the menu based on visibility state */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <ul className="py-2 px-4">
            {/* Menu Items */}
            <li className="m-3">
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/all_product"
              >
                {" "}
                Product{" "}
              </a>
            </li>

            {access_token ? (
              <li className="m-3">
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/order"
                >
                  Order
                </a>
              </li>
            ) : (
              ""
            )}

            <li className="m-3">
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/about"
              >
                {" "}
                About Us{" "}
              </a>
            </li>

            <li className="m-3">
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="/testmonony"
              >
                {" "}
                Testimonal{" "}
              </a>
            </li>

            {access_token ? (
              <li className="m-3">
                <a href="/">
                  <button
                    onClick={handleLogOut}
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  >
                    Logout
                  </button>
                </a>
              </li>
            ) : (
              <li className="m-3">
                <a
                  className="rounded-md bg-teal-600  px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/sign_in"
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navigation;
