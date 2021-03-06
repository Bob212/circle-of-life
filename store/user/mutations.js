export default {
  INCREASE_STAT(state, payload) {
    if (state.stats.free < 1) return

    state.stats[payload] += 1
    state.stats.free -= 1
  },

  DRESS_ITEM(state, payload) {
    state.equipped[payload.type] = payload.id
  },

  UNDRESS_ITEM(state, itemType) {
    state.equipped[itemType] = null
  },

  PUT_ON_AVATAR(state, payload) {
    state.common.avatar = payload
  },

  THROW_ITEM_FROM_INVENTORY(state, payload) {
    state.inventory = state.inventory.filter(el => el !== payload )
  },

  MAP_MOVE(state, payload) {
    switch (payload) {
      case '↑':
        state.position.y -= 1
        break
      case '←':
        state.position.x -= 1
        break
      case '→':
        state.position.x += 1
        break
      case '↓':
        state.position.y += 1
        break
    }
  },
}
