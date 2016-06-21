"use strict";

var mymod = angular.module(`mymodule`, []);
mymod.controller(`CalcController`, $scope => {
    $scope.board = [
        [{v: `x`, veiled: false}, {v: 2, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}],
        [{v: `x`, veiled: false}, {v: 3, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}],
        [{v: `x`, veiled: false}, {v: 3, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}],
        [{v: `x`, veiled: false}, {v: 2, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}, {v: 0, veiled: false}],
    ];
    $scope.veil = cell => {
        if(!cell.veiled) {
            cell.veiled = true;
            if(cell.v === `x`) {
                for (let row of $scope.board) {
                    for (let c of row) {
                        c.veiled = true;
                    }
                }
            }
        }
    };
});