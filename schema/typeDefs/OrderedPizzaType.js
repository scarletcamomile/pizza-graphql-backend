const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const OrderedPizza = new GraphQLObjectType({
  name: "OrderedPizzas",
  fields: {
    dough: {
      type: GraphQLString,
    },
    size: {
      type: GraphQLInt,
    },
    price: {
      type: GraphQLFloat,
    },
    amount: {
      type: GraphQLInt,
    },
    pizzaName: {
      type: GraphQLString,
    },
  },
});

module.exports = OrderedPizza;
