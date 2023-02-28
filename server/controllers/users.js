import User from "../models/User";

/* READ */
export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    const user = User.findById(id); // todo AWAIT!!!!!!!!!!
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
