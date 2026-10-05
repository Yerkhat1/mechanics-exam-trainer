/* Exam 2 problem bank - work, energy, momentum and rotation.
   Same entry format as problems.js: n (number), t (topic key), q (question),
   a (answer value), u (Moodle unit string, "" = dimensionless), s (worked solution).
   Optional ua: extra unit spellings accepted for that one problem only
   (e.g. "N s" for an answer given in kg m/s). */

const TOPICS2 = {
  work:      "Work",
  kinetic:   "Kinetic Energy",
  power:     "Power",
  potential: "Potential Energy",
  energy:    "Energy Conservation",
  impulse:   "Impulse & Collisions",
  momentum:  "Conservation of Momentum",
  rocket:    "Rocket Propulsion",
  inertia:   "Moment of Inertia",
  rotation:  "Rotational Kinematics",
  torque:    "Torque",
  angmom:    "Angular Momentum"
};

const PROBLEMS2 = [
/* ---------------- Work ---------------- */
{n:1,t:"work",
q:"Determine the work necessary to push (not pull) a mass of 66.5 kg horizontally at a distance of 2.6 m by a force of 73.8 N on a horizontal frictionless surface.",
a:191.88,u:"J",
s:"The force is horizontal and parallel to the displacement, so W = F*d*cos(0) = F*d.\n\nW = 73.8 * 2.6 = 191.88 J.\n\nThe mass is not needed: work depends only on force and displacement."},

{n:2,t:"work",
q:"Determine the work necessary to push a mass of 25 kg a distance of 3.4 m along a horizontal frictionless surface by a force of 73 N directed at an angle of 20° below the horizontal.",
a:233.232,u:"J",
s:"Only the component of F along the displacement does work:\n\nW = F*d*cos(theta) = 73 * 3.4 * cos(20)\nW = 248.2 * 0.939693 = 233.23 J.\n\nThe downward component only presses the block into the surface (no friction here), so it does no work."},

{n:3,t:"work",
q:"Find the magnitude of work to be done lifting the mass of 1.5 kg from height 0.3 m up to 1.4 m. The gravitational acceleration is g = 9.8 m/s^2.",
a:16.17,u:"J",
s:"Lifting at constant speed, the work equals the gain in potential energy:\n\nW = m*g*(h2 - h1) = 1.5 * 9.8 * (1.4 - 0.3)\nW = 14.7 * 1.1 = 16.17 J."},

{n:4,t:"work",
q:"A small particle of mass 400 g is pulled to the top of a frictionless half-cylinder of radius 1 m by a cord that passes over the top of the cylinder. [Figure: the particle starts at the bottom edge of the half-cylinder on the floor and the cord pulls it along the curved surface, tangent to it.] Find the work done by F in moving the particle at constant speed from bottom to the top of the half-cylinder. The gravitational acceleration is g = 9.8 m/s^2.",
a:3.92,u:"J",
s:"At constant speed the kinetic energy does not change, so W_net = 0. The normal force is perpendicular to the motion and does no work, so\n\nW_F + W_gravity = 0  ->  W_F = -W_gravity = m*g*h.\n\nFrom the bottom to the top of the half-cylinder the particle rises h = R = 1 m.\n\nW_F = 0.4 * 9.8 * 1 = 3.92 J."},

{n:5,t:"work",
q:"A small particle of mass 0.6 kg is pulled at constant speed to the top of a frictionless half-cylinder of radius 1.55 m by a cord that passes over the top of the cylinder. Find the work done by gravity on the particle as it moves from the bottom to the top. The gravitational acceleration is g = 9.8 m/s^2.",
a:-9.114,u:"J",
s:"Gravity points down while the particle rises by h = R = 1.55 m, so gravity does negative work:\n\nW_g = -m*g*h = -0.6 * 9.8 * 1.55 = -9.114 J.\n\nThe path shape does not matter - gravity is conservative, only the height change counts."},

{n:6,t:"work",
q:"When a 4.5 kg object is hung vertically on a certain light spring described by Hooke's law, the spring stretches 1.5 cm. If the 4.5 kg object is removed, how much work must an external agent do to stretch the same spring 4.5 cm from its unstretched position? The gravitational acceleration is g = 9.8 m/s^2.",
a:2.97675,u:"J",
s:"Step 1 - spring constant from the hanging mass (k*x = m*g):\nk = m*g / x = 4.5 * 9.8 / 0.015 = 2940 N/m.\n\nStep 2 - work to stretch from 0 to x2 = 0.045 m:\nW = (1/2)*k*x2^2 = 0.5 * 2940 * 0.045^2\nW = 1470 * 0.002025 = 2.97675 J."},

{n:7,t:"work",
q:"A woman steps on a bathroom scale containing a stiff spring. In equilibrium the spring is compressed 1 cm under her weight. The total work done on the spring during the compression is 3.1 J. Find the woman's mass. The gravitational acceleration is g = 9.8 m/s^2.",
a:63.265306122449,u:"kg",
s:"Equilibrium: k*x = m*g.\nWork on the spring: W = (1/2)*k*x^2 = (1/2)*(k*x)*x = (1/2)*m*g*x.\n\nSolve for m:\nm = 2W / (g*x) = 2 * 3.1 / (9.8 * 0.01)\nm = 6.2 / 0.098 = 63.265 kg."},

{n:8,t:"work",
q:"A woman of mass 80.5 kg steps on a bathroom scale containing a stiff spring. In equilibrium the spring is compressed 1.35 cm under her weight. Find the total work done on the spring during the compression. The gravitational acceleration is g = 9.8 m/s^2.",
a:5.32508,u:"J",
s:"Equilibrium gives k*x = m*g, so the work W = (1/2)*k*x^2 can be written as\n\nW = (1/2)*m*g*x = 0.5 * 80.5 * 9.8 * 0.0135\nW = 394.45 * 0.0135 = 5.3251 J."},

{n:9,t:"work",
q:"A farmer pulls a sled with firewood by a tractor a distance of 20 m along level ground. The tractor exerts a constant 4700 N force at an angle of 34.2° above the horizontal. There is a 3400 N friction force opposing the sled's motion. Find the total work done by all the forces on the sled.",
a:9745.5739818088,u:"J",
s:"Gravity and the normal force are vertical, so they do no work on a horizontal displacement.\n\nTractor: W_T = F*d*cos(34.2) = 4700 * 20 * 0.827081 = 77745.6 J\nFriction: W_f = -f*d = -3400 * 20 = -68000 J\n\nTotal: W = 77745.6 - 68000 = 9745.6 J."},

{n:10,t:"work",
q:"A farmer pulls a sled with firewood by a tractor a distance of 19.5 m along level ground. The tractor exerts a constant 4350 N force at an angle of 29.5° above the horizontal. There is a 3750 N friction force opposing the sled's motion. Find the work done by the friction force on the sled.",
a:-73125,u:"J",
s:"Friction points opposite to the displacement (angle 180 degrees):\n\nW_f = f*d*cos(180) = -3750 * 19.5 = -73125 J.\n\nThe tractor force and its angle are not needed for this part."},

{n:11,t:"work",
q:"Two forces of equal magnitude 7 N move an object on a horizontal surface at a distance d = 8.5 m. [Figure: both forces act in the horizontal plane, each at 45° to the direction of motion, one on either side of it.] Determine the work required to push the object at this distance.",
a:84.1457,u:"J",
s:"Each force contributes F*d*cos(45); the sideways components cancel.\n\nW = 2 * F * d * cos(45) = 2 * 7 * 8.5 * 0.707107\nW = 119 * 0.707107 = 84.146 J."},

{n:12,t:"work",
q:"A luggage handler pulls a 24-kg suitcase up a ramp inclined at 29° above the horizontal by a force F of magnitude 165 N that acts parallel to the ramp. The coefficient of kinetic friction between the ramp and the suitcase is μk = 0.36. If the suitcase travels 3.1 m along the ramp, calculate the work done on the suitcase by the force F.",
a:511.5,u:"J",
s:"F is parallel to the ramp and to the displacement:\n\nW_F = F*d = 165 * 3.1 = 511.5 J.\n\nFriction, mass and angle only matter for the other forces."},

{n:13,t:"work",
q:"A luggage handler pulls a 18-kg suitcase up a ramp inclined at 28° above the horizontal by a force F of magnitude 195 N that acts parallel to the ramp. The coefficient of kinetic friction between the ramp and the suitcase is 0.35. If the suitcase travels 3.5 m along the ramp, calculate the work done on the suitcase by the friction force. The gravitational acceleration is g = 9.8 m/s^2.",
a:-190.796,u:"J",
s:"Normal force on an incline: N = m*g*cos(theta) = 18 * 9.8 * cos(28) = 176.4 * 0.882948 = 155.75 N.\n\nKinetic friction: f = mu_k*N = 0.35 * 155.75 = 54.513 N, pointing down the ramp.\n\nWork: W_f = -f*d = -54.513 * 3.5 = -190.80 J."},

{n:14,t:"work",
q:"A luggage handler pulls a 18-kg suitcase up a ramp inclined at 31° above the horizontal by a force F of magnitude 170 N that acts parallel to the ramp. The coefficient of kinetic friction between the ramp and the suitcase is μk = 0.32. If the suitcase travels 4.1 m along the ramp, calculate the magnitude of the work done on the suitcase by the gravitational force. The gravitational acceleration is g = 9.8 m/s^2.",
a:372.49613729795,u:"J",
s:"Moving d along the ramp raises the suitcase h = d*sin(theta):\nh = 4.1 * sin(31) = 4.1 * 0.515038 = 2.1117 m.\n\n|W_g| = m*g*h = 18 * 9.8 * 2.1117 = 372.50 J.\n\n(Gravity's work is actually negative, -372.5 J, since the suitcase moves up; the question asks for the magnitude.)"},

/* ---------------- Kinetic energy ---------------- */
{n:15,t:"kinetic",
q:"In a gun, a 11 g bullet is accelerated from rest to a speed of 751 m/s. Assuming the bullet passes 37 cm distance inside the gun, find the magnitude of the average net force that acted on it.",
a:8383.7986486486,u:"N",
s:"Work-energy theorem: F*d = (1/2)*m*v^2 - 0.\n\nKE = 0.5 * 0.011 * 751^2 = 0.0055 * 564001 = 3102.0 J.\n\nF = KE / d = 3102.0 / 0.37 = 8383.8 N."},

{n:16,t:"kinetic",
q:"In a gun, a 17.5 g bullet is accelerated uniformly from rest to a speed of 756 m/s. Assuming the bullet travels 61.5 cm inside the gun, find the time the bullet spends inside the gun.",
a:0.00162698,u:"s",
s:"Uniform acceleration from rest: the average speed is v/2, so d = (v/2)*t.\n\nt = 2d / v = 2 * 0.615 / 756 = 1.23 / 756 = 0.0016270 s.\n\nThe mass is not needed."},

{n:17,t:"kinetic",
q:"In a gun, a 11 g bullet is accelerated from rest to a speed of 754 m/s. Find the work that is done on the bullet.",
a:3126.84,u:"J",
s:"Work = change in kinetic energy (it starts from rest):\n\nW = (1/2)*m*v^2 = 0.5 * 0.011 * 754^2\nW = 0.0055 * 568516 = 3126.84 J."},

{n:18,t:"kinetic",
q:"A meteor crashed into the earth. Measurements estimate that this meteor had a mass of 1.6x10^8 kg and hit the ground at 12 km/s. How much kinetic energy did this meteor deliver to the ground?",
a:1.152e16,u:"J",
s:"Convert the speed: v = 12 km/s = 12000 m/s.\n\nKE = (1/2)*m*v^2 = 0.5 * 1.6x10^8 * (1.2x10^4)^2\nKE = 0.8x10^8 * 1.44x10^8 = 1.152x10^16 J."},

{n:19,t:"kinetic",
q:"The mass of a proton is 1836 times the mass of an electron. An electron has kinetic energy 3.55x10^-16 J. If a proton has the same speed as the electron, what is its kinetic energy?",
a:6.5178e-13,u:"J",
s:"At equal speeds KE = (1/2)*m*v^2 is proportional to mass:\n\nKE_p = 1836 * KE_e = 1836 * 3.55x10^-16 = 6.5178x10^-13 J."},

{n:20,t:"kinetic",
q:"The mass of a proton is 1836 times the mass of an electron. An electron has kinetic energy 4.3x10^-16 J. If a proton has the same momentum as the electron, what is the proton's kinetic energy?",
a:2.34205e-19,u:"J",
s:"Write kinetic energy in terms of momentum: KE = p^2 / (2m).\n\nAt equal momentum KE is inversely proportional to mass:\nKE_p = KE_e / 1836 = 4.3x10^-16 / 1836 = 2.3420x10^-19 J."},

{n:21,t:"kinetic",
q:"The mass of a proton is 1836 times the mass of an electron. A proton is traveling at speed 1x10^6 m/s. At what speed would an electron have the same kinetic energy as the proton?",
a:42848570.57,u:"m/s",
s:"Equal kinetic energies: (1/2)*m_e*v_e^2 = (1/2)*m_p*v_p^2\n\nv_e = v_p * sqrt(m_p/m_e) = 1x10^6 * sqrt(1836)\nv_e = 1x10^6 * 42.8486 = 4.2849x10^7 m/s."},

{n:22,t:"kinetic",
q:"The mass of a proton is 1836 times the mass of an electron. A proton is traveling at a speed of 5.5x10^4 m/s. At what speed would an electron have the same momentum as the proton?",
a:1.0098e8,u:"m/s",
s:"Equal momenta: m_e*v_e = m_p*v_p\n\nv_e = (m_p/m_e) * v_p = 1836 * 5.5x10^4 = 1.0098x10^8 m/s."},

{n:23,t:"kinetic",
q:"A 4 kg object has a velocity of (2i + 2j) m/s. What is the net work done on the object if its velocity changes to (8i + 5j) m/s?",
a:162,u:"J",
s:"Net work = change in kinetic energy, using v^2 = vx^2 + vy^2.\n\nInitial: v1^2 = 2^2 + 2^2 = 8 m^2/s^2\nFinal:   v2^2 = 8^2 + 5^2 = 89 m^2/s^2\n\nW = (1/2)*m*(v2^2 - v1^2) = 0.5 * 4 * (89 - 8) = 2 * 81 = 162 J."},

{n:24,t:"kinetic",
q:"A 2 kg object has a velocity of (2i + 1j) m/s. Its velocity then changes to (7i + 8j) m/s. What is the magnitude of the change in the object's momentum?",
a:17.2047,u:"kg m/s",ua:["N s"],
s:"Momentum change is a vector: delta p = m*(v2 - v1).\n\nv2 - v1 = (7-2)i + (8-1)j = 5i + 7j m/s\ndelta p = 2 * (5i + 7j) = 10i + 14j kg m/s\n\n|delta p| = sqrt(10^2 + 14^2) = sqrt(296) = 17.205 kg m/s."},

{n:25,t:"kinetic",
q:"A physics professor is pushed up a ramp inclined upward at 26° above the horizontal as he sits in his desk chair that slides on frictionless rollers. The combined mass of the professor and chair is 87 kg. He is pushed 2.6 m along the incline by a group of students who together exert a constant horizontal force of 500 N. The professor's speed at the bottom of the ramp is 2.4 m/s. Find his speed at the top of the ramp. The gravitational acceleration is g = 9.8 m/s^2.",
a:3.206,u:"m/s",
s:"Work by the horizontal push (angle 26 degrees to the ramp):\nW_F = 500 * 2.6 * cos(26) = 1300 * 0.898794 = 1168.43 J\n\nWork by gravity (rise h = 2.6*sin(26) = 1.13977 m):\nW_g = -87 * 9.8 * 1.13977 = -971.76 J\n\nInitial KE = 0.5 * 87 * 2.4^2 = 250.56 J\n\nFinal KE = 250.56 + 1168.43 - 971.76 = 447.23 J\nv = sqrt(2 * 447.23 / 87) = sqrt(10.281) = 3.206 m/s."},

/* ---------------- Power ---------------- */
{n:26,t:"power",
q:"Electric engine pulls an 1800-kg block of concrete with a constant speed of 2.86 m/s up an incline with an angle of inclination θ = 21°. The coefficient of kinetic friction between the block and the incline is 0.69. How much power must be supplied by the engine? The gravitational acceleration is g = 9.8 m/s^2.",
a:50578.47,u:"W",
s:"At constant speed the pull balances gravity along the incline plus friction:\n\nF = m*g*sin(theta) + mu_k*m*g*cos(theta)\nm*g = 1800 * 9.8 = 17640 N\nF = 17640*(sin 21 + 0.69*cos 21) = 17640*(0.358368 + 0.644172)\nF = 17640 * 1.002540 = 17684.8 N\n\nPower: P = F*v = 17684.8 * 2.86 = 50578 W."},

{n:27,t:"power",
q:"Calculate how much electrical power could be produced by a waterfall which is 62 m high, if all the potential energy of the water were converted into electric energy. The average rate of water fall is 5.4x10^5 kg/s. The gravitational acceleration is g = 9.8 m/s^2.",
a:328104000,u:"W",
s:"Each second a mass (dm/dt) falls height h, releasing (dm/dt)*g*h of energy:\n\nP = (dm/dt)*g*h = 5.4x10^5 * 9.8 * 62\nP = 3.28104x10^8 W."},

{n:28,t:"power",
q:"A waterfall 81 m high produces 43 MW of electrical power, assuming all the potential energy of the water is converted into electric energy. What is the average rate of water fall (mass per unit time)? The gravitational acceleration is g = 9.8 m/s^2.",
a:54169.8,u:"kg/s",
s:"P = (dm/dt)*g*h, so\n\ndm/dt = P / (g*h) = 43x10^6 / (9.8 * 81)\ndm/dt = 43x10^6 / 793.8 = 54169.8 kg/s."},

{n:29,t:"power",
q:"Each day the human heart takes in and discharges about 7450 liters of blood. Assume that the work done by the heart is equal to the work required to lift this amount of blood a height equal to 1.77 m. The density of blood is 1.05x10^3 kg/m^3. What is the heart's power output in watts? The gravitational acceleration is g = 9.8 m/s^2. 1 liter = 0.001 m^3.",
a:1.571,u:"W",
s:"Mass pumped per day: m = rho*V = 1050 * 7.45 = 7822.5 kg.\n\nWork per day: W = m*g*h = 7822.5 * 9.8 * 1.77 = 135686.1 J.\n\nOne day = 24 * 3600 = 86400 s, so\nP = 135686.1 / 86400 = 1.5704 W."},

/* ---------------- Potential energy ---------------- */
{n:30,t:"potential",
q:"A force parallel to the x-axis acts on a particle moving along the x-axis. This force produces potential energy given by U(x) = α*x^4, where α = 2.7 J/m^4. What is the force magnitude when the particle is at x = -0.2 m?",
a:0.0864,u:"N",
s:"Force from potential energy: F(x) = -dU/dx = -4*alpha*x^3.\n\nF(-0.2) = -4 * 2.7 * (-0.2)^3 = -10.8 * (-0.008) = +0.0864 N.\n\nMagnitude: 0.0864 N (pointing in +x, back toward the origin)."},

{n:31,t:"potential",
q:"A force parallel to the x-axis acts on a particle moving along the x-axis. This force produces potential energy given by U(x) = α*x^4, where α = 2.6 J/m^4. How much work does this force do on the particle as it moves from x = 1.3 m to x = 0.2 m?",
a:7.4217,u:"J",
s:"For a conservative force, W = -delta U = U(initial) - U(final).\n\nU(1.3) = 2.6 * 1.3^4 = 2.6 * 2.8561 = 7.42586 J\nU(0.2) = 2.6 * 0.2^4 = 2.6 * 0.0016 = 0.00416 J\n\nW = 7.42586 - 0.00416 = 7.4217 J."},

{n:32,t:"potential",
q:"A single conservative force acts on a 5.00-kg particle. The equation F = (2x + 6) N describes the force, where x is in meters. As the particle moves along the x axis from x = 1 m to x = 8 m, calculate the change in the potential energy of the system.",
a:-105,u:"J",
s:"delta U = -W = -(integral of F dx from 1 to 8).\n\nIntegral of (2x + 6) dx = x^2 + 6x.\nAt x = 8: 64 + 48 = 112\nAt x = 1: 1 + 6 = 7\nW = 112 - 7 = 105 J\n\ndelta U = -105 J."},

{n:33,t:"potential",
q:"A single conservative force acts on a 5 kg particle. The equation F = (2x + 4) N describes the force, where x is in meters. As the particle moves along the x axis from x = 2.5 m to x = 9.5 m, calculate the work done by this force on the particle.",
a:112,u:"J",
s:"W = integral of F dx = [x^2 + 4x] from 2.5 to 9.5.\n\nAt x = 9.5: 90.25 + 38 = 128.25\nAt x = 2.5: 6.25 + 10 = 16.25\n\nW = 128.25 - 16.25 = 112 J."},

{n:34,t:"potential",
q:"A force F, measured in newtons, varies along the x-axis, with the distance measured in meters, according to the following law: F(x) = 1.3x^2 + 4x. Find the potential energy U(x) associated with this force at x = 8 m. Assume that U(0) = 0.",
a:-349.867,u:"J",
s:"U(x) = -integral of F dx from 0 to x = -(1.3*x^3/3 + 2*x^2).\n\nAt x = 8:\n1.3 * 512 / 3 = 221.867\n2 * 64 = 128\n\nU(8) = -(221.867 + 128) = -349.867 J."},

{n:35,t:"potential",
q:"A force F, measured in newtons, varies along the x-axis, with the distance measured in meters, according to the following law: F(x) = 1.5x^2 + 3x. Find the magnitude of this force at x = 7 m.",
a:94.5,u:"N",
s:"Just substitute x = 7:\n\nF(7) = 1.5 * 49 + 3 * 7 = 73.5 + 21 = 94.5 N."},

/* ---------------- Energy conservation ---------------- */
{n:36,t:"energy",
q:"Two blocks with different mass are attached to either end of a light rope that passes over a light, frictionless pulley that is suspended from the ceiling. The masses are released from rest, and the more massive one starts to descend. After this block has descended 1.4 m, its speed is 3.1 m/s. If the total mass of the two blocks is 13 kg, what is the mass of the more massive block? The gravitational acceleration is g = 9.8 m/s^2.",
a:8.776,u:"kg",
s:"The heavy block falls h while the light one rises h; both reach speed v.\n\nEnergy: (m1 - m2)*g*h = (1/2)*(m1 + m2)*v^2\n\nm1 - m2 = (m1 + m2)*v^2 / (2*g*h) = 13 * 3.1^2 / (2 * 9.8 * 1.4)\nm1 - m2 = 124.93 / 27.44 = 4.5528 kg\n\nm1 = (13 + 4.5528) / 2 = 8.776 kg."},

{n:37,t:"energy",
q:"Two blocks with different mass are attached to either end of a light rope that passes over a light, frictionless pulley that is suspended from the ceiling. The masses are released from rest, and the more massive one starts to descend. After this block has descended 1.6 m, its speed is 3 m/s. If the total mass of the two blocks is 13 kg, what is the mass of the less massive block? The gravitational acceleration is g = 9.8 m/s^2.",
a:4.635,u:"kg",
s:"Energy: (m1 - m2)*g*h = (1/2)*(m1 + m2)*v^2\n\nm1 - m2 = 13 * 3^2 / (2 * 9.8 * 1.6) = 117 / 31.36 = 3.7309 kg\n\nLighter block: m2 = (13 - 3.7309) / 2 = 4.6346 kg."},

{n:38,t:"energy",
q:"At a construction site, a 62-kg bucket of concrete hangs from a light strong cable that passes over a light friction-free pulley and is connected to a 84-kg box on a horizontal roof. The cable pulls horizontally on the box, and a 48-kg bag of gravel rests on top of the box. The coefficients of friction between the box and roof are μs = 0.68 and μk = 0.43. Find the magnitude of the friction force that the roof exerts on the box. The gravitational acceleration is g = 9.8 m/s^2.",
a:607.6,u:"N",
s:"First check whether anything moves.\n\nPull from the bucket: T = 62 * 9.8 = 607.6 N.\nMaximum static friction: mu_s*N = 0.68 * (84 + 48) * 9.8 = 0.68 * 1293.6 = 879.6 N.\n\n607.6 N < 879.6 N, so the system stays at rest. Static friction only supplies what is needed to balance the pull:\n\nf = 607.6 N."},

{n:39,t:"energy",
q:"At a construction site, a 63-kg bucket of concrete hangs from a light strong cable that passes over a light friction-free pulley and is connected to an 80-kg box on a horizontal roof. The cable pulls horizontally on the box, and a 48-kg bag of gravel rests on top of the box. The coefficients of friction between the box and roof are μs = 0.68 and μk = 0.45. Suddenly a worker picks up the bag of gravel. Find the speed of the bucket after it has descended 2 m, from rest. The gravitational acceleration is g = 9.8 m/s^2.",
a:2.721,u:"m/s",
s:"Without the gravel: max static friction = 0.68 * 80 * 9.8 = 533.1 N < bucket weight 617.4 N, so it moves.\n\nKinetic friction: f = 0.45 * 80 * 9.8 = 352.8 N.\n\nEnergy over d = 2 m (both move together):\n(m_bucket*g - f)*d = (1/2)*(m_bucket + m_box)*v^2\n(617.4 - 352.8) * 2 = 0.5 * 143 * v^2\n529.2 = 71.5 * v^2  ->  v^2 = 7.4014\n\nv = 2.7205 m/s."},

{n:40,t:"energy",
q:"A 1 kg block is pushed against a spring with negligible mass and force constant k = 480 N/m, compressing it 0.12 m. When the block is released, it moves along a frictionless horizontal surface and then up a frictionless incline with slope 37°. How far does the block travel up the incline before starting to slide back down? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.586,u:"m",
s:"Spring energy becomes gravitational energy at the highest point:\n\n(1/2)*k*x^2 = m*g*d*sin(theta)\n0.5 * 480 * 0.12^2 = 3.456 J\n\nd = 3.456 / (1 * 9.8 * sin 37) = 3.456 / (9.8 * 0.601815)\nd = 3.456 / 5.89779 = 0.586 m."},

{n:41,t:"energy",
q:"A 1.9 kg block is pushed against a spring with negligible mass and force constant k = 460 N/m, compressing it 0.1 m. When the block is released, it moves along a frictionless horizontal surface and then up a frictionless incline with slope 30°. What is the speed of the block at the instant it loses contact with the spring? The gravitational acceleration is g = 9.8 m/s^2.",
a:1.55597,u:"m/s",
s:"All the spring energy becomes kinetic energy when the spring reaches its natural length:\n\n(1/2)*k*x^2 = (1/2)*m*v^2\nv = x * sqrt(k/m) = 0.1 * sqrt(460 / 1.9)\nv = 0.1 * sqrt(242.105) = 0.1 * 15.5597 = 1.556 m/s."},

{n:42,t:"energy",
q:"A 3 kg block is pushed against a spring with negligible mass and force constant k = 450 N/m, compressing it 0.26 m. When the block is released, it moves along a frictionless surface. What is the speed of the block as it slides along the horizontal surface having left the spring?",
a:3.184,u:"m/s",
s:"Spring energy = kinetic energy:\n\n(1/2)*k*x^2 = (1/2)*m*v^2\nv = x * sqrt(k/m) = 0.26 * sqrt(450 / 3)\nv = 0.26 * sqrt(150) = 0.26 * 12.2474 = 3.184 m/s."},

{n:43,t:"energy",
q:"On the way up the hill, a car shows the sign of \"fuel starvation\". To reach the top of the hill of 18.5 m high, calculate how fast the car must be moving. The gravitational acceleration is g = 9.8 m/s^2.",
a:19.04205871223,u:"m/s",
s:"With the engine off, the car coasts to the top only if its kinetic energy covers the rise:\n\n(1/2)*m*v^2 = m*g*h\nv = sqrt(2*g*h) = sqrt(2 * 9.8 * 18.5) = sqrt(362.6) = 19.042 m/s."},

{n:44,t:"energy",
q:"On a horizontal surface, a crate with mass 37 kg is placed against a spring that stores 410 J of energy. The spring is released, and the crate slides 5 m before coming to rest due to friction. What is the speed of the crate when it is 2 m from its initial position?",
a:3.647,u:"m/s",
s:"Over the full 5 m, friction removes all 410 J, so the (constant) friction force is\nf = 410 / 5 = 82 N.\n\nAfter 2 m, friction has removed 82 * 2 = 164 J (the spring's energy is released almost immediately):\nKE = 410 - 164 = 246 J\n\nv = sqrt(2 * 246 / 37) = sqrt(13.297) = 3.647 m/s."},

{n:45,t:"energy",
q:"On a horizontal surface, a crate with mass 47 kg is placed against a spring that stores 480 J of energy. The spring is released, and the crate slides 5.8 m before coming to rest. What is the speed of the crate when it is 2.1 m from its initial position?",
a:3.60972,u:"m/s",
s:"Friction force: f = 480 / 5.8 = 82.759 N.\n\nEnergy left after 2.1 m:\nKE = 480 - 82.759 * 2.1 = 480 - 173.79 = 306.21 J\n\nv = sqrt(2 * 306.21 / 47) = sqrt(13.030) = 3.6097 m/s."},

{n:46,t:"energy",
q:"The block of mass of 0.38 kg is dropped from a height h = 69 cm on the left elevated end of a small track with frictionless curved sections and a flat central part of L = 1.2 m length, where the coefficient of kinetic friction is 0.15. What is the highest point the block can be on the right elevated end of the track? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.51,u:"m",
s:"Friction acts only on the flat part, removing mu_k*m*g*L once:\n\nm*g*h' = m*g*h - mu_k*m*g*L\nh' = h - mu_k*L = 0.69 - 0.15 * 1.2 = 0.69 - 0.18 = 0.51 m.\n\nThe mass cancels."},

{n:47,t:"energy",
q:"A 22 kg stone slides down a snow-covered hill, leaving point A with a speed of 12 m/s. There is no friction on the hill between points A and B. [Figure: point A is at the top of the hill, point B is at the bottom, 40 m lower.] What is the speed of the stone when it reaches point B? The gravitational acceleration is g = 9.8 m/s^2.",
a:30.46,u:"m/s",
s:"Energy conservation from A to B:\n\n(1/2)*v_B^2 = (1/2)*v_A^2 + g*h\nv_B = sqrt(v_A^2 + 2*g*h) = sqrt(12^2 + 2 * 9.8 * 40)\nv_B = sqrt(144 + 784) = sqrt(928) = 30.46 m/s."},

{n:48,t:"energy",
q:"A 2.5 kg watermelon is dropped from rest from the roof of a 19 m tall building and feels no appreciable air resistance. Just before it strikes the ground, what is the watermelon's kinetic energy? The gravitational acceleration is g = 9.8 m/s^2.",
a:465.5,u:"J",
s:"All potential energy becomes kinetic:\n\nKE = m*g*h = 2.5 * 9.8 * 19 = 465.5 J."},

{n:49,t:"energy",
q:"A 3.7 kg watermelon is dropped from rest from the roof of a 23 m tall building and feels no appreciable air resistance. Just before it strikes the ground, what is the watermelon's speed? The gravitational acceleration is g = 9.8 m/s^2.",
a:21.2321,u:"m/s",
s:"m*g*h = (1/2)*m*v^2, so the mass cancels:\n\nv = sqrt(2*g*h) = sqrt(2 * 9.8 * 23) = sqrt(450.8) = 21.232 m/s."},

{n:50,t:"energy",
q:"A block with mass 1 kg is forced against a horizontal spring of negligible mass, compressing the spring a distance of 0.22 m. When released, the block moves on a horizontal tabletop for 1.8 m before coming to rest. The spring constant k is 160 N/m. What is the coefficient of kinetic friction μk between the block and the table? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.2195,u:"",
s:"Spring energy is all lost to friction over the distance d:\n\n(1/2)*k*x^2 = mu_k*m*g*d\n0.5 * 160 * 0.22^2 = 3.872 J\n\nmu_k = 3.872 / (1 * 9.8 * 1.8) = 3.872 / 17.64 = 0.2195.\n\nA coefficient of friction has no unit."},

{n:51,t:"energy",
q:"A block with mass 1.6 kg is forced against a horizontal spring of negligible mass, compressing the spring a distance of 0.21 m. The spring constant k is 135 N/m. When released, the block moves on a horizontal tabletop whose coefficient of kinetic friction with the block is 0.24. How far does the block travel before coming to rest? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.791016,u:"m",
s:"(1/2)*k*x^2 = mu_k*m*g*d\n\nSpring energy: 0.5 * 135 * 0.21^2 = 2.97675 J\nFriction force: 0.24 * 1.6 * 9.8 = 3.7632 N\n\nd = 2.97675 / 3.7632 = 0.79102 m."},

{n:52,t:"energy",
q:"A 700-gram rubber ball is dropped from an initial height of 2.25 m, and on each bounce it returns to 70% of its previous height. Find the amount (the absolute value) of the mechanical energy that the ball loses during its first bounce. The gravitational acceleration is g = 9.8 m/s^2.",
a:4.6305,u:"J",
s:"Energy is measured at the top of each flight (where KE = 0).\n\nBefore: m*g*h = 0.7 * 9.8 * 2.25 = 15.435 J\nAfter:  70% of that = 10.8045 J\n\nLost: 15.435 * 0.30 = 4.6305 J."},

{n:53,t:"energy",
q:"A 730-gram rubber ball is dropped from an initial height of 2.65 m, and on each bounce it returns to 64% of its previous height. Find the amount (the absolute value) of the mechanical energy that the ball loses during its second bounce. The gravitational acceleration is g = 9.8 m/s^2.",
a:4.36795,u:"J",
s:"Heights: h0 = 2.65 m, after 1st bounce h1 = 0.64*h0, after 2nd bounce h2 = 0.64^2*h0.\n\nLoss in the 2nd bounce = m*g*(h1 - h2) = m*g*h0*(0.64 - 0.4096)\n= 0.73 * 9.8 * 2.65 * 0.2304\n= 18.9581 * 0.2304 = 4.368 J."},

{n:54,t:"energy",
q:"A car in an amusement park ride rolls without friction around the track. It starts from rest at point A at a height h above the bottom of the loop. Radius of the loop is 14 m. What is the minimum value of h such that the car moves around the loop without falling off at the top (point B)?",
a:35,u:"m",
s:"At the top of the loop (height 2R) the minimum condition is that gravity alone supplies the centripetal force:\nm*g = m*v^2/R  ->  v^2 = g*R\n\nEnergy from A to B:\nm*g*h = m*g*(2R) + (1/2)*m*g*R\nh = 2.5*R = 2.5 * 14 = 35 m."},

{n:55,t:"energy",
q:"A car in an amusement park ride rolls without friction around a vertical loop of radius 17 m. It starts from rest at the minimum height that allows it to maintain contact with the track at the top of the loop. What is the speed of the car at the bottom of the loop? The gravitational acceleration is g = 9.8 m/s^2.",
a:28.8617,u:"m/s",
s:"The minimum starting height is h = 2.5R (see: v^2 = gR at the top).\n\nAt the bottom all of that height has become kinetic energy:\nv = sqrt(2*g*2.5R) = sqrt(5*g*R) = sqrt(5 * 9.8 * 17)\nv = sqrt(833) = 28.862 m/s."},

{n:56,t:"energy",
q:"A 29-kg rock approaches the foot of a hill with a speed of 16 m/s. The hill slopes upward at a constant angle of 41° above the horizontal. The coefficients of static and kinetic friction between the hill and the rock are 0.78 and 0.2, respectively. Find the maximum height above the foot of the hill reached by the rock. The gravitational acceleration is g = 9.8 m/s^2.",
a:10.618,u:"m",
s:"Sliding a distance d up the slope rises h = d*sin(theta). Energy:\n(1/2)*v^2 = g*h + mu_k*g*cos(theta)*d = g*h*(1 + mu_k/tan(theta))\n\nh = v^2 / (2g*(1 + mu_k*cot(theta)))\ncot(41) = 1.150368\n1 + 0.2 * 1.150368 = 1.230074\n\nh = 256 / (19.6 * 1.230074) = 256 / 24.1094 = 10.618 m.\n\n(mu_s only decides whether it stays up afterwards.)"},

{n:57,t:"energy",
q:"A 32.5-kg rock approaches the foot of a hill with a speed of 12 m/s. The hill slopes upward at a constant angle of 35° above the horizontal. The coefficient of kinetic friction between the hill and the rock is 0.19. Find the distance the rock travels along the incline before coming to a stop. The gravitational acceleration is g = 9.8 m/s^2.",
a:10.0751,u:"m",
s:"Energy per unit mass along the slope distance d:\n(1/2)*v^2 = g*d*(sin(theta) + mu_k*cos(theta))\n\nsin 35 + 0.19*cos 35 = 0.573576 + 0.19 * 0.819152 = 0.729215\n\nd = 144 / (2 * 9.8 * 0.729215) = 144 / 14.2926 = 10.075 m."},

{n:58,t:"energy",
q:"A 3.7-kg block slides over the smooth, icy hill. The top of the hill is horizontal and h1 = 79 m higher than its base. What minimum speed must the block have at the base of the hill so that it will not fall into the pit on the far side of the hill that is h2 = 59 m above the base? The distance between the top and the far side pit is d = 38 m. The gravitational acceleration is g = 9.8 m/s^2. [Figure: the block slides up the hill from the left; at the far edge of the flat top it leaves horizontally and flies across a pit to a ledge at height h2, a horizontal distance d away.]",
a:43.614,u:"m/s",
s:"Step 1 - flight across the pit. The block leaves the top horizontally and falls h1 - h2 = 20 m:\nt = sqrt(2*20 / 9.8) = sqrt(4.08163) = 2.02031 s\nIt must cover d = 38 m in that time: v_top = 38 / 2.02031 = 18.809 m/s\n\nStep 2 - energy from the base to the top (frictionless):\nv_base^2 = v_top^2 + 2*g*h1 = 353.78 + 2 * 9.8 * 79 = 353.78 + 1548.4 = 1902.18\n\nv_base = 43.614 m/s."},

{n:59,t:"energy",
q:"A 3.3-kg block slides over a smooth, icy hill. The top of the hill is horizontal and 24 m higher than its base. The block has a speed of 45.5 m/s at the base of the hill. What is its speed at the top of the hill? The gravitational acceleration is g = 9.8 m/s^2.",
a:39.9981,u:"m/s",
s:"Energy conservation (no friction):\nv_top^2 = v_base^2 - 2*g*h = 45.5^2 - 2 * 9.8 * 24\nv_top^2 = 2070.25 - 470.4 = 1599.85\n\nv_top = 39.998 m/s."},

/* ---------------- Impulse and collisions ---------------- */
{n:60,t:"impulse",
q:"A bungee jumper leaps off a bridge whose deck is 50 m above the water. Jumper mass is 72.6 kg, the bungee cord is 22.5 m long, and the jumper falls to 7 m above the water before the bungee cord pulls him back up. What is the magnitude of the impulse exerted on the bungee jumper while the cord stretches? The gravitational acceleration is g = 9.8 m/s^2.",
a:1524.6,u:"kg m/s",ua:["N s"],
s:"Free fall until the cord becomes taut (22.5 m):\nv = sqrt(2*g*L) = sqrt(2 * 9.8 * 22.5) = sqrt(441) = 21 m/s\n\nWhile the cord stretches the jumper goes from 21 m/s down to 0 at the lowest point. The impulse equals the change in momentum:\nJ = m * delta v = 72.6 * 21 = 1524.6 kg m/s.\n\n(The 50 m and 7 m heights are not needed for this part.)"},

{n:61,t:"impulse",
q:"A 327 g handball moving at a speed of 5.2 m/s strikes a wall at an angle of 54.7 degree to the normal of the wall and then bounces off with the same speed at the same angle. It is in contact with the wall for 0.005 s. What is the average force exerted by the ball on the wall?",
a:393.04,u:"N",
s:"Only the component perpendicular to the wall reverses; the parallel component is unchanged.\n\nv_perp = v*cos(54.7) = 5.2 * 0.577858 = 3.00486 m/s\ndelta p = 2*m*v_perp = 2 * 0.327 * 3.00486 = 1.96518 kg m/s\n\nF = delta p / delta t = 1.96518 / 0.005 = 393.04 N."},

{n:62,t:"impulse",
q:"A 330 g handball moving at a speed of 5.9 m/s strikes a wall head-on, perpendicular to its surface, and bounces straight back with the same speed. It is in contact with the wall for 0.005 s. What is the magnitude of the average force exerted by the ball on the wall?",
a:778.8,u:"N",
s:"The velocity reverses, so delta p = 2*m*v = 2 * 0.33 * 5.9 = 3.894 kg m/s.\n\nF = delta p / delta t = 3.894 / 0.005 = 778.8 N."},

{n:63,t:"impulse",
q:"When a gangster sprays Superman with 1.6 g bullets at a rate of 146 bullets/min, these bullets simply bounce off Superman's chest with no change in speed of 430 m/s. Find the average force exerted by the stream of bullets on Superman's chest.",
a:3.348,u:"N",
s:"Each bullet bounces back, so its momentum changes by 2*m*v:\n2 * 0.0016 * 430 = 1.376 kg m/s per bullet\n\nBullets per second: 146 / 60 = 2.43333 /s\n\nF = 1.376 * 2.43333 = 3.3483 N."},

{n:64,t:"impulse",
q:"When a gangster sprays Superman with 1.7 g bullets at a rate of 146 bullets/min, the bullets embed themselves in Superman's chest, arriving at a speed of 445 m/s. Find the magnitude of the average force exerted by the stream of bullets on Superman's chest.",
a:1.84082,u:"N",
s:"Each bullet stops, so its momentum changes by m*v:\n0.0017 * 445 = 0.7565 kg m/s per bullet\n\nBullets per second: 146 / 60 = 2.43333 /s\n\nF = 0.7565 * 2.43333 = 1.8408 N.\n\n(Half of the bouncing case, for the same bullets.)"},

{n:65,t:"impulse",
q:"A steel ball with mass 44 g is dropped from a height of 2.5 m onto a horizontal steel slab. The ball rebounds to a height of 1.5 m. Calculate the magnitude of the impulse delivered to the ball during impact. The gravitational acceleration is g = 9.8 m/s^2.",
a:0.547,u:"kg m/s",ua:["N s"],
s:"Speed just before impact (down): v1 = sqrt(2 * 9.8 * 2.5) = sqrt(49) = 7 m/s\nSpeed just after (up): v2 = sqrt(2 * 9.8 * 1.5) = sqrt(29.4) = 5.4222 m/s\n\nThe direction reverses, so the speeds add:\nJ = m*(v1 + v2) = 0.044 * 12.4222 = 0.5466 kg m/s."},

{n:66,t:"impulse",
q:"A steel ball with mass 51 g is dropped from a height of 2.75 m onto a horizontal slab of soft clay, and it does not rebound. Calculate the magnitude of the impulse delivered to the ball during the impact. The gravitational acceleration is g = 9.8 m/s^2.",
a:0.374425,u:"kg m/s",ua:["N s"],
s:"Impact speed: v = sqrt(2 * 9.8 * 2.75) = sqrt(53.9) = 7.34166 m/s\n\nThe ball stops, so\nJ = m*v = 0.051 * 7.34166 = 0.37442 kg m/s."},

{n:67,t:"impulse",
q:"A steel ball with mass 59 g is dropped from a height of 2.5 m onto a horizontal steel slab. The ball rebounds to a height of 1.6 m. If the ball is in contact with the slab for 2 ms, find the magnitude of the average force on the ball during impact. The gravitational acceleration is g = 9.8 m/s^2.",
a:371.7,u:"N",
s:"Before: v1 = sqrt(2 * 9.8 * 2.5) = 7 m/s (down)\nAfter:  v2 = sqrt(2 * 9.8 * 1.6) = sqrt(31.36) = 5.6 m/s (up)\n\nJ = m*(v1 + v2) = 0.059 * 12.6 = 0.7434 kg m/s\n\nF = J / delta t = 0.7434 / 0.002 = 371.7 N."},

{n:68,t:"impulse",
q:"Just before it is struck by a racket, a tennis ball weighing 0.7 N has a velocity of (24 m/s)i - (3 m/s)j. During the 4 ms that the racket and ball are in contact, the net force on the ball is constant and equal to (-382 N)i + (107 N)j. What is the magnitude of the impulse of the net force applied to the ball?",
a:1.5868,u:"N s",ua:["kg m/s"],
s:"Impulse of a constant force: J = F * delta t.\n\n|F| = sqrt(382^2 + 107^2) = sqrt(145924 + 11449) = sqrt(157373) = 396.703 N\n\n|J| = 396.703 * 0.004 = 1.5868 N s.\n\nThe ball's velocity and weight are not needed for this part."},

{n:69,t:"impulse",
q:"Just before it is struck by a racket, a tennis ball weighing 0.65 N has a velocity of (19 m/s)i - (4 m/s)j. During the 4 ms that the racket and ball are in contact, the net force on the ball is constant and equal to (-392 N)i + (108 N)j. What is the magnitude of the final velocity of the ball? The gravitational acceleration is g = 9.8 m/s^2.",
a:5.278,u:"m/s",
s:"Mass from the weight: m = 0.65 / 9.8 = 0.066327 kg\n\nChange in velocity: delta v = F*delta t / m\nx: -392 * 0.004 / 0.066327 = -23.640 m/s\ny:  108 * 0.004 / 0.066327 =  6.513 m/s\n\nFinal velocity:\nvx = 19 - 23.640 = -4.640 m/s\nvy = -4 + 6.513 = 2.513 m/s\n\n|v| = sqrt(4.640^2 + 2.513^2) = sqrt(21.53 + 6.316) = 5.277 m/s."},

{n:70,t:"impulse",
q:"A rubber ball of mass 0.55 kg is released from rest at height 2.1 m above the floor. After its first bounce, it rises to 75% of its original height. What impulse does the floor exert on this ball during its first bounce? The gravitational acceleration is g = 9.8 m/s^2.",
a:6.584,u:"N s",ua:["kg m/s"],
s:"Down speed: v1 = sqrt(2 * 9.8 * 2.1) = sqrt(41.16) = 6.41561 m/s\nUp speed:   v2 = sqrt(2 * 9.8 * 0.75 * 2.1) = sqrt(30.87) = 5.55608 m/s\n\nJ = m*(v1 + v2) = 0.55 * 11.97169 = 6.5844 N s (upward)."},

{n:71,t:"impulse",
q:"A rubber ball of mass 0.45 kg is released from rest at a height of 2.4 m above the floor. After its first bounce, it rises to 84% of its original height. What fraction of its kinetic energy does the ball lose during the bounce? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.16,u:"",
s:"KE just before the bounce = m*g*h; KE just after = m*g*(0.84h).\n\nFraction lost = (m*g*h - 0.84*m*g*h) / (m*g*h) = 1 - 0.84 = 0.16.\n\nMass, height and g all cancel. A fraction has no unit."},

/* ---------------- Conservation of linear momentum ---------------- */
{n:72,t:"momentum",
q:"A ballistic pendulum is initially at rest. The bullet strikes the block horizontally and remains stuck in it. The impact of the bullet puts the block in motion, causing it to swing upward to a height h. If the bullet has a mass of 15 g, and the block of mass 7.3 kg swings up to a height of 6.6 cm, what was the speed of the bullet before impact? The gravitational acceleration is g = 9.8 m/s^2.",
a:554.655,u:"m/s",
s:"Two stages.\n\nStage 2 (swing, energy): V = sqrt(2*g*h) = sqrt(2 * 9.8 * 0.066) = sqrt(1.2936) = 1.13737 m/s\n\nStage 1 (collision, momentum): m*v = (m + M)*V\nv = (0.015 + 7.3) / 0.015 * 1.13737 = 487.667 * 1.13737 = 554.66 m/s."},

{n:73,t:"momentum",
q:"A ballistic pendulum is initially at rest. A bullet of mass 11.5 g strikes a block of mass 6.6 kg horizontally at 510 m/s and remains stuck in it, putting the block in motion. To what height does the block swing? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.0401495,u:"m",
s:"Collision (momentum):\nV = m*v / (m + M) = 0.0115 * 510 / 6.6115 = 5.865 / 6.6115 = 0.887091 m/s\n\nSwing (energy):\nh = V^2 / (2g) = 0.786931 / 19.6 = 0.04015 m."},

{n:74,t:"momentum",
q:"A linebacker with mass 85 kg and initial speed 3.17 m/s makes a perfectly inelastic collision with a 86 kg quarterback that is initially at rest. Find the speeds of the players just after their collision.",
a:1.5757,u:"m/s",
s:"Perfectly inelastic: they move together.\n\nm1*v1 = (m1 + m2)*V\nV = 85 * 3.17 / (85 + 86) = 269.45 / 171 = 1.5757 m/s."},

{n:75,t:"momentum",
q:"A linebacker with mass 90 kg and initial speed 3.98 m/s makes a perfectly inelastic collision with a 84 kg quarterback that is initially at rest. How much kinetic energy is lost in the collision?",
a:344.119,u:"J",
s:"Common speed: V = 90 * 3.98 / 174 = 358.2 / 174 = 2.05862 m/s\n\nKE before: 0.5 * 90 * 3.98^2 = 712.818 J\nKE after:  0.5 * 174 * 2.05862^2 = 368.699 J\n\nLost: 712.818 - 368.699 = 344.12 J."},

{n:76,t:"momentum",
q:"Two masses M1 = 8 kg and M2 = 4 kg collide elastically. The initial velocity of the first mass M1 is 5 m/s, whereas the second mass M2 is starting its motion only after the collision. Find the speed of the second mass after the collision.",
a:6.667,u:"m/s",
s:"Elastic collision with M2 at rest:\n\nv2' = 2*M1 / (M1 + M2) * v1 = 2 * 8 / 12 * 5 = 1.33333 * 5 = 6.667 m/s."},

{n:77,t:"momentum",
q:"Two masses M1 = 9.5 kg and M2 = 3 kg collide elastically. The initial velocity of the first mass M1 is 3 m/s, whereas the second mass M2 is at rest before the collision. Find the speed of the first mass after the collision.",
a:1.56,u:"m/s",
s:"Elastic collision with M2 at rest:\n\nv1' = (M1 - M2) / (M1 + M2) * v1 = (9.5 - 3) / 12.5 * 3 = 0.52 * 3 = 1.56 m/s."},

{n:78,t:"momentum",
q:"On a frictionless horizontal surface two blocks of masses 2.1 kg and 2.9 kg are connected by a spring of stiffness k = 820 N/m and negligible mass. Initially, the blocks are pushed together to compress the spring by distance d = 19 cm from its equilibrium length and the configuration is fixed by a cord that holds the blocks. When the cord is cut, the blocks move in opposite directions. Calculate the speed of the first block.",
a:2.859,u:"m/s",
s:"Momentum (starts at 0): m1*v1 = m2*v2  ->  v2 = (m1/m2)*v1\n\nEnergy: (1/2)*k*d^2 = (1/2)*m1*v1^2 + (1/2)*m2*v2^2\n0.5 * 820 * 0.19^2 = 14.801 J\n\nSubstitute v2:\n14.801 = 0.5 * m1 * v1^2 * (1 + m1/m2) = 0.5 * 2.1 * v1^2 * 1.724138\nv1^2 = 14.801 / 1.810345 = 8.1758\n\nv1 = 2.8593 m/s."},

{n:79,t:"momentum",
q:"On a frictionless horizontal surface two blocks of masses 2.3 kg and 3 kg are connected by a spring of stiffness k = 890 N/m and negligible mass. Initially, the blocks are pushed together to compress the spring by a distance d = 22 cm from its equilibrium length and the configuration is fixed by a cord. When the cord is cut, the blocks move in opposite directions. Calculate the speed of the second block.",
a:2.49622,u:"m/s",
s:"Momentum: m1*v1 = m2*v2  ->  v1 = (m2/m1)*v2\n\nSpring energy: 0.5 * 890 * 0.22^2 = 21.538 J\n\n21.538 = 0.5 * m2 * v2^2 * (1 + m2/m1) = 0.5 * 3 * v2^2 * (1 + 3/2.3)\n21.538 = 1.5 * 2.304348 * v2^2 = 3.456522 * v2^2\nv2^2 = 6.2311\n\nv2 = 2.4962 m/s."},

{n:80,t:"momentum",
q:"An object of mass 520 gram has an initial velocity of (-2.6 m/s)i + (1.1 m/s)j. It collides with and sticks to another object of mass 880 gram moving with an initial velocity of (5.5 m/s)i + (2.3 m/s)j + (2.9 m/s)k (here i, j, and k are unit vectors along the x-, y-, and z-axis respectively). Find the magnitude of the speed of the composite object.",
a:3.601,u:"m/s",
s:"Total momentum, component by component:\npx = 0.52*(-2.6) + 0.88*5.5 = -1.352 + 4.84 = 3.488\npy = 0.52*1.1 + 0.88*2.3 = 0.572 + 2.024 = 2.596\npz = 0 + 0.88*2.9 = 2.552\n\nDivide by the total mass 1.4 kg:\nV = (2.49143, 1.85429, 1.82286) m/s\n\n|V| = sqrt(6.2072 + 3.4384 + 3.3228) = sqrt(12.9684) = 3.6012 m/s."},

{n:81,t:"momentum",
q:"A block of mass 1 kg stays at rest on a horizontal surface with coefficient of kinetic friction 0.15. When an arrow of mass 260 g strikes the block with the speed 30 m/s it gets stuck in the block. Find the distance to which the block with the arrow will slide after the strike till they come to rest. The gravitational acceleration is g = 9.8 m/s^2.",
a:13.035,u:"m",
s:"Collision (momentum):\nV = 0.26 * 30 / 1.26 = 7.8 / 1.26 = 6.19048 m/s\n\nSliding (friction removes the KE; mass cancels):\nd = V^2 / (2*mu_k*g) = 38.3220 / (2 * 0.15 * 9.8) = 38.3220 / 2.94 = 13.035 m."},

{n:82,t:"momentum",
q:"A block of mass 1.3 kg stays at rest on a horizontal surface whose coefficient of kinetic friction is 0.24. An arrow of mass 235 g strikes the block with a speed of 26 m/s and gets stuck in the block. How much kinetic energy is lost during the collision? The gravitational acceleration is g = 9.8 m/s^2.",
a:67.2697,u:"J",
s:"KE before: 0.5 * 0.235 * 26^2 = 79.43 J\n\nCommon speed: V = 0.235 * 26 / 1.535 = 6.11 / 1.535 = 3.98046 m/s\nKE after: 0.5 * 1.535 * 3.98046^2 = 12.1603 J\n\nLost: 79.43 - 12.1603 = 67.270 J.\n\n(Friction acts after the collision, so mu_k is not needed.)"},

{n:83,t:"momentum",
q:"When an arrow of mass 260 g strikes the brick of mass 0.8 kg, staying at rest on a horizontal surface, the arrow gets stuck in the brick and they begin to move straight till they stop because of the friction between the brick and the surface. If the initial speed of the arrow before the strike was 49 m/s and the distance the block with the arrow moved after the strike was 2880 cm, what was the coefficient of kinetic friction between the brick and the surface? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.256,u:"",
s:"Collision: V = 0.26 * 49 / 1.06 = 12.74 / 1.06 = 12.0189 m/s\n\nSliding: V^2 = 2*mu_k*g*d, with d = 2880 cm = 28.8 m\nmu_k = V^2 / (2*g*d) = 144.453 / (2 * 9.8 * 28.8) = 144.453 / 564.48 = 0.2559.\n\nNo unit."},

{n:84,t:"momentum",
q:"An astronaut runs out of fuel in her power pack while drifting at 3 m/s away from the International Space Station. Remembering what she learned in physics class she removes her 30 kg power pack and throws it away at 4 m/s relative to the Station and in the direction away from the Station. The mass of the astronaut plus space suit, minus the power pack, is 106 kg. Calculate the new velocity of the astronaut relative to the Space Station. Take the direction towards the Space Station as positive.",
a:-2.717,u:"m/s",
s:"Toward the Station is +, so every velocity here is negative.\n\nMomentum before: (106 + 30) * (-3) = -408 kg m/s\nMomentum after:  30 * (-4) + 106 * v\n\n-408 = -120 + 106*v\nv = -288 / 106 = -2.717 m/s.\n\nShe still drifts away, just more slowly."},

{n:85,t:"momentum",
q:"An astronaut of total mass 107 kg, including her power pack, runs out of fuel while drifting at 3.4 m/s away from the International Space Station. She removes her 25 kg power pack and throws it directly away from the Station at 4.8 m/s relative to the Station. What is her speed immediately after the throw?",
a:2.97317,u:"m/s",
s:"Take away from the Station as +. Her mass without the pack: 107 - 25 = 82 kg.\n\nMomentum before: 107 * 3.4 = 363.8 kg m/s\nMomentum after:  25 * 4.8 + 82 * v = 120 + 82*v\n\nv = (363.8 - 120) / 82 = 243.8 / 82 = 2.9732 m/s."},

{n:86,t:"momentum",
q:"In a volcanic eruption, a 2450-kg boulder is thrown vertically upward into the air. At its highest point, it suddenly explodes due to trapped gas into two fragments, one being 3 times the mass of the other. The lighter fragment starts out with only horizontal velocity and lands 350 m directly north of the point of the explosion. How far from the explosion will the other fragment land? Neglect any air resistance.",
a:116.67,u:"m",
s:"At the top the boulder is at rest, so the fragments' momenta are equal and opposite:\nm*v_light = 3m*v_heavy  ->  v_heavy = v_light / 3\n\nBoth start horizontally from the same height, so they are in the air for the same time. Distance is proportional to speed:\n\nd_heavy = 350 / 3 = 116.67 m (to the south)."},

{n:87,t:"momentum",
q:"In a volcanic eruption, a 2600-kg boulder is thrown vertically upward into the air. At its highest point it suddenly explodes into two fragments, one being 3 times the mass of the other. The lighter fragment starts out with only a horizontal velocity of 44.5 m/s. What is the horizontal speed of the heavier fragment immediately after the explosion?",
a:14.8333,u:"m/s",
s:"Total momentum is zero at the highest point:\nm*44.5 = 3m*v\n\nv = 44.5 / 3 = 14.833 m/s (opposite direction)."},

{n:88,t:"momentum",
q:"4 coupled railroad cars roll along and couple with a 5th car, which is initially at rest. These 5 cars roll along and couple with a 6th car initially at rest. This process continues until the speed of the final collection of railroad cars is 1/6 the speed of the initial 4 railroad cars. All the cars are identical. Ignoring friction, how many cars are in the final collection?",
a:24,u:"",ua:["cars"],
s:"Momentum is conserved through every coupling, so\n4*m*v0 = N*m*v_final\n\nv_final = (4/N)*v0 = (1/6)*v0\n\nN = 24 cars."},

{n:89,t:"momentum",
q:"A 1250-kg blue convertible is traveling south, and a 1850-kg red SUV is traveling west. If the total momentum of the system consisting of the two cars is 77000 kg m/s directed at 30° west of south, what is the speed of an SUV?",
a:20.81,u:"m/s",
s:"The convertible supplies the south component, the SUV the west component. The angle is measured from south:\n\np_west = p*sin(30) = 77000 * 0.5 = 38500 kg m/s\n\nv_SUV = 38500 / 1850 = 20.811 m/s."},

{n:90,t:"momentum",
q:"A 1240-kg blue convertible is traveling south, and a 2000-kg red SUV is traveling west. If the total momentum of the system consisting of the two cars is 68000 kg m/s directed at 60° west of south, what is the speed of the convertible?",
a:27.4194,u:"m/s",
s:"South component (adjacent to the 60 degree angle measured from south):\np_south = 68000 * cos(60) = 34000 kg m/s\n\nv_convertible = 34000 / 1240 = 27.419 m/s."},

{n:91,t:"momentum",
q:"A 1300-kg blue convertible is traveling south, and a 2150-kg red SUV is traveling west. If the total momentum of the system consisting of the two cars is 77000 kg m/s directed at 60° west of south, what is the speed of the blue convertible?",
a:29.615,u:"m/s",
s:"p_south = 77000 * cos(60) = 38500 kg m/s\n\nv_convertible = 38500 / 1300 = 29.615 m/s."},

/* ---------------- Rocket propulsion ---------------- */
{n:92,t:"rocket",
q:"A rocket has a payload of 6.5 percent of its total mass, the rest being fuel. If this rocket starts from rest and moves with no external forces acting on it, what is its final velocity if the exhaust velocity of the gas is 4.1 km/s?",
a:11.2068,u:"km/s",
s:"Rocket equation: v = u * ln(m0 / m_final).\n\nWhen all fuel is burned only the payload is left: m0/m_final = 1/0.065 = 15.3846\n\nv = 4.1 * ln(15.3846) = 4.1 * 2.73337 = 11.207 km/s."},

{n:93,t:"rocket",
q:"A rocket starts from rest and moves with no external forces acting on it. The exhaust velocity of the gas is 3.9 km/s. What fraction of the rocket's total mass can be payload if its final velocity is to be 11.7 km/s?",
a:0.0497871,u:"",
s:"v = u * ln(m0/m_final)  ->  m_final/m0 = exp(-v/u)\n\nv/u = 11.7 / 3.9 = 3\n\nFraction = e^-3 = 0.049787.\n\nA mass fraction has no unit."},

/* ---------------- Moment of inertia ---------------- */
{n:94,t:"inertia",
q:"A stick of length 1.3 m is held vertically with one end on the floor and is then allowed to fall. Find the speed of the other end when it hits the floor, assuming that the end on the floor does not slip. The gravitational acceleration is g = 9.8 m/s^2.",
a:6.182,u:"m/s",
s:"The stick rotates about its bottom end: I = (1/3)*M*L^2. Its centre of mass drops L/2.\n\nM*g*(L/2) = (1/2)*(1/3)*M*L^2*omega^2  ->  omega^2 = 3g/L\n\nTip speed: v = omega*L = sqrt(3*g*L) = sqrt(3 * 9.8 * 1.3) = sqrt(38.22) = 6.182 m/s."},

{n:95,t:"inertia",
q:"Assume a simple non-uniform model of Earth's density with an inner spherical region of density 6200 kg/m^3 and the outer (spherical shell) region of density 4300 kg/m^3. Taking the radius of the Earth as 6110000 m and moment of inertia as 8.5x10^37 kg m^2, calculate the radius of the inner region.",
a:5945403.82,u:"m",
s:"A solid sphere of density rho and radius r has I = (2/5)*M*r^2 = (8*pi/15)*rho*r^5.\n\nTreat Earth as a full sphere of density 4300 plus an inner sphere of extra density (6200 - 4300) = 1900:\nI = (8*pi/15) * [4300*R^5 + 1900*r^5]\n\n8*pi/15 = 1.675516\nR^5 = (6.11x10^6)^5 = 8.51540x10^33\n\nI / 1.675516 = 5.07306x10^37\n4300 * R^5 = 3.66162x10^37\n1900 * r^5 = 1.41144x10^37  ->  r^5 = 7.42861x10^33\n\nr = (7.42861x10^33)^(1/5) = 5.9454x10^6 m."},

{n:96,t:"inertia",
q:"A sphere consists of a solid wooden ball of uniform density 805 kg/m^3 and radius 0.225 m and is covered with a thin coating of lead foil with area density 19 kg/m^2. Calculate the moment of inertia of this sphere about an axis passing through its center.",
a:1.1857,u:"kg m^2",
s:"Wooden ball (solid sphere):\nM = rho*(4/3)*pi*R^3 = 805 * 4.18879 * 0.0113906 = 38.4088 kg\nI_ball = (2/5)*M*R^2 = 0.4 * 38.4088 * 0.050625 = 0.77778 kg m^2\n\nLead foil (thin shell):\nm = sigma*4*pi*R^2 = 19 * 0.636173 = 12.0873 kg\nI_shell = (2/3)*m*R^2 = 0.66667 * 12.0873 * 0.050625 = 0.40795 kg m^2\n\nTotal: I = 0.77778 + 0.40795 = 1.1857 kg m^2."},

{n:97,t:"inertia",
q:"A thin uniform rod 68 cm long with mass 0.5 kg is bent at its center into a V shape, with a 70° angle at its vertex. Find the moment of inertia of this V-shaped object about an axis perpendicular to the plane of the V at its vertex.",
a:0.01927,u:"kg m^2",
s:"Each half is a rod of mass M/2 and length L/2 rotating about its end:\nI_half = (1/3)*(M/2)*(L/2)^2\n\nTwo halves: I = 2 * (1/3)*(M/2)*(L/2)^2 = (1/12)*M*L^2\n\nI = 0.5 * 0.68^2 / 12 = 0.5 * 0.4624 / 12 = 0.019267 kg m^2.\n\nThe 70 degree angle does not matter: every bit of rod keeps its distance from the vertex axis."},

{n:98,t:"inertia",
q:"A flywheel is made of iron (density 7800 kg/m^3) in the shape of a 11-cm-thick uniform disk. What would the diameter of such a disk need to be if it is to store 10 megajoules of kinetic energy when spinning at 85 rpm about an axis perpendicular to the disk at its center?",
a:7.399,u:"m",
s:"Disk: M = rho*pi*R^2*t and I = (1/2)*M*R^2 = (1/2)*rho*pi*t*R^4.\nKE = (1/2)*I*omega^2 = (1/4)*rho*pi*t*R^4*omega^2\n\nomega = 85 * 2*pi / 60 = 8.90118 rad/s  ->  omega^2 = 79.2310\n\nR^4 = 4*KE / (rho*pi*t*omega^2) = 4x10^7 / (7800 * pi * 0.11 * 79.2310)\nR^4 = 4x10^7 / 213560 = 187.30  ->  R = 3.6995 m\n\nD = 2R = 7.399 m."},

{n:99,t:"inertia",
q:"A flywheel is made of iron (density 7800 kg/m^3) in the shape of a 9.5-cm-thick uniform disk. If it is to store 8 megajoules of kinetic energy when spinning at 85 rpm about an axis perpendicular to the disk at its center, what would be the centripetal acceleration of a point on its rim when spinning at this rate?",
a:287.55,u:"m/s^2",
s:"As for a disk flywheel: R^4 = 4*KE / (rho*pi*t*omega^2)\n\nomega = 85 * 2*pi / 60 = 8.90118 rad/s, omega^2 = 79.2310\nR^4 = 3.2x10^7 / (7800 * pi * 0.095 * 79.2310) = 3.2x10^7 / 184438 = 173.50\nR = 3.6293 m\n\nRim acceleration: a = omega^2 * R = 79.2310 * 3.6293 = 287.55 m/s^2."},

{n:100,t:"inertia",
q:"While redesigning a rocket engine, in order to reduce weight, a solid spherical part is replaced with a hollow spherical shell of the same size. The parts rotate about an axis through their center. You need to make sure that the new part always has the same rotational kinetic energy as the original part had at any given rate of rotation. If the original part had a mass of 180 kg, what must be the mass of the new part?",
a:108,u:"kg",
s:"Same KE at the same omega means the same moment of inertia (same R):\n\n(2/5)*M_solid*R^2 = (2/3)*M_shell*R^2\nM_shell = (3/5)*M_solid = 0.6 * 180 = 108 kg."},

{n:101,t:"inertia",
q:"A uniform, solid disk with mass 170 kg and radius 4 m is pivoted about a horizontal axis through its center. A small object of the same mass of 170 kg is glued to the rim of the disk. If the disk is released from rest with the small object at the end of a horizontal radius, find the angular speed when the small object is directly below the axis. The gravitational acceleration is g = 9.8 m/s^2.",
a:1.807,u:"rad/s",
s:"Only the small object changes height: it drops R.\n\nI = (1/2)*M*R^2 + m*R^2 = (1/2 + 1) * 170 * 16 = 4080 kg m^2\n\nm*g*R = (1/2)*I*omega^2\n170 * 9.8 * 4 = 6664 J = 2040 * omega^2\nomega^2 = 3.26667\n\nomega = 1.807 rad/s."},

{n:102,t:"inertia",
q:"A uniform, solid disk with mass 135 kg and radius 4.9 m is pivoted about a horizontal axis through its center. A small object of mass 165 kg is glued to the rim of the disk. The disk is released from rest with the small object at the end of a horizontal radius. Find the magnitude of the angular acceleration of the disk at the instant it is released. The gravitational acceleration is g = 9.8 m/s^2.",
a:1.41935,u:"rad/s^2",
s:"Torque from the object's weight (lever arm R, since the radius is horizontal):\ntau = m*g*R = 165 * 9.8 * 4.9 = 7923.3 N m\n\nI = (1/2)*M*R^2 + m*R^2 = (67.5 + 165) * 24.01 = 5582.33 kg m^2\n\nalpha = tau / I = 7923.3 / 5582.33 = 1.4194 rad/s^2."},

{n:103,t:"inertia",
q:"A metal sign for a car dealership is a thin, uniform right triangle with base length of 3.8 m and height of 1.7 m. The sign has a mass of 3 kg. What is the moment of inertia of the sign for rotation about the side of 1.7 m in length?",
a:7.22,u:"kg m^2",
s:"For a right-triangular plate rotating about one leg, I = (1/6)*M*b^2, where b is the other leg (the distance of the far corner from the axis).\n\nI = (1/6) * 3 * 3.8^2 = 0.5 * 14.44 = 7.22 kg m^2."},

{n:104,t:"inertia",
q:"A metal sign for a car dealership is a thin, uniform right triangle with base length of 4.4 m and height of 1.8 m. The sign has a mass of 4 kg. What is the kinetic energy of the sign when it is rotating about an axis along the 1.8 m side at 2.2 rev/s?",
a:1233.07,u:"J",
s:"About the 1.8 m leg: I = (1/6)*M*b^2 = (1/6) * 4 * 4.4^2 = 12.9067 kg m^2\n\nomega = 2.2 rev/s * 2*pi = 13.8230 rad/s\n\nKE = (1/2)*I*omega^2 = 0.5 * 12.9067 * 191.075 = 1233.1 J."},

{n:105,t:"inertia",
q:"A thin, uniform 11-kg bar that is 2.6 m long rotates uniformly about a pivot at one end, making 6 complete revolutions every 3 seconds. What is the kinetic energy of this bar?",
a:1957.08,u:"J",
s:"Rod about one end: I = (1/3)*M*L^2 = (1/3) * 11 * 6.76 = 24.7867 kg m^2\n\nomega = (6 rev / 3 s) * 2*pi = 4*pi = 12.5664 rad/s\n\nKE = 0.5 * 24.7867 * 157.914 = 1957.1 J."},

{n:106,t:"inertia",
q:"A thin, uniform 11-kg bar that is 2.2 m long rotates uniformly about a pivot at its center, making 5 complete revolutions every 3 seconds. What is the kinetic energy of this bar?",
a:243.267,u:"J",
s:"Rod about its centre: I = (1/12)*M*L^2 = (1/12) * 11 * 4.84 = 4.43667 kg m^2\n\nomega = (5/3) rev/s * 2*pi = 10.4720 rad/s\n\nKE = 0.5 * 4.43667 * 109.662 = 243.27 J."},

/* ---------------- Rotational kinematics ---------------- */
{n:107,t:"rotation",
q:"A wheel starts to rotate from rest with constant angular acceleration of 1.4 rad/s^2. It turns through an angle of 71 rad in an interval of 1.4 s. How long has the wheel been in motion at the start of this interval?",
a:35.525,u:"s",
s:"During the 1.4 s interval: theta = omega0*t + (1/2)*alpha*t^2\n71 = omega0 * 1.4 + 0.5 * 1.4 * 1.96 = 1.4*omega0 + 1.372\nomega0 = 69.628 / 1.4 = 49.734 rad/s\n\nThe wheel reached omega0 from rest, so\nt = omega0 / alpha = 49.734 / 1.4 = 35.525 s."},

{n:108,t:"rotation",
q:"The rotating blade of a blender turns with constant angular acceleration 1.3 rad/s^2. At some moment of time it reaches an angular velocity of 48 rad/s, starting from rest. Through how many revolutions does the blade turn in this time interval? Provide the answer in decimals.",
a:141.04,u:"",ua:["rev","revs","revolutions"],
s:"omega^2 = 2*alpha*theta  ->  theta = omega^2 / (2*alpha)\n\ntheta = 48^2 / (2 * 1.3) = 2304 / 2.6 = 886.154 rad\n\nRevolutions: 886.154 / (2*pi) = 141.04."},

{n:109,t:"rotation",
q:"A solid wheel undergoes a constant angular acceleration starting from rest at t = 0 s. When t = 2 s, the angular velocity of the wheel is 4.8 rad/s. The acceleration continues until t = 14 s, when the acceleration abruptly changes to 0 rad/s^2. Through what angle does the wheel rotate in the interval t = 0 s to t = 38 s?",
a:1041.6,u:"rad",
s:"alpha = 4.8 / 2 = 2.4 rad/s^2\n\nPhase 1 (0 to 14 s, accelerating):\ntheta1 = 0.5 * 2.4 * 14^2 = 235.2 rad\nomega(14) = 2.4 * 14 = 33.6 rad/s\n\nPhase 2 (14 to 38 s, constant speed):\ntheta2 = 33.6 * 24 = 806.4 rad\n\nTotal: 235.2 + 806.4 = 1041.6 rad."},

{n:110,t:"rotation",
q:"A solid wheel undergoes a constant angular acceleration starting from rest at t = 0 s. When t = 2.5 s, the angular velocity of the wheel is 6 rad/s. The acceleration continues until t = 15.5 s, when the acceleration abruptly changes to 0 rad/s^2. What is the angular velocity of the wheel at t = 20.5 s?",
a:37.2,u:"rad/s",
s:"alpha = 6 / 2.5 = 2.4 rad/s^2\n\nAt t = 15.5 s: omega = 2.4 * 15.5 = 37.2 rad/s.\n\nAfter that the acceleration is zero, so at t = 20.5 s the wheel still spins at 37.2 rad/s."},

{n:111,t:"rotation",
q:"Spherically symmetric object with radius R = 0.39 m and mass M = 2.1 kg rolls without slipping across a horizontal floor with velocity V = 1.9 m/s. It then rolls up an incline with an angle of inclination θ = 37° and comes to rest a distance d = 3.7 m up the incline before reversing direction and rolling back down. Find the moment of inertia of this object about an axis through its center of mass. The gravitational acceleration is g = 9.8 m/s^2.",
a:3.542,u:"kg m^2",
s:"Rolling without slipping: omega = V/R. All kinetic energy becomes potential energy:\n\n(1/2)*M*V^2 + (1/2)*I*(V/R)^2 = M*g*d*sin(theta)\n\nM*g*d*sin(37) = 2.1 * 9.8 * 3.7 * 0.601815 = 45.826 J\n(1/2)*M*V^2 = 0.5 * 2.1 * 3.61 = 3.7905 J\n\n(1/2)*I*V^2/R^2 = 45.826 - 3.7905 = 42.036 J\nI = 2 * 42.036 * R^2 / V^2 = 84.071 * 0.1521 / 3.61 = 3.542 kg m^2."},

{n:112,t:"rotation",
q:"A spherically symmetric object with radius R = 0.3 m and mass M = 2.3 kg slides without friction across a horizontal floor with velocity V = 1.65 m/s. It then slides up a frictionless incline with an angle of inclination θ = 30°. How far along the incline does it travel before coming to rest? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.277806,u:"m",
s:"Without friction it does not spin, so only translational KE counts:\n\n(1/2)*V^2 = g*d*sin(theta)\nd = V^2 / (2*g*sin 30) = 2.7225 / (2 * 9.8 * 0.5) = 2.7225 / 9.8 = 0.2778 m."},

{n:113,t:"rotation",
q:"A safety device brings the blade of a power mower from an initial angular speed w1 to rest in 1 revolution. At the same constant acceleration, what angle of rotation would it take the blade to come to rest from an initial angular speed w2 that is 4 times as great, w2 = 4w1? Provide the answer in units of radian (rad).",
a:100.53,u:"rad",
s:"Stopping angle: theta = omega^2 / (2*alpha), so theta grows with omega^2.\n\nFour times the speed -> 4^2 = 16 times the angle:\ntheta2 = 16 * 1 rev = 16 * 2*pi = 100.53 rad."},

{n:114,t:"rotation",
q:"A rocket is to be launched from earth to Mars, when earth and Mars are aligned along a straight line from the sun. If Mars is now 52° ahead of earth in its orbit around the sun, when should you launch the rocket? All planets orbit the sun in the same direction, 1 year on Mars is 1.9 earth-years, and assume circular orbits for both planets. Taking 1 year = 365 days, provide the answer in units of days (days).",
a:111.30,u:"days",
s:"Earth moves faster and closes the 52 degree gap.\n\nomega_E = 360 deg / year\nomega_M = 360 / 1.9 = 189.474 deg / year\nRelative rate = 360 - 189.474 = 170.526 deg / year\n\nt = 52 / 170.526 = 0.304938 year = 0.304938 * 365 = 111.30 days."},

{n:115,t:"rotation",
q:"A roller in a printing press turns through an angle θ(t) given by θ(t) = γt^2 - βt^3, where γ = 3.2 rad/s^2 and β = 0.43 rad/s^3. Calculate the angular velocity of the roller at t = 4 s.",
a:4.96,u:"rad/s",
s:"omega(t) = d(theta)/dt = 2*gamma*t - 3*beta*t^2\n\nomega(4) = 2 * 3.2 * 4 - 3 * 0.43 * 16 = 25.6 - 20.64 = 4.96 rad/s."},

{n:116,t:"rotation",
q:"A roller in a printing press turns through an angle θ(t) given by θ(t) = γt^2 - βt^3, where γ = 2.9 rad/s^2 and β = 0.41 rad/s^3. Calculate the average angular velocity of the roller between t = 0 and t = 3 s.",
a:5.01,u:"rad/s",
s:"Average angular velocity = total angle / time.\n\ntheta(3) = 2.9 * 9 - 0.41 * 27 = 26.1 - 11.07 = 15.03 rad\ntheta(0) = 0\n\nomega_avg = 15.03 / 3 = 5.01 rad/s."},

{n:117,t:"rotation",
q:"A roller in a printing press turns through an angle θ(t) given by θ(t) = γt^2 - βt^3, where γ = 2.8 rad/s^2 and β = 0.54 rad/s^3. Calculate the angular acceleration of the roller at t = 8 s.",
a:-20.32,u:"rad/s^2",
s:"alpha(t) = d^2(theta)/dt^2 = 2*gamma - 6*beta*t\n\nalpha(8) = 2 * 2.8 - 6 * 0.54 * 8 = 5.6 - 25.92 = -20.32 rad/s^2."},

{n:118,t:"rotation",
q:"A roller in a printing press turns through an angle θ(t) given by θ(t) = γt^2 - βt^3, where γ = 3.5 rad/s^2 and β = 0.46 rad/s^3. At what value of t does the maximum positive angular velocity occur?",
a:2.536,u:"s",
s:"omega is maximum where alpha = 0:\nalpha(t) = 2*gamma - 6*beta*t = 0\n\nt = 2*gamma / (6*beta) = 7 / 2.76 = 2.536 s."},

/* ---------------- Torque ---------------- */
{n:119,t:"torque",
q:"Two point-like particles with masses m1 = 8.5 kg and m2 = 1.7 kg are attached at the ends of a uniform rigid rod with mass M = 9.8 kg and length L = 1.5 m, rotating in the vertical plane about a frictionless pivot through its center. What is the magnitude of the angular acceleration of the system when the rod makes an angle of 32° with the horizontal? The gravitational acceleration is g = 9.8 m/s^2.",
a:5.595,u:"rad/s^2",
s:"The rod's own weight acts at the pivot (no torque). Lever arm of each end mass: (L/2)*cos(32).\n\ntau = (m1 - m2)*g*(L/2)*cos(32) = 6.8 * 9.8 * 0.75 * 0.848048 = 42.386 N m\n\nI = (m1 + m2)*(L/2)^2 + (1/12)*M*L^2\nI = 10.2 * 0.5625 + 9.8 * 2.25 / 12 = 5.7375 + 1.8375 = 7.575 kg m^2\n\nalpha = 42.386 / 7.575 = 5.5955 rad/s^2."},

{n:120,t:"torque",
q:"Two point-like particles with masses m1 = 8 kg and m2 = 1.2 kg are attached at the ends of a uniform rigid rod with mass M = 8 kg and length L = 1.3 m. Find the moment of inertia of this system about an axis through the center of the rod and perpendicular to it.",
a:5.01367,u:"kg m^2",
s:"Point masses sit at L/2 = 0.65 m; the rod about its centre is (1/12)*M*L^2.\n\nI = (8 + 1.2) * 0.65^2 + (1/12) * 8 * 1.3^2\nI = 9.2 * 0.4225 + 13.52 / 12\nI = 3.887 + 1.12667 = 5.0137 kg m^2."},

{n:121,t:"torque",
q:"A 58-kg grindstone is a solid disk 0.5 m in diameter. You press an ax down on the rim with a normal force of 160 N. The coefficient of kinetic friction between the blade and the stone is 0.59, and there is a constant friction torque of 5.5 N m between the axle of the stone and its bearings. How much force must be applied tangentially at the end of a crank handle 0.47 m long to bring the stone from rest to 140 rev/min in 7 s?",
a:69.99,u:"N",
s:"R = 0.25 m, I = (1/2)*M*R^2 = 0.5 * 58 * 0.0625 = 1.8125 kg m^2\n\nomega = 140 rpm = 140 * 2*pi / 60 = 14.6608 rad/s\nalpha = 14.6608 / 7 = 2.09440 rad/s^2\n\nThe crank must supply the accelerating torque plus both friction torques:\ntau_ax = mu_k*N*R = 0.59 * 160 * 0.25 = 23.6 N m\ntau_crank = I*alpha + tau_ax + tau_axle = 3.7961 + 23.6 + 5.5 = 32.896 N m\n\nF = 32.896 / 0.47 = 69.99 N."},

{n:122,t:"torque",
q:"A 54-kg grindstone is a solid disk 0.6 m in diameter, spinning at 35.5 rad/s. You press an ax down on the rim with a normal force of 130 N. The coefficient of kinetic friction between the blade and the stone is 0.61, and there is a constant friction torque of 5.9 N m between the axle of the stone and its bearings. How long does it take the grindstone to come to rest?",
a:2.90552,u:"s",
s:"R = 0.3 m, I = 0.5 * 54 * 0.09 = 2.43 kg m^2\n\nTotal braking torque:\ntau = mu_k*N*R + tau_axle = 0.61 * 130 * 0.3 + 5.9 = 23.79 + 5.9 = 29.69 N m\n\nalpha = 29.69 / 2.43 = 12.2181 rad/s^2\n\nt = 35.5 / 12.2181 = 2.9055 s."},

{n:123,t:"torque",
q:"A 52-kg grindstone is a solid disk 0.55 m in diameter. You press an ax down on the rim with a normal force of 130 N. The coefficient of kinetic friction between the blade and the stone is 0.55, and there is a constant friction torque of 6 N m between the axle of the stone and its bearings. How much time does it take the grindstone to come from 130 rev/min to rest if it is acted on by the axle friction only?",
a:4.461,u:"s",
s:"R = 0.275 m, I = 0.5 * 52 * 0.075625 = 1.96625 kg m^2\n\nOnly the axle torque acts: alpha = 6 / 1.96625 = 3.05149 rad/s^2\n\nomega = 130 rpm = 13.6136 rad/s\n\nt = 13.6136 / 3.05149 = 4.461 s."},

{n:124,t:"torque",
q:"A 57-kg grindstone is a solid disk 0.65 m in diameter. You press an ax down on the rim with a normal force of 130 N. The coefficient of kinetic friction between the blade and the stone is 0.58, and there is a constant friction torque of 6 N m between the axle of the stone and its bearings. After the grindstone attains an angular speed of 120 rev/min, what tangential force at the end of the handle 0.49 m long is needed to maintain a constant angular speed of 120 rev/min?",
a:62.255,u:"N",
s:"Constant speed means zero net torque: the crank only has to cancel the two friction torques.\n\ntau_ax = 0.58 * 130 * 0.325 = 24.505 N m\ntau_total = 24.505 + 6 = 30.505 N m\n\nF = 30.505 / 0.49 = 62.255 N.\n\n(The mass and the speed do not matter here.)"},

{n:125,t:"torque",
q:"An experimental bicycle wheel is placed on a test stand so that it is free to turn on its axle. If a constant net torque of 4.9 N m is applied to the tire for 1.8 s, the angular speed of the tire increases from 0 to 140 rev/min. The external torque is then removed, and the wheel is brought to rest by friction in its bearings in 110 s. Compute the moment of inertia of the wheel about the rotational axis. Ignore the contribution of friction to accelerating motion of the wheel.",
a:0.6016,u:"kg m^2",
s:"omega = 140 rpm = 14.6608 rad/s\nalpha = 14.6608 / 1.8 = 8.14487 rad/s^2\n\nI = tau / alpha = 4.9 / 8.14487 = 0.6016 kg m^2."},

{n:126,t:"torque",
q:"An experimental bicycle wheel is placed on a test stand so that it is free to turn on its axle. If a constant net torque of 4.7 N m is applied to the tire for 2.55 s, the angular speed of the tire increases from 0 to 120 rev/min. The external torque is then removed, and the wheel is brought to rest by friction in its bearings in 121 s. Compute the magnitude of the friction torque. Ignore the contribution of friction to accelerating motion of the wheel.",
a:0.09905,u:"N m",
s:"omega = 120 rpm = 12.5664 rad/s\n\nSpin-up: alpha1 = 12.5664 / 2.55 = 4.92800 rad/s^2\nI = 4.7 / 4.92800 = 0.953734 kg m^2\n\nSpin-down: alpha2 = 12.5664 / 121 = 0.103854 rad/s^2\n\ntau_friction = I * alpha2 = 0.953734 * 0.103854 = 0.09905 N m."},

{n:127,t:"torque",
q:"An experimental bicycle wheel is placed on a test stand so that it is free to turn on its axle. If a constant net torque of 4.9 N m is applied to the tire for 1.45 s, the angular speed of the tire increases from 0 to 120 rev/min. The external torque is then removed, and the wheel is brought to rest by friction in its bearings in 107 s. Compute the total angle of revolution made by the wheel in the 107-s time interval. Provide the answer in radians (rad). Ignore the contribution of friction to accelerating motion of the wheel.",
a:672.30,u:"rad",
s:"Constant deceleration from omega to 0: the average angular speed is omega/2.\n\nomega = 120 rpm = 12.5664 rad/s\n\ntheta = (omega/2) * t = 6.28319 * 107 = 672.30 rad."},

{n:128,t:"torque",
q:"The flywheel of an engine has a moment of inertia 4.9 kg m^2 about its rotation axis. What constant torque is required to bring it up to an angular speed of 130 rev/min in 7 s, starting from rest?",
a:9.5295,u:"N m",
s:"omega = 130 rpm = 130 * 2*pi / 60 = 13.6136 rad/s\nalpha = 13.6136 / 7 = 1.94480 rad/s^2\n\ntau = I*alpha = 4.9 * 1.94480 = 9.5295 N m."},

{n:129,t:"torque",
q:"The flywheel of an engine has a moment of inertia 3.6 kg m^2 about its rotation axis. A constant torque brings it up to an angular speed of 146 rev/min in 7.5 s, starting from rest. Through how many revolutions does the flywheel turn during this time?",
a:9.125,u:"",ua:["rev","revs","revolutions"],
s:"Uniform spin-up from rest: the average rate is half the final rate.\n\nomega = 146 rev/min = 2.43333 rev/s\n\nN = (omega/2) * t = 1.21667 * 7.5 = 9.125 revolutions.\n\nThe moment of inertia is not needed."},

{n:130,t:"torque",
q:"A uniform, 8.6-kg spherical shell 72 cm in diameter has four small 1.6-kg masses attached to its outer surface and equally spaced around it. This combination is spinning about an axis running through the center of the sphere and two of the small masses. What friction torque is needed to reduce its angular speed from 95 rpm to 50 rpm in 27 s? Assume torque causing acceleration is in positive direction.",
a:-0.2021,u:"N m",
s:"R = 0.36 m. The two masses on the axis add nothing; the other two sit at distance R.\n\nI = (2/3)*M*R^2 + 2*m*R^2 = (2/3) * 8.6 * 0.1296 + 2 * 1.6 * 0.1296\nI = 0.74304 + 0.41472 = 1.15776 kg m^2\n\ndelta omega = (50 - 95) * 2*pi / 60 = -4.71239 rad/s\nalpha = -4.71239 / 27 = -0.174533 rad/s^2\n\ntau = I*alpha = 1.15776 * (-0.174533) = -0.2021 N m."},

{n:131,t:"torque",
q:"A uniform, 7.3-kg spherical shell 69 cm in diameter has four small 1.6-kg masses attached to its outer surface and equally spaced around it. This combination spins about an axis running through the center of the sphere and two of the small masses. What is the moment of inertia of the combination about this axis?",
a:0.960135,u:"kg m^2",
s:"R = 0.345 m, R^2 = 0.119025 m^2.\n\nShell: (2/3) * 7.3 * 0.119025 = 0.579255 kg m^2\nThe two masses on the axis: 0\nThe two masses on the equator: 2 * 1.6 * 0.119025 = 0.38088 kg m^2\n\nI = 0.579255 + 0.38088 = 0.960135 kg m^2."},

{n:132,t:"torque",
q:"Three forces are applied to a wheel. [Figure: F1 = 10.8 N pushes on the top of the rim straight toward the center; F2 = 15.7 N acts at the upper-right rim, pointing outward at a 48° angle to the radius (turning the wheel clockwise); F3 = 8 N acts tangent to the right side of the rim, pointing up (turning it counterclockwise).] The magnitude of net torque on the wheel due to these three forces for an axis perpendicular to the wheel and passing through its center is 2.19 N m. What is the radius of the wheel?",
a:0.597,u:"m",
s:"tau = R*F*sin(angle between the radius and the force).\n\nF1 points at the center (along the radius): tau1 = 0\nF2: tau2 = R * 15.7 * sin(48) = R * 11.6674 (clockwise)\nF3 is tangent: tau3 = R * 8 (counterclockwise)\n\n|tau_net| = R * (11.6674 - 8) = 3.6674 * R = 2.19\n\nR = 2.19 / 3.6674 = 0.597 m."},

/* ---------------- Angular momentum ---------------- */
{n:133,t:"angmom",
q:"A solid cylinder of mass 17.9 kg and radius 0.15 m is mounted on a fixed vertical axis that runs through its center of mass. A bullet of mass 0.17 kg is fired with a velocity of 79.7 m/s into the cylinder at rest, with the line of motion of the bullet perpendicular to the cylinder axis and at a distance d = 0.03 m from the center. [Figure: seen from above, the bullet travels along a line d above the line through the axis, so it hits the cylinder off-center and sticks on its surface, a distance r from the axis.] What is the angular speed of the system after the bullet strikes and adheres to the surface of the cylinder?",
a:1.981,u:"rad/s",
s:"Angular momentum of the bullet about the axis uses the perpendicular distance of its line of motion:\nL = m*v*d = 0.17 * 79.7 * 0.03 = 0.40647 kg m^2/s\n\nAfterwards the bullet sits on the surface, at distance R:\nI = (1/2)*M*R^2 + m*R^2 = 0.5 * 17.9 * 0.0225 + 0.17 * 0.0225\nI = 0.201375 + 0.003825 = 0.2052 kg m^2\n\nomega = 0.40647 / 0.2052 = 1.981 rad/s."},

{n:134,t:"angmom",
q:"Student with mass 64.1 kg walks slowly from the rim toward the center of a horizontal circular platform with mass 76.3 kg and radius r = 2.9 m, rotating about a frictionless vertical axle. The angular velocity of the system is 5.2 rad/s when the student is at the rim. Find the angular velocity of the system when the student is 1.24 m from the center.",
a:10.662,u:"rad/s",
s:"No external torque: I1*omega1 = I2*omega2.\n\nPlatform (disk): (1/2) * 76.3 * 2.9^2 = 320.842 kg m^2\n\nI1 = 320.842 + 64.1 * 2.9^2 = 320.842 + 539.081 = 859.923 kg m^2\nI2 = 320.842 + 64.1 * 1.24^2 = 320.842 + 98.560 = 419.402 kg m^2\n\nomega2 = 5.2 * 859.923 / 419.402 = 10.662 rad/s."},

{n:135,t:"angmom",
q:"A student with mass 65.3 kg walks slowly from the rim toward the center of a horizontal circular platform of mass 79 kg and radius 3.2 m, rotating about a frictionless vertical axle. By what factor does the total kinetic energy of the system increase by the time the student reaches the center?",
a:2.65316,u:"",
s:"L is conserved, and KE = L^2 / (2I), so KE2/KE1 = I1/I2.\n\nI1 = (1/2)*M*R^2 + m*R^2\nI2 = (1/2)*M*R^2   (student at the centre)\n\nI1/I2 = (M/2 + m) / (M/2) = (39.5 + 65.3) / 39.5 = 104.8 / 39.5 = 2.6532.\n\nR cancels, and a ratio has no unit."},

{n:136,t:"angmom",
q:"A block of mass m = 2 kg slides from rest down a frictionless surface through a height h = 0.66 m. At the bottom it strikes the lower end of a uniform vertical rod of mass M = 3.6 kg and length l = 2.6 m that hangs from a frictionless pivot O at its upper end, and sticks to it. Find the angular velocity of the rod and block immediately after the collision. The gravitational acceleration is g = 9.8 m/s^2.",
a:0.864583,u:"rad/s",
s:"Block speed at the bottom: v = sqrt(2*g*h) = sqrt(12.936) = 3.59667 m/s\n\nAngular momentum about O is conserved in the collision (the pivot force has no torque about O):\nm*v*l = I*omega\n\nL = 2 * 3.59667 * 2.6 = 18.7027 kg m^2/s\nI = (1/3)*M*l^2 + m*l^2 = (1.2 + 2) * 6.76 = 21.632 kg m^2\n\nomega = 18.7027 / 21.632 = 0.8646 rad/s."},

{n:137,t:"angmom",
q:"A block of mass m = 2.3 kg has just struck and stuck to the lower end of a uniform vertical rod of mass M = 3.3 kg and length l = 2.4 m that hangs from a frictionless pivot O at its upper end. Immediately after the collision the rod and block rotate about the pivot with angular velocity ω = 0.6 rad/s. Find the angle θ through which the rod swings before momentarily coming to rest. Provide the answer in radians. The gravitational acceleration is g = 9.8 m/s^2.",
a:0.276355,u:"rad",
s:"I = (1/3)*M*l^2 + m*l^2 = (1.1 + 2.3) * 5.76 = 19.584 kg m^2\nKE = 0.5 * 19.584 * 0.36 = 3.52512 J\n\nSwinging by theta raises the rod's centre (at l/2) and the block (at l) by (1 - cos theta) times those distances:\ndelta U = (M*l/2 + m*l) * g * (1 - cos theta) = (3.96 + 5.52) * 9.8 * (1 - cos theta) = 92.904*(1 - cos theta)\n\n1 - cos theta = 3.52512 / 92.904 = 0.037944\ncos theta = 0.962056\n\ntheta = 0.27636 rad."},

{n:138,t:"angmom",
q:"A 5-kg ball is dropped from a height of 8 m above one end of a uniform bar that pivots about its center. The bar has a mass of 5.5 kg and is 4.2 m long. At the other end of the bar sits another ball of mass 4.6 kg. The dropped ball sticks to the bar after the collision. Find the angular velocity of the bar immediately after the collision. The gravitational acceleration is g = 9.8 m/s^2.",
a:2.60766,u:"rad/s",
s:"Impact speed: v = sqrt(2 * 9.8 * 8) = sqrt(156.8) = 12.5220 m/s\n\nAngular momentum about the pivot (lever arm L/2 = 2.1 m):\nL = 5 * 12.5220 * 2.1 = 131.481 kg m^2/s\n\nI after = (1/12)*M*L^2 + (m1 + m2)*(L/2)^2\nI = (1/12) * 5.5 * 17.64 + 9.6 * 4.41 = 8.085 + 42.336 = 50.421 kg m^2\n\nomega = 131.481 / 50.421 = 2.6077 rad/s."},

{n:139,t:"angmom",
q:"A uniform bar of length 3 m pivots about its center and, immediately after being struck, rotates with angular velocity ω = 3.6 rad/s. A ball of mass 3 kg resting on the far end of the bar, unattached to it, is launched straight up. How high above its starting point does that ball rise? The gravitational acceleration is g = 9.8 m/s^2.",
a:1.48776,u:"m",
s:"The ball leaves with the speed of the bar's end:\nv = omega * (L/2) = 3.6 * 1.5 = 5.4 m/s\n\nHeight: h = v^2 / (2g) = 29.16 / 19.6 = 1.4878 m."},

{n:140,t:"angmom",
q:"A target in a shooting gallery consists of a vertical square wooden board, 0.25 m on a side and with mass 0.85 kg, that pivots on a horizontal axis along its top edge. The board is struck face-on at its center by a bullet with mass 1.8 g that is traveling at 350 m/s and that remains embedded in the board. What is the angular speed of the board just after the bullet's impact?",
a:4.44,u:"rad/s",
s:"Board about its top edge: I = (1/3)*M*a^2. Bullet ends at the centre, a/2 below the axis.\n\nL = m*v*(a/2) = 0.0018 * 350 * 0.125 = 0.07875 kg m^2/s\n\nI = (1/3) * 0.85 * 0.0625 + 0.0018 * 0.125^2\nI = 0.0177083 + 0.0000281 = 0.0177365 kg m^2\n\nomega = 0.07875 / 0.0177365 = 4.440 rad/s."},

{n:141,t:"angmom",
q:"A target in a shooting gallery consists of a vertical square wooden board, 0.23 m on a side and with mass 0.95 kg, that pivots on a horizontal axis along its top edge. The board is struck face-on at its center by a bullet with mass 2 g that is traveling at 355 m/s. What is the magnitude of the angular momentum of the bullet about the pivot axis just before impact?",
a:0.08165,u:"kg m^2/s",
s:"The bullet's line of motion passes a/2 below the pivot axis:\n\nL = m*v*(a/2) = 0.002 * 355 * 0.115 = 0.08165 kg m^2/s."},

{n:142,t:"angmom",
q:"A target in a shooting gallery consists of a vertical square wooden board, 0.3 m on a side and with mass 0.9 kg, that pivots on a horizontal axis along its top edge. The board is struck face-on at its center by a bullet with mass 2.2 g that is traveling at 340 m/s and that remains embedded in the board. What maximum height above the equilibrium position does the center of the board reach before starting to swing down again? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.02632,u:"m",
s:"Collision (angular momentum about the top edge):\nL = 0.0022 * 340 * 0.15 = 0.1122 kg m^2/s\nI = (1/3) * 0.9 * 0.09 + 0.0022 * 0.0225 = 0.027 + 0.0000495 = 0.0270495 kg m^2\nomega = 0.1122 / 0.0270495 = 4.14795 rad/s\n\nSwing (energy): KE = 0.5 * 0.0270495 * 4.14795^2 = 0.232705 J\nBoard and bullet both sit at the centre, so\nh = KE / ((M + m)*g) = 0.232705 / (0.9022 * 9.8) = 0.02632 m."},

{n:143,t:"angmom",
q:"A target in a shooting gallery consists of a vertical square wooden board, 0.2 m on a side and with mass 0.9 kg, that pivots on a horizontal axis along its top edge. The board is struck face-on at its center by a bullet with mass 2.2 g that is traveling at 340 m/s and that remains embedded in the board. What minimum bullet speed would be required for the board to swing all the way over after impact? The gravitational acceleration is g = 9.8 m/s^2.",
a:937.26,u:"m/s",
s:"To go over the top, the centre must rise from a/2 below the axis to a/2 above it: a rise of a = 0.2 m.\nNeeded KE = (M + m)*g*a = 0.9022 * 9.8 * 0.2 = 1.76831 J\n\nI = (1/3) * 0.9 * 0.04 + 0.0022 * 0.01 = 0.012022 kg m^2\nomega = sqrt(2 * 1.76831 / 0.012022) = sqrt(294.18) = 17.1517 rad/s\n\nAngular momentum needed: L = I*omega = 0.206198 kg m^2/s\nL = m*v*(a/2)  ->  v = 0.206198 / (0.0022 * 0.1) = 937.26 m/s."},

{n:144,t:"angmom",
q:"A 450-g toy plane is flying horizontally at 1.75 m/s, when it hits a stationary vertical bar l = 20 cm below the top. The bar is uniform, 0.75 m long, has a mass of 1.1 kg, and is hinged at its base. The toy plane drops to the ground after the collision. What is the angular velocity of the bar just after it is hit by the plane?",
a:2.1,u:"rad/s",
s:"The plane hits at height 0.75 - 0.20 = 0.55 m above the hinge, and then stops (drops straight down), giving all its angular momentum to the bar.\n\nL = m*v*r = 0.45 * 1.75 * 0.55 = 0.433125 kg m^2/s\nI_bar = (1/3)*M*L^2 = (1/3) * 1.1 * 0.5625 = 0.20625 kg m^2\n\nomega = 0.433125 / 0.20625 = 2.1 rad/s."},

{n:145,t:"angmom",
q:"A 620-g toy plane is flying horizontally at 2.25 m/s when it hits a stationary vertical bar l = 19 cm below the top. The bar is uniform, 0.95 m long, has a mass of 1.5 kg, and is hinged at its base. What is the magnitude of the angular momentum of the plane about the hinge just before the collision?",
a:1.0602,u:"kg m^2/s",
s:"Perpendicular distance from the hinge to the plane's path: 0.95 - 0.19 = 0.76 m.\n\nL = m*v*r = 0.62 * 2.25 * 0.76 = 1.0602 kg m^2/s."},

{n:146,t:"angmom",
q:"A 650-g toy plane is flying horizontally at 2.25 m/s, when it hits a stationary vertical bar l = 24 cm below the top. The bar is uniform, 0.9 m long, has a mass of 1.6 kg, and is hinged at its base. The toy plane drops to the ground after the collision. What is the angular velocity of the bar just as it reaches the ground? The gravitational acceleration is g = 9.8 m/s^2.",
a:6.1367,u:"rad/s",
s:"Collision: L = 0.65 * 2.25 * (0.9 - 0.24) = 0.96525 kg m^2/s\nI = (1/3) * 1.6 * 0.81 = 0.432 kg m^2\nomega0 = 0.96525 / 0.432 = 2.23438 rad/s\n\nFalling to the ground: the bar's centre drops L/2 = 0.45 m.\n(1/2)*I*omega^2 = (1/2)*I*omega0^2 + M*g*(L/2)\n0.216*omega^2 = 0.216 * 4.99245 + 1.6 * 9.8 * 0.45 = 1.07837 + 7.056\nomega^2 = 37.6591\n\nomega = 6.1367 rad/s."},

{n:147,t:"angmom",
q:"A small block with mass 0.45 kg is attached to a string passing through a hole in a frictionless, horizontal surface. The block is originally revolving in a circle with a radius of 0.75 m about the hole with a tangential speed of 3.75 m/s. The string is then pulled slowly from below, shortening the radius of the circle in which the block revolves. The breaking strength of the string is 32 N. What is the radius of the circle when the string breaks?",
a:0.481,u:"m",
s:"The string pulls toward the hole, so angular momentum is conserved: v*r = v0*r0 = 3.75 * 0.75 = 2.8125 m^2/s.\n\nTension = centripetal force: T = m*v^2/r = m*(v0*r0)^2 / r^3\n\nr^3 = m*(v0*r0)^2 / T = 0.45 * 7.91016 / 32 = 0.111237 m^3\n\nr = 0.481 m."},

{n:148,t:"angmom",
q:"A small block with mass 0.55 kg is attached to a string passing through a hole in a frictionless, horizontal surface. The block is originally revolving in a circle of radius 0.75 m about the hole with a tangential speed of 4.25 m/s. The string is then pulled slowly from below, shortening the radius of the circle. The breaking strength of the string is 34.5 N. What is the speed of the block when the string breaks?",
a:5.84748,u:"m/s",
s:"Conserved: v*r = 4.25 * 0.75 = 3.1875 m^2/s.\n\nr^3 = m*(v*r)^2 / T = 0.55 * 10.16016 / 34.5 = 0.161974 m^3\nr = 0.54509 m\n\nv = 3.1875 / 0.54509 = 5.8477 m/s."},

{n:149,t:"angmom",
q:"A stiff uniform wire of mass 5.4 kg and length 1.75 m is cut, bent, and the parts soldered together so that it forms a circular wheel having four identical spokes coming out from the center to the rim. None of the wire is wasted, and you can neglect the mass of the solder. What is the radius of this wheel?",
a:0.170181,u:"m",
s:"The wire makes one rim (2*pi*R) and four spokes (4*R):\n\n2*pi*R + 4*R = 1.75\nR = 1.75 / (2*pi + 4) = 1.75 / 10.28319 = 0.17018 m."},

{n:150,t:"angmom",
q:"A wheel consists of a thin circular rim of mass 2.75 kg and radius 0.12 m, together with four identical uniform spokes, each of mass 0.5 kg, running from the center of the wheel to the rim. What is the moment of inertia of this wheel about an axle through its center, perpendicular to the plane of the wheel?",
a:0.0492,u:"kg m^2",
s:"Rim (all mass at R): I_rim = M*R^2 = 2.75 * 0.0144 = 0.0396 kg m^2\nEach spoke is a rod about its end: (1/3)*m*R^2 = (1/3) * 0.5 * 0.0144 = 0.0024 kg m^2\n\nI = 0.0396 + 4 * 0.0024 = 0.0492 kg m^2."}
];

if (typeof module !== "undefined") { module.exports = { PROBLEMS2: PROBLEMS2, TOPICS2: TOPICS2 }; }
