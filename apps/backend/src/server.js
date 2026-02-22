import { buildApp } from './app.js';

const port = Number(process.env.PORT || 4000);
const app = buildApp();

app.listen(port, () => {
  console.log(`PolicyForge API listening on port ${port}`);
});
