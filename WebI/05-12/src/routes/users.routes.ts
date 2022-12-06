import { Router } from "express";

const userRotes = Router();

let users: any[] = [];

const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

userRotes.get('/', (request, response) => {
  return response.send(users);
});

userRotes.get('/:id', (request, response) => {
  const { id } = request.params;
  const user = users.find((x) => x.id === Number(id));

  if (!user) {
    return response.status(404).send('User not found!');
  }

  return response.send(user);
});

userRotes.post('/', (request, response) => {
  const user = request.body;

  if(!user.id){
    return response.status(400).send({
      field: 'id',
      message: 'Id invalid!'
    })
  }

  if(!user.name){
    return response.status(400).send({
      field: 'name',
      message: 'name invalid'
    })
  }

  if(!user.email || !emailRegex.test(user.email)){
    return response.status(400).send({
      field: 'email',
      message: 'E-mail invalid'
    })
  }

  users.push(user);
  return response.send(user);
});

userRotes.put('/:id', (request, response) => {
  const { id } = request.params;
  const userIndex = users.findIndex((x) => x.id === Number(id));

  if (userIndex === -1) {
    // Retornar que não encontrou
    return response.send('Not Found!');
  }

  users[userIndex].name = request.body.name;
  users[userIndex].email = request.body.email;

  return response.send(users[userIndex]);
});

userRotes.delete('/:id', (request, response) => {
  const { id } = request.params;
  users = users.filter((x) => x.id !== Number(id));
  return response.send('Deleted!');
});

export default userRotes;