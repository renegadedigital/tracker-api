import { fileLoader, mergeTypes } from "merge-graphql-schemas"

export default mergeTypes(fileLoader(__dirname), { all: true })
