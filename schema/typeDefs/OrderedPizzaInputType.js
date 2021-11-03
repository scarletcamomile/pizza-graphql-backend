const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const OrderedPizza = new GraphQLInputObjectType({
  name: "OrderedPizzasInput",
  fields: {
    dough: {
      type: new GraphQLNonNull(GraphQLString),
    },
    size: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    pizzaName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = OrderedPizza;
