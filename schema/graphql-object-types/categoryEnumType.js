const { GraphQLEnumType } = require('graphql');

const CategoryEnumType = new GraphQLEnumType({
    name:'category',
    values: {
        FRONDEND: { value: 'FrontEnd' },
        BACKEND: { value: 'BackEnd' },
        DB: { value: 'DataBase' },
        OTHERS: { value: 'others' }
    }
});

module.exports = { CategoryEnumType };