import { db } from "../db.js";

export const getProdutos = (req, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: 'Erro ao obter produtos', details: err.message });

    return res.status(200).json(data);
  });
};

export const venderProduto = (req, res) => {
  const produtoId = req.params.id;
  const quantidade = req.body.quantidade || 1; 

  const selectProdutoQuery = "SELECT Nome, Quantidade FROM produtos WHERE id = ?";
  db.query(selectProdutoQuery, [produtoId], (selectErr, selectResult) => {
    if (selectErr) {
    
      console.error('Erro ao obter dados do produto:', selectErr);
      return res.status(500).json({ error: 'Erro ao obter dados do produto', details: selectErr.message });
    }

    const nomeProduto = selectResult[0].Nome;
    const quantidadeDisponivel = selectResult[0].Quantidade;

    
    if (quantidadeDisponivel < quantidade) {
      return res.status(400).json({ error: 'Quantidade insuficiente disponível para venda' });
    }

    const updateQuery = "UPDATE produtos SET Quantidade = Quantidade - ? WHERE id = ?";
    db.query(updateQuery, [quantidade, produtoId], (updateErr, updateResult) => {
      if (updateErr) {
       
        console.error('Erro ao vender produto (updateQuery):', updateErr);
        return res.status(500).json({ error: 'Erro ao vender produto (updateQuery)', details: updateErr.message });
      }

      const insertQuery = "INSERT INTO vendas (Produto_ID, Quantidade_Vendida, Nome_Produto, Status) VALUES (?, ?, ?, 'pendente')";
      db.query(insertQuery, [produtoId, quantidade, nomeProduto], (insertErr, insertResult) => {
        if (insertErr) {
         
          console.error('Erro ao registrar venda (insertQuery):', insertErr);
          return res.status(500).json({ error: 'Erro ao registrar venda (insertQuery)', details: insertErr.message });
        }

        console.log(`Venda registrada com sucesso. ID: ${insertResult.insertId}`);
        return res.status(200).json({ message: 'Produto vendido com sucesso' });
      });
    });
  });
};