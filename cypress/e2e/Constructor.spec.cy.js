describe('application is working', function () {
  const baseTestUrl = 'http://localhost:3000';
  const ingredientCard = '[class^="BurgerIngredients_ingredientCard"]';
  const ingredientList = '[class^="BurgerConstructor_ingredientsList"]';
  const beef = 'Говяжий метеорит (отбивная)';
  const bun = 'Краторная булка N-200i';
  beforeEach(function () {
    cy.viewport(1920, 1024);
    cy.visit(baseTestUrl);
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
    cy.visit(`${baseTestUrl}/login`);
    cy.get('input').first().type(email);
    cy.get('input').last().type(password);
    cy.get('button').first().click();
  });

  it('should open ingredient modal', function () {
    cy.get(ingredientCard).first().click();
    cy.contains('Детали ингредиента');
  });

  it('should close ingredient modal by button', function () {
    cy.get(ingredientCard).first().click();
    cy.get('[class^="Modal_cross"]').click({ multiple: true, force: true });
    cy.visit(baseTestUrl);
  });

  it('should check drag and drop and make order', () => {
    cy.contains(bun).trigger('dragstart');
    cy.get(ingredientList).trigger('drop');
    cy.get(ingredientList).contains(bun);
    cy.contains(beef).trigger('dragstart');
    cy.get(ingredientList).trigger('drop');
    cy.get(ingredientList).contains(beef);
    cy.contains('Оформить заказ').click();
  });
});
