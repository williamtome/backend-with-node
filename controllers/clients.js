const list = (req, res) => {
  res.send('List of clients')
}

const create = (req, res) => {
  res.send('Create new client 2')
}

module.exports = {
  list,
  create,
}
