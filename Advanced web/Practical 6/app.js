var app = angular.module('myApp', []);
app.controller('studentController', function ($scope) {
    $scope.students = [];
    var empid = 1;
    // Save or update student record
    $scope.saveRecord = function () {
        // Check if the student is new (id is null)
        if ($scope.newStudent.id == null) {
            // Assign a unique ID to the new student
            $scope.newStudent.id = empid++;
            // Add the new student to the students array
            $scope.students.push($scope.newStudent);
        } else {
            // If the student already exists (editing an existing student), find and update the student's record
            for (i in $scope.students) {
                if ($scope.students[i].id == $scope.newStudent.id) {
                    $scope.students[i] = $scope.newStudent;
                }
            }
        }
        // Reset the newStudent object to clear the form fields
        $scope.newStudent = {};
    };
   // Function to delete a student record based on the provided ID
    $scope.delete = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                // Remove the student from the students array
                $scope.students.splice(i, 1);
                // Reset the newStudent object
                $scope.newStudent = {};
            }
        }
    };
    // Function to edit a student record. It loads the student's information into the form for editing
    $scope.edit = function (id) {
        for (i in $scope.students) {
            if ($scope.students[i].id == id) {
                // Create a copy of the student object to edit, to avoid direct modification of the array's object
                $scope.newStudent = angular.copy($scope.students[i]);
            }
        }
    };
});
