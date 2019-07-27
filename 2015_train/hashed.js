//
// Code by Reinder Nijhoff for js1k
// 2015
// compressed using Regpack v3.0.2
//
// Twitter: @reindernijhoff
// Website: https://reindernijhoff.net
//

t = 0,

// hash function
H = function(l) {
  for(f in l) self[f[0]+f[3]+[f[6]]+[f[16]]]=f
},

H(a), H(c),

// linear interpolation of heightmap
N = function(l) {
  return b[~~l] -l%1 * b[~~l] + l%1 * b[~~l+1]
},

setInterval(function(l) {
  if ( !t )
    for (
      // random colors
      e = 5+40 * Math.random(),
      n = .6 * Math.random(),
      h = "hsl(" + [200 + 80 * Math.random(), "100%", e + 20 * Math.random() + "%)"],
      l = "hsl(" + [200 * Math.random(), "50%", e+20 * Math.random()+"%)"],
      e *= 4,
      m = "hsl(" + [200 + 180 * Math.random(), "100%", e + 20 * Math.random() + "%)"],
      i = -1; 6 > i++;) {

        // heightmap values for layer
        for (f = 1e4; f--;) b[f] = Math.random();

        // setup layer and draw sprite (used for clouds and trees)
        for (
          M = a[wt] + 400 * (N[i] = i * i / (6 ^ i ? 8 : 2)),
          S = 80 * (7 - i) / (o = a[hg]),
          g = Math.random(),
          Z = z = a[cno](),
          z[hg] = z[wt] = 60,
          s = z[gCt]("2d"),
          H(w = s[caLi](0, 0, 0, 120)),
          w[aCo](0, m),
          w[aCo](1, h),
          s[fly] = !i&&w,
          f = 300; f--;)
            for (x = 30; f / 9 < x--;)
              s[flc](30 + x * Math.cos(f) * Math.cos(f * Math.sin(f)), 30 + x *  Math.sin(f), .9, .9);

        // stars
        for (
          a[i] = z = a[cno](),
          s = z[gCt]("2d"),
          s[fly] = w = s[caLi](0, 0, 0, o),
          w[aCo](0, h),
          w[aCo](1, m),
          s[flc](0, 0, M, o),
          s[fly] = "#eee", f = 1e4; f--;)
            s[flc]( M *  Math.random(), o*Math.random(), Math.random(),  80>e && Math.random() );


        // clouds
        for (
          f = 1e4; f--;)
            s[gbA] = g * b[i] * (1 - f / 1e4),
            s[dwa](Z, 30 * Math.random() * o / b[i] - 20 * o / 2, f / 1e4 * o / 2  - o / 20, o / 2 + Math.random() * o / 2 * (1 - f / 1e4), Math.random() * o / 2 * (1 - f / 1e4)  / 4);

        if (i) {
          // trees
          for (
            z[wt] = M,
            I = o / 2 + i * o / 20,
            6 ^ i || (I = o),
            x = M; 0 < (x -= .2 / S );)
              W = o/80 * (N(x / 50) + 5 * N(x / 200) + 10 * N(x / 400)),
              N(x / 300) + g/2 < Math.random()
              && 6 ^ i
              && s[dwa](Z, x - Math.random()   / S, I -   W * b[i] - Math.random()  / S*3 - 3/S  , 6   / S, 30   / S);

          // snow
          for(f=n>.5&&1e4;f--;)
            l = s[fly] = "#eee",
            s[flc]( M *  Math.random(), o*Math.random(), Math.random()/S, Math.random() );

          // height map
          for (
          s[le](M, o),
            x = M; 0 < (x -= 5);)
              W = o/80 * (N(x / 50) + 5 * N(x / 200) + 10 * N(x / 400)),
              s[le](x, I -   W * b[i] - Math.random()  / S);

          s[le](0, o),
          s[fl](),

          s[gbCp] = "source-atop",
          s[gbA] = n,
          s[fly] = l,
          s[flc](0, 0, M, o),
          s[gbA] = (7-i)/9,
          s[fly] = w = s[caLi](0, 0, 0, o),
          w[aCo](0, h),
          w[aCo](1, m),
          s[flc](0, 0, M, o)
        }
      }

  // draw layers
  for (i = -1; 6 > i++;)
    c[dwa](a[i], -t * N[i], 0),
    // reflections
    I = o / 2 - i * o / 20,
    n < .5 && b[i] > .8 && i%2 &&  (
      c[tna](0, o+I),
      c[sl](1, -1),
      c[dwa](a, 0, 2*i * o / 20, a[wt], I, 0, I, a[wt], I),
      c[tna](0, o+I),
      c[sl](1, -1)
    );
    // tunnel
    c[flc]( a[wt]*40-a[wt]*++t/10,0, a[wt], o),
    t %= 400
}, 16)
