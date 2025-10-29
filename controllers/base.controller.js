export default class baseController {
  constructor(Model) {
    this.Model = Model;
  }

  create = async (req, res, next) => {
    try {
      const newData = await this.Model.create(req.body);
      res.status(201).json({
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
      const { search, page = 1, limit = 10, sort = "createdAt" } = req.query;

      let query = {};
      if (search) {
        const fields = Object.keys(this.Model.schema.paths).filter(
          (f) => !["_id", "__v", "createdAt", "updatedAt"].includes(f)
        );
        query = {
          $or: fields.map((field) => ({
            [field]: { $regex: search, $options: "i" },
          })),
        };
      }

      const skip = (page - 1) * limit;

      const [data, total] = await Promise.all([
        this.Model.find(query)
          .skip(parseInt(skip))
          .limit(parseInt(limit))
          .sort(sort),
        this.Model.countDocuments(query),
      ]);

      res.json({
        success: true,
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

  getById = async (req, res, next) => {
    try {
      const data = await this.Model.findById(req.params.id);
      if (!data)
        return res.status(404).json({ success: false, message: "Not found" });
      res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const updated = await this.Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updated)
        return res.status(404).json({ success: false, message: "Not found" });
      res.json({ success: true, message: "Updated successfully", data: updated });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const deleted = await this.Model.findByIdAndDelete(req.params.id);
      if (!deleted)
        return res.status(404).json({ success: false, message: "Not found" });
      res.json({ success: true, message: "Deleted successfully" });
    } catch (error) {
      next(error);
    }
  };
}
