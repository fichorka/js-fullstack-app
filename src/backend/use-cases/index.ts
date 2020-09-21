import makeAddUser from './user/add-user'
import makeEditUser from './user/edit-user'
import makeListUsers from './user/list-users'
import makeRemoveUser from './user/remove-user'
import { itemsDb, usersDb } from '../db'
import { makeAddItem } from './item'

const listUsers = makeListUsers({ usersDb })
const addUser = makeAddUser({ usersDb })
const editUser = makeEditUser({ usersDb })
const removeUser = makeRemoveUser({ usersDb })

const addItem = makeAddItem({ itemsDb })

export { listUsers, addUser, editUser, removeUser, addItem }
