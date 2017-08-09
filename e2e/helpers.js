const components = {
  // Components
  search_bar: 'search_bar',
  employee_list_item: 'employee_list_item_',
  employee_show_view: 'employee_details_view',
  action_bar_email_button: 'action_bar_email_button'
};

function reloadApp() {
  return device.reloadReactNative();
}

function multiTap(elementId, type = 'id') {
  switch(type) {
    case 'id': return element(by.id(elementId)).multiTap(2);
    case 'text': return element(by.text(elementId)).multiTap(2);
  }
}

function asserElementIsVisible(elementId, type = 'id') {
  switch(type) {
    case 'id': return expect(element(by.id(elementId))).toBeVisible();
    case 'text': return expect(element(by.text(elementId))).toBeVisible();
  }
}

function assertElementIsNotVisible(labelElementName) {
  return expect(element(by.id(labelElementName))).toBeNotVisible();
}

function textIsVisible(label) {
  return expect(element(by.label(label))).toBeVisible();
}

function typeText(elementId, text) {
  return element(by.id(elementId)).typeText(text);
}

module.exports = {
  components,
  multiTap,
  typeText,
  reloadApp,
  asserElementIsVisible,
  assertElementIsNotVisible,
  textIsVisible,
};