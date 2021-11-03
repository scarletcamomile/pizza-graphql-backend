const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = require("graphql");
const ModificationType = require("./ModificationType");

const modificationsData = require("../../data/modifications.json");

const PizzaType = new GraphQLObjectType({
  name: "Pizza",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    },
    popularity: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    modifications: {
      type: GraphQLList(ModificationType),
      resolve(parentValue) {
        return modificationsData.filter((modification) =>
          modification.pizzasIds.includes(parentValue.id)
        );
      },
    },
  },
});

module.exports = PizzaType;
