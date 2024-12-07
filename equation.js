var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Base Class
var Equation = /** @class */ (function () {
    function Equation(u, a, t, s, v, f, m, ke, pe, g, h) {
        if (u === void 0) { u = null; }
        if (a === void 0) { a = null; }
        if (t === void 0) { t = null; }
        if (s === void 0) { s = null; }
        if (v === void 0) { v = null; }
        if (f === void 0) { f = null; }
        if (m === void 0) { m = null; }
        if (ke === void 0) { ke = null; }
        if (pe === void 0) { pe = null; }
        if (g === void 0) { g = null; }
        if (h === void 0) { h = null; }
        this.u = u;
        this.a = a;
        this.t = t;
        this.s = s;
        this.v = v;
        this.f = f;
        this.m = m;
        this.ke = ke;
        this.pe = pe;
        this.g = g;
        this.h = h;
    }
    return Equation;
}());
// Velocity Equation Class
var VelocityEquation = /** @class */ (function (_super) {
    __extends(VelocityEquation, _super);
    function VelocityEquation(u, a, t, v) {
        return _super.call(this, u, a, t, null, v) || this;
    }
    VelocityEquation.prototype.solve = function () {
        if (this.v === null) {
            return "Final velocity (v) is ".concat((this.u + this.a * this.t).toFixed(2), " m/s");
        }
        else if (this.u === null) {
            return "Initial velocity (u) is ".concat((this.v - this.a * this.t).toFixed(2), " m/s");
        }
        else if (this.a === null) {
            return "Acceleration (a) is ".concat(((this.v - this.u) / this.t).toFixed(2), " m/s\u00B2");
        }
        else if (this.t === null) {
            return "Time (t) is ".concat(((this.v - this.u) / this.a).toFixed(2), " s");
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    VelocityEquation.prototype.plotGraph = function () {
        var timeValues = [];
        var velocityValues = [];
        for (var t = 0; t <= 10; t += 0.5) {
            timeValues.push(t);
            velocityValues.push(this.u + this.a * t);
        }
        var ctx = document.getElementById('velocityChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: timeValues,
                datasets: [{
                        label: 'Final Velocity vs Time',
                        data: velocityValues,
                        borderColor: 'black',
                        fill: false
                    }]
            }
        });
    };
    return VelocityEquation;
}(Equation));
// Displacement Equation Class
var DisplacementEquation = /** @class */ (function (_super) {
    __extends(DisplacementEquation, _super);
    function DisplacementEquation(u, a, t, s) {
        return _super.call(this, u, a, t, s) || this;
    }
    DisplacementEquation.prototype.solve = function () {
        if (this.s === null) {
            return "Displacement (s) is ".concat((this.u * this.t + 0.5 * this.a * this.t * this.t).toFixed(2), " m");
        }
        else if (this.u === null) {
            return "Initial velocity (u) is ".concat(((this.s - 0.5 * this.a * this.t * this.t) / this.t).toFixed(2), " m/s");
        }
        else if (this.a === null) {
            return "Acceleration (a) is ".concat((2 * (this.s - this.u * this.t) / (this.t * this.t)).toFixed(2), " m/s\u00B2");
        }
        else if (this.t === null) {
            var discriminant = this.u * this.u - 2 * this.a * this.s;
            if (discriminant < 0) {
                return "No real solutions for time.";
            }
            else {
                var t1 = (-this.u + Math.sqrt(discriminant)) / this.a;
                var t2 = (-this.u - Math.sqrt(discriminant)) / this.a;
                return "Time has two possible values: ".concat(t1.toFixed(2), " s and ").concat(t2.toFixed(2), " s");
            }
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    DisplacementEquation.prototype.plotGraph = function () {
        var timeValues = [];
        var displacementValues = [];
        for (var t = 0; t <= 10; t += 0.5) {
            timeValues.push(t);
            displacementValues.push(this.u * t + 0.5 * this.a * t * t);
        }
        var ctx = document.getElementById('displacementChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: timeValues,
                datasets: [{
                        label: 'Displacement vs Time',
                        data: displacementValues,
                        borderColor: 'red',
                        fill: false
                    }]
            }
        });
    };
    return DisplacementEquation;
}(Equation));
// Force Equation Class
var ForceEquation = /** @class */ (function (_super) {
    __extends(ForceEquation, _super);
    function ForceEquation(f, m, a) {
        return _super.call(this, null, a, null, null, null, f, m) || this;
    }
    ForceEquation.prototype.solve = function () {
        if (this.f === null) {
            return "Force (F) is ".concat((this.m * this.a).toFixed(2), " N");
        }
        else if (this.m === null) {
            return "Mass (m) is ".concat((this.f / this.a).toFixed(2), " kg");
        }
        else if (this.a === null) {
            return "Acceleration (a) is ".concat((this.f / this.m).toFixed(2), " m/s\u00B2");
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    ForceEquation.prototype.plotGraph = function () {
        var massValues = [];
        var forceValues = [];
        for (var m = 1; m <= 10; m++) {
            massValues.push(m);
            forceValues.push(m * this.a);
        }
        var ctx = document.getElementById('forceChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: massValues,
                datasets: [{
                        label: 'Force vs Mass',
                        data: forceValues,
                        borderColor: 'blue',
                        fill: false
                    }]
            }
        });
    };
    return ForceEquation;
}(Equation));
var KineticEnergyEquation = /** @class */ (function (_super) {
    __extends(KineticEnergyEquation, _super);
    function KineticEnergyEquation(m, v, ke) {
        return _super.call(this, null, null, null, null, v, ke, m) || this;
    }
    KineticEnergyEquation.prototype.solve = function () {
        if (this.ke === null) {
            return "Kinetic Energy (KE) is ".concat((0.5 * this.m * this.v * this.v).toFixed(2), " J");
        }
        else if (this.m === null) {
            return "Mass (m) is ".concat((2 * this.ke / (this.v * this.v)).toFixed(2), " kg");
        }
        else if (this.v === null) {
            return "Velocity (v) is ".concat(Math.sqrt(2 * this.ke / this.m).toFixed(2), " m/s");
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    KineticEnergyEquation.prototype.plotGraph = function () {
        var velocityValues = [];
        var kineticEnergyValues = [];
        // Using a range of velocities to plot KE
        for (var v = 0; v <= 20; v += 0.5) {
            velocityValues.push(v);
            kineticEnergyValues.push(0.5 * this.m * v * v);
        }
        var ctx = document.getElementById('kineticEnergyChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: velocityValues,
                datasets: [{
                        label: 'Kinetic Energy vs Velocity',
                        data: kineticEnergyValues,
                        borderColor: 'green',
                        fill: false
                    }]
            }
        });
    };
    return KineticEnergyEquation;
}(Equation));
// Potential Energy Equation Class
var PotentialEnergyEquation = /** @class */ (function (_super) {
    __extends(PotentialEnergyEquation, _super);
    function PotentialEnergyEquation(m, g, h, pe) {
        return _super.call(this, null, null, null, null, null, null, m, null, pe, g, h) || this;
    }
    PotentialEnergyEquation.prototype.solve = function () {
        if (this.pe === null) {
            return "Potential Energy (PE) is ".concat((this.m * this.g * this.h).toFixed(2), " J");
        }
        else if (this.m === null) {
            return "Mass (m) is ".concat((this.pe / (this.g * this.h)).toFixed(2), " kg");
        }
        else if (this.g === null) {
            return "Gravitational acceleration (g) is ".concat((this.pe / (this.m * this.h)).toFixed(2), " m/s\u00B2");
        }
        else if (this.h === null) {
            return "Height (h) is ".concat((this.pe / (this.m * this.g)).toFixed(2), " m");
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    PotentialEnergyEquation.prototype.plotGraph = function () {
        var heightValues = [];
        var potentialEnergyValues = [];
        // Using a range of heights to plot PE
        for (var h = 0; h <= 20; h += 1) {
            heightValues.push(h);
            potentialEnergyValues.push(this.m * this.g * h);
        }
        var ctx = document.getElementById('potentialEnergyChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: heightValues,
                datasets: [{
                        label: 'Potential Energy vs Height',
                        data: potentialEnergyValues,
                        borderColor: 'purple',
                        fill: false
                    }]
            }
        });
    };
    return PotentialEnergyEquation;
}(Equation));
var TorqueEquation = /** @class */ (function (_super) {
    __extends(TorqueEquation, _super);
    function TorqueEquation(t, I, a) {
        var _this = _super.call(this, null, null, null, null, null, t, null, null, null, null, null, null, null, null) || this;
        _this.f = t; // Reuse `f` for torque
        _this.m = I; // Reuse `m` for moment of inertia
        _this.a = a; // Angular acceleration remains as `a`
        return _this;
    }
    TorqueEquation.prototype.solve = function () {
        if (this.f === null) {
            return "Torque (\u03C4) is ".concat((this.m * this.a).toFixed(2), " N\u00B7m");
        }
        else if (this.m === null) {
            return "Moment of inertia (I) is ".concat((this.f / this.a).toFixed(2), " kg\u00B7m\u00B2");
        }
        else if (this.a === null) {
            return "Angular acceleration (\u03B1) is ".concat((this.f / this.m).toFixed(2), " rad/s\u00B2");
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    TorqueEquation.prototype.plotGraph = function () {
        var angularAccelerationValues = [];
        var torqueValues = [];
        // Using a range of angular accelerations to plot torque
        for (var a = 0; a <= 10; a += 0.5) {
            angularAccelerationValues.push(a);
            torqueValues.push(this.m * a);
        }
        var ctx = document.getElementById('torqueChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: angularAccelerationValues,
                datasets: [{
                        label: 'Torque vs Angular Acceleration',
                        data: torqueValues,
                        borderColor: 'orange',
                        fill: false
                    }]
            }
        });
    };
    return TorqueEquation;
}(Equation));
var IdealGasLaw = /** @class */ (function (_super) {
    __extends(IdealGasLaw, _super);
    function IdealGasLaw(P, V, n, R, T) {
        var _this = _super.call(this) || this;
        _this.P = P;
        _this.V = V;
        _this.n = n;
        _this.R = R;
        _this.T = T;
        _this.R = 8.314; // Default value for R (J/(mol·K))
        return _this;
    }
    IdealGasLaw.prototype.solve = function () {
        if (this.P === null) {
            return "Pressure (P) is ".concat((this.n * this.R * this.T / this.V).toFixed(2), " Pa");
        }
        else if (this.V === null) {
            return "Volume (V) is ".concat((this.n * this.R * this.T / this.P).toFixed(2), " m\u00B3");
        }
        else if (this.n === null) {
            return "Moles (n) are ".concat((this.P * this.V / (this.R * this.T)).toFixed(2), " mol");
        }
        else if (this.T === null) {
            return "Temperature (T) is ".concat((this.P * this.V / (this.n * this.R)).toFixed(2), " K");
        }
        else {
            return "Error: Please enter valid inputs.";
        }
    };
    IdealGasLaw.prototype.plotGraph = function () {
        var volumeValues = [];
        var pressureValues = [];
        // Generate data for Pressure vs. Volume at constant n, R, T
        for (var V = 1; V <= 10; V++) {
            volumeValues.push(V);
            pressureValues.push((this.n * this.R * this.T) / V);
        }
        var ctx = document.getElementById('idealGasChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: volumeValues,
                datasets: [{
                        label: 'Pressure vs Volume',
                        data: pressureValues,
                        borderColor: 'silver',
                        fill: false
                    }]
            },
        });
    };
    return IdealGasLaw;
}(Equation));
// Functions for Solving Each Equation
function solveFirstEquation() {
    var u = parseFloat(document.getElementById("u1").value) || null;
    var a = parseFloat(document.getElementById("a1").value) || null;
    var t = parseFloat(document.getElementById("t1").value) || null;
    var v = parseFloat(document.getElementById("v1").value) || null;
    var velocityEquation = new VelocityEquation(u, a, t, v);
    var answer = velocityEquation.solve();
    document.getElementById("answer1").innerHTML = answer;
    velocityEquation.plotGraph();
}
function solveSecondEquation() {
    var u = parseFloat(document.getElementById("u2").value) || null;
    var a = parseFloat(document.getElementById("a2").value) || null;
    var t = parseFloat(document.getElementById("t2").value) || null;
    var s = parseFloat(document.getElementById("s2").value) || null;
    var displacementEquation = new DisplacementEquation(u, a, t, s);
    var answer = displacementEquation.solve();
    document.getElementById("answer2").innerHTML = answer;
    displacementEquation.plotGraph();
}
function solveThirdEquation() {
    var f = parseFloat(document.getElementById("f3").value) || null;
    var m = parseFloat(document.getElementById("m3").value) || null;
    var a = parseFloat(document.getElementById("a3").value) || null;
    var forceEquation = new ForceEquation(f, m, a);
    var answer = forceEquation.solve();
    document.getElementById("answer3").innerHTML = answer;
    forceEquation.plotGraph();
}
function solveFourthEquation() {
    var m = parseFloat(document.getElementById("m4").value) || null;
    var v = parseFloat(document.getElementById("v4").value) || null;
    var ke = parseFloat(document.getElementById("ke4").value) || null;
    var kineticEnergyEquation = new KineticEnergyEquation(m, v, ke);
    var answer = kineticEnergyEquation.solve();
    document.getElementById("answer4").innerHTML = answer;
    kineticEnergyEquation.plotGraph();
}
function solveFifthEquation() {
    var m = parseFloat(document.getElementById("m5").value) || null;
    var g = parseFloat(document.getElementById("g5").value) || null;
    var h = parseFloat(document.getElementById("h5").value) || null;
    var pe = parseFloat(document.getElementById("pe5").value) || null;
    var potentialEnergyEquation = new PotentialEnergyEquation(m, g, h, pe);
    var answer = potentialEnergyEquation.solve();
    document.getElementById("answer5").innerHTML = answer;
    potentialEnergyEquation.plotGraph();
}
function solveSixthEquation() {
    var t = parseFloat(document.getElementById("t6").value) || null;
    var I = parseFloat(document.getElementById("I6").value) || null;
    var a = parseFloat(document.getElementById("a6").value) || null;
    var torqueEquation = new TorqueEquation(t, I, a);
    var answer = torqueEquation.solve();
    document.getElementById("answer6").innerHTML = answer;
    torqueEquation.plotGraph();
}
function solveSeventhEquation() {
    var P = parseFloat(document.getElementById("P").value) || null;
    var V = parseFloat(document.getElementById("V").value) || null;
    var n = parseFloat(document.getElementById("n").value) || null;
    var T = parseFloat(document.getElementById("T").value) || null;
    var idealGasLaw = new IdealGasLaw(P, V, n, 8.314, T);
    var answer = idealGasLaw.solve();
    document.getElementById("answer7").innerHTML = answer;
    idealGasLaw.plotGraph();
}
