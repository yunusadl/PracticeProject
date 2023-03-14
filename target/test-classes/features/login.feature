@login @smoke
Feature: Users should be able to login

  Background:
    Given the user is on the login page

  # Only for increasing readability we are using GIVEN, WHEN, THEN. Our step definitions are not affected
  @driver
  Scenario: Login as a driver
    When the user enters the driver information
    Then the user should be able login

  @salesmanager
  Scenario: Login as a sales manager
    When the user enters the sales manager information
    Then the user should be able login

  @storemanager @VYT-123
  Scenario: Login as store manager
    When the user enters the store manager information
    Then the user should be able login



