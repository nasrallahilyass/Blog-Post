const { PrismaClient } = require('@prisma/client');
console.log('Initializing Prisma Client...');
const prisma = new PrismaClient();
console.log('Prisma Client initialized:', prisma);

module.exports = prisma;
