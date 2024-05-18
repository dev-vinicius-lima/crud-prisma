// Importa o PrismaClient da biblioteca @prisma/client
import { PrismaClient } from '@prisma/client'

// Declara uma variável global chamada 'prisma' que pode ser instância de PrismaClient ou indefinida
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Exporta a instância do PrismaClient para ser usada em outros arquivos
export const prisma = globalThis.prisma || new PrismaClient()

// Se o ambiente não for 'production', atualiza a variável global 'prisma' com a nova instância do PrismaClient
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
