export default OnMiddleware(
  (event, next) => {
    console.log('event', event)
    next()
  },
  ['message.create']
)
