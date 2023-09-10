Feature: User launch etherscan

  Background: 
    Given User navigates to the etherscan

  Scenario: Login should be success
    And User enter the username as the "mredzmi"
    And User enter the password as the "test1234"
    When User click on the login
    Then Login should be logged
