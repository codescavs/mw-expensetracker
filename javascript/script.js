function ExpenseCtrl($scope, $firebaseArray) {

  /* Connection to Google's Firebase Application - Currently only utilizing firebase
   * but other features could be added in the form of users and user authentication.
   * The database is currently set to allow the public to read/write to it, and I realize
   * this is bad practice, but for the sake of this project it seemed like the simplist
   * solution given time constraints */

  var messagesRef = new Firebase("https://expense-tracker-challenge.firebaseio.com/");

  $scope.expenses = $firebaseArray(messagesRef);

  /* Simple counts the total entries in the list/db */
  $scope.getTotalExpenses = function () {
    return $scope.expenses.length;
  };

  /* Structure of the Firebase db using JavaScript */
  $scope.addExpense = function () {
    $scope.expenses.$add({
      name: $scope.expName,
      amount: $scope.expAmount,
      category: $scope.expCategory,
      date: $scope.expDate.toString()
    });
    $scope.expName = '';
    $scope.expAmount = 0;
    $scope.expCategory = '';
    $scope.expDate = '';
  };

};

angular.module('app', ['firebase']).controller("ExpenseCtrl", ["$scope", "$firebaseArray", ExpenseCtrl]);