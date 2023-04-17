const location =
  'https://freecodecamp.org/learn/2022/responsive-web-design/learn-accessibility-by-building-a-quiz/step-2';
const selectors = {
  monacoTabs: '.monaco-editor-tabs',
  signInButton: '[data-cy=sign-in-button]',
  submitLowerJawButton: '[data-cy=submit-lowerJaw-button]',
  checkLowerJawButton: '[data-cy=check-lowerJaw-button]',
  resetCodeButton: '[data-cy=reset-code-button]',
  instructionContainer: '.action-row-container'
};

describe('Challenge with multifile editor', () => {
  // Page will change after this test. If your test requires page used in previous
  // tests make sure it is above this one
  it('prompts unauthenticated user to sign in to save progress', () => {
    cy.visit(location);
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />{ctrl+enter}');
    cy.get(selectors.signInButton).contains("Sign in to save your progress");
    cy.contains("Congratulations, your code passes. Submit your code to continue.");
    cy.get(selectors.signInButton).click();
    cy.go('back');
    cy.get(selectors.signInButton).should('not.exist');
  });
  it('focuses the submit button after testing a valid solution', () => {
    cy.visit(location);
    cy.focused().type('{end}{enter}<meta charset="UTF-8" />');
    cy.get(selectors.checkLowerJawButton).should('not.be.focused');
    cy.get(selectors.checkLowerJawButton).click();
    cy.get(selectors.submitLowerJawButton).should('be.focused');
  });
});
