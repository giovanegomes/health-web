import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id: string,
  description: string,
  status: 'active' | 'inactive',
) {
  return { id, description, status: status === 'active' ? 'Ativo' : 'Inativo' };
}

const rows = [
  createData('1', 'Aquecimento', 'active'),
  createData('2', 'Preparação', 'active'),
  createData('3', 'Trabalho', 'active'),
];

export default function SetTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, description, status }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {description}
              </TableCell>
              <TableCell>{status}</TableCell>
              <TableCell align="center">Editar | Inativar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}