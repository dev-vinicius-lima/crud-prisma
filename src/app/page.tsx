import Link from 'next/link'
import { getEmployeeList } from '../../src/app/lib/action'
import { formatDate } from '../../src/app/lib/utils/formatDate'
import { DeleteEmployee } from '@/components/deleteEmployee'

const Employee = async ({ query }: { query: string }) => {
  const employees = await getEmployeeList(query)
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center bg-gray-400 text-black">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1>
          Next js CRUD Create, Read, Update And Delete Prisma PostgreSQL |
          Tailwind CSS DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href={'/employee/create'} className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table bg-gray-50 text-slate-800">
          <thead>
            <tr className="text-slate-800">
              <th className="py-3 px-6"></th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone Number</th>
              <th className="py-3 px-6">Create At</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((rs, index) => (
              <tr className="bg-white border-b" key={index}>
                <th className="py-3 px-6">{index + 1}</th>
                <td className="py-3 px-6">{rs.name}</td>
                <td className="py-3 px-6">{rs.email}</td>
                <td className="py-3 px-6">{rs.phone}</td>
                <td className="py-3 px-6 text-center">
                  {formatDate(rs.CreatedAt)}
                </td>
                <td className="flex justify-center gap-1 py-3 text-center">
                  <Link
                    href={`/employee/edit/${rs.id}`}
                    className="btn btn-info"
                  >
                    Edit
                  </Link>

                  <DeleteEmployee id={rs.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee
