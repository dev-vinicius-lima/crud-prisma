'use client'
import { updateEmployee } from '@/app/lib/action'
import { Employee } from '@prisma/client'
import React from 'react'
import { useFormState } from 'react-dom'

export const UpdateForm = ({ employee }: { employee: Employee }) => {
  const updateEmployeeWithId = updateEmployee.bind(null, employee.id)
  const [state, formAction] = useFormState(updateEmployeeWithId, null)
  return (
    <div className="max-w-md mx-auto mt-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center mb-5">Edit Employee</h1>
      <div>
        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-white text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              id="name"
              name="name"
              type="text"
              placeholder="Full Name..."
              defaultValue={employee.name}
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              id="email"
              name="email"
              type="email"
              placeholder="Email..."
              defaultValue={employee.email}
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-white text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone Number..."
              defaultValue={employee.phone}
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}
