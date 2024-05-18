import { deleteEmployee } from '@/app/lib/action'
import React from 'react'

export const DeleteEmployee = ({ id }: { id: string }) => {
  const deleteEmployeeWithId = deleteEmployee.bind(null, id)
  return (
    <form action={deleteEmployeeWithId}>
      <button className="btn btn-error">Delete</button>
    </form>
  )
}
