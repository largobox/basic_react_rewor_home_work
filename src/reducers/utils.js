import { OrderedMap } from 'immutable'

export function arrToMap(arr, ItemRecord) {
    return arr.reduce(
        (acc, item) => acc.set(item.id, ItemRecord ? ItemRecord(item) : item),
        new OrderedMap({})
    )
}