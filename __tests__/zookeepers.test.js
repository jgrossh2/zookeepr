const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");
jest.mock('fs');

test('creates a new zookeeper', () => {
    const zookeeper = createNewZookeeper(
        { name: "Jo", id: "123abc"},
        zookeepers
    );
    expect(zookeeper.name).toBe("Jo");
    expect(zookeeper.id).toBe("123abc");
});
test('filters by query', () => {
    const startingZookeepers = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
        },
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
        },
    ];
    const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);
    expect(updatedZookeepers.length).toEqual(1);
});
test('finds by id', () => {
    const startingZookeepers = [
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
        },
        {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
        },
    ];
    const result = findById("2", startingZookeepers);

    expect(result.name).toBe("Isabella");
});
test('validates zookeeper information', () => {
    const zookeeper = {
        id: "1",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin"
    };
    const invalidZookeeper = {
        id: "1",
        name: "Raksha",
        age: 31,
    };
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})