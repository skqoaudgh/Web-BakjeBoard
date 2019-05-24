const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Post {
        _id: ID!
        Title: String!
        Comment: String!
        Tag: [String!]
        Filedata: String!
        Author: User!
        createdAt: String!
        updatedAt: String!
    }

    input PostInput {
        Title: String!
        Comment: String!
        Tag: [String!]
        Filedata: String!
    }

    type User {
        _id: ID!
        ID: String!
        Password: String
        Name: String!
    }

    type AuthData {
        UserId: ID!
        token: String!
        tokenExpiration: String!
    }

    input UserInput {
        ID: String!
        Password: String!
        Name: String!
    }

    type RootQuery {
        posts: [Post!]!
        login(ID: String!, Password: String!): AuthData!
    }

    type RootMutation {
        createPost(postInput: PostInput): Post
        signUp(userInput: UserInput): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);