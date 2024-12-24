import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Shameer',
      age: 25,
      email: 'shameer@gmail.com',
      role: 'ADMIN,',
    },
    {
      id: 2,
      name: 'Shameer2',
      age: 25,
      email: 'shameer2@gmail.com',
      role: 'INTERN,',
    },
    {
      id: 3,
      name: 'Shameer3',
      age: 25,
      email: 'shameer3@gmail.com',
      role: 'ENGINEER,',
    },
    {
      id: 5,
      name: 'Shameer5',
      age: 25,
      email: 'shameer5@gmail.com',
      role: 'ADMIN,',
    },
  ];
  filteredusers(role?: 'INTERN' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role.includes(role));
    }
    return this.users;
  }

  findOne(id: Number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    id: Number;
    name: String;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    email: String;
    age: Number;
  }) {
    const newUser = {
      id: 4,
      name: 'Shameer4',
      age: 25,
      email: 'iamshameer4' + '@gmail.com',
      role: 'ADMIN',
    };
    this.users.push(newUser);
  }
  delete(id: number) {
    return this.users.filter((user) => user.id !== id);
  }
}
