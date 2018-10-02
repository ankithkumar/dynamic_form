let typeObject = {};
function init() {
    dataStorage = localDataStorage('storage');
    if (!dataStorage.get('typeObject')) {
        console.log('init');
        typeObject = {
            type1: {
                count: 0,
                name: 'type1'
            },
            type2: {
                count: 0,
                name: 'type2'
            },
            type3: {
                count: 0,
                name: 'type3'
            }
        }
        dataStorage.set('typeObject', typeObject);
    } else {
        console.log('exists!!');
        typeObject = dataStorage.get('typeObject');
    }
}

function getData() {
    console.log('getting data ', dataStorage.get('typeObject'));
    return dataStorage.get('typeObject');
}
function storeData(type, comment) {
    console.log(`type: ${type}, comment: ${comment}`);
    switch(type) {
        case typeObject.type1.name: typeObject.type1.count++; break;
        case typeObject.type2.name: typeObject.type2.count++; break;
        case typeObject.type3.name: typeObject.type3.count++;
    }
    dataStorage.set('typeObject', typeObject);
    console.log(typeObject);
}

function storageFactory() {
    return {
        init,
        storeData,
        getData,
    }
}