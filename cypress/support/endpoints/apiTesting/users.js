import { onlyIdUser, userName, constants } from "../../utilities/defaultVariables";

export const createUser = () => {
	it("Create User", () => {
		const body = {
			id: onlyIdUser,
			username: userName,
			firstName: "Name",
			lastName: "Test",
			email: `${userName}@gmail.com`,
			password: constants.pass,
			phone: "+56912331234",
			userStatus: 0,
		};
		cy.request({
			method: "POST",
			url: `${Cypress.env("apiTesting").urlBase}/user`,
			body,
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			expect(response).property("status").to.equal(200);
			cy.log(JSON.stringify(response.body));
			expect(response).property("body").property("code").to.exist;
			expect(response).property("body").property("type").to.exist;
			expect(response).property("body").property("message").to.exist;
			const correo = body.email;
			cy.log("email", correo);
			cy.log("pass", constants.pass);
			cy.log("ID", onlyIdUser);
			cy.log("userName", userName);
		});
	});
}

export const loginUser = () => {
	it("Login User", () => {
		cy.request({
			qs: {
				username: userName,
				password: constants.pass,
			},
			method: "GET",
			url: `${Cypress.env("apiTesting").urlBase}/user/login`,
			headers: {
				"Accept": "application/json",
			},
		}).then((response) => {
			expect(response).property("status").to.equal(200);
			cy.log(JSON.stringify(response.body));
		});
	});
}

export const userLogout = () => {
	it("User Logout", () => {
		cy.request({
			method: "GET",
			url: `${Cypress.env("apiTesting").urlBase}/user/logout`,
		}).then((response) => {
			expect(response).property("status").to.equal(200);
			cy.log(JSON.stringify(response.body));
		});
	})
}