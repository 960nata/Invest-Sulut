const prisma = new Proxy({}, {
  get: () => {
    return {
      findUnique: () => Promise.resolve(null),
      findMany: () => Promise.resolve([]),
      findFirst: () => Promise.resolve(null),
      create: () => Promise.resolve({}),
      update: () => Promise.resolve({}),
      delete: () => Promise.resolve({}),
      upsert: () => Promise.resolve({}),
    };
  }
}) as any;

export default prisma;
