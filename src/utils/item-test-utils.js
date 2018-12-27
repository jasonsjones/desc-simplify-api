export const getMockItemData = userId => {
    return {
        clothingItemWithNote: {
            clientId: '12345678',
            clientRequest: '5c0179dd9c55a711053087cb',
            submittedBy: userId,
            location: 'Rainier House',
            itemCategory: 'Clothing',
            numberOfItems: 1,
            name: 'coat',
            size: 'L (42-44)',
            gender: 'M',
            note: 'Need a warm coat for the fall season'
        },
        householdItemWithNote: {
            clientId: '12345678',
            clientRequest: '5c0179dd9c55a711053087cb',
            submittedBy: userId,
            location: 'Rainier House',
            itemCategory: 'Household',
            numberOfItems: 4,
            name: 'plates',
            note: 'Need some plates for a nice holiday dinner'
        },
        householdItemWithoutNote: {
            clientId: '12345678',
            clientRequest: '5c0179dd9c55a711053087cb',
            submittedBy: userId,
            location: 'Rainier House',
            itemCategory: 'Household',
            numberOfItems: 2,
            name: 'bedding'
        },
        personalHygieneItemWithoutNote: {
            clientId: '12345678',
            clientRequest: '5c0179dd9c55a711053087cb',
            submittedBy: userId,
            location: 'Rainier House',
            itemCategory: 'PersonalHygiene',
            numberOfItems: 1,
            name: 'toothbrush'
        }
    };
};

const requiredItemProperties = {
    clientId: '12345678',
    clientRequest: '5c205c9a63c8b44e41bbaa4a',
    submittedBy: '5bb69cb1322fdf5690edfc0b',
    location: 'Rainier House'
};

export const shirtItemData = Object.assign({}, requiredItemProperties, {
    name: 'shirt',
    gender: 'M',
    size: 'L (42-44)'
});

export const hatItemData = Object.assign({}, requiredItemProperties, {
    name: 'hat',
    gender: 'F'
});

export const gameItemData = Object.assign({}, requiredItemProperties, { name: 'games' });
export const beddingItemData = Object.assign({}, requiredItemProperties, { name: 'bedding' });
export const soapItemData = Object.assign({}, requiredItemProperties, { name: 'soap' });
