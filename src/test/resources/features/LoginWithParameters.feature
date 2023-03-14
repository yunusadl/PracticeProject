Feature: Login as different users

  Scenario: login as a driver user
    Given the user is on the login page
    When the user logs in using "user10" and "UserUser123"
    Then the user should be able login
    And the title contains "Dashboard"




