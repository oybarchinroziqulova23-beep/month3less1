export default class baseController {
  constructor(Model) {
    this.Model = Model;
  }

  createOne = async (req, res, next) => {
    try {
      const newData = await this.Model.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Created successfully",
        data: newData,
      });
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const { search, page = 1, limit = 10, sort = "-createdAt" } = req.query;

      let query = {};
      if (search) {
        const searchableFields = Object.keys(this.Model.schema.paths).filter(
          (field) =>
            !["_id", "__v", "createdAt", "updatedAt"].includes(field)
        );

        query = {
          $or: searchableFields.map((field) => ({
            [field]: { $regex: search, $options: "i" },
          })),
        };
      }

      const skip = (parseInt(page) - 1) * parseInt(limit);

      const [data, total] = await Promise.all([
        this.Model.find(query)
          .skip(skip)
          .limit(parseInt(limit))
          .sort(sort),
        this.Model.countDocuments(query),
      ]);

      return res.status(200).json({
        success: true,
        message: "Retrieved successfully",
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / limit),
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const data = await this.Model.findById(req.params.id);
      if (!data)
        return res
          .status(404)
          .json({ success: false, message: "Not found such an ID" });

      return res.status(200).json({
        success: true,
        message: "Retrieved successfully",
        data,
      });
    } catch (error) {
      next(error);
    }
  };

  updateOne = async (req, res, next) => {
    try {
      const updated = await this.Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updated)
        return res
          .status(404)
          .json({ success: false, message: "Not found such an ID" });

      return res.status(200).json({
        success: true,
        message: "Updated successfully",
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteOne = async (req, res, next) => {
    try {
      const deleted = await this.Model.findByIdAndDelete(req.params.id);
      if (!deleted)
        return res
          .status(404)
          .json({ success: false, message: "Not found such an ID" });

      return res.status(200).json({
        success: true,
        message: "Deleted successfully",
        data: deleted,
      });
    } catch (error) {
      next(error);
    }
  };
}
