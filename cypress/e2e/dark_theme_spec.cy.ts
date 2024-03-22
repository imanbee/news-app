describe("Dark Theme Toggle", () => {
  it("enables dark mode when clicked", () => {
    // Visit the page where the dark theme toggle is located
    cy.visit("/");

    // Click on the dark theme toggle button
    cy.get('[aria-label="Switch to dark theme"]').click({ force: true });

    cy.get("html").invoke("attr", "data-theme").should("eq", "dark");

    cy.get("body").should("have.css", "background-color", "rgb(0, 0, 0)");
  });
});
