import { z } from "zod";

const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(11),
});

export const SaveEmployee = async (prevSate: any, formData: FormData) => {
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // 07:54
  } catch (error) {
    return { message: "Failed to create employee" };
  }
};
