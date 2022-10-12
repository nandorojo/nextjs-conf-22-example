export const users = [
  {
    id: 'Guillermo Rauch',
    avatar:
      'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
  },
  {
    id: 'Charlie Cheever',
    avatar:
      'https://pbs.twimg.com/profile_images/418503340872306688/cwVZFE3e_400x400.jpeg',
  },
  {
    id: 'Fernando Rojo',
    avatar:
      'https://pbs.twimg.com/profile_images/1182392379761987591/9XPy4NfP_400x400.jpg',
  },
  {
    id: 'Evan Bacon',
    avatar:
      'https://pbs.twimg.com/profile_images/1576625400205250561/wGfn72X__400x400.jpg',
  },
]

export const getUser = (id?: string) =>
  users.find((user) => user.id === id)!
