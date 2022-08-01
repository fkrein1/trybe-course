const dateRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

function checkProducName(req, res, next) {
  const { productName } = req.body;
  if (!productName) {
    return res
      .status(400)
      .json({ message: 'O campo productName é obrigatório' });
  }
  if (productName.length < 4) {
    return res.status(400).json({
      message: 'O campo productName deve ter pelo menos 4 caracteres',
    });
  }
  next();
}

function checkInfosKeys(req, res, next) {
  const { infos } = req.body;
  if (!infos) {
    return res.status(400).json({
      message: 'O campo infos é obrigatório',
    });
  }
  if (!infos.saleDate) {
    return res.status(400).json({
      message: 'O campo saleDate é obrigatório',
    });
  }
  if (!infos.warrantyPeriod) {
    return res.status(400).json({
      message: 'O campo warrantyPeriod é obrigatório',
    });
  }
  next();
}

function checkSaleDate(req, res, next) {
  const { infos } = req.body;
  if (!dateRegex.test(infos.saleDate)) {
    return res.status(400).json({
      message: 'O campo saleDate não é uma data válida',
    });
  }
  next();
}

function checkWarranty(req, res, next) {
  const { infos } = req.body;
  const validWarranties = [1, 2, 3];
  if (!validWarranties.includes(Number(infos.warrantyPeriod))) {
    return res.status(400).json({
      message: 'O campo warrantyPeriod precisa ser 1, 2 ou 3',
    });
  }
  next();
}

module.exports = {
  checkWarranty,
  checkSaleDate,
  checkInfosKeys,
  checkProducName,
};
