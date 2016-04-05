var names = {};

names.nameList = [
"♥lag maker",
"#stopbot",
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
