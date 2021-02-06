import React from 'react';
import { Switch } from 'react-router-dom';
import MyRute from './MyRoute';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';

import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
//
export const Routes = () => (
  <Switch>
    <MyRute exact path="/" component={Alunos} isClose={false} />
    <MyRute exact path="/aluno/:id/edit" component={Aluno} isClose />
    <MyRute exact path="/aluno/" component={Aluno} isClose />
    <MyRute exact path="/fotos/:id" component={Fotos} isClose />
    <MyRute exact path="/login/" component={Login} isClose={false} />
    <MyRute exact path="/register/" component={Register} isClose={false} />
    <MyRute path="*" component={Page404} />
  </Switch>
);
