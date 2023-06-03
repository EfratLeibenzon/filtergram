const storiesDemoData = [
    {
        _id: "s101",
        txt: 'here comes the sun ☀️',
        imgUrl: '/assets/img/profileImg/101.jpeg',
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
        tags: ["cool"]
    }, {
        _id: "s102",
        txt: 'shocking!!',
        imgUrl: '/assets/img/114.jpeg',
        by: {
            _id: "u107",
            fullname: "hapshuta",
            imgUrl: '/assets/img/profileImg/123.jpeg'
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
                txt: "😂😂😂",

            },
            {
                id: "c1002",
                by: {
                    _id: "u103",
                    fullname: "daniel amit",
                    imgUrl: '/assets/img/profileImg/116.jpeg'
                },
                txt: "😮😮",
            }
        ],
        likedBy: [
            {
                _id: "u101",
                fullname: "Irene__",
                userImgUrl: '/assets/img/profileImg/101.jpeg'
            }, {
                _id: "u102",
                fullname: "freddie mercury",
                imgUrl: '/assets/img/profileImg/102.jpeg'
            }, {
                _id: "u103",
                fullname: "daniel amit",
                imgUrl: '/assets/img/profileImg/116.jpeg'
            }, {
                _id: "u104",
                fullname: "hagit asaf",
                imgUrl: '/assets/img/profileImg/118.jpeg'
            }, {
                "_id": "u105",
                fullname: "miss_foddie",
                imgUrl: '/assets/img/profileImg/122.jpeg'
            }, {
                _id: "u106",
                fullname: "beyonce",
                imgUrl: '/assets/img/profileImg/124.jpeg'
            }, {
                _id: "u107",
                fullname: "hapshuta",
                imgUrl: '/assets/img/profileImg/123.jpeg'
            }, {
                _id: "u108",
                fullname: "joe",
                imgUrl: '/assets/img/profileImg/logo.jpeg'
            }
        ],
        tags: ["cool"]
    }, {
        _id: "s103",
        txt: 'hello france',
        imgUrl: '/assets/img/128.jpeg',
        by: {
            _id: "u106",
            fullname: "beyonce",
            imgUrl: '/assets/img/profileImg/124.jpeg'
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
                txt: "😂😂😂",

            },
            {
                id: "c1002",
                by: {
                    _id: "u103",
                    fullname: "daniel amit",
                    imgUrl: '/assets/img/profileImg/116.jpeg'
                },
                txt: "❤️❤️❤️",
            }, {
                id: "c1003",
                by: {
                    _id: "u102",
                    fullname: "freddie mercury",
                    imgUrl: '/assets/img/profileImg/102.jpeg'
                },
                txt: "🫠🫠🫠🫠🫠🫠🫠🫠",
            }, {
                id: "c1004",
                by: {
                    "_id": "u105",
                    fullname: "miss_foddie",
                    imgUrl: '/assets/img/profileImg/122.jpeg'
                },
                txt: "yummy!!",
            }
        ],
        likedBy: [
            {
                _id: "u101",
                fullname: "Irene__",
                userImgUrl: '/assets/img/profileImg/101.jpeg'
            }, {
                _id: "u102",
                fullname: "freddie mercury",
                imgUrl: '/assets/img/profileImg/102.jpeg'
            }, {
                _id: "u103",
                fullname: "daniel amit",
                imgUrl: '/assets/img/profileImg/116.jpeg'
            }, {
                _id: "u104",
                fullname: "hagit asaf",
                imgUrl: '/assets/img/profileImg/118.jpeg'
            }, {
                "_id": "u105",
                fullname: "miss_foddie",
                imgUrl: '/assets/img/profileImg/122.jpeg'
            }, {
                _id: "u106",
                fullname: "beyonce",
                imgUrl: '/assets/img/profileImg/124.jpeg'
            }, {
                _id: "u107",
                fullname: "hapshuta",
                imgUrl: '/assets/img/profileImg/123.jpeg'
            }, {
                _id: "u108",
                fullname: "joe",
                imgUrl: '/assets/img/profileImg/logo.jpeg'
            }
        ],
        tags: ["cool"]
    }, {
        _id: "s104",
        txt: 'my little angel 👼🏾',
        imgUrl: '/assets/img/130.jpeg',
        by: {
            _id: "u106",
            fullname: "beyonce",
            imgUrl: '/assets/img/profileImg/124.jpeg'
        },
        comments: [
            {
                id: "c1001",
                by: {
                    _id: "u108",
                    fullname: "joe",
                    imgUrl: '/assets/img/profileImg/logo.jpeg'
                },
                txt: "I LOVE BLU!!",

            },
            {
                id: "c1002",
                by: {
                    _id: "u103",
                    fullname: "daniel amit",
                    imgUrl: '/assets/img/profileImg/116.jpeg'
                },
                txt: "❤️❤️❤️",
            }, {
                id: "c1003",
                by: {
                    _id: "u102",
                    fullname: "freddie mercury",
                    imgUrl: '/assets/img/profileImg/102.jpeg'
                },
                txt: "star like her mama",
            }, {
                id: "c1004",
                by: {
                    "_id": "u105",
                    fullname: "miss_foddie",
                    imgUrl: '/assets/img/profileImg/122.jpeg'
                },
                txt: "so sweet🫠",
            }
        ],
        likedBy: [
            {
                _id: "u101",
                fullname: "Irene__",
                userImgUrl: '/assets/img/profileImg/101.jpeg'
            }, {
                _id: "u102",
                fullname: "freddie mercury",
                imgUrl: '/assets/img/profileImg/102.jpeg'
            }, {
                _id: "u103",
                fullname: "daniel amit",
                imgUrl: '/assets/img/profileImg/116.jpeg'
            }, {
                _id: "u104",
                fullname: "hagit asaf",
                imgUrl: '/assets/img/profileImg/118.jpeg'
            }, {
                "_id": "u105",
                fullname: "miss_foddie",
                imgUrl: '/assets/img/profileImg/122.jpeg'
            }, {
                _id: "u106",
                fullname: "beyonce",
                imgUrl: '/assets/img/profileImg/124.jpeg'
            }, {
                _id: "u107",
                fullname: "hapshuta",
                imgUrl: '/assets/img/profileImg/123.jpeg'
            }, {
                _id: "u108",
                fullname: "joe",
                imgUrl: '/assets/img/profileImg/logo.jpeg'
            }
        ],
        tags: ['baby']
    }, {
        _id: "s105",
        txt: '',
        imgUrl: '/assets/img/130.jpeg',
        by: {
            _id: "u106",
            fullname: "beyonce",
            imgUrl: '/assets/img/profileImg/124.jpeg'
        },
        comments: [
            {
                id: "c1001",
                by: {
                    _id: "u107",
                    fullname: "hapshuta",
                    imgUrl: '/assets/img/profileImg/123.jpeg'
                },
                txt: "I M A L E !",

            },
            {
                id: "c1002",
                by: {
                    "_id": "u105",
                    fullname: "miss_foddie",
                    imgUrl: '/assets/img/profileImg/122.jpeg'
                },
                txt: "my idol 😍",
            }, {
                id: "c1003",
                by: {
                    _id: "u104",
                    fullname: "hagit asaf",
                    imgUrl: '/assets/img/profileImg/118.jpeg'
                },
                txt: "god is a woman",
            },
        ],
        likedBy: [
            {
                _id: "u101",
                fullname: "Irene__",
                userImgUrl: '/assets/img/profileImg/101.jpeg'
            }, {
                _id: "u102",
                fullname: "freddie mercury",
                imgUrl: '/assets/img/profileImg/102.jpeg'
            }, {
                _id: "u103",
                fullname: "daniel amit",
                imgUrl: '/assets/img/profileImg/116.jpeg'
            }, {
                _id: "u104",
                fullname: "hagit asaf",
                imgUrl: '/assets/img/profileImg/118.jpeg'
            }, {
                "_id": "u105",
                fullname: "miss_foddie",
                imgUrl: '/assets/img/profileImg/122.jpeg'
            }, {
                _id: "u106",
                fullname: "beyonce",
                imgUrl: '/assets/img/profileImg/124.jpeg'
            }, {
                _id: "u107",
                fullname: "hapshuta",
                imgUrl: '/assets/img/profileImg/123.jpeg'
            }, {
                _id: "u108",
                fullname: "joe",
                imgUrl: '/assets/img/profileImg/logo.jpeg'
            }
        ],
        tags: ['baby']
    }, {
        _id: "s106",
        txt: 'I want to break free',
        imgUrl: '/assets/img/127.jpeg',
        by: {
            _id: "u102",
            fullname: "freddie mercury",
            imgUrl: '/assets/img/profileImg/102.jpeg'
        },
        comments: [
            {
                id: "c1001",
                by: {
                    _id: "u107",
                    fullname: "hapshuta",
                    imgUrl: '/assets/img/profileImg/123.jpeg'
                },
                txt: "love of me life",

            },
            {
                id: "c1002",
                by: {
                    "_id": "u105",
                    fullname: "miss_foddie",
                    imgUrl: '/assets/img/profileImg/122.jpeg'
                },
                txt: "who cares?!1",
            }, {
                id: "c1003",
                by: {
                    _id: "u106",
                    fullname: "beyonce",
                    imgUrl: '/assets/img/profileImg/124.jpeg'
                },
                txt: "do it baby!",
            },
        ],
        likedBy: [
            {
                _id: "u101",
                fullname: "Irene__",
                userImgUrl: '/assets/img/profileImg/101.jpeg'
            }, {
                _id: "u102",
                fullname: "freddie mercury",
                imgUrl: '/assets/img/profileImg/102.jpeg'
            }, {
                _id: "u103",
                fullname: "daniel amit",
                imgUrl: '/assets/img/profileImg/116.jpeg'
            }, {
                _id: "u104",
                fullname: "hagit asaf",
                imgUrl: '/assets/img/profileImg/118.jpeg'
            }, {
                "_id": "u105",
                fullname: "miss_foddie",
                imgUrl: '/assets/img/profileImg/122.jpeg'
            }, {
                _id: "u106",
                fullname: "beyonce",
                imgUrl: '/assets/img/profileImg/124.jpeg'
            }, {
                _id: "u107",
                fullname: "hapshuta",
                imgUrl: '/assets/img/profileImg/123.jpeg'
            }, {
                _id: "u108",
                fullname: "joe",
                imgUrl: '/assets/img/profileImg/logo.jpeg'
            }
        ],
        tags: ['baby']
    },
]

const users = [
    {
        _id: "u101",
        fullname: "Irene__",
        userImgUrl: '/assets/img/profileImg/101.jpeg'
    }, {
        _id: "u102",
        fullname: "freddie mercury",
        imgUrl: '/assets/img/profileImg/102.jpeg'
    }, {
        _id: "u103",
        fullname: "daniel amit",
        imgUrl: '/assets/img/profileImg/116.jpeg'
    }, {
        _id: "u104",
        fullname: "hagit asaf",
        imgUrl: '/assets/img/profileImg/118.jpeg'
    }, {
        "_id": "u105",
        fullname: "miss_foddie",
        imgUrl: '/assets/img/profileImg/122.jpeg'
    }, {
        _id: "u106",
        fullname: "beyonce",
        imgUrl: '/assets/img/profileImg/124.jpeg'
    }, {
        _id: "u107",
        fullname: "hapshuta",
        imgUrl: '/assets/img/profileImg/123.jpeg'
    }, {
        _id: "u108",
        fullname: "joe",
        imgUrl: '/assets/img/profileImg/logo.jpeg'
    }
]

const tags = ['cool', 'food', 'baby', 'nature',]


function getData() {
    return storiesDemoData
}