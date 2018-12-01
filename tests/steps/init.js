process.env.order_events_stream = 'orders-dev-martin'
process.env.restaurant_notification_topic = 'restaurants-dev-martin'

let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://tprog49uui.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-martin"
  process.env.AWS_REGION        = "eu-west-1"
  
  initialized = true
}

module.exports = {
  init
}