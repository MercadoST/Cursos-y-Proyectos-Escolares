const asociado = {};

asociado.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM asociados ORDER BY apellido', (err, personas) => {
     if (err) {
      res.json(err);
     }
     res.render('Asociados', {
        data: personas
     });
    });
  });
};


asociado.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO asociados set ?', data, (err, asociados) => {
      console.log(asociados)
      res.redirect('/');
    })
  })
};

asociado.edit = (req, res) => {
  const { dni } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM asociados WHERE dni = ?", [dni], (err, rows) => {
      res.render('EditAsociado', {
        data: rows[0]
      })
    });
  });
};

asociado.update = (req, res) => {
  const { dni } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE asociados set ? where dni = ?', [newCustomer, dni], (err, rows) => {
    res.redirect('/');
  });
  });
};

asociado.delete = (req, res) => {
  const { dni } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM asociados WHERE dni = ?', [dni], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = asociado;