import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  // eslint-disable-next-line quotes
  console.log(`CTRL + clique em http://localhost:3001`);
});
