const mike = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: 'http://some/url/to/avatar'
        }
    }]
};

function parseAvatarUrl(user) {
    let userFirstFriend = user.friends[0];
    let parsedUrl = 'http://default/url/to/avatar';

    if(typeof userFirstFriend !== undefined) {
        if(typeof userFirstFriend.avatar.url !== undefined) {
            parsedUrl = userFirstFriend.avatar.url;
        }
    }

    return parsedUrl;
}

console.log(parseAvatarUrl(mike));