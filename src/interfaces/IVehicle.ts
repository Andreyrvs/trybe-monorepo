import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string().min(3, { message: 'model deve ter pelo menos 3 caracteres' }),
  year: z.number().int().positive().gte(1900)
    .lte(2023),
  color: z.string().min(3, { message: 'color deve ter pelo menos 3 caracteres' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { IVehicle, VehicleZodSchema };