export default (state = 0, action) => {
	console.log('执行reducer前，state='+state);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
  console.log('执行reducer后，state='+state);
}
