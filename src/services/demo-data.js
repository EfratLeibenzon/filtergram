export const newData = [
    {
        _id: "s101",
        txt: 'here comes the sun ☀️',
        createdAt: 1686119781486,
        imgUrl: './assets/img/profileImg/101.jpeg',
        by: {
            _id: "u101",
            fullname: "Irene__",
            userImgUrl: '/assets/img/profileImg/101.jpeg'
        },
        loc: { // Optional
            lat: 11.11,
            lng: 22.22,
            name: "Tel Aviv"
        },
        comments: [
            {
                id: "c1001",
                by: {
                    _id: "u108",
                    fullname: "joe",
                    imgUrl: '/assets/img/profileImg/logo.jpeg'
                },
                txt: "how you doin?",
                likedBy: [ // Optional
                    {
                        _id: "u102",
                        fullname: "freddie mercury",
                        imgUrl: '/assets/img/profileImg/102.jpeg'
                    }
                ]
            },
            {
                id: "c1002",
                by: {
                    _id: "u103",
                    fullname: "daniel amit",
                    imgUrl: '/assets/img/profileImg/116.jpeg'
                },
                txt: "ASHILI",
            }
        ],
        likedBy: [
            {
                _id: "u103",
                fullname: "daniel amit",
                imgUrl: '/assets/img/profileImg/116.jpeg'
            }, {
                _id: "u108",
                fullname: "joe",
                imgUrl: '/assets/img/profileImg/logo.jpeg'
            }, {
                _id: "u102",
                fullname: "freddie mercury",
                imgUrl: '/assets/img/profileImg/102.jpeg'
            }
        ],
        hashTags: ["cool"]
    },
]

export const users = [
    {
        _id: "u101",
        fullName: "Irene Radvogin",
        userName: "irene_rad",
        mail: 'IreneRadvogin@gmail.com',
        userBio: '',
        userImgUrl: 'https://res.cloudinary.com/duxmabf4n/image/upload/v1685950112/eiqrhchqoliytvlhd60w.jpg',
        followingId: [],
        followersId: [],
        savedStories: [],
        taggedStories: [],
        userStories: []
    },
]

export const hashTags = ['cool', 'food', 'baby', 'nature',]




export const stories = [{
    _id: 's101',
    txt: 'yummy!!',
    createdAt: 1686119781486,
    imgUrl: 'https://res.cloudinary.com/duxmabf4n/image/upload/v1685949752/mvvh6gxmpshxuxit9bth.jpg',
    by: users[0],
    loc: {},
    taggedUsers: [],
    comments: [],
    likedBy: [],
    hashTags: []
}]