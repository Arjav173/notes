require('dotenv').config();

const express = require('express'); 
const app = express();               

require('./config/db.config');

const authRoutes = require('./routes/auth.routes');
const notesRoutes = require('./routes/notes.routes')

app.use(express.json()); 
// const protect = require('./middlewares/auth.middleware')        

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRoutes);
app.use('/notes',notesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
