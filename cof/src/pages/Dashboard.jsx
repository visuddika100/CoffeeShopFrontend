import React from "react";
import { 
  Card, 
  CardContent, 
  Button, 
} from '@mui/material';
import { Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Coffee Shop</h2>
        <nav className="space-y-3">
          <button className="block w-full text-left p-2 rounded hover:bg-gray-800">Dashboard</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-800">Orders</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-800">Inventory</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-800">Sales Report</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-800">Employees</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

        {/* Top Stats */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {[
            { label: "Revenue", value: "$1,250" },
            { label: "Available Stock", value: "85" },
            { label: "Active Orders", value: "120" },
            { label: "Employees", value: "15" },
          ].map((item, index) => (
            <Card key={index} className="shadow rounded-2xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-semibold">{item.label}</h2>
                <p className="text-3xl font-bold mt-2">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Orders</h2>
              <div className="flex items-center bg-gray-200 px-3 py-2 rounded-xl">
                <Search className="w-5 h-5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="bg-transparent ml-2 outline-none"
                />
              </div>
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2">Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "ORD-5589", name: "Daniel Jacob", status: "Pending", amount: "$1,000" },
                  { id: "ORD-1538", name: "Hover Roart", status: "Delivered", amount: "$1,200" },
                  { id: "ORD-3450", name: "Maat Falust", status: "Processing", amount: "$900" },
                  { id: "ORD-1288", name: "Dazeh Berb", status: "Pending", amount: "$1,500" },
                ].map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-3 font-medium">{order.id}</td>
                    <td>{order.name}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-xl text-sm text-white ${
                          order.status === "Delivered"
                            ? "bg-green-600"
                            : order.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>Jul 25, 2024</td>
                    <td>{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
