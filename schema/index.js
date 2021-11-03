const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const pizzasData = require("../data/pizzas.json");
const orders = require("../data/orders.json");

const PizzaType = require("./typeDefs/PizzaType");
const OrderInputType = require("./typeDefs/OrderInputType");
const OrderType = require("./typeDefs/OrderType");

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    pizzas: {
      type: GraphQLList(PizzaType),
      resolve: () => pizzasData,
    },
    orders: {
      type: GraphQLList(OrderType),
      resolve: () => orders,
    },
  },
});

const rootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createOrder: {
      type: OrderType,
      args: {
        order: {
          type: new GraphQLNonNull(OrderInputType),
        },
      },
      resolve: (_, { order }) => {
        const { totalPrice, totalAmount, orderedPizzas } = order;
        const id = uuidv4();
        const newOrder = {
          id: id,
          totalPrice: totalPrice,
          totalAmount: totalAmount,
          orderedPizzas: orderedPizzas,
        };
        orders.push(newOrder);
        fs.readFile(
          "data/orders.json",
          "utf8",
          function readFileCallback(err, data) {
            if (err) {
              console.log(err);
            } else {
              ordersArr = JSON.parse(data);
              ordersArr.push(newOrder);
              json = JSON.stringify(ordersArr);
              fs.writeFile("data/orders.json", json, "utf8", () => newOrder);
            }
          }
        );
        return newOrder;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});
