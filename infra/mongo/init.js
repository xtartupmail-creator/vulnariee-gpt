db = db.getSiblingDB('benchmark_lab');
db.createCollection('profiles');
db.profiles.insertMany([
  { username: 'alice', labels: ['user', 'beta'], tenant: 'red' },
  { username: 'bob', labels: ['analyst'], tenant: 'blue' },
  { username: 'carol', labels: ['admin'], tenant: 'ops' }
]);
