import react, { useEffect, useState } from "react";
import getOrdersForUser from "../data/get_order";

const Order = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrdersForUser(user.uid)
      .then((response) => {
        console.log(response);
        setOrders(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const ConvertTODate = (timestamp) => {
    const milliseconds =
      timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);
    const date = new Date(milliseconds);
    console.log(date.toLocaleDateString());
    return date.toLocaleDateString();
  };

  if (orders.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-400">No Orders</h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-400">My Orders</h1>
          <div className="overflow-x-auto rounded-lg border border-gray-200 my-3">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Id
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Product
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date of order Placed
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Delivery Location
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Delivery Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {orders?.map((order, index) => {
                  return (
                    <tr>
                      <td className="whitespace-nowrap items-center px-4 py-2 font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap items-center px-4 py-2 font-medium text-gray-900">
                        {order.item}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {ConvertTODate(order.createdAt)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {order.price}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                       {order.devLocation}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {order.delivered ? "Delivered" : "Not Delivered"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt=""
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
