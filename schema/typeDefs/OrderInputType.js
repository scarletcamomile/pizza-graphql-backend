const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");
const OrderedPizza = require("./OrderedPizzaInputType");

const OrderType = new GraphQLInputObjectType({
  name: "OrderInput",
  fields: {
    totalPrice: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    totalAmount: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    orderedPizzas: {
      type: new GraphQLList(OrderedPizza),
    },
  },
});

module.exports = OrderType;
