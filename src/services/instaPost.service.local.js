
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'instaPost'

let gInstaPosts

const instaPostsData = [{
    _id: "s101",
    txt: 'how you doin',
    imgUrl: `https://robohash.org/"s101".png?set=any&?size=100x100`,
    by: {
        _id: "u101",
        fullname: "Ulash Ulashi",
        userImgUrl: `https://robohash.org/"u101".png?set=any&?size=100x100`
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
                _id: "u105",
                fullname: "Bob",
                imgUrl: "http://some-img"
            },
            txt: "good one!",
            likedBy: [ // Optional
                {
                    "_id": "u105",
                    "fullname": "Bob",
                    "imgUrl": "http://some-img"
                }
            ]
        },
        {
            id: "c1002",
            by: {
                _id: "u106",
                fullname: "Dob",
                imgUrl: "http://some-img"
            },
            txt: "not good!",
        }
    ],
    likedBy: [
        {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img"
        },
        {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img"
        }
    ],
    tags: ["fun", "romantic"]
},
{
    _id: "s102",
    txt: 'how you doin 2',
    imgUrl: `https://robohash.org/"s102".png?set=any&?size=100x100`,
    by: {
        _id: "u102",
        fullname: "bitch",
        userImgUrl: `https://robohash.org/"u102".png?set=any&?size=100x100`
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
                _id: "u105",
                fullname: "Bob",
                imgUrl: "http://some-img"
            },
            txt: "good one!",
            likedBy: [ // Optional
                {
                    "_id": "u105",
                    "fullname": "Bob",
                    "imgUrl": "http://some-img"
                }
            ]
        },
        {
            id: "c1002",
            by: {
                _id: "u106",
                fullname: "Dob",
                imgUrl: "http://some-img"
            },
            txt: "not good!",
        }
    ],
    likedBy: [
        {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img"
        },
        {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img"
        },
        {
            _id: "u107",
            fullname: "Bob",
            imgUrl: "http://some-img"
        }
    ],
    tags: ["fun", "romantic"]
}]

_createInstaPosts()

export const instaPostService = {
    query,
    getById,
    save,
    remove,
    getEmptyInstaPost,
    // addInstaPostMsg
}
window.cs = instaPostService


async function query() {
    // filterBy = { by: '', tags: [] }
    var instaPosts = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     instaPosts = instaPosts.filter(instaPost => regex.test(instaPost.vendor) || regex.test(instaPost.description))
    // }
    // if (filterBy.price) {
    //     instaPosts = instaPosts.filter(instaPost => instaPost.price <= filterBy.price)
    // }
    return instaPosts
}

function getById(instaPostId) {
    return storageService.get(STORAGE_KEY, instaPostId)
}

async function remove(instaPostId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, instaPostId)
}

async function save(instaPost) {
    var savedInstaPost
    if (instaPost._id) {
        savedInstaPost = await storageService.put(STORAGE_KEY, instaPost)
    } else {
        // Later, owner is set by the backend
        // instaPost.owner = 'userService.getLoggedinUser()'
        savedInstaPost = await storageService.post(STORAGE_KEY, instaPost)
    }
    return savedInstaPost
}

// async function addInstaPostMsg(instaPostId, txt) {
//     // Later, this is all done by the backend
//     const instaPost = await getById(instaPostId)
//     if (!instaPost.msgs) instaPost.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: ' userService.getLoggedinUser()',
//         txt
//     }
//     instaPost.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, instaPost)

//     return msg
// }

function getEmptyInstaPost() {
    return {
        txt: "",
        imgUrl: "http://some-img",
        by: {
            _id: "u101",
            fullname: "Ulash Ulashi",
            imgUrl: "http://some-img"
        },
        // loc: { // Optional
        //     lat: 11.11,
        //     lng: 22.22,
        //     name: "Tel Aviv"
        // },

        comments: [],
        tags: []
    }
}

function _createInstaPosts() {
    gInstaPosts = utilService.loadFromStorage(STORAGE_KEY)
    if (gInstaPosts && gInstaPosts.length > 0) return

    gInstaPosts = instaPostsData.map(instaPost => {
        const id = utilService.makeId()
        return { ...instaPost, _id: id }
    })
    _saveInstaPosts()

}

function _saveInstaPosts() {
    utilService.saveToStorage(STORAGE_KEY, gInstaPosts)
}



