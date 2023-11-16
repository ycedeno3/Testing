import {
    createUser,
    loginUser
} from "../../support/endpoints/apiTesting/users";
describe("Flow related to Users", () => {
    createUser();
    loginUser();
})