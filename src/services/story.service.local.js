
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'story'

let gStorys

const storysData = [{
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

_createStorys()

export const storyService = {
    query,
    getById,
    save,
    remove,
    getEmptyStory,
    // addStoryMsg
}
window.cs = storyService


async function query() {
    // filterBy = { by: '', tags: [] }
    var storys = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     storys = storys.filter(story => regex.test(story.vendor) || regex.test(story.description))
    // }
    // if (filterBy.price) {
    //     storys = storys.filter(story => story.price <= filterBy.price)
    // }
    return storys
}

function getById(storyId) {
    return storageService.get(STORAGE_KEY, storyId)
}

async function remove(storyId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, storyId)
}

async function save(story) {
    var savedStory
    if (story._id) {
        savedStory = await storageService.put(STORAGE_KEY, story)
    } else {
        // Later, owner is set by the backend
        // story.owner = 'userService.getLoggedinUser()'
        savedStory = await storageService.post(STORAGE_KEY, story)
    }
    return savedStory
}

// async function addStoryMsg(storyId, txt) {
//     // Later, this is all done by the backend
//     const story = await getById(storyId)
//     if (!story.msgs) story.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: ' userService.getLoggedinUser()',
//         txt
//     }
//     story.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, story)

//     return msg
// }

function getEmptyStory() {
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

function _createStorys() {
    gStorys = utilService.loadFromStorage(STORAGE_KEY)
    if (gStorys && gStorys.length > 0) return

    gStorys = storysData.map(story => {
        const id = utilService.makeId()
        return { ...story, _id: id }
    })
    _saveStorys()

}

function _saveStorys() {
    utilService.saveToStorage(STORAGE_KEY, gStorys)
}



