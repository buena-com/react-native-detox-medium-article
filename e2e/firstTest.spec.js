const { components, typeText, multiTap, reloadApp, asserElementIsVisible, assertElementIsNotVisible, textIsVisible  } = require('./helpers');

describe('Employee List', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should be able to search for a specific employee and see his profile', async () => {
    const ceoName = 'Amy';
    const employeeItemId = `${components.employee_list_item}AnupGupta`
    const ceoItemId = `${components.employee_list_item}AmyTaylor`
    const ceoTitle = 'CEO';

    // We search for the CEO and click on it
    await typeText(components.search_bar, ceoName);
    await assertElementIsNotVisible(employeeItemId)
    await asserElementIsVisible(ceoItemId)

    await multiTap(ceoTitle, 'text');
    await asserElementIsVisible(components.employee_show_view)
    await asserElementIsVisible(components.action_bar_email_button)
  })
});
