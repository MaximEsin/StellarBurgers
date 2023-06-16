describe('application is working', function () {
  const ingredientId = '[data-cy="60d3b41abdacab0026a733cb"]';
  const secondIngredientId = '[data-cy="60d3b41abdacab0026a733cc"]';

  beforeEach(function () {
    cy.viewport(1920, 1024);
    cy.visit('http://localhost:3001');
  });

  it('check connection', function () {
    cy.contains('Соберите бургер');
  });

  it('should open order modal or redirect to login', function () {
    cy.get('button').contains('Оформить заказ').click();
  });

  it('should log in', function () {
    const email = 'praydentib@gmail.com';
    const password = 'www';
    cy.visit('http://localhost:3001/login');
    cy.get('input').first().type(email);
    cy.get('input').last().type(password);
    cy.get('button').first().click();
  });

  it('should open ingredient modal', function () {
    cy.get('[class^="BurgerIngredients_ingredientCard"]').first().click();
    cy.contains('Детали ингредиента');
  });

  it('should close ingredient modal by button', function () {
    cy.get('[class^="BurgerIngredients_ingredientCard"]').first().click();
    cy.get('[class^="Modal_cross"]').click({ multiple: true, force: true });
    cy.visit('http://localhost:3001');
  });

  it('should check drag and drop and make order', () => {
    cy.contains('Краторная булка N-200i').trigger('dragstart');
    cy.get('[class^="BurgerConstructor_ingredientsList"]').trigger('drop');
    cy.get('[class^="BurgerConstructor_ingredientsList"]').contains(
      'Краторная булка N-200i'
    );
    cy.contains('Говяжий метеорит (отбивная)').trigger('dragstart');
    cy.get('[class^="BurgerConstructor_ingredientsList"]').trigger('drop');
    cy.get('[class^="BurgerConstructor_ingredientsList"]').contains(
      'Говяжий метеорит (отбивная)'
    );
    cy.contains('Оформить заказ').click();
  });
});
