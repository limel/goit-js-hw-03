const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.hobby = 'skydiving';
user.premium = false;
user.mood = 'happy';

const keys = Object.keys(user);

// eslint-disable-next-line no-restricted-syntax
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
