import Data from './data.json';

export default class DataReader {
    static getData() {
        const data = Data.items;
        return { items: data, selectedItem: data[0] };
    }
}
