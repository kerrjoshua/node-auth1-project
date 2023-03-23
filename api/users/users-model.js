const db = require('../../data/db-config')

/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
exports.find = async function find() {
  const users = await db.select('username', 'user_id').from('users').orderBy('user_id')
  return users
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
  exports.findBy = async function findBy(filter) {
    try{
      return await db('users').where(filter)

    }
    catch (err) {
      return err
    }
    
  
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
  const findById = async function findById(user_id) {
    return await db.select('username', 'user_id').from('users').where('user_id', user_id).first()
}

/**
  resolves to the newly inserted user { user_id, username }
 */
exports.add = async function add(user) {
 const [id] =  await db('users').insert(user)
 return await findById(id)
}



