/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/app/lib/prisma'
import { redirect } from 'next/navigation'
import { z } from 'zod'

// Esquema Zod para validação dos campos do funcionário
const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  phone: z.string().min(11),
})

// Função para salvar um novo funcionário
export const SaveEmployee = async (prevSate: any, formData: FormData) => {
  // Valida os campos do formulário contra o esquema definido
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries()),
  )
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    }
  }
  // Tenta criar o registro do funcionário no banco de dados
  try {
    await prisma.employee.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
      },
    })
  } catch (error) {
    console.log('Algo deu errado' + error)
  }
  // Atualiza a cache e redireciona após a operação
  revalidatePath('/')
  redirect('/')
}

// Funções para listar, obter por ID, atualizar e deletar funcionários
export const getEmployeeList = async () => {
  try {
    const emplloyees = await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        CreatedAt: true,
      },
      orderBy: {
        CreatedAt: 'desc',
      },
    })
    return emplloyees
  } catch (error) {
    throw new Error('Algo deu errado' + error)
  }
}

export const getEmployeeById = async (id: string) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    })
    return employee
  } catch (error) {
    throw new Error('Algo deu errado' + error)
  }
}

export const updateEmployee = async (id: string, formData: FormData) => {
  const validatedFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries()),
  )
  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    }
  }
  try {
    await prisma.employee.update({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
      },
      where: {
        id,
      },
    })
  } catch (error) {
    console.log('Algo deu errado' + error)
  }
  revalidatePath('/')
  redirect('/')
}

export const deleteEmployee = async (id: string) => {
  try {
    await prisma.employee.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.log('Algo deu errado' + error)
  }
  revalidatePath('/')
  redirect('/')
}
