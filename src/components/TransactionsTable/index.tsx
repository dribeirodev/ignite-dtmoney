import { useEffect } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

export const TransactionsTable = () => {
  useEffect(() => {
    api.get('transactions').then((res) => console.log(res.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 20.000</td>
            <td>Desenvolvimento</td>
            <td>20/01/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Casa</td>
            <td>10/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
