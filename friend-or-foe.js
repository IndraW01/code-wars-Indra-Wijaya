function friend(friends) {
  return friends.filter(friend => {
    if (friend.length === 4) {
      return friend;
    }
  });
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))