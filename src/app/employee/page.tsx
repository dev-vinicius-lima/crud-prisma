import Link from "next/link";

const Employee = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1>
          Next js CRUD Create, Read, Update And Delete Prisma PostgreSQL |
          Tailwind CSS DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href={"/employee/create"} className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone Number</th>
              <th className="py-3 px-6">Create At</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th className="py-3 px-6">1</th>
              <td className="py-3 px-6">CairoCoders Ednalan</td>
              <td className="py-3 px-6">cairocoders@gmail.com</td>
              <td className="py-3 px-6">123456</td>
              <td className="py-3 px-6 text-center">Date</td>
              <td className="flex justify-center gap-1 py-3 text-center">
                Edit | Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
