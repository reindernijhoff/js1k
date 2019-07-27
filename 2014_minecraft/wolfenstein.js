//
// Code by Reinder Nijhoff for js1k
// 2014
// compressed using Regpack v3.0.2
//
// Twitter: @reindernijhoff
// Website: https://reindernijhoff.net
//

e = a.width, t = a.height, n = (k = c.createImageData(e, t)).data, r = [], i = [], A = [], K = [36, 36.5], u = L = 1, 

B = function(e, t, n) {
    return (t >> 16) * n 
        + (e >> 16) * (1 - n) << 16 | (t & 255 * 256) * n 
        + (e & 255 * 256) * (1 - n) & 255 * 256 | (t & 255) * n 
        + (e & 255) * (1 - n)
}, 
I = onkeydown = function(e, t, n) {
    return A[e.which] = 1, 1 > e ? e > 0 ? e : 0 : 1
}, 
D = onkeyup = function(e, t, n) {
    return A[e.which] = 0, I(n - e + 1) * I(e - t + 1)
}, 
E = function(e, t, n) {
    return D(e[0], t[0], n[0]) * D(e[1], t[1], n[1])
}, 
F = function(e, t, n) {
    return Math.sqrt(e * e + t * t)
}, 
G = function(e, t, n) {
    return I(4 * (n - F(e[0] - t[0], e[1] - t[1])))
}, 
J = function(e, t, n) {
    return I(1 - 1.5 * Math.abs(n - F(e[0] - t[0], e[1] - t[1])))
}, 
M = function(e, t, n) {
    return B(e, B(0, e, 2 * I(.5 + .5 * n[5] * (n[6] * (I((t[0] - n[0]) / n[4]) - I((n[2] - t[0]) / n[4])) - n[6] * (I((t[1] - n[1]) / n[4]) - I((n[3] - t[1]) / n[4]))))), E(t, n, [n[2], n[3]]))
}, 
q = function(e, t, n) {
    return B(e, B(0, e, 1 + .2 * (t[0] - t[1]) / F(3.5 - t[0], 3.5 - t[1])), G(t, [3.5, 3.5], 1.64))
}, 

setInterval(function() {
    q = -u + (u = new Date / 256 / 2), h = 37, L += (A[h + 2] - A[h]) * q, h++, ci = Math.sin(L), co = Math.cos(L);

    for (var s = 0; 2 > s; s++) 
        K[s] -= i[K[0] - (1 - s) * ci * (A[h + 2] - A[h]) * q & 255 | (K[1] - s * co * (A[h + 2] - A[h]) * q & 255) << 8] > 1 ? 0 : (ci - s * ci + s * co) * (A[h + 2] - A[h]) * q;

    for (var o = [], a = 0; e > a; a++) {
        for (var f = 2 * a / e - 1, f = [f * co / 4 + ci / 4, co / 4 - f * ci / 4], l = 255, h = F(f[0], f[1]), d = 0; 2 > d; d++) {
            var v = f[d],
                m = K[d] - ~~K[d],
                g = 1 / v;
            0 < v ? m = 1 - m : g = -g;

            for (var y = g * m, s = 0; 2 > s; s++) o[s] = K[s] + f[s] * y;

            for (0 > v && o[d]--; y < l;) {
                if ((H = i[o[0] | o[1] << 8]) > 1) {
                    for (var s = 0; 3 > s; s++) i[o[0] | o[1] - 1 + s << 8] == 1 && d && (H = 4);
                    l = y, p = 64 * ((64 * (o[0] + o[1]) & 63) + 64 * d + 128 * H)
                }
                H == 1 && (w = F(x = (o[0] - K[0] + .5) / f[0] * f[1], o[0] - K[0] + .5) / h) && w < l && (j = x - I(3 - F(o[0] - K[0], o[1] - K[1])) + K[1] - ~~o[1]) > 0 && (l = w, p = 64 * (64 * j | 0 + 128));
                for (var s = 0; 2 > s; s++) o[s] += f[s] * g;
                y += g
            }
        }

        var b = l / e,
            f = -t * b / 2,
            l = 4 * a,
            d = 4 * e - 4;

        for (var s = 0; t > s; s++) 
            M = 1 < Math.abs(f) ? 0 > f ? 3684408 : 7368816 : r[32 * (1 + f) | 0 + p], 
            f += b, 
            n[l++] = M >> 16 & 255, 
            n[l++] = M >> 8 & 255, 
            n[l++] = M & 255, 
            n[l++] = 255, 
            l += d
    }
    c.putImageData(k, 0, 0)
}, 32);

for (var s = 0; 256 * 256 > s; s++) 
    A[s] = 0, x = s & 255, y = s >> 8, 
    l = .9 < Math.random() ? 3 : 2, 
    i[s] = x & 255 
    && y & 255 ? x % 8 ? .7 < Math.random() 
    && 4 != y % 8 ? l : 0 : 4 == y % 8 ? 1 : l : l;


for (var s = 0; 6 > s; s++)
    for (var b = 0; 2 > b; b++)
        for (var o = 0; 64 > o; o++)
            for (var f = 0; 64 > f; f++) {
                l = o + 1 & 15, 
                p = f + 1 + (o + 1 >> 4 << 4) & 31, 
                h = B(12500670, 5987163, 
                l / 16 + .1 * Math.random());
                
                if (2 > p || 2 > l) h = 4737096;
                
                v = f - 32, m = o - 30, 
                h = M(h, [p, l], [1, 1, 31.5, 15, 2, .32, 1]);
                
                if (s == 3) p = [13, Math.min(9 - Math.pow(5 * (f / 64 - .5), 2), 9)], l = Math.sin(.4 * f + 2.7), d = [51, 55 + l], y = -.5 > v ? -.7 : .7, h = B(B(h, B(h, 0, .2), E([f - 2, o - 2], p, d)), B(0, B(B(B(B(B(B(B(B(B(16328987, 16777215, D(Math.min(Math.abs(v), Math.abs(m)), 2, 4)), 4737096, D(Math.min(Math.abs(v), Math.abs(m)), 3, 3)), 16777215, G([f, o], [32, 30], 12.5)), 0, J([f, o], [32, 30], 11)), 0, J([f, o], [32, 30], 9)), 4737096, E([(v - m) * y, (m + v) * y], [-1, -1], [1, 4])), 4737096, E([(v - m) * y, (m + v) * y], [-4.2, 4.2], [1, 6.16])), 4737096, E([(v - m) * y, (m + v) * y], [-1, -1], [4, 1])), 4737096, E([(v - m) * y, (m + v) * y], [4.2, -1], [6.16, 4.2])), .8 + .2 * l), E([f, o], p, d));
                
                if (s == 4) l = [32 - Math.abs(v), o], h = B(M(M(B(0, 2928815, .9 + .16 * Math.sin((3.5 + o / 16) / (f / 80 - 1.3) - 1 / 4)), l, [-1, -1, 28, 64, 2, .4, -1]), l, [6, 6, 23, 57, 2, .2, -1]), 0, E([f, o], [29, 0], [35, 64])), h = B(q(h, [l[0] % 22, l[1] % 28]), h, E(l, [6, 6], [24, 57]));
                
                if (s == 1) h = M(M(B(0, 2928815, .9 + .16 * Math.sin((3.5 + o / 16) / (f / 80 - 1.3) - 1 / 4)), [f, o], [-1, 0, 64, 66, 2, .4, -1]), [f, o], [6, 6, 57, 57, 2, .2, -1]), h = B(q(h, [f % 8, o % 8]), h, E([f, o], [6, 6], [57, 57]));
                
                r[64 * f + o + 16 * 256 * (b + 2 * s)] = B(h, 0, b / 3)
            }
