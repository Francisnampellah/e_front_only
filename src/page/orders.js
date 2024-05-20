import React, { useEffect, useState } from "react";
import getOrdersForUser from "../data/get_order";
import deleteOrder from "../data/delete_order";

const Order = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    getOrdersForUser(user.uid)
      .then((response) => {
        console.log(response);
        setOrders(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ConvertToDate = (timestamp) => {
    const milliseconds =
      timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);
    const date = new Date(milliseconds);
    return date.toLocaleDateString();
  };

  const handleDeleteOrder = (orderId) => {
    deleteOrder(orderId)
      .then(() => {
        setOrders(orders.filter((order) => order.id !== orderId));
      })
      .catch((error) => {
        console.error("Error deleting order: ", error);
      });
  };

  return (
    <div className="p-4">
      <section className="min-h-[80%]">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-400">My Orders</h1>
          <div className="overflow-x-auto rounded-lg border border-gray-200 my-3 ">
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
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td className="whitespace-nowrap items-center px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap items-center px-4 py-2 font-medium text-gray-900">
                      {order.item}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {ConvertToDate(order.createdAt)}
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
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
