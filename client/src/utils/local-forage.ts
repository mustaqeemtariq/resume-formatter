import localForage from 'localforage'

const db = localForage.createInstance({
	driver: localForage.INDEXEDDB,
	name: 'hackathon-db',
	storeName: 'hackathon',
	size: 5 * 1024 * 1024, // 5.24 MBs
	description: 'Hackathon DB'
})

export const indexedStorageDB = {
	db,
	getItem: db.getItem,
	setItem: db.setItem,
	removeItem: db.removeItem,
	clear: db.clear
}
