/* PHYS 161 - Exam 1 problem bank (Chapters 1-6)
   Each entry: n (number), t (topic key), q (question), a (answer value),
   u (Moodle unit string, "" = dimensionless), s (worked solution). */

const TOPICS = {
  units:     "Units & Conversions",
  uncert:    "Uncertainty",
  vectors:   "Vectors",
  kin1d:     "Kinematics: 1D Motion",
  relative:  "Relative Motion in 2D",
  proj:      "Projectile Motion",
  vectkin:   "Kinematics in Vector Form",
  circular:  "Circular Motion",
  friction:  "Friction",
  newton2:   "Newton's Second Law",
  applynewt: "Applications of Newton's Laws"
};

const PROBLEMS = [
{n:1,t:"units",
q:"The critical mass of some fissionable material is about 6 kg. This element has a density of 19.8 g/cm^3. What would be the radius of a sphere of this material that has a critical mass?",
a:0.041667,u:"m",
s:"Convert the mass to grams so it matches the density units: m = 6 kg = 6000 g.\n\nVolume from density: V = m / rho = 6000 / 19.8 = 303.03 cm^3.\n\nFor a sphere V = (4/3)*pi*r^3, so\nr = (3V / (4*pi))^(1/3) = (3*303.03 / 12.566)^(1/3) = (72.344)^(1/3) = 4.1667 cm.\n\nThe question asks for meters: r = 4.1667 cm = 0.041667 m."},

{n:2,t:"units",
q:"The critical mass of some fissionable material is about 6 kg, and at critical mass it forms a sphere of radius 6.4 cm. What is the density of this element? Give the answer in g/cm^3.",
a:5.46415,u:"g/cm^3",
s:"Sphere volume: V = (4/3)*pi*r^3 = (4/3)*pi*(6.4)^3 = 4.18879 * 262.144 = 1098.07 cm^3.\n\nMass in grams: m = 6 kg = 6000 g.\n\nDensity: rho = m/V = 6000 / 1098.07 = 5.46415 g/cm^3."},

{n:3,t:"units",
q:"According to the label on a bottle of salad dressing, the volume of the contents is 0.3 L. Using the conversions 1 L = 1000 cm^3 and 1 in = 2.54 cm, express this volume in cubic inches.",
a:18.307,u:"in^3",
s:"First to cm^3: V = 0.3 L * 1000 cm^3/L = 300 cm^3.\n\nBuild the cubic conversion factor: 1 in^3 = (2.54 cm)^3 = 16.387 cm^3.\n\nV = 300 cm^3 / 16.387 cm^3 per in^3 = 18.307 in^3.\n\nCommon mistake: dividing by 2.54 instead of 2.54^3. Volume conversions need the factor cubed."},

{n:4,t:"units",
q:"How many nanoseconds (ns) does it take light to travel 2 ft in a vacuum? The speed of light is v = 3x10^8 m/s, 1 ft = 0.3048 m.",
a:2.032,u:"ns",
s:"Distance in meters: d = 2 ft * 0.3048 m/ft = 0.6096 m.\n\nTime: t = d/v = 0.6096 / (3x10^8) = 2.032x10^-9 s.\n\nConvert to nanoseconds (1 ns = 10^-9 s): t = 2.032 ns."},

{n:5,t:"units",
q:"A powerful engine has a displacement of 305 cubic inches. Express this displacement in liters (L) by using conversions 1 L = 1000 cm^3 and 1 in = 2.54 cm.",
a:4.998,u:"L",
s:"1 in^3 = (2.54)^3 = 16.387 cm^3.\n\nV = 305 in^3 * 16.387 cm^3/in^3 = 4998.05 cm^3.\n\nConvert to liters: V = 4998.05 / 1000 = 4.998 L."},

{n:6,t:"units",
q:"A square field measuring 100 m by 100 m has an area of 1 hectare. An acre has an area of 43600 ft^2. If a country lot has an area of 12 acres, what is the area in hectares? 1 ft = 0.3048 m. Use \u0022hectares\u0022 for units in the answer.",
a:4.86,u:"hectares",
s:"Area in square feet: A = 12 acres * 43600 ft^2/acre = 523200 ft^2.\n\nSquare the length conversion: 1 ft^2 = (0.3048)^2 = 0.09290 m^2.\n\nA = 523200 * 0.09290 = 48606.6 m^2.\n\nOne hectare = 100 m * 100 m = 10^4 m^2, so\nA = 48606.6 / 10000 = 4.86 hectares."},

{n:7,t:"units",
q:"2 astronauts are in a spherical space station. If, as is typical, each of them breathes about 500 cm^3 of air with each breath, what volume of air (in cubic meters) do these astronauts breathe in 69 days? Assume 10 breaths per minute.",
a:993.6,u:"m^3",
s:"Total minutes: 69 days * 24 h/day * 60 min/h = 99360 min.\n\nBreaths per astronaut: 99360 min * 10 breaths/min = 993600 breaths.\n\nVolume per astronaut: 993600 * 500 cm^3 = 4.968x10^8 cm^3.\n\nFor 2 astronauts: 9.936x10^8 cm^3.\n\nConvert: 1 m^3 = 10^6 cm^3, so V = 9.936x10^8 / 10^6 = 993.6 m^3."},

{n:8,t:"units",
q:"4 astronauts are in a spherical space station whose internal radius is 6 m. Each of them breathes about 520 cm^3 of air with each breath, at 8 breaths per minute. After how many days will the astronauts have breathed a total volume of air equal to the internal volume of the station?",
a:37.7595,u:"days",
s:"Station volume: V = (4/3)*pi*(6)^3 = 904.779 m^3.\n\nBreathing rate: each breath is 520 cm^3 = 520x10^-6 m^3.\nPer minute, all four: 4 * 8 * 520x10^-6 = 0.01664 m^3/min.\n\nTime: t = 904.779 / 0.01664 = 54374.9 min.\n\nIn days: t = 54374.9 / (60*24) = 54374.9 / 1440 = 37.7595 days."},

{n:9,t:"uncert",
q:"If a train travels 970 km from Berlin to Paris and then overshoots the end of the track by 5 m, what is the relative error in the total distance covered? (dimensionless - leave the unit box empty)",
a:5.1546e-6,u:"",
s:"Relative error = (uncertainty) / (measured value), with both in the same units.\n\nTotal distance: 970 km = 970000 m.\nOvershoot (the error): 5 m.\n\nRelative error = 5 / 970000 = 5.1546x10^-6.\n\nThis is a pure ratio, so it has no units."},

{n:10,t:"uncert",
q:"A train travels 770 km from Berlin to Paris and then overshoots the end of the track. If the relative error in the total distance covered must not exceed 3.6x10^-6, what is the largest overshoot that is acceptable? Give the answer in meters.",
a:2.772,u:"m",
s:"Relative error = delta_x / x, so delta_x = (relative error) * x.\n\nWith x = 770 km = 770000 m:\ndelta_x = 3.6x10^-6 * 770000 = 2.772 m."},

{n:11,t:"uncert",
q:"A rectangular piece of aluminum is 5.70 +/- 0.01 cm long and 1.80 +/- 0.01 cm wide. If the area is in A +/- dA format, find the maximum possible uncertainty in the area dA.",
a:0.075,u:"cm^2",
s:"For a product A = L*W, the fractional uncertainties add:\ndA/A = dL/L + dW/W,\nwhich rearranges to dA = W*dL + L*dW.\n\ndA = (1.80)(0.01) + (5.70)(0.01) = 0.018 + 0.057 = 0.075 cm^2.\n\n(For reference, A = 5.70*1.80 = 10.26 cm^2, so A = 10.26 +/- 0.075 cm^2.)"},

{n:12,t:"uncert",
q:"A rectangular piece of aluminum is 8.55 +/- 0.02 cm long and 2.7 +/- 0.01 cm wide. If the perimeter is written in P +/- dP format, find the maximum possible uncertainty in the perimeter dP.",
a:0.06,u:"cm",
s:"Perimeter: P = 2L + 2W. For a sum, absolute uncertainties add:\ndP = 2*dL + 2*dW.\n\ndP = 2(0.02) + 2(0.01) = 0.04 + 0.02 = 0.06 cm.\n\nNote the difference from the area problem: sums add absolute errors, products add fractional errors."},

{n:13,t:"uncert",
q:"A chocolate cookie is a circular disk with a diameter of 8.60 +/- 0.03 cm and a thickness of 0.080 +/- 0.003 cm. If the volume is in V +/- dV format, find the maximum possible uncertainty in the volume dV.",
a:0.2066875,u:"cm^3",
s:"Volume of a disk: V = pi*r^2*t, with r = d/2 = 4.30 cm and dr = dd/2 = 0.015 cm.\n\nFace area: A = pi*r^2 = pi*(4.30)^2 = 58.088 cm^2.\nUncertainty in that area: dA = 2*pi*r*dr = 2*pi*4.30*0.015 = 0.40527 cm^2.\n\nFor the product V = A*t:\ndV = A*dt + t*dA = 58.088*0.003 + 0.080*0.40527\ndV = 0.174264 + 0.032421 = 0.20669 cm^3."},

{n:14,t:"uncert",
q:"A chocolate cookie is a circular disk with a diameter of 9.6 +/- 0.03 cm and a thickness of 0.1 +/- 0.002 cm. If the area of its top circular face is written in A +/- dA format, find the maximum possible uncertainty in that area dA.",
a:0.452389,u:"cm^2",
s:"Radius: r = d/2 = 4.8 cm, and its uncertainty dr = dd/2 = 0.015 cm.\n\nFor A = pi*r^2, the fractional rule gives dA/A = 2*dr/r, so\ndA = 2*pi*r*dr = 2*pi*(4.8)(0.015) = 0.452389 cm^2.\n\nThe thickness is irrelevant here - only the circular face is asked for."},

{n:15,t:"vectors",
q:"For the vectors A and B, find the magnitude of the vector sum A + B. Vector A is 7 m and vector B is 12 m long. [Figure: the angle between A and B is 150 degrees.]",
a:6.8926,u:"m",
s:"Law of cosines for a vector sum, with theta the angle between A and B:\n|A+B|^2 = A^2 + B^2 + 2*A*B*cos(theta).\n\n|A+B|^2 = 7^2 + 12^2 + 2(7)(12)cos(150)\n= 49 + 144 + 168(-0.86603)\n= 193 - 145.49 = 47.51.\n\n|A+B| = sqrt(47.51) = 6.8926 m.\n\nNote the PLUS sign in front of the cosine term for a sum (a minus sign is used for a difference)."},

{n:16,t:"vectors",
q:"For the vectors A and B, find the magnitude of the vector difference A - B. Vector A is 7 m and vector B is 11 m long. [Figure: the angle between A and B is 150 degrees.]",
a:17.418,u:"m",
s:"Law of cosines for a vector difference:\n|A-B|^2 = A^2 + B^2 - 2*A*B*cos(theta).\n\n|A-B|^2 = 49 + 121 - 2(7)(11)cos(150)\n= 170 - 154(-0.86603)\n= 170 + 133.37 = 303.37.\n\n|A-B| = sqrt(303.37) = 17.418 m.\n\nBecause the vectors point more than 90 degrees apart, the difference is longer than either one."},

{n:17,t:"vectors",
q:"Vector B is 7 m long and makes an angle of 60 degrees with the +x axis. Find the x-component of the vector B = xi + yj.",
a:3.5,u:"m",
s:"The x-component of a vector is its magnitude times the cosine of the angle measured from the +x axis:\n\nB_x = B*cos(theta) = 7*cos(60) = 7*0.5 = 3.5 m.\n\n(The y-component would be B_y = 7*sin(60) = 6.06 m.)"},

{n:18,t:"vectors",
q:"Given vector B = 3i + 2j + 3k, find its magnitude.",
a:4.6904,u:"",
s:"Magnitude in three dimensions is the 3D Pythagorean theorem:\n|B| = sqrt(B_x^2 + B_y^2 + B_z^2).\n\n|B| = sqrt(3^2 + 2^2 + 3^2) = sqrt(9 + 4 + 9) = sqrt(22) = 4.6904.\n\nNo units are given for the components, so the answer is a bare number."},

{n:19,t:"vectors",
q:"Given the two displacements D = (8i + 10j - 10k) m and E = (5i - 3j + 7k) m, find the magnitude of the displacement 2D - E.",
a:37.13489,u:"m",
s:"Work component by component.\n2D = (16, 20, -20).\n2D - E = (16-5, 20-(-3), -20-7) = (11, 23, -27).\n\nMagnitude:\n|2D-E| = sqrt(11^2 + 23^2 + 27^2) = sqrt(121 + 529 + 729) = sqrt(1379) = 37.135 m."},

{n:20,t:"vectors",
q:"Given the two displacements D = (5i + 7j - 7k) m and E = (5i + 3j - 6k) m, find the magnitude of the component of D along the direction of E.",
a:10.518,u:"m",
s:"The component of D along E is the scalar projection D dot E_hat = (D dot E)/|E|.\n\nDot product: D dot E = (5)(5) + (7)(3) + (-7)(-6) = 25 + 21 + 42 = 88.\n\nMagnitude of E: |E| = sqrt(25 + 9 + 36) = sqrt(70) = 8.3666 m.\n\nProjection = 88 / 8.3666 = 10.518 m."},

{n:21,t:"vectors",
q:"Find the scalar product A . B of the two vectors in the figure. The magnitudes of the vectors are A = 7 and B = 12. [Figure: the angle between A and B is 77 degrees.]",
a:18.8959,u:"",
s:"Scalar (dot) product from magnitudes and the enclosed angle:\nA . B = A*B*cos(theta).\n\nA . B = 7 * 12 * cos(77) = 84 * 0.22495 = 18.896.\n\nSince the angle is less than 90 degrees, the dot product is positive."},

{n:22,t:"vectors",
q:"Find the magnitude of the vector product A x B of the two vectors in the figure. The magnitudes of the vectors are A = 8 and B = 10.5. [Figure: the angle between A and B is 77 degrees.]",
a:81.8471,u:"",
s:"Magnitude of the cross product:\n|A x B| = A*B*sin(theta).\n\n|A x B| = 8 * 10.5 * sin(77) = 84 * 0.97437 = 81.847.\n\nRemember: the dot product uses cosine, the cross product uses sine."},

{n:23,t:"vectors",
q:"Find the angle (in radians) between the two vectors A = (4i + 5j + 3k) and B = (-2i + 1j - 4k).",
a:2.0521,u:"rad",
s:"Use the dot-product definition of the angle: cos(theta) = (A . B)/(|A| |B|).\n\nA . B = (4)(-2) + (5)(1) + (3)(-4) = -8 + 5 - 12 = -15.\n|A| = sqrt(16+25+9) = sqrt(50) = 7.0711.\n|B| = sqrt(4+1+16) = sqrt(21) = 4.5826.\n\ncos(theta) = -15 / (7.0711*4.5826) = -15/32.404 = -0.46291.\n\ntheta = arccos(-0.46291) = 2.0521 rad (about 117.6 degrees).\nThe negative dot product tells you immediately the angle is obtuse."},

{n:24,t:"vectors",
q:"Given the two vectors A = (5i + 2j + 3k) and B = (-4i + 4j - 3k), find the magnitude of their vector product A x B.",
a:33.4215,u:"",
s:"Cross product by the determinant rule:\n(A x B)_x = A_y*B_z - A_z*B_y = (2)(-3) - (3)(4) = -6 - 12 = -18.\n(A x B)_y = A_z*B_x - A_x*B_z = (3)(-4) - (5)(-3) = -12 + 15 = 3.\n(A x B)_z = A_x*B_y - A_y*B_x = (5)(4) - (2)(-4) = 20 + 8 = 28.\n\nSo A x B = (-18, 3, 28).\n\n|A x B| = sqrt(324 + 9 + 784) = sqrt(1117) = 33.4215."},

{n:25,t:"vectors",
q:"Vector A has a magnitude of 3 units and is in the direction of the +x-axis. Vector B has magnitude of 14 units and lies in the xy-plane, making an angle of 60 degrees with the +x-axis. Find the magnitude of the vector product A x B.",
a:36.3731,u:"",
s:"The angle between A and B is just 60 degrees, since A lies along +x.\n\n|A x B| = A*B*sin(theta) = 3 * 14 * sin(60) = 42 * 0.86603 = 36.373."},

{n:26,t:"vectors",
q:"Vector A has a magnitude of 7.5 units and is in the direction of the +x-axis. Vector B has magnitude of 17.5 units and lies in the xy-plane, making an angle of 53 degrees with the +x-axis. Find the magnitude of the scalar product A . B.",
a:78.9882,u:"",
s:"The angle between the vectors is 53 degrees.\n\nA . B = A*B*cos(theta) = 7.5 * 17.5 * cos(53) = 131.25 * 0.601815 = 78.988."},

{n:27,t:"vectors",
q:"Two vectors A and B have magnitude A = 6 and B = 18. Their vector product is A x B = 8i + 8j. What is the angle (in radians) between A and B?",
a:0.104949,u:"rad",
s:"First find the magnitude of the given cross product:\n|A x B| = sqrt(8^2 + 8^2) = sqrt(128) = 11.3137.\n\nThen use |A x B| = A*B*sin(theta):\nsin(theta) = 11.3137 / (6*18) = 11.3137/108 = 0.104757.\n\ntheta = arcsin(0.104757) = 0.10495 rad (about 6.01 degrees).\nSince arcsin returns the acute solution, this is the standard answer."},

{n:28,t:"vectors",
q:"Two vectors A and B have magnitudes A = 6.5 and B = 19. Their vector product is A x B = 9i + 13j. What is the magnitude of their scalar product A . B?",
a:122.484,u:"",
s:"Magnitude of the cross product: |A x B| = sqrt(81 + 169) = sqrt(250) = 15.8114.\n\nGet the angle: sin(theta) = 15.8114 / (6.5*19) = 15.8114/123.5 = 0.128028.\nThen cos(theta) = sqrt(1 - 0.128028^2) = 0.991770.\n\nScalar product: A . B = A*B*cos(theta) = 123.5 * 0.991770 = 122.484.\n\nShortcut: (A.B)^2 + |AxB|^2 = (AB)^2, so A.B = sqrt(123.5^2 - 250) = 122.484."},

{n:29,t:"kin1d",
q:"On a 44 km bike ride, the first 22 km were covered at an average speed of 12 km/h. What must the average speed over the next 22 km be to have your average speed for the total 44 km be 6 km/h? Use \u0022km/h\u0022 units in the answer.",
a:4,u:"km/h",
s:"Average speed is total distance over total time - never the average of the two speeds.\n\nTotal time needed: t_total = 44/6 = 7.3333 h.\nTime already used: t_1 = 22/12 = 1.8333 h.\nTime left for the second half: t_2 = 7.3333 - 1.8333 = 5.5 h.\n\nRequired speed: v_2 = 22/5.5 = 4 km/h."},

{n:30,t:"kin1d",
q:"A world-class sprinter accelerated to his maximum in 3 s. He then maintains this speed for the remainder of a 100-m race, finishing with a total time of 9.7 s. What is the runner's average acceleration during the first 3 s?",
a:4.06504,u:"m/s^2",
s:"Split the race into two phases with v_max unknown.\n\nPhase 1 (uniform acceleration from rest, 3 s): distance = (v_max/2)*3 = 1.5*v_max.\nPhase 2 (constant speed, 9.7 - 3 = 6.7 s): distance = 6.7*v_max.\n\nTotal: 1.5*v_max + 6.7*v_max = 100\n8.2*v_max = 100, so v_max = 12.1951 m/s.\n\nAcceleration in phase 1: a = v_max/t = 12.1951/3 = 4.06504 m/s^2."},

{n:31,t:"kin1d",
q:"A world-class sprinter accelerated to his maximum in 4 s. He then maintains this speed for the remainder of a 100-m race, finishing with a total time of 9.9 s. What is the runner's average acceleration for the entire race?",
a:1.27861,u:"m/s^2",
s:"First find v_max from the distance:\n(v_max/2)*4 + v_max*(9.9-4) = 100\n2*v_max + 5.9*v_max = 100\n7.9*v_max = 100, so v_max = 12.6582 m/s.\n\nAverage acceleration over the WHOLE race is the total velocity change over the total time. The runner starts at rest and finishes at v_max:\n\na_avg = (v_max - 0)/9.9 = 12.6582/9.9 = 1.27861 m/s^2.\n\nCareful: this is not the same as the acceleration during the first 4 s (3.16 m/s^2)."},

{n:32,t:"kin1d",
q:"A world-class sprinter accelerates uniformly from rest to his maximum speed in 3.4 s. He then maintains this speed for the remainder of a 100-m race, finishing with a total time of 9.65 s. What distance does the runner cover during the first 3.4 s?",
a:21.3836,u:"m",
s:"Let v_max be the top speed.\nPhase 1: d_1 = (v_max/2)(3.4) = 1.7*v_max.\nPhase 2: d_2 = v_max*(9.65-3.4) = 6.25*v_max.\n\n1.7*v_max + 6.25*v_max = 100\n7.95*v_max = 100, so v_max = 12.5786 m/s.\n\nDistance in the first 3.4 s: d_1 = 1.7 * 12.5786 = 21.3836 m."},

{n:33,t:"kin1d",
q:"Locations A and B are 19 km apart and a bird is making a round trip A-B-A. When traveling from A to B, the bird flies against the wind, while on the return trip it goes along the wind. The speed of the bird in stationary air is 32 km/h. Determine the average speed of the bird with respect to the ground in the round trip if the wind had a constant speed of 2.1 m/s for the entire time. Provide the answer in units m/s.",
a:8.39276,u:"m/s",
s:"Put the wind in km/h: 2.1 m/s * 3.6 = 7.56 km/h.\n\nGround speeds:\nagainst the wind: 32 - 7.56 = 24.44 km/h\nwith the wind:    32 + 7.56 = 39.56 km/h\n\nTimes:\nt_1 = 19/24.44 = 0.77742 h\nt_2 = 19/39.56 = 0.48029 h\nt_total = 1.25771 h\n\nAverage speed = total distance / total time = 38 / 1.25771 = 30.214 km/h.\n\nIn m/s: 30.214/3.6 = 8.3928 m/s.\n\nNote the average is below 32 km/h: the bird spends more time in the slow leg."},

{n:34,t:"kin1d",
q:"When the Sun is directly overhead, an eagle flies toward the ground with a constant velocity of 13 km/h at 58 degrees below the horizontal line. Calculate the distance its shadow traveled on the level ground in 12 s.",
a:22.96317,u:"m",
s:"With the Sun overhead, the shadow moves with only the HORIZONTAL component of the eagle's velocity.\n\nv_x = 13*cos(58) = 13*0.529919 = 6.8890 km/h.\n\nConvert to m/s: 6.8890/3.6 = 1.91361 m/s.\n\nDistance in 12 s: d = 1.91361*12 = 22.963 m."},

{n:35,t:"kin1d",
q:"An eagle flies toward the ground with a constant velocity of 14 km/h at 57 degrees below the horizontal line. Calculate the vertical distance the eagle descends in 9 s.",
a:29.3535,u:"m",
s:"Vertical component of the velocity:\nv_y = 14*sin(57) = 14*0.838671 = 11.7414 km/h = 3.26150 m/s.\n\nDescent in 9 s: d = 3.26150*9 = 29.3535 m.\n\nThe velocity is constant, so no kinematic equation with acceleration is needed."},

{n:36,t:"kin1d",
q:"A metal key is dropped down from the bridge. When it passes by a height h = 41 m, its speed is 19.5 m/s. How long after this moment the key will hit the ground? The gravitational acceleration is g = 9.8 m/s^2.",
a:1.52113,u:"s",
s:"Take downward as positive and start the clock at the moment described:\nv_0 = 19.5 m/s (downward), a = 9.8 m/s^2, distance to fall = 41 m.\n\n41 = 19.5t + (1/2)(9.8)t^2\n4.9t^2 + 19.5t - 41 = 0\n\nQuadratic formula:\nt = [-19.5 + sqrt(19.5^2 + 4*4.9*41)] / (2*4.9)\nt = [-19.5 + sqrt(380.25 + 803.6)]/9.8\nt = (-19.5 + 34.407)/9.8 = 1.5211 s.\n\nDiscard the negative root."},

{n:37,t:"kin1d",
q:"A metal key is thrown straight up from a bridge. On its way up it passes a point at height h = 46 m above the ground with a speed of 14 m/s. How long after this moment will the key hit the ground? The gravitational acceleration is g = 9.8 m/s^2.",
a:4.80919,u:"s",
s:"Take upward as positive, origin at the point where the key passes h = 46 m.\nv_0 = +14 m/s, a = -9.8 m/s^2, final displacement y = -46 m.\n\n-46 = 14t - 4.9t^2\n4.9t^2 - 14t - 46 = 0\n\nt = [14 + sqrt(196 + 4*4.9*46)]/(2*4.9)\nt = [14 + sqrt(196 + 901.6)]/9.8\nt = (14 + 33.130)/9.8 = 4.8092 s.\n\nThe same equation handles the trip up and the trip back down - no need to split it."},

{n:38,t:"kin1d",
q:"A lunar lander is making its descent to Moon Base. The engine is cut off when the lander is 3 m above the surface and has a downward speed of 0.6 m/s. With the engine off, the lander is in free fall. What is the speed of the lander just before it touches the surface? The acceleration due to gravity on the moon is 1.6 m/s^2.",
a:3.15595,u:"m/s",
s:"Time is not asked for, so use the time-independent equation\nv^2 = v_0^2 + 2*a*d, taking downward positive.\n\nv^2 = (0.6)^2 + 2(1.6)(3) = 0.36 + 9.6 = 9.96.\n\nv = sqrt(9.96) = 3.156 m/s."},

{n:39,t:"kin1d",
q:"A lunar lander is making its descent to Moon Base. The engine is cut off when the lander is 8.5 m above the surface and has an upward speed of 0.45 m/s. With the engine off, the lander is in free fall. How long after the engine cutoff does the lander touch the surface? The acceleration due to gravity on the Moon is 1.62 m/s^2.",
a:3.52908,u:"s",
s:"Upward positive, origin at cutoff height:\nv_0 = +0.45 m/s, a = -1.62 m/s^2, y = -8.5 m.\n\n-8.5 = 0.45t - 0.81t^2\n0.81t^2 - 0.45t - 8.5 = 0\n\nt = [0.45 + sqrt(0.2025 + 4*0.81*8.5)]/(2*0.81)\nt = [0.45 + sqrt(0.2025 + 27.54)]/1.62\nt = (0.45 + 5.26712)/1.62 = 3.5291 s."},

{n:40,t:"kin1d",
q:"A motorcyclist heading east through a small city accelerates after he passes the signpost marking the city limits. His acceleration is a constant 3.9 m/s^2. At time t = 0 he is 4.5 m east of the signpost, moving east at 14 m/s. Find his position with respect to the signpost at time t = 3 s.",
a:64.05,u:"m",
s:"Position with constant acceleration:\nx = x_0 + v_0*t + (1/2)a*t^2.\n\nx = 4.5 + 14(3) + 0.5(3.9)(9)\nx = 4.5 + 42 + 17.55 = 64.05 m east of the signpost.\n\nDo not forget the initial offset x_0 = 4.5 m."},

{n:41,t:"kin1d",
q:"A motorcyclist heading east through a small city accelerates after he passes the signpost marking the city limits. His acceleration is a constant 4.3 m/s^2. At time t = 0 he is 5 m east of the signpost, moving east at 16 m/s. Find his velocity at time t = 3 s.",
a:28.9,u:"m/s",
s:"Velocity with constant acceleration:\nv = v_0 + a*t = 16 + 4.3(3) = 16 + 12.9 = 28.9 m/s.\n\nThe starting position of 5 m is irrelevant for the velocity."},

{n:42,t:"kin1d",
q:"A particle slows down with an acceleration of 1.8 m/s^2 for 4.9 s moving straight for 55 m long. Find the speed of the particle at the end of the distance.",
a:6.81449,u:"m/s",
s:"Slowing down means a = -1.8 m/s^2 relative to the motion.\n\nFirst find the initial speed from the distance:\n55 = v_0(4.9) - 0.5(1.8)(4.9)^2\n55 = 4.9*v_0 - 21.609\nv_0 = 76.609/4.9 = 15.6345 m/s.\n\nThen the final speed:\nv = v_0 - a*t = 15.6345 - 1.8(4.9) = 15.6345 - 8.82 = 6.8145 m/s."},

{n:43,t:"kin1d",
q:"A particle slows down uniformly with an acceleration of magnitude 1.3 m/s^2 for 5.8 s while moving in a straight line a distance of 58 m. Find the speed of the particle at the beginning of this distance.",
a:13.77,u:"m/s",
s:"Use x = v_0*t - (1/2)*a*t^2 with a = 1.3 m/s^2 of deceleration:\n\n58 = v_0(5.8) - 0.5(1.3)(5.8)^2\n58 = 5.8*v_0 - 21.866\n5.8*v_0 = 79.866\nv_0 = 13.77 m/s."},

{n:44,t:"kin1d",
q:"A person walks 88.1 m at a speed of 1.22 m/s and then runs 244.2 m at a speed of 5.05 m/s along a straight track. Compute the average speed.",
a:2.75609,u:"m/s",
s:"Average speed = total distance / total time.\n\nTimes:\nt_1 = 88.1/1.22 = 72.2131 s\nt_2 = 244.2/5.05 = 48.3564 s\nt_total = 120.5695 s\n\nTotal distance: 88.1 + 244.2 = 332.3 m.\n\nv_avg = 332.3/120.5695 = 2.7561 m/s."},

{n:45,t:"kin1d",
q:"A person walks 94.3 m at a speed of 1.33 m/s along a straight track and then immediately runs back along the same track, in the opposite direction, a distance of 218.5 m at a speed of 4.9 m/s. Compute the magnitude of the average velocity for the whole trip.",
a:1.07538,u:"m/s",
s:"Average VELOCITY uses displacement, not distance travelled.\n\nDisplacement: the person goes +94.3 m then -218.5 m, so\n|displacement| = 218.5 - 94.3 = 124.2 m.\n\nTimes:\nt_1 = 94.3/1.33 = 70.9023 s\nt_2 = 218.5/4.9 = 44.5918 s\nt_total = 115.4941 s\n\n|v_avg| = 124.2/115.4941 = 1.0754 m/s.\n\n(The average SPEED would have been 312.8/115.49 = 2.71 m/s - a different quantity.)"},

{n:46,t:"kin1d",
q:"A motorist traveling with a constant speed of 18 m/s passes a school-crossing corner, where the speed limit is 11 m/s. Just as the motorist passes, a police officer on a motorcycle at the corner starts off in pursuit with constant acceleration of 4.4 m/s^2. What is the distance they have traveled from the corner to the point where the officer catches up with the motorist?",
a:147.27273,u:"m",
s:"Catching up means equal positions at the same time.\n\nMotorist: x = 18t.\nOfficer:  x = 0.5(4.4)t^2 = 2.2t^2.\n\nSet equal: 18t = 2.2t^2, so t = 18/2.2 = 8.1818 s (rejecting t = 0).\n\nDistance: x = 18(8.1818) = 147.27 m.\n\nThe posted speed limit is a distractor."},

{n:47,t:"kin1d",
q:"A motorist traveling with a constant speed of 18 m/s passes a school-crossing corner, where the speed limit is 10 m/s. Just as the motorist passes, a police officer on a motorcycle standing at the corner starts off in pursuit with constant acceleration of 3.6 m/s^2. What is the officer's speed at the moment he catches up with the motorist?",
a:36,u:"m/s",
s:"Time to catch up: 18t = 1.8t^2, so t = 18/1.8 = 10 s.\n\nOfficer's speed then: v = a*t = 3.6(10) = 36 m/s.\n\nUseful general result: when starting from rest, the pursuer's speed at the catch-up moment is exactly twice the constant speed of the target."},

{n:48,t:"kin1d",
q:"A motorist traveling with a constant speed of 16 m/s passes a school-crossing corner, where the speed limit is 10 m/s. Just as the motorist passes, a police officer on a motorcycle at the corner starts off in pursuit with constant acceleration of 4.4 m/s^2. How much time elapses before the officer catches with the motorist?",
a:7.27273,u:"s",
s:"Equal positions: 16t = 0.5(4.4)t^2 = 2.2t^2.\n\nt = 16/2.2 = 7.2727 s.\n\nGeneral formula: t = 2*v/a."},

{n:49,t:"kin1d",
q:"A motorist traveling with a constant speed of 18 m/s passes a school-crossing corner. Just as the motorist passes, a police officer on a motorcycle at the corner starts off in pursuit with constant acceleration of 4.8 m/s^2. What is the maximum distance by which the motorist gets ahead of the officer?",
a:33.75,u:"m",
s:"The gap grows while the officer is slower and shrinks once he is faster, so the gap is largest at the instant their SPEEDS are equal.\n\n18 = 4.8t, so t = 3.75 s.\n\nGap at that moment:\nd = 18(3.75) - 0.5(4.8)(3.75)^2\nd = 67.5 - 33.75 = 33.75 m."},

{n:50,t:"kin1d",
q:"An airport for small planes has a runway of 200 m long. One kind of airplane that might use this airfield can accelerate at 1.7 m/s^2. Calculate the speed this airplane can reach before takeoff?",
a:26.07681,u:"m/s",
s:"Starting from rest, use v^2 = v_0^2 + 2*a*d:\n\nv^2 = 0 + 2(1.7)(200) = 680.\n\nv = sqrt(680) = 26.077 m/s."},

{n:51,t:"kin1d",
q:"One kind of airplane must reach a speed before takeoff of at least 29.3 m/s, and can accelerate at 2.2 m/s^2. What minimum length must the runway have in order for the airplane to be able to reach this speed before takeoff?",
a:195.11136,u:"m",
s:"Rearrange v^2 = 2*a*d for the distance:\n\nd = v^2/(2a) = (29.3)^2/(2*2.2) = 858.49/4.4 = 195.111 m."},

{n:52,t:"kin1d",
q:"How long does it take a car to cross a 25 m-wide intersection after the light turns green, if the car accelerates from rest at a constant acceleration of 2.4 m/s^2?",
a:4.56435,u:"s",
s:"From rest: d = (1/2)a*t^2, so\n\nt = sqrt(2d/a) = sqrt(2*25/2.4) = sqrt(20.8333) = 4.5644 s."},

{n:53,t:"kin1d",
q:"How long does it take a car to cross a 21 m-wide intersection if the car enters the intersection already moving at 5.1 m/s and accelerates at a constant 2.5 m/s^2?",
a:2.53838,u:"s",
s:"Now there is an initial speed, so the equation is quadratic:\n21 = 5.1t + 0.5(2.5)t^2\n1.25t^2 + 5.1t - 21 = 0\n\nt = [-5.1 + sqrt(26.01 + 4*1.25*21)]/(2*1.25)\nt = [-5.1 + sqrt(26.01 + 105)]/2.5\nt = (-5.1 + 11.4460)/2.5 = 2.5384 s."},

{n:54,t:"relative",
q:"A river flows due south with a speed of 1.8 m/s. A man steers a motorboat across the river; his velocity relative to the water is 3.8 m/s due east. What is the magnitude of the velocity of man relative to the earth?",
a:4.20476,u:"m/s",
s:"Relative-velocity addition: v(boat/earth) = v(boat/water) + v(water/earth).\n\nThe two given velocities are perpendicular (east and south), so\n\n|v| = sqrt(3.8^2 + 1.8^2) = sqrt(14.44 + 3.24) = sqrt(17.68) = 4.2048 m/s.\n\nHere the boat is AIMED east, so the current adds on and it drifts south."},

{n:55,t:"relative",
q:"A river flows due south with a speed of 1.9 m/s. A man steers a motorboat across the river; the speed of the boat relative to the water is 4.3 m/s, and he steers so that he travels due east relative to the earth. What is the magnitude of his velocity relative to the earth?",
a:3.85746,u:"m/s",
s:"This time the RESULT is due east, so the boat must be aimed upstream to cancel the current. The 4.3 m/s is now the hypotenuse:\n\nv_earth = sqrt(4.3^2 - 1.9^2) = sqrt(18.49 - 3.61) = sqrt(14.88) = 3.8575 m/s.\n\nCompare with the previous problem: there you ADD in quadrature, here you SUBTRACT. Read carefully which velocity is due east."},

{n:56,t:"relative",
q:"A river flows due south with a speed of 1.8 m/s. A man steers a motorboat across the river; his velocity relative to the water is 4 m/s due east. The river is 970 m wide. How much time is required to cross the river?",
a:242.5,u:"s",
s:"The crossing time depends only on the component of velocity perpendicular to the banks (east), which is 4 m/s. The current pushes the boat downstream but does not slow the crossing.\n\nt = 970/4 = 242.5 s."},

{n:57,t:"relative",
q:"A river flows due south with a speed of 2.3 m/s and is 1000 m wide. A man steers a motorboat so that his velocity relative to the earth is due east; the speed of the boat relative to the water is 4.8 m/s. How much time is required to cross the river?",
a:237.356,u:"s",
s:"Because the resultant must be due east, part of the boat's 4.8 m/s is spent fighting the current:\n\nv_east = sqrt(4.8^2 - 2.3^2) = sqrt(23.04 - 5.29) = sqrt(17.75) = 4.2131 m/s.\n\nt = 1000/4.2131 = 237.36 s."},

{n:58,t:"relative",
q:"A river flows due south with a speed of 2.2 m/s. A man steers a motorboat across the river; his velocity relative to the water is 3.3 m/s due east. The river is 770 m wide. How far downstream from his starting point does he land?",
a:513.333,u:"m",
s:"Crossing time (set by the east component only):\nt = 770/3.3 = 233.33 s.\n\nDownstream drift during that time:\nd = 2.2 * 233.33 = 513.33 m."},

{n:59,t:"proj",
q:"To start an avalanche on a mountain slope, an artillery shell is fired with an initial velocity of 291 m/s at 57 degrees above the horizontal. It explodes on the mountainside 46 s after firing. What is the horizontal coordinate of the shell where it explodes relative to its firing point?",
a:7290.53812,u:"m",
s:"Horizontal motion has no acceleration, so x = v_0*cos(theta)*t.\n\nv_0x = 291*cos(57) = 291*0.544639 = 158.490 m/s.\n\nx = 158.490 * 46 = 7290.5 m."},

{n:60,t:"proj",
q:"To start an avalanche on a mountain slope, an artillery shell is fired with an initial velocity of 301 m/s at 61 degrees above the horizontal. It explodes on the mountainside 41 s after firing. What is the vertical distance of the shell where it explodes relative to its firing point?",
a:2556.78181,u:"m",
s:"Vertical motion with constant downward g:\ny = v_0*sin(theta)*t - (1/2)g*t^2.\n\nv_0y = 301*sin(61) = 301*0.874620 = 263.26 m/s.\n\ny = 263.26(41) - 4.9(41)^2\ny = 10793.7 - 8236.9 = 2556.8 m."},

{n:61,t:"proj",
q:"To start an avalanche on a mountain slope, an artillery shell is fired with an initial velocity of 296 m/s at 62 degrees above the horizontal. It explodes on the mountainside 35 s after firing. What is the speed of the shell at the moment it explodes? The gravitational acceleration is g = 9.8 m/s^2.",
a:161.174,u:"m/s",
s:"Handle the two components separately, then recombine.\n\nHorizontal (unchanged): v_x = 296*cos(62) = 138.985 m/s.\nVertical: v_y = 296*sin(62) - 9.8(35) = 261.38 - 343 = -81.62 m/s (moving downward).\n\nSpeed: v = sqrt(138.985^2 + 81.62^2) = sqrt(19317 + 6662) = sqrt(25979) = 161.17 m/s."},

{n:62,t:"proj",
q:"A ball is tossed from an upper-story window of a building. The ball is given an initial velocity of 5.5 m/s at an angle of 16 degrees below the horizontal. It strikes the ground 5 s later. How far horizontally from the base of the building does the ball strike the ground? The gravitational acceleration is g = 9.8 m/s^2.",
a:26.43510,u:"m",
s:"The launch angle being below the horizontal does not change the horizontal component's sign or size.\n\nv_0x = 5.5*cos(16) = 5.5*0.961262 = 5.2869 m/s.\n\nx = 5.2869 * 5 = 26.435 m."},

{n:63,t:"proj",
q:"A ball is tossed from an upper-story window of a building. The ball is given an initial velocity of 6 m/s at an angle of 22 degrees below the horizontal. It strikes the ground 5 s later. Find the height from which the ball was thrown. The gravitational acceleration is g = 9.8 m/s^2.",
a:133.73820,u:"m",
s:"Thrown DOWNWARD, so the initial vertical velocity and gravity both point down. Taking downward as positive:\n\nv_0y = 6*sin(22) = 6*0.374607 = 2.2476 m/s (downward).\n\nh = v_0y*t + (1/2)g*t^2\nh = 2.2476(5) + 4.9(25)\nh = 11.238 + 122.5 = 133.74 m."},

{n:64,t:"proj",
q:"A ball is tossed from an upper-story window of a building. The ball is given an initial velocity of 6 m/s at an angle of 27 degrees ABOVE the horizontal. It strikes the ground 5.5 s later. Find the height from which the ball was thrown. The gravitational acceleration is g = 9.8 m/s^2.",
a:133.243,u:"m",
s:"Now the ball is thrown upward first, so the two vertical contributions have opposite signs. Take downward as positive:\n\nv_0y = 6*sin(27) = 2.72394 m/s UPWARD, i.e. -2.72394 downward.\n\nh = -2.72394(5.5) + 4.9(5.5)^2\nh = -14.982 + 148.225 = 133.24 m.\n\nThe upward toss buys about 15 m of height back compared with the same throw aimed downward."},

{n:65,t:"proj",
q:"During a fireworks display, a shell is shot into the air with an initial speed of 69 m/s at an angle of 60 degrees above the horizontal. The fuse is timed to ignite the shell just as it reaches its highest point above the ground. Calculate the height at which the shell explodes. The gravitational acceleration is g = 9.8 m/s^2.",
a:182.18112,u:"m",
s:"At the highest point the vertical velocity is zero, so use v_y^2 = v_0y^2 - 2*g*h with v_y = 0:\n\nv_0y = 69*sin(60) = 59.7558 m/s.\n\nh = v_0y^2/(2g) = (59.7558)^2/(19.6) = 3570.75/19.6 = 182.18 m."},

{n:66,t:"proj",
q:"During a fireworks display, a shell is shot into the air with an initial speed of 87 m/s at an angle of 80 degrees above the horizontal. The fuse is timed to ignite the shell just as it reaches its highest point above the ground. How much time passes between the launch of the shell and the explosion? The gravitational acceleration is g = 9.8 m/s^2.",
a:8.74227,u:"s",
s:"At the top, v_y = 0 = v_0y - g*t, so t = v_0y/g.\n\nv_0y = 87*sin(80) = 87*0.984808 = 85.678 m/s.\n\nt = 85.678/9.8 = 8.7423 s."},

{n:67,t:"proj",
q:"During a fireworks display, a shell is shot into the air with an initial speed of 83 m/s at an angle of 75 degrees above the horizontal. The fuse is timed to ignite the shell 3 s after launch. Calculate the height at which the shell explodes. The gravitational acceleration is g = 9.8 m/s^2.",
a:196.416,u:"m",
s:"Here the time is given directly (the shell has NOT reached the top yet), so use the full vertical equation:\n\nv_0y = 83*sin(75) = 83*0.965926 = 80.172 m/s.\n\ny = v_0y*t - (1/2)g*t^2 = 80.172(3) - 4.9(9)\ny = 240.516 - 44.1 = 196.42 m."},

{n:68,t:"proj",
q:"In a local cafe, a customer slides an empty mug down the counter for a refill. The mug slides off the counter and strikes the floor 1.49 m from the base of the counter. If the height of the counter is 85 cm, what is the magnitude of the velocity with which the mug left the counter? The gravitational acceleration is g = 9.8 m/s^2.",
a:3.57746,u:"m/s",
s:"The mug leaves horizontally, so v_0y = 0 and the fall time comes from the height alone:\n\nt = sqrt(2h/g) = sqrt(2*0.85/9.8) = sqrt(0.173469) = 0.41650 s.\n\nHorizontal velocity:\nv_0 = x/t = 1.49/0.41650 = 3.5775 m/s."},

{n:69,t:"proj",
q:"In a local cafe, a customer slides an empty mug down the counter for a refill. The mug slides off the counter and strikes the floor 1.26 m from the base of the counter. The height of the counter is 82 cm. What is the magnitude of the velocity with which the mug strikes the floor? The gravitational acceleration is g = 9.8 m/s^2.",
a:5.05558,u:"m/s",
s:"Fall time: t = sqrt(2*0.82/9.8) = sqrt(0.167347) = 0.409080 s.\n\nHorizontal velocity (constant): v_x = 1.26/0.409080 = 3.0801 m/s.\nVertical velocity at impact: v_y = g*t = 9.8(0.409080) = 4.0090 m/s.\n\nImpact speed: v = sqrt(3.0801^2 + 4.0090^2) = sqrt(9.487 + 16.072) = sqrt(25.559) = 5.0556 m/s."},

{n:70,t:"proj",
q:"In a local cafe, a customer slides an empty mug down the counter for a refill. The mug slides off the counter and strikes the floor 2.04 m from the base of the counter. The height of the counter is 87 cm. At what angle below the horizontal does the mug strike the floor? Give the answer in degrees. The gravitational acceleration is g = 9.8 m/s^2.",
a:40.4622,u:"deg",
s:"Fall time: t = sqrt(2*0.87/9.8) = sqrt(0.177551) = 0.421368 s.\n\nComponents at impact:\nv_x = 2.04/0.421368 = 4.8414 m/s\nv_y = 9.8(0.421368) = 4.1294 m/s\n\nAngle below the horizontal:\ntheta = arctan(v_y/v_x) = arctan(4.1294/4.8414) = arctan(0.85293) = 40.46 degrees."},

{n:71,t:"vectkin",
q:"A rocket moves in the xy-plane. The rocket's acceleration has components ax(t) = alpha*t^2 and ay(t) = beta - gamma*t, where alpha = 2.4 m/s^4, beta = 9 m/s^2, and gamma = 1.6 m/s^3. At t = 0 the rocket is at the origin and has velocity v0 = v0x*i + v0y*j, with v0x = 1.3 m/s and v0y = 5 m/s. Calculate the position of the rocket along the vertical axis at t = 7 s.",
a:164.03333,u:"m",
s:"When the acceleration depends on time you must integrate, not use the constant-a formulas.\n\nIntegrate a_y = beta - gamma*t once:\nv_y = v0y + beta*t - (gamma/2)t^2 = 5 + 9t - 0.8t^2.\n\nIntegrate again (y_0 = 0):\ny = 5t + (9/2)t^2 - (0.8/3)t^3 = 5t + 4.5t^2 - 0.26667t^3.\n\nAt t = 7:\ny = 35 + 4.5(49) - 0.26667(343)\ny = 35 + 220.5 - 91.467 = 164.03 m."},

{n:72,t:"vectkin",
q:"A rocket moves in the xy-plane. The rocket's acceleration has components ax(t) = alpha*t^2 and ay(t) = beta - gamma*t, where alpha = 2 m/s^4, beta = 7.5 m/s^2, and gamma = 1.4 m/s^3. At t = 0 the rocket is at the origin and has velocity v0 = v0x*i + v0y*j, with v0x = 1.3 m/s and v0y = 8 m/s. Calculate the position of the rocket along horizontal axis at t = 4 s.",
a:47.86667,u:"m",
s:"Integrate a_x = alpha*t^2 twice.\n\nv_x = v0x + (alpha/3)t^3 = 1.3 + (2/3)t^3.\nx = v0x*t + (alpha/12)t^4 = 1.3t + (2/12)t^4.\n\nAt t = 4:\nx = 1.3(4) + 0.16667(256)\nx = 5.2 + 42.667 = 47.87 m.\n\nThe y-data is not needed."},

{n:73,t:"vectkin",
q:"A rocket moves in the xy-plane. The rocket's acceleration has components ax(t) = alpha*t^2 and ay(t) = beta - gamma*t, where alpha = 2.3 m/s^4, beta = 9 m/s^2, and gamma = 1.1 m/s^3. At t = 0 the rocket is at the origin and has velocity v0 = v0x*i + v0y*j, with v0x = 1.2 m/s and v0y = 7 m/s. Calculate the magnitude of the velocity at t = 4 s.",
a:60.79784,u:"m/s",
s:"Integrate each acceleration component once.\n\nv_x = 1.2 + (alpha/3)t^3 = 1.2 + (2.3/3)(64) = 1.2 + 49.067 = 50.267 m/s.\nv_y = 7 + beta*t - (gamma/2)t^2 = 7 + 9(4) - 0.55(16) = 7 + 36 - 8.8 = 34.2 m/s.\n\nMagnitude:\nv = sqrt(50.267^2 + 34.2^2) = sqrt(2526.7 + 1169.6) = sqrt(3696.4) = 60.798 m/s."},

{n:74,t:"vectkin",
q:"A fish swimming in a horizontal plane has velocity vi = -3i + 3j m/s at a point in the ocean. After the fish swims with constant acceleration for 26 s, its velocity is v = -2i + 8j m/s. What is the magnitude of the acceleration?",
a:0.19612,u:"m/s^2",
s:"Constant acceleration: a = (v - v_i)/t, computed component by component.\n\nv - v_i = (-2 - (-3), 8 - 3) = (1, 5) m/s.\n\na = (1/26, 5/26) = (0.03846, 0.19231) m/s^2.\n\n|a| = sqrt(1^2 + 5^2)/26 = sqrt(26)/26 = 0.19612 m/s^2."},

{n:75,t:"vectkin",
q:"A fish swimming in a horizontal plane has velocity vi = -5i + 1j m/s at a point in the ocean. After the fish swims with constant acceleration for 29 s, its velocity is v = 4i + 10j m/s. What is the angle of the acceleration vector, measured counterclockwise from the +x axis? Give the answer in degrees.",
a:45,u:"deg",
s:"a = (v - v_i)/t = ((4-(-5)), (10-1))/29 = (9, 9)/29.\n\nBoth components are equal and positive, so the vector points into the first quadrant at\n\ntheta = arctan(a_y/a_x) = arctan(9/9) = arctan(1) = 45 degrees.\n\nDividing by 29 does not change the direction, so you never needed the numerical components."},

{n:76,t:"vectkin",
q:"A fish swimming in a horizontal plane has velocity vi = 2i + 6j m/s at a point in the ocean where the position relative to a certain rock is ri = -6i + 4j m. After the fish swims with constant acceleration for 13 s, its velocity is v = -2i + 2j m/s. If the fish maintains constant acceleration, what is its horizontal position at t = 33 s?",
a:-107.53846,u:"m",
s:"First get the acceleration:\na = (v - v_i)/13 = ((-2-2), (2-6))/13 = (-4, -4)/13,\nso a_x = -0.307692 m/s^2.\n\nNow apply x = x_0 + v_0x*t + (1/2)a_x*t^2 at t = 33 s:\nx = -6 + 2(33) + 0.5(-0.307692)(1089)\nx = -6 + 66 - 167.538 = -107.54 m.\n\nThe answer is negative: the fish has passed the rock and is on the other side."},

{n:77,t:"vectkin",
q:"A fish swimming in a horizontal plane has velocity vi = 3i + 1j m/s at a point in the ocean where the position relative to a certain rock is ri = 3i + 4j m. After the fish swims with constant acceleration for 13 s, its velocity is v = 8i + 7j m/s. If the fish maintains constant acceleration, what is its vertical position at t = 29 s?",
a:227.07692,u:"m",
s:"Acceleration: a = (v - v_i)/13 = ((8-3),(7-1))/13 = (5,6)/13,\nso a_y = 6/13 = 0.461538 m/s^2.\n\nVertical position at t = 29 s:\ny = y_0 + v_0y*t + (1/2)a_y*t^2\ny = 4 + 1(29) + 0.5(0.461538)(841)\ny = 4 + 29 + 194.077 = 227.08 m."},

{n:78,t:"vectkin",
q:"A particle starts from the origin at t = 0 with an initial velocity having an x component of -3 m/s and a y component of -5 m/s. The particle moves in the xy plane with an x component of acceleration only, given by ax = 5.2 m/s^2. Determine the distance from the origin at t = 6 s.",
a:81.33486,u:"m",
s:"x-motion (accelerated):\nx = -3(6) + 0.5(5.2)(36) = -18 + 93.6 = 75.6 m.\n\ny-motion (constant velocity, since a_y = 0):\ny = -5(6) = -30 m.\n\nDistance from the origin:\nr = sqrt(75.6^2 + 30^2) = sqrt(5715.36 + 900) = sqrt(6615.36) = 81.335 m."},

{n:79,t:"vectkin",
q:"A spaceship is traveling at a constant velocity of v = 255i m/s when its engines fire up, giving it constant acceleration a = -2i + 12k m/s^2. What is the magnitude of the spaceship's velocity 3 s after the engines fired?",
a:251.58895,u:"m/s",
s:"Apply v = v_0 + a*t to each component:\n\nv_x = 255 + (-2)(3) = 249 m/s\nv_z = 0 + 12(3) = 36 m/s\n\n|v| = sqrt(249^2 + 36^2) = sqrt(62001 + 1296) = sqrt(63297) = 251.59 m/s."},

{n:80,t:"vectkin",
q:"A spaceship is traveling at a constant velocity of v = 275i m/s when its engines fire up, giving it constant acceleration a = -2.2i + 9k m/s^2. What is the magnitude of the spaceship's displacement 3 s after the engines fired?",
a:816.106,u:"m",
s:"Displacement components from d = v_0*t + (1/2)a*t^2:\n\nd_x = 275(3) + 0.5(-2.2)(9) = 825 - 9.9 = 815.1 m\nd_z = 0 + 0.5(9)(9) = 40.5 m\n\n|d| = sqrt(815.1^2 + 40.5^2) = sqrt(664388 + 1640) = sqrt(666028) = 816.11 m."},

{n:81,t:"circular",
q:"A car passes over a rise in the roadway such that the top of the rise is shaped like a circle of radius 530 m. At the moment the car is at the top of the rise, its velocity is 24 km/h and constant acceleration parallel to the roadway is 0.34 m/s^2. What is the magnitude of the total acceleration vector for the car at this instant?",
a:0.35019,u:"m/s^2",
s:"There are two perpendicular pieces of acceleration: tangential (along the road) and centripetal (toward the centre of the circle).\n\nConvert the speed: v = 24 km/h = 6.6667 m/s.\n\nCentripetal: a_c = v^2/r = 44.444/530 = 0.083857 m/s^2.\nTangential: a_t = 0.34 m/s^2 (given).\n\nTotal: a = sqrt(a_t^2 + a_c^2) = sqrt(0.1156 + 0.00703) = sqrt(0.12263) = 0.35019 m/s^2."},

{n:82,t:"circular",
q:"A car passes over a rise in the roadway such that the top of the rise is shaped like a circle of radius 580 m. The car moves at a constant speed of 38 km/h. What is the magnitude of the total acceleration of the car at the moment it is at the top of the rise?",
a:0.192103,u:"m/s^2",
s:"Constant speed means the tangential acceleration is zero, so the total acceleration is purely centripetal.\n\nv = 38 km/h = 10.5556 m/s.\n\na = v^2/r = 111.42/580 = 0.19210 m/s^2, directed downward toward the centre of the circle."},

{n:83,t:"circular",
q:"A car of mass 1430 kg starts from rest on a horizontal circular track of radius 61 m. Its speed is increased uniformly and in 49 seconds it makes it a full circle. What was the net force acting on the car at the moment when it completed the first semicircle?",
a:2905,u:"N",
s:"Find the tangential acceleration from the full lap:\nfull circumference s = 2*pi*61 = 383.27 m, covered from rest in 49 s.\ns = (1/2)a_t*t^2, so a_t = 2(383.27)/49^2 = 766.55/2401 = 0.31926 m/s^2.\n\nAt the half-circle point, distance travelled is s/2 = 191.64 m:\nv^2 = 2*a_t*(191.64) = 2(0.31926)(191.64) = 122.36 m^2/s^2.\n\nCentripetal acceleration: a_c = v^2/r = 122.36/61 = 2.0059 m/s^2.\n\nTotal acceleration: a = sqrt(2.0059^2 + 0.31926^2) = sqrt(4.0236 + 0.10193) = 2.0313 m/s^2.\n\nNet force: F = m*a = 1430(2.0313) = 2905 N."},

{n:84,t:"circular",
q:"A bucket of water whirls around a vertical circle of radius 79.3 cm. What is the minimum speed that the bucket must have at the top of its circular motion if the water is not to spill out of the upside-down bucket? Take the gravitational acceleration g = 9.8 m/s^2.",
a:2.788,u:"m/s",
s:"At the minimum speed the bucket exerts no force on the water: gravity alone provides the centripetal force.\n\nm*g = m*v^2/r, so v = sqrt(g*r).\n\nWith r = 0.793 m:\nv = sqrt(9.8 * 0.793) = sqrt(7.7714) = 2.788 m/s."},

{n:85,t:"circular",
q:"A bucket of water is whirled around a vertical circle of radius 68 cm. What is the maximum period of revolution the bucket can have if the water is not to spill out of the upside-down bucket at the top of the circle? Take the gravitational acceleration g = 9.8 m/s^2.",
a:1.65509,u:"s",
s:"Minimum speed at the top: v = sqrt(g*r) = sqrt(9.8*0.68) = 2.58069 m/s.\n\nThe slowest allowed speed corresponds to the LONGEST allowed period:\nT = 2*pi*r/v = 2*pi(0.68)/2.58069 = 4.27257/2.58069 = 1.6555 s.\n\nEquivalently T = 2*pi*sqrt(r/g) = 2*pi*sqrt(0.68/9.8) = 1.65509 s."},

{n:86,t:"circular",
q:"A ball of 0.45 kg is attached at the end of a cord and revolves in a circle of radius 1.3 m on a frictionless horizontal surface. The cord will break if the tension in it exceeds 75 N. What is the maximum speed the ball can have without breaking the cord?",
a:14.72,u:"m/s",
s:"On a HORIZONTAL surface gravity is perpendicular to the circle and plays no role: the tension alone is the centripetal force.\n\nT = m*v^2/r, so v = sqrt(T*r/m).\n\nv = sqrt(75 * 1.3 / 0.45) = sqrt(216.667) = 14.72 m/s."},

{n:87,t:"circular",
q:"A ball of 0.35 kg is attached at the end of a cord and revolves in a VERTICAL circle of radius 1.75 m. The cord will break if the tension in it exceeds 75 N. What is the maximum speed the ball can have at the lowest point of the circle without breaking the cord? Take the gravitational acceleration g = 9.8 m/s^2.",
a:18.9169,u:"m/s",
s:"At the lowest point the tension points up and gravity down, and the net upward force is centripetal:\n\nT - m*g = m*v^2/r.\n\nv = sqrt((T - m*g)*r/m)\nv = sqrt((75 - 0.35*9.8)(1.75)/0.35)\nv = sqrt((75 - 3.43)(5)) = sqrt(357.85) = 18.917 m/s.\n\nCompare with the horizontal case: part of the tension is now spent supporting the weight."},

{n:88,t:"circular",
q:"A bicycle accelerates uniformly along a circular path at a flat horizontal surface. Bicycle is initially at rest and the tangential acceleration is 1.2 m/s^2. The bicycle makes one half of the circle before it skids off the circular path. Calculate coefficient of static friction between the bicycle and the surface taking gravitational acceleration g = 9.8 m/s^2.",
a:0.779,u:"",
s:"Friction must supply BOTH the tangential and the centripetal acceleration; it skids when the total required acceleration reaches mu_s*g.\n\nAfter half a circle, distance s = pi*r, so\nv^2 = 2*a_t*s = 2(1.2)(pi*r).\n\nCentripetal acceleration: a_c = v^2/r = 2(1.2)(pi) = 7.5398 m/s^2 (the radius cancels).\n\nTotal: a = sqrt(a_c^2 + a_t^2) = sqrt(56.85 + 1.44) = sqrt(58.29) = 7.6348 m/s^2.\n\nAt the skid point: mu_s*g = a, so mu_s = 7.6348/9.8 = 0.779 (dimensionless)."},

{n:89,t:"circular",
q:"A bicycle initially at rest accelerates uniformly along a circular path at a flat horizontal surface. The bicycle makes one third of the circle before it skids off the circular path. If the coefficient of static friction between the bicycle and the surface is known and equals 0.72, find the tangential acceleration taking gravitational acceleration g = 9.8 m/s^2.",
a:1.63845,u:"m/s^2",
s:"One third of the circle: s = (2*pi*r)/3.\n\nv^2 = 2*a_t*s = (4*pi/3)*a_t*r, so\na_c = v^2/r = (4*pi/3)*a_t = 4.18879*a_t.\n\nTotal acceleration:\na = a_t*sqrt(1 + 4.18879^2) = a_t*sqrt(1 + 17.546) = 4.30651*a_t.\n\nSkidding condition: a = mu_s*g = 0.72(9.8) = 7.056 m/s^2.\n\na_t = 7.056/4.30651 = 1.63845 m/s^2."},

{n:90,t:"circular",
q:"A block of mass m = 1 kg is moving with constant speed in a circle with radius r = 0.18 m on a frictionless table. The block is attached to a 1.5 kg mass, M, by a cord through a hole in the table. Find the speed with which m must move for M to stay at rest. Take gravitational acceleration g = 9.8 m/s^2.",
a:1.627,u:"m/s",
s:"The hanging mass M is in equilibrium, so the cord tension equals its weight:\nT = M*g.\n\nThat same tension is the centripetal force on the sliding block:\nT = m*v^2/r.\n\nSet them equal: M*g = m*v^2/r, so\nv = sqrt(M*g*r/m) = sqrt(1.5*9.8*0.18/1) = sqrt(2.646) = 1.627 m/s."},

{n:91,t:"circular",
q:"A block of mass m = 1.4 kg is moving with constant speed v = 2 m/s in a circle of radius r = 0.19 m on a frictionless table. The block is attached to a hanging mass M by a cord passing through a hole in the table. Find the mass M that stays at rest. Take the gravitational acceleration g = 9.8 m/s^2.",
a:3.00752,u:"kg",
s:"Same setup as before, now solved for M:\nM*g = m*v^2/r\n\nM = m*v^2/(r*g) = 1.4(4)/(0.19*9.8) = 5.6/1.862 = 3.0075 kg."},

{n:92,t:"circular",
q:"A ball suspended from a pivot on a string of length L = 88 cm revolves in a horizontal plane with constant speed v (a conical pendulum). The string maintains an angle of 14 degrees with respect to the vertical. Find v taking gravitational acceleration g = 9.8 m/s^2.",
a:0.721,u:"m/s",
s:"This is a conical pendulum. Resolve the tension:\nvertical:   T*cos(theta) = m*g\nhorizontal: T*sin(theta) = m*v^2/R, where R = L*sin(theta).\n\nDivide the second by the first:\ntan(theta) = v^2/(g*R) = v^2/(g*L*sin(theta)).\n\nSo v = sqrt(g*L*sin(theta)*tan(theta))\nv = sqrt(9.8 * 0.88 * sin(14) * tan(14))\nv = sqrt(8.624 * 0.241922 * 0.249328) = sqrt(0.52017) = 0.7212 m/s.\n\nThe mass cancels out completely."},

{n:93,t:"circular",
q:"A car of mass m = 1200 kg travels around a circular, banked road of radius R = 80 m. The road is inclined at an angle theta above the horizontal. The car travels at a constant speed of v = 20 m/s. Assume that friction between the tires and the road is negligible. Determine the required banking angle theta (in radians) so that the car can travel around the curve without relying on friction. The gravitational acceleration is g = 9.8 m/s^2.",
a:0.4717775,u:"rad",
s:"On a frictionless banked curve only the normal force N and gravity act.\nvertical:   N*cos(theta) = m*g\nhorizontal: N*sin(theta) = m*v^2/R\n\nDivide:\ntan(theta) = v^2/(R*g) = 400/(80*9.8) = 400/784 = 0.510204.\n\ntheta = arctan(0.510204) = 0.47178 rad (about 27.0 degrees).\n\nThe mass cancels - the ideal banking angle is the same for a truck and a motorcycle."},

{n:94,t:"friction",
q:"A block with mass m1 = 3.561 kg sits on a horizontal surface, connected by a massless string over a frictionless massless pulley to a hook where mass m2 can be increased smoothly. When m2 = 2.92 kg it begins to accelerate downwards at a rate of 1.645 m/s^2. Calculate the difference between static and kinetic coefficients of friction, mu_s - mu_k, between m1 and the surface. Take gravitational acceleration g = 9.8 m/s^2.",
a:0.305,u:"",
s:"Two separate pieces of information here.\n\n(1) STATIC: m2 was increased until motion just began, so at m2 = 2.92 kg the weight equals maximum static friction:\nm2*g = mu_s*m1*g, giving mu_s = m2/m1 = 2.92/3.561 = 0.81998.\n\n(2) KINETIC: once moving, for the system\na = (m2*g - mu_k*m1*g)/(m1 + m2)\n1.645 = (28.616 - mu_k*34.898)/6.481\n10.661 = 28.616 - mu_k*34.898\nmu_k = 17.955/34.898 = 0.51450.\n\nDifference: mu_s - mu_k = 0.81998 - 0.51450 = 0.305 (dimensionless)."},

{n:95,t:"friction",
q:"A block with mass m1 = 4 kg on a horizontal surface is connected by a massless string over a massless frictionless pulley to a hanging mass m2 = 2.8 kg. The coefficient of kinetic friction between m1 and the surface is 0.31. Calculate the magnitude of the acceleration of the blocks. The gravitational acceleration is g = 9.8 m/s^2.",
a:2.24824,u:"m/s^2",
s:"Treat the two blocks as one system: the driving force is m2's weight, the resisting force is friction on m1.\n\nNormal force on m1: N = m1*g = 39.2 N, so friction f = 0.31(39.2) = 12.152 N.\n\na = (m2*g - f)/(m1 + m2)\na = (2.8*9.8 - 12.152)/(4 + 2.8)\na = (27.44 - 12.152)/6.8 = 15.288/6.8 = 2.2482 m/s^2."},

{n:96,t:"friction",
q:"A block with mass m1 = 26.2 kg on a horizontal surface is connected over a massless frictionless pulley to a hanging block m2 = 4.3 kg. A force of 302.2 N acts on m1 at an angle of 30.9 degrees above the horizontal, pulling it away from the pulley. The coefficient of kinetic friction between m1 and the surface is 0.17. Determine the upward acceleration of m2. Take gravitational acceleration g = 9.8 m/s^2.",
a:6.55,u:"m/s^2",
s:"The applied force is tilted, so it changes the normal force too.\n\nNormal force on m1:\nN = m1*g - F*sin(theta) = 26.2(9.8) - 302.2*sin(30.9)\nN = 256.76 - 155.20 = 101.56 N.\n\nFriction: f = 0.17(101.56) = 17.27 N.\n\nFor the whole system (F pulls m1 forward, friction and m2's weight resist):\na = (F*cos(theta) - f - m2*g)/(m1 + m2)\na = (302.2*0.85805 - 17.27 - 42.14)/30.5\na = (259.30 - 17.27 - 42.14)/30.5 = 199.89/30.5 = 6.55 m/s^2."},

{n:97,t:"friction",
q:"A force of magnitude 23.2 N is applied in the horizontal direction to a block of mass 4.4 kg placed on the horizontal surface. Taking the coefficient of kinetic friction between the block and the surface equal 0.15, calculate the speed of the block 2.5 seconds after it started moving. Take gravitational acceleration g = 9.8 m/s^2.",
a:9.507,u:"m/s",
s:"Friction force: f = mu_k*m*g = 0.15(4.4)(9.8) = 6.468 N.\n\nNewton's second law:\na = (F - f)/m = (23.2 - 6.468)/4.4 = 16.732/4.4 = 3.8027 m/s^2.\n\nStarting from rest:\nv = a*t = 3.8027(2.5) = 9.507 m/s."},

{n:98,t:"friction",
q:"A force of magnitude 46.5 N is applied at an angle of 27 degrees above the horizontal to a block of mass 4.7 kg resting on a horizontal surface. Taking the coefficient of kinetic friction between the block and the surface equal to 0.1, calculate the speed of the block 2.8 s after it starts moving. Take the gravitational acceleration g = 9.8 m/s^2.",
a:23.1964,u:"m/s",
s:"The upward tilt of F lightens the block, reducing friction.\n\nN = m*g - F*sin(27) = 46.06 - 46.5(0.453990) = 46.06 - 21.11 = 24.95 N.\nf = 0.1(24.95) = 2.495 N.\n\na = (F*cos(27) - f)/m = (46.5*0.891007 - 2.495)/4.7\na = (41.432 - 2.495)/4.7 = 38.937/4.7 = 8.2845 m/s^2.\n\nv = a*t = 8.2845(2.8) = 23.196 m/s."},

{n:99,t:"friction",
q:"Two blocks with masses m1 = 20.6 kg and m2 = 61.2 kg are free to move. A horizontal force F presses m1 against the vertical face of m2, and m2 rests on a frictionless floor. The coefficient of static friction between the blocks is 0.36. Find the minimal force F required to hold m1 against m2 (so that m1 does not slide down).",
a:749.53631,u:"N",
s:"Careful: the normal force between the blocks is NOT equal to F, because m1 itself accelerates.\n\nBoth blocks accelerate together: a = F/(m1 + m2).\n\nFor m1 horizontally: F - N = m1*a, so\nN = F - m1*F/(m1+m2) = F*m2/(m1+m2).\n\nFor m1 vertically, friction must hold up its weight:\nmu_s*N >= m1*g\nmu_s*F*m2/(m1+m2) >= m1*g\n\nF >= m1*g*(m1+m2)/(mu_s*m2)\nF >= 20.6(9.8)(81.8)/(0.36*61.2)\nF >= 16513.8/22.032 = 749.54 N."},

{n:100,t:"friction",
q:"Two blocks have masses m1 = 21 kg and m2 = 59.5 kg. A horizontal force F = 770 N presses m1 against the vertical face of m2, and the coefficient of static friction between the blocks is large enough that m1 does not slip down. The surface beneath m2 is frictionless. Find the magnitude of the acceleration of the two blocks.",
a:9.56522,u:"m/s^2",
s:"Since m1 does not slip, the two blocks move as a single body of mass m1 + m2, and the only external horizontal force is F (the floor is frictionless).\n\na = F/(m1 + m2) = 770/(21 + 59.5) = 770/80.5 = 9.5652 m/s^2.\n\nThe friction between the blocks is internal and cancels out."},

{n:101,t:"newton2",
q:"A cord exerts a force F = 5 N at an angle 45 degrees above the horizontal to a block of mass 5 kg, pulling the block along a horizontal frictionless floor. What is the magnitude of the acceleration of the block?",
a:0.70710,u:"m/s^2",
s:"Only the horizontal component of the pull accelerates the block (the floor is frictionless and the vertical direction is in equilibrium).\n\nF_x = 5*cos(45) = 5(0.70711) = 3.5355 N.\n\na = F_x/m = 3.5355/5 = 0.70711 m/s^2."},

{n:102,t:"newton2",
q:"A cord exerts a force F = 12 N at an angle 34 degrees above the horizontal to a block of mass 5 kg, pulling the block along a horizontal frictionless floor. What is the magnitude of the normal force exerted on the mass by the floor?",
a:42.2897,u:"N",
s:"Vertical equilibrium: the upward pull component plus the normal force balance the weight.\n\nN + F*sin(34) = m*g\nN = 5(9.8) - 12*sin(34)\nN = 49 - 12(0.559193) = 49 - 6.710 = 42.29 N.\n\nThe upward tilt of the cord makes the block press less on the floor."},

{n:103,t:"newton2",
q:"A rod exerts a force F = 10.5 N at an angle 47 degrees BELOW the horizontal on a block of mass 5 kg, pushing the block along a horizontal frictionless floor. What is the magnitude of the normal force exerted on the block by the floor? The gravitational acceleration is g = 9.8 m/s^2.",
a:56.6792,u:"N",
s:"Pushing downward at an angle presses the block INTO the floor, so the normal force exceeds the weight.\n\nN = m*g + F*sin(47)\nN = 49 + 10.5(0.731354)\nN = 49 + 7.679 = 56.68 N."},

{n:104,t:"newton2",
q:"The weight of an astronaut plus his space suit on the Moon is 220 N. The acceleration due to gravity on the surface of the Moon is 1.625 m/s^2. How much does the suited astronaut weigh on Earth? The gravitational acceleration on Earth is g = 9.8 m/s^2.",
a:1326.76923,u:"N",
s:"Mass is the same everywhere; weight is not.\n\nm = W_moon/g_moon = 220/1.625 = 135.385 kg.\n\nW_earth = m*g_earth = 135.385(9.8) = 1326.77 N.\n\nShortcut: W_earth = W_moon*(g_earth/g_moon) = 220(9.8/1.625)."},

{n:105,t:"newton2",
q:"The weight of an astronaut plus his space suit on the Moon is 198 N. The acceleration due to gravity on the surface of the Moon is 1.62 m/s^2. What is the mass of the suited astronaut on the Earth, where the gravitational acceleration is g = 9.8 m/s^2?",
a:122.222,u:"kg",
s:"Mass does not change with location, so compute it from the Moon data and stop there:\n\nm = W_moon/g_moon = 198/1.62 = 122.22 kg.\n\nThe Earth value of g is a distractor."},

{n:106,t:"newton2",
q:"The driver in the car with a mass of 1300 kg applies the brakes when the car is moving at 90 km/h, and the car comes to rest after traveling 65 m. What is the magnitude of the net force on the car causing its deceleration of the motion?",
a:6250,u:"N",
s:"Convert: v = 90 km/h = 25 m/s.\n\nDeceleration from v^2 = v_0^2 + 2*a*d with v = 0:\na = v_0^2/(2d) = 625/130 = 4.8077 m/s^2.\n\nF = m*a = 1300(4.8077) = 6250 N."},

{n:107,t:"newton2",
q:"The driver of a car of mass 1440 kg applies the brakes when the car is moving at 73 km/h, and the car comes to rest after traveling 66 m. What is the coefficient of kinetic friction between the tires and the road? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.317864,u:"",
s:"Convert: v = 73/3.6 = 20.2778 m/s.\n\na = v^2/(2d) = 411.19/132 = 3.1151 m/s^2.\n\nThe only horizontal force is friction, f = mu_k*m*g = m*a, so the mass cancels:\nmu_k = a/g = 3.1151/9.8 = 0.31786 (dimensionless)."},

{n:108,t:"newton2",
q:"A force F lifts vertically a chain consisting of five links, each of mass 0.6 kg (link 1 at the bottom, link 5 at the top). The chain is lifted with a constant acceleration of magnitude a = 2.2 m/s^2. What is the magnitude of the force that link 3 exerts on link 2? The gravitational acceleration is g = 9.8 m/s^2.",
a:14.4,u:"N",
s:"Cut the chain between links 2 and 3. The force at that cut must support everything BELOW it - links 1 and 2 - and accelerate them.\n\nMass below the cut: 2(0.6) = 1.2 kg.\n\nF = m(g + a) = 1.2(9.8 + 2.2) = 1.2(12) = 14.4 N."},

{n:109,t:"newton2",
q:"A force F lifts vertically a chain consisting of five links, each of mass 0.1 kg. The chain is lifted with a constant acceleration of magnitude a = 2.1 m/s^2. Find the magnitude of the force |F| that must be exerted on the top link to achieve this acceleration? The gravitational acceleration is g = 9.8 m/s^2.",
a:5.95,u:"N",
s:"The applied force acts on the whole chain.\n\nTotal mass: 5(0.1) = 0.5 kg.\n\nF = m(g + a) = 0.5(9.8 + 2.1) = 0.5(11.9) = 5.95 N."},

{n:110,t:"newton2",
q:"A force F lifts vertically a chain consisting of five links, each of mass 0.55 kg, numbered link 1 at the bottom and link 5 at the top. The chain is lifted with a constant acceleration of magnitude a = 2.3 m/s^2. What is the magnitude of the force that link 4 exerts on link 3? The gravitational acceleration is g = 9.8 m/s^2.",
a:19.965,u:"N",
s:"Cut between links 3 and 4: the force there carries links 1, 2 and 3.\n\nMass below the cut: 3(0.55) = 1.65 kg.\n\nF = m(g + a) = 1.65(9.8 + 2.3) = 1.65(12.1) = 19.965 N."},

{n:111,t:"newton2",
q:"A force F lifts vertically a chain consisting of five links, each of mass 0.2 kg, numbered link 1 at the bottom and link 5 at the top. The chain is lifted with a constant acceleration of magnitude a = 2.7 m/s^2. What is the magnitude of the force that link 5 exerts on link 4? The gravitational acceleration is g = 9.8 m/s^2.",
a:10,u:"N",
s:"Cut between links 4 and 5: that force carries links 1 through 4.\n\nMass below the cut: 4(0.2) = 0.8 kg.\n\nF = m(g + a) = 0.8(9.8 + 2.7) = 0.8(12.5) = 10 N."},

{n:112,t:"newton2",
q:"There is a banana at the top of a 9.12 m long rope. A monkey of mass m = 10.9 kg starts to climb up to reach a banana. The rope will snap if the tension exceeds 134.07 N. Calculate the least amount of time the monkey could take to reach the banana without breaking the rope. The gravitational acceleration is g = 9.8 m/s^2.",
a:2.70111,u:"s",
s:"Maximum tension gives maximum upward acceleration:\nT - m*g = m*a\na = (134.07 - 10.9*9.8)/10.9 = (134.07 - 106.82)/10.9 = 27.25/10.9 = 2.5 m/s^2.\n\nFastest climb from rest with that acceleration:\nd = (1/2)a*t^2, so t = sqrt(2d/a) = sqrt(2*9.12/2.5) = sqrt(7.296) = 2.7011 s."},

{n:113,t:"newton2",
q:"There is a banana at the top of a 10 m long rope. A monkey of mass m = 10.4 kg starts from rest at the bottom and climbs to the banana in 2.7 s with constant acceleration. What is the tension in the rope? The gravitational acceleration is g = 9.8 m/s^2.",
a:130.452,u:"N",
s:"Acceleration from the kinematics:\na = 2d/t^2 = 2(10)/(2.7)^2 = 20/7.29 = 2.7435 m/s^2.\n\nTension from Newton's second law:\nT = m(g + a) = 10.4(9.8 + 2.7435) = 10.4(12.5435) = 130.45 N."},

{n:114,t:"newton2",
q:"A particle of mass 2 kg is acted on by a single force F = 14i N. If the particle starts at rest, how far does it travel in the first 3 s?",
a:31.5,u:"m",
s:"a = F/m = 14/2 = 7 m/s^2.\n\nFrom rest:\nd = (1/2)a*t^2 = 0.5(7)(9) = 31.5 m."},

{n:115,t:"newton2",
q:"A particle of mass 2 kg is acted on by a single force F = 14i N. At t = 0 the particle has velocity v0 = -6.5i m/s. What is the magnitude of its displacement during the first 6 s?",
a:87,u:"m",
s:"a = F/m = 7 m/s^2, in the +x direction while the initial velocity is in -x.\n\nx = v_0*t + (1/2)a*t^2\nx = -6.5(6) + 0.5(7)(36)\nx = -39 + 126 = 87 m.\n\nThe particle first moves backwards, stops, and ends up 87 m in the +x direction."},

{n:116,t:"newton2",
q:"An elevator accelerating upward carries a man standing on a weighing scale indicating F1 = 678.9 N. The scale reads F2 = 767.3 N when the man picks up a 8.6 kg box. Find the man's mass.",
a:66.0468,u:"kg",
s:"In an accelerating elevator the scale reads m(g + a). Both readings share the same unknown (g + a).\n\nThe increase is entirely due to the box:\nF2 - F1 = m_box(g + a)\n767.3 - 678.9 = 8.6(g + a)\n88.4 = 8.6(g + a), so g + a = 10.2791 m/s^2.\n\nNow the man:\nm = F1/(g + a) = 678.9/10.2791 = 66.047 kg.\n\n(This also tells you a = 0.479 m/s^2 upward.)"},

{n:117,t:"newton2",
q:"A man of mass 73.5 kg stands on a weighing scale in an elevator that is accelerating upward. The scale reads 925 N. Find the magnitude of the acceleration of the elevator. The gravitational acceleration is g = 9.8 m/s^2.",
a:2.78503,u:"m/s^2",
s:"The scale reading is the normal force:\nN - m*g = m*a\n\na = N/m - g = 925/73.5 - 9.8 = 12.5850 - 9.8 = 2.785 m/s^2, directed upward."},

{n:118,t:"newton2",
q:"A particle moves with constant velocity v = 2i - 7j m/s under the combined action of three forces. Two of the forces acting on this particle are F1 = 6i + 7j - 10k N and F2 = -9i - 9j - 3k N. What is the third vector magnitude?",
a:13.491,u:"N",
s:"Constant velocity means zero acceleration, so the net force is zero:\nF1 + F2 + F3 = 0, hence F3 = -(F1 + F2).\n\nF1 + F2 = (6-9, 7-9, -10-3) = (-3, -2, -13).\nF3 = (3, 2, 13).\n\n|F3| = sqrt(9 + 4 + 169) = sqrt(182) = 13.491 N.\n\nThe given velocity is only there to tell you the acceleration is zero."},

{n:119,t:"newton2",
q:"The friction is very small for ice skating and can be neglected. Find the acceleration magnitude of an ice dancer A of mass 53.3 kg pushing his partner B of mass 66.4 kg with the force 58.5 N.",
a:1.09756,u:"m/s^2",
s:"By Newton's third law, when A pushes B with 58.5 N, B pushes back on A with 58.5 N.\n\nThat reaction force is what accelerates A:\na_A = F/m_A = 58.5/53.3 = 1.0976 m/s^2.\n\nUse A's own mass here, not B's."},

{n:120,t:"newton2",
q:"The friction is very small for ice skating and can be neglected. Find the magnitude of the acceleration of ice dancer B of mass 62.3 kg while her partner A of mass 54.3 kg pushes her with a force of 61 N.",
a:0.979133,u:"m/s^2",
s:"The 61 N force acts directly on B, so use B's mass:\n\na_B = F/m_B = 61/62.3 = 0.97913 m/s^2.\n\nA's mass is not needed."},

{n:121,t:"applynewt",
q:"Two ropes are connected to a steel cable that supports a hanging weight. The ropes make angles of 60 degrees and 40 degrees with the ceiling. If the maximum tension either rope can sustain without breaking is 4200 N, determine the maximum value of the hanging weight that those ropes can safely support. Ignore the weight of the ropes and the steel cable.",
a:5399.518,u:"N",
s:"At the knot, write horizontal and vertical equilibrium (T1 at 60 degrees, T2 at 40 degrees):\n\nhorizontal: T1*cos(60) = T2*cos(40)\nvertical:   T1*sin(60) + T2*sin(40) = W\n\nFrom the first equation: T2 = T1*cos(60)/cos(40) = 0.652704*T1.\nSince T2 is smaller, T1 is the rope that breaks first, so set T1 = 4200 N.\n\nThen T2 = 0.652704(4200) = 2741.4 N.\n\nW = 4200*sin(60) + 2741.4*sin(40)\nW = 3637.3 + 1762.2 = 5399.5 N.\n\nKey step: identify WHICH rope carries more tension before setting it to the maximum."},

{n:122,t:"applynewt",
q:"Two ropes are connected to a steel cable that supports a hanging weight of 3850 N. The ropes make angles of 60 degrees and 40 degrees with the ceiling. Determine the tension in the rope that makes the 40 degree angle with the ceiling. Ignore the weight of the ropes and the steel cable.",
a:1954.7,u:"N",
s:"Horizontal equilibrium: T1*cos(60) = T2*cos(40), so T2 = 0.652704*T1.\n\nVertical equilibrium:\nT1*sin(60) + T2*sin(40) = 3850\nT1(0.866025) + 0.652704*T1(0.642788) = 3850\nT1(0.866025 + 0.419543) = 3850\nT1 = 3850/1.285568 = 2994.8 N.\n\nThe 40-degree rope:\nT2 = 0.652704(2994.8) = 1954.7 N."},

{n:123,t:"applynewt",
q:"A worker lifts a weight of 440 N by pulling down on a rope that runs through a movable pulley attached to the load. Find the magnitude of the force F if the weight is lifted at a constant speed. Assume that the rope, pulleys, and chains all have negligible weights.",
a:220,u:"N",
s:"With a movable pulley, two rope segments support the load, and the tension is the same throughout an ideal rope.\n\nConstant speed means equilibrium:\n2T = W\n\nT = F = 440/2 = 220 N.\n\nThe pulley halves the required force (at the cost of pulling twice the length of rope)."},

{n:124,t:"applynewt",
q:"A worker lifts a weight of 380 N using a movable-pulley arrangement, by pulling down on a rope with a force F. Find the magnitude of the force F if the weight is lifted with a constant upward acceleration of 2.1 m/s^2. Assume that the rope, pulleys, and chains all have negligible weight. The gravitational acceleration is g = 9.8 m/s^2.",
a:230.714,u:"N",
s:"Mass of the load: m = W/g = 380/9.8 = 38.7755 kg.\n\nNewton's second law for the load, with two supporting rope segments:\n2F - W = m*a\n2F = 380 + 38.7755(2.1) = 380 + 81.43 = 461.43\n\nF = 230.71 N.\n\nCompare with 190 N for constant speed - the acceleration costs an extra 40 N."},

{n:125,t:"applynewt",
q:"A clothesline has a mass 600 g, and each end makes an angle 16 degrees with horizontal. What is the tension at each end of the clothesline? The gravitational acceleration is g = 9.8 m/s^2.",
a:10.666,u:"N",
s:"The two end tensions each have an upward component T*sin(16), and together they hold the line's weight:\n\n2*T*sin(16) = m*g\n2*T(0.275637) = 0.6(9.8) = 5.88\n\nT = 5.88/0.551274 = 10.67 N.\n\nNotice how large the tension is compared with the 5.88 N weight - a nearly horizontal rope needs a big tension. As the angle goes to zero the tension goes to infinity."},

{n:126,t:"applynewt",
q:"A clothesline has a mass of 840 g, and each end makes an angle of 73 degrees with the vertical. What is the tension at each end of the clothesline? The gravitational acceleration is g = 9.8 m/s^2.",
a:14.078,u:"N",
s:"An angle of 73 degrees from the VERTICAL is 17 degrees from the horizontal. The vertical component of each tension is therefore T*sin(17) (equivalently T*cos(73)).\n\n2*T*sin(17) = m*g\n2*T(0.292372) = 0.84(9.8) = 8.232\n\nT = 8.232/0.584744 = 14.078 N.\n\nAlways check whether the angle is measured from the vertical or the horizontal."},

{n:127,t:"applynewt",
q:"A block with mass m1 = 280 kg is placed on an inclined plane with slope angle 39 degrees and is connected to a second hanging block with mass m2 by a cord passing over a small, frictionless pulley. The coefficient of kinetic friction is 0.09. Find the mass m2 for which block m1 moves UP the plane at constant speed once it is set in motion.",
a:195.7938,u:"kg",
s:"Moving up the plane at constant speed means zero acceleration, and friction acts DOWN the plane (opposing the upward motion).\n\nFor m2: T = m2*g.\nFor m1 along the incline: T = m1*g*sin(a) + mu_k*m1*g*cos(a).\n\nSo m2 = m1[sin(a) + mu_k*cos(a)]\nm2 = 280[sin(39) + 0.09*cos(39)]\nm2 = 280[0.629320 + 0.09(0.777146)]\nm2 = 280[0.629320 + 0.069943] = 280(0.699263) = 195.79 kg."},

{n:128,t:"applynewt",
q:"A block with mass m1 = 150 kg is placed on an inclined plane with slope angle 29 degrees and is connected to a second hanging block with mass m2 by a cord passing over a small, frictionless pulley. The coefficient of kinetic friction is 0.076. Find the mass m2 for which block m1 moves DOWN the plane at constant speed once it is set in motion.",
a:62.750,u:"kg",
s:"Now m1 slides down, so friction acts UP the plane - the sign of the friction term flips.\n\nm2*g = m1*g*sin(a) - mu_k*m1*g*cos(a)\n\nm2 = m1[sin(a) - mu_k*cos(a)]\nm2 = 150[sin(29) - 0.076*cos(29)]\nm2 = 150[0.484810 - 0.076(0.874620)]\nm2 = 150[0.484810 - 0.066471] = 150(0.418339) = 62.75 kg.\n\nThe two problems differ only in the sign in front of mu_k."},

{n:129,t:"applynewt",
q:"A block with mass m1 = 185 kg is placed on an inclined plane with slope angle 33 degrees and is connected to a second hanging block with mass m2 by a cord passing over a small, frictionless pulley. The coefficient of kinetic friction between m1 and the incline is 0.12. Find the mass m2 for which m1 moves UP the plane with a constant acceleration of 1.3 m/s^2. The gravitational acceleration is g = 9.8 m/s^2.",
a:165.928,u:"kg",
s:"Write Newton's second law for each block (m1 up the incline, m2 down).\n\nm2:  m2*g - T = m2*a\nm1:  T - m1*g*sin(a) - mu_k*m1*g*cos(a) = m1*a\n\nAdd them to eliminate T:\nm2*(g - a) = m1*[a + g*sin(33) + mu_k*g*cos(33)]\n\nRight side: 185[1.3 + 9.8(0.544639) + 0.12(9.8)(0.838671)]\n= 185[1.3 + 5.33746 + 0.98628] = 185(7.62374) = 1410.39.\n\nm2 = 1410.39/(9.8 - 1.3) = 1410.39/8.5 = 165.93 kg."},

{n:130,t:"applynewt",
q:"A block with mass m1 = 225 kg is placed on an inclined plane with slope angle 42 degrees and is connected to a second hanging block by a cord passing over a small, frictionless pulley. The coefficient of kinetic friction between m1 and the incline is 0.07. Find the tension in the cord for which m1 moves up the plane at constant speed once it is set in motion. The gravitational acceleration is g = 9.8 m/s^2.",
a:1590.14,u:"N",
s:"At constant speed the tension simply balances gravity along the incline plus friction:\n\nT = m1*g*[sin(a) + mu_k*cos(a)]\nT = 225(9.8)[sin(42) + 0.07*cos(42)]\nT = 2205[0.669131 + 0.07(0.743145)]\nT = 2205[0.669131 + 0.052020] = 2205(0.721151) = 1590.1 N.\n\n(Equivalently, the hanging mass is 162.26 kg and T = m2*g.)"},

{n:131,t:"applynewt",
q:"Block A weighs 72 N and rests on a horizontal surface. A cord attached to it runs at an angle 52 degrees above the horizontal to a knot, from which a weight w hangs. The coefficient of static friction between block A and the surface is 0.29. The weight w is 13 N and the system is in equilibrium. Find the friction force exerted on block A.",
a:10.1567,u:"N",
s:"Work at the knot first. The vertical component of the diagonal cord's tension holds up w:\n\nT*sin(52) = 13, so T = 13/0.788011 = 16.4972 N.\n\nThe horizontal component pulls block A sideways:\nT*cos(52) = 16.4972(0.615661) = 10.157 N.\n\nBlock A is in equilibrium, so friction must exactly balance that pull:\nf = 10.16 N.\n\nThe coefficient 0.29 is only there to let you check that it doesn't slip: f_max = 0.29(72) = 20.9 N, well above 10.16 N."},

{n:132,t:"applynewt",
q:"Block A weighs 74 N and rests on a horizontal surface. A cord attached to it runs at 45 degrees above the horizontal to a knot from which a weight w hangs. The coefficient of static friction between the block and the surface is 0.24. Find the maximum weight w for which the system will remain in equilibrium.",
a:17.76,u:"N",
s:"At the point of slipping, friction is at its maximum:\nf_max = mu_s*N = 0.24(74) = 17.76 N.\n\nAt the knot, the horizontal and vertical components of the cord tension give:\nT*cos(45) = f_max  and  T*sin(45) = w.\n\nDividing: w/f_max = tan(45) = 1, so\n\nw = f_max = 17.76 N.\n\nWith a 45-degree cord, the maximum hanging weight simply equals the maximum friction force."},

{n:133,t:"applynewt",
q:"Block A weighs 62 N and rests on a horizontal surface. A cord attached to it runs at 58 degrees above the horizontal to a knot from which a weight w hangs. The weight w is 17.5 N and the system is in equilibrium. What is the minimum coefficient of static friction between block A and the surface on which it rests?",
a:0.176374,u:"",
s:"At the knot: T*sin(58) = 17.5 and the horizontal pull on the block is T*cos(58).\n\nHorizontal pull = 17.5/tan(58) = 17.5/1.600335 = 10.935 N.\n\nThat pull must be matched by friction, so the minimum coefficient satisfies\nmu_s*N = 10.935, with N = 62 N:\n\nmu_s = 10.935/62 = 0.17637 (dimensionless)."},

{n:134,t:"applynewt",
q:"Block A weighs 1.3 N and rests on top of block B, which weighs 3.1 N and rests on the floor. The coefficient of kinetic friction between block B and the floor is 0.17, and the coefficient of static friction between A and B is 0.17. Find the magnitude of the horizontal force F necessary to drag block B to the left at constant speed if A rests on B and moves with it.",
a:0.748,u:"N",
s:"A and B move together as one object, so the friction between them is internal and does no net work on the pair.\n\nThe only external friction is between B and the floor. The normal force from the floor supports BOTH blocks:\nN = 1.3 + 3.1 = 4.4 N.\n\nAt constant speed:\nF = mu_k*N = 0.17(4.4) = 0.748 N."},

{n:135,t:"applynewt",
q:"Block A weighs 1.1 N and rests on top of block B, which weighs 3.3 N and rests on the floor. Block A is tied to the wall by a horizontal cord. The coefficient of kinetic friction between all surfaces is 0.24. Find the magnitude of the horizontal force F necessary to drag block B to the left at constant speed while A is held at rest.",
a:1.32,u:"N",
s:"Now B slides under A, so there are TWO sliding surfaces.\n\n(1) Top surface (A on B): normal force = weight of A = 1.1 N.\nf_1 = 0.24(1.1) = 0.264 N.\n\n(2) Floor surface: normal force = 1.1 + 3.3 = 4.4 N.\nf_2 = 0.24(4.4) = 1.056 N.\n\nF = f_1 + f_2 = 0.264 + 1.056 = 1.32 N.\n\nCompare with the previous problem: holding A still nearly doubles the force needed."},

{n:136,t:"applynewt",
q:"Block A weighs 1.15 N and block B weighs 3.15 N. The coefficient of kinetic friction between block B and the floor is 0.17. The cord connecting block A to the wall has been cut, so block A rests freely on top of B and moves together with it. Find the magnitude of the horizontal force F necessary to drag block B to the left at constant speed.",
a:0.731,u:"N",
s:"With the cord cut, A rides along on B and there is no sliding between them, so only the floor friction matters.\n\nNormal force on the floor = combined weight = 1.15 + 3.15 = 4.30 N.\n\nF = mu_k*N = 0.17(4.30) = 0.731 N."},

{n:137,t:"applynewt",
q:"A window washer pushes his scrub brush up a vertical window at constant speed by applying a force F at an angle 58.8 degrees above the horizontal. The brush weighs 14 N and the coefficient of kinetic friction is 0.17. Calculate the magnitude of the force F.",
a:18.24580,u:"N",
s:"The window is VERTICAL, so the horizontal component of F presses the brush against the glass and sets the normal force:\nN = F*cos(58.8).\n\nFriction opposes the upward motion, so it acts downward:\nf = mu_k*N = 0.17*F*cos(58.8).\n\nVertical equilibrium (constant speed):\nF*sin(58.8) = W + mu_k*F*cos(58.8)\nF[sin(58.8) - 0.17*cos(58.8)] = 14\nF[0.855364 - 0.17(0.518027)] = 14\nF[0.855364 - 0.088065] = 14\nF = 14/0.767299 = 18.246 N."},

{n:138,t:"applynewt",
q:"A window washer pushes his scrub brush up a vertical window at constant speed by applying a force F at an angle 54.8 degrees above the horizontal. The brush weighs 9 N and the coefficient of kinetic friction is 0.14. Calculate the normal force exerted by the window on the brush.",
a:7.0445,u:"N",
s:"First find F from vertical equilibrium:\nF[sin(54.8) - 0.14*cos(54.8)] = 9\nF[0.817045 - 0.14(0.576580)] = 9\nF[0.817045 - 0.080721] = 9\nF = 9/0.736324 = 12.223 N.\n\nThen the normal force is the horizontal component:\nN = F*cos(54.8) = 12.223(0.576580) = 7.047 N."},

{n:139,t:"applynewt",
q:"A window washer pushes his scrub brush up a vertical window with a constant upward acceleration of 1 m/s^2 by applying a force F at an angle 53.8 degrees above the horizontal. The brush weighs 10.5 N and the coefficient of kinetic friction is 0.17. Calculate the magnitude of the force F. The gravitational acceleration is g = 9.8 m/s^2.",
a:16.3772,u:"N",
s:"Mass of the brush: m = W/g = 10.5/9.8 = 1.07143 kg.\n\nVertical Newton's second law (upward positive), with friction downward:\nF*sin(53.8) - W - mu_k*F*cos(53.8) = m*a\nF[sin(53.8) - 0.17*cos(53.8)] = W + m*a\nF[0.806864 - 0.17(0.590724)] = 10.5 + 1.07143(1)\nF[0.806864 - 0.100423] = 11.5714\nF = 11.5714/0.706441 = 16.377 N."},

{n:140,t:"applynewt",
q:"You are standing on a bathroom scale in an elevator in a tall building. Your mass is 61 kg. The elevator starts from rest and travels upwards with a speed that varies with time according to v(t) = (2 m/s^2)t + (0.16 m/s^3)t^2. When t = 4 s, what is the reading of the bathroom scale? The gravitational acceleration is g = 9.8 m/s^2.",
a:797.88,u:"N",
s:"Acceleration is the time derivative of velocity:\na(t) = dv/dt = 2 + 0.32t.\n\nAt t = 4 s: a = 2 + 0.32(4) = 2 + 1.28 = 3.28 m/s^2 (upward).\n\nScale reading (the normal force):\nN = m(g + a) = 61(9.8 + 3.28) = 61(13.08) = 797.88 N."},

{n:141,t:"applynewt",
q:"A hammer is hanging by a light rope from the ceiling of a bus, and the ceiling is parallel to the roadway. The bus travels in a straight line on a horizontal street. You observe that the hammer hangs at rest with respect to the bus when the angle between the rope and the ceiling of the bus is 69 degrees. What is the acceleration of the bus? The gravitational acceleration is g = 9.8 m/s^2.",
a:3.76187,u:"m/s^2",
s:"The angle with the CEILING is 69 degrees, so the angle with the VERTICAL is 90 - 69 = 21 degrees.\n\nFor the hanging hammer:\nhorizontal: T*sin(21) = m*a\nvertical:   T*cos(21) = m*g\n\nDivide:\na = g*tan(21) = 9.8(0.383864) = 3.7619 m/s^2.\n\nThe mass cancels - a hanging plumb bob is an accelerometer."},

{n:142,t:"applynewt",
q:"A hammer is hanging by a light rope from the ceiling of a bus travelling in a straight line on a horizontal street. You observe that the hammer hangs at rest with respect to the bus when the angle between the rope and the vertical direction is 30.5 degrees. What is the acceleration of the bus? The gravitational acceleration is g = 9.8 m/s^2.",
a:5.77264,u:"m/s^2",
s:"Here the angle is already measured from the vertical, so use it directly:\n\na = g*tan(30.5) = 9.8(0.589045) = 5.7726 m/s^2.\n\nCompare with the previous problem, where the angle had to be converted first."},

{n:143,t:"applynewt",
q:"A small remote-control car with mass 2 kg moves at a constant speed of v = 11.4 m/s in a vertical circle inside a hollow metal cylinder that has a radius of 4 m. What is the magnitude of the normal force exerted on the car by the walls of the cylinder at point A, the BOTTOM of the circle? The gravitational acceleration is g = 9.8 m/s^2.",
a:84.58,u:"N",
s:"At the bottom of the circle, the centre is directly above, so the net upward force is centripetal.\n\nN - m*g = m*v^2/r\n\nm*v^2/r = 2(11.4)^2/4 = 2(129.96)/4 = 64.98 N.\nm*g = 2(9.8) = 19.6 N.\n\nN = 64.98 + 19.6 = 84.58 N.\n\nThe car feels heaviest at the bottom."},

{n:144,t:"applynewt",
q:"A small remote-control car with mass 2.2 kg moves at a constant speed of v = 12.7 m/s in a vertical circle inside a hollow metal cylinder that has a radius of 4 m. What is the magnitude of the normal force exerted on the car by the walls of the cylinder at point B, the TOP of the circle? The gravitational acceleration is g = 9.8 m/s^2.",
a:67.1495,u:"N",
s:"At the top of the circle the centre is directly below, so BOTH the normal force and gravity point toward the centre.\n\nN + m*g = m*v^2/r\n\nm*v^2/r = 2.2(12.7)^2/4 = 2.2(161.29)/4 = 88.71 N.\nm*g = 2.2(9.8) = 21.56 N.\n\nN = 88.71 - 21.56 = 67.15 N.\n\nNote the sign change compared with the bottom of the loop."},

{n:145,t:"applynewt",
q:"A small remote-control car with mass 1.9 kg moves in a vertical circle inside a hollow metal cylinder that has a radius of 4.3 m. What is the minimum speed the car must have at point B, the TOP of the circle, in order to maintain contact with the wall of the cylinder? The gravitational acceleration is g = 9.8 m/s^2.",
a:6.49153,u:"m/s",
s:"Losing contact means N = 0, so gravity alone must provide the centripetal force at the top:\n\nm*g = m*v^2/r\n\nv = sqrt(g*r) = sqrt(9.8*4.3) = sqrt(42.14) = 6.4915 m/s.\n\nThe mass drops out - the answer is the same for any car."},

{n:146,t:"applynewt",
q:"Find the terminal velocity of a 72-kg skydiver falling in a spread-eagle position. Assume the density of air is rho = 1.21 kg/m^3, a skydiver descending in a spread-eagle position has a cross-sectional area of A = 0.7 m^2 and a drag coefficient of C = 1. The gravitational acceleration is g = 9.8 m/s^2.",
a:40.818,u:"m/s",
s:"At terminal velocity the drag force equals the weight and the acceleration is zero:\n\n(1/2)*rho*C*A*v^2 = m*g\n\nv = sqrt(2*m*g/(rho*C*A))\nv = sqrt(2*72*9.8/(1.21*1*0.7))\nv = sqrt(1411.2/0.847) = sqrt(1666.1) = 40.818 m/s (about 147 km/h)."},

{n:147,t:"applynewt",
q:"A 73-kg skydiver falling in a spread-eagle position has a drag coefficient of C = 0.8 and reaches a terminal velocity of 45.5 m/s. The density of air is rho = 1.17 kg/m^3. What is the skydiver's cross-sectional area? The gravitational acceleration is g = 9.8 m/s^2.",
a:0.738381,u:"m^2",
s:"Rearrange the terminal-velocity condition for the area:\n(1/2)*rho*C*A*v^2 = m*g\n\nA = 2*m*g/(rho*C*v^2)\nA = 2(73)(9.8)/(1.17*0.8*45.5^2)\nA = 1430.8/(1.17*0.8*2070.25)\nA = 1430.8/1937.75 = 0.73838 m^2."},

{n:148,t:"applynewt",
q:"A 74-kg person rides in a 33-kg cart moving at 11 m/s at the top of a hill that is in the shape of an arc of a circle with a radius of 39 m. What is the apparent weight of the person as the cart passes over the top of the hill? The gravitational acceleration is g = 9.8 m/s^2.",
a:495.61,u:"N",
s:"Apparent weight is the normal force on the PERSON, so use the person's mass only.\n\nAt the top of a hill the centre of the circle is below, so\nm*g - N = m*v^2/r\n\nN = m(g - v^2/r) = 74(9.8 - 121/39)\nN = 74(9.8 - 3.10256) = 74(6.69744) = 495.61 N.\n\nThe cart's 33 kg is a distractor. The person feels lighter than their true weight of 725 N."},

{n:149,t:"applynewt",
q:"A 74-kg person rides in a 23-kg cart moving at 12 m/s at the top of a hill that is in the shape of an arc of a circle with a radius of 44 m. Determine the maximum speed that the cart may travel at the top of the hill without losing contact with the surface. The gravitational acceleration is g = 9.8 m/s^2.",
a:20.765,u:"m/s",
s:"Contact is lost when the normal force reaches zero, so gravity alone supplies the centripetal force:\n\nm*g = m*v^2/r\n\nv = sqrt(g*r) = sqrt(9.8*44) = sqrt(431.2) = 20.765 m/s.\n\nThe masses and the current 12 m/s are not needed."},

{n:150,t:"applynewt",
q:"A 82-kg person rides in a 37-kg cart moving at 12 m/s at the bottom of a valley that is in the shape of an arc of a circle with a radius of 42 m. What is the apparent weight of the person as the cart passes through the lowest point of the valley? The gravitational acceleration is g = 9.8 m/s^2.",
a:1084.74,u:"N",
s:"At the bottom of a valley the centre of the circle is ABOVE, so the net force points upward:\n\nN - m*g = m*v^2/r\n\nN = m(g + v^2/r) = 82(9.8 + 144/42)\nN = 82(9.8 + 3.428571) = 82(13.228571) = 1084.7 N.\n\nThe person feels heavier than their true weight of 803.6 N - the opposite of the hilltop case."}
];

if (typeof module !== "undefined") { module.exports = { PROBLEMS: PROBLEMS, TOPICS: TOPICS }; }
