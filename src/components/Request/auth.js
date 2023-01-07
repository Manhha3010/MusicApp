import axios from 'axios';

const BAREURL = 'https://music-api-deploy.vercel.app/api/v1';

export async function signUp(name, email, password, cfPassword) {
  const res = await axios.post(BAREURL + '/auth/register', {
    name,
    email,
    password,
    cfPassword,
  });

  return res;
}

export async function signIn(email, password) {
  const res = await axios.post(BAREURL + '/auth/login', {
    email,
    password,
  });
  return res;
}

export async function fetchFavorites(email, password) {
  const res = await axios.post(BAREURL + '/auth/login', {
    email,
    password,
  });
  console.log('res favorites la', res.data.user.favorites);
  return res.data.user.favorites;
}

export async function fetchArtist() {
  const res = await axios.get(BAREURL + '/artist', {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
  });
  // console.log(res.data.data);
  const artist = res.data.data;

  return artist;
}

export async function fetchArtistDetail(id) {
  const res = await axios.get(BAREURL + '/artist/' + id, {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
  });
  const artist = res.data.artist;
  return artist;
}

export async function fetchAlbum() {
  const res = await axios.get(BAREURL + '/album', {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
  });
  // console.log(res.data.data);
  const artist = res.data.data;

  return artist;
}

export async function fetchAlbumDetail(id) {
  const res = await axios.get(BAREURL + '/album/' + id, {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
  });
  const artist = res.data.album;
  console.log('datat trong fetchAlbumDetail', artist);
  return artist;
}

export async function fetchSongs() {
  const res = await axios.get(BAREURL + '/songs', {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
    params: {page: 1},
  });

  // console.log(res.data);
  const song = res.data.data;

  return song;
}
export async function fetchSongAll() {
  const res = await axios.get(BAREURL + '/songs', {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
    params: {page: 1},
  });
  const res2 = await axios.get(BAREURL + '/songs', {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
    params: {page: 2},
  });
  const res3 = await axios.get(BAREURL + '/songs', {
    headers: {
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTgzNjY4OGM5NmFiZmI2Y2E2YzZmYiIsImlhdCI6MTY3MjU4MjEzMiwiZXhwIjoxNjc1MTc0MTMyfQ.S_a-Bjs7sGJFZIGk4IOgxt47mj1ri9rV9a1ptbdQYXo',
    },
    params: {page: 3},
  });
  // console.log(res.data);
  const song = res.data.data;
  const song2 = res2.data.data;
  const songAll = song.concat(song2);
  const song3 = res3.data.data;
  const songFinal = songAll.concat(song3);
  console.log('asldja Song all', songFinal);

  return songFinal;
}
