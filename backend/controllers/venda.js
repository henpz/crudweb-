import { db } from '../db.js';

export const getVendas = (req, res) => {
  const q = 'SELECT * FROM vendas';

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const cancelarCompra = async (req, res) => {
  const vendaId = req.params.id;
console.log('Venda ID:', vendaId);
  try {
      const result = await db.query('DELETE FROM vendas WHERE Id = ?', [vendaId]);

      if (result.affectedRows > 0) {
          res.status(200).json({ message: 'Venda cancelada com sucesso' });
      } else {
          res.status(404).json({ message: 'Venda não encontrada' });
      }
  } catch (error) {
      console.error('Erro ao cancelar', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
  }
};