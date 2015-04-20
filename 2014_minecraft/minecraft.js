//
// Code by Reinder Nijhoff for js1k
// 2014
// compressed using Regpack v3.0.2
//
// Twitter: @reindernijhoff
// Website: http://www.birdgames.nl
//

t = [], n = [], e = (j = c.createImageData(M = a.width /= 4, k = a.height /= 4)).data;

r = function(e, t, n) {
    return (t >> 16) * n + (e >> 16) * (1 - n) << 16 | (t & 255 * 256) * n 
            + (e & 255 * 256) * (1 - n) & 255 * 256 | (t & 255) * n 
            + (e & 255) * (1 - n)
};

i = function(e, t, n) {
    return 4 + 3 * Math.sin(e / 8) * Math.sin(e / 8 + t / 5)
};

for (s = 0; 2e7 > s; s++) 
    o = s >> 18 & 63, n[s] = o <= i(s & 1023, s >> 10 & 255) ? 2 > o ? 1 : 2 : 0;

for (s = 0; 1023 > s; s++)
    for (o = 1023 * Math.random(), u = 255 * Math.random(), a = i(o, u), f = -1; 2 > f; f++)
        for (l = -1; 2 > l; l++)
            for (p = -1; 2 > p; p++) 
                2 < a 
                && (n[o | u << 10 | a + p + 1 << 18] = 5) 
                && 1 - f * l * p 
                && (n[o + f | u + l << 10 | a + p + 4 << 18] = 4);

for (a = 0; 16 > a; a++)
    for (s = 0; 3 > s; s++)
        for (o = 0; 16 > o; o++)
            for (u = 0; 16 > u; u++) 
                p = 1 - Math.random() / 3, 
                f = 2 > a ? 4210943 : 5 > a ? 6990400 : 9858122, 
                l = Math.sin(2 * u) + u / 8, 
                1 - s && (p /= 1.5 + s / 2) && 2 == a && o > l + 1 && (f = 9858122, p *= 1 - 1 / o), 
                t[u + 16 * (15 - o) + 256 * s + 1023 * a] = r(0, f, p);

setInterval(function() {
    var o = new Date / 10230,
        u = Math.cos(Math.sin(o)),
        a = Math.sin(Math.sin(o)),
        f = [16 * o % 1023, i(16 * o % 1023, 63 + 16 * Math.sin(o)) + 2, 63 + 16 * Math.sin(o)],
        h = [],
        p = [],
        d = m = l = 0;
    for (s = 0; k > s; s++)
        for (o = 0; M > o; o++) {
            var v = o / k - 1,
                g = [a * v + u, .51 - s / k, a - u * v],
                b = 32;
            for (q = 0; 3 > q; q++) {
                var w = g[q],
                    v = f[q] - ~~f[q],
                    D = 1 / w;
                0 < w ? v = 1 - v : D = -D;
                var I = D * v;
                for (d = 0; 3 > d; d++) p[d] = f[d] + (h[d] = g[d] * D) * v;
                for (0 > w && p[q]--; I < b;) {
                    (w = n[p[0] & 1023 | (p[1] & 63) << 18 | (p[2] & 255) << 10]) 
                    && (b = I, v = p[0], d = p[2], 1 - q 
                    && (v += d, d = p[1]), m = t[(16 * v & 15) + 16 * (16 * d & 15) + 1023 * w + 256 * q]);

                    for (d = 0; 3 > d; d++) p[d] += h[d];
                    I += D
                }
            }
            m = r(m, 3 * 4210943, b * b / 1023);
            e[l++] = m >> 16 & 255;
            e[l++] = m >> 8 & 255;
            e[l++] = m & 255;
            e[l++] = 255
        }
    c.putImageData(j, 0, 0)
}, 16)
