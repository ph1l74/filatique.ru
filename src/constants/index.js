export const initLinks = [
  {
    label: "Listen",
    url: "#listen",
  },
  {
    label: "Press",
    url: "#press",
  },
  {
    label: "Socials",
    url: "#socials",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

export const icons = {
  apple: 'apple',
  spotify: 'spotify',
  youtube: 'youtube'
}

const releasers = {
  appleMusic: {
    icon: icons.apple,
    label: 'Apple Music'
  },
  spotify: {
    icon: icons.spotify,
    label: 'Spotify'
  },
  youtube: {
    icon: icons.youtube,
    label: 'Youtube Music'
  }
}

export const releases = [
  {
    label: "Ни барабанов, ни труб",
    year: "2014",
    img: "/img/album1.jpg",
    description: "filatique — это чистый лист в творчестве одного мертвого романтика, это попытка абстрагироваться от надоевших часом beats'ов, это коктейль из нежнейших эмоций и теплого джазового звучания с добавлением инструментального хип-хопа. Просто нажмите на «Play».",
    links: [
      {
        releaser: releasers.appleMusic,
        url: 'https://music.apple.com/ru/album/%D0%BD%D0%B8-%D0%B1%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2-%D0%BD%D0%B8-%D1%82%D1%80%D1%83%D0%B1/1519196123'
      },
      {
        releaser: releasers.spotify,
        url: 'https://open.spotify.com/album/3V8i9w61YUBQ6zQqnZkMgn'
      },
      {
        releaser: releasers.youtube,
        url: 'https://www.youtube.com/watch?v=YvSz5x7Gmzs&list=OLAK5uy_l8ncIIjfoOQ_xTz5ntMsQaaLMzl5odX0I&ab_channel=Filatique-Topic'
      }
    ]
  },
  {
    label: "Nightroads",
    year: "2015",
    img: "/img/album2.jpg",
    description: "Nightroads — мой второй альбом, представляющий из себя историю историй. Десять совершенно разных сюжетов, объединенных тем, что собраны они одним человеком. Название выбрано не случайно, так как в основе идеи для альбома лежит почти что одноименная книга Гайто Газданова «Ночные дороги». Главным героем книги является водитель такси, работающий каждую ночь на улицах Парижа. Именно это атмосферу ночной столицы Франции я и хотел передать. В качестве обложки была выбрана картина Джеймса Уистлера, которая вызывает в моей голове образы одиноких парижских столбов, наблюдающих за проносящимися снизу автомобилями. В общем, приятного прослушивания и погружения.",
    links: [
      {
        releaser: releasers.appleMusic,
        url: 'https://music.apple.com/ru/album/%D0%BD%D0%B8-%D0%B1%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2-%D0%BD%D0%B8-%D1%82%D1%80%D1%83%D0%B1/1519196123'
      },
      {
        releaser: releasers.spotify,
        url: 'https://open.spotify.com/album/3V8i9w61YUBQ6zQqnZkMgn'
      },
    ]
  },
  {
    label: "Nanashi EP",
    year: "2016",
    img: "/img/album3.jpg",
    description: "Nanashi — сборник из 10 треков, который немного отличается от предыдущих релизов своим звучанием и отсутствием общей идеи/концепта. Именно поэтому релиз носит такое название (名無し (nanashi) — безымянный). Это небольшой эксперимент, попытка выйти за грани привычного для меня формата, которая, как мне кажется, получилась вполне успешной... «Nanashi» — это не просто концептуальный альбом, это мистическое и метафизическое путешествие в голову filatique: элегантные апбиты разбивающие границы между джазом, электроникой, хип-хопом и высоким кино.",
    links: [
      {
        releaser: releasers.appleMusic,
        url: 'https://music.apple.com/ru/album/%D0%BD%D0%B8-%D0%B1%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2-%D0%BD%D0%B8-%D1%82%D1%80%D1%83%D0%B1/1519196123'
      },
      {
        releaser: releasers.spotify,
        url: 'https://open.spotify.com/album/3V8i9w61YUBQ6zQqnZkMgn'
      },
    ]
  },
];