export const newData = [
  // {
  //     _id: "s101",
  //     txt: 'here comes the sun ☀️',
  //     createdAt: 1686119781486,
  //     imgUrl: './assets/img/profileImg/101.jpeg',
  //     by: {
  //         _id: "u101",
  //         fullname: "Irene__",
  //         userImgUrl: '/assets/img/profileImg/101.jpeg'
  //     },
  //     loc: { // Optional
  //         lat: 11.11,
  //         lng: 22.22,
  //         name: "Tel Aviv"
  //     },
  //     comments: [
  //         {
  //             id: "c1001",
  //             by: {
  //                 _id: "u108",
  //                 fullname: "joe",
  //                 imgUrl: '/assets/img/profileImg/logo.jpeg'
  //             },
  //             txt: "how you doin?",
  //             likedBy: [ // Optional
  //                 {
  //                     _id: "u102",
  //                     fullname: "freddie mercury",
  //                     imgUrl: '/assets/img/profileImg/102.jpeg'
  //                 }
  //             ]
  //         },
  //         {
  //             id: "c1002",
  //             by: {
  //                 _id: "u103",
  //                 fullname: "daniel amit",
  //                 imgUrl: '/assets/img/profileImg/116.jpeg'
  //             },
  //             txt: "ASHILI",
  //         }
  //     ],
  //     likedBy: [
  //         {
  //             _id: "u103",
  //             fullname: "daniel amit",
  //             imgUrl: '/assets/img/profileImg/116.jpeg'
  //         }, {
  //             _id: "u108",
  //             fullname: "joe",
  //             imgUrl: '/assets/img/profileImg/logo.jpeg'
  //         }, {
  //             _id: "u102",
  //             fullname: "freddie mercury",
  //             imgUrl: '/assets/img/profileImg/102.jpeg'
  //         }
  //     ],
  //     hashTags: ["cool"]
  // },
]

export const users = [
  {
    _id: "u101",
    fullName: "Irene Radvogin",
    userName: "irene_rad",
    password: "mukmuk",
    mail: 'IreneRadvogin@gmail.com', //not in the starter
    userBio: '', //not in the starter
    userImg: { url: 'https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg', style: { filter: 'none' } },
    followingId: [], //provided in the starter as: following
    followersId: [], //provided in the starter as: followers
    following: [
      // {
      //   _id: "u106",
      //   fullname: "Dob",
      //   imgUrl: "http://some-img"
      // }
    ],
    followers: [
      // {
      //   _id: "u105",
      //   fullname: "Bob",
      //   imgUrl: "http://some-img"
      // }
    ],
    savedStories: [], //provided in the starter as savedStoryIds
    taggedStories: [], //not in the starter
    userStories: [] //not in the starter
  },
  {
    _id: "u102",
    fullName: "Jannet Simpson",
    userName: "jannetgirl",
    password: "jannetgirl",
    mail: '', //not in the starter
    userBio: '', //not in the starter
    userImg: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtHTppnHblCfpg_T9M0Xu-hlgJLJgasbk0w&usqp=CAU', style: { filter: 'none' } },
    followingId: [], //provided in the starter as: following
    followersId: [], //provided in the starter as: followers
    following: [
      // {
      //   _id: "u106",
      //   fullname: "Dob",
      //   imgUrl: "http://some-img"
      // }
    ],
    followers: [
      // {
      //   _id: "u105",
      //   fullname: "Bob",
      //   imgUrl: "http://some-img"
      // }
    ],
    savedStories: [], //provided in the starter as savedStoryIds
    taggedStories: [], //not in the starter
    userStories: [] //not in the starter
  },
  {
    _id: "u103",
    fullName: "Johnny Brown",
    userName: "johnny boy",
    password: "johnnyboy",
    mail: '', //not in the starter
    userBio: '', //not in the starter
    userImg: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9nYvaxaQMY2u0Cyyk-5sTjQwJY1yq_NJIQ&usqp=CAU', style: { filter: 'none' } },
    followingId: [], //provided in the starter as: following
    followersId: [], //provided in the starter as: followers
    following: [
      // {
      //   _id: "u106",
      //   fullname: "Dob",
      //   imgUrl: "http://some-img"
      // }
    ],
    followers: [
      // {
      //   _id: "u105",
      //   fullname: "Bob",
      //   imgUrl: "http://some-img"
      // }
    ],
    savedStories: [], //provided in the starter as savedStoryIds
    taggedStories: [], //not in the starter
    userStories: [] //not in the starter
  },
  {
    _id: "Guest",
    fullName: "David Goggins",
    userName: "davidg",
    password: "",
    mail: '', //not in the starter
    userBio: '', //not in the starter
    userImg: { url: 'https://res.cloudinary.com/duxmabf4n/image/upload/v1686570314/wftqmpysimoxouukkpxj.jpg', style: { filter: 'none' } },
    followingId: [], //provided in the starter as: following
    followersId: [], //provided in the starter as: followers
    following: [
      // {
      //   _id: "u106",
      //   fullname: "Dob",
      //   imgUrl: "http://some-img"
      // }
    ],
    followers: [
      // {
      //   _id: "u105",
      //   fullname: "Bob",
      //   imgUrl: "http://some-img"
      // }
    ],
    savedStories: [], //provided in the starter as savedStoryIds
    taggedStories: [], //not in the starter
    userStories: [
      {
        by: {
          followers: [],
          followersId: [],
          following: [],
          followingId: [],
          fullName: "Irene Radvogin",
          mail: "IreneRadvogin@gmail.com",
          password: "mukmuk",
          savedStories: [],
          taggedStories: [],
          userBio: "",
          userImg: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg", style: { filter: 'none' } },
          userName: "irene_rad",
          userStories: [],
          _id: "u101"
        },
        comments: [],
        createdAt: 1686119781486,
        hashTags: [],
        img: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg", style: { filter: 'none' } },
        likedBy: [],
        loc: {},
        taggedUsers: [],
        txt: "yummy!!",
        _id: "s101"
      },
      {
        by: {
          followers: [],
          followersId: [],
          following: [],
          followingId: [],
          fullName: "Irene Radvogin",
          mail: "IreneRadvogin@gmail.com",
          password: "mukmuk",
          savedStories: [],
          taggedStories: [],
          userBio: "",
          userImg: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg", style: { filter: 'none' } },
          userName: "irene_rad",
          userStories: [],
          _id: "u101"
        },
        comments: [],
        createdAt: 1686119781486,
        hashTags: [],
        img: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg", style: { filter: 'none' } },
        likedBy: [],
        loc: {},
        taggedUsers: [],
        txt: "yummy!!",
        _id: "s101"
      },
      {
        by: {
          followers: [],
          followersId: [],
          following: [],
          followingId: [],
          fullName: "Irene Radvogin",
          mail: "IreneRadvogin@gmail.com",
          password: "mukmuk",
          savedStories: [],
          taggedStories: [],
          userBio: "",
          userImg: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg", style: { filter: 'none' } },
          userName: "irene_rad",
          userStories: [],
          _id: "u101"
        },
        comments: [],
        createdAt: 1686119781486,
        hashTags: [],
        img: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg", style: { filter: 'none' } },
        likedBy: [],
        loc: {},
        taggedUsers: [],
        txt: "yummy!!",
        _id: "s101"
      },
      {
        by: {
          followers: [],
          followersId: [],
          following: [],
          followingId: [],
          fullName: "Irene Radvogin",
          mail: "IreneRadvogin@gmail.com",
          password: "mukmuk",
          savedStories: [],
          taggedStories: [],
          userBio: "",
          userImg: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg", style: { filter: 'none' } },
          userName: "irene_rad",
          userStories: [],
          _id: "u101"
        },
        comments: [],
        createdAt: 1686119781486,
        hashTags: [],
        img: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg", style: { filter: 'none' } },
        likedBy: [],
        loc: {},
        taggedUsers: [],
        txt: "yummy!!",
        _id: "s101"
      },
      {
        by: {
          followers: [],
          followersId: [],
          following: [],
          followingId: [],
          fullName: "Irene Radvogin",
          mail: "IreneRadvogin@gmail.com",
          password: "mukmuk",
          savedStories: [],
          taggedStories: [],
          userBio: "",
          userImg: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg", style: { filter: 'none' } },
          userName: "irene_rad",
          userStories: [],
          _id: "u101"
        },
        comments: [],
        createdAt: 1686119781486,
        hashTags: [],
        img: { url: "https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg", style: { filter: 'none' } },
        likedBy: [],
        loc: {},
        taggedUsers: [],
        txt: "yummy!!",
        _id: "s101"
      }
    ] //not in the starter
  },
]

export const hashTags = ['cool', 'food', 'baby', 'nature',]




export const stories = [{
  _id: 's101',
  txt: 'yummy!!',
  createdAt: 1686119781486,
  img: { url: 'https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg', style: { filter: 'none' } },
  by: users[0],
  loc: {},
  taggedUsers: [],
  comments: [],
  likedBy: [],
  hashTags: []
}]