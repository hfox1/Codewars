Measurement made in moment K is recorded in array A as A[K]

Count all time periods when particle has constant velocity
i.e. the difference between two consecutive measurements is 0 - n.b. that there are 3 invovled Ks in that calc

k3 - k2 = k2 - k1

Find all periods of time
A[P], A[P+1], ..., A[Q]
(of length at least 3) during which the particle v is constant

Note that some periods of time may be contained in others, and still count

K 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

A[K] = [1, 3, 5, 7, 9, 7, 7, 7, 7, 3, -1, -5, -9, 0, 1, 1, 1, 2, 5, 7]

solution[A] = should equal:

[[0, 1, 2, 3, 4], [0, 1, 2], [1, 2, 3], [2, 3, 4], [0, 1, 2, 3], [1, 2, 3, 4],
[5, 6, 7, 8], [6, 7, 8], [5, 6, 7], 
[8, 9, 10, 11, 12], [8, 9, 10], [9, 10, 11], [10, 11, 12], [8, 9, 10, 11], [9, 10, 11, 12],
[14, 15, 16]]

where one period as defined wrongly in the question as:
[ A[P], A[P+1], A[P+2] ]
is actually:
[ P, P+1, P+2 ]
