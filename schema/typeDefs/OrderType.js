const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLFloat,
} = require("graphql");
const OrderedPizza = require("./OrderedPizzaType");

const OrderType = new GraphQLObjectType({
  name: "Order",
  fields: {
    id: {
      type: GraphQLID,
    },
    totalPrice: {
      type: GraphQLFloat,
    },
    totalAmount: {
      type: GraphQLInt,
    },
    orderedPizzas: {
      type: new GraphQLList(OrderedPizza),
    },
  },
});

module.exports = OrderType;
