import { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default [json(), cors(), helmet(), morgan('dev'), bodyParser.urlencoded({ extended: false })];
