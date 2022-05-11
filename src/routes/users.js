module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'John Doe', mail: 'john@mail.com' },
      { name: 'Jane Doe', mail: 'jane@mail.com' },
      { name: 'Jim Doe', mail: 'jim@mail.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { findAll, create };
};
