const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
} = require("graphql");

const ModificationType = new GraphQLObjectType({
  name: "PizzaModification",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    dough: {
      type: new GraphQLNonNull(GraphQLString),
    },
    size: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    pizzasIds: {
      type: new GraphQLList(GraphQLString),
    },
  },
});

module.exports = ModificationType;
