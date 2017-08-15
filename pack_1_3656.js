const mike = {
    friends: [
        {
            name: 'Anna',
            avatar: {
                url: 'http://some/url/to/avatar'
            }
        },
        {
            name: 'Masha',
            avatar: {
                url: 'http://some/other/url/to/avatar'
            }
        }
    ]
};

function deepCopy(obj) {
    let clone = {};

    for(key in obj) {
        if(typeof obj[key] === 'object') {
            clone[key] = deepCopy(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}

let cloneObj = deepCopy(mike);
console.log(JSON.stringify(cloneObj));
