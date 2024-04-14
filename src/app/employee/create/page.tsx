"use cliente";
import { useFormState } from "react-dom";
import { SaveEmployee } from "../../../../lib/action";

const CreateEmployeePage = () => {
  const [state, formAction] = useFormState(SaveEmployee, null);
  return (
    <div className="max-w-md mx-auto mt-5 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center mb-5">ADD New Employee</h1>
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
            />
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
            />
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
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeePage;
