import { z } from 'zod';

const lensZodSchema = z.object({
  _id: z.string().optional(),
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean(),
});

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };
