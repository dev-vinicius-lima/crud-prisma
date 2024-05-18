import { getEmployeeById } from '@/app/lib/action'
import { UpdateForm } from '@/components/editForm'
import { notFound } from 'next/navigation'

const UpdateEmployeePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const employee = await getEmployeeById(id)
  if (!employee) {
    notFound()
  }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Employee</h1>
      <UpdateForm employee={employee} />
    </div>
  )
}

export default UpdateEmployeePage
