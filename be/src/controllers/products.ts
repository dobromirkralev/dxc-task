import { Request, Response, NextFunction } from "express";
import { ProductsService } from "../services/products";

export default class ProductsController {
  constructor(
    private productsService: ProductsService = new ProductsService()
  ) {}

  getProductsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: "Failed to read products" });
    }
    console.log("Products Middleware executed GET");
  };

  getProductById = async (req: Request, res: Response, next: NextFunction) => {
    const productId = req.params.id;

    try {
      const product = await this.productsService.getById(productId!);
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: "Failed to read product by id" });
    }
  };

  //   getConsultantsList = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ) => {
  //     const queryParams = req.query;
  //     console.log("Query Params:", queryParams);
  //     try {
  //       const { specialty = "", q = "" } = queryParams as {
  //         specialty?: string;
  //         q?: string;
  //       };

  //       let consultants = await this.consultantService.findAll({ specialty, q });
  //       const consultantsTemp = consultants.map((c) => ({
  //         id: c.id,
  //         firstName: c.firstName,
  //         lastName: c.lastName,
  //         specialty: c.specialty, // e.g., "Business Strategy", "Cybersecurity"
  //         yearsOfExperience: c.yearsOfExperience,
  //         hourlyRate: c.hourlyRate, // USD per hour
  //         availability: c.availability,
  //       }));
  //       res.json(consultantsTemp);
  //     } catch (err) {
  //       console.log(err);
  //       res.status(500).json({ error: "Failed to read consultants" });
  //     }
  //     console.log("Consultants Middleware executed GET");
  //   };

  //   getConsultantById = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ) => {
  //     const consultantId = req.params.id;
  //     try {
  //       const consultant = await this.consultantService.getById(consultantId!);
  //       res.json(consultant);
  //     } catch (err) {
  //       res.status(500).json({ error: "Failed to read consultant by id" });
  //     }
  //   };

  //   craeteConsultant = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ) => {
  //     const newRawConsultant = req.body;
  //     const newConsultant = await this.consultantService.create(newRawConsultant);
  //     res.status(201).json({
  //       message: "Consultant created successfully",
  //       consultant: newConsultant,
  //     });
  //     res.send();
  //   };

  //   updateConsultant = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ) => {
  //     const consultantId = req.params.id;
  //     const updatedData = req.body;

  //     try {
  //       // const rawDataDb: unknown = await Consultant.getConsultantById(
  //       //   consultantId!
  //       // );
  //       // const rawData = rawDataDb as RawConsultantData;
  //       // let consultant = new Consultant(rawData);
  //       // await consultant.update(updatedData);
  //       const updatedConsultant = await this.consultantService.update(
  //         consultantId!,
  //         updatedData
  //       );
  //       res.status(200).json({
  //         message: "Consultant updated successfully",
  //         consultant: updatedConsultant,
  //       });
  //     } catch (err) {
  //       res.status(500).json({ error: "Failed to update consultant" });
  //     }
  //   };

  //   deleteConsultant = async (
  //     req: Request,
  //     res: Response,
  //     next: NextFunction
  //   ) => {
  //     const consultantId = req.params.id;

  //     try {
  //       const deletedConsultant = await this.consultantService.delete(
  //         consultantId!
  //       );
  //       res.status(200).json(deletedConsultant);
  //     } catch (err) {
  //       res.status(500).json({ error: "Failed to delete consultant" });
  //     }
  //   };
}
